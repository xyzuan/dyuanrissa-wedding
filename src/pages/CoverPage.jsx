import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { LuMailOpen } from "react-icons/lu";

function CoverPage() {
  const router = useRouter();
  const { nama } = router.query;

  return (
    <div>
      <div className="absolute h-full w-full overflow-hidden">
        <Image
          alt="flower"
          className="z-10 w-9/12 md:w-6/12 md:h-6/12 absolute top-0 right-0 opacity-15 pointer-events-none"
          width={620}
          height={620}
          src="/assets/icons/flower.svg"
        />
        <Image
          alt="flower"
          className="z-10 w-9/12 md:w-6/12 md:h-6/12 absolute bottom-0 left-0 opacity-15 rotate-180 pointer-events-none"
          width={620}
          height={620}
          src="/assets/icons/flower.svg"
        />
      </div>
      <div
        data-aos="fade-up"
        className="flex flex-col h-screen w-screen justify-center items-center text-white text-center px-8 py-3.5"
      >
        <p className="mb-6">Wedding Invitation</p>
        <h4 className="font-great-vibes text-8xl font-bold mb-1 mt-3">
          Dhody
          <br />&<br />
          Arisa
        </h4>
        <p data-aos="fade-up" className="font-light text-sm">
          Kepada Yth: Bpk/Ibu/Saudara/I
        </p>
        <p className="mt-3">{nama}</p>
        <button
          onClick={() => {
            router.push("main");
          }}
          className="z-50 mt-6 px-6 md:px-12 py-2 md:py-3 flex justify-center items-center border-white border rounded-l-full rounded-r-full mx-auto text-white text-sm md:text-base hover:bg-white hover:text-black"
        >
          <LuMailOpen className="h-6 w-6 mr-3" />
          Buka Undangan
        </button>
      </div>
    </div>
  );
}

export default CoverPage;
