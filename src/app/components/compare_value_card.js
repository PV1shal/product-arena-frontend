const CompareValueCard = ({ name, value, color }) => {
    return (
        <div className="mb-3 p-4 rounded-lg transition-transform hover:scale-105"
             style={{ backgroundColor: color }}>
            <div className="font-bold text-gray-800">
                {name}
            </div>
            <div className="pt-2 text-lg font-semibold">
                {value}
            </div>
        </div>
    );
}

export default CompareValueCard;