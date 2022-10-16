import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] xl:h-[500px] 2xl:h-[600px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
        alt="background"
      />
      <div className="absolute top-1/2 text-center w-full">
        <p className="text-sm sm:text-lg">Not sure where to go? Perfect.</p>
        <button className="text-purple-500 bg-white px-8 py-3 rounded-full shadow-md font-bold my-3 hover:shadow-xl transition-all duration-150 hover:scale-90">
          I&#39;m flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
