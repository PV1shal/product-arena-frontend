import { CiCirclePlus } from "react-icons/ci";

const AddNewProductCard = () => {
  return (
    <div
      className="
        h-screen w-1/4 bg-white border-2 border-blue-300 
        rounded-lg flex flex-col justify-center 
        items-center hover:scale-[1.01] hover:shadow-xl 
        hover:z-10 transition-all duration-300"
    >
      <CiCirclePlus className="text-6xl text-blue-300" />
    </div>
  );
};

export default AddNewProductCard;
