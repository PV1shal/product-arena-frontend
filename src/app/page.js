import HomePageCard from "./components/home_page_vs_card";

export default function Home() {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center">
      <div className="font-manbow text-9xl text-center m-28">Product Arena</div>
      <div className="bg-[#D9D9D9] h-16 w-1/2 flex items-center rounded-lg">
        <input
          className="w-1/2 h-full bg-transparent rounded-tl-full rounded-bl-full border-r-2 border-[#B5B5B5] px-5 placeholder-gray-500 text-black focus:outline-none focus:ring-0 text-2xl"
          placeholder="Enter product link 1"
        />
        <input
          className="w-1/2 h-full bg-transparent rounded-tr-full rounded-br-full border-l-2 border-[#B5B5B5] px-5 placeholder-gray-500 text-black focus:outline-none focus:ring-0 text-2xl"
          placeholder="Enter product link 2"
        />
      </div>
      <HomePageCard
        itemName1={"Samsung Galaxy S24 Ultra"}
        imgLink1={"https://image-us.samsung.com/SamsungUS/home/smartphones/galaxy-s24-ultra/gallery-images/FNL_Gallery_Ultra_800x600_Slide_Non_Exclusive_Colors_2.jpg"}
        link1={"https://www.samsung.com/us/smartphones/galaxy-s24-ultra/buy/galaxy-s24-ultra-512gb-unlocked-sm-s928uztfxaa/"}
        itemName2={"Google Pixel 9 Pro"}
        imgLink2={"https://lh3.googleusercontent.com/Yo3Zv7d5klsQ32Qo2QPBwGP_BG4_v77WIdldW4Z5ks4Fp_PI3YXsZKn2jRSH1UpKbSEIMLkkwFuW0UQJLgyNBpzFv0XHP5l6Ernl=s3000-w3000-e365-rw-v0-nu"}
        link2={"https://store.google.com/product/pixel_9_pro?hl=en-US"}
      />
      <HomePageCard
        itemName1={"SAMSUNG Odyssey"}
        imgLink1={"https://m.media-amazon.com/images/I/816CrccBvbL._AC_SL1500_.jpg"}
        link1={"https://www.amazon.com/gp/product/B0DHJ8B7TP?tag=rtings-mn-r-amazon-20&ie=UTF8&th=1"}
        itemName2={"MSI MPG 271QRX QD-OLED"}        
        imgLink2={"https://m.media-amazon.com/images/I/81h0w75BgqL._AC_SL1500_.jpg"}
        link2={"https://www.amazon.com/gp/product/B0CTS1RQ6Y?tag=rtings-mn-r-out-of-stock-20&ie=UTF8"}
      />
      <HomePageCard
        itemName1={"Shure SRH840A"}
        imgLink1={"https://m.media-amazon.com/images/I/71gG4pvy-VL._AC_SL1500_.jpg"}
        itemName2={"Sennheiser Consumer Audio HD 400S"}
        imgLink2={"https://m.media-amazon.com/images/I/51VTo9w8mxS._AC_SL1312_.jpg"}
        link2={"https://www.amazon.com/Sennheiser-HD-400S-One-Button-Detachable/dp/B07NFQ9FQQ/?_encoding=UTF8&pd_rd_w=hgfJK&content-id=amzn1.sym.72406710-d583-4731-97f5-a0a5f3b1f83e&pf_rd_p=72406710-d583-4731-97f5-a0a5f3b1f83e&pf_rd_r=F6PQZHPE4EG7V9V6WSF7&pd_rd_wg=fEGld&pd_rd_r=f045c44f-e684-4e08-8a25-ce98b76074e9&ref_=pd_hp_d_atf_dealz_cs"}
      />
    </div>
  );
}
