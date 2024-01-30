import React, { useState } from "react";
import Link from "next/link";

import {
  LuCalendarClock,
  LuHome,
  LuImage,
  LuPause,
  LuPlay,
} from "react-icons/lu";

function Footer() {
  const [playAudio, setPlayAudio] = useState(false);

  function playMusic() {
    const audio = document.getElementById("music");
    setPlayAudio(true);
    audio.play();
  }

  function pauseMusic() {
    const audio = document.getElementById("music");
    setPlayAudio(false);
    audio.pause();
  }

  return (
    <div className="max-w-screen-sm w-fit fixed flex gap-6 bottom-0 mb-6 mx-auto right-0 left-0 z-50">
      <audio id="music" loop preload="true" src="/assets/sfx/bgm.mp3" />
      <div className="bg-[#9a6953] backdrop-blur-xl bg-opacity-80 w-full px-6 rounded-full shadow">
        <ul className=" flex items-center gap-6 justify-evenly text-white text-xs font-light py-2 md:py-3">
          <Link href="#">
            <div className="flex items-center font-medium  flex-col px-2 py-1">
              <LuHome className="h-6 w-6" />
            </div>
          </Link>
          <Link href="#resepsi">
            <div className="flex items-center flex-col px-2 py-1">
              <LuCalendarClock className="h-6 w-6" />
            </div>
          </Link>
          <Link href="#gallery">
            <div className="flex items-center flex-col px-2 py-1">
              <LuImage className="h-6 w-6" />
            </div>
          </Link>
        </ul>
      </div>
      <div className="bg-[#9a6953] backdrop-blur-xl bg-opacity-80 px-6 rounded-full shadow">
        <div
          className="flex justify-center items-center h-full"
          onClick={() => {
            if (playAudio) {
              pauseMusic();
            } else {
              playMusic();
            }
          }}
        >
          {playAudio ? (
            <LuPause className="text-white" />
          ) : (
            <LuPlay className="text-white" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Footer;
