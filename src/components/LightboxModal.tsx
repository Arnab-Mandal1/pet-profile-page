type LightboxModalProps = {
    image: string;
    onClose: () => void;
};

const LightboxModal = ({image, onClose}: LightboxModalProps) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4"
             onClick={onClose}>
            <div className="relative">
                <button onClick={onClose}
                        className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold hover:bg-orange-600 transition-colors z-10">&times;</button>
                <img src={image} alt="full-size" className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
                     onClick={(e) => e.stopPropagation()}/>
            </div>
        </div>
    );
};

export default LightboxModal;