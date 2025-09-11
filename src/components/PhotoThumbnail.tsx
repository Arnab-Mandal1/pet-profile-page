type PhotoThumbnailProps = {
    photo: string;
    onClick: () => void;
};

const PhotoThumbnail = ({photo, onClick}: PhotoThumbnailProps) => {
    return (
        <button onClick={onClick} className="focus:outline-none group">
            <img src={photo} alt="thumbnail"
                 className="w-full h-full object-cover rounded-xl shadow-lg group-hover:shadow-2xl group-focus:ring-4 group-focus:ring-orange-400 transition-all duration-300"/>
        </button>
    );
};

export default PhotoThumbnail;