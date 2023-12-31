// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../src/styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import BannerImage1 from "../../assets/bannerImages/bannerImage-1.jpg";
import BannerImage2 from "../../assets/bannerImages/bannerImage-2.jpg";
import BannerImage5 from "../../assets/bannerImages/bannerImage-5.jpg";
import BannerImage6 from "../../assets/bannerImages/bannerImage-6.jpg";

const Banner = () => {
  return (
    <>
      <Swiper
        // spaceBetween={30}
        // effect="fade"
        fadeEffect={{ crossFade: true }}
        centeredSlides={false}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        // className="py-8"
        loop={true}
        style={{
          "--swiper-pagination-color": "#FF1C0A",
          "--swiper-pagination-bullet-inactive-color": "#FFFFFF",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "5px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
        }}
      >
        <SwiperSlide className="overflow-hidden">
          <div className="relative w-full h-[622px] sm:h-[605px]">
            <div className="absolute w-full h-[622px] sm:h-[605px] bg-black opacity-30 z-10"></div>
            <img
              src={BannerImage1}
              alt="home banner"
              className="absolute w-full h-full object-cover sm:animate-bannerScaleAnimation"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
              <h1
                className="uppercase text-5xl sm:text-6xl text-white font-bold tracking-wider"
                data-aos="fade-up"
                data-aos-duration="2500"
              >
                ADVANCE <span className="text-brand">MONEY</span> TRANSFER
              </h1>
              <div className="flex justify-center">
                <p
                  className="text-white sm:text-xl font-light tracking-wider  py-3 px-5 rounded-lg"
                  data-aos="fade-up"
                  data-aos-duration="2500"
                >
                  Relief ... Once You Remit ... Satisfaction Once Your Recieve
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden">
          <div className="relative w-full h-[622px] sm:h-[605px]">
            <div className="absolute w-full h-[622px] sm:h-[605px] bg-black opacity-30 z-10"></div>
            <img
              src={BannerImage2}
              alt="home banner"
              className="absolute w-full h-full object-cover sm:animate-bannerScaleAnimation"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
              <h1 className="uppercase text-5xl sm:text-6xl text-white font-bold tracking-wider">
                ADVANCE <span className="text-brand">MONEY</span> TRANSFER
              </h1>
              <div className="flex justify-center">
                <p className="text-white sm:text-xl font-light tracking-wider  py-3 px-10 sm:px-20  rounded-lg">
                  Fast Effective Reliable
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden">
          <div className="relative w-full h-[622px] sm:h-[605px]">
            <div className="absolute w-full h-[622px] sm:h-[605px] bg-black opacity-30 z-10"></div>
            <img
              src={BannerImage6}
              alt="home banner"
              className="absolute w-full h-full object-cover sm:animate-bannerScaleAnimation"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
              <h1 className="uppercase text-5xl sm:text-6xl text-white font-bold tracking-wider">
                ADVANCE <span className="text-brand">MONEY</span> TRANSFER
              </h1>
              <div className="flex justify-center">
                <p className="text-white sm:text-xl font-light tracking-wider  py-3 px-5 rounded-lg">
                  Relief ... Once You Remit ... Satisfaction Once Your Recieve
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden">
          <div className="relative w-full h-[622px] sm:h-[605px]">
            <div className="absolute w-full h-[622px] sm:h-[605px] bg-black opacity-30 z-10"></div>
            <img
              src={BannerImage5}
              alt="home banner"
              className="absolute w-full h-full object-cover sm:animate-bannerScaleAnimation"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20">
              <h1 className="uppercase text-5xl sm:text-6xl text-white font-bold tracking-wider">
                ADVANCE <span className="text-brand">MONEY</span> TRANSFER
              </h1>
              <div className="flex justify-center">
                <p className="text-white sm:text-xl font-light tracking-wider  py-3 px-10 sm:px-20 rounded-lg">
                  Fast Effective Reliable
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
