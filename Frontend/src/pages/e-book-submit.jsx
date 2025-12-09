import { useState } from "react";
import BannerBg from "../assets/ebook/e-book-bg.png";
import NewTipsImage from "../assets/ebook/new-tips.png";
import avatar from "../assets/avatar-img.png";
import CheckmarkYellow from "../assets/icons/checkmark-yellow.svg";
import Book1 from "../assets/ebook/book1.png";
import Book2 from "../assets/ebook/book2.png";
import Book3 from "../assets/ebook/book3.png";
import Book4 from "../assets/ebook/book4.png";
import BGgradient from "../assets/ebook/gradient.png";
import Rectangle from "../assets/ebook/rectangle.png";
import Plus from "../assets/icons/plus.svg";

import checkmark from "../assets/icons/green-checkmark.svg";
import EmailIcon from "../assets/icons/green-email-icon.svg";
import ImageWithToggle from "../components/ImageWithToggle";

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
      stroke-opacity="0.5"
      stroke-width="4"
      stroke-linejoin="round"
    />
    <path
      d="M15 23.8718H30"
      stroke="white"
      stroke-opacity="0.5"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M22.5 31.3718V16.3718"
      stroke="white"
      stroke-opacity="0.5"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
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
      stroke-width="4"
      stroke-linejoin="round"
    />
    <path
      d="M15 23.8718H30"
      stroke="white"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const FreeEBooksubmit = () => {
  // const [count, setCount] = useState(0);

  // const increment = () => setCount((prev) => prev + 1);
  // const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  // FAq section
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* black space for header */}
      <div className="bg-black w-full lg:h-[7.9365079365em] h-[120px] lg:mt-[-7.9365079365em] mt-[-120px]"></div>
      <section className="banner-wrapper 2xl:pt-[5.291005291em] sm:pt-[4.6296296296em] pt-[60px] sm:pb-[3.9682539683em] pb-[40px] relative flex flex-column justify-center items-center lg:mt-0 mt-0 min-h-[90vh] border-b border-[#707070]">
        <div className="sm:bg-transparent bg-gradient-FadetoBlack h-full w-full absolute top-0 z-10 lg:hidden block"></div>
        <ImageWithToggle
          src={BannerBg}
          alt="BannerBg"
          className="absolute w-full h-full top-0 left-0 right-0 bottom-0 object-cover"
        />
        <div className="custom-container mx-auto py-0 px-4 sm:px-[2.1164021164em] w-full z-10 relative">
          <div className="flex lg:gap-x-[6.6137566138em] sm:gap-x-[13.671875em] gap-x-[140px] sm:flex-nowrap flex-wrap">
            <div className="sm:w-[20%] w-full flex flex-col justify-between">
              <img
                src={NewTipsImage}
                alt="NewTipsImage"
                className="h-auto xl:max-w-[16.5343915344em]  md:max-w-[13.2275132275em] max-w-[200px] -mt-[20px] sm:mx-0 mx-auto"
              />
              <span className="uppercase md:text-[1.0582010582em] text-base font-semibold text-white/50 sm:block hidden">
                LEARN FROM THE EXPERT + MORE:
              </span>
              <div className="sm:flex items-center gap-3 mt-[2.1164021164em] hidden">
                <ImageWithToggle
                  src={avatar}
                  alt="avatar"
                  className="sm:w-[3.3068783069em] sm:h-[3.3068783069em] w-[50px] h-[50px] rounded-full border-4 border-white/10"
                />
                <div>
                  <span className="text-white sm:text-[1.1904761905em] text-lg font-semibold">
                    Abhishek
                  </span>
                  <h3 className="sm:text-[1.0582010582em] text-base font-light text-white/60 leading-[1.2]">
                    PTE Master Trainer
                  </h3>
                </div>
              </div>
            </div>
            <div className="sm:w-[80%]">
              <div className="flex flex-col justify-between sm:gap-y-[3.3068783069em] gap-y-[50px] h-full">
                <div className="flex lg:flex-nowrap flex-wrap gap-5 justify-between lg:pe-[1.9841269841em]">
                  <div className="lg:max-w-[70%] max-w-full">
                    <h1 className="font-inter font-bold md:text-[4.0211640212em] sm:text-[6.258148631em] text-[36px] leading-[1.1022] 2xl:mt-2 mt-0 text-white">
                      PTE Reading Blanks{" "}
                      <span className="text-[#F1CD5A] block">Free E-book</span>
                    </h1>
                    <p className="font-light md:text-[1.1904761905em] leading-[1.55555555] sm:text-base max-w-[800px] text-sm text-white mt-3">
                      Learn how to solve PTE Reading Blanks with confidence,
                      master linkers, starters, and connectors, test your skills
                      with an interactive quiz, and boost your score
                      effortlessly
                    </p>
                  </div>
                  <div className="lg:max-w-[30%] max-w-full lg:block hidden">
                    <h2 className="text-white xl:text-[1.1904761905em] leading-[1.556] text-base font-bold my-[1.3888888889em]">
                      YOU’LL LEARN HOW TO:
                    </h2>
                    <ul className="">
                      <li className="flex items-center sm:leading-[1.5] leading-[1.4] sm:text-[1.0582010582em] text-sm text-white sm:gap-[1.75em] gap-4 py-[0.5em]">
                        <img
                          src={CheckmarkYellow}
                          alt="CheckmarkYellow"
                          className="w-4"
                        />
                        Attempt R&W blanks
                      </li>
                      <li className="flex items-center sm:leading-[1.5] leading-[1.4] sm:text-[1.0582010582em] text-sm text-white sm:gap-[1.75em] gap-4 py-[0.5em]">
                        <img
                          src={CheckmarkYellow}
                          alt="CheckmarkYellow"
                          className="w-4"
                        />
                        Difference b/w linkers, <br /> starters and connectors
                      </li>
                      <li className="flex items-center sm:leading-[1.5] leading-[1.4] sm:text-[1.0582010582em] text-sm text-white sm:gap-[1.75em] gap-4 py-[0.5em]">
                        <img
                          src={CheckmarkYellow}
                          alt="CheckmarkYellow"
                          className="w-4"
                        />
                        Quiz to test your learning
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="lg:max-w-[70%] max-w-full flex lg:flex-nowrap flex-wrap items-center sm:justify-start justify-center lg:gap-[2.6455026455em] sm:gap-7 gap-4 sm:order-0 -order-1 ">
                  <div className="relative rounded-lg sm:w-auto w-full ">
                    <a
                      href="#"
                      className="align-middle inline-flex items-center justify-center text-center primary-btn primary-btn-rounded bg-gradient-primary text-black sm:px-3 px-[0.6em] sm:py-[0.6em] py-[14px] font-normal sm:text-[1.3227513228em] text-lg leading-[1.4] relative z-10 sm:min-w-[12.1em] sm:w-auto w-full rounded-lg "
                    >
                      Start 7-Day Trial
                    </a>
                  </div>
                  <div>
                    <h4 className="text-[#F1CD5A] sm:text-[1.1904761905em] text-base leading-[1.55555555] font-semibold sm:text-start text-center">
                      Save $33 by using AI Portal{" "}
                      <span className="sm:inline hidden">
                        + Prediction File + 6 Books
                      </span>
                    </h4>
                    <span className="uppercase font-semibold text-white/50 text-[0.8597883598em] mt-[0.3846153846em] leading-[1.462] sm:inline hidden">
                      See below
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div className="flex sm:flex-nowrap flex-wrap sm:mt-0 mt-[1.6534391534em] items-end sm:gap-0 gap-[20px]">
                    <div className="sm:w-[25%] w-full">
                      <span className="text-white sm:text-[1.1904761905em] sm:text-base text-sm font-semibold">
                        Other Books
                      </span>
                      <h3 className="sm:text-[1.0582010582em] text-sm font-light text-white/60 leading-[1.2]">
                        PTE Study Material
                      </h3>
                    </div>
                    <div className="sm:w-[75%] w-full sm:grid grid-cols-4 flex justify-between gap-[1.3227513228em]">
                      <ImageWithToggle
                        src={Book1}
                        alt="Book1"
                        className="w-auto sm:h-[4.0343915344em] h-[61px] sm:max-w-[3.3068783069em] max-w-[50px]"
                      />
                      <ImageWithToggle
                        src={Book2}
                        alt="Book2"
                        className="w-auto sm:h-[4.0343915344em] h-[61px] sm:max-w-[3.3068783069em] max-w-[50px]"
                      />
                      <ImageWithToggle
                        src={Book3}
                        alt="Book3"
                        className="w-auto sm:h-[4.0343915344em] h-[61px] sm:max-w-[3.3068783069em] max-w-[50px]"
                      />
                      <ImageWithToggle
                        src={Book4}
                        alt="Book4"
                        className="w-auto sm:h-[4.0343915344em] h-[61px] sm:max-w-[3.3068783069em] max-w-[50px]"
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
        <div className="custom-container mx-auto sm:py-[64px] py-[40px] px-4 sm:px-[32px] w-full z-10 relative ">
          <div className="sm:max-w-[36.3020833333vw] max-w-full mx-auto bg-black xs:rounded-[0.625vw] rounded-[4px] md:px-[1.8518518519em] sm:px-[4.375em] xs:px-[5.8333333333em] md:py-[1.8518518519em] sm:py-[4.375em] xs:py-[5.8333333333em] p-[20px]">
            <div className="text-center">
              <img
                src={checkmark}
                alt="checkmark"
                className="mx-auto sm:w-[3.505em] w-[50px] mb-2 h-auto zoom-pulse"
              />
              <h2 className="font-bold md:text-[2.5132275132vw] sm:text-[5em] xs:text-[6.6666666667em] text-[7.2916666667em] text-center text-[#00C360] pt-[0.5291005291vw] mb-0">
                Payment Successful
              </h2>
              <h3 className="font-medium md:text-[1.1904761905em] sm:text-[2.8125em] xs:text-[3.75em] text-[4.2em] text-white">
                We’ve received your information
              </h3>

              <div className="md:pt-[1.0582010582em] sm:pt-[2.5em] xs:pt-[3.3333333333em] pt-[5.7291666667vw] w-full">
                <div className="grid grid-cols-2 py-[0.2645502646vw] w-full justify-between md:text-[1.1458333333vw] sm:text-[2.5em] xs:text-[3.3333333333em] text-[3.8888888889em] font-medium">
                  <span className="text-[#B7B7B7] text-start">
                    Receipt Number:
                  </span>
                  <span className="text-[#E4FAE5] text-end">25393-0095</span>
                </div>

                <div className="grid grid-cols-2 py-[0.2645502646vw] w-full justify-between md:text-[1.1458333333vw] sm:text-[2.5em] xs:text-[3.3333333333em] text-[3.8888888889em] font-medium">
                  <span className="text-[#B7B7B7] text-start">
                    Invoice Number
                  </span>
                  <span className="text-[#E4FAE5] text-end">
                    2025-K00B1-754
                  </span>
                </div>

                <div className="grid grid-cols-2 py-[0.2645502646vw] w-full justify-between md:text-[1.1458333333vw] sm:text-[2.5em] xs:text-[3.3333333333em] text-[3.8888888889em] font-medium">
                  <span className="text-[#B7B7B7] text-start">
                    Payment Method
                  </span>
                  <span className="text-[#E4FAE5] text-end">Visa-4242</span>
                </div>

                <div className="grid grid-cols-2 py-[0.2645502646vw] w-full justify-between md:text-[1.1458333333vw] sm:text-[2.5em] xs:text-[3.3333333333em] text-[3.8888888889em] font-medium">
                  <span className="text-[#B7B7B7] text-start">
                    Transaction ID:
                  </span>
                  <span className="text-[#E4FAE5] text-end">137370531</span>
                </div>
              </div>

              <a
                href="#"
                className="md:text-[1.455026455vw] sm:text-[2.8125em] xs:text-[3.75em] text-[4.4444444444em] text-black bg-[#00DD6C] w-full xs:py-[0.7222222222em] py-[5vw] px-4 block md:mt-[1.0582010582em] sm:mt-[2.5em] xs:mt-[3.3333333333em] mt-[7.2916666667vw] xs:rounded-md rounded-[3px] font-bold"
              >
                Download Receipt
              </a>

              <div className="bg-[#252525] xs:rounded-[0.3125vw] rounded-[3px] xs:pt-[0.7936507937vw] xs:px-[0.2777777778vw] xs:pb-[1.455026455vw] p-[2.2222222222vw] pl-[1px] mt-6">
                <div className="inline-flex items-center justify-center">
                  <h3 className="font-bold md:text-[2.1164021164em] sm:text-[5em] xs:text-[6.6666666667em] text-[6.5em] inline mx-auto tracking-[1px] relative  text-white border-text text-center">
                    What Happens Next?
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:gap-6 gap-4 md:mt-[1.3227513228em] sm:mt-[3.125em] xs:mt-[4.1666666667em] mt-[20px] text-start max-w-[93%] mx-auto">
                  <div className="flex items-start sm:gap-[1.25vw] gap-[2.2222222222vw] text-white xs:font-medium font-normal md:text-[1.1904761905em] sm:text-[2.8125em] xs:text-[3.3333333333em] text-[4em] xs:leading-[1.33] leading-[1.375]">
                    <img
                      src={EmailIcon}
                      alt="checklist"
                      className="md:w-[2.0833333333vw] sm:w-[5em] xs:w-[6.6666666667em] w-[7.7777777778em] md:h-[2.0833333333vw] sm:h-[5em] xs:h-[6.6666666667em] h-[28px] mt-1"
                    />
                    You'll receive an E-mail in the next few mins. Follow the
                    steps to access your E-book and start learning.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-y border-[#707070] relative z-10">
          <div className="custom-container mx-auto md:py-[100px] sm:py-[70px] py-[40px] px-4 sm:px-[32px] w-full z-10 relative">
            <h2 className="font-inter font-normal main-heading 2xl:mt-2 mt-0 text-white text-center sm:mb-10 mb-5">
              FAQ
            </h2>
            <div className="max-w-4xl mx-auto sm:p-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`py-4 ${
                    index !== faqs.length - 1 ? "border-b border-[#9D9B9B]" : ""
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full text-left gap-4"
                  >
                    <span className="md:text-[22px] sm:text-xl text-lg font-bold leading-[28px] text-white w-[calc(100%-28px)] sm:w-[calc(100%-35px)]">
                      {faq.question}
                    </span>
                    <span className="w-[28px] sm:w-[35px] basis-[28px] sm:basis-[35px] flex items-center justify-center">
                      {openIndex === index ? <MinusIcon /> : <PlusIcon />}
                    </span>
                  </button>

                  {openIndex === index && faq.answer && (
                    <div className="sm:mt-4 mt-2 md:text-lg sm:text-lg font-medium text-base text-white/50 max-w-[93%]">
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

export default FreeEBooksubmit;
