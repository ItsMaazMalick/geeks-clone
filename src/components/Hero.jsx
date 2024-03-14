export default function Hero() {
  return (
    <div className="px-60 w-screen h-[250px] bg-indigo-600 flex justify-center items-center">
      {/* LEFT */}
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-white">
          Welcome to Geeks UI Learning Application
        </h1>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est facere
          corrupti quam, in vero sed possimus.
        </p>
        <div className="flex gap-1">
          <button className="py-2 px-4 bg-green-400 text-white font-semibold border-2 border-blue-500">
            Browse Courses
          </button>
          <button className="py-2 px-4 bg-white text-black font-semibold">
            Are You Instructor?
          </button>
        </div>
      </div>
      {/* RIGHT */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src="https://www.pngkey.com/png/full/57-576740_black-person-png-businessperson.png"
          alt=""
          className="h-[250px]"
        />
      </div>
    </div>
  );
}
