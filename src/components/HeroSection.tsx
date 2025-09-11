type HeroSectionProps = {
    name: string;
    tagline: string;
    profilePicture: string;
};

const HeroSection = ({name, tagline, profilePicture}: HeroSectionProps) => {
    return (
        <section id="hero" className="text-center mb-12">
            <img src={profilePicture} alt={name}
                 className="w-48 h-48 rounded-full mx-auto mb-4 border-8 border-orange-300 shadow-xl"/>
            <h1 className="text-6xl font-bold text-orange-800">{name}</h1>
            <p className="text-2xl text-orange-500 mt-2">{tagline}</p>
        </section>
    );
};

export default HeroSection;