import React, { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';

interface ImageUploaderProps {
  onImageUpload: (imageDataUrl: string, file: File) => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload, fileInputRef }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };
  
  const processFile = (file: File) => {
    // Check if file is an image
    if (!file.type.match('image.*')) {
      alert('Please upload an image file');
      return;
    }
    
    // Check file size (limit to 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB');
      return;
    }
    
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      setPreview(dataUrl);
      onImageUpload(dataUrl, file);
    };
    
    reader.readAsDataURL(file);
  };
  
  const handleRemoveImage = () => {
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  return (
    <div className="w-full">
      {!preview ? (
        <div
          className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition-colors ${
            isDragging ? 'border-rust-primary bg-rust-primary bg-opacity-10' : 'border-gray-300 hover:border-rust-primary hover:bg-rust-primary hover:bg-opacity-5'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload className="h-12 w-12 text-steel-primary mb-4" />
          <h3 className="text-lg font-medium text-steel-dark mb-2">Drag & Drop Image Here</h3>
          <p className="text-sm text-neutral-dark mb-4 text-center">
            or click to browse your files
          </p>
          <p className="text-xs text-neutral-dark text-center">
            Supports: JPG, PNG, JPEG (Max size: 5MB)
          </p>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/jpeg,image/png,image/jpg"
            className="hidden"
          />
        </div>
      ) : (
        <div className="relative border rounded-lg overflow-hidden">
          <img 
            src={preview} 
            alt="Preview" 
            className="w-full h-auto object-contain max-h-80"
          />
          <button 
            onClick={handleRemoveImage}
            className="absolute top-2 right-2 bg-white bg-opacity-75 rounded-full p-1 hover:bg-opacity-100 transition-all"
          >
            <X className="h-5 w-5 text-steel-dark" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;