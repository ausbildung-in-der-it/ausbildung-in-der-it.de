import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavigationTileProps {
  href: string
  title: string
  icon?: React.ReactNode
  className?: string
}

export function NavigationTile({
  href,
  title,
  icon = <ArrowRight className="w-6 h-6" />,
  className,
}: NavigationTileProps) {
  return (
    <Link href={href}>
      <div className={cn(
        "flex items-center lg:justify-center gap-3 border-t-2 border-r-2 p-6",
        "bg-gray-50 hover:bg-gray-100 transition",
        "hover:underline hover:cursor-pointer",
        "text-gray-800 tracking-tight font-semibold text-center",
        className
      )}>
        {icon}
        <h3>{title}</h3>
      </div>
    </Link>
  )
} 