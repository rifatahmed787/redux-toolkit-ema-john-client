import React from "react";
import img1 from "../../../../assets/images/banner-images/headphone.png";
import img2 from "../../../../assets/images/banner-images/bag2.png";
import img3 from "../../../../assets/images/banner-images/watch1.png";
import img4 from "../../../../assets/images/banner-images/xbox.png";
import img5 from "../../../../assets/images/banner-images/tv.png";
import { Icon } from "@iconify/react";
// import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid grid-cols-2 justify-items-center space-y-5 bg-[#FFEBCD] dark:text-white  dark:bg-black">
            <div className="my-auto">
              <h2 className="text-3xl font-serif font-bold">
                Cool dude headphone
              </h2>
              <p className="py-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                Commodi fuga ullam fugiat, id velit dicta.
              </p>
              <h2 className="pb-2 text-xl font-bold">$400</h2>
              <Link to="/shop">
                <button className="btn bg-orange-500 border-none hover:bg-orange-500">
                  Buy Now
                  <Icon icon="material-symbols:arrow-forward-ios" width="12" />
                  <Icon icon="material-symbols:arrow-forward-ios" width="12" />
                </button>
              </Link>
            </div>

            <img
              className="lg:w-[450px] md:w-96 sm:w-full pb-[54px]"
              src={img1}
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-2 justify-items-center pb-10 pt-4 bg-[#FFEBCD] dark:bg-black dark:text-white">
            <div className="my-auto">
              <h2 className="text-3xl font-serif font-bold">
                Cool dude backpack
              </h2>
              <p className="py-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                Commodi fuga ullam fugiat, id velit dicta.
              </p>
              <h2 className="pb-2 text-xl font-bold">$400</h2>
              <Link to="/shop">
                <button className="btn bg-orange-500 border-none hover:bg-orange-500">
                  Buy Now
                  <Icon icon="material-symbols:arrow-forward-ios" width="12" />
                  <Icon icon="material-symbols:arrow-forward-ios" width="12" />
                </button>
              </Link>
            </div>
            <img className="lg:w-[500px] md:w-96 sm:full" src={img2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-2 justify-items-center pb-10 pt-4 bg-[#FFEBCD] dark:bg-black dark:text-white">
            <div className="my-auto">
              <h2 className="text-3xl font-serif font-bold">Cool dude watch</h2>
              <p className="py-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                Commodi fuga ullam fugiat, id velit dicta.
              </p>
              <h2 className="pb-2 text-xl font-bold">$400</h2>
              <Link to="/shop">
                <button className="btn bg-orange-500 border-none hover:bg-orange-500">
                  Buy Now
                  <Icon icon="material-symbols:arrow-forward-ios" width="12" />
                  <Icon icon="material-symbols:arrow-forward-ios" width="12" />
                </button>
              </Link>
            </div>
            <img className="lg:w-[500px] md:w-96 sm:w-full" src={img3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-2 justify-items-center space-y-5 bg-[#FFEBCD] dark:bg-black dark:text-white">
            <div className="my-auto">
              <h2 className="text-3xl font-serif font-bold">
                X box for your living room
              </h2>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                Suscipit quidem voluptates soluta, consequatur nisi quaerat.
              </p>
              <h2 className="pb-2 text-xl font-bold">$1200</h2>
              <Link to="/shop">
                {" "}
                <button className="btn bg-orange-500 border-none hover:bg-orange-500">
                  Buy Now
                  <Icon icon="material-symbols:arrow-forward-ios" width="12" />
                  <Icon icon="material-symbols:arrow-forward-ios" width="12" />
                </button>
              </Link>
            </div>
            <img className="lg:w-[500px] md:w-96 sm:w-full" src={img4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-2 justify-items-center space-y-5 dark:text-white bg-[#FFEBCD] dark:bg-black">
            <div className="my-auto">
              <h2 className="text-3xl font-serif font-bold">
                LCD TV for watching sports
              </h2>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br />
                Officiis eius qui suscipit quisquam blanditiis perferendis.
              </p>
              <h2 className="pb-2 text-xl font-bold">$600</h2>
              <Link to="/shop">
                <button className="btn bg-orange-500 border-none hover:bg-orange-500">
                  Buy Now{" "}
                  <Icon icon="material-symbols:arrow-forward-ios" width="12" />
                  <Icon icon="material-symbols:arrow-forward-ios" width="12" />
                </button>
              </Link>
            </div>
            <img className="lg:w-[500px] md:w-96 sm:w-full" src={img5} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
