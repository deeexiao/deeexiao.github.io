# 个人作品集网站

这是一个使用Next.js构建的个人作品集网站，带有流体动态背景效果。

## 部署到GitHub Pages (deeexiao.github.io)

### 自动部署方法

此项目配置了GitHub Actions工作流，可以自动部署到GitHub Pages。当你推送代码到main分支时，它会自动构建并部署网站。

### 手动部署步骤

1. 首先确保你的GitHub仓库设置正确：

   - 对于个人网站 (deeexiao.github.io)，创建一个名为 `deeexiao.github.io` 的仓库
   - 在该仓库的设置 → Pages 中，将部署来源设置为 "GitHub Actions"

2. 克隆此仓库到本地：
   ```bash
   git clone https://github.com/deeexiao/deeexiao.github.io.git
   cd deeexiao.github.io
   ```

3. 安装依赖：
   ```bash
   npm install
   ```

4. 构建项目：
   ```bash
   npm run export
   ```

5. 将构建文件夹推送到GitHub：
   ```bash
   touch dist/.nojekyll
   cp dist/index.html dist/404.html
   git add dist/
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

## 本地开发

1. 克隆仓库：
   ```bash
   git clone https://github.com/deeexiao/deeexiao.github.io.git
   cd deeexiao.github.io
   ```

2. 安装依赖：
   ```bash
   npm install
   ```

3. 启动开发服务器：
   ```bash
   npm run dev
   ```

4. 在浏览器中访问 [http://localhost:3000](http://localhost:3000)

## 技术栈

- Next.js 15
- React 19
- Tailwind CSS
- Framer Motion
- TypeScript

## Customizing Your Portfolio

### Adding Images

1. **Profile Image**
   - Add your profile photo to `/public/images/profile/`
   - Update the image component in `src/components/AboutSection.tsx`

2. **Project Images**
   - Add project images to `/public/images/projects/`
   - Name each file according to the project id (e.g., `caiyi.jpg`, `memory.jpg`)
   - Uncomment the Image component in `src/components/ProjectsSection.tsx`

3. **Interest Images**
   - Add interest images to `/public/images/interests/`
   - Name each file according to the interest id (e.g., `songwriting.jpg`, `cooking.jpg`)
   - Uncomment the Image component in `src/components/InterestsSection.tsx`

### Updating Content

You can update your portfolio content by editing these files:

- **About Me**: Update `src/components/AboutSection.tsx`
- **Projects**: Update project info in `src/components/ProjectsSection.tsx`
- **Experience**: Update work history in `src/components/ExperienceSection.tsx`
- **Education**: Update education history in `src/components/EducationSection.tsx`
- **Interests**: Update personal interests in `src/components/InterestsSection.tsx`

### Changing Colors and Styles

The main color scheme is defined in `src/app/globals.css`. You can modify the CSS variables to change the color scheme:

```css
:root {
  --foreground: #171717;
  --background: #ffffff;
  --accent: #6b7280;
  --primary: #3b82f6;
  --secondary: #e5e7eb;
  --muted: #f3f4f6;
}
```

## Building for Production

```bash
npm run build
npm run start
```

## Deploying Your Portfolio

You can deploy this portfolio on various platforms:

1. **Vercel**: Connect your GitHub repository to Vercel for automatic deployments
2. **Netlify**: Connect your GitHub repository to Netlify
3. **GitHub Pages**: Build your site and push to a gh-pages branch
