import { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import axios from "axios";
import { CiUser } from "react-icons/ci";

const optionsItem = [
  {
    name: "ENS",
    id: "",
  },
  {
    name: "ETH Address",
    id: "",
  },
  {
    name: "BSC Address",
    id: "",
  },
  {
    name: "ARB Address",
    id: "",
  },
 
];
const CustomSelect = ({ name, setSelected, selected }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [options, setOptions] = useState(optionsItem)

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const selectOption = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col w-full relative ">
      <div
        className="bg-[#1a1a1a] flex px-4 text-white justify-between py-3 rounded-[8px]  border border-white border-opacity-10 "
        onClick={toggleOpen}
      >
     
        <p>{selected ? selected.name : "Select Address"}</p>
        <div className="flex items-center justify-center">
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>
      {isOpen && (
        <div className="bg-[#1a1a1a] text-[#ffffff] rounded-md shadow-md regular text-md w-full top-[56px] absolute left-0 z-50">
          <div className="flex flex-col p-4">
            {options?.map((option, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-4 py-2 text-md regular cursor-pointer "
                onClick={() => selectOption(option)}
              >
                <p className="text-sm regular text-[#fff]">{option.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
