import CheckmarkGray from "../assets/icons/checkmark-gray.svg";
import PinkQuote from "../assets/icons/pink-quote.svg";
import ContactImage1 from "../assets/contact/contact1.png";
import ContactImage2 from "../assets/contact/contact2.png";
import ContactImage3 from "../assets/contact/contact3.png";
import ContactImage4 from "../assets/contact/contact4.png";
import ContactMobileImage from "../assets/contact/contactMobile.png";
import facebookIcon from "../assets/icons/facebook-dark.svg";
import InstaIcon from "../assets/icons/instagram-dark.svg";
import TiktokIcon from "../assets/icons/tiktok-dark.svg";
import facebookIconLight from "../assets/icons/facebook-icon-light.svg";
import InstaIconLight from "../assets/icons/instagram-icon-light.svg";
import TiktokIconLight from "../assets/icons/tiktok-icon-light.svg";
import GetInTouch from "../components/Get-in-touch";
import ImageWithToggle from "../components/ImageWithToggle";

const faqs = [
  {
    question: "1. Do you offer refunds?",
    answer: `We don’t offer any refund in any given circumstances. Nevertheless, a refund is possible, in case, you are charged extra due to a technical problem. The refund request should be initiated within 24 hours by sending an email with all the details on <strong className="text-white"><a href="mailto:info@languageking.com.au">info@languageking.com.au</a></strong>`,
  },
  {
    question:
      "2. What happens if I am unable to attend a class after enrolling?",
    answer:
      "In the case that you’re unable to attend a class, we may be able to provide access to recorded sessions (if available), but there are no refunds or transfers.",
  },
  {
    question: "3. What if I miss a class?",
    answer:
      "If you miss a class, please contact us right away. We will provide you with information on how to catch up, such as access to recorded sessions or additional study materials, depending on the course structure.",
  },
  {
    question:
      "4. Can I get a partial refund if I have attended only part of the course?",
    answer:
      "No, partial refunds are not available. All payments are final, and we recommend considering your schedule and readiness before enrolling in a course.",
  },
  {
    question:
      "5. Can I transfer my course to someone else if I am unable to attend?",
    answer:
      "Course transfers to other individuals are not permitted. Once you have enrolled, the course is non-transferable.",
  },
  {
    question: "6. What if I’m unhappy with the course content or coaching?",
    answer:
      "We strive to provide high-quality content and personalized coaching. If you have concerns or are dissatisfied, we encourage you to reach out to us. While we don’t offer refunds, we do welcome feedback and may be able to offer alternative solutions such as additional support or resources.",
  },
  {
    question: "7. Can I switch to a different course after enrolment?",
    answer:
      "Course switches are not permitted once you’ve enrolled in a particular course. However, you may reach out to us if you need guidance on which course is the best fit before enrolling.",
  },
  {
    question: "8. What if the institute cancels a course or session?",
    answer:
      "In the unlikely event that we need to cancel a class or course, we will notify you as soon as possible and offer alternatives such as rescheduling or access to other classes. In such cases, we will work to ensure you can complete your learning experience with us.",
  },
  {
    question: "9. Can I pause or defer my course?",
    answer:
      "We do not offer the option to pause or defer a course. Courses have a fixed duration that starts from the date of enrollment and follows the course timeline, regardless of attendance. If you miss a class, we encourage you to catch up with the provided recordings or support from our instructors.",
  },
  {
    question:
      "10. What should I do if I have questions about the course or need help?",
    answer:
      "You can contact our support team at [email/phone number] with any questions or concerns about your course.",
  },
  {
    question: "11. Can I extend my course?",
    answer:
      "Yes, you can extend your course for an additional fee. Please contact us at [email/phone number] for details. Extensions must be requested before the course expires; otherwise, there will be a fresh enrolment.",
  },
];

const Contact = () => {
  return (
    <>
      <section className="md:pt-[4.6296296296em] pt-[100px] sm:mt-[-7.9365079365em] mt-[-80px]">
        <div className="custom-container mx-auto px-4 sm:px-[2.1164021164em] w-full relative z-10">
          <div className="md:pt-[6.6137566138em] sm:pt-[4.6296296296em] pt-[16.6666666666667vw] sm:pb-[3.5714285714em] ">
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

      <section className="sm:pt-[4.630em] md:pb-[6.614em] sm:pb-[5.291em]">
        <div className="custom-container mx-auto px-0 sm:px-[2.1164021164em] w-full relative z-10">
          <div className="flex md:flex-nowrap justify-between flex-wrap gap-[8.856em]">
            <div className="md:w-[50%] w-full md:flex hidden ps-8 flex-col gap-[9.921em] sm:pt-[1.720em]">
              <div className="lg:max-w-[44.312em] max-w-[37.037em]">
                <ImageWithToggle
                  src={ContactImage1}
                  alt="ContactImage1"
                  className="shadow-[0_0_25px_11px_rgba(255,255,255,0.55)] -rotate-[4deg] w-full"
                />
              </div>
              <div className="lg:max-w-[44.312em] max-w-[37.037em]">
                <ImageWithToggle
                  src={ContactImage2}
                  alt="ContactImage1"
                  className="shadow-[0_0_25px_11px_rgba(255,255,255,0.55)] -rotate-[-7deg] w-full"
                />
              </div>
              <div className="lg:max-w-[44.312em] max-w-[37.037em]">
                <ImageWithToggle
                  src={ContactImage3}
                  alt="ContactImage1"
                  className="shadow-[0_0_25px_11px_rgba(255,255,255,0.55)] -rotate-[3deg] w-full"
                />
              </div>
              <div className="lg:max-w-[44.312em] max-w-[37.037em]">
                <ImageWithToggle
                  src={ContactImage4}
                  alt="ContactImage1"
                  className="shadow-[0_0_25px_11px_rgba(255,255,255,0.55)] -rotate-[4.5deg] w-full"
                />
              </div>
            </div>
            <div className="lg:w-[35.219em] md:w-[50%] w-full md:block hidden">
              <h3 className="uppercase text-white md:text-[1.653em] sm:text-[1.323em] text-[1.190em] font-bold pb-1 border-b-2 border-white">
                FREQUENTLY ASKED QUESTIONS
              </h3>

              <div className="mt-[1.587em]">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="mb-[16px]">
                    <h3 className="text-white font-bold text-[1.1904761905em] leading-[1.55555]">
                      {faq.question}
                    </h3>
                    <p
                      className="pt-1 text-[#cacaca] md:text-[1.0582010582em] text-base font-normal leading-[1.5]"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col items-start gap-[1.455em] mt-[7.937em]">
                <div className="bg-[#1A1A1A] py-[0.926em] ps-[0.926em] pe-[2.315em] rounded-[6.614em] flex items-center gap-[1.058em] group transition-all duration-300 ease hover:bg-white">
                  <img
                    src={facebookIcon}
                    alt="facebookIcon"
                    className="w-[3.704em] h-[3.704em] group-hover:hidden transition-all duration-300 ease"
                  />
                  <img
                    src={facebookIconLight}
                    alt="facebookIcon"
                    className="w-[3.704em] h-[3.704em] hidden group-hover:flex transition-all duration-300 ease"
                  />
                  <div>
                    <h4 className="font-aileron sm:text-[1.190em] text-base  text-white transition-all duration-300 ease group-hover:text-black font-bold leading-[1.1]">
                      Join the Facebook Community
                    </h4>
                    <span className="text-sm text-white/50 font-semibold transition-all duration-300 ease group-hover:text-black/50 break-all block leading-[0.926em] mt-1">
                      facebook.com/languageking
                    </span>
                  </div>
                </div>
                <div className="bg-[#1A1A1A] py-[0.926em] ps-[0.926em] pe-[2.976em] rounded-[6.614em] flex items-center gap-[1.058em] group transition-all duration-300 ease hover:bg-white">
                  <img
                    src={InstaIcon}
                    alt="InstaIcon"
                    className="w-[3.704em] h-[3.704em] group-hover:hidden transition-all duration-300 ease"
                  />
                  <img
                    src={InstaIconLight}
                    alt="facebookIcon"
                    className="w-[3.704em] h-[3.704em] hidden group-hover:flex transition-all duration-300 ease"
                  />
                  <div>
                    <h4 className="font-aileron sm:text-[1.190em] text-base  text-white transition-all duration-300 ease group-hover:text-black font-bold leading-[1.1]">
                      Follow us on Instagram
                    </h4>
                    <span className="text-sm text-white/50 font-semibold transition-all duration-300 ease group-hover:text-black/50 break-all block leading-[0.926em] mt-1">
                      instagram.com/languageking
                    </span>
                  </div>
                </div>
                <div className="bg-[#1A1A1A] py-[0.926em] ps-[0.926em] pe-[35px] rounded-[6.614em] flex items-center gap-[1.058em] group transition-all duration-300 ease hover:bg-white">
                  <img
                    src={TiktokIcon}
                    alt="TiktokIcon"
                    className="w-[3.704em] h-[3.704em] group-hover:hidden transition-all duration-300 ease"
                  />
                  <img
                    src={TiktokIconLight}
                    alt="facebookIcon"
                    className="w-[3.704em] h-[3.704em] hidden group-hover:flex transition-all duration-300 ease"
                  />
                  <div>
                    <h4 className="font-aileron sm:text-[1.190em] text-base  text-white transition-all duration-300 ease group-hover:text-black font-bold leading-[1.1]">
                      Explore our content on TikTok
                    </h4>
                    <span className="text-sm text-white/50 font-semibold transition-all duration-300 ease group-hover:text-black/50 break-all block leading-[0.926em] mt-1">
                      tiktok.com/@languageking
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-redBlack md:hidden pt-[50px] sm:-mb-[2.1164021164em] -mb-[13.8888888889vw]">
        <ImageWithToggle
          src={ContactMobileImage}
          alt="contactMobile"
          className="w-full h-auto"
        />
      </section>
    </>
  );
};

export default Contact;
