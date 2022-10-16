import Image from "next/image";
const SmallCard = ({ img, location, distance }) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl transition duration-200 ease-out hover:bg-gray-100 hover:scale-105 cursor-pointer">
      <div className="relative h-16 w-16">
        <Image src={img} alt={location} layout="fill" className="rounded-md" />
      </div>
      <div>
        <h2>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
