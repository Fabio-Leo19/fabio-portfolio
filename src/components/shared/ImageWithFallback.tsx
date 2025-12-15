import { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
}

/**
 * Image component with fallback support
 * Displays a fallback image or placeholder if the main image fails to load
 */
export function ImageWithFallback({ 
  src, 
  alt, 
  fallbackSrc, 
  className,
  ...props 
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleError = () => {
    setError(true);
    setLoading(false);
  };

  const handleLoad = () => {
    setLoading(false);
  };

  if (error && !fallbackSrc) {
    return (
      <div 
        className={`bg-gray-900 flex items-center justify-center ${className || ''}`}
        {...props}
      >
        <span className="text-gray-600 text-sm">Image not available</span>
      </div>
    );
  }

  return (
    <>
      {loading && (
        <div className={`bg-gray-900 animate-pulse ${className || ''}`} {...props} />
      )}
      <img
        src={error ? fallbackSrc : src}
        alt={alt}
        onError={handleError}
        onLoad={handleLoad}
        className={`${loading ? 'hidden' : ''} ${className || ''}`}
        {...props}
      />
    </>
  );
}
