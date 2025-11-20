/**
 * Skeleton Loading Components
 * Provides loading placeholders for better UX
 */

export function ProductCardSkeleton() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <div className="aspect-square bg-gray-200"></div>
      
      {/* Content skeleton */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
        
        {/* Price */}
        <div className="h-8 bg-gray-200 rounded w-1/3"></div>
        
        {/* Button */}
        <div className="h-12 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}

export function CartItemSkeleton() {
  return (
    <div className="flex gap-4 p-4 bg-white border border-gray-200 rounded-lg animate-pulse">
      {/* Image skeleton */}
      <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0"></div>
      
      {/* Content skeleton */}
      <div className="flex-1 space-y-3">
        <div className="h-5 bg-gray-200 rounded w-2/3"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
      </div>
      
      {/* Price skeleton */}
      <div className="flex flex-col justify-between items-end">
        <div className="h-6 w-16 bg-gray-200 rounded"></div>
        <div className="h-8 w-8 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}

export function ProductDetailSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-pulse">
      {/* Image skeleton */}
      <div className="aspect-square bg-gray-200 rounded-2xl"></div>
      
      {/* Details skeleton */}
      <div className="space-y-6">
        {/* Title */}
        <div className="h-10 bg-gray-200 rounded w-3/4"></div>
        
        {/* Price */}
        <div className="h-12 bg-gray-200 rounded w-1/3"></div>
        
        {/* Description */}
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
        
        {/* Size selector */}
        <div className="space-y-3">
          <div className="h-5 bg-gray-200 rounded w-24"></div>
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-12 w-12 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
        
        {/* Color selector */}
        <div className="space-y-3">
          <div className="h-5 bg-gray-200 rounded w-24"></div>
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-10 w-10 bg-gray-200 rounded-full"></div>
            ))}
          </div>
        </div>
        
        {/* Buttons */}
        <div className="flex gap-4">
          <div className="h-14 bg-gray-200 rounded-lg flex-1"></div>
          <div className="h-14 bg-gray-200 rounded-lg flex-1"></div>
        </div>
      </div>
    </div>
  );
}

export function CartSummarySkeleton() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 space-y-4 animate-pulse">
      <div className="h-6 bg-gray-200 rounded w-1/2"></div>
      
      <div className="space-y-3 py-4">
        <div className="flex justify-between">
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>
        <div className="flex justify-between">
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>
        <div className="flex justify-between pt-3 border-t">
          <div className="h-6 bg-gray-200 rounded w-1/3"></div>
          <div className="h-6 bg-gray-200 rounded w-1/4"></div>
        </div>
      </div>
      
      <div className="h-12 bg-gray-200 rounded-lg"></div>
    </div>
  );
}

export function TextSkeleton({ lines = 3, className = '' }) {
  return (
    <div className={`space-y-2 animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div 
          key={i} 
          className="h-4 bg-gray-200 rounded"
          style={{ width: i === lines - 1 ? '80%' : '100%' }}
        ></div>
      ))}
    </div>
  );
}

