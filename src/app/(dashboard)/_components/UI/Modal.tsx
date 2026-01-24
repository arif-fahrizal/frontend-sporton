import { FiX } from 'react-icons/fi';

interface TModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ title, isOpen, onClose, children }: TModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed flex justify-center items-center inset-0 p-4 z-50">
      <div onClick={onClose} className="absolute w-full h-full transition-opacity backdrop-blur-sm bg-black/50"></div>
      <div className="relative max-w-2xl w-full rounded-xl bg-white shadow-xl">
        <div className="flex justify-between items-center py-2 px-7 border-b border-gray-200">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button onClick={onClose} className="p-4 rounded-full hover:bg-gray-100">
            <FiX size={24} />
          </button>
        </div>
        <div className="p-7">{children}</div>
      </div>
    </div>
  );
}
