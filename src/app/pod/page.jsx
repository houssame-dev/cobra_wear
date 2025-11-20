/**
 * POD (Print-On-Demand) Page
 * Full workflow for custom product orders
 */

import ImprovedPodUploadForm from '@/components/ImprovedPodUploadForm';

export const metadata = {
  title: 'Custom Print-On-Demand - Coobraa',
  description: 'Create your own custom designs with our Print-On-Demand service.',
};

export default function PodPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Create Your Custom Product
            </h1>
            <p className="text-xl text-gray-600">
              Design your perfect piece in 6 easy steps. Choose your product, select colors and sizes, upload your designs, and we'll bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* POD Form Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImprovedPodUploadForm />
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="text-xl font-bold">Your Design</h3>
              <p className="text-gray-600">
                Upload any design and see it come to life on premium quality products
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="text-xl font-bold">Premium Quality</h3>
              <p className="text-gray-600">
                We use only the highest quality materials and printing techniques
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="text-xl font-bold">Fast Delivery</h3>
              <p className="text-gray-600">
                Cash on delivery available. We'll contact you to confirm your order
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

