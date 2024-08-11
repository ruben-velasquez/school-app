export default function SidebarButton({href, children} : SidebarButtonProps) {
  return (
    <a href={href} className="py-2 px-4 hover:bg-sidebar-button rounded-lg flex gap-2 transition-all">
        <h1>A</h1>
        {children}
    </a>
  )
}

type SidebarButtonProps = {
  href: string,
  children: string
}