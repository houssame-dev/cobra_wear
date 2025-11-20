'use client';

/**
 * ProductCard Component
 * Simple card component for displaying products
 */

import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
  const { title, price, images, slug, inStock } = product;
  const image = images && images[0];

  return (
    <article 
      className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300"
      aria-label={`${title} product card`}
    >
      {/* Product Image */}
      <Link href={`/products/${slug}`} aria-label={`View ${title} details`}>
        <div className="relative aspect-square bg-gray-100 overflow-hidden cursor-pointer">
          {image ? (
            <Image
              src={image}
              alt={`${title} product image`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center" role="img" aria-label="Product image placeholder">
              <svg
                className="w-24 h-24 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
          
          {!inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center" role="status">
              <span className="bg-white px-4 py-2 rounded-lg font-bold text-sm">
                OUT OF STOCK
              </span>
            </div>
          )}
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-6">
        <Link href={`/products/${slug}`}>
          <h3 className="text-lg font-semibold mb-2 group-hover:underline cursor-pointer">
            {title}
          </h3>
        </Link>
        <p className="text-2xl font-bold mb-4" aria-label={`Price: ${price.toFixed(2)} dollars`}>
          ${price.toFixed(2)}
        </p>
        
        <Link
          href={`/products/${slug}`}
          className="block w-full bg-black text-white text-center py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          aria-label={`View ${title} details and purchase options`}
        >
          {inStock ? 'View Details' : 'View Product'}
        </Link>
      </div>
    </article>
  );
}

