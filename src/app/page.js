export default function Home() {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center">
      <div className="font-manbow text-9xl text-center m-28">Product Arena</div>
      <div className="bg-[#D9D9D9] h-24 w-1/2 flex items-center rounded-full">
        <input
          className="w-1/2 h-full bg-transparent rounded-tl-full rounded-bl-full border-r-2 border-[#B5B5B5] px-5 placeholder-gray-500 text-black focus:outline-none focus:ring-0 text-2xl"
          placeholder="Enter product link 1"
        />
        <input
          className="w-1/2 h-full bg-transparent rounded-tr-full rounded-br-full border-l-2 border-[#B5B5B5] px-5 placeholder-gray-500 text-black focus:outline-none focus:ring-0 text-2xl"
          placeholder="Enter product link 2"
        />
      </div>
    </div>
  );
}
