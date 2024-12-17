const ReviewCard = ({ review }) => {
    const isPositive = review.classification === 'good';
    
    return (
      <div className={`rounded-lg p-4 mb-3 shadow-md ${isPositive ? 'bg-green-50' : 'bg-red-50'}`}>
        <div className="flex items-center justify-between mb-2">
          <span className="font-semibold text-blue-600">{review.platform}</span>
          <span className={`text-sm font-medium px-2 py-1 rounded-full ${isPositive ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
            {isPositive ? 'Positive' : 'Negative'}
          </span>
        </div>
        <p className="text-sm italic mb-2">&quot;{review.review}&quot;</p>
      </div>
    );
  };
  
  export default ReviewCard;
  