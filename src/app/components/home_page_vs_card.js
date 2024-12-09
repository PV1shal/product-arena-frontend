"use client";

import Image from "next/image";
import BackenHTTPService from "../services/BackenHTTPService";

const HomePageCard = ({ itemName1, imgLink1, link1, itemName2, imgLink2, link2 }) => {

  const onClickEvent = async () => {
    const reponse = await BackenHTTPService.getProductComparison({
        itemLink1: link1,
        itemLink2: link2
    }).then((res) => {
        console.log(res.data);
    })
  };

  return (
    <div
      className="flex w-1/2 h-80 m-10 items-center justify-center z-0 hover:cursor-pointer"
      onClick={onClickEvent}
    >
      <div className="w-1/2 h-full relative border-r-2 z-0">
        <Image
          src={imgLink1}
          alt="Item 1"
          fill
          style={{ objectFit: "contain" }}
        />
        <div className="absolute bottom-0 w-full h-10 flex items-center justify-center bg-black/70 text-white z-0">
          {itemName1}
        </div>
      </div>

      <div className="z-10 absolute flex items-center justify-center w-9 h-9 border-2 bg-[#D9D9D9] rounded-full mx-4 font-bold text-lg">
        vs
      </div>

      <div className="w-1/2 h-full relative z-0">
        <Image
          src={imgLink2}
          alt="Item 2"
          fill
          style={{ objectFit: "contain" }}
        />
        <div className="absolute bottom-0 w-full h-10 flex items-center justify-center bg-black/70 text-white z-0">
          {itemName2}
        </div>
      </div>
    </div>
  );
};

export default HomePageCard;
