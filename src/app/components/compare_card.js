"use client";

import CompareValueCard from "./compare_value_card";

const CompareCard = ({ productInfo, rank }) => {
  const colors = ["#fede67", "#b6f36a", "#ff9a62", "#c9a0ff", "#94dbfb"];

  let previousColor = null;
  const getRandomColor = () => {
    let newColor;
    do {
      newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === previousColor && colors.length > 1);
    previousColor = newColor;
    return newColor;
  };

  const renderValue = (value) => {
    if (value === null || value === undefined) {
      return 'N/A';
    }
    if (typeof value === 'string' || typeof value === 'number') {
      return value;
    } else if (Array.isArray(value)) {
      return value.map((item, index) => (
        <div key={index}>{renderValue(item)}</div>
      ));
    } else if (typeof value === 'object') {
      return Object.entries(value).map(([key, val]) => (
        <div key={key}>
          <strong>{key}:</strong> {renderValue(val)}
        </div>
      ));
    }
    return JSON.stringify(value);
  };
  
  return (
    <div className="w-1/4 bg-white rounded-xl shadow-lg p-4 transition-all duration-300 h-[99%] hover:scale-[1.01] hover:shadow-xl hover:z-10">
      <div className="w-full mb-4">
        <h1 className="text-xl font-bold text-center mb-2">
          {productInfo.product_name} 
        </h1>
      </div>

      <div className="overflow-y-auto h-[calc(100%-8rem)]">
        <div className="w-full mb-4">
          <h1 className="text-xl font-bold text-center mb-2">Specification</h1>
        </div>

        {productInfo.specifications.map((specification, index) => (
          <CompareValueCard
            key={`spec-${index}`}
            name={specification.name}
            value={renderValue(specification.value)}
            color={getRandomColor()}
          />
        ))}

        {/* <div className="w-full mb-4">
          <h1 className="text-lg font-semibold text-center mb-2">
            Additional Specification
          </h1>
        </div> */}

        {productInfo.additional_specifications.map((specification, index) => (
          <CompareValueCard
            key={`add-spec-${index}`}
            name={specification.name}
            value={renderValue(specification.value)}
            color={getRandomColor()}
          />
        ))}
      </div>
    </div>
  );
};

export default CompareCard;
