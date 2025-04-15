import Image, { ImageProps } from 'next/image'
import React from 'react'

type OptimizedImageProps = ImageProps & {
  className?: string
}

export function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  className,
  priority,
  ...props 
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt || ""}
      width={width}
      height={height}
      className={className || ""}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      {...props}
    />
  )
}

export default OptimizedImage 