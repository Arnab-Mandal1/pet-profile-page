import InfoCard from './InfoCard';

type AboutSectionProps = {
    about: {
        breed: string;
        age: string;
        favoriteToy: string;
        gotchaDay: string;
    };
};

const AboutSection = ({about}: AboutSectionProps) => {
    return (
        <section id="about" className="mb-12">
            <h2 className="text-4xl font-bold text-orange-800 mb-6 text-center">About Me</h2>
            <div className="grid grid-cols-2 gap-6">
                <InfoCard label="Breed" value={about.breed}/>
                <InfoCard label="Age" value={about.age}/>
                <InfoCard label="Favorite Toy" value={about.favoriteToy}/>
                <InfoCard label="Gotcha Day" value={about.gotchaDay}/>
            </div>
        </section>
    );
};

export default AboutSection;