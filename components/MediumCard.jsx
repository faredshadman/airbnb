import Image from "next/image";
const MediumCard = ({ img, title }) => {
  return (
    <div className="cursor-pointer snap-center hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative w-80 h-80">
        <Image src={img} alt={title} layout="fill" className="rounded-md" />
      </div>
      <h3 className="text-2xl mt-3">{title}</h3>
    </div>
  );
};

export default MediumCard;
