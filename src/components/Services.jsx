import { FiVideo } from "react-icons/fi";
import { LuUsers2 } from "react-icons/lu";
import { CiClock2 } from "react-icons/ci";

export default function Services() {
  const ser = [
    {
      id: 1,
      title: "30,000 online courses",
      desc: "Enjoy a variety of fresh topics",
      icon: <FiVideo />,
    },
    {
      id: 2,
      title: "Expert Instructions",
      desc: "Find the right instructor for you",
      icon: <LuUsers2 />,
    },
    {
      id: 3,
      title: "Lifetime access",
      desc: "Learn on your schedule",
      icon: <CiClock2 />,
    },
  ];
  return (
    <div className="flex items-center justify-between h-16 gap-8 bg-white px-60">
      {ser.map((service) => (
        <div key={service.id} className="flex items-center gap-4">
          {/* LEFT */}
          <div className="p-2 bg-orange-400 bg-opacity-50 rounded-full text-amber-800">
            {service.icon}
          </div>
          {/* RIGHT */}
          <div>
            <p className="text-xs font-bold">{service.title}</p>
            <p className="text-xs">{service.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
