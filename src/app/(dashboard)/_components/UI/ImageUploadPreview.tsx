'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { FiUploadCloud } from 'react-icons/fi';

interface TImageUploadPreviewProps {
  label?: string;
  value?: string | null;
  onChange: (file: File) => void;
  className?: string;
}

export default function ImageUploadPreview({ label, value, onChange, className }: TImageUploadPreviewProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileImageClick = () => fileInputRef?.current?.click();
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (e.target.files && file) onChange(file);
  };

  return (
    <div className={`input-group-admin ${className}`}>
      <label htmlFor={label}>{label}</label>
      <div
        onClick={handleFileImageClick}
        className="flex flex-col justify-center items-center w-50 aspect-square rounded-lg border-2 border-dashed border-primary bg-primary/5 overflow-hidden"
      >
        {value ? (
          <Image src={value} alt="Preview Product" width={200} height={200} className="w-full h-full object-cover" />
        ) : (
          <>
            <FiUploadCloud size={24} className="text-primary" />
            <span className="text-sm font-medium">Click to upload</span>
          </>
        )}
        <input
          ref={fileInputRef}
          type="file"
          id={label}
          name="image"
          accept="image/*"
          onChange={handleFileChange}
          hidden
        />
      </div>
    </div>
  );
}
