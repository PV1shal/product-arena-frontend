"use client";

import { useEffect, useState } from "react";
import { FaChevronDown, FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import HomePageCard from "./components/home_page_vs_card";
import Loading from "./loading";
import BackenHTTPService from "./services/BackenHTTPService";
import { useComparisonContext } from "./comparison/context/CompareContext";
import ErrorMessage from "./components/error_message";

export default function Home() {
  const router = useRouter();
  const [link1, setLink1] = useState("");
  const [link2, setLink2] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setComparisonData } = useComparisonContext();
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    BackenHTTPService.bootBackend();
  }, []);

  const scrollToComparisons = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const handleCompare = async (itemLink1, itemLink2) => {
    setIsLoading(true);
    await BackenHTTPService.getProductComparison({
      itemLink1,
      itemLink2,
    })
      .then((response) => {
        setComparisonData(response.data);
        router.push("/comparison");
      })
      .catch((error) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (link1 && link2) {
      handleCompare(link1, link2);
    }
  };

  return (
    <>
      {isError && <ErrorMessage isOpen={isError} setIsOpen={setIsError} />}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <Loading />
        </div>
      )}
      <div className="min-h-screen w-screen flex flex-col items-center">
        <div className="bg-[#0e0e0e] w-screen h-[75vh] flex flex-col items-center justify-center text-white text-9xl relative">
          <h1 className="font-manbow_solid">Product Arena</h1>
          <h1 className="font-lexend text-lg text-white mt-4 max-w-2xl text-center">
            Your ultimate death battle platform that analyzes and compare any
            products with the power of AI.
          </h1>
          <div className="bg-white h-16 w-1/2 flex items-center rounded-lg mt-8">
            <input
              className="w-1/2 h-full bg-transparent rounded-tl-full rounded-bl-full border-r-2 border-[#B5B5B5] px-5 placeholder-gray-500 text-black focus:outline-none focus:ring-0 text-2xl"
              placeholder="Enter product link 1"
              onChange={(e) => {
                setLink1(e.target.value);
              }}
            />
            <input
              className="w-1/2 h-full bg-transparent rounded-tr-full rounded-br-full border-l-2 border-[#B5B5B5] px-5 placeholder-gray-500 text-black focus:outline-none focus:ring-0 text-2xl"
              placeholder="Enter product link 2"
              onChange={(e) => {
                setLink2(e.target.value);
              }}
            />
            <button type="button" className="px-4" onClick={handleFormSubmit}>
              <FaArrowRight className="text-gray-500 text-xl" />
            </button>
          </div>
          <button
            onClick={scrollToComparisons}
            className="absolute bottom-8 animate-bounce cursor-pointer"
            aria-label="Scroll to comparisons"
          >
            <FaChevronDown className="text-white text-4xl" />
          </button>
        </div>

        <h1 className="text-3xl font-bold mt-8">Quick Comparisons</h1>

        <HomePageCard
          itemName1={"Samsung Galaxy S24 Ultra"}
          imgLink1={
            "https://image-us.samsung.com/SamsungUS/home/smartphones/galaxy-s24-ultra/gallery-images/FNL_Gallery_Ultra_800x600_Slide_Non_Exclusive_Colors_2.jpg"
          }
          link1={
            "https://www.samsung.com/us/smartphones/galaxy-s24-ultra/buy/galaxy-s24-ultra-512gb-unlocked-sm-s928uztfxaa/"
          }
          itemName2={"Google Pixel 9 Pro"}
          imgLink2={
            "https://lh3.googleusercontent.com/Yo3Zv7d5klsQ32Qo2QPBwGP_BG4_v77WIdldW4Z5ks4Fp_PI3YXsZKn2jRSH1UpKbSEIMLkkwFuW0UQJLgyNBpzFv0XHP5l6Ernl=s3000-w3000-e365-rw-v0-nu"
          }
          link2={"https://store.google.com/product/pixel_9_pro?hl=en-US"}
          onCompare={(link1, link2) => handleCompare(link1, link2)}
        />
        <HomePageCard
          itemName1={"SAMSUNG Odyssey"}
          imgLink1={
            "https://m.media-amazon.com/images/I/816CrccBvbL._AC_SL1500_.jpg"
          }
          link1={
            "https://www.amazon.com/SAMSUNG-49-inch-Odyssey-FreeSync-LC49G95TSSNXZA/dp/B088HH6LW5"
          }
          itemName2={"MSI MPG 271QRX QD-OLED"}
          imgLink2={
            "https://m.media-amazon.com/images/I/81h0w75BgqL._AC_SL1500_.jpg"
          }
          link2={
            "https://www.amazon.com/MSI-MPG-271QRX-QD-OLED-response/dp/B0CTS1RQ6Y"
          }
          onCompare={(link1, link2) => handleCompare(link1, link2)}
        />
        <HomePageCard
          itemName1={"Shure SRH840A"}
          imgLink1={
            "https://m.media-amazon.com/images/I/71gG4pvy-VL._AC_SL1500_.jpg"
          }
          link1={
            "https://www.amazon.com/Shure-Studio-Headphones-Black-SRH840A/dp/B00OP93VI0"
          }
          itemName2={"Sennheiser Consumer Audio HD 400S"}
          imgLink2={
            "https://m.media-amazon.com/images/I/51VTo9w8mxS._AC_SL1312_.jpg"
          }
          link2={
            "https://www.amazon.com/Sennheiser-HD-400S-One-Button-Detachable/dp/B07NFQ9FQQ/?_encoding=UTF8&pd_rd_w=hgfJK&content-id=amzn1.sym.72406710-d583-4731-97f5-a0a5f3b1f83e&pf_rd_p=72406710-d583-4731-97f5-a0a5f3b1f83e&pf_rd_r=F6PQZHPE4EG7V9V6WSF7&pd_rd_wg=fEGld&pd_rd_r=f045c44f-e684-4e08-8a25-ce98b76074e9&ref_=pd_hp_d_atf_dealz_cs"
          }
          onCompare={(link1, link2) => handleCompare(link1, link2)}
        />
        <HomePageCard
          itemName1={"Shark DETECT"}
          imgLink1={
            "https://m.media-amazon.com/images/I/71AA3XrGLFL._AC_SL1500_.jpg"
          }
          link1={
            "https://www.amazon.com/Shark-Self-Cleaning-Anti-Allergen-Neutralizer-LA492/dp/B0DDZ2FB8F/?_encoding=UTF8&pd_rd_w=Wc70E&content-id=amzn1.sym.91010810-3b5c-4e0a-8e46-6693d2ab1154&pf_rd_p=91010810-3b5c-4e0a-8e46-6693d2ab1154&pf_rd_r=R80K9TX77ZFTSZDC6EY4&pd_rd_wg=ZXbc8&pd_rd_r=87409683-9074-4079-b7ba-2e2b79277536&ref_=pd_hp_d_btf_fabric_cml_prism_kp&th=1"
          }
          itemName2={"Bissell 2252"}
          imgLink2={
            "https://m.media-amazon.com/images/I/71pzkmU3PuL._AC_SL1500_.jpg"
          }
          link2={
            "https://www.amazon.com/BISSELL-Cleanview-Upright-Bagless-2252/dp/B07F6N3RT6/?_encoding=UTF8&pd_rd_w=Wc70E&content-id=amzn1.sym.91010810-3b5c-4e0a-8e46-6693d2ab1154&pf_rd_p=91010810-3b5c-4e0a-8e46-6693d2ab1154&pf_rd_r=R80K9TX77ZFTSZDC6EY4&pd_rd_wg=ZXbc8&pd_rd_r=87409683-9074-4079-b7ba-2e2b79277536&ref_=pd_hp_d_btf_fabric_cml_prism_kp&th=1"
          }
          onCompare={(link1, link2) => handleCompare(link1, link2)}
        />
      </div>
      <div className="w-full bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-sm">
                Product Arena is your ultimate platform for comparing products
                using AI-powered analysis.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="text-sm">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Home
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="hover:text-gray-300">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Terms of Service
                  </a>
                </li> */}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p className="text-sm mb-2">We value your feedback!</p>
              <a
                href="https://forms.gle/2KhC37t6TUU8BWqQ6"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition duration-300"
              >
                Submit Feedback or Bug Report
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; 2024 Product Arena. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}
