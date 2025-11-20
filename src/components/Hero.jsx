/**
 * Hero Component
 * Minimal black & white hero section with call-to-action buttons
 */

export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-15">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Premium Style.<br />
              Your Design.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover our exclusive collection of premium clothing or create your own custom designs with our Print-On-Demand service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/pod" className="btn-primary text-center">
                Customize Your Product
              </a>
              <a href="/products" className="btn-secondary text-center">
                Shop Collection
              </a>
            </div>
          </div>

          {/* Right Content - Mockup */}
          <div className="relative">
            <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center">
              {/* Placeholder for hoodie mockup */}
              <div className="text-center space-y-4">
                <div className="w-64 h-64 mx-auto bg-white rounded-xl shadow-lg flex items-center justify-center border border-gray-200">
                  <svg
                    className="w-32 h-32 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="text-sm text-gray-500 font-medium">
                  FEATURED HOODIE
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-black rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-black rounded-full opacity-10"></div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
            {[
              { name: 'T-Shirts', emoji: '👕', category: 'tshirts' },
              { name: 'Hoodies', emoji: '🧥', category: 'hoodies' },
              { name: 'Shorts', emoji: '🩳', category: 'shorts' },
              { name: 'Caps', emoji: '🧢', category: 'caps' },
              { name: 'Tote Bags', emoji: '👜', category: 'bags' }
            ].map((category) => (
              <a
                key={category.name}
                href={`/products?category=${category.category}`}
                className="bg-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow border border-gray-200 group"
              >
                <div className="text-4xl mb-3">{category.emoji}</div>
                <h3 className="font-semibold group-hover:underline">{category.name}</h3>
              </a>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-center mb-12 mt-16">
            Shop by Style
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Anime', emoji: '🎌', desc: 'Japanese inspired', style: 'anime' },
              { name: 'Gang', emoji: '🔥', desc: 'Street style', style: 'gang' },
              { name: 'Gaming', emoji: '🎮', desc: 'Gamer vibes', style: 'gaming' },
              { name: 'Classic', emoji: '⭐', desc: 'Timeless pieces', style: 'classic' }
            ].map((style) => (
              <a
                key={style.name}
                href={`/products?style=${style.style}`}
                className="bg-white p-8 rounded-lg text-center hover:shadow-lg transition-shadow border border-gray-200 group"
              >
                <div className="text-4xl mb-3">{style.emoji}</div>
                <h3 className="font-semibold group-hover:underline mb-2">{style.name}</h3>
                <p className="text-sm text-gray-500">{style.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

