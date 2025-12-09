import React, { useState, useEffect, useRef } from "react";
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
import Video1 from "../assets/videos/placeholder-video.mp4";
import Video2 from "../assets/videos/placeholder-video.mp4";
import Video3 from "../assets/videos/placeholder-video.mp4";
import Video4 from "../assets/videos/placeholder-video.mp4";
import ImageWithToggle from "../components/ImageWithToggle";
import axios from "axios";
import API_BASE_URL from "../config/api";

const testimonials = [
  {
    reviewImg: Video1,
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
    reviewImg: Video2,
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
    reviewImg: Video3,
    thumbnail: ReviewImg3,
    text: (
      <>
        All of our hiring team said that it saves them hours.{" "}
        <span className="text-white/50">
          We’re getting feedback within 20-30 minutes from interviews now, which
          is ideal for recruiting team that works with time to hire targets.
        </span>
      </>
    ),
    avatar: Avatar3,
    name: "Mark",
    subtitle: "PTE - 8 Each",
    sourceIcon: Google,
    time: "10 week ago",
    rating: 5,
    starIcon: Star,
  },
  {
    reviewImg: Video4,
    thumbnail: ReviewImg4,
    text: (
      <>
        There is a clear impact on time saved.{" "}
        <span className="text-white/50">
          We saved 53 hours per month across our recruiting team.
        </span>
      </>
    ),
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

const courses = [
  {
    title: "NAATI CCL Fast Track Course",
    subtitle: "Need to clear the test in 7 days, we’ve got you covered!",
    desc: "This is a super fast-paced course. It’s geared for speed, designed for those who need to clear the test on urgent basis, and do whatever it takes to clear it.",
    image: CourseImg1,
    avatar: avatar,
    showRibbon: true,
    ribbonText: "New course!",
    className: "bg-course-green-bg hover:bg-course-green-hover-bg",
    textClass: "text-[#52D34E] [text-shadow:0px_5px_0px_#000000]",
    btnClass: "bg-gradient-GreenBtn",
    btn1Text: "Take the Course",
    btn2Text: "View Details",
    btn1Link: null, // if you want to use openPopup instead, pass null
    btn2Link: "/naaticcl",
  },
  {
    title: "PTE Master Class",
    subtitle: `Missed your score by a few marks!\nClear in 2 weeks`,
    desc: "This is literally the best advice that I give every student. My strategies will teach you how to get 90 in each module. I’ve helped students out for 5+ years as a super-friendly teacher to get their desired score, now it’s your turn.",
    image: CourseImg2,
    avatar: avatar,
    showRibbon: false,
    className:
      "course-drop-shadow bg-course-blue-bg hover:bg-course-blue-hover-bg",
    textClass: "text-gradient-secondary",
    btnClass: "bg-gradient-secondary",
    btn1Text: "Take the Course",
    btn2Text: "View Details",
    btn1Link: null,
    btn2Link: "/pte-masterclass",
  },
  {
    title: "PTE Master Handbook",
    subtitle: (
      <>
        PTE 79+ in 7 days <br />
        Crack PTE in 1<sup className="ps-1">st</sup> attempt
      </>
    ),

    desc: "Learn exactly what students did to achieve their desired band. This book explains the exam structure, target scores, key tasks to focus on, and the 7-day strategy you need to follow to go from 5 to 8 each as quickly as possible.",
    image: CourseImg3,
    avatar: avatar,
    showRibbon: false,
    className:
      "course-drop-shadow bg-course-black-bg hover:bg-course-black-hover-bg border-[#333434]",
    textClass: "dark-text-custom",
    btnClass: "bg-gradient-dark",
    btn1Text: "Free E-Book",
    btn2Text: "View Details",
    btn1Link: "/free-e-book",
    btn2Link: "/free-e-book",
  },
];

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [videoLessons, setVideoLessons] = useState([]);
  const [currentVideoIndex] = useState(0);
  const videoContainerRef = useRef(null);

  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  /* free lesson here */
  useEffect(() => {
    console.log(" Component mounted, calling fetchVideoLessons");
    fetchVideoLessons();
  }, []);

  const fetchVideoLessons = async () => {
    const response = await axios.get(`${API_BASE_URL}/video-lessons`);

    if (response.data && response.data.length > 0) {
      setVideoLessons(response.data);
      console.log("Video lessons fetched successfully.");
    } else {
      console.log("No video lessons found.");
    }
  };

  // const handlePrevVideo = () => {
  //   setCurrentVideoIndex((prev) => Math.max(0, prev - 1));
  // };

  // const handleNextVideo = () => {
  //   setCurrentVideoIndex((prev) => Math.min(videoLessons.length - 4, prev + 1));
  // };

  const displayedVideos =
    videoLessons.length > 0
      ? videoLessons.slice(currentVideoIndex, currentVideoIndex + 4)
      : videoItems.slice(currentVideoIndex, currentVideoIndex + 4);

  /* free lesson end */

  // Prevent body scroll when popup is open
  React.useEffect(() => {
    if (showPopup) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    // Cleanup on unmount
    return () => document.body.classList.remove("overflow-hidden");
  }, [showPopup]);


  return (
    <>
      <section className="banner-wrapper  min-h-[110vh] sm:pt-[17.857em] pt-[450px] sm:pb-[6.614em] pb-[60px] mt-[-150px] relative flex items-center overflow-hidden">
        <ImageWithToggle
          src={HomeBanner}
          alt="HomeBanner"
          className="scale-[1.1] absolute w-full h-full top-0 left-0 right-0 bottom-0 object-cover"
        />
        <div className="custom-container mx-auto py-0 sm:px-[2.1164021164em] px-4  w-full z-10 relative ">
          <div className="lg:max-w-[54.8941798942em] max-w-full">
            <div className="flex flex-col 2xl:gap-6 gap-3">
              <h2 className="text-gradient-primary font-bold lg:text-[1.5873015873em] md:text-[2.34375em] sm:text-[3.125em] xs:text-[3.75em] text-[6.6666666667em] leading-[1.3333]">
                # Australia’s No.1
              </h2>
              <h1 className="font-inter font-bold lg:text-[4.021em] md:text-[4.6875em] sm:text-[6.25em] xs:text-[7.5em] xxs:text-[10em] text-[9.9em] leading-[1.12] text-white">
                PTE, IELTS & <br className="xs:hidden" /> NAATI CCL{" "}
                <br className="xs:hidden" /> Coaching Institute
              </h1>
              <p className="lg:text-[1.1904761905em] md:text-[1.7578125em] sm:text-[2.8125em] xs:text-[3.3333333333em] text-[4.4444444444em] md:leading-[1.5555555]  font-normal md:max-w-[600px] text-white/75">
                Join 10,000+ satisfied students in achieving their desired Test
                Scores. Helped many students, now it's your turn!
              </p>
            </div>
            {/* <div className="sm:mt-[3.175em] mt-[11.1111111111em] flex sm:flex-nowrap flex-wrap sm:gap-[2.050em] gap-[16px] xl:max-w-[39.6825396825em] lg:max-w-[46.875em] md:max-w-[58.59375em]">
              <Link
                to="/home2"
                className="inline-flex justify-center items-center text-center primary-btn bg-gradient-primary text-black lg:p-[0.7936507937em] md:p-[1.171875em] sm:p-[1.5625em] xs:p-[1.875em] p-[3.4vw] sm:w-[50%] w-full relative z-10"
              >
                <span className="sm:font-semibold font-bold lg:text-[1.3227513228em] md:text-[1.953125em] sm:text-[2.6041666667em] xs:text-[3.125em] text-[5em] relative z-10 xs:leading-[1.242] leading-[1.767]">
                  Get-a Callback
                </span>
              </Link>
              <Link
                to="/free-e-book"
                className="align-middle inline-flex items-center gap-[18px] justify-center text-center bg-transparent border-2 border-Cadmium-Orange text-white transition-all duration-300 ease hover:bg-white/10 lg:p-[0.7936507937em] md:p-[1.171875em] sm:p-[1.5625em] xs:p-[1.875em] p-[3.4vw] sm:w-[50%] w-full relative z-10 "
              >
                <svg
                  className="md:w-[1.3227513228em] md:h-[1.3227513228em] w-5 h-5"
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
                <span className="sm:font-semibold font-bold lg:text-[1.3227513228em] md:text-[1.953125em] sm:text-[2.6041666667em] xs:text-[3.125em] text-[5em] relative z-10 xs:leading-[1.242] leading-[1.767]">
                  Watch FREE Lessons
                </span>
              </Link>
            </div> */}

            <div className="sm:mt-[3.175em] mt-[11.1111111111em] flex sm:flex-nowrap flex-wrap sm:gap-[2.050em] gap-[16px] xl:max-w-[39.6825396825em] lg:max-w-[46.875em] md:max-w-[58.59375em]">
              <Link
                to="/home2"
                className="primary-btn bg-gradient-primary md:p-[0.7936507937em] sm:p-[1.5645371578em] xs:p-[1.875em] p-[4.2vw] sm:w-[50%] w-full relative z-10 text-center"
              >
                <span className="font-semibold md:text-[1.3227513228em] sm:text-[3.125em] xs:text-[4.1666666667em] md:leading-[1.4] text-[5.55555555em] text-black">
                  Get-a Callback
                </span>
              </Link>
              <Link
                to="/free-e-book"
                className=" align-middle inline-flex items-center gap-[18px] justify-center md:p-[0.7936507937em] sm:p-[1.5645371578em] xs:p-[1.875em] p-[4.2vw] sm:w-[50%] w-full relative z-10 transition-all duration-300 ease bg-transparent border-2 border-Cadmium-Orange hover:bg-white/10"
              >
                <svg
                  className="sm:w-[1.3227513228em] sm:h-[1.3227513228em] xs:w-[3.4375em] xs:h-[3.4375em] w-[5.8333333333vw] h-[6.3888888889vw]"
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
                <span className="font-semibold md:text-[1.3227513228em] sm:text-[3.125em] xs:text-[4.1666666667em] md:leading-[1.4] text-[5.55555555em] align-middle inline-flex items-center gap-[18px] justify-center text-center text-white">
                  Watch FREE Lessons
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="main-banner-gradient absolute w-full h-full top-0 left-0 right-0 bottom-0"></div>
        {/* <div className="bg-gradient-to-b from-black/40 to-transparent top-0 left-0 right-0 bottom-0"></div> */}
      </section>

      <section className="mb-8 lg:scroll-mt-[90px]" id="courses">
        <div className="custom-container mx-auto py-0 px-4 sm:px-[2.1164021164em] z-50 border-t border-[#252525]">
          <div className="">
            <h2 className="text-white font-bold lg:text-[1.7453703704em] md:text-[2.5771484375em] sm:text-[2.8645833333em] xs:text-[3.125em] text-[5em] relative inline-block z-10 sm:my-[38px] mt-[30px] mb-[20px] stroke-heading">
              Our Courses
            </h2>
          </div>
          <div className="flex flex-col sm:gap-[2.1164021164em] gap-[8.8888888889em]">
            {courses.map((course, index) => (
              <div
                key={index}
                className={`border-[1.5px] border-white/10 grid items-center lg:grid-cols-2 xs:gap-[2.5132275132em] gap-[6em] transition-all duration-300 ease group px-4 sm:px-[1.5873015873em] pt-[4.4444444444em] pb-[7.777777777em] sm:pt-[1.5873015873em] sm:pb-[1.5873015873em] relative ${course.className}`}
              >
                {course.showRibbon && (
                  <div className="ribbon ribbon-top-left z-10">
                    <span>{course.ribbonText}</span>
                  </div>
                )}

                {/* Course Image */}
                <div className="overflow-hidden relative z-0 max-h-[450px]">
                  <ImageWithToggle
                    src={course.image}
                    alt={`Course ${index + 1}`}
                    className="w-full h-full object-cover transition-all duration-300 ease group-hover:scale-[1.05]"
                  />
                </div>

                {/* Content */}
                <div className="sm:py-[1.0582010582em]">
                  <h2
                    className={`${course.textClass} font-bold inline-block lg:text-[1.5873015873em] sm:leading-[1.333] sm:text-[2.34375em] xs:text-[3.75em] text-[5em]`}
                  >
                    {course.title}
                  </h2>
                  <h2 className="font-bold lg:text-[2.6455026455em] md:text-[3.125em] sm:text-[3.9113428944em] xs:text-[5em] text-[7vw] md:leading-[1.12] text-white sm:leading-[1.098] leading-[1.2] xs:my-[12px] my-0 xs:p-0 pt-[3vw] pb-[3.3333333333vw] whitespace-pre-line">
                    {course.subtitle}
                  </h2>
                  <p className="lg:text-[1.1904761905em] md:text-[1.953125em] sm:text-[2.8125em] xs:text-[3.3333333333em] text-[4.4444444444em] sm:leading-[1.555] font-light lg:max-w-[800px] text-white/75 mb-0">
                    {course.desc}
                  </p>

                  {/* Avatar */}
                  <div className="sm:flex items-center gap-3 my-[12px] hidden">
                    <ImageWithToggle
                      src={course.avatar}
                      alt="avatar"
                      className="lg:w-[3.3068783069em] lg:h-[3.3068783069em] w-[4.8828125em] h-[4.8828125em] rounded-full border-4 border-white/10"
                    />
                    <h3 className="lg:text-[1.0582010582em] text-base font-light text-white/60">
                      Taught by{" "}
                      <span className="text-white font-semibold">Abhishek</span>
                    </h3>
                  </div>

                  {/* Buttons */}
                  <div className="sm:pt-[0.7936507937em] pt-[4vw] flex lg:flex-nowrap flex-wrap lg:gap-[2.0502645503em] sm:gap-[3.02734375em] gap-[4.4444444444vw] lg:max-w-[800px]">
                    {course.btn1Link ? (
                      <Link
                        to={course.btn1Link}
                        className={`primary-btn inline-flex justify-center items-center text-center text-white lg:p-[0.7936507937em] md:p-[1.171875em] sm:p-[1.5625em] xs:p-[1.875em] p-[3.4vw] lg:w-[50%] w-full relative z-10 shadow-[0px_4px_0px_rgba(0,0,0,0.25),_0px_3px_0px_rgba(0,0,0,0.25)] cursor-pointer transition-all duration-300 ease ${course.btnClass}`}
                      >
                        <span className="sm:font-semibold font-bold lg:text-[1.3227513228em] md:text-[1.953125em] sm:text-[2.6041666667em] xs:text-[3.125em] text-[5em] relative z-10 xs:leading-[1.4] leading-[1.856]">
                          {course.btn1Text}
                        </span>
                      </Link>
                    ) : (
                      <a
                        onClick={openPopup}
                        className={`primary-btn inline-flex justify-center items-center text-center text-white lg:p-[0.7936507937em] md:p-[1.171875em] sm:p-[1.5625em] xs:p-[1.875em] p-[3.4vw] lg:w-[50%] w-full relative z-10 shadow-[0px_4px_0px_rgba(0,0,0,0.25),_0px_3px_0px_rgba(0,0,0,0.25)] transition-all duration-300 ease cursor-pointer ${course.btnClass}`}
                      >
                        <span className="sm:font-semibold font-bold lg:text-[1.3227513228em] md:text-[1.953125em] sm:text-[2.6041666667em] xs:text-[3.125em] text-[5em] relative z-10 xs:leading-[1.4] leading-[1.856]">
                          {course.btn1Text}
                        </span>
                      </a>
                    )}
                    <Link
                      to={course.btn2Link}
                      className=" bg-transparent hover:bg-white/10 border-[1.5px] border-white/20 inline-flex justify-center items-center text-center text-white lg:p-[0.7936507937em] md:p-[1.171875em] sm:p-[1.5625em] xs:p-[1.875em] p-[3.4vw] lg:w-[50%] w-full relative z-10 shadow-[0px_4px_0px_rgba(0,0,0,0.25),_0px_3px_0px_rgba(0,0,0,0.25)] transition-all duration-300 ease"
                    >
                      <span className="sm:font-semibold font-bold lg:text-[1.3227513228em] md:text-[1.953125em] sm:text-[2.6041666667em] xs:text-[3.125em] text-[5em] relative z-10 xs:leading-[1.4] leading-[1.856]">
                        {course.btn2Text}
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showPopup && <CallbackForm onClose={closePopup} />}

      {/* <section className="pb-[32px]">
        <div className="custom-container mx-auto py-0 px-4 sm:px-[2.1164021164em]">
          <div className="bg-[#252525] px-4 sm:px-[2.1164021164em] ">
            <div className="sm:py-[2.6455026455em] pt-[7.7777777778em] pb-[12.2222222222em]">
              <h2 className="lg:text-[1.5873015873em] md:text-[2.34375em] sm:text-[3.125em] xs:text-[3.4375em] text-[5.8333333333em] leading-normal font-bold text-white text-left mb-4">
                Try these FREE video lessons
              </h2>

              <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-[28px] gap-[52px]">
                {videoItems.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="border-b-[8px] border-[#A6A6A6] mb-3 shadow-[0px_5.03162px_0px_#000000]">
                      <div
                        className="w-full aspect-16/9 cursor-pointer relative"
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
                    <h3 className="text-white font-bold 2xl:text-[1.5873015873em] lg:text-[1.455026455em] md:text-[2.34375em] sm:text-[3.125em] xs:text-[3.4375em] text-[5.5555555556em] leading-[1.3]">
                      {item.title}
                    </h3>
                    <span className="text-white/60 sm:mt-[6px] mt-[4px] block lg:text-[1.0582010582em] md:text-[1.5625em] sm:text-[2.0833333333em] xs:text-[2.5em] text-[4.4444444444em] font-semibold">
                      PTE MasterClass
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="pb-[32px]">
        <div className="custom-container mx-auto py-0 px-4 sm:px-[32px]">
          <div className="bg-[#252525] px-4 sm:px-8 ">
            <div className="sm:py-10 py-7">
              <h2 className="sm:text-2xl text-[21px] leading-normal font-bold text-white text-left mb-4">
                Try these FREE video lessons
              </h2>

              <div className="relative">
                <div
                  className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-[28px] gap-[52px]"
                  ref={videoContainerRef}
                >
                  {displayedVideos.length > 0 ? (
                    displayedVideos.map((item, index) => (
                      <div key={index} className="relative">
                        <div className="border-b-[8px] border-[#A6A6A6] mb-3 shadow-[0px_5.03162px_0px_#000000]">
                          <div
                            className="w-full aspect-16/9 cursor-pointer relative"
                            onClick={() => {
                              const videoSrc = item.video_url
                                ? `${API_BASE_URL.replace('/api','')}/uploads/${item.video_url}`
                                : item.videoSrc || video;
                              setActiveVideo(videoSrc);
                              setIsModalOpen(true);
                            }}
                          >
                            <ImageWithToggle
                              src={
                                item.thumbnail_img
                                  ? `${API_BASE_URL.replace('/api','')}/uploads/${item.thumbnail_img}`
                                  : item.thumbnail || VideoImg1
                              }
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
                          {item.description || "PTE MasterClass"}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-4 text-center text-white py-8">
                      <p>Loading videos...</p>
                    </div>
                  )}
                </div>
                {/* {videoLessons.length > 4 && (
                  <div className="flex gap-3 justify-center items-center mt-8">
                    <button
                      onClick={handlePrevVideo}
                      disabled={currentVideoIndex === 0}
                      className="w-12 h-12 bg-[#1A1A1A] hover:bg-white/10 transition-all duration-300 ease-in-out rounded flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <svg
                        className="w-6 h-6"
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
                    <button
                      onClick={handleNextVideo}
                      disabled={currentVideoIndex >= videoLessons.length - 4}
                      className="w-12 h-12 bg-[#1A1A1A] hover:bg-white/10 transition-all duration-300 ease-in-out rounded flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <svg
                        className="w-6 h-6"
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
                )} */}
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
        <div className="custom-container mx-auto py-0 px-4 sm:px-[2.1164021164em]">
          <div className="bg-black1 flex flex-col sm:gap-[3.7698412698em] gap-[11.6666666667em] border-[1.5px] border-white/10 group md:px-[2.5132275132em] sm:px-6 px-4 md:pt-[3.9682539683em] md:pb-[5.6216931217em] pt-6 pb-7  relative">
            <h2 className="lg:text-[2.7777777778em] md:text-[4.1015625em] sm:text-[5.46875em] xs:text-[5em] text-[8.8888888889em] leading-[1.2] font-bold text-white text-left">
              What’s included in Every Course
            </h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-around sm:gap-x-[1.3227513228em] xs:gap-x-[4.1666666667em] gap-x-[5.5555555556em] sm:gap-y-[3.9682539683em] xs:gap-y-[12.5em] gap-y-[16.6666666667em]">
              <div className="text-center">
                <img
                  src={Icon1}
                  alt="Icon"
                  className="mx-auto sm:mb-[1.6534391534em] mb-6 lg:max-w-[5.8201058201em] sm:max-w-[7.6171875em] xs:max-w-[16.25em] max-w-[21.6666666667em]"
                />
                <span className="text-white/50 md:text-[1.1904761905em] sm:text-[2.8125em] xs:text-[3.3333333333em] text-[4em] block max-w-[17.8571428571em] mx-auto">
                  <span className="block text-[#E9E9E9]">Video Lectures -</span>{" "}
                  Basic to advance
                </span>
              </div>
              <div className="text-center">
                <img
                  src={Icon2}
                  alt="Icon"
                  className="mx-auto sm:mb-[1.6534391534em] mb-6 lg:max-w-[5.8201058201em] sm:max-w-[7.6171875em] xs:max-w-[16.25em] max-w-[21.6666666667em]"
                />
                <span className="text-white/50 md:text-[1.1904761905em] sm:text-[2.8125em] xs:text-[3.3333333333em] text-[4em] block max-w-[17.8571428571em] mx-auto">
                  <span className="block text-[#E9E9E9]">Study Material -</span>{" "}
                  Templates and prediction file
                </span>
              </div>
              <div className="text-center">
                <img
                  src={Icon3}
                  alt="Icon"
                  className="mx-auto sm:mb-[1.6534391534em] mb-6 lg:max-w-[5.8201058201em] sm:max-w-[7.6171875em] xs:max-w-[16.25em] max-w-[21.6666666667em]"
                />
                <span className="text-white/50 md:text-[1.1904761905em] sm:text-[2.8125em] xs:text-[3.3333333333em] text-[4em] block max-w-[17.8571428571em] mx-auto">
                  <span className="block text-[#E9E9E9]">
                    Class Recordings -{" "}
                  </span>
                  Video library of past classes
                </span>
              </div>
              <div className="text-center">
                <img
                  src={Icon4}
                  alt="Icon"
                  className="mx-auto sm:mb-[1.6534391534em] mb-6 lg:max-w-[5.8201058201em] sm:max-w-[7.6171875em] xs:max-w-[16.25em] max-w-[21.6666666667em]"
                />
                <span className="text-white/50 md:text-[1.1904761905em] sm:text-[2.8125em] xs:text-[3.3333333333em] text-[4em] block max-w-[17.8571428571em] mx-auto">
                  <span className="block text-[#E9E9E9]">AI Portal -</span>Mock
                  Test & 5000+ exam <br />
                  questions
                </span>
              </div>
              <div className="text-center">
                <img
                  src={Icon5}
                  alt="Icon"
                  className="mx-auto sm:mb-[1.6534391534em] mb-6 lg:max-w-[5.8201058201em] sm:max-w-[7.6171875em] xs:max-w-[16.25em] max-w-[21.6666666667em]"
                />
                <span className="text-white/50 md:text-[1.1904761905em] sm:text-[2.8125em] xs:text-[3.3333333333em] text-[4em] block max-w-[17.8571428571em] mx-auto">
                  <span className="block text-[#E9E9E9]">Feedback -</span>
                  Ask an Expert
                </span>
              </div>
              <div className="text-center">
                <img
                  src={Icon6}
                  alt="Icon"
                  className="mx-auto sm:mb-[1.6534391534em] mb-6 lg:max-w-[5.8201058201em] sm:max-w-[7.6171875em] xs:max-w-[16.25em] max-w-[21.6666666667em]"
                />
                <span className="text-white/50 md:text-[1.1904761905em] sm:text-[2.8125em] xs:text-[3.3333333333em] text-[4em] block max-w-[17.8571428571em] mx-auto">
                  <span className="block text-[#E9E9E9]">Live Classes - </span>
                  Learn with other students
                </span>
              </div>
              <div className="text-center">
                <img
                  src={Icon7}
                  alt="Icon"
                  className="mx-auto sm:mb-[1.6534391534em] mb-6 lg:max-w-[5.8201058201em] sm:max-w-[7.6171875em] xs:max-w-[16.25em] max-w-[21.6666666667em]"
                />
                <span className="text-white/50 md:text-[1.1904761905em] sm:text-[2.8125em] xs:text-[3.3333333333em] text-[4em] block max-w-[17.8571428571em] mx-auto">
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
        <div className="custom-container mx-auto py-0 px-4 sm:px-[2.1164021164em]">
          <div className="bg-[#212121] px-4 sm:px-8 sm:pb-[32px] pb-4 relative z-10">
            <div className="relative z-20">
              <div className="sm:py-[2.1164021164em] py-7 flex justify-between items-center">
                <h2 className="lg:text-[1.9841269841em] md:text-[2.9296875em] sm:text-[3.3854166667em] xs:text-[4.0625em] text-[6.6666666667em] font-bold text-white text-left">
                  Testimonials
                </h2>
                <div className="flex items-center justify-end">
                  <Link
                    to="/testimonials"
                    className="bg-black2 sm:px-[1.9841269841em] sm:py-[0.7936507937em] p-[3.0555555556vw] text-center rounded-[6px] text-white lg:text-[1.1904761905em] md:text-[1.5625em] xs:text-[2.0860495437em] text-[4.1666666667em] leading-[1.32] font-semibold sm:min-w-[auto] min-w-[100px]"
                  >
                    View all
                  </Link>
                </div>
              </div>
              <TestimonialCarousel testimonials={testimonials} />
            </div>
            <img
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
                  className="w-full rounded-[11px] md:h-[24.353em] h-full object-cover"
                />
                <h2 className="font-bold text-white lg:text-[2.6455026455em] md:text-[3.125em] mt-[0.8em]">
                  What’s covered in class:
                </h2>
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:mt-[2.7777777778em] mt-[1.171875em] lg:gap-[1.8518518519em] gap-[1.5625em]">
                  <div className="flex items-center gap-4 text-white font-medium">
                    <img
                      src={checklist}
                      alt="checklist"
                      className="w-[1.7195767196em] h-[1.7195767196em]"
                    />
                    <span className="lg:text-[1.455026455em] md:text-[1.953125em]">
                      Basic Introduction
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-white font-medium">
                    <img
                      src={checklist}
                      alt="checklist"
                      className="w-[1.7195767196em] h-[1.7195767196em]"
                    />
                    <span className="lg:text-[1.455026455em] md:text-[1.953125em]">
                      Test Format & Overview
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-white font-medium">
                    <img
                      src={checklist}
                      alt="checklist"
                      className="w-[1.7195767196em] h-[1.7195767196em]"
                    />
                    <span className="lg:text-[1.455026455em] md:text-[1.953125em]">
                      Level of English
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-white font-medium">
                    <img
                      src={checklist}
                      alt="checklist"
                      className="w-[1.7195767196em] h-[1.7195767196em]"
                    />
                    <span className="lg:text-[1.455026455em] md:text-[1.953125em]">
                      Scorecard Analysis
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-white font-medium">
                    <img
                      src={checklist}
                      alt="checklist"
                      className="w-[1.7195767196em] h-[1.7195767196em]"
                    />
                    <span className="lg:text-[1.455026455em] md:text-[1.953125em]">
                      And more!
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:w-[50%] w-full">
                <div className="border-b-[1.5px] border-[#2A2A2A]">
                  <h2 className="inline-block font-bold lg:text-[2.7777777778em] md:text-[3.515625em] sm:text-[4.6875em] xs:text-[5.625em] text-[7.2916666667em] text-gradient-OrangeRed  leading-[1.176] sm:pb-[0.4761904762em] pb-[3.125vw] ">
                    Book a FREE Trial Class
                  </h2>
                </div>
                <p className="font-normal text-white/75 lg:text-[1.455026455em] md:text-[1.953125em] sm:text-[18px2.34375em] xs:text-[2.5em] text-[4.1666666667em] sm:pt-[1.2727272727em] pt-[5.7291666667vw]">
                  Please fill out the below form. Our team will be in touch with
                  you shortly.
                </p>
                <div className="xs:pt-6 pt-[4.6875vw]">
                  <BookFreeTrail />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
