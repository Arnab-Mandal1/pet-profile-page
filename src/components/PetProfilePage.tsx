import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import GallerySection from './GallerySection';
import FactsSection from './FactsSection';
import ShareSection from './ShareSection';
import Footer from './Footer';

const PetProfilePage = () => {
    // All pet data will be hardcoded here for V1
    const petData = {
        name: 'Fido',
        tagline: 'Chief Morale Officer & Professional Napper',
        profilePicture: 'https://via.placeholder.com/150',
        about: {
            breed: 'Golden Retriever',
            age: '2 years',
            favoriteToy: 'Squeaky Ball',
            gotchaDay: 'Jan 1, 2023',
        },
        gallery: [
            'https://via.placeholder.com/300',
            'https://via.placeholder.com/300',
            'https://via.placeholder.com/300',
            'https://via.placeholder.com/300',
        ],
        funFacts: [
            'Loves chasing laser pointers. 🔴',
            'Hates the sound of the vacuum cleaner. 💨',
            'Will do anything for a piece of cheese. 🧀',
        ],
    };

    return (
        <main className="max-w-4xl mx-auto my-8 p-8 bg-white rounded-2xl shadow-2xl">
            <HeroSection name={petData.name} tagline={petData.tagline} profilePicture={petData.profilePicture}/>
            <AboutSection about={petData.about}/>
            <GallerySection photos={petData.gallery}/>
            <FactsSection facts={petData.funFacts}/>
            <ShareSection/>
            <Footer/>
        </main>
    );
};

export default PetProfilePage;
