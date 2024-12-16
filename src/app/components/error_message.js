import { IoMdClose } from "react-icons/io";

const ErrorMessage = ({ isOpen, setIsOpen }) => {

  return (
    <div
      className={`left-0 right-0 bg-red-500 text-white p-4 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <p className="font-semibold">Something went wrong...</p>
        <button
          onClick={() => setIsOpen(false)}
          className="text-white hover:text-gray-200 transition-colors"
        >
          <IoMdClose size={24} />
        </button>
      </div>
    </div>
  );
};

export default ErrorMessage;
