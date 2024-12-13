import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImageTileProps {
  title: string
  href: string
  imageUrl: string
  className?: string
}

export function ImageTile({ 
  title, 
  href,
  imageUrl,
  className 
}: ImageTileProps) {
  return (
    <Link 
      href={href} 
      className="flex justify-between items-end outline-0 focus:ring-black focus:ring focus:ring-offset-2 rounded-lg group"
    >
      <article className="relative isolate flex flex-col w-full h-full justify-end overflow-hidden rounded-lg shadow-xl bg-gray-900 px-4 pb-4 pt-10 lg:pt-40">
        <img 
          alt="" 
          src={imageUrl} 
          className="absolute inset-0 -z-10 size-full object-cover group-hover:scale-110 transition ease-in-out duration-300 opacity-80 lg:opacity-100" 
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/80 lg:via-gray-900/50 opacity-100 group-hover:opacity-80 group-focus:opacity-80 transition duration-500" />
        <div className="mt-3 text-lg font-semibold text-white flex items-end">
          <h3 className="flex-1">{title}</h3>
          <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition flex-shrink-0" />
        </div>
      </article>
    </Link>
  )
} 