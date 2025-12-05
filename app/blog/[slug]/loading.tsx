export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section Skeleton */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb Skeleton */}
          <div className="mb-8 flex items-center space-x-2">
            <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-1 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-1 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-64 animate-pulse"></div>
          </div>

          {/* Category Badge Skeleton */}
          <div className="mb-4">
            <div className="h-6 bg-gray-200 rounded-full w-32 animate-pulse"></div>
          </div>

          {/* Title Skeleton */}
          <div className="mb-6">
            <div className="h-12 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
            <div className="h-12 bg-gray-200 rounded w-3/4 animate-pulse"></div>
          </div>

          {/* Excerpt Skeleton */}
          <div className="mb-8">
            <div className="h-6 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded w-5/6 animate-pulse"></div>
          </div>

          {/* Meta Info Skeleton */}
          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center space-x-6">
              <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content Skeleton */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
            </div>
          ))}
        </div>
      </article>
    </div>
  )
}
