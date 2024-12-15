"use client";

import { useState } from "react";
import { IoIosClose } from "react-icons/io";
import BackenHTTPService from "../services/BackenHTTPService";
import { useComparisonContext } from "../comparison/context/CompareContext";

const NewProductInput = ({ open, setOpen, setNewComparisonData, setIsLoading }) => {
    const [newLink, setNewLink] = useState("");
    const { comparisonData } = useComparisonContext();
    
    if (!open) return null;

    const onAdd = async () => {
        setIsLoading(true);
        await BackenHTTPService.getProductComparisonNewApp({
            prev_products: comparisonData,
            new_product: newLink
        }).then((res) => {
            console.log(res.data);
            setNewComparisonData(prevData => [...prevData, res.data]);
            setOpen(false);
            setIsLoading(false);
        });
    }
    
    return (
        <div
            className="
                fixed inset-0 z-50 flex flex-col 
                items-center justify-center"
        >
            <div
                className="
                absolute inset-0 bg-black bg-opacity-50"
                onClick={() => setOpen(false)}
            />
            <div
                className="relative bg-white w-1/3 h-1/6 mb-2 rounded-lg"
            >
                <div 
                    className="
                        flex flex-row justify-between 
                        p-3 text-lg font-bold border-black 
                        border-b-2">
                    Enter Link to add new Product
                    <IoIosClose 
                        onClick={() => setOpen(false)}
                        className="text-4xl hover:cursor-pointer"
                    />
                </div>
                <div className="p-5">
                    <input
                        placeholder="Enter link here"
                        className="border-black border-[1px] rounded-lg w-full p-3"
                        onChange={(e) => {
                            setNewLink(e.target.value);
                        }}
                    />
                    <div className="flex justify-end">
                        <button 
                            className="bg-black font-medium text-white px-4 py-2 rounded mt-3"
                            onClick={onAdd}
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};  

export default NewProductInput;
