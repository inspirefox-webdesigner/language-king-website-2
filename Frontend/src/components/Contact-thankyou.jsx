import checkmark from "../assets/icons/green-checkmark.svg";
import CallIcon from "../assets/icons/call-icon.svg";
import MemberIcon from "../assets/icons/member-icon.svg";
import PhoneICon from "../assets/icons/landline-phone.svg";
import CalenderIcon from "../assets/icons/calender-icon.svg";

const ContactThankyou = () => {
  return ( 
    <>
      <div className="text-center">
        <img
          src={checkmark}
          alt="checkmark"
          className="mx-auto sm:w-[3.505em] w-[50px] mb-2 h-auto zoom-pulse"
        />
        <h2 className="font-bold 2xl:text-[2.778em] md:text-[2.249em] text-3xl text-center text-[#00C360]">
          Thank You!
        </h2>
        <h3 className="font-medium sm:text-[1.1904761905em] text-base text-white">
          We’ve received your information.
        </h3>

        <div className="bg-[#252525] xs:rounded-[1.124em] rounded-[3px] sm:pt-[1.058em] sm:px-[1.3227513228em] sm:pb-[1.587em] p-[3vw] xs:mt-[1.587em] mt-[4vw]">
          <div className="inline-flex items-center justify-center">
            <h3 className="font-bold xl:text-[2.1164021164em] md:text-[1.984em] text-2xl inline mx-auto tracking-[1px] relative text-white border-text text-center">
              What Happens Next?
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:gap-[1.323em] gap-4 md:mt-[1.852em] mt-7 text-start">
            <div className="flex items-start sm:gap-[1.587em] gap-[3.3vw] text-white xs:font-medium font-normal md:text-[1.0582010582em] xs:text-[2.5em] text-[4em] xs:leading-[22px] leading-[1.375]">
              <img
                src={CallIcon}
                alt="checklist"
                className="sm:w-[2.1164021164em] w-[28px] sm:h-[2.1164021164em] h-[28px] mt-1"
              />
              We’ll call you within 24 hours to discuss your preferred course, target score, and learning needs.
            </div>
            <div className="flex items-start sm:gap-[1.587em] gap-[3.3vw] text-white xs:font-medium font-normal md:text-[1.0582010582em] xs:text-[2.5em] text-[4em] xs:leading-[22px] leading-[1.375]">
              <img
                src={MemberIcon}
                alt="checklist"
                className="sm:w-[2.1164021164em] w-[28px] sm:h-[2.1164021164em] h-[28px] mt-1"
              />
              Our team will review your course interest and create a personalized plan tailored to your goals.
            </div>

            <div className="bg-[#121212] sm:rounded-2xl rounded-[4px] xs:mt-0 mt-[1vw] sm:p-[0.794em] p-[3.3333333333vw] w-full mx-auto flex flex-col justify-center">
              <h4 className="sm:block hidden font-bold xl:text-[1.587em] lg:text-[1.455em] md:text-[1.323em] text-[6em] text-white  mx-auto xs:pb-[0.6669em] pb-[2vw] text-center">
                Need immediate assistance?{" "}
              </h4>
              <h4 className="sm:hidden block font-bold xl:text-[1.587em] lg:text-[1.455em] md:text-[1.323em] text-[6em] text-white  mx-auto xs:pb-[0.6669em] pb-[2vw] text-center">
                Need urgent assistance?{" "}
              </h4>

              <ul className="flex flex-col xs:gap-[1.0582010582em] gap-[2vw] max-w-auto mx-auto">
                <li>
                  <a
                    href="tel:+61488876999"
                    className="flex items-center gap-[1.058em] text-white font-semibold md:text-[1.0582010582em] sm:text-base text-[3.8vw]"
                  >
                    <img src={PhoneICon} className="w-[2.646em]" />
                    +61 488 877 999 &nbsp; / &nbsp; +61 444 876 555
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+61488876999"
                    className="flex items-start gap-[1.058em] text-white font-semibold md:text-[1.0582010582em] sm:text-base text-[3.8vw]"
                  >
                    <div className="w-[2.646em] flex items-center justify-center">
                      <img src={CalenderIcon} className="w-[1.852em]" />
                    </div>
                    <span>
                      10 A.M - 7 P.M <br />
                      <span className="italic text-[#abaaa6] font-normal block">
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
    </>
  );
};

export default ContactThankyou;
