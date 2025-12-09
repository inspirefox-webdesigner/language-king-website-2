import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
import badge from "../assets/ebook/badge.svg";
import Plus from "../assets/icons/plus.svg";
import { Link } from "react-router-dom";
import ImageWithToggle from "../components/ImageWithToggle";
import API_BASE_URL from "../config/api";

const getImageUrl = (imageName, fallback) => {
  if (imageName) {
    return `${API_BASE_URL.replace("/api", "")}/uploads/${imageName}`;
  }
  return fallback;
};

const PlusIcon = () => (
  <svg width="100%" height="auto" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2.87183" width="41" height="41" rx="10" stroke="white" strokeOpacity="0.5" strokeWidth="4" strokeLinejoin="round"/>
    <path d="M15 23.8718H30" stroke="white" strokeOpacity="0.5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22.5 31.3718V16.3718" stroke="white" strokeOpacity="0.5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MinusIcon = () => (
  <svg width="100%" height="auto" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2.87183" width="41" height="41" rx="10" stroke="white" strokeWidth="4" strokeLinejoin="round"/>
    <path d="M15 23.8718H30" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DynamicEbookPage = () => {
  const { slug } = useParams();
  const [pageData, setPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openIndex, setOpenIndex] = useState(0);
  const [selected, setSelected] = useState("ebook");
  const [selectedBox, setSelectedBox] = useState("ebook");
  const [addPredictionFile, setAddPredictionFile] = useState(false);

  useEffect(() => {
    fetchPageData();
  }, [slug]);

  const fetchPageData = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/dynamic-ebook/slug/${slug}`);
      if (!response.ok) throw new Error('Page not found');
      const data = await response.json();
      
      if (data.learning_points && typeof data.learning_points === 'string') {
        data.learning_points = JSON.parse(data.learning_points);
      }
      if (data.faqs && typeof data.faqs === 'string') {
        data.faqs = JSON.parse(data.faqs);
      }
      
      setPageData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (error || !pageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Page not found</div>
      </div>
    );
  }

  const learningPoints = pageData.learning_points || [];
  const faqs = pageData.faqs || [];

  return (
    <>
      <div className="bg-black w-full lg:h-[7.9365079365em] h-[120px] lg:mt-[-7.9365079365em] mt-[-120px]"></div>
      <section className="banner-wrapper 2xl:pt-[5.291005291em] sm:pt-[4.6296296296em] pt-[24vw] sm:pb-[3.9682539683em] pb-[40px] relative flex flex-column justify-center items-center lg:mt-0 mt-0 min-h-[90vh] border-b border-[#707070]">
        <div className="sm:bg-transparent bg-gradient-FadetoBlack h-full w-full absolute top-0 z-10 lg:hidden block"></div>
        <ImageWithToggle
          src={getImageUrl(pageData.banner_bg_image, BannerBg)}
          alt="BannerBg"
          className="absolute w-full h-full top-0 left-0 right-0 bottom-0 object-cover"
        />
        <div className="custom-container mx-auto py-0 px-4 sm:px-[2.1164021164em] w-full z-10 relative">
          <div className="flex lg:gap-x-[6.6137566138em] sm:gap-x-[13.671875em] gap-x-[140px] sm:flex-nowrap flex-wrap">
            <div className="sm:w-[20%] w-full flex flex-col justify-between">
              <img
                src={getImageUrl(pageData.new_tips_image, NewTipsImage)}
                alt="NewTipsImage"
                className="h-auto xl:max-w-[16.5343915344em] md:max-w-[13.2275132275em] max-w-[200px] -mt-[20px] sm:mx-0 mx-auto"
              />
              <span className="uppercase md:text-[1.0582010582em] xs:text-[2.5em] text-[4.4444444444em] font-semibold text-white/50 sm:block hidden">
                {pageData.expert_text || "LEARN FROM THE EXPERT + MORE:"}
              </span>
              <div className="sm:flex items-center gap-3 mt-[2.1164021164em] hidden">
                <ImageWithToggle
                  src={getImageUrl(pageData.expert_avatar, avatar)}
                  alt="avatar"
                  className="sm:w-[3.3068783069em] sm:h-[3.3068783069em] w-[50px] h-[50px] rounded-full border-4 border-white/10"
                />
                <div>
                  <span className="text-white sm:text-[1.1904761905em] text-lg font-semibold">
                    {pageData.expert_name || "Abhishek"}
                  </span>
                  <h3 className="sm:text-[1.0582010582em] text-base font-light text-white/60 leading-[1.2]">
                    {pageData.expert_title || "PTE Master Trainer"}
                  </h3>
                </div>
              </div>
            </div>
            <div className="sm:w-[80%]">
              <div className="flex flex-col justify-between sm:gap-y-[3.3068783069em] gap-y-[7vw] h-full">
                <div className="flex lg:flex-nowrap flex-wrap gap-5 justify-between lg:pe-[1.9841269841em]">
                  <div className="lg:max-w-[70%] max-w-full">
                    <h1 className="font-inter font-bold md:text-[4.0211640212em] xs:text-[6.258148631em] text-[9em] sm:leading-[1.1022] leading-[1.25] 2xl:mt-2 mt-0 text-white xs:pt-0 pt-[7.8125vw]">
                      <span dangerouslySetInnerHTML={{ __html: pageData.main_heading || 'Free E-book' }} />
                    </h1>
                    <p className="font-light md:text-[1.1904761905em] leading-[1.55555555] xs:text-[2.5em] max-w-[800px] text-[4.0364583333em] text-white xs:mt-3 mt-[6.25vw]">
                      {pageData.main_description}
                    </p>
                  </div>
                  <div className="lg:max-w-[15.3604497354vw] max-w-full lg:block hidden">
                    <h2 className="text-white xl:text-[1.1904761905em] leading-[1.556] text-base font-bold my-[1.3888888889em]">
                      YOU'LL LEARN HOW TO:
                    </h2>
                    <ul>
                      {learningPoints.map((point, idx) => (
                        <li key={idx} className="flex items-center sm:leading-[1.5] leading-[1.4] sm:text-[1.0582010582em] text-sm text-white sm:gap-[1.75em] gap-4 py-[0.5em]">
                          <img src={CheckmarkYellow} alt="CheckmarkYellow" className="w-4" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="lg:max-w-[70%] max-w-full flex lg:flex-nowrap flex-wrap items-center sm:justify-start justify-center lg:gap-[2.6455026455em] sm:gap-7 gap-4 sm:order-0 -order-1">
                  <div className="relative rounded-lg sm:w-auto w-full">
                    <a href="#" className="align-middle xs:inline-flex hidden items-center justify-center text-center primary-btn primary-btn-rounded bg-gradient-primary text-black sm:px-3 px-[0.6em] xs:py-[0.6em] py-[5vw] font-normal sm:text-[1.3227513228em] xs:text-[2.5em] text-[4.444444444444em] xs:mt-0 mt-[3vw] leading-[1.4] relative z-10 sm:min-w-[12.1em] sm:w-auto w-full rounded-lg">
                      {pageData.cta_button_text || "Start 7-Day Trial"}
                    </a>
                    <a href="#" className="xs:hidden align-middle inline-flex items-center justify-center text-center primary-btn primary-btn-rounded bg-gradient-primary text-black sm:px-3 px-[0.6em] xs:py-[0.6em] py-[5vw] font-normal sm:text-[1.3227513228em] xs:text-[2.5em] text-[4.444444444444em] xs:mt-0 mt-[3vw] leading-[1.4] relative z-10 sm:min-w-[12.1em] sm:w-auto w-full rounded-lg">
                      {pageData.cta_button_text_mobile || pageData.cta_button_text || "Start 7-Day Trial"}
                    </a>
                  </div>
                  <div>
                    <h4 className="xs:block hidden text-[#F1CD5A] sm:text-[1.1904761905em] text-[4.16666666667em] leading-[1.55555555] font-semibold sm:text-start text-center">
                      {pageData.save_text}
                    </h4>
                    <h4 className="xs:hidden block text-[#F1CD5A] sm:text-[1.1904761905em] text-[4.16666666667em] leading-[1.55555555] font-semibold sm:text-start text-center">
                      {pageData.save_text_mobile || pageData.save_text}
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
                        {pageData.other_books_heading || "Other Books"}
                      </span>
                      <h3 className="sm:text-[1.0582010582em] xs:text-[2.5em] text-[4.1666666667em] font-light text-white/60 leading-[1.2]">
                        {pageData.other_books_subheading || "PTE Study Material"}
                      </h3>
                    </div>
                    <div className="sm:w-[75%] w-full sm:grid grid-cols-4 flex justify-between gap-[1.3227513228em]">
                      <ImageWithToggle src={getImageUrl(pageData.book_1_image, Book1)} alt="Book1" className="w-auto sm:h-[4.0343915344em] h-[16.9444444444vw] sm:max-w-[3.3068783069em] max-w-[11.6666666667vw]"/>
                      <ImageWithToggle src={getImageUrl(pageData.book_2_image, Book2)} alt="Book2" className="w-auto sm:h-[4.0343915344em] h-[16.9444444444vw] sm:max-w-[3.3068783069em] max-w-[11.6666666667vw]"/>
                      <ImageWithToggle src={getImageUrl(pageData.book_3_image, Book3)} alt="Book3" className="w-auto sm:h-[4.0343915344em] h-[16.9444444444vw] sm:max-w-[3.3068783069em] max-w-[11.6666666667vw]"/>
                      <ImageWithToggle src={getImageUrl(pageData.book_4_image, Book4)} alt="Book4" className="w-auto sm:h-[4.0343915344em] h-[16.9444444444vw] sm:max-w-[3.3068783069em] max-w-[11.6666666667vw]"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-banner-gradient absolute w-full h-full top-0 left-0 right-0 bottom-0"></div>
      </section>
    </>
    );
  };
  
  export default DynamicEbookPage;