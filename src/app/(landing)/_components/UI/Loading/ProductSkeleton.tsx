export default function ProductSkeleton() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-6 gap-2">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="aspect-square rounded bg-gray-200" />
          <div className="w-3/4 h-3 mt-2 rounded bg-gray-200" />
          <div className="w-1/2 h-3 mt-1 rounded bg-gray-200" />
        </div>
      ))}
    </div>
  );
}
