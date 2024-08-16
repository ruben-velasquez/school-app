export default function NoteCardSkeleton() {
  return (
    <section className="border-box-border border rounded-2xl p-4 flex flex-col gap-2 group">
      <div className="grid grid-cols-5 gap-4 mb-2">
        <div className="h-2 bg-gray-100/35 rounded col-span-3 animate-pulse"></div>
      </div>
      <div className="grid grid-cols-5 gap-2">
        <div className="h-2 bg-gray-100/30 rounded col-span-3 animate-pulse"></div>
        <div className="h-2 bg-gray-100/30 rounded col-span-2 animate-pulse"></div>
        <div className="h-2 bg-gray-100/30 rounded col-span-1 animate-pulse"></div>
        <div className="h-2 bg-gray-100/30 rounded col-span-2 animate-pulse"></div>
        <div className="h-2 bg-gray-100/30 rounded col-span-2 animate-pulse"></div>
        <div className="h-2 bg-gray-100/30 rounded col-span-3 animate-pulse"></div>
      </div>
    </section>
  );
}
