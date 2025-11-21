'use client';

/**
 * Improved POD Upload Form Component
 * Enhanced Print-On-Demand workflow with:
 * - Product icons and better UI
 * - Multi-file upload system
 * - Smart size/color logic per product
 * - Phone model selector
 * - Drag-and-drop upload
 * - Image validation
 * - Better step flow
 */

import { useState } from 'react';
import { uploadToCloudinary } from '@/lib/cloudinary';
import { sendOrderEmail } from '@/lib/emailjs';
import { sendCustomerPODConfirmation } from '@/lib/customer-email';
import { validateForm, commonRules } from '@/lib/validation';
import { trackPODSubmission } from '@/lib/analytics';
import { POD_PRODUCTS, getProductById, getUploadAreas, getRequiredUploadAreas } from '@/lib/pod-products';
import { ProductIconLarge, ProductIconSmall } from '@/components/ProductIcons';
import MultiFileUpload from '@/components/MultiFileUpload';

export default function ImprovedPodUploadForm() {

  // Form state
  const [step, setStep] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    productType: '',
    size: '',
    phoneModel: '',
    color: '',
    designs: {},
    designUrls: {},
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    customerAddress: '',
    notes: '',
  });

  // UI state
  const [uploadedFiles, setUploadedFiles] = useState({});
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});

  // Get current product config
  const currentProduct = selectedProduct ? getProductById(selectedProduct) : null;
  const uploadAreas = currentProduct ? getUploadAreas(selectedProduct) : [];
  const requiredAreas = currentProduct ? getRequiredUploadAreas(selectedProduct) : [];

  // Handle product selection
  const handleProductSelect = (productId) => {
    const product = getProductById(productId);
    setSelectedProduct(productId);
    setFormData((prev) => ({
      ...prev,
      productType: product.name,
      size: product.requiresSize ? product.sizes[0] : '',
      color: product.colors[0],
      phoneModel: product.requiresPhoneModel ? product.phoneModels[0] : '',
    }));
    setStep(2);
  };

  // Handle form field changes
  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (fieldErrors[field]) {
      setFieldErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  // Handle files change from MultiFileUpload
  const handleFilesChange = (files) => {
    setUploadedFiles(files);
    setFormData((prev) => ({ ...prev, designs: files }));
  };

  // Upload all designs to Cloudinary
  const handleUploadDesigns = async () => {
    // Check if required files are uploaded
    const missingRequired = requiredAreas.filter((area) => !uploadedFiles[area.id]);
    if (missingRequired.length > 0) {
      setUploadError(`Please upload required designs: ${missingRequired.map((a) => a.name).join(', ')}`);
      return;
    }

    setIsUploading(true);
    setUploadError('');

    try {
      const uploadPromises = Object.entries(uploadedFiles).map(async ([areaId, file]) => {
        const result = await uploadToCloudinary(file);
        return [areaId, result.url];
      });

      const uploadResults = await Promise.all(uploadPromises);
      const designUrls = Object.fromEntries(uploadResults);

      setFormData((prev) => ({ ...prev, designUrls }));
      setStep(step + 1);
    } catch (error) {
      setUploadError('Failed to upload designs. Please try again.');
      console.error('Upload error:', error);
    } finally {
      setIsUploading(false);
    }
  };

  // Submit order
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFieldErrors({});

    // Validate form
    const validation = validateForm(formData, commonRules);
    if (!validation.isValid) {
      setFieldErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare order data
      const orderData = {
        ...formData,
        // Keep designUrls object for proper email formatting
        // designUrl will be generated in emailjs.js from designUrls
      };

      // Send order email to business
      await sendOrderEmail(orderData);

      // Send confirmation email to customer (non-blocking)
      sendCustomerPODConfirmation(orderData).catch((err) => {
        console.error('Failed to send customer confirmation:', err);
      });

      // Track POD submission in analytics
      trackPODSubmission(formData.productType);

      setSubmitSuccess(true);
      setStep(7); // Success screen
    } catch (error) {
      console.error('Submit error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reset form
  const resetForm = () => {
    setStep(1);
    setSelectedProduct(null);
    setFormData({
      productType: '',
      size: '',
      phoneModel: '',
      color: '',
      designs: {},
      designUrls: {},
      customerName: '',
      customerEmail: '',
      customerPhone: '',
      customerAddress: '',
      notes: '',
    });
    setUploadedFiles({});
    setSubmitSuccess(false);
  };

  const stepLabels = ['Product', 'Color', 'Size', 'Design', 'Preview', 'Details'];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Progress Steps - Compact Mobile Design */}
      <div className="mb-8 sm:mb-12">
        {/* Mobile: Current Step Indicator */}
        <div className="block sm:hidden mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-900">
              Step {step} of 6
            </span>
            <span className="text-xs text-gray-500 font-medium">
              {stepLabels[step - 1]}
            </span>
          </div>
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-black h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 6) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Desktop: Full Stepper */}
        <div className="hidden sm:block">
          <div className="flex justify-between items-center">
            {[1, 2, 3, 4, 5, 6].map((stepNum) => (
              <div key={stepNum} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 transition-all ${
                    step >= stepNum
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-gray-400 border-gray-300'
                  }`}
                >
                  {stepNum}
                </div>
                {stepNum < 6 && (
                  <div
                    className={`w-8 lg:w-16 h-1 mx-1 lg:mx-2 transition-all ${
                      step > stepNum ? 'bg-black' : 'bg-gray-300'
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-3 text-xs text-gray-600 font-medium">
            {stepLabels.map((label, index) => (
              <span key={index} className="text-center" style={{ width: '40px' }}>
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-sm">
        {/* Step 1: Product Selection */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Choose Your Product</h2>
              <p className="text-gray-600">Select the product you want to customize</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {POD_PRODUCTS.map((product) => (
                <button
                  key={product.id}
                  onClick={() => handleProductSelect(product.id)}
                  className="group relative border-2 border-gray-200 rounded-xl p-6 hover:border-black hover:shadow-lg transition-all"
                >
                  {product.recommended && (
                    <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-full font-semibold">
                      Recommended
                    </div>
                  )}
                  <ProductIconLarge type={product.icon} className="mx-auto mb-4" />
                  <h3 className="font-semibold text-center">{product.name}</h3>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Color Selection */}
        {step === 2 && currentProduct && (
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={() => setStep(1)}
                className="text-gray-600 hover:text-black flex items-center gap-2"
              >
                ← Back
              </button>
              <div className="flex items-center gap-3">
                <ProductIconSmall type={currentProduct.icon} />
                <span className="font-semibold">{currentProduct.name}</span>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-2">Choose Color</h2>
              <p className="text-gray-600">Select your preferred color</p>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
              {currentProduct.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => {
                    handleChange('color', color);
                    setStep(3);
                  }}
                  className={`p-6 border-2 rounded-xl font-semibold transition-all flex flex-col items-center gap-3 ${
                    formData.color === color
                      ? 'border-black bg-black text-white'
                      : 'border-gray-200 hover:border-black'
                  }`}
                >
                  <div
                    className={`w-16 h-16 rounded-full border-2 ${
                      color === 'White' || color === 'Natural' || color === 'Beige' || color === 'Clear'
                        ? 'border-gray-300'
                        : 'border-transparent'
                    }`}
                    style={{
                      backgroundColor:
                        color === 'Black'
                          ? '#000000'
                          : color === 'White'
                          ? '#FFFFFF'
                          : color === 'Grey' || color === 'Gray'
                          ? '#9CA3AF'
                          : color === 'Navy'
                          ? '#1E3A8A'
                          : color === 'Beige'
                          ? '#F5F5DC'
                          : color === 'Burgundy'
                          ? '#800020'
                          : color === 'Olive'
                          ? '#808000'
                          : color === 'Natural'
                          ? '#F5F5DC'
                          : color === 'Clear'
                          ? 'transparent'
                          : '#CCCCCC',
                    }}
                  ></div>
                  <span>{color}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Size / Phone Model Selection */}
        {step === 3 && currentProduct && (
          <div className="space-y-6">
            <button
              onClick={() => setStep(2)}
              className="text-gray-600 hover:text-black flex items-center gap-2 mb-6"
            >
              ← Back
            </button>

            {currentProduct.requiresSize && (
              <div>
                <h2 className="text-3xl font-bold mb-2">Choose Size</h2>
                <p className="text-gray-600">Select your size</p>

                <div className="grid grid-cols-5 gap-4 mt-6">
                  {currentProduct.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => {
                        handleChange('size', size);
                        setStep(4);
                      }}
                      className={`p-6 border-2 rounded-xl font-semibold text-xl transition-all flex items-center justify-center ${
                        formData.size === size
                          ? 'border-black bg-black text-white'
                          : 'border-gray-200 hover:border-black'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentProduct.requiresPhoneModel && (
              <div>
                <h2 className="text-3xl font-bold mb-2">Choose Phone Model</h2>
                <p className="text-gray-600">Select your device</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {currentProduct.phoneModels.map((model) => (
                    <button
                      key={model}
                      onClick={() => {
                        handleChange('phoneModel', model);
                        setStep(4);
                      }}
                      className={`p-4 border-2 rounded-xl font-medium transition-all text-left ${
                        formData.phoneModel === model
                          ? 'border-black bg-black text-white'
                          : 'border-gray-200 hover:border-black'
                      }`}
                    >
                      {model}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {!currentProduct.requiresSize && !currentProduct.requiresPhoneModel && (
              <div>
                <p className="text-center text-gray-600 mb-6">This product doesn't require size selection</p>
                <button
                  onClick={() => setStep(4)}
                  className="w-full btn-primary"
                >
                  Continue to Design Upload
                </button>
              </div>
            )}
          </div>
        )}

        {/* Step 4: Upload Designs */}
        {step === 4 && currentProduct && (
          <div className="space-y-6">
            <button
              onClick={() => setStep(3)}
              className="text-gray-600 hover:text-black flex items-center gap-2 mb-6"
            >
              ← Back
            </button>

            <div>
              <h2 className="text-3xl font-bold mb-2">Upload Your Designs</h2>
              <p className="text-gray-600">
                Upload your design files for each placement area
              </p>
            </div>

            <MultiFileUpload
              uploadAreas={uploadAreas}
              onFilesChange={handleFilesChange}
              disabled={isUploading}
            />

            {uploadError && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                {uploadError}
              </div>
            )}

            <button
              onClick={handleUploadDesigns}
              disabled={isUploading || Object.keys(uploadedFiles).length === 0}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isUploading ? 'Uploading Designs...' : 'Continue to Preview'}
            </button>
          </div>
        )}

        {/* Step 5: Preview */}
        {step === 5 && currentProduct && (
          <div className="space-y-6">
            <button
              onClick={() => setStep(4)}
              className="text-gray-600 hover:text-black flex items-center gap-2 mb-6"
            >
              ← Back
            </button>

            <div>
              <h2 className="text-3xl font-bold mb-2">Preview Your Design</h2>
              <p className="text-gray-600">Review your customization before checkout</p>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-xl mb-4">Order Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Product:</span>
                  <span className="font-semibold">{formData.productType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Color:</span>
                  <span className="font-semibold">{formData.color}</span>
                </div>
                {formData.size && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Size:</span>
                    <span className="font-semibold">{formData.size}</span>
                  </div>
                )}
                {formData.phoneModel && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Phone Model:</span>
                    <span className="font-semibold">{formData.phoneModel}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-gray-600">Design Areas:</span>
                  <span className="font-semibold">{Object.keys(formData.designUrls).length}</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-gray-300">
                  <span className="text-gray-600">Payment:</span>
                  <span className="font-semibold">Cash on Delivery</span>
                </div>
              </div>
            </div>

            {/* Design Previews */}
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(formData.designUrls).map(([areaId, url]) => {
                const area = uploadAreas.find((a) => a.id === areaId);
                return (
                  <div key={areaId} className="border-2 border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">{area?.name}</h4>
                    <img
                      src={url}
                      alt={area?.name}
                      className="w-full h-48 object-contain bg-gray-50 rounded"
                    />
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => setStep(6)}
              className="w-full btn-primary"
            >
              Continue to Shipping Details
            </button>
          </div>
        )}

        {/* Step 6: Shipping Details */}
        {step === 6 && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <button
              onClick={() => setStep(5)}
              className="text-gray-600 hover:text-black flex items-center gap-2 mb-6"
            >
              ← Back
            </button>

            <div>
              <h2 className="text-3xl font-bold mb-2">Shipping Details</h2>
              <p className="text-gray-600">Enter your delivery information</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="pod-name" className="block mb-2 font-medium">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="pod-name"
                  type="text"
                  value={formData.customerName}
                  onChange={(e) => handleChange('customerName', e.target.value)}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-black transition-colors ${
                    fieldErrors.customerName ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="John Doe"
                />
                {fieldErrors.customerName && (
                  <p className="mt-2 text-sm text-red-600">{fieldErrors.customerName}</p>
                )}
              </div>

              <div>
                <label htmlFor="pod-email" className="block mb-2 font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="pod-email"
                  type="email"
                  value={formData.customerEmail}
                  onChange={(e) => handleChange('customerEmail', e.target.value)}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-black transition-colors ${
                    fieldErrors.customerEmail ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="john@example.com"
                />
                {fieldErrors.customerEmail && (
                  <p className="mt-2 text-sm text-red-600">{fieldErrors.customerEmail}</p>
                )}
              </div>

              <div>
                <label htmlFor="pod-phone" className="block mb-2 font-medium">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  id="pod-phone"
                  type="tel"
                  value={formData.customerPhone}
                  onChange={(e) => handleChange('customerPhone', e.target.value)}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-black transition-colors ${
                    fieldErrors.customerPhone ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="+1 234 567 8900"
                />
                {fieldErrors.customerPhone && (
                  <p className="mt-2 text-sm text-red-600">{fieldErrors.customerPhone}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label htmlFor="pod-address" className="block mb-2 font-medium">
                  Shipping Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="pod-address"
                  value={formData.customerAddress}
                  onChange={(e) => handleChange('customerAddress', e.target.value)}
                  rows={3}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:border-black transition-colors resize-none ${
                    fieldErrors.customerAddress ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="123 Main St, City, State, ZIP"
                />
                {fieldErrors.customerAddress && (
                  <p className="mt-2 text-sm text-red-600">{fieldErrors.customerAddress}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label htmlFor="pod-notes" className="block mb-2 font-medium">
                  Additional Notes (Optional)
                </label>
                <textarea
                  id="pod-notes"
                  value={formData.notes}
                  onChange={(e) => handleChange('notes', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-black transition-colors resize-none"
                  placeholder="Any special instructions..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Placing Order...' : 'Place Order (COD)'}
            </button>
          </form>
        )}

        {/* Step 7: Success */}
        {step === 7 && submitSuccess && (
          <div className="text-center space-y-6 py-12">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold">Order Placed Successfully!</h2>
            <p className="text-gray-600 max-w-md mx-auto text-lg">
              Thank you for your custom order! We'll contact you soon to confirm the details and
              arrange delivery.
            </p>
            <div className="flex gap-4 justify-center pt-6">
              <button onClick={resetForm} className="btn-primary">
                Create Another Design
              </button>
              <a href="/" className="btn-secondary">
                Back to Home
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

