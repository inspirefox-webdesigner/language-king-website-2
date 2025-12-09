// This is only to show the design for client remove after everything done

import React, { useState } from "react";
import { Link } from "react-router-dom";
import TestimonialCarousel from "../components/testimonials-carousel";
import BookFreeTrail from "../components/BookFreeTrail";
import CourseImg1 from "../assets/course-img1.png";
import CourseImg2 from "../assets/course-img2.png";
import CourseImg3 from "../assets/course-img3.png";
import avatar from "../assets/avatar-img.png";
import VideoImg1 from "../assets/course-video-img-1.png";
import VideoImg2 from "../assets/course-video-img-2.png";
import VideoImg3 from "../assets/course-video-img-3.png";
import VideoImg4 from "../assets/course-video-img-4.png";
import Icon1 from "../assets/icons/video-icon.svg";
import Icon2 from "../assets/icons/download-icon.svg";
import Icon3 from "../assets/icons/rec-icon.svg";
import Icon4 from "../assets/icons/ai-icon.svg";
import Icon5 from "../assets/icons/whatsapp-icon.svg";
import Icon6 from "../assets/icons/live-icon.svg";
import Icon7 from "../assets/icons/badge-icon.svg";
import ReviewImg1 from "../assets/testimonial-01.png";
import ReviewImg2 from "../assets/testimonial-02.png";
import ReviewImg3 from "../assets/testimonial-03.png";
import ReviewImg4 from "../assets/testimonial-04.png";
import Avatar1 from "../assets/avatar1.png";
import Avatar2 from "../assets/avatar2.png";
import Avatar3 from "../assets/avatar3.png";
import Avatar4 from "../assets/avatar4.png";
import Star from "../assets/icons/star.svg";
import Google from "../assets/icons/google.svg";
import HomeBanner from "../assets/Homepage-banner.png";
import GrainIMG from "../assets/testimonial-grain.png";
import personImage from "../assets/person.png";
import checklist from "../assets/icons/checkmark.svg";
import video from "../assets/videos/placeholder-video.mp4";
import VideoModal from "../components/videoModal";
import CallbackForm from "../components/callback-popup";
import CallbackThankyou from '../components/Callback-thankyou'
// import Thankyou from "../components/Thankyou"; Remove this file when website done
import ImageWithToggle from "../components/ImageWithToggle";

const testimonials = [
  {
    reviewImg: video,
    thumbnail: ReviewImg1,
    text: "I’m getting a lot of nutrients in one scoop",
    avatar: Avatar1,
    name: "Natalia",
    subtitle: "PTE - 8 Each",
    sourceIcon: Google,
    time: "10 Hours ago",
    rating: 5,
    starIcon: Star,
  },
  {
    reviewImg: video,
    thumbnail: ReviewImg2,
    text: "It’s kind of slipped into our recruitment stream so easily There’s no effort needed... ",
    avatar: Avatar2,
    name: "Jenny",
    subtitle: "PTE - 8 Each",
    sourceIcon: Google,
    time: "1 day ago",
    rating: 5,
    starIcon: Star,
  },
  {
    reviewImg: video,
    thumbnail: ReviewImg3,
    text: `All of our hiring team said that it saves them hours. <span className="text-white/50">We’re getting feedback within 20-30 minutes from interviews now, which is ideal for recruiting team that works with time to hire targets.</span>`,
    avatar: Avatar3,
    name: "Mark",
    subtitle: "PTE - 8 Each",
    sourceIcon: Google,
    time: "10 week ago",
    rating: 5,
    starIcon: Star,
  },
  {
    reviewImg: video,
    thumbnail: ReviewImg4,
    text: `There is a clear impact on time saved. <span className="text-white/50">We saved 53 hours per month across our recruiting team.</span>`,
    avatar: Avatar4,
    name: "Priyanka",
    subtitle: "NAATI CCL - 78/90",
    sourceIcon: Google,
    time: "10 month ago",
    rating: 5,
    starIcon: Star,
  },
];

const videoItems = [
  {
    title: "Impact of Read Aloud on Reading Module",
    thumbnail: VideoImg1,
    videoSrc: video,
  },
  {
    title: "Poor score in Write Essay",
    thumbnail: VideoImg2,
    videoSrc: video,
  },
  {
    title: "Dialogue vs Segment",
    thumbnail: VideoImg3,
    videoSrc: video,
  },
  {
    title: "PTE vs IELTS",
    thumbnail: VideoImg4,
    videoSrc: video,
  },
];

const Home2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  return (
    <>
      <section className="banner-wrapper sm:pt-[320px] pt-[400px] sm:pb-[200px] pb-[40px] min-h-[100vh] mt-[-150px] relative flex items-center overflow-hidden">
        <ImageWithToggle
          src={HomeBanner}
          alt="HomeBanner"
          className="scale-[1.1] absolute w-full h-full top-0 left-0 right-0 bottom-0 object-cover"
        />
        <div className="custom-container mx-auto py-0 px-4 sm:px-[32px] w-full z-10 relative ">
          <div className="max-w-[830px]">
            <div className="flex flex-col 2xl:gap-6 gap-3">
              <h2 className="text-gradient-primary font-bold 2xl:text-[32px] text-2xl">
                # Australia’s No.1
              </h2>
              <h1 className="font-inter font-bold main-heading 2xl:mt-2 mt-0 text-white">
                PTE, IELTS & NAATI CCL Coaching Institute
              </h1>
              <p className="md:text-lg text-base font-light max-w-[600px] text-white/75">
                Join 10,000+ satisfied students in achieving their desired Test
                Scores. Helped many students, now it's your turn!
              </p>
            </div>
            <div className="mt-[48px] flex sm:flex-nowrap flex-wrap sm:gap-[31px] gap-[16px] max-w-[600px]">
              <a
                href="#"
                className="align-middle inline-flex items-center justify-center text-center primary-btn bg-gradient-primary text-black px-3 sm:py-3 py-[14px] sm:w-[50%] w-full sm:font-semibold font-bold sm:text-xl text-lg relative z-10"
              >
                Get a Callback
              </a>
              <Link
                to="/free-e-book"
                className="align-middle inline-flex items-center gap-[18px] justify-center text-center bg-transparent border-2 border-Cadmium-Orange text-white px-3 sm:py-3 py-[14px] sm:w-[50%] w-full font-semibold sm:text-xl text-lg transition-all duration-300 ease hover:bg-white/10"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 22 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.93 11.9998L0 23.9253V0.0742188L21.93 11.9998Z"
                    fill="url(#paint0_linear_702_4078)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_702_4078"
                      x1="0"
                      y1="11.9997"
                      x2="21.93"
                      y2="11.9997"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#D7FF53" />
                      <stop offset="1" stopColor="#FD4F2B" />
                    </linearGradient>
                  </defs>
                </svg>
                Watch Free Lessons
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8 lg:scroll-mt-[90px]" id="courses">
        <div className="custom-container mx-auto py-0 px-4 sm:px-[32px] z-50 border-t border-[#252525]">
          <div className="">
            <h2 className="text-white font-bold sm:text-[26.39px] text-lg relative  inline-block z-10 sm:my-[38px] mt-[30px] mb-[20px] stroke-heading">
              Our Courses
            </h2>
          </div>
          <div className="flex flex-col gap-[32px]">
            <div className="bg-course-green-bg hover:bg-course-green-hover-bg border-[1.5px] border-white/10 grid items-center lg:grid-cols-2 gap-[38px] transition-all duration-300 ease group px-4 sm:px-6 py-4 sm:py-6 relative">
              <div className="ribbon ribbon-top-left z-10">
                <span>New course!</span>
              </div>

              <div className="overflow-hidden relative z-0 max-h-[450px]">
                <ImageWithToggle
                  src={CourseImg1}
                  alt="CourseImg1"
                  className="w-full h-full object-cover transition-all duration-300 ease group-hover:scale-[1.05]"
                />
              </div>
              <div className="lg:py-[16px]">
                <h2 className="text-[#52D34E] [text-shadow:0px_5px_0px_#000000] font-bold md:text-[32px] inline-block sm:text-2xl text-lg">
                  NAATI CCL Fast Track Course
                </h2>
                <h2 className="font-bold xl:text-[40px] md:text-[32px] sm:text-[30px] text-2xl text-white xl:leading-[2.8rem] leading-[1.2] my-[12px]">
                  Need to clear the test in 3 days, we’ve got you covered!
                </h2>
                <p className="md:text-xl lg:text-lg text-base font-light max-w-[800px] text-white/75 mb-0">
                  This is a super fast-paced course. It’s geared for speed,
                  designed for those who need to clear the test on urgent basis,
                  and do whatever it takes to clear it.
                </p>
                <div className="sm:flex items-center gap-3 my-[12px] hidden">
                  <ImageWithToggle
                    src={avatar}
                    alt="avatar"
                    className="w-[50px] h-[50px] rounded-full border-4 border-white/10"
                  />
                  <h3 className="text-base font-light text-white/60">
                    Taught by{" "}
                    <span className="text-white font-semibold">Abhishek</span>
                  </h3>
                </div>
                <div className="pt-[12px] flex lg:flex-nowrap flex-wrap lg:gap-[31px] gap-[16px] lg:max-w-[800px]">
                  <Link
                    onClick={openPopup}
                    className="primary-btn bg-gradient-GreenBtn inline-flex justify-center items-center text-center text-white px-3 sm:py-3 py-[14px] lg:w-[50%] w-full font-semibold sm:text-xl text-lg relative z-10 shadow-[0px_4px_0px_rgba(0,0,0,0.25),_0px_3px_0px_rgba(0,0,0,0.25)]"
                  >
                    Take the Course
                  </Link>
                  <Link
                    to="/naaticcl"
                    className="text-center bg-transparent border-[1.5px] border-white/20 inline-flex justify-center items-center text-white px-3 sm:py-3 py-[14px] lg:w-[50%] w-full font-semibold sm:text-xl text-lg z-10 transition-all duration-300 ease hover:bg-white/10 shadow-[0px_4px_0px_rgba(0,0,0,0.25),_0px_3px_0px_rgba(0,0,0,0.25)]"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            <div className="course-drop-shadow bg-course-blue-bg hover:bg-course-blue-hover-bg border-[1.5px] border-white/10 grid items-center lg:grid-cols-2 gap-[38px] transition-all duration-300 ease group px-4 sm:px-6 py-4 sm:py-6 relative">
              <div className="overflow-hidden relative z-0 max-h-[450px]">
                <ImageWithToggle
                  src={CourseImg2}
                  alt="CourseIm21"
                  className="w-full h-full object-cover transition-all duration-300 ease group-hover:scale-[1.05]"
                />
              </div>
              <div className="lg:py-[16px]">
                <h2 className="text-gradient-secondary font-bold md:text-[24px] inline-block sm:text-2xl text-lg">
                  PTE Master Class
                </h2>
                <h2 className="font-bold xl:text-[40px] md:text-[32px] sm:text-[30px] text-2xl text-white xl:leading-[2.8rem] leading-[1.2] my-[8px]">
                  Missed your score by a few marks! Clear in 2 weeks
                </h2>
                <p className="md:text-xl lg:text-lg text-base font-light max-w-[800px] text-white/75 mb-0">
                  This is literally the best advice that I give every student.
                  My strategies will teach you how to get 90 in each module.
                  I’ve helped students out for 5+ years as a super-friendly
                  teacher to get their desired score, now it’s your turn.
                </p>
                <div className="sm:flex items-center gap-3 my-[12px] hidden">
                  <ImageWithToggle
                    src={avatar}
                    alt="avatar"
                    className="w-[50px] h-[50px] rounded-full border-4 border-white/10"
                  />
                  <h3 className="text-base font-light text-white/60">
                    Taught by{" "}
                    <span className="text-white font-semibold">Abhishek</span>
                  </h3>
                </div>
                <div className="pt-[12px] flex lg:flex-nowrap flex-wrap lg:gap-[31px] gap-[16px] lg:max-w-[800px]">
                  <Link
                    to="/pte-masterclass"
                    className="primary-btn bg-gradient-secondary leading-[28px] inline-flex justify-center items-center text-center text-white px-3 sm:py-3 py-[14px] lg:w-[50%] w-full font-semibold sm:text-xl text-lg relative z-10 shadow-[0px_4px_0px_rgba(0,0,0,0.25),_0px_3px_0px_rgba(0,0,0,0.25)]"
                  >
                    Take the Course
                  </Link>
                  <Link
                    to="/pte-masterclass"
                    className="text-center bg-transparent border-[1.5px] border-white/20 inline-flex justify-center items-center text-white px-3 sm:py-3 py-[14px] lg:w-[50%] w-full font-semibold sm:text-xl text-lg transition-all z-10 duration-300 ease hover:bg-white/10 shadow-[0px_4px_0px_rgba(0,0,0,0.25),_0px_3px_0px_rgba(0,0,0,0.25)]"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            <div className="course-drop-shadow bg-course-black-bg hover:bg-course-black-hover-bg border-[1.5px] border-[#333434] grid items-center lg:grid-cols-2 gap-[38px] transition-all duration-300 ease group px-4 sm:px-6 py-4 sm:py-6 relative">
              <div className="overflow-hidden relative z-0 max-h-[450px]">
                <ImageWithToggle
                  src={CourseImg3}
                  alt="CourseImg3"
                  className="w-full h-full object-cover transition-all duration-300 ease group-hover:scale-[1.05]"
                />
              </div>
              <div className="lg:py-[16px]">
                <h2 className="dark-text-custom font-bold md:text-[24px] inline-block sm:text-2xl text-lg">
                  PTE Master Handbook
                </h2>
                <h2 className="font-bold xl:text-[40px] md:text-[32px] sm:text-[30px] text-2xl text-white xl:leading-[2.8rem] leading-[1.2] my-[8px]">
                  PTE 79+ in 7 days <br />
                  Crack PTE in 1 attempt
                </h2>
                <p className="md:text-xl lg:text-lg text-base font-light max-w-[800px] text-white/75 mb-0">
                  Learn exactly what students did to achieve their desired band.
                  This book explains the exam structure, target scores, key
                  tasks to focus on, and the 7-day strategy you need to follow
                  to go from 5 to 8 each as quickly as possible.
                </p>
                <div className="sm:flex items-center gap-3 my-[12px] hidden">
                  <ImageWithToggle
                    src={avatar}
                    alt="avatar"
                    className="w-[50px] h-[50px] rounded-full border-4 border-white/10"
                  />
                  <h3 className="text-base font-light text-white/60">
                    Taught by{" "}
                    <span className="text-white font-semibold">Abhishek</span>
                  </h3>
                </div>
                <div className="pt-[12px] flex lg:flex-nowrap flex-wrap lg:gap-[31px] gap-[16px] lg:max-w-[800px]">
                  <a
                    href="#"
                    className="primary-btn bg-gradient-dark leading-[28px] inline-flex justify-center items-center text-center text-white px-3 sm:py-3 py-[14px] lg:w-[50%] w-full font-semibold sm:text-xl text-lg relative z-10 shadow-[0px_4px_0px_rgba(0,0,0,0.25),_0px_3px_0px_rgba(0,0,0,0.25)]"
                  >
                    Free E-Book
                  </a>
                  <a
                    href="#"
                    className="text-center bg-transparent border-[1.5px] border-white/20 inline-flex justify-center items-center text-white px-3 sm:py-3 py-[14px] lg:w-[50%] w-full font-semibold sm:text-xl text-lg transition-all z-10 duration-300 ease hover:bg-white/10 shadow-[0px_4px_0px_rgba(0,0,0,0.25),_0px_3px_0px_rgba(0,0,0,0.25)]"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showPopup && <CallbackForm onClose={closePopup} />}

      <section className="pb-[32px]">
        <div className="custom-container mx-auto py-0 px-4 sm:px-[32px]">
          <div className="bg-[#252525] px-4 sm:px-8 ">
            <div className="sm:py-10 py-7">
              <h2 className="sm:text-2xl text-[21px] leading-normal font-bold text-white text-left mb-4">
                Try these FREE video lessons
              </h2>

              <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-[28px] gap-[42px]">
                {videoItems.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="border-b-[8px] border-[#A6A6A6] mb-3 shadow-[0px_5.03162px_0px_#000000]">
                      <div
                        className="w-full h-[220px] 2xl:h-[200px] sm:h-[180px] cursor-pointer relative"
                        onClick={() => {
                          setActiveVideo(item.videoSrc);
                          setIsModalOpen(true);
                        }}
                      >
                        <ImageWithToggle
                          src={item.thumbnail}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center transition">
                          <div
                            className={`w-16 h-16 bg-black/40 rounded-full flex items-center justify-center`}
                          >
                            <svg
                              className="w-10 h-10 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-white font-bold 2xl:text-[24px] text-[22px] sm:leading-[1.3] leading-[28px]">
                      {item.title}
                    </h3>
                    <span className="text-white/60 sm:mt-[6px] mt-[4px] block text-base font-semibold">
                      PTE MasterClass
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoSrc={activeVideo}
      />

      <section className="pb-8">
        <div className="custom-container mx-auto py-0 px-4 sm:px-[32px]">
          <div className="bg-black1 flex flex-col sm:gap-[57px] gap-[42px] sm:leading-[auto] leading-[40px] border border-white/10 group md:px-[38px] sm:px-6 px-4 md:pt-[60px] md:pb-[85px] pt-6 pb-7  relative">
            <h2 className="lg:text-[42px] sm:text-[40px] text-[32px] leading-[1.2] font-bold text-white text-left">
              What’s included in every Course
            </h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-around gap-x-[20px] gap-y-[60px]">
              <div className="text-center">
                <ImageWithToggle
                  src={Icon1}
                  alt="Icon"
                  className="mx-auto sm:mb-[25px] mb-6 sm:max-w-[88px] max-w-[78px]"
                />
                <span className="text-white/50 md:text-lg sm:text-lg text-sm block max-w-[270px] mx-auto">
                  <span className="block text-[#E9E9E9]">Video Lectures -</span>{" "}
                  Basic to advance
                </span>
              </div>
              <div className="text-center">
                <ImageWithToggle
                  src={Icon2}
                  alt="Icon"
                  className="mx-auto sm:mb-[25px] mb-6 sm:max-w-[88px] max-w-[78px]"
                />
                <span className="text-white/50 md:text-lg sm:text-lg text-sm block max-w-[270px] mx-auto">
                  <span className="block text-[#E9E9E9]">Study Material -</span>{" "}
                  Templates and prediction file
                </span>
              </div>
              <div className="text-center">
                <ImageWithToggle
                  src={Icon3}
                  alt="Icon"
                  className="mx-auto sm:mb-[25px] mb-6 sm:max-w-[88px] max-w-[78px]"
                />
                <span className="text-white/50 md:text-lg sm:text-lg text-sm block max-w-[270px] mx-auto">
                  <span className="block text-[#E9E9E9]">
                    Class Recordings -{" "}
                  </span>
                  Video library of past classes
                </span>
              </div>
              <div className="text-center">
                <ImageWithToggle
                  src={Icon4}
                  alt="Icon"
                  className="mx-auto sm:mb-[25px] mb-6 sm:max-w-[88px] max-w-[78px]"
                />
                <span className="text-white/50 md:text-lg sm:text-lg text-sm block max-w-[270px] mx-auto">
                  <span className="block text-[#E9E9E9]">AI Portal -</span>Mock
                  Test & 5000+ exam questions
                </span>
              </div>
              <div className="text-center">
                <ImageWithToggle
                  src={Icon5}
                  alt="Icon"
                  className="mx-auto sm:mb-[25px] mb-6 sm:max-w-[88px] max-w-[78px]"
                />
                <span className="text-white/50 md:text-lg sm:text-lg text-sm block max-w-[270px] mx-auto">
                  <span className="block text-[#E9E9E9]">Feedback -</span>
                  Ask an Expert
                </span>
              </div>
              <div className="text-center">
                <ImageWithToggle
                  src={Icon6}
                  alt="Icon"
                  className="mx-auto sm:mb-[25px] mb-6 sm:max-w-[88px] max-w-[78px]"
                />
                <span className="text-white/50 md:text-lg sm:text-lg text-sm block max-w-[270px] mx-auto">
                  <span className="block text-[#E9E9E9]">Live Classes - </span>
                  Learn with other students
                </span>
              </div>
              <div className="text-center">
                <ImageWithToggle
                  src={Icon7}
                  alt="Icon"
                  className="mx-auto sm:mb-[25px] mb-6 sm:max-w-[88px] max-w-[78px]"
                />
                <span className="text-white/50 md:text-lg sm:text-lg text-sm block max-w-[270px] mx-auto">
                  <span className="block text-[#E9E9E9]">
                    Expert Trainers -
                  </span>
                  Learn from certified trainers
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="custom-container mx-auto py-0 px-4 sm:px-[32px]">
          <div className="bg-[#212121] px-4 sm:px-8 sm:pb-[32px] pb-4 relative z-10">
            <div className="relative z-20">
              <div className="sm:py-[32px] py-7 flex justify-between items-center">
                <h2 className="sm:text-3xl text-2xl font-bold text-white text-left">
                  Testimonials
                </h2>
                <div className="flex items-center justify-end">
                  <Link
                    to="/testimonials"
                    className="bg-black2 2xl:p-[16px] sm:p-[12px] p-[9px] 2xl:min-w-[166px] sm:min-w-[140px] min-w-[100px] text-center rounded-[6px] text-white 2xl:text-[22px] sm:text-lg text-base font-semibold "
                  >
                    View all
                  </Link>
                </div>
              </div>
              <TestimonialCarousel testimonials={testimonials} />
            </div>
            <ImageWithToggle
              src={GrainIMG}
              alt="GrainIMG"
              className="absolute top-0  w-full h-full left-0 right-0 z-0 object-cover"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="custom-container mx-auto py-0 px-4 sm:px-[2.1164021164em]">
          <div className="bg-[#121212] sm:px-[2.1164021164em] sm:py-[44px] px-4 pt-[7.5vw] pb-6 border-[1.5px] border-white/10 transition-all duration-300 ease group relative">
            <div className="flex md:flex-nowrap flex-wrap gap-[8.5978835979em] items-stretch justify-between middle-border">
              <div className="md:block hidden md:w-[50%] w-full">
                <ImageWithToggle
                  src={personImage}
                  alt="personImage"
                  className="w-full rounded-[11px] md:h-[21.164021164em] h-full object-fit-cover"
                />
                <h2 className="font-bold text-white lg:text-[2.6455026455em] text-3xl mt-[32px]">
                  What’s covered in class:
                </h2>
                <div className="grid lg:grid-cols-2 grid-cols-1 mt-[2.7777777778em] gap-[1.8518518519em] ">
                  <div className="flex items-center gap-4 text-white font-medium">
                    <img
                      src={checklist}
                      alt="checklist"
                      className="w-[1.7195767196em] h-[1.7195767196em]"
                    />
                    <span className="lg:text-[1.455026455em] text-xl">
                      Basic Introduction
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-white font-medium">
                    <img
                      src={checklist}
                      alt="checklist"
                      className="w-[1.7195767196em] h-[1.7195767196em]"
                    />
                    <span className="lg:text-[1.455026455em] text-xl">
                      Test Format & Overview
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-white font-medium">
                    <img
                      src={checklist}
                      alt="checklist"
                      className="w-[1.7195767196em] h-[1.7195767196em]"
                    />
                    <span className="lg:text-[1.455026455em] text-xl">
                      Level of English
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-white font-medium">
                    <img
                      src={checklist}
                      alt="checklist"
                      className="w-[1.7195767196em] h-[1.7195767196em]"
                    />
                    <span className="lg:text-[1.455026455em] text-xl">
                      Scorecard Analysis
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-white font-medium">
                    <img
                      src={checklist}
                      alt="checklist"
                      className="w-[1.7195767196em] h-[1.7195767196em]"
                    />
                    <span className="lg:text-[1.455026455em] text-xl">
                      And more!
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:w-[50%] w-full">
                <div className="sm:pt-6 pt-0">
                  <CallbackThankyou />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home2;
