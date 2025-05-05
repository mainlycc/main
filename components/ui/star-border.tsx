import { cn } from "@/lib/utils"
import { ElementType, ComponentPropsWithoutRef } from "react"

interface StarBorderProps<T extends ElementType> {
  as?: T
  color?: string
  speed?: string
  className?: string
  children: React.ReactNode
}

export function StarBorder<T extends ElementType = "button">({
  as,
  className,
  color,
  speed = "6s",
  children,
  ...props
}: StarBorderProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof StarBorderProps<T>>) {
  const Component = as || "button"
  const defaultColor = "#FA6503"

  return (
    <Component 
      className={cn(
        "relative inline-flex py-[1px] overflow-hidden rounded-full",
        className
      )} 
      {...props}
    >
      <div
        className={cn(
          "absolute w-[300%] h-[50%] bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0",
          "opacity-40" 
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor} 0%, ${defaultColor} 5%, transparent 15%)`,
          animationDuration: speed,
        }}
      />
      <div
        className={cn(
          "absolute w-[300%] h-[50%] top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0",
          "opacity-40"
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor} 0%, ${defaultColor} 5%, transparent 15%)`,
          animationDuration: speed,
        }}
      />
      <div className={cn(
        "relative z-1 border text-foreground text-base py-4 px-8 rounded-full w-full",
        "bg-gradient-to-b from-zinc-800/90 to-zinc-900/90 border-border/40",
        "hover:from-zinc-700/90 hover:to-zinc-800/90 transition-colors duration-300",
        "dark:from-zinc-800 dark:to-zinc-900 dark:border-border inline-flex items-center justify-center gap-3"
      )}>
        {children}
      </div>
    </Component>
  )
}