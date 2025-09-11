import {useState} from 'react';
import PhotoThumbnail from './PhotoThumbnail';
import LightboxModal from './LightboxModal';

type GallerySectionProps = {
    photos: string[];
};

const GallerySection = ({photos}: GallerySectionProps) => {
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

    const openLightbox = (photo: string) => {
        setLightboxImage(photo);
    };

    const closeLightbox = () => {
        setLightboxImage(null);
    };

    return (
        <section id="gallery" className="mb-12">
            <h2 className="text-4xl font-bold text-orange-800 mb-6 text-center">My Photo Album</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {photos.map((photo, index) => (
                    <PhotoThumbnail key={index} photo={photo} onClick={() => openLightbox(photo)}/>
                ))}
            </div>
            {lightboxImage && <LightboxModal image={lightboxImage} onClose={closeLightbox}/>}
        </section>
    );
};

export default GallerySection;