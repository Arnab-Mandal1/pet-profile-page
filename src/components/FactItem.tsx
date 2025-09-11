type FactItemProps = {
    fact: string;
};

const FactItem = ({fact}: FactItemProps) => {
    return (
        <li className="bg-orange-50 p-4 rounded-lg text-center shadow-sm">
            <p className="text-lg text-orange-800">{fact}</p>
        </li>
    );
};

export default FactItem;