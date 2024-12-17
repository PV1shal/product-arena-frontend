const ReviewCard = ({ review }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-4 mb-3">
      <div className="flex items-center mb-2">
        <span className="font-semibold text-blue-600">{review.platform}</span>
      </div>
      <p className="text-sm italic">&quot;{review.review}&quot;</p>
    </div>
  );
};

export default ReviewCard;