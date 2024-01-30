import BaseLayout from "@/components/Layout";
import Image from "next/image";
import React, { useState } from "react";
import "aos/dist/aos.css";
import { Modal } from "flowbite-react";
import { LuCalendarHeart, LuMapPin } from "react-icons/lu";

function MainPage() {
  const [openGift, setOpenGift] = useState(false);

  return (
    <>
      <BaseLayout>
        <section
          id="beranda"
          className="flex lg:hidden bg-cover bg-center w-full h-screen items-start py-14"
          style={{ backgroundImage: "url(/assets/gallery/DSC07639.jpg)" }}
        >
          <div className="flex flex-col w-full relative">
            <div
              data-aos="fade-up"
              className="flex flex-col w-full text-white text-center h-auto px-8 py-3.5 z-10"
            >
              <p>Wedding Invitation</p>
              <h4 className="font-great-vibes text-6xl font-bold mb-1 mt-3">
                Dhody & Arisa
              </h4>
              <p data-aos="fade-up">Senin, 12 Februari 2024</p>
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
                untukmu isteri-isteri dari jenismu sendiri, supaya kamu
                cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya
                diantaramu rasa kasih dan sayang. Sesungguhnya pada yang
                demikian itu benar-benar terdapat tanda-tanda bagi kaum yang
                berfikir."
              </p>
              <p>( QS. Ar- Rum 21 )</p>
            </div>
            <div className="flex flex-col">
              <p>Wedding Invitation</p>
              <h4 className="font-great-vibes text-6xl font-bold mb-4 mt-6">
                Dhody & Arisa
              </h4>
              <p className=" ml-auto">Senin, 12 Februari 2024</p>
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
          data-aos="fade-up"
          className="relative bg-[#472c1a] py-14  mb:pb-6 grid grid-flow-row gap-4 row-span-4 min-h-screen"
        >
          <div className="absolute h-full w-full overflow-hidden">
            <Image
              alt="flower"
              className="z-10 w-9/12 md:w-6/12 md:h-6/12 absolute top-0 right-0 opacity-15 pointer-events-none"
              width={620}
              height={620}
              src="/assets/icons/flower.svg"
            />
          </div>

          <div className="flex flex-col w-full relative lg:h-full">
            <div className="flex flex-col w-full text-white text-center h-auto px-8 py-3.5 z-10 lg:my-auto">
              <p data-aos="fade-up" className="mb-6">
                Assalamualaikum Wr. Wb.
              </p>
              <p data-aos="fade-up" className="mb-3">
                Untuk Mengikuti Sunnah Rasul-Mu Dalam Rangka Membentuk Keluarga
                Yang Sakinah, Mawaddah, Warahmah.
                <br />
                <br />
                Maka Ijinkanlah Kami Menikahkannya.
                <br />
                Ya Allah Perkenankan Kami Merangkaikan Kasih Sayang Yang Kau
                Ciptakan Diantara Putra-Putri Kami.
              </p>
              <div className="flex flex-col items-center gap-6 w-full text-white text-sm md:text-base lg:text-xl mb-6">
                <div
                  data-aos="fade-up"
                  className="flex flex-col text-center break-words"
                >
                  <h4
                    data-aos="fade-up"
                    className="font-great-vibes text-6xl font-bold lg:text-7xl mb-4 mt-6 "
                  >
                    Dhody Yuantoko
                  </h4>
                  <p className="mb-3">Putra dari</p>
                  <p className="text-[16px] md:text-2xl font-semibold">
                    Bapak Andri Wahyudi
                  </p>
                  <p className="text-[16px] md:text-2xl mt-3 font-semibold">
                    Ibu Ibut Puji Rahayu
                  </p>
                </div>
                <p className="font-great-vibes text-6xl mb-[-32px]">&</p>
                <div
                  data-aos="fade-up"
                  className="flex flex-col text-center break-words "
                >
                  <h4
                    data-aos="fade-up"
                    className="font-great-vibes text-6xl font-bold lg:text-7xl mb-4 mt-6 "
                  >
                    Arisa Aini
                  </h4>
                  <p className="mb-3">Putri dari</p>
                  <p className="text-[16px] md:text-2xl font-semibold">
                    Bapak Suwarno
                  </p>
                  <p className="text-[16px] md:text-2xl mt-3 font-semibold">
                    Ibu Muntamah
                  </p>
                </div>
              </div>

              <p data-aos="fade-up" className=" mb-6 md:mx-[320px]">
                Dengan Memohon Rahmat dan Ridho Allah Subhanahu Wa Ta' ala, Kami
                Mengundang Bapak/Ibu/Saudara/I
                <br />
                Untuk Menghadiri Resepsi Pernikahan Kami. Yang Insya Allah Akan
                Dilaksanakan Pada:
              </p>
              <p className="font-great-vibes text-5xl font-medium">
                Acara Resepsi
              </p>
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="flex flex-col mx-auto h-40 lg:h-full items-center justify-center w-full px-8"
          >
            <div className="flex flex-row w-full">
              <div className="my-[18px] flex w-full items-center justify-center lg:h-20 md:justify-center">
                <LuCalendarHeart className="text-white h-12 w-12 mr-6" />
                <div className="flex flex-col text-white justify-between h-full">
                  <p className="font-medium">
                    Senin, 12 Februari 2024 <br />
                    <span className="font-light">Pukul 14.00 s.d Selesai</span>
                  </p>
                  <p className="text-xs md:text-base lg:text-lg"></p>
                </div>
              </div>
            </div>

            <p className="mt-3 lg:mt-auto mx-auto text-center text-white ">
              <span className="text-xl font-semibold">Lokasi</span>
              <br />
              RT 04 RW 02 Dsn Baran 1 Ds Panjerejo Kec Rejotangan Kab
              Tulungagung, Jawa Timur
            </p>
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-col mx-auto lg:h-full items-center justify-start w-full px-8 mt-6 z-40"
          >
            <iframe
              title="maps"
              className="w-full h-[320px] max-w-[610px] rounded-xl mt-3"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d398.2485603069215!2d112.01908849221192!3d-8.132522757689141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78e66c3f660fd1%3A0x5d9f15cf97404673!2sV289%2BXP2%2C%20Baran%20II%2C%20Panjerejo%2C%20Rejotangan%2C%20Tulungagung%20Regency%2C%20East%20Java%2066293!5e0!3m2!1sen!2sid!4v1704105841270!5m2!1sen!2sid"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <button
              onClick={() =>
                window.open(
                  "https://maps.app.goo.gl/QqvhFsSkCvBmpgMu8",
                  "_blank"
                )
              }
              className="mt-6 px-6 md:px-12 py-2 md:py-3 flex justify-center items-center border-white border rounded-l-full rounded-r-full mx-auto text-white  text-sm md:text-base hover:bg-white hover:text-black"
            >
              <LuMapPin className="h-6 w-6 mr-3" />
              Cek Lokasi
            </button>
          </div>
        </section>
        <section
          id="gallery"
          className="flex flex-col items-center justify-center bg-dark-500 pt-8 md:pt-0 lg:pt-32 pb-24 lg:pb-8 gap-4 px-4 lg:px-8"
        >
          <h1 className="my-6 col-span-2 text-5xl font-great-vibes mx-auto text-white">
            Gallery
          </h1>

          <div className="grid grid-cols-2 gap-4 items-center justify-center">
            <div className="grid gap-4">
              <div>
                <img
                  data-aos="fade-up"
                  className="h-auto max-w-full rounded-lg"
                  src="/assets/gallery/DSC07626.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  data-aos="fade-up"
                  className="h-auto max-w-full rounded-lg"
                  src="/assets/gallery/DSC07691.jpg"
                  alt=""
                />
              </div>
            </div>

            <div className="grid gap-4">
              <div>
                <img
                  data-aos="fade-up"
                  className="h-auto max-w-full rounded-lg"
                  src="/assets/gallery/DSC07747.jpg"
                  alt=""
                />
              </div>
              <div>
                <img
                  data-aos="fade-up"
                  className="h-auto max-w-full rounded-lg"
                  src="/assets/gallery/DSC07917.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="gift"
          className="flex flex-col items-center justify-center bg-dark-500 pt-8 md:pt-0 lg:pt-32 pb-24 lg:pb-8 gap-4 px-4 lg:px-8"
        >
          <h1 className="my-6 col-span-2 text-5xl font-great-vibes mx-auto text-white">
            Wedding Gift
          </h1>
          <div className="flex flex-col text-white px-8 justify-center items-center">
            <p className="text-center text-white">
              Doa restu anda merupakan karunia yang sangat berarti bagi kami.
              Namun jika memberi adalah ungkapan tanda kasih anda. Anda dapat
              memberi kado secara cashless.
            </p>
            <button
              onClick={() => {
                setOpenGift(true);
              }}
              className="mt-6 px-6 md:px-12 py-2 md:py-3 flex justify-center items-center border-white border rounded-l-full rounded-r-full mx-auto text-white text-sm md:text-base hover:bg-white hover:text-black"
            >
              Amplop Digital
            </button>
          </div>
        </section>

        <section className="min-h-screen">
          <div className="absolute h-full w-full overflow-hidden">
            <Image
              alt="flower"
              className="z-10 w-9/12 md:w-6/12 md:h-6/12 absolute bottom-0 left-0 opacity-15 rotate-180 pointer-events-none"
              width={620}
              height={620}
              src="/assets/icons/flower.svg"
            />
          </div>
          <div className="flex flex-col text-white px-8 pb-20 pt-28 justify-center items-center">
            <div
              data-aos="fade-up"
              className="flex flex-col text-center my-auto"
            >
              <p>
                "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
                untukmu isteri-isteri dari jenismu sendiri, supaya kamu
                cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya
                diantaramu rasa kasih dan sayang. Sesungguhnya pada yang
                demikian itu benar-benar terdapat tanda-tanda bagi kaum yang
                berfikir."
              </p>
              <p>( QS. Ar- Rum 21 )</p>
            </div>
            <p data-aos="fade-up" className=" text-white text-center my-6">
              Atas Kehadiran dan Doa Restunya Kami Ucapkan Terimakasih.
            </p>
            <p data-aos="fade-up" className=" text-white text-center my-3">
              Wassalamualaikum Wr. Wb.
            </p>
            <p data-aos="fade-up" className=" text-white text-center my-3">
              Kami Yang Berbahagia.
              <br />
              Keluarga Besar Kedua Mempelai
            </p>
            <h4
              data-aos="fade-up"
              className="text-center font-great-vibes text-4xl font-bold mb-4 mt-6"
            >
              Dhody
              <br />&<br />
              Arisa
            </h4>
          </div>
        </section>
        <Modal
          className="text-white"
          show={openGift}
          onClose={() => setOpenGift(false)}
        >
          <Modal.Header className="bg-[#472c1a] border-none">
            <h1 className="text-white">Wedding Gift</h1>
          </Modal.Header>
          <Modal.Body className="bg-[#472c1a] border-none">
            <div className="space-y-6">
              <div className="border-white border rounded-xl p-8 pt-16 text-center">
                <h2 className="text-lg font-medium">
                  Bank Rakyat Indonesia (BRI)
                </h2>
                <p>Dhody Yuantoro</p>
                <p>659801038914539</p>
                <button
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText("659801038914539");
                      window.alert("Rekening berhasil disalin");
                    } catch (error) {
                      console.error("Error copying to clipboard:", error);
                    }
                  }}
                  className="font-semibold mt-6 px-6 md:px-12 py-2 md:py-3 flex justify-center items-center border-white border rounded-l-full rounded-r-full mx-auto text-white  text-sm md:text-base "
                >
                  Salin Rekening
                </button>
              </div>
              <div className="border-white border rounded-xl p-8 pt-16 text-center">
                <h2 className="text-lg font-medium">
                  Bank Jawa Timur (Bank Jatim)
                </h2>
                <p>Dhody Yuantoko</p>
                <p>0476166870</p>
                <button
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText("0476166870");
                      window.alert("Rekening berhasil disalin");
                    } catch (error) {
                      console.error("Error copying to clipboard:", error);
                    }
                  }}
                  className="font-semibold mt-6 px-6 md:px-12 py-2 md:py-3 flex justify-center items-center border-white border rounded-l-full rounded-r-full mx-auto text-white  text-sm md:text-base "
                >
                  Salin Rekening
                </button>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="bg-[#472c1a] border-none">
            <button
              onClick={() => setOpenGift(false)}
              className="bg-white text-[#472c1a] w-full py-3 rounded-2xl font-semibold"
            >
              Thank You
            </button>
          </Modal.Footer>
        </Modal>
      </BaseLayout>
    </>
  );
}

export default MainPage;
