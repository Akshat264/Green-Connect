import { ShoppingCart } from "lucide-react";
import { Search } from "lucide-react";
import { X, Menu } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  return (
    <nav className="fixed z-[100] h-14 inset-x-0 top-0 w-full select-none border-b border-gray-200 bg-black/75 backdrop-blur-lg transition-all">
      <div className="flex  py-2 lg:p-0 text-white justify-between   ">
        <div className="flex items-center justify-center lg:h-14 px-4">
          <img className="w-10 inline-block" src="logo.png" alt="Logo" />
          <h2 className="inline-block px-3">GREEN CONNECT</h2>
        </div>
        <div className="flex justify-between">
          <div
            id="sideMenu"
            className={`bg-black  flex  flex-col lg:flex-row lg:gap-x-3  lg:h-14  lg:p-0 gap-x-20 lg:m-0 justify-between fixed top-0 h-screen z-10 p-6 text-xl ease-in-out duration-500 ${
              isMenuVisible ? "right-0" : "-right-[500px] lg:text-sm"
            }  lg:right-0 lg:flex lg:flex-row  lg:bg-transparent`}
          >
            <ul className="flex flex-col lg:items-center lg:gap-x-5 gap-y-2 lg:flex-row  text-balance  ">
              <li className="py-2">
                <X
                  size={32}
                  onClick={() => setMenuVisible((e) => !e)}
                  className="text-red-800 cursor-pointer lg:hidden lg:h-14 "
                />
              </li>
              <li className="py-2 lg:p-0 cursor-pointer hover:text-green-600 ">
                Home
              </li>
              <li className="py-2 lg:p-0 cursor-pointer  hover:text-green-600">
                Projects
              </li>
              <li className="py-2 lg:p-0 cursor-pointer  hover:text-green-600">
                Stakeholders
              </li>
              <li className="py-2 lg:p-0  cursor-pointer  hover:text-green-600">
                About Us
              </li>
              <li className="py-2 lg:p-0  cursor-pointer  hover:text-green-600">
                Resources
              </li>
              <li className="py-2 lg:p-0 cursor-pointer  hover:text-green-600">
                Contact Us
              </li>
            </ul>
            <div className="flex lg:items-center">
              <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-x-2 gap-y-5 lg:mb-0 mb-10 text-center lg:text-sm">
                <li className="py-2 relative">
                  <Search className="absolute right-3 top-3.5 cursor-pointer lg:top-2.5 lg:right-1" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="bg-gray-700 p-1 rounded-xl px-3"
                  />
                </li>
                <li className="py-2 lg:py-0 lg:p-0 text-3xl  lg:text-sm">
                  Login
                </li>
                <li className="relative py-2 lg:p-0 w-fit mx-auto ">
                  <sup className="absolute -right-2 text-2xl text-red-400">
                    0
                  </sup>
                  <ShoppingCart size={40} className="lg:size-8" />
                </li>

                <div className="lg:text-sm  px-3 py-1 bg-green-900 text-white rounded-xl cursor-pointer text-3xl  w-fit mx-auto">
                  Donate
                </div>
              </ul>
            </div>
          </div>
          <button
            onClick={() => setMenuVisible((e) => !e)}
            className={`lg:hidden ml-4`}
          >
            <Menu />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
