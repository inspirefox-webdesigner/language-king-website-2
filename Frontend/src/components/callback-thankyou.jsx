import CloseIcon from "../assets/close.svg"; // Custom close icon
import checkmark from "../assets/icons/checkmark.svg";
import CallIcon from "../assets/icons/call-icon-gradient.svg";
import MemberIcon from "../assets/icons/member-icon-gradient.svg";
import PhoneICon from "../assets/icons/landline-phone.svg";
import CalenderIcon from "../assets/icons/calender-icon.svg";

const CallbackForm = () => {
  return (
    <div className="text-center">
      <img
        src={checkmark}
        alt="checkmark"
        className="mx-auto sm:w-[3.8vw] w-[13.8888888889vw] mb-2 h-auto zoom-pulse"
      />
      <h2 className="font-bold 2xl:text-[2.778em] sm:text-[2.6455026455vw] mt-[0.9920634921vw] text-[7.8125em] text-center leading-[1.11] inline-block text-gradient-OrangeRed">
        Thank You!
      </h2>
      <h3 className="font-medium sm:text-[1.455026455vw] text-[4.1666666667vw] text-white">
        We’ve received your information.
      </h3>

      <div className="bg-[#252525] rounded-[1.124em] sm:pt-[0.9259259259vw] sm:px-[1.8518518519vw] sm:pb-[1.19048vw] pb-4 px-[16px] pt-[5.2083333333vw] xs:mt-[0.9920634921vw] mt-[3.6458333333vw]">
        <div className="inline-flex items-center justify-center">
          <h3 className="font-bold xl:text-[2.1164021164em] md:text-[1.984em] xs:text-[2.2em] text-[6.1111111111em] inline mx-auto tracking-[1px] relative text-white border-text text-center">
            What Happens Next?
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:gap-[1.323em] gap-[4.4444444444vw] md:mt-[1.852em] mt-7 text-start">
          <div className="lg:max-w-[35.2513227513vw] flex items-start sm:gap-[1.6534391534vw] gap-4 text-white font-normal md:text-[1.3558201058vw] xs:text-[2.2vw] text-[4.444444vw] xs:leading-[1.4] leading-[1.375]">
            <img
              src={CallIcon}
              alt="checklist"
              className="sm:w-[1.7857142857vw] w-[6.7708333333vw] sm:h-[1.7857142857vw] h-[6.7708333333vw] mt-1"
            />
            We’ll call you within 24 hours to discuss available time slots and
            book your class.
          </div>
          <div className="lg:max-w-[35.2513227513vw] flex items-start sm:gap-[1.6534391534vw] gap-4 text-white font-normal md:text-[1.3558201058vw] xs:text-[2.2vw] text-[4.444444vw] xs:leading-[1.4] leading-[1.375]">
            <img
              src={MemberIcon}
              alt="checklist"
              className="sm:w-[1.7857142857vw] w-[6.7708333333vw] sm:h-[1.7857142857vw] h-[6.7708333333vw] mt-1"
            />
            Our team will review your course interest and prepare your
            personalized trial class.
          </div>

          <div className="bg-[#121212] xs:rounded-[0.78125vw] rounded-[4px] md:p-[0.794em] p-3 pb-[4.6875vw] w-full mx-auto flex flex-col justify-center xs:mt-0 mt-[1.703163017vw] ">
            {/* Desktop text */}
            <h4 className="xs:block hidden font-bold xl:text-[1.9841269841vw] lg:text-[1.455em] md:text-[1.323em] text-[5.5em] text-white mx-auto pb-[0.6613756614vw] text-center">
              Need immediate assistance?{" "}
            </h4>
            {/* Mobile text */}
            <h4 className="xs:hidden block font-bold xl:text-[1.9841269841vw] lg:text-[1.455em] md:text-[1.323em] text-[5.5em] text-white mx-auto pb-[3.88889vw] text-center">
              Need urgent assistance?{" "}
            </h4>

            <ul className="flex flex-col xs:gap-[0.8855820106vw] gap-[2.7777777778em] mx-auto">
              <li>
                <a
                  href="tel:+61488876999"
                  className="flex items-center xs:gap-[0.7936507937vw] gap-[0.7142857143em]  text-white font-medium md:text-[1.1904761905vw] sm:text-[2.5em] xs:text-[2.9166666667em] text-[4vw]"
                >
                  {/* <img
                    src={PhoneICon}
                    className="lg:w-[2.7116402116vw] w-[1.545em]"
                  /> */}
                  <div className="w-[2.7116402116vw] flex items-start justify-center">
                    <img
                      src={PhoneICon}
                      className="xs:w-[1.4947089947vw] w-[2.2em] pt-[4px]"
                    />
                  </div>
                  +61 488 877 999 &nbsp; / &nbsp; <br class="xs:hidden" /> +61
                  444 876 555
                </a>
              </li>
              <li>
                <a
                  href="tel:+61488876999"
                  className="flex items-start xs:gap-[0.7936507937vw]  gap-[0.7142857143em] text-white font-medium md:text-[1.0416666667vw] sm:text-[2.5em] xs:text-[2.9166666667em] text-[3.8888888889em]">
                  <div className="w-[2.646em] flex items-center justify-center">
                    <img
                      src={CalenderIcon}
                      className="lg:w-[1.7857142857vw] w-[1.545em]"
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

export default CallbackForm;
