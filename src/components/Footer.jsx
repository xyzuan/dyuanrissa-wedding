import React from "react";
import Home from "../../public/assets/icons/home.svg";
import Calender from "../../public/assets/icons/calender.svg";
import Gallery from "../../public/assets/icons/gallery.svg";
import Image from "next/image";

function Footer() {
  return (
    <div className="max-w-screen-sm w-fit fixed bottom-0 mb-6 mx-auto right-0 left-0 z-20">
      <div className="bg-[#9a6953] backdrop-blur-xl bg-opacity-80 w-full px-6 rounded-full shadow">
        <ul className=" flex items-center gap-6 justify-evenly text-white text-xs font-light py-2 md:py-3">
          <a href="#">
            <li className="flex items-center font-medium  flex-col px-2 py-1">
              <Image className="h-6 w-6 mb-1" src={Home} />
              <p>Beranda</p>
            </li>
          </a>
          <a href="#resepsi">
            <li className="flex items-center  flex-col px-2 py-1">
              <Image className="h-6 w-6 mb-1" src={Calender} />
              <p>Resepsi</p>
            </li>
          </a>
          <a href="#gallery">
            <li className="flex items-center  flex-col px-2 py-1">
              <Image className="h-6 w-6 mb-1" src={Gallery} />
              <p>Galeri</p>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
