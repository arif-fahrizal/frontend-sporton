'use client';

import ProductModal from '@/app/(dashboard)/_components/Pages/Products/ProductModal';
import ProductTable from '@/app/(dashboard)/_components/Pages/Products/ProductTable';
import DeleteModal from '@/app/(dashboard)/_components/UI/DeleteModal';
import Button from '@/app/(landing)/_components/UI/Button';
import useBoolean from '@/hooks/useBoolean';
import { deleteProduct, getAllProducts } from '@/services/product.service';
import { Product } from '@/types/products.types';
import { useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { toast } from 'react-toastify';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [productToDeleteId, setProductToDeleteId] = useState('');

  const isModalOpen = useBoolean();
  const isDeleteModalOpen = useBoolean();

  const fetchProducts = async () => {
    try {
      const data = await getAllProducts();
      if (data) setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleEditProduct = (product: Product) => {
    setSelectedProduct(product);
    isModalOpen.toggle();
  };

  const handleDeleteProduct = (id: string) => {
    setProductToDeleteId(id);
    isDeleteModalOpen.toggle();
  };

  const handleDeleteProductConfirm = async () => {
    if (!productToDeleteId) return;
    try {
      await deleteProduct(productToDeleteId);
      fetchProducts();

      isDeleteModalOpen.toggle();
      setProductToDeleteId('');

      toast.success('Product deleted successfully');
    } catch (error) {
      const err = 'Error deleting product';
      console.error(err, error);
      toast.error(err);
    }
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    isModalOpen.toggle();
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProducts();
  }, []);

  return (
    <section>
      <div className="flex justify-between items-center mb-10">
        <div className="">
          <h1 className="text-2xl font-bold">Product Management</h1>
          <p className="opacity-50">Manage your inventory, prices and stocks.</p>
        </div>
        <Button onClick={isModalOpen.toggle} className="rounded-lg">
          <FiPlus size={24} />
          Add Product
        </Button>
      </div>
      <ProductTable products={products} onEdit={handleEditProduct} onDelete={handleDeleteProduct} />
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen.value}
        onClose={handleCloseModal}
        onSuccess={fetchProducts}
      />
      <DeleteModal
        isOpen={isDeleteModalOpen.value}
        onClose={isDeleteModalOpen.toggle}
        onConfirm={handleDeleteProductConfirm}
      />
    </section>
  );
}
