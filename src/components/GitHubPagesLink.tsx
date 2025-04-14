'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';

type GitHubPagesLinkProps = Omit<LinkProps, 'href'> & {
  href: string;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export default function GitHubPagesLink({
  href,
  children,
  className,
  style,
  ...props
}: GitHubPagesLinkProps) {
  const pathname = usePathname();
  
  // Convert internal links to relative paths for GitHub Pages
  let finalHref = href;
  if (href.startsWith('/')) {
    // For absolute paths, make them relative to the current path
    // This helps with GitHub Pages deployments
    finalHref = `.${href}`;
    
    // If we're already on a nested page, we need proper relative paths
    if (pathname !== '/') {
      const pathSegments = pathname.split('/').filter(Boolean).length;
      if (pathSegments > 0) {
        finalHref = '../'.repeat(pathSegments) + href.substring(1);
      }
    }
  }

  return (
    <Link href={finalHref} className={className} style={style} {...props}>
      {children}
    </Link>
  );
} 