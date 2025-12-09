// import VideoPlayer from "./videoPlayer";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import ImageWithToggle from "./ImageWithToggle";

// import "swiper/css";
// import "swiper/css/pagination";

// const TestimonialCarousel = ({ testimonials }) => {
//   return (
//     <Swiper
//       spaceBetween={12}
//       slidesPerView={1}
//       loop={true}
//       pagination={{
//         el: ".custom-pagination",
//         clickable: true,
//       }}

//       modules={[Pagination]}
//       breakpoints={{
//         767: {
//           slidesPerView: 2,
//           spaceBetween: 20,
//         },
//         1024: {
//           slidesPerView: 3,
//           spaceBetween: 40,
//         },
//         1280: {
//           slidesPerView: 4,
//           spaceBetween: 30,
//         },
//       }}
//     >
//       {testimonials.map((item, i) => (
//         <SwiperSlide className="h-auto-swiper" key={i}>
//           <div className="flex flex-col justify-between h-full lg:gap-y-[3.3068783069em] md:gap-y-[6.5104166667em] sm:gap-y-[7.8125em] xs:gap-y-[10.4166666667em] gap-y-[13.8888888889em]">
//             <div>
//               <div className="rounded-[10px] w-full aspect-3/2 object-cover object-center relative z-10 mb-2">
//                 <VideoPlayer
//                   videoSrc={item.reviewImg}
//                   thumbnail={item.thumbnail}
//                   wrapperClassName="rounded-[10px] h-full"
//                   videoClassName="rounded-[10px] object-contain h-full"
//                   thumbnailClassName="rounded-[10px] h-full"
//                 />
//               </div>
//               <p
//                 className="text-paraGray font-light lg:text-[1.1904761905em] md:text-[1.7578125em] sm:text-[2.34375em] xs:text-[2.8125em] text-[4.6875em] leading-normal md:mb-[40px] sm:mb-[30px] mb-8"
//                 dangerouslySetInnerHTML={{ __html: item.text }}
//               ></p>
//             </div>
//             {/* Here need to add pagination */}
//             <div className="custom-pagination"></div>

//             <div className="2xl:pt-[64px] md:pt-[52px] sm:pt-[42px] pt-8 border-t border-[#3D3D3D] flex flex-col 2xl:gap-y-[58px] md:gap-y-[42px] gap-7">
//               <div className="flex items-center 2xl:gap-[33px] gap-[20px]">
//                 <ImageWithToggle
//                   src={item.avatar}
//                   alt="Avatar"
//                   className="lg:w-[4.7619047619em] lg:h-[4.7619047619em] md:w-[7.03125em] md:h-[7.03125em] sm:w-[9.375em] xs:w-[9.6875em] sm:h-[9.375em] xs:h-[9.6875em] w-[17.2222222222em] h-[17.2222222222em] rounded-full object-cover"
//                 />
//                 <div>
//                   <h4 className="font-medium text-white/60 2xl:text-[1.5625em] lg:text-[1.455026455em] md:text-[2.34375em] sm:text-[2.8125em] xs:text-[3.75em] text-[5.7291666667em] xl:mb-2 mb-1">
//                     {item.name}
//                   </h4>
//                   <span className="font-normal text-[#D8D8D8] 2xl:text-[1.171875em] lg:text-[1.0582010582em] md:text-[1.5625em] sm:text-[2.34375em] xs:text-[2.8125em] text-[4.6875em]">
//                     {item.subtitle}
//                   </span>
//                 </div>
//               </div>
//               <div className="flex flex-col gap-3">
//                 <div className="flex items-center 2xl:text-base sm:text-base text-[3.6458333333em] font-light text-white gap-3">
//                   <img
//                     src={item.sourceIcon}
//                     alt="source"
//                     className="w-[1.455026455em]"
//                   />{" "}
//                   {item.time}
//                 </div>
//                 <div className="flex">
//                   {[...Array(item.rating)].map((_, idx) => (
//                     <img
//                       src={item.starIcon}
//                       alt="star"
//                       key={idx}
//                       className="md:w-[1.455026455em] w-5 h-auto me-1"
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default TestimonialCarousel;



import VideoPlayer from "./videoPlayer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import ImageWithToggle from "./ImageWithToggle";
import { useState, useRef } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TestimonialCarousel = ({ testimonials }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex);
  };

  const goToSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div className="relative">
      <Swiper
        ref={swiperRef}
        spaceBetween={12}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="home-swiper"
      >
        {testimonials.map((item, i) => (
          <SwiperSlide className="h-auto-swiper" key={i}>
            <div className="flex flex-col justify-between h-full lg:gap-y-[3.3068783069em] md:gap-y-[6.5104166667em] sm:gap-y-[7.8125em] xs:gap-y-[10.4166666667em] gap-y-[10em]">
              <div>
                <div className="rounded-[10px] w-full aspect-3/2 object-cover object-center relative z-10 mb-2">
                  <VideoPlayer
                    videoSrc={item.reviewImg}
                    thumbnail={item.thumbnail}
                    wrapperClassName="rounded-[10px] h-full"
                    videoClassName="rounded-[10px] object-contain h-full"
                    thumbnailClassName="rounded-[10px] h-full"
                  />
                </div>
                <p
                  className="text-paraGray font-light lg:text-[1.1904761905em] md:text-[1.7578125em] sm:text-[2.34375em] xs:text-[2.8125em] text-[4.6875em] leading-normal"
                  // dangerouslySetInnerHTML={{ __html: item.text }}
                  
                >{item.text}</p>
              </div>

              <div className="lg:gap-y-[3.3068783069em] md:gap-y-[6.5104166667em] sm:gap-y-[7.8125em] xs:gap-y-[10.4166666667em] gap-y-[10em] flex justify-content-between flex-col">
                <div className="flex justify-center gap-2 md:hidden">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${currentSlide === index
                        ? "bg-white"
                        : "bg-white/30 hover:bg-white/50"
                        }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="2xl:pt-[64px] md:pt-[52px] sm:pt-[42px] pt-8 border-t border-[#3D3D3D] flex flex-col 2xl:gap-y-[58px] md:gap-y-[42px] gap-7">
                  <div className="flex items-center 2xl:gap-[33px] gap-[20px]">
                    <ImageWithToggle
                      src={item.avatar}
                      alt="Avatar"
                      className="lg:w-[4.7619047619em] lg:h-[4.7619047619em] md:w-[7.03125em] md:h-[7.03125em] sm:w-[9.375em] xs:w-[9.6875em] sm:h-[9.375em] xs:h-[9.6875em] w-[17.2222222222em] h-[17.2222222222em] rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-medium text-white/60 2xl:text-[1.5625em] lg:text-[1.455026455em] md:text-[2.34375em] sm:text-[2.8125em] xs:text-[3.75em] text-[5.7291666667em] xl:mb-2 mb-1">
                        {item.name}
                      </h4>
                      <span className="font-normal text-[#D8D8D8] 2xl:text-[1.171875em] lg:text-[1.0582010582em] md:text-[1.5625em] sm:text-[2.34375em] xs:text-[2.8125em] text-[4.6875em]">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center 2xl:text-base sm:text-base text-[3.6458333333em] font-light text-white gap-3">
                      <img
                        src={item.sourceIcon}
                        alt="source"
                        className="w-[1.455026455em]"
                      />
                      {item.time}
                    </div>
                    <div className="flex">
                      {[...Array(item.rating)].map((_, idx) => (
                        <img
                          src={item.starIcon}
                          alt="star"
                          key={idx}
                          className="md:w-[1.455026455em] w-5 h-auto me-1"
                        />
                      ))}
                    </div>
                  </div>


                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default TestimonialCarousel;