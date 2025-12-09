import CloseIcon from "../assets/close.svg"; // Custom close icon
import checkmark from "../assets/icons/checkmark.svg";
import CallIcon from "../assets/icons/call-icon-gradient.svg";
import MemberIcon from "../assets/icons/member-icon-gradient.svg";
import PhoneICon from "../assets/icons/landline-phone.svg";
import CalenderIcon from "../assets/icons/calender-icon.svg";

const CallbackPopupThankyou = () => {
  return (
    // <div className="text-center">
    //   <img
    //     src={checkmark}
    //     alt="checkmark"
    //     className="mx-auto sm:w-[3.8vw] w-[13.8888888889vw] xs:mb-2 mb-[5vw] h-auto zoom-pulse"
    //   />
    //   <h2 className="font-bold 2xl:text-[2.778em] sm:text-[2.6455026455vw] mt-[0.9920634921vw] text-[7.8125em] text-center text-gradient-OrangeRed">
    //     Thank You!
    //   </h2>
    //   <h3 className="font-medium sm:text-[1.455026455vw] text-[4.1666666667vw] text-white">
    //     We’ve received your information.
    //   </h3>

    //   <div className="bg-[#252525] rounded-[1.124em] sm:pt-[1.058em] sm:px-[1.3227513228em] sm:pb-[1.587em] p-4 pb-[20px] xs:mt-[1.587em] mt-[5.2083333333vw]">
    //     <div className="inline-flex items-center justify-center">
    //       <h3 className="font-bold xl:text-[2.1164021164em] md:text-[1.984em] xs:text-[2.2em] text-[6.1111111111em] inline mx-auto tracking-[1px] relative text-white border-text text-center">
    //         What Happens Next?
    //       </h3>
    //     </div>

    //     <div className="grid grid-cols-1 sm:gap-[1.323em] gap-[4.4444444444vw] md:mt-[1.852em] mt-7 text-start">
    //       <div className="lg:max-w-[35.2513227513vw] flex items-start sm:gap-[1.455026455vw] gap-4 text-white font-normal md:text-[1.3558201058vw] xs:text-[2.2vw] text-[4.2em] xs:leading-[1.4] leading-[1.375]">
    //         <img
    //           src={CallIcon}
    //           alt="checklist"
    //           className="sm:w-[2.1164021164em] w-[28px] sm:h-[2.1164021164em] h-[28px] mt-1"
    //         />
    //         We’ll call you within 24 hours to discuss your preferred course,
    //         target score, and learning needs.
    //       </div>
    //       <div className="lg:max-w-[35.2513227513vw] flex items-start sm:gap-[1.455026455vw] gap-4 text-white font-normal md:text-[1.3558201058vw] xs:text-[2.2vw] text-[4.2em] xs:leading-[1.4] leading-[1.375]">
    //         <img
    //           src={MemberIcon}
    //           alt="checklist"
    //           className="sm:w-[2.1164021164em] w-[28px] sm:h-[2.1164021164em] h-[28px] mt-1"
    //         />
    //         Our team will review your course interest and create a personalized
    //         plan tailored to your goals.
    //       </div>

    //       <div className="bg-[#121212] xs:rounded-[0.7936507937vw] rounded-[4px] xs:pb-[0.9259259259vw] xs:pt-[0.66135vw] xs:mt-[0.3306878307vw] md:px-[0.794em] p-3 w-full mx-auto flex flex-col justify-center max-w-[94%]">
    //         {/* Desktop text */}
    //         <h4 className="xs:block hidden font-bold xl:text-[1.8518518519vw] lg:text-[1.455em] md:text-[1.323em] sm:text-[3.2em] text-[5.5em] text-white mx-auto pb-[0.7936507937vw] text-center">
    //           Need immediate assistance?{" "}
    //         </h4>
    //         {/* Mobile text */}
    //         <h4 className="xs:hidden block font-bold xl:text-[1.8518518519vw] lg:text-[1.455em] md:text-[1.323em] text-[5.5em] text-white mx-auto pb-[0.7936507937vw] text-center">
    //           Need urgent assistance?{" "}
    //         </h4>
    //         <ul className="flex flex-col xs:gap-[1.0582010582em] gap-[3.8888888889vw] max-w-auto mx-auto">
    //           <li>
    //             <a
    //               href="tel:+61488876999"
    //               className="flex items-center xs:gap-[1.058em] gap-[0.7142857143em]  text-white font-medium md:text-[1.2566137566vw] sm:text-[2.5em] xs:text-[2.9166666667em] text-[3.92vw] leading-[1.375]"
    //             >
    //               <img src={PhoneICon} className="lg:w-[2.7116402116vw] w-[1.545em]" />
    //               +61 488 877 999 &nbsp; / &nbsp; <br class="xs:hidden" /> +61 444 876 555
    //             </a>
    //           </li>
    //           <li>
    //             <a
    //               href="tel:+61488876999"
    //               className="flex items-start xs:gap-[1.058em]  gap-[0.7142857143em] text-white font-medium md:text-[1.2566137566vw] sm:text-[2.5em] xs:text-[2.9166666667em] text-[3.92vw] leading-[1.375]"
    //             >
    //               <div className="w-[2.646em] flex items-center justify-center">
    //                 <img src={CalenderIcon} className="lg:w-[1.7857142857vw] w-[1.545em]" />
    //               </div>
    //               <span>
    //                 10 A.M - 7 P.M <br />
    //                 <span className="italic text-[#abaaa6] font-normal block text-sm">
    //                   (Mon - Sun | Melbourne Time)
    //                 </span>
    //               </span>
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="text-center">
      <img
        src={checkmark}
        alt="checkmark"
        className="mx-auto sm:w-[3.505em] w-[50px] mb-2 h-auto zoom-pulse"
      />
      <h2 className="inline-block font-bold 2xl:text-[2.778em] md:text-[2.1164021164vw] text-3xl text-center text-gradient-OrangeRed">
        Thank You!
      </h2>
      <h3 className="font-medium sm:text-[1.1904761905em] text-base text-white">
        We’ve received your information.
      </h3>

      <div className="bg-[#252525] rounded-[1.124em] sm:pt-[0.9259259259vw] sm:px-[1.5873015873vw] sm:pb-[1.19048vw] p-4 xs:mt-[0.9920634921vw] mt-[3.6458333333vw]">
        <div className="inline-flex items-center justify-center">
          <h3 className="font-bold xl:text-[1.7187169312vw] md:text-[1.984em] text-2xl inline mx-auto tracking-[1px] relative text-white border-text text-center">
            What Happens Next?
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:gap-[1.0416666667vw] gap-4 md:mt-[1.3227513228vw] mt-6 text-start">
          <div className="flex items-start sm:gap-[1.455026455vw] gap-5 text-white font-normal md:text-[1.0582010582em] text-[3.8888888889em] xs:leading-[1.375] leading-[1.3] lg:max-w-[26.5486725664vw]">
            <img
              src={CallIcon}
              alt="checklist"
              className="sm:w-[1.8007936508vw] w-[6.7708333333vw] sm:h-[1.8007936508vw] h-[6.7708333333vw] mt-1"
            />
            We’ll call you within 24 hours to discuss your preferred course,
            target score, and learning needs.
          </div>
          <div className="flex items-start sm:gap-[1.455026455vw] gap-5 text-white font-normal md:text-[1.0582010582em] text-[3.8888888889em] xs:leading-[1.375] leading-[1.3] lg:max-w-[26.5486725664vw]">
            <img
              src={MemberIcon}
              alt="checklist"
              className="sm:w-[1.8007936508vw] w-[6.7708333333vw] sm:h-[1.8007936508vw] h-[6.7708333333vw] mt-1"
            />
            Our team will review your course interest and create a personalized
            plan tailored to your goals.
          </div>

          <div className="bg-[#121212] xs:rounded-[0.78125vw] rounded-[4px] md:p-[0.794em] p-3 pb-[4.6875vw] w-full mx-auto flex flex-col justify-center xs:mt-0 mt-[1.703163017vw] ">
            {/* Desktop text */}
            <h4 className="xs:block hidden font-bold xl:text-[1.587em] lg:text-[1.455em] md:text-[1.323em] text-[5.5em] text-white mx-auto pb-[0.6613756614vw] text-center">
              Need immediate assistance?{" "}
            </h4>
            {/* Mobile text */}
            <h4 className="xs:hidden block font-bold xl:text-[1.587em] lg:text-[1.455em] md:text-[1.323em] text-[5.5em] text-white mx-auto pb-[0.6669em] text-center">
              Need urgent assistance?{" "}
            </h4>

            <ul className="flex flex-col xs:gap-[0.8855820106vw] gap-[2.7777777778em] mx-auto">
              <li>
                <a
                  href="tel:+61488876999"
                  className="flex items-center xs:gap-[1.058em] gap-[0.7142857143em]  text-white font-medium md:text-[1.0416666667vw] sm:text-[2.5em] xs:text-[2.9166666667em] text-[3.8888888889em]"
                >
                  {/* <img src={PhoneICon} className="lg:w-[2.3148148148vw] w-[1.545em]" /> */}
                  <div className="w-[2.646em] flex items-start justify-center">
                    <img
                      src={PhoneICon}
                      className="xs:w-[1.4947089947vw] pt-[4px] w-[2.2em]"
                    />
                  </div>
                  +61 488 877 999 &nbsp; / &nbsp; <br class="xs:hidden" /> +61
                  444 876 555
                </a>
              </li>
              <li>
                <a
                  href="tel:+61488876999"
                  className="flex items-start xs:gap-[1.058em]  gap-[0.7142857143em] text-white font-medium md:text-[1.0416666667vw] sm:text-[2.5em] xs:text-[2.9166666667em] text-[3.8888888889em]"
                >
                  <div className="w-[2.646em] flex items-center justify-center">
                    <img
                      src={CalenderIcon}
                      className="xs:w-[1.4947089947vw] w-[1.545em]"
                    />
                  </div>
                  <span>
                    10 A.M - 7 P.M <br />
                    <span className="italic text-[#abaaa6] font-normal block xs:text-[0.9259259259vw] text-[3.3333333vw]">
                      (Mon - Sun | Melbourne Time)
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallbackPopupThankyou;
