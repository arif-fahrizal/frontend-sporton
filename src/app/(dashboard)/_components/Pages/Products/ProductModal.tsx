'use client';

import ImageUploadPreview from '@/app/(dashboard)/_components/UI/ImageUploadPreview';
import Modal from '@/app/(dashboard)/_components/UI/Modal';
import Button from '@/app/(landing)/_components/UI/Button';
import useBoolean from '@/hooks/useBoolean';
import { getImageUrl } from '@/lib/api';
import { getAllCategories } from '@/services/category.service';
import { createProduct, updateProduct } from '@/services/product.service';
import { Category } from '@/types/categories.types';
import { Product } from '@/types/products.types';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface TProductModalProps {
  product?: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

interface ProductFormData {
  name: string;
  price: number;
  stock: number;
  category: string;
  description: string;
}

const initialFormData: ProductFormData = {
  name: '',
  price: 0,
  stock: 0,
  category: '',
  description: '',
};

export default function ProductModal({ product, isOpen, onClose, onSuccess }: TProductModalProps) {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [formData, setFormData] = useState<ProductFormData>(initialFormData);

  const isSubmitting = useBoolean();

  const fetchCategories = async () => {
    try {
      const data = await getAllCategories();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

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
      data.append('price', String(formData.price));
      data.append('stock', String(formData.stock));
      data.append('category', formData.category);
      data.append('description', formData.description);

      if (imageFile) {
        data.append('image', imageFile);
      }

      if (!product) {
        await createProduct(data);
      } else {
        await updateProduct(product?._id, data);
      }

      setFormData(initialFormData);
      setImageFile(null);
      setImagePreview(null);

      toast.success(!product ? 'Product created successfully' : 'Product updated successfully');

      onSuccess?.();
      onClose?.();
    } catch (error) {
      const err = !product ? 'Error creating product: ' : 'Error updating product: ';
      console.error(err, error);
      toast.error(err);
    } finally {
      isSubmitting.toggle();
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (!!product && isOpen) {
      setFormData({
        name: product?.name,
        price: product?.price,
        stock: product?.stock,
        category: product?.category?._id,
        description: product?.description,
      });
      setImagePreview(getImageUrl(product?.image) || null);
    } else if (isOpen) {
      setFormData(initialFormData);
      setImageFile(null);
      setImagePreview(null);
    }
  }, [product, isOpen]);

  return (
    <Modal title={!product ? 'Add New Product' : 'Update Product'} isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex gap-7">
          <ImageUploadPreview label="Product Image" value={imagePreview} onChange={handleImageChange} />
          <div className="flex flex-col gap-4 w-full">
            <div className="input-group-admin">
              <label htmlFor="name">Product Name</label>
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
            <div className="grid grid-cols-2 gap-5">
              <div className="input-group-admin">
                <label htmlFor="price">Price (IDR)</label>
                <input
                  type="text"
                  id="price"
                  name="price"
                  placeholder="e. g. 5000000"
                  value={formData.price}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="input-group-admin">
                <label htmlFor="stock">Stock</label>
                <input
                  type="text"
                  id="stock"
                  name="stock"
                  placeholder="e. g. 100"
                  value={formData.stock}
                  onChange={handleFormChange}
                  required
                />
              </div>
            </div>
            <div className="input-group-admin">
              <label htmlFor="category">Category</label>
              <select name="category" id="category" value={formData.category} onChange={handleFormChange} required>
                <option defaultValue="" disabled>
                  Select Category
                </option>
                {categories.map(category => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="input-group-admin">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows={5}
            placeholder="Product Details"
            value={formData.description}
            onChange={handleFormChange}
          />
        </div>
        <Button className="mt-3 ml-auto rounded-lg" disabled={isSubmitting.value}>
          {!product ? 'Create Product' : 'Update Product'}
        </Button>
      </form>
    </Modal>
  );
}
