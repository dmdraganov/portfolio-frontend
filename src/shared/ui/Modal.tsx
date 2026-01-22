interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string | null;
}

const Modal = ({ isOpen, onClose, imageUrl }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 bg-background/75 flex items-center justify-center z-50 p-4'
      onClick={onClose}
    >
      <div
        className='relative bg-background p-4 rounded-lg shadow-lg max-w-full max-h-full flex flex-col'
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className='absolute top-2 right-2 text-foreground text-3xl font-bold hover:cursor-pointer'
          onClick={onClose}
        >
          &times;
        </button>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt='Full screen reference'
            className='max-w-full max-h-[80vh] object-contain rounded-md'
          />
        ) : (
          <p className='text-background'>Изображение не найдено.</p>
        )}
      </div>
    </div>
  );
};

export default Modal;
