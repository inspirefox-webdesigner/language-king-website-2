import { useState } from "react";

import faqImage1 from "../assets/faq-img1.png";
import faqImage2 from "../assets/faq-img2.png";
import faqImage3 from "../assets/faq-img3.png";
import { Link } from "react-router-dom";

const faqs = [
  {
    category: "Refund",
    question: "Do you offer refunds?",
    answer:
      "When making a purchase, be sure to choose carefully as refunds for incorrectly choosing a product aren’t simply refunded. Be sure to make use of the images of the product to be sure you have correctly selected your item before proceeding to check out.",
  },
  {
    category: "Support",
    question: "Is the E-Book really free?",
    answer:
      "Yes, the E-Book is completely free to download and access. No hidden charges or subscription fees are required.",
  },
  {
    category: "Classes",
    question: "How long do I have access to the E-Book?",
    answer:
      "You will have lifetime access to the E-Book once you download it. You can revisit and use it anytime.",
  },
  {
    category: "Support",
    question: "What if I don’t receive the E-book on email?",
    answer:
      "If you don’t receive the E-Book, please check your spam or junk folder first. If it’s not there, contact our support team for assistance.",
  },
  {
    category: "Cancellation",
    question:
      "How do I cancel or delete my account after downloading the eBook?",
    answer:
      "To cancel or delete your account, go to your account settings and follow the cancellation steps. If you face any issues, reach out to support.",
  },
  {
    category: "Classes",
    question: "What happens after my free 1-week access ends?",
    answer:
      "After your free 1-week access, you will be prompted to upgrade to a paid plan to continue accessing premium features.",
  },
  {
    category: "Support",
    question: "Is my information secure?",
    answer:
      "Yes, we use advanced encryption and strict privacy measures to ensure your personal data is secure.",
  },
];

const tabs = ["All", "Classes", "Cancellation", "Refund", "Support"];

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

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("All");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs =
    activeTab === "All"
      ? faqs
      : faqs.filter((faq) => faq.category === activeTab);

  return (
    <section className="md:pt-[14.5502645503em] sm:pt-[28.125em] xs:pt-[37.5em] pt-[55vw] sm:pb-[3.4371693122vw] lg:mt-[-7.9365079365em] md:mt-[-12.936508em] sm:mt-[-15.6453715776em] mt-[-33.33vw]">
      <div className="custom-container mx-auto py-0 px-4 sm:px-[2.1164021164em] w-full relative z-10">
        <div className="lg:max-w-[53.3333333333em] max-w-[100em] mx-auto">
          <h1 className="md:text-[5.3645833333em] sm:text-[12.5em] xs:text-[14.5833333333em] text-[17.7777777778em] text-white tracking-[4.4px] leading-[1.203125] text-center font-normal">
            FAQ
          </h1>
          <p className="md:text-[1.5625em] sm:text-[2.8125em] xs:text-[3.75em] text-[5em] text-white text-center font-normal leading-[1.2]">
            Got questions? We’re here to help.
          </p>

          {/* Tabs  */}
          <div className="flex flex-wrap sm:justify-between justify-center 2xl:gap-[1.3020833333em] sm:gap-[0.2em] xs:gap-[5.2083333333em] gap-[3.0555555556em] md:mt-[3.90625em] sm:mt-[7.8125em] xs:mt-[10.4166666667em] mt-[9.7222222222em] md:mb-[3.59375vw] sm:mb-[10.9375em] xs:mb-[12.5em] mb-[7.534722222em]">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                                ${
                                  index === 0
                                    ? "md:px-[2.2486772487vw] sm:px-[3.125em] xs:px-[4.1666666667em] px-[7.7777777778vw]"
                                    : "md:px-[1.3020833333em] sm:px-[3.125em] xs:px-[4.1666666667em] px-[5.5555555556vw]"
                                }
                                md:py-[0.274vw] xs:py-[0.8333333333em] py-0 xs:min-h-[3.28125vw] xs:h-auto h-[10.8333333333vw] xs:border-[0.1652777778vw] border-[0.4375vw] md:rounded-[0.78125em] rounded-[6px]   
                                ${
                                  activeTab === tab
                                    ? "bg-white border-white text-black"
                                    : "border-white text-white"
                                }
                                ${
                                  index === 2 ? "order-last md:order-none" : ""
                                }  // Move 2nd tab to last on mobile
                                `}
              >
                <span className="md:text-[1.8849206349vw] sm:text-[3.125em] xs:text-[4.1666666667em] leading-[1.2142] text-[5.5555555556em]">
                  {tab}
                </span>
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div>
            {filteredFaqs.map((faq, index) => (
              <div
                key={index}
                className={`py-[4.6875vw] xs:py-[4.1720990874em] md:py-[1.6666666667em] ${
                  index !== filteredFaqs.length - 1
                    ? "border-b border-[#9D9B9B]"
                    : ""
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full text-left gap-[1.0582010582em]"
                >
                  <span className="md:text-[1.455026455em] sm:text-[2.6041666667em] xs:text-[2.8125em] text-[4.7222222222em] xs:font-semibold font-medium sm:leading-[1.273] leading-[1.55555555] text-white w-[calc(100%-28px)] sm:w-[calc(100%-35px)]">
                    {faq.question}
                  </span>
                  <span className="w-[28px] sm:w-[2.3148148148em] basis-[28px] sm:basis-[2.3148148148em] flex items-center justify-center">
                    {openIndex === index ? <MinusIcon /> : <PlusIcon />}
                  </span>
                </button>

                {openIndex === index && faq.answer && (
                  <div className="max-w-[45.7291666667em] xs:mt-[0.8888888889em] mt-[4.6875vw] xs:mb-0 mb-[1.5625vw] md:text-[1.0460251046em] sm:text-[2.0833333333em] xs:text-[2.1875em] text-[3.8888888889em] leading-[1.556] font-medium  text-[#B8B8B8]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="md:mt-[5.2604166667em] sm:mt-[6.875em] xs:mt-[9.1666666667em] mt-[12.2222222222em] md:pt-[2.7vw] sm:pt-[6.875em] xs:pt-[9.1666666667em] pt-[12.2222222222em]">
            <div className="flex items-start justify-center">
              <img
                src={faqImage2}
                alt="faq img"
                className="border-[#E7E7E7] sm:border-[0.2083333333vw] xs:border-[0.625em] border-[0.5555555556em] rounded-full sm:max-w-[4.8802248677vw] xs:max-w-[10.9375em] max-w-[19.4444444444em] h-auto"
              />
              <img
                src={faqImage1}
                alt="faq img"
                className="border-[#E7E7E7] sm:border-[0.2083333333vw] xs:border-[0.625em] border-[0.5555555556em] rounded-full sm:max-w-[5.6771164021vw] xs:max-w-[12.8125em] max-w-[22.7777777778em] h-auto sm:mt-[-3.5714285714em] xs:mt-[-7.8125em] mt-[-13.8888888889em] sm:mx-[-1.9841269841em] xs:mx-[-3.125em] mx-[-8.3333333333em] z-1"
              />
              <img
                src={faqImage3}
                alt="faq img"
                className="border-[#E7E7E7] sm:border-[0.2083333333vw] xs:border-[0.625em] border-[0.5555555556em] rounded-full sm:max-w-[4.8802248677vw] xs:max-w-[10.9375em] max-w-[19.4444444444em] h-auto"
              />
            </div>
            <div className="xs:mt-[1.875vw] mt-[5.46875vw] text-center">
              <h3 className="text-white text-center font-semibold mb-[0.3645502646vw] leading-[1.14286] md:text-[1.4583333333em] sm:text-[3.125em] xs:text-[4.1666666667em] text-[5.5555555556em]">
                Still have questions?
              </h3>
              <p className="text-[#B7B7B7] md:text-[1.25em] sm:text-[2.5em] xs:text-[3.3333333333em] leading-[1.2] text-[4.4444444444em] text-center xs:mb-[1.875vw] mb-[5.925vw]">
                Please talk to our friendly team
              </p>
              <Link
                to="/"
                className="primary-btn inline-flex bg-[#E4FAE5] hover:bg-white duration-300 ease-in-out transition-all rounded-[2.5px] md:py-[0.9114583333em] md:px-[3.0208333333em] sm:px-[9.778357236em] xs:px-[15.625em] px-[20.8333333333em] sm:py-[1.5645371578em] xs:py-[1.875em] p-[4.5vw] relative z-10 text-center mx-auto group"
              >
                <span className="font-semibold md:text-[1.6666666667em] sm:text-[2.8683181226em] xs:text-[4.5833333333em] text-[5.8333333333em] md:leading-[1.4] text-black group-hover:text-[#222]">
                  Get-a Callback
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
