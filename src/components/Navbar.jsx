import { FaUserCircle } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";

const navLinks = [
  { id: 1, name: "Browse", url: "" },
  { id: 2, name: "Landings", url: "" },
  { id: 3, name: "Pages", url: "" },
  { id: 4, name: "Accounts", url: "" },
];

export default function Navbar() {
  return (
    <div className="w-screen h-[40px] bg-white shadow-md flex items-center justify-between px-2">
      {/* LEFT */}
      <div className="flex items-center gap-4">
        <h2 className="font-bold text-indigo-600">GEEKS</h2>
        <div className="flex gap-4 text-sm">
          {navLinks.map((link) => (
            <a key={link.id} href={link.url}>
              {link.name}
            </a>
          ))}
        </div>
        <div>
          <input
            className="p-1 ring-[0.5px] rounded-md"
            type="text"
            placeholder="Search Course"
          />
        </div>
      </div>
      {/* RIGHT */}
      <div className="flex items-center gap-2">
        <span className="flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full">
          <FaRegBell size={10} />
        </span>
        <FaUserCircle size={24} />
      </div>
    </div>
  );
}
