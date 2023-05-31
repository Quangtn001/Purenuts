import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoSignIn } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { MdCancel } from "react-icons/md";

const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleCancelMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" shadow-sm fixed bg-white w-full top-0 transition-all">
      <div className="header bg-amber-600 flex items-center justify-between px-10  w-full transition-all">
        <p className="text-white text-center lg:text-left">
          Hạt dinh dưỡng nhập khẩu chính ngạch
        </p>
        <p className="text-white hidden md:block">Liên hệ</p>
      </div>
      <div className="flex items-center justify-between p-3 ">
        <Link to="/home" className="flex flex-row justify-center items-center">
          <img
            src="assets/images/logo.png"
            className="w-[100px] md:w-[200px] h-[50px] object-cover"
            alt=""
          />
        </Link>
        <div className="mt-2 md:mt-0 hidden lg:block">
          <ul className="flex items-center flex-col md:flex-row md:ml-4">
            <li>
              <Link
                to="/"
                className="text-gray-600 uppercase text-md font-semibold hover:text-purple-600 p-4 px-3 sm:px-4"
              >
                Trang chủ
              </Link>
            </li>
            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <Link
                to="/shop"
                className="relative text-gray-600 uppercase text-md font-semibold hover:text-purple-600 p-4 px-3 sm:px-4"
              >
                {isHovered ? (
                  <div className="flex items-center">
                    Sản phẩm <IoMdArrowDropup />
                  </div>
                ) : (
                  <div className="flex items-center">
                    Sản phẩm <IoMdArrowDropdown />
                  </div>
                )}

                <div className="flex  gap-10 absolute bg-white mt-2 p-4 shadow-lg top-20">
                  <ul className="w-[150px]">
                    <Link className="text-black font-medium uppercase mb-2">
                      Hạt dinh dưỡng
                    </Link>
                    <li className="border-b hover:bg-red-600 hover:text-white hover:rounded p-2 ">
                      <Link to="shop/1">Hạt điều</Link>
                    </li>
                    <li className="border-b hover:bg-red-600 hover:text-white hover:rounded p-2">
                      <Link>Hạt điều</Link>
                    </li>
                    <li className="border-b hover:bg-red-600 hover:text-white hover:rounded p-2">
                      <Link>Hạt điều</Link>
                    </li>
                    <li className="border-b hover:bg-red-600 hover:text-white hover:rounded p-2">
                      <Link>Hạt điều</Link>
                    </li>
                    <li className="border-b hover:bg-red-600 hover:text-white hover:rounded p-2">
                      <Link>Hạt điều</Link>
                    </li>
                  </ul>
                </div>
              </Link>
            </li>
            <li>
              <Link className="text-gray-600 uppercase text-md font-semibold hover:text-purple-600 p-4 px-3 sm:px-4">
                Blog
              </Link>
            </li>
            <li>
              <Link className="text-gray-600 uppercase text-md font-semibold hover:text-purple-600 p-4 px-3 sm:px-4">
                Liên hệ
              </Link>
            </li>
            <li>
              <Link className="text-gray-600 uppercase text-md font-semibold hover:text-purple-600 p-4 px-3 sm:px-4">
                Về chúng tôi
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-2 md:mt-0  items-center hidden lg:flex">
          <Link className="text-gray-800 font-semibold hover:text-purple-700 sm:px-5 flex items-center">
            <GoSignIn size={22} />
            Login
          </Link>
          <Link className="text-gray-800 font-semibold hover:text-purple-700 sm:px-5 flex items-center">
            <FiShoppingCart size={22} />
            Cart (0)
          </Link>
        </div>
        {/* mobile icon */}
        <div onClick={toggleMenu} className="lg:hidden">
          <FaBars size={22} />
        </div>
        {/* mobile menu */}
        {isOpen && (
          <div className="h-screen bg-white w-[70%] absolute top-0 right-0 left-0 lg:hidden">
            <div className="relative">
              <div className="flex items-center flex-col p-3 ">
                <Link
                  to="/home"
                  className="flex flex-row justify-center items-center"
                >
                  <img
                    src="assets/images/logo.png"
                    className="w-[200px] h-[60px] object-cover"
                    alt=""
                  />
                </Link>
                <div className="mt-2 md:mt-0">
                  <div className="flex flex-col md:ml-4">
                    <Link
                      to="/home"
                      className="text-gray-600 uppercase text-md font-semibold hover:text-purple-600 p-4 px-3 sm:px-4"
                    >
                      Trang chủ
                    </Link>
                    <Link
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      className="relative text-gray-600 uppercase text-md font-semibold hover:text-purple-600 p-4 px-3 sm:px-4"
                    >
                      {isHovered ? (
                        <div className="flex items-center">
                          Sản phẩm <IoMdArrowDropup />
                        </div>
                      ) : (
                        <div className="flex items-center">
                          Sản phẩm <IoMdArrowDropdown />
                        </div>
                      )}
                    </Link>
                    <Link className="text-gray-600 uppercase text-md font-semibold hover:text-purple-600 p-4 px-3 sm:px-4">
                      Blog
                    </Link>
                    <Link className="text-gray-600 uppercase text-md font-semibold hover:text-purple-600 p-4 px-3 sm:px-4">
                      Liên hệ
                    </Link>
                    <Link className="text-gray-600 uppercase text-md font-semibold hover:text-purple-600 p-4 px-3 sm:px-4">
                      Về chúng tôi
                    </Link>
                  </div>
                </div>
              </div>
              <MdCancel
                size={30}
                className="absolute top-0 right-0"
                onClick={toggleCancelMenu}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
