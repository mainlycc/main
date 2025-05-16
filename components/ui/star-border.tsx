import { cn } from "@/lib/utils"
import { ElementType, ComponentPropsWithoutRef } from "react"

interface StarBorderProps<T extends ElementType> {
  as?: T
  speed?: string
  className?: string
  children: React.ReactNode
}

export function StarBorder<T extends ElementType = "button">({
  as,
  className,
  speed = "6s",
  children,
  ...props
}: StarBorderProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof StarBorderProps<T>>) {
  const Component = as || "button"
  const defaultColor = "#FFFFFF"

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
        "bg-[#FA6503] border-[#FA6503]/40 text-white",
        "hover:bg-[#FA6503]/90 transition-colors duration-300",
        "dark:bg-[#FA6503] dark:border-[#FA6503]/40 inline-flex items-center justify-center gap-3"
      )}>
        {children}
      </div>
    </Component>
  )
}