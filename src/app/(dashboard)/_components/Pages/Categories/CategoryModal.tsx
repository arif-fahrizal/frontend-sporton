'use client';

import ImageUploadPreview from '@/app/(dashboard)/_components/UI/ImageUploadPreview';
import Modal from '@/app/(dashboard)/_components/UI/Modal';
import Button from '@/app/(landing)/_components/UI/Button';
import useBoolean from '@/hooks/useBoolean';
import { getImageUrl } from '@/lib/api';
import { createCategory, updateCategory } from '@/services/category.service';
import { Category } from '@/types/categories.types';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface TCategoryModalProps {
  category?: Category | null;
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

interface CategoryFormData {
  name: string;
  description: string;
}

const initialFormData: CategoryFormData = {
  name: '',
  description: '',
};

export default function CategoryModal({ category, isOpen, onClose, onSuccess }: TCategoryModalProps) {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [formData, setFormData] = useState<CategoryFormData>(initialFormData);

  const isSubmitting = useBoolean();

  const handleImageChange = (file: File) => {
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prevData => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    isSubmitting.toggle();

    try {
      const data = new FormData();

      data.append('name', formData.name);
      data.append('description', formData.description);

      if (imageFile) {
        data.append('imageUrl', imageFile);
      }

      if (!category) {
        await createCategory(data);
      } else {
        await updateCategory(category._id, data);
      }

      setFormData(initialFormData);
      setImageFile(null);
      setImagePreview(null);

      toast.success(!category ? 'Category created successfully' : 'Category updated successfully');

      onSuccess?.();
      onClose?.();
    } catch (error) {
      const err = !category ? 'Error creating category: ' : 'Error updating category: ';
      console.error(err, error);
      toast.error(err);
    } finally {
      isSubmitting.toggle();
    }
  };

  useEffect(() => {
    if (!!category && isOpen) {
      setFormData({ name: category.name, description: category.description });
      setImagePreview(getImageUrl(category.image) || null);
    } else if (isOpen) {
      setFormData(initialFormData);
      setImageFile(null);
      setImagePreview(null);
    }
  }, [category, isOpen]);

  return (
    <Modal title={!category ? 'Add New Category' : 'Update Category'} isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex gap-7">
          <ImageUploadPreview label="Category Image" value={imagePreview} onChange={handleImageChange} />
          <div className="flex flex-col gap-4 w-full">
            <div className="input-group-admin">
              <label htmlFor="name">Category Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="e. g. Running Shoes"
                value={formData.name}
                onChange={handleFormChange}
                required
              />
            </div>
            <div className="input-group-admin">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                rows={5}
                placeholder="Category Details"
                value={formData.description}
                onChange={handleFormChange}
                required
              />
            </div>
          </div>
        </div>
        <Button className="mt-3 ml-auto rounded-lg" disabled={isSubmitting.value}>
          {!category ? 'Create Category' : 'Update Category'}
        </Button>
      </form>
    </Modal>
  );
}
