import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImagePath(path: string) {
  // Check if it's already an absolute URL or data URI
  if (path.startsWith('http') || path.startsWith('data:')) return path;
  
  // Ensure path starts with a slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Prepend basePath in production
  const isProd = process.env.NODE_ENV === 'production';
  const basePath = isProd ? '/Priyanshu-Patra' : '';
  
  return `${basePath}${normalizedPath}`;
}
