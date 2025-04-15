import React from "react";

const Banner = () => {
return (
  <div
    className="h-[20vh] md:h-[70vh] bg-cover flex flex-col justify-end relative top-25"
    style={{
      backgroundImage: `url('https://live.staticflickr.com/5518/12007840013_dc55f971e5_b.jpg')`,
    }}
  >
    <h1 className="bg-blue-200 bg-opacity-50 text-center text-4xl text-black font-bold w-full">
      Avengers EndGame
    </h1>
  </div>
);
};

export default Banner;
