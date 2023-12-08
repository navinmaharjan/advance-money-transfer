import Person from "../../assets/personImage/person1.jpeg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../src/styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Banner = () => {
  return (
    <>
      <div className="bg-offWhite py-4 sm:py-16">
        <h1 className="text-2xl sm:text-2xl sm:pb-2 font-light w-full text-center text-brand">
          Testimonial
        </h1>
        <Swiper
          // spaceBetween={30}
          // effect="fade"
          fadeEffect={{ crossFade: true }}
          centeredSlides={false}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={true}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="container mx-auto"
          loop={true}
          style={{
            "--swiper-pagination-color": "#FF1C0A",
            "--swiper-pagination-bullet-inactive-color": "#F5F5F6",
            "--swiper-pagination-bullet-inactive-opacity": "5",
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
          <SwiperSlide>
            <div className="flex flex-col  px-4 sm:px-20 bg-white py-8">
              <p className="font-light text-center">
                {" "}
                <span className="text-brand text-xl">"</span> Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Cupiditate laboriosam
                blanditiis a cumque eveniet velit voluptate repudiandae. Error
                ullam natus deserunt eius est explicabo, quia facere quisquam
                illo necessitatibus quidem quos consequuntur porro architecto,
                nihil inventore doloribus quas nulla dolorum ab pariatur minima
                iste et omnis! Consectetur praesentium ullam ex{" "}
                <span className="text-brand text-xl">"</span>
              </p>
              <div className="flex justify-center pt-4">
                <div className="relative w-20 h-20 rounded-full overflow-hidden">
                  <img
                    src={Person}
                    alt="testimonial"
                    className="absolute w-full h-full object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
              </div>

              <h3 className="font-medium text-brand">Mr. Sagar Dahal</h3>
              <h3 className="font-light text-slate-700 text-base">CEO, Indreni Travels</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col  px-4 sm:px-20 bg-white py-8">
              <p className="font-light text-center">
                {" "}
                <span className="text-brand text-xl">"</span> Lorem ipsum dolor
                sit amet, consectetur adipisicing elit. Cupiditate laboriosam
                blanditiis a cumque eveniet velit voluptate repudiandae. Error
                ullam natus deserunt eius est explicabo, quia facere quisquam
                illo necessitatibus quidem quos consequuntur porro architecto,
                nihil inventore doloribus quas nulla dolorum ab pariatur minima
                iste et omnis! Consectetur praesentium ullam ex{" "}
                <span className="text-brand text-xl">"</span>
              </p>
              <div className="flex justify-center pt-4">
                <div className="relative w-20 h-20 rounded-full overflow-hidden">
                  <img
                    src={Person}
                    alt="testimonial"
                    className="absolute w-full h-full object-cover top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
              </div>

              <h3 className="font-medium text-brand">Mr. Ram kumar Thapa</h3>
              <h3 className="font-light text-slate-700 text-base">MD, Platinum Enterprises</h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
