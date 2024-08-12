export default function Button({href, children} : ButtonProps) {
  return (
    <a className="w-fit border py-2 px-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all tracking-wide shadow-lg shadow-blue-300/25 hover:shadow-blue-300/0 flex justify-center gap-2" href={href}>
        {children}
    </a>
  )
}

type ButtonProps = {
    href: string,
    children: React.ReactNode,
}