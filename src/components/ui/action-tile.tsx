import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ActionTileProps {
  title: string
  href: string
  className?: string
}

export function ActionTile({ 
  title, 
  href,
  className 
}: ActionTileProps) {
  return (
    <Link 
      href={href}
      className={cn(
        "rounded-lg border-none focus:ring-black outline-0 focus:bg-zinc-600 ring-offset-2 flex items-end focus:ring bg-zinc-700 text-zinc-100 px-3 pb-3 pt-12 group hover:bg-zinc-600 transition-colors",
        className
      )}
    >
      <div className="flex items-center justify-between w-full">
        <h3 className="text-2xl font-bold tracking-tight m-0">{title}</h3>
        <ChevronRight className="w-6 h-6 font-bold group-hover:translate-x-2 transition-transform" />
      </div>
    </Link>
  )
} 