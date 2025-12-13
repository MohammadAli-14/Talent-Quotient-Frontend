function SkeletonLoader({ type = "card", count = 1 }) {
  const skeletons = Array(count).fill(0);

  if (type === "card") {
    return (
      <div className="space-y-4">
        {skeletons.map((_, index) => (
          <div key={index} className="card bg-base-200 animate-pulse">
            <div className="card-body">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-base-300 rounded-xl"></div>
                <div className="space-y-2 flex-1">
                  <div className="h-4 bg-base-300 rounded w-3/4"></div>
                  <div className="h-3 bg-base-300 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (type === "stat") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skeletons.map((_, index) => (
          <div key={index} className="card bg-base-200 animate-pulse">
            <div className="card-body">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-base-300 rounded-2xl"></div>
                <div className="w-16 h-6 bg-base-300 rounded"></div>
              </div>
              <div className="space-y-2 mt-4">
                <div className="h-8 bg-base-300 rounded w-1/2"></div>
                <div className="h-4 bg-base-300 rounded w-3/4"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
}

export default SkeletonLoader;