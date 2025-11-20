'use client';

/**
 * Multi-File Upload Component
 * Handles multiple design uploads with drag-and-drop, preview, and validation
 */

import { useState, useRef } from 'react';
import { IMAGE_VALIDATION } from '@/lib/pod-products';

export default function MultiFileUpload({ uploadAreas, onFilesChange, disabled = false }) {
  const [files, setFiles] = useState({});
  const [previews, setPreviews] = useState({});
  const [errors, setErrors] = useState({});
  const [dragActive, setDragActive] = useState({});
  const fileInputRefs = useRef({});

  // Validate image file
  const validateImage = (file, areaId) => {
    // Check file size
    if (file.size > IMAGE_VALIDATION.maxSize) {
      return 'File size must be less than 10MB';
    }

    // Check file type
    if (!IMAGE_VALIDATION.acceptedFormats.includes(file.type)) {
      return 'Only JPG, PNG, and WebP images are allowed';
    }

    // Check dimensions (async, will validate after load)
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        if (img.width < IMAGE_VALIDATION.minWidth || img.height < IMAGE_VALIDATION.minHeight) {
          resolve(`Image must be at least ${IMAGE_VALIDATION.minWidth}×${IMAGE_VALIDATION.minHeight}px`);
        } else {
          resolve(null);
        }
      };
      img.onerror = () => resolve('Invalid image file');
      img.src = URL.createObjectURL(file);
    });
  };

  // Handle file selection
  const handleFileSelect = async (areaId, file) => {
    if (!file) return;

    // Validate
    const error = await validateImage(file, areaId);
    if (error) {
      setErrors((prev) => ({ ...prev, [areaId]: error }));
      return;
    }

    // Clear error
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[areaId];
      return newErrors;
    });

    // Create preview
    const previewUrl = URL.createObjectURL(file);
    setPreviews((prev) => ({ ...prev, [areaId]: previewUrl }));

    // Store file
    const newFiles = { ...files, [areaId]: file };
    setFiles(newFiles);

    // Notify parent
    if (onFilesChange) {
      onFilesChange(newFiles);
    }
  };

  // Handle file input change
  const handleInputChange = (areaId, e) => {
    const file = e.target.files[0];
    if (file) {
      handleFileSelect(areaId, file);
    }
  };

  // Handle drag events
  const handleDrag = (areaId, e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragIn = (areaId, e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive((prev) => ({ ...prev, [areaId]: true }));
  };

  const handleDragOut = (areaId, e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive((prev) => ({ ...prev, [areaId]: false }));
  };

  const handleDrop = (areaId, e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive((prev) => ({ ...prev, [areaId]: false }));

    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileSelect(areaId, file);
    }
  };

  // Handle file removal
  const handleRemove = (areaId) => {
    // Revoke preview URL
    if (previews[areaId]) {
      URL.revokeObjectURL(previews[areaId]);
    }

    // Remove file and preview
    const newFiles = { ...files };
    const newPreviews = { ...previews };
    delete newFiles[areaId];
    delete newPreviews[areaId];

    setFiles(newFiles);
    setPreviews(newPreviews);

    // Clear error
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[areaId];
      return newErrors;
    });

    // Notify parent
    if (onFilesChange) {
      onFilesChange(newFiles);
    }

    // Reset input
    if (fileInputRefs.current[areaId]) {
      fileInputRefs.current[areaId].value = '';
    }
  };

  return (
    <div className="space-y-6">
      {uploadAreas.map((area) => (
        <div key={area.id} className="border-2 border-gray-200 rounded-xl p-6">
          {/* Area Header */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold text-lg flex items-center gap-2">
                {area.name}
                {area.required && <span className="text-red-500">*</span>}
              </h3>
              {area.recommended && (
                <p className="text-sm text-gray-500 mt-1">
                  Recommended: {area.recommended}
                </p>
              )}
            </div>
          </div>

          {/* Upload Area or Preview */}
          {!previews[area.id] ? (
            <div
              className={`border-2 border-dashed rounded-lg p-8 transition-all ${
                dragActive[area.id]
                  ? 'border-black bg-gray-50'
                  : 'border-gray-300 hover:border-gray-400'
              } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              onDragEnter={(e) => handleDragIn(area.id, e)}
              onDragLeave={(e) => handleDragOut(area.id, e)}
              onDragOver={(e) => handleDrag(area.id, e)}
              onDrop={(e) => handleDrop(area.id, e)}
              onClick={() => !disabled && fileInputRefs.current[area.id]?.click()}
            >
              <input
                ref={(el) => (fileInputRefs.current[area.id] = el)}
                type="file"
                accept={IMAGE_VALIDATION.acceptedExtensions.join(',')}
                onChange={(e) => handleInputChange(area.id, e)}
                className="hidden"
                disabled={disabled}
              />

              <div className="text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="mt-4">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-black">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    PNG, JPG, WebP up to 10MB
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative group">
              <div className="relative rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={previews[area.id]}
                  alt={`${area.name} preview`}
                  className="w-full h-64 object-contain"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => fileInputRefs.current[area.id]?.click()}
                    className="opacity-0 group-hover:opacity-100 bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-all"
                    disabled={disabled}
                  >
                    Replace
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemove(area.id)}
                    className="opacity-0 group-hover:opacity-100 bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-all"
                    disabled={disabled}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <input
                ref={(el) => (fileInputRefs.current[area.id] = el)}
                type="file"
                accept={IMAGE_VALIDATION.acceptedExtensions.join(',')}
                onChange={(e) => handleInputChange(area.id, e)}
                className="hidden"
                disabled={disabled}
              />
            </div>
          )}

          {/* Error Message */}
          {errors[area.id] && (
            <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">{errors[area.id]}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

