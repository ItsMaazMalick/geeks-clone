import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import { GrGraphQl } from "react-icons/gr";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { LiaLaravel } from "react-icons/lia";
import { MdSignalCellular4Bar, MdSignalCellular2Bar } from "react-icons/md";

const arr = [1, 2, 3, 4, 5];

const cards = [
  {
    id: 1,
    title: "GraphQl",
    icon: <GrGraphQl size={30} />,
    desc: "GraphQl: Instroduction to graphQl for beginners",
    time: "2h 40m",
    status: "Advanced",
    ratings: 4,
    reviews: 1500,
    bg: "bg-pink-700",
    color: "white",
  },
  {
    id: 2,
    title: "Javascript",
    icon: <IoLogoJavascript className="text-white bg-black" size={30} />,
    desc: "GraphQl: Instroduction to graphQl for beginners",
    time: "2h 40m",
    status: "Advanced",
    ratings: 3,
    reviews: 1900,
    bg: "bg-yellow-400",
    color: "black",
  },
  {
    id: 3,
    title: "Node js",
    icon: <FaNodeJs className="text-white" size={30} />,
    desc: "GraphQl: Instroduction to graphQl for beginners",
    time: "3h 10m",
    status: "Intermediate",
    ratings: 2,
    reviews: 100,
    bg: "bg-green-700",
    color: "white",
  },
  {
    id: 4,
    title: "Laravel",
    icon: <LiaLaravel className="text-white" size={30} />,
    desc: "GraphQl: Instroduction to graphQl for beginners",
    time: "3h 10m",
    status: "Intermediate",
    ratings: 2,
    reviews: 100,
    bg: "bg-red-800",
    color: "white",
  },
];

function App() {
  return (
    <div className="w-screen min-h-screen bg-gray-100">
      {/* NAVBAR */}
      <Navbar />
      {/* HERO */}
      <Hero />
      {/* SERVICES */}
      <Services />
      {/* CARDS */}
      <h2 className="mt-10 mb-4 font-bold px-60">Recommended to you</h2>
      <div className="flex gap-4 px-60">
        {cards.map((card) => (
          <div
            key={card.id}
            className="h-[300px] bg-white w-[200px] rounded-md flex flex-col"
          >
            {/* TOP */}
            <div
              className={`flex flex-col items-center justify-center p-8 font-semibold text-${card.color} ${card.bg} rounded-t-md`}
            >
              {card.icon}
              {card.title}
            </div>
            {/* BOTTOM */}
            <div className="flex flex-col gap-2 p-4 text-xs">
              <p className="font-semibold">{card.desc}</p>
              {/* DESCRIPTION and TIME */}
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <MdOutlineWatchLater size={13} className="mr-1" /> {card.time}
                </div>
                <div className="flex items-center">
                  {card.status === "Advanced" ? (
                    <MdSignalCellular4Bar size={13} className="mr-1" />
                  ) : (
                    <MdSignalCellular2Bar size={13} className="mr-1" />
                  )}
                  {card.status}
                </div>
              </div>
              {/* RATINGS */}
              <div className="flex items-center gap-1 text-yellow-500">
                {arr.map((index) => {
                  if (index <= card.ratings && card.ratings <= 5) {
                    return <FaStar />;
                  } else if (card.ratings < 5) {
                    return <FaRegStar />;
                  }
                })}
                <p className="font-bold">{card.ratings}</p>
                <p className="ml-2 text-gray-500">({card.reviews})</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
