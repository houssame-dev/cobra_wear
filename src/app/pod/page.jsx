/**
 * POD (Print-On-Demand) Page
 * Modern, responsive custom product creation workflow
 */

import ImprovedPodUploadForm from '@/components/ImprovedPodUploadForm';

export const metadata = {
  title: 'Custom Print-On-Demand - Cobra Wear',
  description: 'Create your own custom designs with our Print-On-Demand service.',
};

export default function PodPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Create Your Custom Product
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Design your perfect piece in 6 easy steps. Choose your product, select colors and sizes, upload your designs, and we'll bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* POD Form Section */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImprovedPodUploadForm />
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-white border-t border-gray-200 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            <div className="text-center space-y-3 p-6 rounded-2xl hover:bg-gray-50 transition-colors group">
              <div className="text-4xl sm:text-5xl mb-3 transition-transform group-hover:scale-110">🎨</div>
              <h3 className="text-lg sm:text-xl font-bold">Your Design</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Upload any design and see it come to life on premium quality products
              </p>
            </div>
            <div className="text-center space-y-3 p-6 rounded-2xl hover:bg-gray-50 transition-colors group">
              <div className="text-4xl sm:text-5xl mb-3 transition-transform group-hover:scale-110">✨</div>
              <h3 className="text-lg sm:text-xl font-bold">Premium Quality</h3>
              <p className="text-sm sm:text-base text-gray-600">
                We use only the highest quality materials and printing techniques
              </p>
            </div>
            <div className="text-center space-y-3 p-6 rounded-2xl hover:bg-gray-50 transition-colors group sm:col-span-2 md:col-span-1">
              <div className="text-4xl sm:text-5xl mb-3 transition-transform group-hover:scale-110">🚚</div>
              <h3 className="text-lg sm:text-xl font-bold">Fast Delivery</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Cash on delivery available. We'll contact you to confirm your order
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
