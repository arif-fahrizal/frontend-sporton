/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import CategoryModal from '@/app/(dashboard)/_components/Pages/Categories/CategoryModal';
import CategoryTable from '@/app/(dashboard)/_components/Pages/Categories/CategoryTable';
import DeleteModal from '@/app/(dashboard)/_components/UI/DeleteModal';
import Button from '@/app/(landing)/_components/UI/Button';
import useBoolean from '@/hooks/useBoolean';
import { deleteCategory, getAllCategories } from '@/services/category.service';
import { Category } from '@/types/categories.types';
import { useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { toast } from 'react-toastify';

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [categoryToDeleteId, setCategoryToDeleteId] = useState('');

  const isModalOpen = useBoolean();
  const isDeleteModalOpen = useBoolean();

  const fetchCategories = async () => {
    try {
      const data = await getAllCategories();
      if (data) setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleEditCategory = (category: Category) => {
    setSelectedCategory(category);
    isModalOpen.toggle();
  };

  const handleDeleteCategory = (id: string) => {
    setCategoryToDeleteId(id);
    isDeleteModalOpen.toggle();
  };

  const handleDeleteProductConfirm = async () => {
    if (!categoryToDeleteId) return;
    try {
      await deleteCategory(categoryToDeleteId);
      fetchCategories();

      isDeleteModalOpen.toggle();
      setCategoryToDeleteId('');

      toast.success('Category deleted successfully');
    } catch (error) {
      const err = 'Error deleting category';
      console.error(err, error);
      toast.error(err);
    }
  };

  const handleCloseModal = () => {
    setSelectedCategory(null);
    isModalOpen.toggle();
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <section>
      <div className="flex flex-wrap justify-between items-center gap-5 mb-10">
        <div className="">
          <h1 className="text-lg md:text-2xl font-bold">Category Management</h1>
          <p className="text-sm md:text-base opacity-50">Organize your products into categories.</p>
        </div>
        <Button onClick={isModalOpen.toggle} className="py-3! md:py-4! rounded-lg">
          <FiPlus size={24} />
          Add Category
        </Button>
      </div>
      <CategoryTable categories={categories} onEdit={handleEditCategory} onDelete={handleDeleteCategory} />
      <CategoryModal
        category={selectedCategory}
        isOpen={isModalOpen.value}
        onClose={handleCloseModal}
        onSuccess={fetchCategories}
      />
      <DeleteModal
        isOpen={isDeleteModalOpen.value}
        onClose={isDeleteModalOpen.toggle}
        onConfirm={handleDeleteProductConfirm}
      />
    </section>
  );
}
