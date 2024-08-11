import React from "react"

export default function SidebarButton({href, children} : SidebarButtonProps) {
  return (
    <a href={href} className="py-2 px-4 hover:bg-sidebar-button hover:text-white rounded-lg flex gap-2 transition-all">
        {children}
    </a>
  )
}

type SidebarButtonProps = {
  href: string,
  children: React.ReactNode
}