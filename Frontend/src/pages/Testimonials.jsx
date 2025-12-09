import { useState, useEffect } from "react";
import axios from "axios";
import QuoteIcon from "../assets/icons/quote-icon.svg";
import PlaceholerImage from "../assets/placeholder.png";
import Mainavatar from "../assets/avatar6.png";
import Russia1 from "../assets/flags/Russia1.png";
import Avatarnew from "../assets/avatar6.png";
import CheckmarkGray from "../assets/icons/checkmark-gray.svg";
import PinkQuote from "../assets/icons/pink-quote.svg";
import VideoPlayer from "../components/videoPlayer";
import TestVideo from "../assets/videos/testimonial-video.mp4";
import TestPlaceholder from "../assets/videos/0001.jpg";
import Video1 from "../assets/videos/placeholder-video.mp4";
import Video2 from "../assets/videos/placeholder-video.mp4";
import Video3 from "../assets/videos/placeholder-video.mp4";
import Video4 from "../assets/videos/placeholder-video.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import GetInTouch from "../components/Get-in-touch";
import ImageWithToggle from "../components/ImageWithToggle";
import Eclipse from "../assets/icons/ellipse.svg";
import API_BASE_URL from "../config/api";

// Testimonials slides Data array
const slidesData = [
  {
    id: 1,
    title: "I thought it was not possible at I thought it was not possible at",
    name: "NATALIA",
    tag: "8 beach",
    image: PlaceholerImage,
    avatar: Mainavatar,
    flag: Russia1,
    video: Video1,
  },
  {
    id: 2,
    title: "Never imagined I could achieve this score!",
    name: "Alex",
    tag: "9 overall",
    image: PlaceholerImage,
    avatar: Mainavatar,
    flag: Russia1,
    video: Video2,
  },
  {
    id: 3,
    title: "With dedication, everything is possible!",
    name: "Sophia",
    tag: "8.5 band",
    image: PlaceholerImage,
    avatar: Mainavatar,
    flag: Russia1,
    video: Video3,
  },
  {
    id: 4,
    title: "Hard work paid off in the end.",
    name: "Daniel",
    tag: "9 band",
    image: PlaceholerImage,
    avatar: Mainavatar,
    flag: Russia1,
    video: Video4,
  },
  {
    id: 5,
    title:
      "I thought it was not possible at I thought it was not possible at I thought it was not possible at I thought it was not possible at",
    name: "NATALIA",
    tag: "8 beach",
    image: PlaceholerImage,
    avatar: Mainavatar,
    flag: Russia1,
    video: Video1,
  },
  {
    id: 6,
    title: "I thought it was not possible at I thought it was not possible at",
    name: "NATALIA",
    tag: "8 beach",
    image: PlaceholerImage,
    avatar: Mainavatar,
    flag: Russia1,
    video: Video2,
  },
];

const Testimonials = () => {
  const [space, setSpace] = useState(30); // default for desktop
  const [pteFameData, setPteFameData] = useState([]);
  const [naatiCclResultsData, setNaatiCclResultsData] = useState([]);
  const [testimonialVideo, setTestimonialVideo] = useState({
    video_url: TestVideo,
    video_placeholder_img: TestPlaceholder,
    heading: "Why Students Love Learning With Us",
    description:
      "When I started my journey I really thought that it would be impossible for me to clear he test due to my background. xxxxxxxxxxxxx",
    student_name: "NATALIA",
    student_tag: "PTE & NAATI CCL",
    student_avatar: Mainavatar,
  });
  const [loading, setLoading] = useState(true);
  const [naatiLoading, setNaatiLoading] = useState(true);

  useEffect(() => {
    const updateSpace = () => {
      if (window.innerWidth < 480) {
        // For mobile: 6.25vw
        setSpace((window.innerWidth * 6.25) / 100);
      } else {
        // For desktop: 30px
        setSpace(30);
      }
    };

    updateSpace();
    window.addEventListener("resize", updateSpace);

    return () => window.removeEventListener("resize", updateSpace);
  }, []);

  useEffect(() => {
    fetchPTEFameData();
    fetchNAATICCLResultsData();
    fetchTestimonialVideo();
  }, []);

  const fetchPTEFameData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/frontend/pte-fame`);
      setPteFameData(response.data);
    } catch (error) {
      console.error("Error fetching PTE Fame data:", error);
      // Fallback to static data if API fails
      setPteFameData(slidesData);
    } finally {
      setLoading(false);
    }
  };

  const fetchNAATICCLResultsData = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/frontend/naati-ccl-results`
      );
      setNaatiCclResultsData(response.data);
    } catch (error) {
      console.error("Error fetching NAATI CCL Results data:", error);
      // Fallback to static data if API fails
      setNaatiCclResultsData(slidesData);
    } finally {
      setNaatiLoading(false);
    }
  };

  const fetchTestimonialVideo = async () => {
    try {
      const [videoRes, heroRes] = await Promise.all([
        axios.get(`${API_BASE_URL}/testimonial-video`),
        axios.get(`${API_BASE_URL}/testimonial-hero-section`)
      ]);

      setTestimonialVideo({
        video_url: videoRes.data?.video_url
          ? `${API_BASE_URL.replace("/api", "")}/uploads/${videoRes.data.video_url}`
          : TestVideo,
        video_placeholder_img: videoRes.data?.video_placeholder_img
          ? `${API_BASE_URL.replace("/api", "")}/uploads/${videoRes.data.video_placeholder_img}`
          : TestPlaceholder,
        heading: heroRes.data?.heading || "Why Students Love Learning With Us",
        description: heroRes.data?.description || "When I started my journey I really thought that it would be impossible for me to clear he test due to my background. xxxxxxxxxxxxx",
        student_name: heroRes.data?.student_name || "NATALIA",
        student_tag: heroRes.data?.student_tag || "PTE & NAATI CCL",
        student_avatar: heroRes.data?.student_avatar
          ? `${API_BASE_URL.replace("/api", "")}/uploads/${heroRes.data.student_avatar}`
          : Mainavatar,
      });
    } catch (error) {
      console.error("Error fetching testimonial data:", error);
    }
  };

  return (
    <>
      <section className="md:pt-[14.5502645503em] sm:pt-[28.125em] xs:pt-[37.5em] pt-[55vw] sm:pb-[5.0925925926em] md:mt-[-7.9365079365em] sm:mt-[-15.6453715776em] mt-[-33.33vw]">
        <div className="custom-container mx-auto py-0 px-4 sm:px-[2.1164021164em] w-full relative z-10">
          <div className="grid items-start lg:grid-cols-2 xl:gap-[7.9365079365em] gap-[5.9523809524em]">
            <div>
              <div className="2xl:max-w-[39.0211640212em] xl:max-w-[34.7222222222em] lg:max-w-[34.96875em]">
                <h1 className="font-inter font-bold lg:text-[3.6375661376em] md:text-[4.1015625em] sm:text-[6.5625em] xs:text-[8.75em] text-[10em] xs:leading-[normal] leading-[1.147] inline-block 2xl:mt-2 mt-0 text-white">
                  {testimonialVideo.heading}
                </h1>
                <div className="lg:py-[4.8828125em] md:py-[6.518904824em] sm:py-[7.8125em] xs:py-[10.4166666667em] py-[9.3333333333vw] lg:hidden w-full">
                  <div className=" aspect-16/10 block">
                    <VideoPlayer
                      videoSrc={testimonialVideo.video_url}
                      thumbnail={testimonialVideo.video_placeholder_img}
                      wrapperClassName="md:rounded-[0.6613756614em] rounded-[10px]  h-full"
                      videoClassName="md:rounded-[0.6613756614em] rounded-[10px]  h-full"
                      thumbnailClassName="md:rounded-[0.6613756614em] rounded-[10px]  h-full object-cover object-center"
                    />
                  </div>
                </div>
                <hr className="border-1 border-y-[#252525] my-[2.6455026455em] lg:block hidden border-max-width" />
              </div>
              <div className="relative xs:ps-[1.6666666667em] ps-[1.8em] text-[#B7B7B7] lg:text-[1.1904761905em] sm:text-base xs:text-sm text-[4.1666666667em] lg:max-w-[33.3333333333em] xs:leading-[1.56] leading-[1.4] ">
                <img
                  src={QuoteIcon}
                  alt="QuoteIcon"
                  className="xs:-ml-[1.5555555556em] ml-[-1.8em] xs:mb-0 mb-[-0.9em]"
                />
                {testimonialVideo.description}
              </div>
              <div className="flex sm:gap-[1.3227513228em] gap-4 items-center sm:mt-[3.3068783069em] mt-[9.3333333333vw]">
                <div className="gradient-border xs:rounded-[8px] rounded-[3.771px] md:w-[4.0343915344em] md:h-[4.0343915344em] sm:w-[8.125em] xs:w-[10.8333333333em] w-[16.2vw] sm:h-[8.125em] xs:h-[10.8333333333em] h-[16.2vw]">
                  <ImageWithToggle
                    src={testimonialVideo.student_avatar}
                    alt="Student Avatar"
                    className="object-fit-cover w-full h-full relative z-10"
                  />
                </div>

                <div className="flex items-center">
                  <span className="text-white md:text-[1.1904761905em] sm:text-[2.5em] xs:text-[3.3333333333em] text-[4.44444em] font-semibold">
                    {testimonialVideo.student_name}
                  </span>
                  <img
                    src={Eclipse}
                    alt="Eclipse"
                    className="md:mx-[0.5em] sm:mx-[1.0430247718em] xs:mx-[1.25em] xxs:mx-[2.7777777778vw] mx-[2.7777777778vw] md:w-[0.4166666667vw] md:h-[0.4166666667vw] sm:w-[1.0430247718em] sm:h-[1.0430247718em] xs:w-[1.25em] xs:h-[1.25em] xxs:w-[1.23em] xxs:h-[1.23em] w-[1.23em] h-[1.23em]"
                  />
                  <span className="text-white/40 uppercase md:text-[1.1904761905em] sm:text-[2.5em] xs:text-[3.3333333333em] text-[4.44444em] font-semibold">
                    {testimonialVideo.student_tag}
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:block hidden aspect-16/9">
              <VideoPlayer
                videoSrc={testimonialVideo.video_url}
                thumbnail={testimonialVideo.video_placeholder_img}
                wrapperClassName="md:rounded-[0.6613756614em] rounded-[10px]  h-full"
                videoClassName="md:rounded-[0.6613756614em] rounded-[10px]  h-full"
                thumbnailClassName="md:rounded-[0.6613756614em] rounded-[10px]  h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sm:py-[1.9841269841em] pt-[15.5555556vw]">
        <div className="custom-container mx-auto py-0 px-4 sm:px-[2.1164021164em] w-full relative z-10">
          <div className="flex gap-4 justify-between items-center border-b border-[#252525] md:py-[1.0582010582em] sm:py-[2.5em] xs:py-[3.3333333333em] py-[2.7777777778vw]">
            <h2 className="sm:text-[1.9841269841em]  xs:text-[6.25em] text-[6.1111111111em] leading-normal font-bold text-white text-left">
              PTE Hall of Fame
            </h2>
            <div className="flex gap-3 justify-end items-center  relative">
              <button className="custom-prev w-[10.9375vw] h-[10.9375vw] sm:w-[3.9113428944em] sm:h-[3.9113428944em] md:w-[2.6455026455em] md:h-[2.6455026455em] p-[0.9920634921em] cursor-pointer flex items-center justify-center xs:bg-[#1A1A1A] bg-[#262626] hover:bg-white/10 transition-all duration-300 ease-in-out border-none rounded">
                <svg
                  className="md:w-[0.7936507937em] w-[10px]"
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 18L2 10L10 2"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="custom-next w-[10.9375vw] h-[10.9375vw] sm:w-[3.9113428944em] sm:h-[3.9113428944em] md:w-[2.6455026455em] md:h-[2.6455026455em] p-[0.9920634921em] cursor-pointer flex items-center justify-center xs:bg-[#1A1A1A] bg-[#262626] hover:bg-white/10 transition-all duration-300 ease-in-out border-none rounded">
                <svg
                  className="md:w-[0.7936507937em] w-[10px]"
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L10 10L2 18"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="sm:py-[1.8518518519em] pt-[24px]">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              loop={true}
              spaceBetween={space}
              slidesPerView={1.2}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
            >
              {loading ? (
                <SwiperSlide>
                  <div className="animate-pulse">
                    <div className="bg-gray-300 rounded-lg aspect-3/2 mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  </div>
                </SwiperSlide>
              ) : pteFameData.length > 0 ? (
                pteFameData.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="relative">
                      <div className="md:rounded-[0.6613756614em] rounded-[10px]  w-full aspect-3/2 h-auto object-cover object-center relative z-10">
                        <VideoPlayer
                          videoSrc={item.video || Video1}
                          thumbnail={item.image || PlaceholerImage}
                          wrapperClassName="md:rounded-[0.6613756614em] rounded-[10px]  h-full"
                          videoClassName="md:rounded-[0.6613756614em] rounded-[10px]  object-contain h-full"
                          thumbnailClassName="md:rounded-[0.6613756614em] rounded-[10px]  h-full"
                        />
                      </div>
                    </div>

                    <p className="line-clamp-2 text-white md:text-[1.3227513228em] sm:text-[2.3468057366em] text-lg leading-[1.4] md:my-[0.4em] xs:my-2 mb-[2.2222222222vw] xs:pt-0 pt-[5.5vw]">
                      {item.title}
                    </p>
                    <div className="flex md:gap-[1.3227513228em] gap-4 items-center md:mt-[1.3227513228em] mt-[5.5vw]">
                      <div className="relative flex items-center justify-center">
                        {(item.flag || Russia1) && (
                          <img
                            src={item.flag || Russia1}
                            alt="flag"
                            className="md:w-[1.3227513228em] md:h-[1.3227513228em] sm:w-[2.5em] sm:h-[2.5em] xs:w-[3.3333333333em] xs:h-[3.3333333333em] w-[5.7291666667vw] h-[5.7291666667vw] rounded-full absolute xs:-top-[8.43px] xs:-right-[8.43px] -top-[9.3px] -right-[9.2px] z-50"
                          />
                        )}
                        <div className="gradient-border xs:rounded-[8px] rounded-[3.771px] md:w-[4.0343915344em] md:h-[4.0343915344em] sm:w-[8.125em] xs:w-[10.8333333333em] w-[16.2vw] sm:h-[8.125em] xs:h-[10.8333333333em] h-[16.2vw]">
                          <ImageWithToggle
                            src={item.avatar || Mainavatar}
                            alt="Student Avatar"
                            className="object-fit-cover w-full h-full relative z-10"
                          />
                        </div>
                      </div>
                      <div className="md:text-[1.1904761905vw] sm:text-[2.5em] xs:text-[3.3333333333em] text-[4.4444444444em] md:text-center text-start flex flex-col">
                        <span className="text-white/40 font-medium">
                          {item.name}
                        </span>
                        <span className="text-white md:text-[0.9259259259vw] text-sm block">
                          {item.tag}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                <SwiperSlide>
                  <div className="text-center p-8">
                    <p className="text-white">No PTE Fame entries available</p>
                  </div>
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="sm:py-[1.9841269841em] pt-[15.5555556vw]">
        <div className="custom-container mx-auto py-0 px-4 sm:px-[2.1164021164em] w-full relative z-10">
          <div className="flex gap-4 justify-between items-center border-b border-[#252525] md:py-[1.0582010582em] sm:py-[2.5em] xs:py-[3.3333333333em] py-[2.7777777778vw]">
            <h2 className="sm:text-[1.9841269841em]  xs:text-[6.25em] text-[6.1111111111em] leading-normal font-bold text-white text-left">
              NAATI CCL Results
            </h2>
            <div className="flex gap-3 justify-end items-center relative">
              <button className="custom-prev-new w-[10.9375vw] h-[10.9375vw] sm:w-[3.9113428944em] sm:h-[3.9113428944em] md:w-[2.6455026455em] md:h-[2.6455026455em] p-[0.9920634921em] cursor-pointer flex items-center justify-center xs:bg-[#1A1A1A] bg-[#262626] hover:bg-white/10 transition-all duration-300 ease-in-out border-none rounded">
                <svg
                  className="md:w-[0.7936507937em] w-[10px]"
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 18L2 10L10 2"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button className="custom-next-new w-[10.9375vw] h-[10.9375vw] sm:w-[3.9113428944em] sm:h-[3.9113428944em] md:w-[2.6455026455em] md:h-[2.6455026455em] p-[0.9920634921em] cursor-pointer flex items-center justify-center xs:bg-[#1A1A1A] bg-[#262626] hover:bg-white/10 transition-all duration-300 ease-in-out border-none rounded">
                <svg
                  className="md:w-[0.7936507937em] w-[10px]"
                  width="12"
                  height="20"
                  viewBox="0 0 12 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L10 10L2 18"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="sm:py-[1.8518518519em] pt-[24px]">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".custom-next-new",
                prevEl: ".custom-prev-new",
              }}
              loop={true}
              spaceBetween={space}
              slidesPerView={1.2}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
            >
              {naatiLoading ? (
                <SwiperSlide>
                  <div className="animate-pulse">
                    <div className="bg-gray-300 rounded-lg aspect-3/2 mb-4"></div>
                    <div className="h-4 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  </div>
                </SwiperSlide>
              ) : naatiCclResultsData.length > 0 ? (
                naatiCclResultsData.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div>
                      <div className="relative">
                        <div className="md:rounded-[0.6613756614em] rounded-[10px]  w-full aspect-3/2 h-auto object-cover object-center relative z-10">
                          <VideoPlayer
                            videoSrc={item.video || Video1}
                            thumbnail={item.image || PlaceholerImage}
                            wrapperClassName="md:rounded-[0.6613756614em] rounded-[10px]  h-full"
                            videoClassName="md:rounded-[0.6613756614em] rounded-[10px]  object-contain h-full"
                            thumbnailClassName="md:rounded-[0.6613756614em] rounded-[10px]  h-full"
                          />
                        </div>
                      </div>
                      <p className="line-clamp-2 text-white md:text-[1.3227513228em] sm:text-[2.3468057366em] text-lg leading-[1.4] md:my-[0.4em] xs:my-2 mb-[2.2222222222vw] xs:pt-0 pt-[5.5vw]">
                        {item.title}
                      </p>
                      <div className="flex md:gap-[1.3227513228em] gap-4 items-center md:mt-[1.3227513228em] mt-[5.5vw]">
                        <div className="relative flex items-center justify-center">
                          {(item.flag || Russia1) && (
                            <img
                              src={item.flag || Russia1}
                              alt="flag"
                              className="md:w-[1.3227513228em] md:h-[1.3227513228em] sm:w-[2.5em] sm:h-[2.5em] xs:w-[3.3333333333em] xs:h-[3.3333333333em] w-[5.7291666667vw] h-[5.7291666667vw] rounded-full absolute xs:-top-[8.43px] xs:-right-[8.43px] -top-[8.5px] -right-[8.45px] z-50"
                            />
                          )}
                          <div className="gradient-border xs:rounded-[8px] rounded-[3.771px] md:w-[4.0343915344em] md:h-[4.0343915344em] sm:w-[8.125em] xs:w-[10.8333333333em] w-[16.2vw] sm:h-[8.125em] xs:h-[10.8333333333em] h-[16.2vw]">
                            <ImageWithToggle
                              src={item.avatar || Mainavatar}
                              alt="Student Avatar"
                              className="object-fit-cover w-full h-full relative z-10"
                            />
                          </div>
                        </div>
                        <div className="md:text-[1.1904761905vw] sm:text-[2.5em] xs:text-[3.3333333333em] text-[4.4444444444em] md:text-center text-start flex flex-col">
                          <span className="text-white/40 font-medium">
                            {item.name}
                          </span>
                          <span className="text-white md:text-[0.9259259259vw] text-sm block">
                            {item.tag}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                <SwiperSlide>
                  <div className="text-center p-8">
                    <p className="text-white">
                      No NAATI CCL Results entries available
                    </p>
                  </div>
                </SwiperSlide>
              )}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="sm:pt-[1.9841269841em] pt-[21.3333vw] sm:pb-0 pb-[1.9841269841em]">
        <div className="custom-container mx-auto  px-4 sm:px-[2.1164021164em] w-full relative z-10">
          <div className="border-t-[1.5px] border-[#252525] md:pt-[6.6137566138em] sm:pt-[4.6296296296em] pt-[21.3333vw] sm:pb-[3.5714285714em]">
            <div className="flex md:flex-nowrap justify-between flex-wrap gap-[8.856em]">
              <div className="md:w-[50%] w-full">
                <h2 className="lg:text-[3.4391534392em] sm:text-[4.1015625em] xs:text-[8.75em] text-[8.8888888889em] leading-[1.2] -mt-[10px] font-bold text-white text-left lg:max-w-full">
                  Get in touch with us
                </h2>
                <p className="relative text-[#B7B7B7] md:text-[1.1904761905em] sm:text-[2.5em] xs:text-[3.3333333333em] leading-[1.556] text-[3.8888888889em] max-w-[33.3333333333em] sm:my-[0.6666666667em] mt-[-5.5px] xs:pb-0 pb-[0.7vw] xs:ps-0 ps-[0.2777777778vw]">
                  Contact us on xxxxxxxxx/ xxxxxxxxx
                </p>
                {/* Mobile Form */}
                <div className="md:hidden block pt-3">
                  <GetInTouch />
                </div>
                <div className="md:py-[3.9682539683em] sm:py-[9.375em] xs:py-[12.5em] pt-[13.8888888889vw] pb-[6.9444444444vw]">
                  <h3 className="text-white font-bold md:text-[1.5873015873em] sm:text-xl text-[5.5555em] leading-[32px]">
                    Why Language King?
                  </h3>
                  <ul className="md:mt-[1.3227513228em] mt-[2.7777777778vw] sm:ps-[1.3227513228em] gap-5 md:max-w-[45.6349206349em]">
                    <li className="flex items-start md:leading-[1.2] leading-[1.4] md:text-[1.0582010582em] sm:text-[2.5em] xs:text-[3.3333333333em] text-[3.888889em] text-[#ACACAC] md:gap-[1.8518518519em] gap-4 sm:px-0 sm:py-[0.75em] p-[3.3vw]">
                      <img
                        src={CheckmarkGray}
                        alt="CheckmarkGray"
                        className="lg:w-[1.0582010582vw] w-[4.2vw] pt-1"

                      />
                      Learn from 8 each tutors. The best way to crack any exam
                      is to learn from the person who has cracked it.
                    </li>
                    <li className="flex items-start md:leading-[1.2] leading-[1.4] md:text-[1.0582010582em] sm:text-[2.5em] xs:text-[3.3333333333em] text-[3.888889em] text-[#ACACAC] md:gap-[1.8518518519em] gap-4 sm:px-0 sm:py-[0.75em] p-[3.3vw]">
                      <img
                        src={CheckmarkGray}
                        alt="CheckmarkGray"
                        className="lg:w-[1.0582010582vw] w-[4.2vw] pt-1"

                      />
                      Stay up-to-date with changes in exam, and learn the latest
                      strategies from carefully designed video lectures by
                      Abhishek, PTE & NAATI Master Trainer.
                    </li>
                    <li className="flex items-start md:leading-[1.2] leading-[1.4] md:text-[1.0582010582em] sm:text-[2.5em] xs:text-[3.3333333333em] text-[3.888889em] text-[#ACACAC] md:gap-[1.8518518519em] gap-4 sm:px-0 sm:py-[0.75em] p-[3.3vw]">
                      <img
                        src={CheckmarkGray}
                        alt="CheckmarkGray"
                        className="lg:w-[1.0582010582vw] w-[4.2vw] pt-1"

                      />
                      1-to-1 feedback from experts & personalized timetable to
                      fit your busy schedule, learn from the comfort of your
                      home while sipping coffee.
                    </li>
                    <li className="flex items-start md:leading-[1.2] leading-[1.4] md:text-[1.0582010582em] sm:text-[2.5em] xs:text-[3.3333333333em] text-[3.888889em] text-[#ACACAC] md:gap-[1.8518518519em] gap-4 sm:px-0 sm:py-[0.75em] p-[3.3vw]">
                      <img
                        src={CheckmarkGray}
                        alt="CheckmarkGray"
                        className="lg:w-[1.0582010582vw] w-[4.2vw] pt-1"

                      />
                      Access to AI based portal with real time scoring, 5000+
                      practice questions, including sectional and full mock
                      test.
                    </li>
                  </ul>
                </div>
                <div className="flex items-start sm:gap-5 gap-3 md:max-w-[46.296em]">
                  <img
                    src={PinkQuote}
                    alt="PinkQuote"
                    // className="sm:mt-[-1em] mt-[-2em] sm:w-[3.230em] w-8"
                    className="mt-[-2em] sm:mt-[-1em] w-[8.3333333333vw]"
                  />
                  <p className="lg:text-[1.5873015873em] md:text-[1.323em] sm:text-[3.4375em] xs:text-[4.1666666667em] text-[4.8em] leading-[1.333333] text-lg text-white">
                    Language King is perfect for new or struggling students,
                    offering expert feedback and guidance to help achieve
                    desired scores.
                  </p>
                </div>
              </div>
              {/* Desktop Form */}
              <div className="lg:w-[35.219em] md:w-[50%] w-full md:block hidden">
                <GetInTouch />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
