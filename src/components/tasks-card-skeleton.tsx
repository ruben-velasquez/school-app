export default function TasksCardSkeleton() {
  return (
    <li className="border-b border-box-border p-3 grid grid-cols-8 gap-4 items-center *:text-sm group">
      <div className="flex items-center gap-2 col-span-3">
        <input
          disabled
          type="checkbox"
          name="completed"
          className="size-4 min-w-4 opacity-50 animate-pulse"
        />
        <div className="grid grid-cols-5 gap-4">
          <div className="h-2 bg-gray-100/35 rounded col-span-5 animate-pulse"></div>
        </div>
      </div>
      <div className="col-span-2 grid grid-cols-5 gap-4">
          <div className="h-2 bg-gray-100/35 rounded col-span-2 animate-pulse"></div>
          <div className="h-2 bg-gray-100/35 rounded col-span-1 animate-pulse"></div>
      </div>
      <div className="col-span-2 grid grid-cols-5">
        <div className="h-2 bg-gray-100/35 col-span-2 rounded animate-pulse"></div>
      </div>
    </li>
  );
}
