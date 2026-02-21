import Modal from '@/app/(dashboard)/_components/UI/Modal';
import Button from '@/app/(landing)/_components/UI/Button';

interface TDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteModal({ isOpen, onClose, onConfirm }: TDeleteModalProps) {
  return (
    <Modal title="Delete Product" isOpen={isOpen} onClose={onClose}>
      <p className="text-center">Are you sure you want to delete this product? This action cannot be undone.</p>
      <div className="flex gap-5 mt-5">
        <Button variant="ghost" onClick={onClose} className="w-full px-5! rounded-md">
          Cancel
        </Button>
        <Button onClick={onConfirm} className="w-full px-5! rounded-md">
          Yes, Delete It
        </Button>
      </div>
    </Modal>
  );
}
