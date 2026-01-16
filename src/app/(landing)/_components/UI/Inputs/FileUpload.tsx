'use client';

import { useRef, useState } from 'react';
import { FiImage, FiTrash2, FiUploadCloud } from 'react-icons/fi';

interface TFileUploadProps {
  onFileSelect?: (file: File | null) => void;
}

export default function FileUpload({ onFileSelect }: TFileUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (selectedFile?: File) => {
    if (!selectedFile) return;

    setFile(selectedFile);
    onFileSelect?.(selectedFile);
  };

  const handleRemoveFile = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();

    setFile(null);
    onFileSelect?.(null);
  };
  return (
    <div
      onClick={() => fileInputRef?.current?.click()}
      onDragOver={e => e.preventDefault()}
      onDrag={e => {
        e.preventDefault();
        handleFileChange(e.dataTransfer.files?.[0]);
      }}
      className="flex flex-col justify-center items-center w-full py-6 border border-dashed border-primary bg-primary-light"
    >
      <input
        ref={fileInputRef}
        type="file"
        id=""
        accept="image/*"
        className="hidden"
        onChange={e => handleFileChange(e.target.files?.[0])}
      />
      {file ? (
        <div className="text-center">
          <FiImage size={28} className="mb-4 text-primary mx-auto" />
          <p className="max-w-[20ch] text-sm text-primary truncate">{file?.name}</p>
          <p className="text-sm text-gray-400">{(file?.size / 1024).toFixed(1)} KB</p>
          <button
            onClick={handleRemoveFile}
            className="flex gap-2 mt-4 mx-auto py-1 px-2 text-white rounded bg-primary/90"
          >
            <FiTrash2 size={20} className="self-center" />
            Remove
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-1.25 text-center">
          <FiUploadCloud size={24} className="text-primary mx-auto" />
          <span className="text-xs">Upload Your Payment Receipt here</span>
        </div>
      )}
    </div>
  );
}
