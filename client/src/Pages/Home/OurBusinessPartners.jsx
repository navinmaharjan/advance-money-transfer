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

const OurBusinessPartners = () => {
  return (
    <>
      <div className="container mx-auto py-16">
        <h1 className="text-4xl pb-8 font-light w-full text-center">
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
          className="py-8"
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
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide className="h-60">
            <img src={Slide1} alt="" />
          </SwiperSlide>
          <SwiperSlide className="h-60">
            <img src={Slide1} alt="" />
          </SwiperSlide>
          <SwiperSlide className="h-60">
            <img src={Slide1} alt="" />
          </SwiperSlide>
          <SwiperSlide className="h-60">
            <img src={Slide1} alt="" />
          </SwiperSlide>
          <SwiperSlide className="h-60">
            <img src={Slide1} alt="" />
          </SwiperSlide>
          <SwiperSlide className="h-60">
            <img src={Slide1} alt="" />
          </SwiperSlide>
          <SwiperSlide className="h-60">
            <img src={Slide1} alt="" />
          </SwiperSlide>
          <SwiperSlide className="h-60">
            <img src={Slide1} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default OurBusinessPartners;
