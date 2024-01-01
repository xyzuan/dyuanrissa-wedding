import BaseLayout from "@/components/Layout";
import Image from "next/image";
import React from "react";

import Ring from "../../public/assets/icons/ring.svg";
import Location from "../../public/assets/icons/location.svg";

function MainPage() {
  return (
    <BaseLayout>
      <section
        id="beranda"
        className="flex lg:hidden bg-cover bg-center  w-full h-screen  items-start py-14"
        style={{ backgroundImage: "url(/assets/prewedding-home.png)" }}
      >
        <div className="flex flex-col  w-full relative">
          <div className="absolute h-full w-full bg-dark-450 bg-blur-2px"></div>
          <div className="flex flex-col w-full text-white text-center h-auto  px-8 py-3.5 z-10">
            <p className="font-habibi ">Pernikahan dari</p>
            <h4 className="font-great-vibes text-5xl mb-4 mt-6">
              Dhody & Arisa
            </h4>
            <p className="font-habibi ">Senin, 12 Februari 2024</p>
          </div>
        </div>
      </section>

      <section
        id="beranda-dekstop"
        className="hidden lg:grid bg-dark-500 py-14 lg:py-0 mb:pb-6 grid-flow-col grid-cols-2 gap-4 row-span-4 h-screen"
      >
        <div className="flex flex-col text-white px-8 pb-20 pt-28 justify-end">
          <div className="flex flex-col text-center my-auto">
            <p>
              “And of His signs is that He created for you from your selves
              mates that you may find tranquility in them; and He placed between
              you affection and mercy. Indeed in that are signs for a people who
              give thought.”
            </p>
            <p>( QS. Ar- Rum 21 )</p>
          </div>
          <div className="flex flex-col ">
            <p className="font-habibi">Pernikahan dari</p>
            <h4 className="font-great-vibes text-5xl mb-4 mt-6">
              Dhody & Arisa
            </h4>
            <p className="font-habibi ml-auto">Senin, 12 Februari 2024</p>
          </div>
        </div>
        <div className="flex w-full relative">
          <Image
            src="/assets/prewedding-home.png"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            quality={100}
            loading="lazy"
          />
        </div>
      </section>
      <section
        id="resepsi"
        className="bg-dark-500 py-14  mb:pb-6 grid grid-flow-row gap-4 row-span-4 h-screen"
      >
        <div className="flex flex-col  w-full relative lg:h-full">
          <div className="absolute h-full w-full bg-dark-450 bg-blur-2px lg:hidden"></div>
          <div className="flex flex-col w-full text-white text-center h-auto  px-8 py-3.5 z-10 lg:my-auto">
            <p className="font-habibi lg:hidden">Pernikahan dari</p>
            <h4 className="font-great-vibes text-5xl lg:text-7xl mb-4 mt-6 ">
              Dhody & Arisa
            </h4>
            <p className="lg:hidden font-habibi ">Senin, 12 Februari 2024</p>
          </div>
        </div>
        <div className="flex w-full px-8 text-white font-habibi text-sm md:text-base lg:text-xl">
          <div className="flex flex-col w-1/2 text-center px-2 break-words">
            <p>Putra dari</p>
            <p>Bapak Andri Wahyudi</p>
            <p>Ibu Ibut Puji Rahayu</p>
          </div>
          <div className="flex flex-col w-1/2 text-center px-2 break-words ">
            <p>Putra dari</p>
            <p>Bapak Suwarno</p>
            <p>Ibu Muntamah</p>
          </div>
        </div>
        <div className="flex flex-col mx-auto h-40 lg:h-full items-center justify-center w-full px-8">
          <div className="flex flex-col md:flex-row w-full">
            <div className="flex w-full my-2 h-16 lg:h-20 md:justify-center">
              <Image
                className="h-12 md:h-16 w-12 md:w-16  mr-6 my-auto"
                src={Ring}
              />
              <div className="flex flex-col text-white font-habibi justify-between h-full">
                <p className="text-base md:text-lg lg:text-3xl">
                  Akad pernikahan{" "}
                </p>
                <p className="text-xs md:text-base lg:text-lg">
                  Pukul 14.00 s.d Selesai
                </p>
              </div>
            </div>

            <div className="flex w-full my-2 h-16 lg:h-20 md:justify-center">
              <img
                src="/assets/icons/resepsi.svg"
                className="h-12 md:h-16 w-12 md:w-16  mr-6 my-auto"
              />
              <div className="flex flex-col text-white font-habibi justify-between h-full">
                <p className="text-base md:text-lg lg:text-3xl">Resepsi </p>
                <p className="text-xs md:text-base lg:text-lg">
                  Pukul 10.00 s.d Selesai
                </p>
              </div>
            </div>
          </div>
          <p className="hidden md:block mt-12 lg:mt-auto mx-auto text-lg text-white font-habibi">
            RT 04 RW 02 Dsn Baran 1 Ds Panjerejo Kec Rejotangan Kab Tulungagung,
            Jawa Timur
          </p>
        </div>
        <div className="flex flex-col mx-auto h-32 lg:h-full items-start lg:items-end justify-start w-full px-8">
          {/* <iframe
            className="w-full h-[520px] rounded-xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d398.2485603069215!2d112.01908849221192!3d-8.132522757689141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78e66c3f660fd1%3A0x5d9f15cf97404673!2sV289%2BXP2%2C%20Baran%20II%2C%20Panjerejo%2C%20Rejotangan%2C%20Tulungagung%20Regency%2C%20East%20Java%2066293!5e0!3m2!1sen!2sid!4v1704105841270!5m2!1sen!2sid"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> */}
          <button className="mt-6 px-6 md:px-12 py-2 md:py-3 flex justify-center items-center border-white border rounded-l-full rounded-r-full mx-auto text-white font-habibi text-sm md:text-base">
            <Image className="h-8 md:h-10 w-8 md:w-10 mr-4" src={Location} />
            Cek Lokasi
          </button>
        </div>
      </section>
      <section
        id="gallery"
        className="bg-dark-500 pt-8 md:pt-0 lg:pt-32 pb-24 lg:pb-8 grid grid-flow-row gap-4 grid-rows-7 lg:grid-rows-5 grid-cols-2 lg:grid-cols-3 h-screen px-4 lg:px-8"
      >
        <h1 className="col-span-2  text-5xl font-great-vibes my-auto mx-auto text-white lg:hidden">
          Gallery
        </h1>
        <div className="flex row-span-3 ">
          <Image
            src="/assets/gallery-mobile/photo-1.png"
            alt="Picture of the author"
            width={500}
            height={500}
            objectFit="cover"
            quality={100}
            loading="lazy"
          />
        </div>
        <div className="flex  row-start-3 col-start-2 row-span-3 lg:row-span-5 bg-white">
          <Image
            src="/assets/gallery-mobile/photo-2.png"
            alt="Picture of the author"
            width={500}
            height={500}
            objectFit="cover"
            quality={100}
            loading="lazy"
          />
        </div>
        <div className="flex row-span-1 col-start-2 lg:col-start-3 row-start-2  lg:row-span-2">
          <Image
            src="/assets/gallery-mobile/photo-3.png"
            alt="Picture of the author"
            width={500}
            height={500}
            objectFit="cover"
            quality={100}
            loading="lazy"
          />
        </div>
        <div className="flex row-span-1 lg:row-span-3">
          <Image
            src="/assets/gallery-mobile/photo-4.png"
            alt="Picture of the author"
            width={500}
            height={500}
            objectFit="cover"
            quality={100}
            loading="lazy"
          />
        </div>
        <div className="flex row-span-2 lg:row-span-2 col-span-2 lg:col-span-1 w-full relative">
          <Image
            src="/assets/gallery-mobile/photo-5.png"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
            quality={100}
            loading="lazy"
          />
        </div>
      </section>
    </BaseLayout>
  );
}

export default MainPage;
