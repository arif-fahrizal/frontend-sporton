'use client';

import ImageUploadPreview from '@/app/(dashboard)/_components/UI/ImageUploadPreview';
import Modal from '@/app/(dashboard)/_components/UI/Modal';
import Button from '@/app/(landing)/_components/UI/Button';
import { useState } from 'react';

interface TCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CategoryModal({ isOpen, onClose }: TCategoryModalProps) {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (file: File) => {
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  console.log(imageFile);

  return (
    <Modal title="Add New Category" isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-6">
        <div className="flex gap-7">
          <ImageUploadPreview label="Category Image" value={imagePreview} onChange={handleImageChange} />
          <div className="flex flex-col gap-4 w-full">
            <div className="input-group-admin">
              <label htmlFor="productName">Category Name</label>
              <input type="text" id="productName" name="productName" placeholder="e. g. Running Shoes" />
            </div>
            <div className="input-group-admin">
              <label htmlFor="description">Description</label>
              <textarea id="description" name="description" rows={5} placeholder="Category Details" />
            </div>
          </div>
        </div>
        <Button className="mt-3 ml-auto rounded-lg">Create Category</Button>
      </div>
    </Modal>
  );
}
