export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 dark:bg-neutral-950/60 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-3">

        <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 animate-pulse">
          Loading healthcare...
        </p>
      </div>
    </div>
  );
}