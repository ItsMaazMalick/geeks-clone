import { useState } from "react";
export default function Hero() {
  const [buttonText, setButtonText] = useState("Browse Courses");

  return (
    <div className="px-60 w-screen h-[250px] bg-indigo-600 flex justify-center items-center">
      {/* LEFT */}
      <div className="flex flex-col flex-1 gap-4">
        <h1 className="text-3xl font-bold text-white">
          Welcome to Geeks UI Learning Application
        </h1>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est facere
          corrupti quam, in vero sed possimus.
        </p>
        <div className="flex gap-1">
          <button
            onClick={() => setButtonText("New Text")}
            className="px-4 py-2 font-semibold text-white bg-green-400 border-2 border-blue-500"
          >
            {buttonText}
          </button>
          <button className="px-4 py-2 font-semibold text-black bg-white">
            Are You Instructor?
          </button>
        </div>
      </div>
      {/* RIGHT */}
      <div className="flex items-center justify-center flex-1">
        <img
          src="https://www.pngkey.com/png/full/57-576740_black-person-png-businessperson.png"
          alt=""
          className="h-[250px]"
        />
      </div>
    </div>
  );
}
