'use client';

import ImageUploadPreview from '@/app/(dashboard)/_components/UI/ImageUploadPreview';
import Modal from '@/app/(dashboard)/_components/UI/Modal';
import Button from '@/app/(landing)/_components/UI/Button';
import { useState } from 'react';

interface TProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ isOpen, onClose }: TProductModalProps) {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (file: File) => {
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  console.log(imageFile);

  return (
    <Modal title="Add New Product" isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-6">
        <div className="flex gap-7">
          <ImageUploadPreview label="Product Image" value={imagePreview} onChange={handleImageChange} />
          <div className="flex flex-col gap-4 w-full">
            <div className="input-group-admin">
              <label htmlFor="productName">Product Name</label>
              <input type="text" id="productName" name="productName" placeholder="e. g. Running Shoes" />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="input-group-admin">
                <label htmlFor="price">Price (IDR)</label>
                <input type="text" id="price" name="price" placeholder="e. g. 5000000" />
              </div>
              <div className="input-group-admin">
                <label htmlFor="stock">Stock</label>
                <input type="text" id="stock" name="stock" placeholder="e. g. 100" />
              </div>
            </div>
            <div className="input-group-admin">
              <label htmlFor="category">Category</label>
              <select name="category" id="category">
                <option value="" disabled selected>
                  Select Category
                </option>
                <option value="running">Running</option>
                <option value="football">Football</option>
              </select>
            </div>
          </div>
        </div>
        <div className="input-group-admin">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" rows={5} placeholder="Product Details" />
        </div>
        <Button className="mt-3 ml-auto rounded-lg">Create Product</Button>
      </div>
    </Modal>
  );
}
