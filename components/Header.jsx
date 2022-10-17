import { useState } from "react";
import Image from "next/image";
import {
  AiOutlineSearch,
  AiOutlineGlobal,
  AiOutlineMenu,
} from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { DateRangePicker } from "react-date-range";
import { FaUserCircle } from "react-icons/fa";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useRouter } from "next/router";
const Header = ({ placeholder = "Start your search" }) => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(5);
  const router = useRouter();
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const resetInput = () => {
    setSearchInput("");
  };
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };
  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
    // In Order to Close Calendar
    setSearchInput("");
  };

  return (
    <header className="sticky top-0 z-50 overflow-hidden grid grid-cols-3 items-center bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center cursor-pointer my-auto h-10">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="Airbnb"
          onClick={() => router.push("/")}
        />
      </div>
      <div className="flex items-center md:border-2 md:shadow-sm rounded-full py-2">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value.trim())}
          type="text"
          placeholder={placeholder}
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
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <HiUsers className="text-xl" />
            <input
              value={noOfGuests}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg text-red-400 outline-none"
              onChange={(e) => setNoOfGuests(e.target.value)}
            />
          </div>
          <div className="flex">
            <button className="flex-grow text-gray-500" onClick={resetInput}>
              Cancel
            </button>
            <button className="flex-grow text-red-400" onClick={search}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
