import { ShoppingCart } from "lucide-react";
import { Search } from "lucide-react";
import { X, Menu } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  return (
    <nav className="fixed z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-black/75 backdrop-blur-lg transition-all">
      <div className="flex  py-2 px-3 text-white justify-between items-center">
        <div className="flex items-center">
          <img className="w-10 inline-block" src="logo.png" alt="Logo" />
          <h2 className="inline-block px-3">GREEN CONNECT</h2>
        </div>
        <div className="flex items-center">
          <div
            id="sideMenu"
            className={`bg-black flex  flex-col justify-between fixed top-0 h-screen z-10 p-6 text-xl ease-in-out duration-500 ${
              isMenuVisible ? "right-0" : "-right-[500px]"
            }`}
          >
            <ul className="flex flex-col gap-y-2 ">
              <li className="py-2">
                <X
                  size={32}
                  onClick={() => setMenuVisible((e) => !e)}
                  className="text-red-800 cursor-pointer"
                />
              </li>
              <li className="py-2 cursor-pointer">Home</li>
              <li className="py-2 cursor-pointer">Projects</li>
              <li className="py-2 cursor-pointer">Stakeholders</li>
              <li className="py-2 cursor-pointer">About Us</li>
              <li className="py-2 cursor-pointer">Resources</li>
              <li className="py-2 cursor-pointer">Contact Us</li>
            </ul>
            <div>
              <ul className="flex flex-col gap-y-5 mb-10 text-center">
                <li className="py-2 relative">
                  <Search className="absolute right-3 top-3.5 cursor-pointer" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-gray-700 p-1 rounded-xl px-3"
                  />
                </li>
                <li className="py-2 text-3xl">Login</li>
                <li className="relative py-2 w-fit mx-auto ">
                  <sup className="absolute -right-2 text-2xl text-red-400">
                    0
                  </sup>
                  <ShoppingCart size={40} />
                </li>

                <div className=" px-3 py-1 bg-green-900 text-white rounded-xl text-3xl  w-fit mx-auto">
                  Donate
                </div>
              </ul>
            </div>
          </div>
          <button onClick={() => setMenuVisible((e) => !e)} className="ml-4">
            <Menu />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
