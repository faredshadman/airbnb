import Image from "next/image";
import {
  AiOutlineSearch,
  AiOutlineGlobal,
  AiOutlineMenu,
} from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 items-center bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center cursor-pointer my-auto h-10">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="Airbnb"
        />
      </div>
      <div className="flex items-center md:border-2 md:shadow-sm rounded-full py-2">
        <input
          type="text"
          placeholder="Start your search"
          className="pl-5 flex-grow outline-none text-gray-600 placeholder:text-gray-400 bg-transparent"
        />
        <AiOutlineSearch className="hidden md:inline-flex text-xl text-white bg-red-400 box-content rounded-full p-2 mx-2 cursor-pointer" />
      </div>
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <AiOutlineGlobal className="text-xl cursor-pointer" />
        <div className="flex items-center space-x-2 cursor-pointer border-2 p-1 rounded-full">
          <AiOutlineMenu className="text-xl" />
          <FaUserCircle className="text-xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
