import FactItem from './FactItem';

type FactsSectionProps = {
    facts: string[];
};

const FactsSection = ({facts}: FactsSectionProps) => {
    return (
        <section id="facts" className="mb-12">
            <h2 className="text-4xl font-bold text-orange-800 mb-6 text-center">Fun Facts</h2>
            <ul className="list-none p-0 space-y-3">
                {facts.map((fact, index) => (
                    <FactItem key={index} fact={fact}/>
                ))}
            </ul>
        </section>
    );
};

export default FactsSection;