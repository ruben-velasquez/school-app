export default function BoxSection({children} : BoxSectionProps) {
  return (
    <section className="border-box-border border rounded-2xl p-4 flex flex-col gap-2">
      {children}
    </section>
  )
}

type BoxSectionProps = {
    children: React.ReactNode
}