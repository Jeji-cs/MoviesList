import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Pagination = ({pageNo,handlePrev,handleNext}) => {
return (
  <div className="bg-neutral-400 mt-8 p-4 flex justify-center items-center">
    <div className="mr-6">
      <FaArrowLeft onClick={handlePrev} className="hover:cursor-pointer" />
    </div>
    <div className="font-bold">{pageNo}</div>
    <div className="ml-6">
      <FaArrowRight onClick={handleNext} className="hover:cursor-pointer" />
    </div>
  </div>
);
}

export default Pagination