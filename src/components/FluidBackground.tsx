"use client";

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function FluidBackground() {
  const [mousePosition, setMousePosition] = useState<{x: number, y: number}>({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState<{width: number, height: number}>({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  const timeRef = useRef<number>(0);
  const [lines, setLines] = useState<{path: string, color: string, width: number}[]>([]);
  const prevLinesRef = useRef<string>(''); // 用于比较线条是否有变化
  const [pulseRings, setPulseRings] = useState<{id: number, x: number, y: number}[]>([]);
  const nextPulseId = useRef(0);
  const prevMousePos = useRef({ x: 0, y: 0 });
  const isMounted = useRef(true);

  // 定义常量
  const NUM_LINES = 48; // 保持线条数量
  const LINE_LENGTH_FACTOR = 0.9; // 线条长度
  const NOISE_SPEED = 0.0003; // 增加噪声速度，让动画更明显
  const MOUSE_INFLUENCE = 0.2; // 保持鼠标影响
  const CENTER_FIXED = true; // 确保中心点固定在屏幕中央
  const ANIMATION_THROTTLE = 16; // 限制动画帧率，大约60fps
  // 优化颜色效果
  const COLOR_PALETTE = [
    'rgba(32, 156, 238, 0.55)',   // 未来蓝
    'rgba(87, 202, 244, 0.45)',   // 浅蓝
    'rgba(25, 118, 210, 0.5)',    // 深蓝
    'rgba(66, 165, 245, 0.4)',    // 天蓝
    'rgba(79, 195, 247, 0.35)'    // 超浅蓝
  ];

  // 初始化和清理
  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    setDimensions({ width, height });
    isMounted.current = true;

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      isMounted.current = false;
      window.removeEventListener('resize', handleResize);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  // 平滑鼠标移动
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isMounted.current) return;
      
      // 简单的鼠标平滑处理
      const newX = prevMousePos.current.x + (e.clientX - prevMousePos.current.x) * 0.1;
      const newY = prevMousePos.current.y + (e.clientY - prevMousePos.current.y) * 0.1;
      
      setMousePosition({
        x: newX,
        y: newY
      });
      
      prevMousePos.current = { x: newX, y: newY };
    };

    prevMousePos.current = mousePosition; // 初始化前一个鼠标位置
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  // 添加鼠标点击水波纹效果
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!isMounted.current) return;
      
      const clickPos = { x: e.clientX, y: e.clientY };
      
      // 添加水波纹效果
      const newRings: {id: number, x: number, y: number}[] = [];
      newRings.push({
        id: nextPulseId.current++,
        x: clickPos.x,
        y: clickPos.y
      });
      
      setPulseRings(prevRings => [...prevRings, ...newRings]);
      
      // 清除旧的水波纹
      setTimeout(() => {
        if (isMounted.current) {
          setPulseRings(prevRings => 
            prevRings.filter(ring => !newRings.some(newRing => newRing.id === ring.id))
          );
        }
      }, 1200);
    };

    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  // 生成放射状线条 - 更顺滑的动画
  const generateRadialLines = (
    centerX: number, 
    centerY: number, 
    time: number, 
    mouseX: number, 
    mouseY: number
  ) => {
    const newLines: {path: string, color: string, width: number}[] = [];
    const maxDimension = Math.max(dimensions.width, dimensions.height);
    const baseLength = maxDimension * LINE_LENGTH_FACTOR;
    
    // 固定中心点在屏幕中央
    const originX = CENTER_FIXED ? dimensions.width / 2 : centerX;
    const originY = CENTER_FIXED ? dimensions.height / 2 : centerY;
    
    // 鼠标影响 - 降低影响力度
    const dx = mouseX - originX;
    const dy = mouseY - originY;
    const mouseDistance = Math.sqrt(dx * dx + dy * dy);
    const mouseAngle = Math.atan2(dy, dx);
    
    for (let i = 0; i < NUM_LINES; i++) {
      // 基础角度（均匀分布在圆周上）
      const angle = (i / NUM_LINES) * Math.PI * 2;
      
      // 添加时间变化和随机扰动 - 适度幅度
      const timeOffset = Math.sin(time * NOISE_SPEED + i * 0.1) * 0.05;
      const angleWithNoise = angle + timeOffset;
      
      // 添加鼠标影响 - 更加柔和
      let finalAngle = angleWithNoise;
      if (mouseDistance < maxDimension * 0.3) {
        const influence = (1 - mouseDistance / (maxDimension * 0.3)) * MOUSE_INFLUENCE;
        const angleDiff = Math.abs(((angle - mouseAngle) + Math.PI) % (Math.PI * 2) - Math.PI);
        if (angleDiff < Math.PI / 4) {
          // 在鼠标方向的线条被吸引 - 非常轻微
          finalAngle = angleWithNoise * (1 - influence) + mouseAngle * influence;
        } else {
          // 远离鼠标方向的线条微微排斥
          finalAngle = angleWithNoise + (angleWithNoise - mouseAngle) * influence * 0.05;
        }
      }
      
      // 线条长度添加波动效果 - 适当的波动幅度
      const lengthVariation = 0.95 + Math.sin(time * NOISE_SPEED * 0.7 + i * 0.2) * 0.05;
      const lineLength = baseLength * lengthVariation;
      
      // 计算终点 - 直线计算更快
      const endX = originX + Math.cos(finalAngle) * lineLength;
      const endY = originY + Math.sin(finalAngle) * lineLength;
      
      // 使用直线代替贝塞尔曲线，性能更好
      const path = `M ${originX},${originY} L ${endX},${endY}`;
      
      // 选择颜色 - 预先计算好，避免过多计算
      const colorIndex = Math.floor((i % NUM_LINES) / (NUM_LINES / COLOR_PALETTE.length));
      const color = COLOR_PALETTE[colorIndex];
      
      // 设置线条粗细 - 添加少量变化
      const strokeWidth = 0.6 + Math.sin(time * NOISE_SPEED * 0.5 + i * 0.15) * 0.2;
      
      newLines.push({ path, color, width: strokeWidth });
    }
    
    return newLines;
  };

  // 更高效的动画循环
  useEffect(() => {
    let prevTime = 0;
    let isFirstRender = true;
    let lastUpdateTime = 0;
    
    // 预渲染初始线条
    const centerX = dimensions.width / 2;
    const centerY = dimensions.height / 2;
    const initialLines = generateRadialLines(
      centerX, 
      centerY, 
      0, 
      centerX, 
      centerY
    );
    setLines(initialLines);
    
    const animate = (timestamp: number) => {
      if (!isMounted.current) return;
      
      // 计算时间增量，使动画帧率独立
      const deltaTime = timestamp - prevTime;
      prevTime = timestamp;
      
      // 限制更新频率
      if (timestamp - lastUpdateTime < ANIMATION_THROTTLE && !isFirstRender) {
        requestRef.current = requestAnimationFrame(animate);
        return;
      }
      
      lastUpdateTime = timestamp;
      
      // 平滑时间增量，动画更连贯
      timeRef.current += deltaTime * 0.001; // 转换为秒，恢复原始速度
      
      const centerX = dimensions.width / 2;
      const centerY = dimensions.height / 2;
      
      const radialLines = generateRadialLines(
        centerX, 
        centerY, 
        timeRef.current, 
        mousePosition.x, 
        mousePosition.y
      );
      
      // 首次渲染或鼠标移动时更新线条
      if (isFirstRender) {
        isFirstRender = false;
        setLines(radialLines);
      } else {
        // 使用requestAnimationFrame进行异步更新，减少卡顿
        window.requestAnimationFrame(() => {
          if (isMounted.current) {
            setLines(radialLines);
          }
        });
      }
      
      requestRef.current = requestAnimationFrame(animate);
    };
    
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [dimensions]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#000000] z-0">
        <div className="absolute inset-0 bg-gradient-radial from-[#060818] to-[#000000] opacity-80"></div>
      </div>
      <svg width="100%" height="100%" className="absolute z-10 will-change-contents">
        {/* 水波纹效果 */}
        {pulseRings.map((ring, idx) => (
          <g key={ring.id}>
            {/* 第一个波纹圈 */}
            <motion.circle
              cx={ring.x}
              cy={ring.y}
              r="4"
              fill="none"
              stroke="rgba(32, 156, 238, 0.65)"
              strokeWidth="2"
              initial={{ r: 4, opacity: 0.8 }}
              animate={{ 
                r: [4, Math.min(dimensions.width, dimensions.height) * 0.12],
                opacity: [0.8, 0],
                strokeWidth: [2, 0.2]
              }}
              transition={{ 
                duration: 1, 
                ease: "easeOut",
                delay: idx * 0.05
              }}
            />
            {/* 第二个波纹圈 */}
            <motion.circle
              cx={ring.x}
              cy={ring.y}
              r="3"
              fill="none"
              stroke="rgba(87, 202, 244, 0.5)"
              strokeWidth="1.5"
              initial={{ r: 3, opacity: 0.6 }}
              animate={{ 
                r: [3, Math.min(dimensions.width, dimensions.height) * 0.08],
                opacity: [0.6, 0],
                strokeWidth: [1.5, 0.1]
              }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                delay: 0.05 + idx * 0.05
              }}
            />
          </g>
        ))}
        
        {/* 放射线条 - 优化渲染以避免闪烁 */}
        <g className="radial-lines-container">
          {lines.map((line, index) => (
            <motion.path
              key={`line-${index}`}
              d={line.path}
              stroke={line.color}
              strokeWidth={line.width}
              fill="none"
              className="radial-line"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 0.7,
                transition: { 
                  opacity: { duration: 2, ease: "easeInOut" } 
                } 
              }}
              style={{ willChange: 'opacity, stroke-width' }}
              whileHover={{
                opacity: 0.9,
                strokeWidth: line.width * 2,
                filter: "drop-shadow(0 0 2px rgba(32, 156, 238, 0.7))",
                transition: { duration: 0.6 }
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
} 