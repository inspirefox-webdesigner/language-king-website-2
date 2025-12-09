import { useState } from "react";
import BannerBg from "../assets/ebook/e-book-bg.png";
import NewTipsImage from "../assets/ebook/new-tips.png";
import avatar from "../assets/avatar-img.png";
import CheckmarkYellow from "../assets/icons/checkmark-yellow.svg";
import Book1 from "../assets/ebook/book1.png";
import Book2 from "../assets/ebook/book2.png";
import Book3 from "../assets/ebook/book3.png";
import Book4 from "../assets/ebook/book4.png";
// import video from "../assets/videos/placeholder-video.mp4";
import BGgradient from "../assets/ebook/gradient.png";
import Rectangle from "../assets/ebook/rectangle.png";
import badge from "../assets/ebook/badge.svg";
import Plus from "../assets/icons/plus.svg";
import { Link } from "react-router-dom";

// import checkmark from "../assets/icons/green-checkmark.svg";
// import EmailIcon from "../assets/icons/green-email-icon.svg";
import ImageWithToggle from "../components/ImageWithToggle";
import useFreeEbookBanner from "../hooks/useFreeEbookBanner";
import useFAQs from "../hooks/useFAQs";
import useBookBox from "../hooks/useBookBox";
import API_BASE_URL from "../config/api";

// Helper function to get image URL
const getImageUrl = (imageName, fallback) => {
  if (imageName) {
    return `${API_BASE_URL.replace("/api", "")}/uploads/${imageName}`;
  }
  return fallback;
};

const faqs = [
  {
    question: "Why is there a $0.99 charge for Free Trial?",
    answer:
      "The $0.99 charge is a small, one-time fee to help us verify your identity and prevent misuse of our free offer. This minimal amount ensures genuine sign-ups and helps maintain a secure platform. The charge is non-refundable but confirms your access to the free E-Book/ PDF for one week.",
  },
  {
    question: "Is the E-Book really free?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maxime officia esse delectus dolore temporibus ad, repellendus aperiam iste provident veniam aut animi id impedit. Ipsa inventore tenetur dolorem ad?",
  },
  {
    question: "How long do I have access to the E-Book?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maxime officia esse delectus dolore temporibus ad, repellendus aperiam iste provident veniam aut animi id impedit. Ipsa inventore tenetur dolorem ad?",
  },
  {
    question: "What if I don’t receive the E-book on email?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maxime officia esse delectus dolore temporibus ad, repellendus aperiam iste provident veniam aut animi id impedit. Ipsa inventore tenetur dolorem ad?",
  },
  {
    question: "Can I use a temporary or disposable email for verification?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maxime officia esse delectus dolore temporibus ad, repellendus aperiam iste provident veniam aut animi id impedit. Ipsa inventore tenetur dolorem ad?",
  },
  {
    question:
      "How do I cancel or delete my account after downloading the eBook?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maxime officia esse delectus dolore temporibus ad, repellendus aperiam iste provident veniam aut animi id impedit. Ipsa inventore tenetur dolorem ad?",
  },
  {
    question: "What happens after my free 1-week access ends?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maxime officia esse delectus dolore temporibus ad, repellendus aperiam iste provident veniam aut animi id impedit. Ipsa inventore tenetur dolorem ad?",
  },
  {
    question: "Is my information secure?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt maxime officia esse delectus dolore temporibus ad, repellendus aperiam iste provident veniam aut animi id impedit. Ipsa inventore tenetur dolorem ad?",
  },
];

const PlusIcon = () => (
  <svg
    width="100%"
    height="auto"
    viewBox="0 0 45 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="2.87183"
      width="41"
      height="41"
      rx="10"
      stroke="white"
      strokeOpacity="0.5"
      strokeWidth="4"
      strokeLinejoin="round"
    />
    <path
      d="M15 23.8718H30"
      stroke="white"
      strokeOpacity="0.5"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.5 31.3718V16.3718"
      stroke="white"
      strokeOpacity="0.5"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MinusIcon = () => (
  <svg
    width="100%"
    height="auto"
    viewBox="0 0 45 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="2.87183"
      width="41"
      height="41"
      rx="10"
      stroke="white"
      strokeWidth="4"
      strokeLinejoin="round"
    />
    <path
      d="M15 23.8718H30"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FreeEBook = () => {
  const { bannerData, loading, error, refetch } = useFreeEbookBanner();
  const {
    faqs: dynamicFaqs,
    loading: faqsLoading,
    error: faqsError,
    clearCache,
  } = useFAQs();
  const {
    bookBoxData,
    loading: bookBoxLoading,
    error: bookBoxError,
    clearCache: clearBookBoxCache,
  } = useBookBox();

  // FAq section
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [selected, setSelected] = useState("ebook");
  const [selectedBox, setSelectedBox] = useState("ebook");
  const [addPredictionFile, setAddPredictionFile] = useState(false);

  if (loading || faqsLoading || bookBoxLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  // Manual refresh function for development/testing
  const handleRefresh = () => {
    if (refetch) {
      refetch();
    }
    if (clearCache) {
      clearCache();
    }
    if (clearBookBoxCache) {
      clearBookBoxCache();
    }
  };

  if (error) {
    console.error("Banner data error:", error);
  }

  if (faqsError) {
    console.error("FAQs data error:", faqsError);
  }

  if (bookBoxError) {
    console.error("Book Box data error:", bookBoxError);
  }

  // Use dynamic FAQs if available, otherwise fallback to static FAQs
  const faqsToDisplay = dynamicFaqs.length > 0 ? dynamicFaqs : faqs;

  // Prepare learning points: prefer `learning_points` array from API,
  // otherwise fall back to legacy `learn_point_1/2/3` or hardcoded defaults.
  const _defaultLearningPoints = [
    "Attempt R&W blanks",
    "Difference b/w linkers, starters and connectors",
    "Quiz to test your learning",
  ];

  const learningPoints = (() => {
    if (
      bannerData?.learning_points &&
      Array.isArray(bannerData.learning_points) &&
      bannerData.learning_points.length > 0
    ) {
      return bannerData.learning_points;
    }

    // fallback to legacy fields or defaults
    const legacy = [
      bannerData?.learn_point_1,
      bannerData?.learn_point_2,
      bannerData?.learn_point_3,
    ];
    return legacy.map((p, i) => p || _defaultLearningPoints[i]);
  })();

  return (
    <>
      {/* black space for header */}
      <div className="bg-black w-full lg:h-[7.9365079365em] h-[120px] lg:mt-[-7.9365079365em] mt-[-120px]"></div>
      <section className="banner-wrapper 2xl:pt-[5.291005291em] sm:pt-[4.6296296296em] pt-[24vw] sm:pb-[3.9682539683em] pb-[40px] relative flex flex-column justify-center items-center lg:mt-0 mt-0 min-h-[90vh] border-b border-[#707070]">
        <div className="sm:bg-transparent bg-gradient-FadetoBlack h-full w-full absolute top-0 z-10 lg:hidden block"></div>
        <ImageWithToggle
          src={getImageUrl(bannerData?.banner_bg_image, BannerBg)}
          alt="BannerBg"
          className="absolute w-full h-full top-0 left-0 right-0 bottom-0 object-cover"
        />
        <div className="custom-container mx-auto py-0 px-4 sm:px-[2.1164021164em] w-full z-10 relative">
          <div className="flex lg:gap-x-[6.6137566138em] sm:gap-x-[13.671875em] gap-x-[140px] sm:flex-nowrap flex-wrap">
            <div className="sm:w-[20%] w-full flex flex-col justify-between">
              <img
                src={getImageUrl(bannerData?.new_tips_image, NewTipsImage)}
                alt="NewTipsImage"
                className="h-auto xl:max-w-[16.5343915344em]  md:max-w-[13.2275132275em] max-w-[200px] -mt-[20px] sm:mx-0 mx-auto"
              />
              <span className="uppercase md:text-[1.0582010582em] xs:text-[2.5em] text-[4.4444444444em] font-semibold text-white/50 sm:block hidden">
                {bannerData?.expert_text || "LEARN FROM THE EXPERT + MORE:"}
              </span>
              <div className="sm:flex items-center gap-3 mt-[2.1164021164em] hidden">
                <ImageWithToggle
                  src={getImageUrl(bannerData?.expert_avatar, avatar)}
                  alt="avatar"
                  className="sm:w-[3.3068783069em] sm:h-[3.3068783069em] w-[50px] h-[50px] rounded-full border-4 border-white/10"
                />
                <div>
                  <span className="text-white sm:text-[1.1904761905em] text-lg font-semibold">
                    {bannerData?.expert_name || "Abhishek"}
                  </span>
                  <h3 className="sm:text-[1.0582010582em] text-base font-light text-white/60 leading-[1.2]">
                    {bannerData?.expert_title || "PTE Master Trainer"}
                  </h3>
                </div>
              </div>
            </div>
            <div className="sm:w-[80%]">
              <div className="flex flex-col justify-between sm:gap-y-[3.3068783069em] gap-y-[7vw] h-full">
                <div className="flex lg:flex-nowrap flex-wrap gap-5 justify-between lg:pe-[1.9841269841em]">
                  <div className="lg:max-w-[70%] max-w-full">
                    <h1 className="font-inter font-bold md:text-[4.0211640212em] xs:text-[6.258148631em] text-[9em] sm:leading-[1.1022] leading-[1.25] 2xl:mt-2 mt-0 text-white xs:pt-0 pt-[7.8125vw]">
                      <span
                        dangerouslySetInnerHTML={{
                          __html:
                            bannerData?.main_heading?.replace(
                              "Free E-book",
                              '<span class="text-[#F1CD5A] block">Free E-book</span>'
                            ) ||
                            'PTE Reading Blanks <span class="text-[#F1CD5A] block">Free E-book</span>',
                        }}
                      />
                    </h1>
                    <p className="font-light md:text-[1.1904761905em] leading-[1.55555555] xs:text-[2.5em] max-w-[800px] text-[4.0364583333em] text-white xs:mt-3 mt-[6.25vw]">
                      {bannerData?.main_description ||
                        "Learn how to solve PTE Reading Blanks with confidence, master linkers, starters, and connectors, test your skills with an interactive quiz, and boost your score effortlessly"}
                    </p>
                  </div>
                  <div className="lg:max-w-[15.3604497354vw] max-w-full lg:block hidden">
                    <h2 className="text-white xl:text-[1.1904761905em] leading-[1.556] text-base font-bold my-[1.3888888889em]">
                      YOU’LL LEARN HOW TO:
                    </h2>
                    <ul className="">
                      {learningPoints.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-center sm:leading-[1.5] leading-[1.4] sm:text-[1.0582010582em] text-sm text-white sm:gap-[1.75em] gap-4 py-[0.5em]"
                        >
                          <img
                            src={CheckmarkYellow}
                            alt="CheckmarkYellow"
                            className="w-4"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="lg:max-w-[70%] max-w-full flex lg:flex-nowrap flex-wrap items-center sm:justify-start justify-center lg:gap-[2.6455026455em] sm:gap-7 gap-4 sm:order-0 -order-1 ">
                  <div className="relative rounded-lg sm:w-auto w-full ">
                    <a
                      href="#"
                      className="align-middle xs:inline-flex hidden items-center justify-center text-center primary-btn primary-btn-rounded bg-gradient-primary text-black sm:px-3 px-[0.6em] xs:py-[0.6em] py-[5vw] font-normal sm:text-[1.3227513228em] xs:text-[2.5em] text-[4.444444444444em] xs:mt-0 mt-[3vw] leading-[1.4] relative z-10 sm:min-w-[12.1em] sm:w-auto w-full rounded-lg "
                    >
                      {bannerData?.cta_button_text || "Start 7-Day Trial"}
                    </a>

                    <a
                      href="#"
                      className="xs:hidden align-middle inline-flex items-center justify-center text-center primary-btn primary-btn-rounded bg-gradient-primary text-black sm:px-3 px-[0.6em] xs:py-[0.6em] py-[5vw] font-normal sm:text-[1.3227513228em] xs:text-[2.5em] text-[4.444444444444em] xs:mt-0 mt-[3vw] leading-[1.4] relative z-10 sm:min-w-[12.1em] sm:w-auto w-full rounded-lg "
                    >
                      {bannerData?.cta_button_text_mobile ||
                        "Start 7-Day Free Trial"}
                      {bannerData?.cta_button_text || "Start 7-Day Trial"}
                    </a>

                    <a
                      href="#"
                      className="xs:hidden align-middle inline-flex items-center justify-center text-center primary-btn primary-btn-rounded bg-gradient-primary text-black sm:px-3 px-[0.6em] xs:py-[0.6em] py-[5vw] font-normal sm:text-[1.3227513228em] xs:text-[2.5em] text-[4.444444444444em] xs:mt-0 mt-[3vw] leading-[1.4] relative z-10 sm:min-w-[12.1em] sm:w-auto w-full rounded-lg "
                    >
                      {bannerData?.cta_button_text || "Start 7-Day Free Trial"}
                    </a>
                  </div>
                  <div>
                    <h4 className="xs:block hidden text-[#F1CD5A] sm:text-[1.1904761905em] text-[4.16666666667em] leading-[1.55555555] font-semibold sm:text-start text-center">
                      {bannerData?.save_text ||
                        "Save $33 by using AI Portal + Prediction File + 6 Books"}
                    </h4>
                    <h4 className="xs:hidden block text-[#F1CD5A] sm:text-[1.1904761905em] text-[4.16666666667em] leading-[1.55555555] font-semibold sm:text-start text-center">
                      {bannerData?.save_text_mobile ||
                        "Save $33 by using AI Portal"}
                    </h4>
                    <span className="uppercase font-semibold text-white/50 text-[0.8597883598em] mt-[0.3846153846em] leading-[1.462] sm:inline hidden">
                      See below
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div className="flex sm:flex-nowrap flex-wrap sm:mt-0 mt-[1.6534391534em] items-end sm:gap-0 gap-[5.5555vw]">
                    <div className="sm:w-[25%] w-full flex flex-col xs:gap-0 gap-[0.7vw]">
                      <span className="text-white sm:text-[1.1904761905em] xs:text-[2.5em] text-[4.44444444em] font-semibold">
                        {bannerData?.other_books_heading || "Other Books"}
                      </span>
                      <h3 className="sm:text-[1.0582010582em] xs:text-[2.5em] text-[4.1666666667em] font-light text-white/60 leading-[1.2]">
                        {bannerData?.other_books_subheading ||
                          "PTE Study Material"}
                      </h3>
                    </div>
                    <div className="sm:w-[75%] w-full sm:grid grid-cols-4 flex justify-between gap-[1.3227513228em]">
                      <ImageWithToggle
                        src={getImageUrl(bannerData?.book_1_image, Book1)}
                        alt="Book1"
                        className="w-auto sm:h-[4.0343915344em] h-[16.9444444444vw] sm:max-w-[3.3068783069em] max-w-[11.6666666667vw]"
                      />
                      <ImageWithToggle
                        src={getImageUrl(bannerData?.book_2_image, Book2)}
                        alt="Book2"
                        className="w-auto sm:h-[4.0343915344em] h-[16.9444444444vw] sm:max-w-[3.3068783069em] max-w-[11.6666666667vw]"
                      />
                      <ImageWithToggle
                        src={getImageUrl(bannerData?.book_3_image, Book3)}
                        alt="Book3"
                        className="w-auto sm:h-[4.0343915344em] h-[16.9444444444vw] sm:max-w-[3.3068783069em] max-w-[11.6666666667vw]"
                      />
                      <ImageWithToggle
                        src={getImageUrl(bannerData?.book_4_image, Book4)}
                        alt="Book4"
                        className="w-auto sm:h-[4.0343915344em] h-[16.9444444444vw] sm:max-w-[3.3068783069em] max-w-[11.6666666667vw]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-banner-gradient absolute w-full h-full top-0 left-0 right-0 bottom-0"></div>
      </section>

      <section className="relative">
        <img
          src={BGgradient}
          alt="BGgradient"
          className="w-full h-full object-cover absolute top-0 left-0 right-0"
        />
        <div className="custom-container mx-auto sm:py-[4.2328042328em] py-[40px] px-4 sm:px-[2.1164021164em] w-full z-10 relative ">
          <div className="flex lg:flex-nowrap flex-wrap 2xl:gap-[9.9206349206em] lg:gap-[5.291005291em] gap-[2.6455026455em]">
            {/* Desktop Box */}
            <div className="lg:w-[60%] w-full sm:inline hidden">
              {/* E-Book Box content here */}
              <div
                onClick={() => setSelectedBox("ebook")}
                className={`cursor-pointer border-4 bg-[#1B1B1B] mb-[2.1825396825em] rounded-[0.6613756614em] ${
                  selectedBox === "ebook"
                    ? "border-[#F18C2D]"
                    : "border-[#1B1B1B]"
                }`}
              >
                <div className="xl:py-[2.2486772487em] sm:py-[2.1164021164em] py-8 sm:px-[2.5132275132em] px-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-bold lg:text-[2.380952381em] sm:text-[2.1164021164em] text-3xl leading-[1.167] mb-[0.1111111111em]">
                      {bookBoxData?.ebook_title || "E-Book Only"}
                    </h3>
                    <span className="text-[#B8B8B8] font-normal lg:text-[1.3227513228em] leading-[1.4] text-lg">
                      {bookBoxData?.ebook_subtitle || "Get 7-days Free Trial"}
                    </span>
                  </div>
                  <div className="flex 2xl:gap-[2.9761904762em] sm:gap-[2.1164021164em] gap-[32px]">
                    <h4 className="text-[#00FEFC] 2xl:text-[2.7777777778em] xl:text-[2.380952381em] sm:text-[1.9841269841em] text-3xl leading-[1.5] font-bold ">
                      {bookBoxData?.ebook_price || "$0.99"}
                    </h4>
                  </div>
                </div>
              </div>

              {/* AI Portal Box content here */}
              <div
                onClick={() => setSelectedBox("aiportal")}
                className={`cursor-pointer border-4 ${
                  selectedBox === "aiportal"
                    ? "border-[#F18C2D]"
                    : "border-[#1B1B1B]"
                } rounded-[6px] bg-[#1B1B1B]`}
              >
                <div className=" ">
                  <div className="flex xl:p-[2.1164021164em] sm:p-[1.5873015873em] p-6 xl:gap-[2.7777777778em] sm:gap-[1.8518518519em] gap-[28px] border-b-2 border-white border-dashed">
                    <img
                      src={getImageUrl(bookBoxData?.aiportal_image, Rectangle)}
                      alt="AI Portal"
                      className="w-3xl:w-[27%] w-[32%] object-cover"
                    />
                    <div className="w-3xl:w-[70%] w-[68%] flex flex-col justify-between">
                      <div>
                        <h3 className="text-[#F3F2F3] lg:text-[2.380952381em] sm:text-[2.1164021164em] text-[32px] leading-[1.167] font-bold">
                          {bookBoxData?.aiportal_title || "6 Month AI Portal"}
                        </h3>
                        <ul className="sm:text-[1.3227513228em] text-lg leading-[1.4] text-[#B8B8B8] font-normal mt-[0.2em]">
                          {bookBoxData?.aiportal_features
                            ? bookBoxData.aiportal_features
                                .split("\n")
                                .map((feature, index) => (
                                  <li key={index} className="py-[0.1em]">
                                    {feature}
                                  </li>
                                ))
                            : [
                                <li key="1" className="py-[0.1em]">
                                  - 10 Full Mock Tests
                                </li>,
                                <li key="2" className="py-[0.1em]">
                                  - 20 Sectional Tests
                                </li>,
                                <li key="3" className="py-[0.1em]">
                                  - 5000+ Exam Questions
                                </li>,
                                <li key="4" className="py-[0.1em]">
                                  - 5 Books Included
                                </li>,
                              ]}
                        </ul>
                      </div>
                      <div className="flex justify-end items-center 2xl:gap-[3.9682539683em] sm:gap-[1.9841269841em] gap-[30px] mt-[1.6534391534em]">
                        <h4 className="text-[#B0B0B0] 2xl:text-[2.7777777778em] xl:text-[2.380952381em] sm:text-[1.9841269841em] text-[30px] font-bold line-through">
                          {bookBoxData?.aiportal_original_price || "$129"}
                        </h4>
                        <div className="flex items-center gap-[2.9761904762em] justify-between">
                          <h4 className="text-[#F0AB0F] 2xl:text-[2.7777777778em] xl:text-[2.380952381em] sm:text-[1.9841269841em] text-[30px] font-bold ">
                            {bookBoxData?.aiportal_price || "$99"}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-[2.1164021164em]">
                    <div className="flex justify-between items-center md:gap-[2.7777777778em] gap-[1.8518518519em]">
                      <div>
                        <h3 className="text-white font-bold sm:text-[2.5132275132em] text-[2.1164021164em] leading-[1.2]">
                          +{" "}
                          {bookBoxData?.prediction_file_title ||
                            "Prediction File"}{" "}
                        </h3>
                        <span className="text-[#B8B8B8] font-normal 2xl:text-[1.3227513228em] xl:text-[1.1904761905em] text-base">
                          {bookBoxData?.prediction_file_subtitle ||
                            "Get monthly updates for 6 months"}
                        </span>
                      </div>
                      <div className="flex 2xl:gap-[2.9761904762em] sm:gap-[2.1164021164em] gap-[32px] items-center">
                        <button
                          onClick={() =>
                            setAddPredictionFile(!addPredictionFile)
                          }
                          className="flex items-center gap-[0.6666666667em] bg-[#45595A] rounded-[0.5555555556em] sm:px-4 px-[0.8888888889em] sm:py-2 py-[0.4444444444em] text-white font-semibold text-[1.1904761905em] leading-[1.5555555] cursor-pointer"
                        >
                          {addPredictionFile ? "Remove" : "Add"}
                          <img
                            src={Plus}
                            alt="plus-icon"
                            className="h-[1.1111111111em]"
                          />
                        </button>
                        <h4 className="text-[#00FEFC] 2xl:text-[2.7777777778em] xl:text-[2.380952381em] sm:text-[1.9841269841em] text-[30px]  font-bold ">
                          + {bookBoxData?.prediction_file_price || "$9"}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-[40%] w-full">
              <div className="bg-[#1B1B1B] xl:p-[2.7777777778em] sm:p-[2.1164021164em] px-4 sm:py-[1.5873015873em] py-6 rounded-[0.6613756614em]">
                <div className="sm:block hidden">
                  {selectedBox === "ebook" ? (
                    // E-Book Only Details
                    <div>
                      <div className="flex justify-between gap-[1.0582010582em]">
                        <h4 className="font-semibold text-white xl:text-[1.3227513228em] sm:text-[1.1904761905em] leading-[1.6] text-lg">
                          {bookBoxData?.ebook_title || "E-Book Only"}
                        </h4>
                      </div>
                      <div className="flex justify-between gap-4">
                        <h4 className="font-semibold text-white xl:text-[1.3227513228em] sm:text-[1.1904761905em] leading-[1.6] text-lg">
                          {bookBoxData?.ebook_subtitle ||
                            "Get 7-days Free Trial"}
                        </h4>
                        <div className="">
                          <span className="text-[#F0AB0F] font-bold xl:text-[1.3227513228em] sm:text-[1.1904761905em] leading-[1.4] text-lg">
                            {bookBoxData?.ebook_price || "$0.99"}
                          </span>
                        </div>
                      </div>
                      <hr className="border-[#3D3D3D] my-[1.9841269841em]" />
                      <div className="max-w-[26.455026455em]">
                        <div className="flex justify-between gap-[1.0582010582em] items-center">
                          <div className="w-auto flex-auto">
                            <h4 className="font-semibold text-white xl:text-[1.3227513228em] sm:text-[1.1904761905em] leading-[1.4] text-lg inline">
                              Your total:{" "}
                            </h4>
                            <span className="text-[#B0B0B0] line-through font-bold xl:text-[1.3227513228em] text-[1.1904761905em] ps-[0.8em]">
                              $150
                            </span>
                          </div>
                          <span className="text-[#F0AB0F] font-medium xl:text-[1.3227513228em] text-[1.1904761905em]">
                            Saving $33!
                          </span>
                        </div>
                        <h4 className="text-[#B0B0B0] font-bold xl:text-[4.7619047619em] text-[3.9682539683em] leading-[1.1]">
                          $119
                        </h4>
                        <span className="text-[#B0B0B0] font-bold text-[1.0582010582em] sm:text-base">
                          (GST Included)
                        </span>
                      </div>
                    </div>
                  ) : (
                    // AI Portal Details
                    <div>
                      {/* AI Portal Header */}
                      <div className="flex justify-between">
                        <h4 className="font-semibold text-white text-lg">
                          {bookBoxData?.aiportal_title || "6 Month AI Portal"}
                        </h4>

                        <div>
                          <span className="text-[#B0B0B0] line-through font-bold me-4">
                            {bookBoxData?.aiportal_original_price || "$129"}
                          </span>
                          <span className="text-[#F0AB0F] font-bold xl:text-[1.3227513228em] sm:text-[1.1904761905em] leading-[1.4] text-lg">
                            {bookBoxData?.aiportal_price || "$99"}
                          </span>
                        </div>
                      </div>

                      {/* (A) AI TOTAL WITHOUT Prediction File */}
                      {!addPredictionFile && (
                        <>
                          <hr className="border-[#3D3D3D] my-6" />

                          <div className="max-w-[26.455026455em]">
                            <div className="flex justify-between items-center">
                              <div className="flex-auto">
                                <h4 className="font-semibold text-white xl:text-[1.3227513228em] sm:text-[1.1904761905em] leading-[1.4] text-lg inline">
                                  Your total:
                                </h4>
                                <span className="text-[#B0B0B0] line-through font-bold xl:text-[1.3227513228em] text-[1.1904761905em] ps-[0.8em]">
                                  $152
                                </span>
                              </div>

                              <span className="text-[#F0AB0F] font-medium xl:text-[1.3227513228em] text-[1.1904761905em]">
                                Saving $33!
                              </span>
                            </div>

                            <h4 className="text-[#B0B0B0] font-bold text-[3.8em] leading-[1.1]">
                              $119
                            </h4>

                            <span className="text-[#B0B0B0] font-bold text-base">
                              (GST Included)
                            </span>
                          </div>
                        </>
                      )}

                      {/* AI TOTAL WITH Prediction File Added*/}
                      {addPredictionFile && (
                        <>
                          {/* <hr className="border-[#3D3D3D] my-6" /> */}

                          {/* Prediction File item */}
                          <div className="flex justify-between mb-4">
                            <h4 className="font-semibold text-white text-lg">
                              {bookBoxData?.prediction_file_title ||
                                "Prediction File 2"}
                            </h4>
                            <span className="text-[#F0AB0F] font-bold">
                              {bookBoxData?.prediction_file_price || "$9"}
                            </span>
                          </div>

                          <hr className="border-[#3D3D3D] my-6" />

                          <div className="max-w-[26.455026455em]">
                            <div className="flex justify-between items-center">
                              <div className="flex-auto">
                                <h4 className="font-semibold text-white xl:text-[1.3227513228em] sm:text-[1.1904761905em] leading-[1.4] text-lg inline">
                                  Your total:
                                </h4>

                                <span className="text-[#B0B0B0] line-through font-bold xl:text-[1.3227513228em] text-[1.1904761905em] ps-[0.8em]">
                                  $161
                                </span>
                              </div>

                              <span className="text-[#F0AB0F] font-medium xl:text-[1.3227513228em] text-[1.1904761905em]">
                                Saving $33!
                              </span>
                            </div>

                            <h4 className="text-[#B0B0B0] font-bold text-[3.8em] leading-[1.1]">
                              $128
                            </h4>

                            <span className="text-[#B0B0B0] font-bold text-base">
                              (GST Included)
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>

                {/* Mobile Box */}
                <div className="sm:hidden block">
                  {/* E-Book Only Box */}
                  <div
                    className={`mb-3 rounded-[5px] p-[2.34px]
                      ${
                        selected === "ebook"
                          ? "bg-gradient-to-r from-[#F69F19] via-[#F0AB0F] to-[#FF39D0]"
                          : "bg-[#707070]"
                      }  `}
                  >
                    <div
                      onClick={() => {
                        setSelected("ebook");
                        setSelectedBox("ebook");
                        setAddPredictionFile(false);
                      }}
                      className={`rounded-[3px] py-[22px] px-[10px] flex justify-between items-center cursor-pointer w-full border-0 ${
                        selected === "ebook" ? "bg-[#0A0A09]" : "bg-[#1B1B1B]"
                      } `}
                    >
                      <div className="flex gap-[10px] items-start">
                        {selected === "ebook" && (
                          <img
                            src={badge}
                            alt="Selected Badge"
                            className="object-contain w-7 h-7"
                          />
                        )}
                        <div className="flex flex-col">
                          <h3 className="text-[#F3F2F3] mb-0 xs:text-[2.8125em] text-[5em] font-bold">
                            {bookBoxData?.ebook_title || "E-Book Only"}
                          </h3>
                          <p className="xs:text-[2.1875em] text-[3.6458333333em] text-[#B8B8B8] font-normal mt-[-4px]">
                            {bookBoxData?.ebook_subtitle ||
                              "Get 7-days Free Trial"}
                          </p>
                        </div>
                      </div>
                      <div>
                        <button
                          type="button"
                          className={`align-middle inline-flex items-center justify-center text-center primary-btn px-4 py-[2.2222222222vw] font-semibold text-[4.1666666667em] relative z-10 rounded-[50px] hover-full-rounded-btn  w-[21.6666666667vw]
                          ${
                            selected === "ebook"
                              ? "bg-gradient-GreenBlue text-black"
                              : "bg-[#3E3E3D] text-[#BFDF6A]"
                          }`}
                        >
                          {bookBoxData?.ebook_price || "$0.99"}
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* <div
                    onClick={() => setSelected("ebook")}
                    className={`mb-4 border-[2.34px] rounded-[3px] py-[24px] px-[10px] flex gap-5 justify-between items-center cursor-pointer transition-all duration-300
                    ${selected === "ebook"
                        ? "border-[#F18C2D] bg-[#0A0A09]""
                        : "border-[#707070] bg-[#1B1B1B]"
                      }`}
                  >
                    
                  </div> */}

                  {/* 6 Month AI Portal Box */}
                  <div
                    className={`rounded-[5px] p-[2.34px] 
                      ${
                        selected === "portal"
                          ? "bg-gradient-to-r from-[#F69F19] via-[#F0AB0F] to-[#FF39D0]"
                          : "bg-[#707070]"
                      }  `}
                  >
                    <div
                      onClick={() => {
                        setSelected("portal");
                        setSelectedBox("aiportal");
                        setAddPredictionFile(false);
                      }}
                      className={`rounded-[3px] py-[22px] px-[10px] flex justify-between items-center cursor-pointer w-full border-0 ${
                        selected === "portal" ? "bg-[#0A0A09]" : "bg-[#1B1B1B]"
                      } `}
                    >
                      <div className="flex gap-[10px] items-start">
                        {selected === "portal" && (
                          <img
                            src={badge}
                            alt="Selected Badge"
                            className="object-contain w-7 h-7"
                          />
                        )}
                        <div className="flex flex-col">
                          <h3 className="text-[#F3F2F3] mb-0 xs:text-[2.8125em] text-[5em] font-bold">
                            {bookBoxData?.aiportal_title || "6 Month AI Portal"}
                          </h3>
                          <p className="xs:text-[2.1875em] text-[3.6458333333em] text-[#B8B8B8] font-normal mt-[-4px]">
                            {bookBoxData?.aiportal_subtitle ||
                              "Prediction File + 5 Books"}
                          </p>
                        </div>
                      </div>
                      <div>
                        <button
                          type="button"
                          className={`align-middle inline-flex items-center justify-center text-center primary-btn px-4 py-[2.2222222222vw] font-semibold  text-[4.1666666667em] relative z-10 rounded-[50px] hover-full-rounded-btn w-[21.6666666667vw]
                          ${
                            selected === "portal"
                              ? "bg-gradient-GreenBlue text-black"
                              : "bg-[#3E3E3D] text-[#BFDF6A]"
                          }`}
                        >
                          {bookBoxData?.aiportal_price || "$119"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <form className="sm:pt-[1.5873015873em] pt-[12px]">
                  <div className="flex flex-col sm:mb-[1.0582010582em] mb-3">
                    <input
                      type="text"
                      name="name"
                      id=""
                      placeholder="Full Name"
                      className="rounded-[3px] placeholder:text-[#707070] bg-white sm:py-[0.8888888889em] xs:py-[0.9375em] py-[5vw] px-[1.3333333333em] leading-[1.723] 2xl:text-[1.1904761905em] sm:text-[1.0582010582em] xs:text-[2.34375em] text-[4.2em]"
                    />
                  </div>
                  <div className="flex flex-col sm:mb-[1.0582010582em] mb-3">
                    <input
                      type="email"
                      name="email"
                      id=""
                      placeholder="Email Address"
                      className="rounded-[3px] placeholder:text-[#707070] bg-white sm:py-[0.8888888889em] xs:py-[0.9375em] py-[5vw] px-[1.3333333333em] leading-[1.723] 2xl:text-[1.1904761905em] sm:text-[1.0582010582em] xs:text-[2.34375em] text-[4.2em]"
                    />
                  </div>
                  <div className="flex flex-col sm:mb-[1.0582010582em] mb-3">
                    <input
                      type="tel"
                      name="tel"
                      id=""
                      placeholder="Mobile number e.g: 0444786999"
                      className="rounded-[3px] placeholder:text-[#707070] bg-white sm:py-[0.8888888889em] xs:py-[0.9375em] py-[5vw] px-[1.3333333333em] leading-[1.723] 2xl:text-[1.1904761905em] sm:text-[1.0582010582em] xs:text-[2.34375em] text-[4.2em]"
                    />
                  </div>
                  <div className="flex flex-col sm:mb-[1.0582010582em] mb-3">
                    {/* <input
                      type="tel"
                      name="ccn"
                      id=""
                      placeholder="Card Number  "
                      className="rounded-[3px] placeholder:text-[#707070] bg-white sm:py-[0.8888888889em] xs:py-[0.9375em] py-[5vw] px-[1.3333333333em] leading-[1.723] 2xl:text-[1.1904761905em] sm:text-[1.0582010582em] xs:text-[2.34375em] text-[4.2em]"
                    /> */}
                    <div className="rounded-[3px] flex items-center justify-between bg-white">
                      <input
                        type="tel"
                        name="ccn"
                        id=""
                        placeholder="Card Number "
                        className="placeholder:text-[#707070] outline-none w-[54%] px-[1.3333333333em] sm:py-[0.8888888889em] xs:py-[0.9375em] py-[5vw] leading-[1.723] 2xl:text-[1.1904761905em] sm:text-[1.0582010582em] xs:text-[2.34375em] text-[4.2em]"
                      />
                      <div className="flex gap-0 w-[46%] justify-end">
                        {/* Expiry Date */}
                        <input
                          type="text"
                          name="expiry_date"
                          placeholder="MM / YY"
                          required
                          class="placeholder:text-[#707070] outline-none sm:py-[0.8888888889em] xs:py-[0.9375em] py-[5vw] leading-[1.723] 2xl:text-[1.1904761905em] sm:text-[1.0582010582em] xs:text-[2.34375em] text-[4.2em] max-w-[4.2em]"
                        />

                        {/* CVC */}
                        <input
                          type="text"
                          name="cvc"
                          placeholder="/ CVC"
                          required
                          class="placeholder:text-[#707070] outline-none sm:py-[0.8888888889em] xs:py-[0.9375em] py-[5vw] pe-[1.3333333333em]  leading-[1.723] 2xl:text-[1.1904761905em] sm:text-[1.0582010582em] xs:text-[2.34375em] text-[4.2em] max-w-[4.2em]"
                        />
                      </div>
                    </div>
                  </div>
                  <span className="font-normal text-[#949AA4] md:text-[1.0582010582em] sm:text-sm text-xs sm:py-3  block">
                    Secure Checkout Powered by
                    <a href="#" className="underline ps-1">
                      Stripe
                    </a>
                  </span>

                  <hr className="border-[#3D3D3D] sm:mt-[0.7936507937em] mt-3 sm:mb-[1.9841269841em] mb-4" />
                  <Link
                    // type="submit"
                    to="/ebook-submit"
                    className="align-middle inline-flex items-center justify-center text-center primary-btn bg-gradient-OrangeRed text-white sm:px-[0.6em] sm:py-[0.8em] xs:py-[0.5em] px-3 py-[5.2vw] w-full font-bold sm:text-[1.3227513228em] text-[4.444444em] relative z-10 leading-[1.4] rounded-sm"
                  >
                    {selectedBox === "ebook"
                      ? `Buy Now - ${bookBoxData?.ebook_price || "$0.99"}`
                      : addPredictionFile
                      ? "Buy Now - $119"
                      : `Buy Now - ${bookBoxData?.aiportal_price || "$119"}`}
                  </Link>
                </form>
              </div>
            </div>
          </div>
          {/* 
          <div className="max-w-[550px] mx-auto bg-black rounded-xl px-7 py-7">
            <div className="text-center">
              <ImageWithToggle
                src={checkmark}
                alt="checkmark"
                className="mx-auto sm:w-[60px] w-[50px] mb-2 h-auto zoom-pulse"
              />
              <h2 className="font-bold lg:text-[42px] text-4xl text-center text-[#00C360] py-2">
                Payment Successful
              </h2>
              <h3 className="font-medium sm:text-xl text-base text-white">
                We’ve received your information
              </h3>

              <div className="pt-4 w-full">
                <div className="grid grid-cols-2 py-[3px] w-full justify-between sm:text-base text-sm font-medium">
                  <span className="text-[#B7B7B7] text-start">
                    Receipt Number:
                  </span>
                  <span className="text-[#E4FAE5] text-end">25393-0095</span>
                </div>

                <div className="grid grid-cols-2 py-[3px] w-full justify-between sm:text-base text-sm font-medium">
                  <span className="text-[#B7B7B7] text-start">
                    Invoice Number
                  </span>
                  <span className="text-[#E4FAE5] text-end">
                    2025-K00B1-754
                  </span>
                </div>

                <div className="grid grid-cols-2 py-[3px] w-full justify-between sm:text-base text-sm font-medium">
                  <span className="text-[#B7B7B7] text-start">
                    Payment Method
                  </span>
                  <span className="text-[#E4FAE5] text-end">Visa-4242</span>
                </div>

                <div className="grid grid-cols-2 py-[3px] w-full justify-between sm:text-base text-sm font-medium">
                  <span className="text-[#B7B7B7] text-start">
                    Transaction ID:
                  </span>
                  <span className="text-[#E4FAE5] text-end">137370531</span>
                </div>
              </div>

              <a
                href="#"
                className="text-2xl text-black bg-[#00DD6C] w-full py-[14.5px] px-4 block mt-4 rounded-md font-bold"
              >
                Download Receipt
              </a>

              <div className="bg-[#252525] rounded-[20px] sm:pt-5 sm:px-7 sm:pb-7 p-4 mt-6">
                <div className="inline-flex items-center justify-center">
                  <h3 className="font-bold xl:text-[34px] md:text-[30px] text-2xl inline mx-auto tracking-[1px] relative  text-white border-text text-center">
                    What Happens Next?
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:gap-6 gap-4 mt-7 text-start">
                  <div className="flex items-start sm:gap-7 gap-5  text-white font-medium leading-normal xl:text-xl sm:text-lg text-base">
                    <ImageWithToggle
                      src={EmailIcon}
                      alt="checklist"
                      className="sm:w-[32px] w-[28px] sm:h-[32px] h-[28px] mt-1"
                    />
                    You'll receive an E-mail in the next few mins. Follow the
                    steps to access your E-book and start learning.
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <div className="border-y border-[#707070] relative z-10 sm:mb-[0] mb-[-13.8888888889vw]">
          <div className="custom-container mx-auto md:py-[6.6137566138em] sm:py-[4.6296296296em] py-[40px] px-4 sm:px-[2.1164021164em] w-full z-10 relative">
            <h2 className="font-inter font-normal md:text-[4.0211640212em] sm:text-[6.258148631em] text-[11em] leading-[1.11] 2xl:mt-[0.1315789474em] xs:mt-0 mt-[3.125vw] text-white text-center sm:mb-[0.6578947368em] mb-[7.8125vw] xs:tracking-normal tracking-[2.2px]">
              FAQ
            </h2>
            <div className="md:max-w-[59.2592592593em] mx-auto sm:p-[1.5873015873em]">
              {faqsToDisplay.map((faq, index) => (
                <div
                  key={index}
                  className={`py-[4.6875vw] xs:py-[1.0582010582em] ${
                    index !== faqsToDisplay.length - 1
                      ? "border-b border-[#9D9B9B]"
                      : ""
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full text-left gap-[1.0582010582em]"
                  >
                    <span className="md:text-[1.455026455em] sm:text-[2.6041666667em] xs:text-[2.8125em] text-[4.4444444em] xs:font-bold font-semibold sm:leading-[1.273] leading-[1.55555555] text-white w-[calc(100%-28px)] sm:w-[calc(100%-35px)]">
                      {faq.question}
                    </span>
                    <span className="w-[28px] sm:w-[2.3148148148em] basis-[28px] sm:basis-[2.3148148148em] flex items-center justify-center">
                      {openIndex === index ? <MinusIcon /> : <PlusIcon />}
                    </span>
                  </button>

                  {openIndex === index && faq.answer && (
                    <div className="xs:mt-[0.8888888889em] mt-[4.6875vw] xs:mb-0 mb-[1.5625vw] md:text-[1.1904761905em] sm:text-[2.0833333333em] xs:text-[2.1875em] text-[3.8888888889em] leading-[1.556] font-medium  text-white/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FreeEBook;
