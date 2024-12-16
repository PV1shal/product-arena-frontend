import { CiCirclePlus } from "react-icons/ci";

const AddNewProductCard = ({ openModal }) => {
  return (
    <div
      className="
        fixed bottom-8 right-8 w-16 h-16 bg-blue-500 rounded-full 
        flex items-center justify-center hover:bg-blue-600 
        transition-all duration-300 cursor-pointer shadow-lg z-50"
      onClick={openModal}
    >
      <CiCirclePlus className="text-3xl text-white" />
    </div>
  );
};

export default AddNewProductCard;
