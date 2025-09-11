type InfoCardProps = {
    label: string;
    value: string;
};

const InfoCard = ({label, value}: InfoCardProps) => {
    return (
        <div className="bg-orange-100 p-4 rounded-xl text-center shadow-md">
            <p className="text-md font-bold text-orange-700">{label}</p>
            <p className="text-xl text-orange-900">{value}</p>
        </div>
    );
};

export default InfoCard;