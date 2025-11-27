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
        "relative inline-flex overflow-visible rounded-full group",
        className
      )} 
      {...props}
    >
      <div className="relative overflow-hidden rounded-full w-full">
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
          "relative z-1 border text-foreground text-base py-3 px-8 rounded-full w-full",
          "bg-[#FA6503] border-[#FA6503]/40 text-white",
          "group-hover:bg-[#FA6503] group-hover:border-[#FA6503] group-hover:scale-105",
          "group-hover:shadow-[0_0_50px_rgba(255,220,180,1.2),0_0_100px_rgba(255,210,170,1),0_0_150px_rgba(255,200,160,0.8),0_0_200px_rgba(255,190,150,0.5)]",
          "transition-all duration-300 ease-out",
          "dark:bg-[#FA6503] dark:border-[#FA6503]/40 dark:group-hover:bg-[#FA6503] dark:group-hover:border-[#FA6503]",
          "inline-flex items-center justify-center gap-3"
        )}>
          {children}
        </div>
      </div>
      {/* Zewnętrzny efekt świecenia - pseudo-element z blur */}
      <div 
        className={cn(
          "absolute opacity-0 pointer-events-none",
          "group-hover:opacity-100 transition-opacity duration-300",
          "-z-10"
        )}
        style={{
          top: '-30px',
          left: '-30px',
          right: '-30px',
          bottom: '-30px',
          background: 'linear-gradient(to right, rgba(255,220,180,0.9) 0%, rgba(255,210,170,0.7) 25%, rgba(255,210,170,0.7) 75%, rgba(255,220,180,0.9) 100%)',
          filter: 'blur(30px)',
          transform: 'scaleY(1) scaleX(1.2)',
          borderRadius: '9999px',
        }}
      />
    </Component>
  )
}