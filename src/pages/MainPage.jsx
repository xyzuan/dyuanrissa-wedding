import BaseLayout from "@/components/Layout";
import Image from "next/image";
import React from "react";
import Location from "../../public/assets/icons/location.svg";

function MainPage() {
  return (
    <BaseLayout>
      <section
        id="beranda"
        className="flex lg:hidden bg-cover bg-center w-full h-screen items-start py-14"
        style={{ backgroundImage: "url(/assets/gallery/DSC07639.jpg)" }}
      >
        <div className="flex flex-col w-full relative">
          <div className="flex flex-col w-full text-white text-center h-auto px-8 py-3.5 z-10">
            <p className="font-habibi">Pernikahan dari</p>
            <h4 className="font-great-vibes text-6xl font-bold mb-1 mt-3">
              Dhody & Arisa
            </h4>
            <p className="font-habibi ">Senin, 12 Februari 2024</p>
          </div>
        </div>
      </section>

      <section
        id="beranda"
        className="hidden h-screen lg:grid bg-dark-500 py-14 lg:py-0 mb:pb-6 grid-flow-col grid-cols-2 gap-4 row-span-4"
      >
        <div className="flex flex-col text-white px-8 pb-20 pt-28 justify-end">
          <div className="flex flex-col text-center my-auto">
            <p>
              "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
              untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung
              dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa
              kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar
              terdapat tanda-tanda bagi kaum yang berfikir."
            </p>
            <p>( QS. Ar- Rum 21 )</p>
          </div>
          <div className="flex flex-col ">
            <p className="font-habibi">Pernikahan dari</p>
            <h4 className="font-great-vibes text-6xl font-bold mb-4 mt-6">
              Dhody & Arisa
            </h4>
            <p className="font-habibi ml-auto">Senin, 12 Februari 2024</p>
          </div>
        </div>
        <div className="flex w-full relative">
          <Image
            src="/assets/gallery/DSC07639.jpg"
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
        className="relative bg-[#472c1a] py-14  mb:pb-6 grid grid-flow-row gap-4 row-span-4 min-h-screen"
      >
        <div className="absolute h-full w-full overflow-hidden">
          <Image
            className="z-10 w-9/12 md:w-6/12 md:h-6/12 absolute bottom-0 left-0 opacity-15 rotate-180 pointer-events-none"
            width={620}
            height={620}
            src="/assets/icons/flower.svg"
          />

          <Image
            className="z-10 w-9/12 md:w-6/12 md:h-6/12 absolute top-0 right-0 opacity-15 pointer-events-none"
            width={620}
            height={620}
            src="/assets/icons/flower.svg"
          />
        </div>

        <div className="flex flex-col  w-full relative lg:h-full">
          <div className="absolute h-full w-full lg:hidden"></div>
          <div className="flex flex-col w-full text-white text-center h-auto  px-8 py-3.5 z-10 lg:my-auto">
            <p className="font-habibi lg:hidden">Pernikahan dari</p>
            <h4 className="font-great-vibes text-6xl font-bold lg:text-7xl mb-4 mt-6 ">
              Dhody & Arisa
            </h4>
            <p className="lg:hidden font-habibi ">Senin, 12 Februari 2024</p>
          </div>
        </div>
        <div className="flex w-full px-8 text-white font-habibi text-sm md:text-base lg:text-xl mb-6">
          <div className="flex flex-col w-1/2 text-center px-[1px] break-words">
            <p className="mb-3 text-xs">Putra dari</p>
            <p className="text-[16px] md:text-2xl font-bold">
              Bapak Andri Wahyudi
            </p>
            <p className="text-[16px] md:text-2xl mt-3 font-bold">
              Ibu Ibut Puji Rahayu
            </p>
          </div>
          <div className="flex flex-col w-1/2 text-center px-2 break-words ">
            <p className="mb-3 text-xs">Putri dari</p>
            <p className="text-[16px] md:text-2xl font-bold">Bapak Suwarno</p>
            <p className="text-[16px] md:text-2xl mt-3 font-bold">
              Ibu Muntamah
            </p>
          </div>
        </div>
        <div className="flex flex-col mx-auto h-40 lg:h-full items-center justify-center w-full px-8">
          <div className="flex flex-row w-full">
            <div className="my-[18px] flex w-full items-center justify-center lg:h-20 md:justify-center">
              <img
                src="/assets/icons/resepsi.svg"
                className="h-12 md:h-16 w-12 md:w-16  mr-6 my-auto"
              />
              <div className="flex flex-col text-white font-habibi justify-between h-full">
                <p className="text-2xl">
                  Ngunduh Mantu <br />
                  <span className="text-base">Pukul 14.00 s.d Selesai</span>
                </p>
                <p className="text-xs md:text-base lg:text-lg"></p>
              </div>
            </div>
          </div>
          <p className="mt-12 lg:mt-auto mx-auto text-lg text-center text-white font-habibi">
            RT 04 RW 02 Dsn Baran 1 Ds Panjerejo Kec Rejotangan Kab Tulungagung,
            Jawa Timur
          </p>
        </div>
        <div className="flex flex-col mx-auto lg:h-full items-center justify-start w-full px-8 mt-6">
          <iframe
            className="w-full h-[320px] max-w-[610px] rounded-xl mt-3"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d398.2485603069215!2d112.01908849221192!3d-8.132522757689141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78e66c3f660fd1%3A0x5d9f15cf97404673!2sV289%2BXP2%2C%20Baran%20II%2C%20Panjerejo%2C%20Rejotangan%2C%20Tulungagung%20Regency%2C%20East%20Java%2066293!5e0!3m2!1sen!2sid!4v1704105841270!5m2!1sen!2sid"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <button
            onClick={() =>
              window.open("https://maps.app.goo.gl/QqvhFsSkCvBmpgMu8", "_blank")
            }
            className="mt-6 px-6 md:px-12 py-2 md:py-3 flex justify-center items-center border-white border rounded-l-full rounded-r-full mx-auto text-white font-habibi text-sm md:text-base z-40"
          >
            <Image className="h-8 md:h-10 w-8 md:w-10 mr-4" src={Location} />
            Cek Lokasi
          </button>
        </div>
      </section>
      <section
        id="gallery"
        className="flex flex-col items-center justify-center bg-dark-500 pt-8 md:pt-0 lg:pt-32 pb-24 lg:pb-8 gap-4 px-4 lg:px-8"
      >
        <h1 className="my-6 col-span-2 text-5xl font-great-vibes mx-auto text-white lg:hidden">
          Gallery
        </h1>

        <div class="grid grid-cols-2 gap-4 items-center justify-center">
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="/assets/gallery/DSC07626.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="/assets/gallery/DSC07691.jpg"
                alt=""
              />
            </div>
          </div>

          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="/assets/gallery/DSC07747.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="/assets/gallery/DSC07917.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
}

export default MainPage;
