import { cn } from "@/lib/utils"

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6
type HeadingVariant = "default" | "hero" | "section"

interface TypographyHeadingProps {
  level?: HeadingLevel
  variant?: HeadingVariant
  children: React.ReactNode
  className?: string
}

const variantStyles: Record<HeadingVariant, string> = {
  default: "font-bold tracking-tight",
  hero: "text-2xl lg:text-4xl tracking-tight text-center font-bold",
  section: "text-2xl lg:text-4xl font-extrabold tracking-tight"
}

const levelDefaultStyles: Record<HeadingLevel, string> = {
  1: "text-4xl lg:text-5xl",
  2: "text-3xl lg:text-4xl",
  3: "text-2xl lg:text-3xl",
  4: "text-xl lg:text-2xl",
  5: "text-lg lg:text-xl",
  6: "text-base lg:text-lg"
}

export function Heading({ 
  level = 2, 
  variant = "default",
  children,
  className 
}: TypographyHeadingProps) {
  const Component = `h${level}` as const
  
  return (
    <Component 
      className={cn(
        levelDefaultStyles[level],
        variantStyles[variant],
        className
      )}
    >
      {children}
    </Component>
  )
} 