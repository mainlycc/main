import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Łączy klasy CSS z clsx i tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Generuje wymiary obrazu zachowując proporcje
 */
export function getImageSize(originalWidth: number, originalHeight: number, maxWidth: number): { width: number, height: number } {
  const aspectRatio = originalWidth / originalHeight
  
  if (originalWidth <= maxWidth) {
    return { width: originalWidth, height: originalHeight }
  }
  
  const width = maxWidth
  const height = Math.round(width / aspectRatio)
  
  return { width, height }
}

/**
 * Opóźnia wykonanie funkcji o określony czas
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | undefined
  
  return function(...args: Parameters<T>) {
    const later = () => {
      timeout = undefined
      func(...args)
    }
    
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * Formatuje datę do formatu lokalnego
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
