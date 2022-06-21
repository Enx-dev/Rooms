import React, { useState } from "react";
import { createPortal } from "react-dom";
import menuIcon from "../images/icon-hamburger.svg";
import logoIcon from "../images/logo.svg";
import closeIcon from "../images/icon-close.svg";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [showDropdown, setShowDropDown] = useState(false);
  return (
    <nav className='Navbar'>
      <div className='Navbar_img1'>
        <img
          onClick={() => setShowDropDown((prev) => !prev)}
          src={menuIcon}
          alt='menu'
        />
      </div>
      <div className='flex space-x-4 place-self-center lg:place-self-start items-center'>
        <div className='Navbar_img2'>
          {" "}
          <img src={logoIcon} alt='Logo' />
        </div>
        <ul className='hidden lg:flex space-x-4 text-white'>
          <li className='cursor-pointer hover:text-gray-300'>home</li>
          <li className='cursor-pointer hover:text-gray-300'>shop</li>
          <li className='cursor-pointer hover:text-gray-300'>about</li>
          <li className='cursor-pointer hover:text-gray-300'>contact</li>
        </ul>
      </div>

      <AnimatePresence>
        {showDropdown && <DropdownMenu setShowDropDown={setShowDropDown} />}
      </AnimatePresence>
    </nav>
  );
};

const DropdownMenu = ({ setShowDropDown }) => {
  return createPortal(
    <>
      <motion.div
        initial={{
          y: -300,
        }}
        animate={{
          y: 0,
          transition: {
            duration: 0.2,
            ease: "easeIn",
          },
        }}
        exit={{
          y: -300,
          transition: {
            duration: 0.2,
            ease: "easeOut",
          },
        }}
        className='Navbar_dropdown'>
        <img
          onClick={() => setShowDropDown(false)}
          src={closeIcon}
          alt='close'
        />
        <ul>
          <li>home</li>
          <li>shop</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
          transition: {
            duration: 0.1,
            ease: "easeIn",
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            durantion: 0.1,
            ease: "easeOut",
          },
        }}
        onClick={() => setShowDropDown(false)}
        className='Navbar_backdrop'
      />
    </>,
    document.getElementById("dropDown")
  );
};

export default Navbar;
