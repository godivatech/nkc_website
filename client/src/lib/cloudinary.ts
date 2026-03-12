/**
 * Cloudinary Image Transformation Utility
 * Optimized for high-quality and high-performance image delivery.
 */

interface TransformOptions {
  width?: number;
  height?: number;
  quality?: number | 'auto';
  format?: 'auto' | 'webp' | 'avif';
  crop?: 'fill' | 'scale' | 'thumb' | 'fit';
  aspectRatio?: string;
}

/**
 * Transforms a regular Cloudinary URL into an optimized version with requested transformations.
 * Ensures f_auto and q_auto are applied by default for performance.
 */
export function getOptimizedImageUrl(url: string, options: TransformOptions = {}): string {
  if (!url || !url.includes('cloudinary.com')) return url;

  const {
    width,
    height,
    quality = 'auto',
    format = 'auto',
    crop = 'fill',
    aspectRatio
  } = options;

  // Split the URL to find the insertion point after '/upload/'
  const parts = url.split('/upload/');
  if (parts.length !== 2) return url;

  const baseUrl = parts[0];
  const restOfUrl = parts[1];

  // Define transformations
  const transforms: string[] = [];

  // Default performance optimizations
  transforms.push(`f_${format}`);
  transforms.push(`q_${quality}`);

  if (width) transforms.push(`w_${width}`);
  if (height) transforms.push(`h_${height}`);
  if (aspectRatio) transforms.push(`ar_${aspectRatio}`);
  
  // Only apply crop if resizing
  if (width || height || aspectRatio) {
    transforms.push(`c_${crop}`);
  }

  const transformString = transforms.join(',');

  return `${baseUrl}/upload/${transformString}/${restOfUrl}`;
}
