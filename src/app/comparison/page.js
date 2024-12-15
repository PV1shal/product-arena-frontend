"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AddNewProductCard from "../components/add_new_product";
import CompareCard from "../components/compare_card";
import NewProductInput from "../components/new_product_input_component";
import { useComparisonContext } from "./context/CompareContext";
import Loading from "../loading";

export default function Comparison() {
  const router = useRouter();
  const { comparisonData, setComparisonData } = useComparisonContext();
  const [newProductModal, setNewProductModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!comparisonData || comparisonData.length === 0) {
      router.push('/');
    }
  }, [comparisonData, router]);

  const openModal = () => {
    setNewProductModal(true);
  };

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center">
          <Loading />
        </div>
      )}
      <div className="w-screen flex flex-row items-start overflow-scroll justify-center gap-4 p-8">
        {comparisonData.map((product, index) => (
          <CompareCard key={index} productInfo={product} rank={index} />
        ))}

        <AddNewProductCard openModal={openModal} />
        <NewProductInput
          open={newProductModal}
          setOpen={setNewProductModal}
          prev_products={comparisonData}
          setNewComparisonData={setComparisonData}
          setIsLoading={setIsLoading}
        />
      </div>
    </>
  );
}
