// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../../src/styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide1 from "../../assets/businessPartnersSlider/slide1.png";
import Slide2 from "../../assets/bannerImages/bannerImage-2.jpg";

const OurBusinessPartners = () => {
  return (
    <>
      <div className="container mx-auto py-4 sm:py-16">
        <h1 className="text-2xl sm:text-2xl sm:pb-2 font-light w-full text-center">
          Our <span className="text-brand">Business Partners</span>
        </h1>
        <Swiper
          spaceBetween={30}
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="sm:py-4 py-4 px-4 sm:px-0"
          loop={true}
          style={{
            "--swiper-pagination-color": "#FF1C0A",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "5px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 50,
            }
          }}
        >
          <SwiperSlide className="h-60 sm:h-60 flex justify-center relative w-full ">
            <img src={Slide1} alt="" className="absolute w-full h-full object-contain" />
          </SwiperSlide>
          <SwiperSlide className="h-60 sm:h-60 flex justify-center relative w-full bg-offWhite">
            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold">Business Partner 2</h1>
            {/* <img src={Slide2} alt="" className="absolute w-full h-full object-cover" /> */}
          </SwiperSlide>
          <SwiperSlide className="h-60 sm:h-60 flex justify-center relative w-full bg-offWhite">
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold">Business Partner 3</h1>
          {/* <img src={Slide1} alt="" className="absolute w-full h-full object-contain" /> */}
          </SwiperSlide>
          <SwiperSlide className="h-60 sm:h-60 flex justify-center relative w-full bg-offWhite">
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold">Business Partner 4</h1>
          {/* <img src={Slide1} alt="" className="absolute w-full h-full object-contain" /> */}
          </SwiperSlide>
          <SwiperSlide className="h-60 sm:h-60 flex justify-center relative w-full bg-offWhite">
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold">Business Partner 5</h1>
          {/* <img src={Slide1} alt="" className="absolute w-full h-full object-contain" /> */}
          </SwiperSlide>
          <SwiperSlide className="h-60 sm:h-60 flex justify-center relative w-full bg-offWhite">
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold">Business Partner 6</h1>
          {/* <img src={Slide1} alt="" className="absolute w-full h-full object-contain" /> */}
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default OurBusinessPartners;
