// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../../src/styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";


import CoverageImage from "../../assets/coverage/coverageImage-1.jpg";
import CountryImageData from "../../Data/ExistingCoverage";

const ExistingCoverage = () => {
  return (
    <>
      <div className="relative w-full h-[500px] sm:h-[700px]">
        <img
          src={CoverageImage}
          alt=""
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full p-6 sm:p-10 flex  flex-col justify-center items-center">
          <div className="container">
            <div className="text-center w-full font-light flex justify-center">
              <h1 className="text-2xl sm:text-4xl text-slate-700 bg-white py-2 rounded-lg px-12">Existing <span className="text-brand">Coverage</span></h1>
            </div>

            <Swiper
              spaceBetween={30}
              centeredSlides={false}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={false}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="py-8"
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
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
            >
              {CountryImageData.map((item) => (
                <SwiperSlide>
                  <div className="relative sm:w-72 h-80">
                    <img
                      src={item.countryImage}
                      alt=""
                      className="absolute w-full h-full object-cover"
                    />
                    <div className="py-4 bg-white absolute w-full sm:w-72 bottom-0 opacity-90">
                        <h1 className="text-brand font-medium text-xl">{item.countryName}</h1>
                    </div>
                  </div>
                  
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExistingCoverage;
