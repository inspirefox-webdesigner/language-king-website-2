import React from "react";
import AppleImg from "../assets/icons/apple.svg";
import GoogleImg from "../assets/icons/google-play.svg";
import WindowsImg from "../assets/icons/windows.svg";
import AppleImg1 from "../assets/icons/apple-light.svg";
import GoogleImg1 from "../assets/icons/google-play-light.svg";
import WindowsImg1 from "../assets/icons/windows-light.svg";
import Email from "../assets/icons/email.svg";
import Phone from "../assets/icons/call.svg";
import Map from "../assets/icons/map.svg";
import Calender from "../assets/icons/calender.svg";
import { Link } from "react-router-dom";

// import { ReactComponent as Logo } from "./assets/google.svg";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="bg-noise-pattern sm:pt-[2.1164021164em] pt-[13.8888888889vw]">
        <div className="custom-container mx-auto py-0 px-0 sm:px-[2.1164021164em]">
          <div className="border border-[#333434] sm:mb-[2.5132275132em] xs:mb-[4.375em] mb-[4.4444444444em] sm:border-x-1 border-x-0">
            <div className="bg-[#1A1A1A] sm:py-[1.455026455em] sm:px-[2.5132275132em] pb-[7.2916666667vw] pt-4 px-4 border-b border-[#333434]">
              <div className="flex xl:flex-nowrap flex-wrap sm:gap-[2.1164021164em] gap-[33px]">
                <div className="w-full flex lg:flex-nowrap flex-wrap justify-between sm:gap-[2.1164021164em] gap-[33px]">
                  <div className="lg:w-auto w-full flex flex-col lg:gap-[1.455026455em] gap-[22px]">
                    <h4 className="text-white font-bold lg:text-[1.455026455em] md:text-[2.1484375em] sm:text-[2.6041666667em] xs:text-[3.125em] text-[5.7291666667em] lg:leading-[1.5]">
                      Contact Us{" "}
                    </h4>
                    <ul className="flex flex-col sm:gap-[1.1904761905em] gap-4">
                      <li>
                        <a
                          href="mailto:info@languageking.com.au"
                          className="flex items-center sm:gap-[1.0582010582em] gap-4 text-[#919191] font-semibold md:text-[1.0582010582em] sm:text-[2.0833333333em] xs:text-[2.5em] text-[4.1666666667em] "
                        >
                          <img src={Email} className="sm:w-[2em] sm:h-[2em] w-8 h-8 " />
                          info@languageking.com.au
                        </a>
                      </li>
                      <li>
                        <span className="flex items-center sm:gap-[1.0582010582em] gap-4 text-[#919191] font-semibold md:text-[1.0582010582em] sm:text-[2.0833333333em] xs:text-[2.5em] text-[4.1666666667em] ">
                          <img src={Map} className="sm:w-[2em] sm:h-[2em] w-8 h-8 " />
                          Online
                        </span>
                      </li>
                      <li>
                        <a
                          href="tel:+61488876999"
                          className="flex items-center sm:gap-[1.0582010582em] gap-4 text-[#919191] font-semibold md:text-[1.0582010582em] sm:text-[2.0833333333em] xs:text-[2.5em] text-[4.1666666667em] "
                        >
                          <img src={Phone} className="sm:w-[2em] sm:h-[2em] w-8 h-8 " />
                          +61 488 876 999
                        </a>
                      </li>
                      <li>
                        <a
                          href="tel:+61488876999"
                          className="flex items-start sm:gap-[1.0582010582em] gap-4 text-[#919191] font-semibold md:text-[1.0582010582em] sm:text-[2.0833333333em] xs:text-[2.5em] text-[4.1666666667em] "
                        >
                          <img src={Calender} className="sm:w-[2em] sm:h-[2em] w-8 h-8 " />
                          <span className="xs:pt-0 pt-[0.36em]">
                            10 A.M - 7 P.M <br />
                            <span className="italic font-light block">
                              (Mon - Sun | Melbourne Time)
                            </span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="lg:w-auto sm:w-[30%] w-[40%] flex flex-col lg:gap-[1.455026455em] gap-[22px]">
                    <h4 className="text-white font-bold lg:text-[1.455026455em] md:text-[2.1484375em] sm:text-[2.6041666667em] xs:text-[3.125em] text-[5.7291666667em] lg:leading-[1.5]">
                      About Us{" "}
                    </h4>
                    <ul className="flex flex-col sm:gap-[0.9920634921em] gap-[14px]">
                      <li>
                        <Link
                          to="/Terms-of-Use"
                          className="flex items-center gap-4 text-[#919191] font-semibold md:text-[1.0582010582em] sm:text-[2.0833333333em] xs:text-[2.5em] text-[4.1666666667em] transition-all duration-300 ease hover:text-white/80"
                        >
                          Terms of Use
                        </Link>
                      </li>
                      <li>
                        <Link to="/privacy-policy"
                          className="flex items-center gap-4 text-[#919191] font-semibold md:text-[1.0582010582em] sm:text-[2.0833333333em] xs:text-[2.5em] text-[4.1666666667em] transition-all duration-300 ease hover:text-white/80"
                        >
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center gap-4 text-[#919191] font-semibold md:text-[1.0582010582em] sm:text-[2.0833333333em] xs:text-[2.5em] text-[4.1666666667em] transition-all duration-300 ease hover:text-white/80"
                        >
                          Refund Policy
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center gap-4 text-[#919191] font-semibold md:text-[1.0582010582em] sm:text-[2.0833333333em] xs:text-[2.5em] text-[4.1666666667em] transition-all duration-300 ease hover:text-white/80"
                        >
                          Careers
                        </a>
                      </li>
                      <li>
                        <Link
                          to="/faq"
                          className="flex items-center gap-4 text-[#919191] font-semibold md:text-[1.0582010582em] sm:text-[2.0833333333em] xs:text-[2.5em] text-[4.1666666667em] transition-all duration-300 ease hover:text-white/80"
                        >
                          FAQs
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="lg:w-auto sm:w-[30%] w-[40%] flex flex-col lg:gap-[1.455026455em] gap-[22px]">
                    <h4 className="text-white font-bold lg:text-[1.455026455em] md:text-[2.1484375em] sm:text-[2.6041666667em] xs:text-[3.125em] text-[5.7291666667em] lg:leading-[1.5]">
                      Courses
                    </h4>
                    <ul className="flex flex-col sm:gap-[0.9920634921em] gap-[14px]">
                      <li>
                        <a
                          href="#"
                          className="flex items-center gap-4 text-[#919191] font-semibold md:text-[1.0582010582em] sm:text-[2.0833333333em] xs:text-[2.5em] text-[4.1666666667em] transition-all duration-300 ease hover:text-white/80"
                        >
                          PTE
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center gap-4 text-[#919191] font-semibold md:text-[1.0582010582em] sm:text-[2.0833333333em] xs:text-[2.5em] text-[4.1666666667em] transition-all duration-300 ease hover:text-white/80"
                        >
                          NAATI CCL
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center gap-4 text-[#919191] font-semibold md:text-[1.0582010582em] sm:text-[2.0833333333em] xs:text-[2.5em] text-[4.1666666667em] transition-all duration-300 ease hover:text-white/80"
                        >
                          IELTS
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="lg:w-auto w-full flex flex-col lg:gap-[1.455026455em] gap-[22px]" id="app-icon">
                    <h4 className="text-white font-bold lg:text-[1.455026455em] md:text-[2.1484375em] sm:text-[2.6041666667em] xs:text-[3.125em] text-[5.7291666667em] lg:leading-[1.5]">
                      Devices Supported
                    </h4>
                    <ul className="flex sm:flex-col flex-wrap 2xl:gap-[1.4322916667em] sm:gap-[1.1904761905em] gap-[18px]">
                      <li>
                        <a
                          href="#"
                          className="flex items-center gap-4 group font-semibold transition-all duration-300 ease"
                        >
                          <img
                            src={AppleImg}
                            alt="Image"
                            className="group-hover:hidden flex md:max-w-[8.5978835979em] sm:max-w-[16.9270833333em] xs:max-w-[20.3125em] xs:h-auto h-[42.55px] max-w-[36.1111111111em] transition-all duration-300 ease"
                          />
                          <img
                            src={AppleImg1}
                            alt="Image"
                            className="hidden group-hover:flex md:max-w-[8.5978835979em] sm:max-w-[16.9270833333em] xs:max-w-[20.3125em] xs:h-auto h-[42.55px] max-w-[36.1111111111em] transition-all duration-300 ease"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center gap-4 group font-semibold transition-all duration-300 ease"
                        >
                          <img
                            src={GoogleImg}
                            alt="Image"
                            className="group-hover:hidden flex md:max-w-[9.2592592593em] sm:max-w-[16.9270833333em] xs:max-w-[20.3125em] xs:h-auto h-[42.55px] max-w-[36.1111111111em] transition-all duration-300 ease"
                          />
                          <img
                            src={GoogleImg1}
                            alt="Image"
                            className="hidden group-hover:flex md:max-w-[9.2592592593em] sm:max-w-[16.9270833333em] xs:max-w-[20.3125em] xs:h-auto h-[42.55px] max-w-[36.1111111111em] transition-all duration-300 ease"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="flex items-center gap-4 group font-semibold transition-all duration-300 ease"
                        >
                          <img
                            src={WindowsImg}
                            alt="Image"
                            className="group-hover:hidden flex md:max-w-[9.2592592593em] sm:max-w-[16.9270833333em] xs:max-w-[20.3125em] xs:h-auto h-[42.55px] max-w-[36.1111111111em] transition-all duration-300 ease"
                          />
                          <img
                            src={WindowsImg1}
                            alt="Image"
                            className="hidden group-hover:flex md:max-w-[9.2592592593em] sm:max-w-[16.9270833333em] xs:max-w-[20.3125em] xs:h-auto h-[42.55px] max-w-[36.1111111111em] transition-all duration-300 ease"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="sm:hidden flex flex-col gap-[24px] w-full">
                    <h4 className="text-white font-bold lg:text-[1.455026455em] md:text-[2.1484375em] sm:text-[2.6041666667em] xs:text-[3.125em] text-[5.7291666667em] lg:leading-[1.5]">
                      Follow Us
                    </h4>
                    <ul className="flex gap-5 w-full justify-between">
                      <li>
                        <a
                          href="#"
                          className="bg-[#2E2D2D] rounded-full w-[42px] h-[42px] flex items-center justify-center p-2 transition-all ease duration-300 group hover:bg-white"
                        >
                          <svg
                            className="w-auto h-full"
                            width="13"
                            height="26"
                            viewBox="0 0 13 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.27116 4.69287H12.042V0.583496H8.50553V0.599121C3.8597 0.770997 2.90137 3.32829 2.82324 6.03662H2.80762V8.88558H0.0419922V12.995H2.80762V25.4897H7.77637V12.995H11.3389L12.042 8.88558H7.77637V6.3335C7.77637 5.42725 8.39616 4.69287 9.27116 4.69287Z"
                              fill="white"
                              className="fill-white group-hover:fill-black"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="bg-[#2E2D2D] rounded-full w-[42px] h-[42px] flex items-center justify-center p-2 transition-all ease duration-300 group hover:bg-white"
                        >
                          <svg
                            className="w-auto h-full"
                            width="26"
                            height="25"
                            viewBox="0 0 26 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g mask="url(#mask0_1025_4974)">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M13.2909 24.651C3.1346 24.651 0.95752 22.4739 0.95752 12.3228C0.95752 2.16658 3.1346 -0.010498 13.2909 -0.010498C23.4419 -0.010498 25.619 2.16658 25.619 12.3228C25.619 22.4739 23.4419 24.651 13.2909 24.651ZM17.4002 6.15617C17.4002 6.72388 17.8586 7.18221 18.4263 7.18221C18.994 7.18221 19.4523 6.72388 19.4523 6.15617C19.4523 5.58846 18.994 5.13013 18.4263 5.13013C17.8586 5.13013 17.4002 5.58846 17.4002 6.15617ZM8.15023 12.3228C8.15023 9.48429 10.4523 7.18221 13.2909 7.18221C16.1242 7.18221 18.4263 9.48429 18.4263 12.3228C18.4263 15.1562 16.1242 17.4583 13.2909 17.4583C10.4523 17.4583 8.15023 15.1562 8.15023 12.3228Z"
                                className="fill-white group-hover:fill-black"
                              />
                            </g>
                            <circle
                              cx="13.292"
                              cy="12.3364"
                              r="3.39893"
                              className="fill-white group-hover:fill-black"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="bg-[#2E2D2D] rounded-full w-[42px] h-[42px] flex items-center justify-center p-2 transition-all ease duration-300 group hover:bg-white"
                        >
                          <svg
                            className="w-auto h-full"
                            width="19"
                            height="22"
                            viewBox="0 0 19 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.8436 5.24479C17.3176 5.13542 16.8228 4.94271 16.354 4.67188C15.8905 4.40104 15.4738 4.0625 15.1196 3.65625C14.7603 3.25521 14.4738 2.80729 14.2603 2.3125C14.0415 1.8125 13.9113 1.29688 13.8592 0.760417V0.296875H10.2238V14.7396C10.2186 15.3958 10.0259 15.9896 9.64047 16.5208C9.26027 17.0521 8.75506 17.4219 8.13527 17.6302C7.51027 17.8385 6.89047 17.849 6.26027 17.6563C5.63527 17.4635 5.12485 17.1042 4.72381 16.5833C4.32277 16.0521 4.11443 15.4531 4.10402 14.7865C4.0936 14.1198 4.27589 13.5156 4.66131 12.9688C5.04672 12.4219 5.55714 12.0469 6.18735 11.8333C6.81756 11.6198 7.45297 11.6146 8.08839 11.8177V8.11979C7.40089 8.02604 6.70818 8.03646 6.02068 8.15625C5.33839 8.27604 4.68214 8.5 4.06756 8.82292C3.44776 9.14584 2.89568 9.55729 2.4061 10.0521C1.91652 10.5521 1.51547 11.1094 1.20297 11.7344C0.890474 12.3542 0.676932 13.0104 0.567557 13.6979C0.458182 14.3854 0.458183 15.0781 0.562349 15.7656C0.671725 16.4531 0.880057 17.1094 1.19256 17.7344C1.50506 18.3594 1.90089 18.9167 2.39047 19.4167C2.85401 19.8906 3.38006 20.2917 3.96339 20.6094C4.54152 20.9271 5.16131 21.1563 5.81235 21.2917C6.46339 21.4271 7.11964 21.4635 7.7811 21.401C8.44256 21.3438 9.08318 21.1875 9.69777 20.9375C10.3123 20.6875 10.8801 20.349 11.3957 19.9323C11.9113 19.5104 12.354 19.026 12.7238 18.474C13.0936 17.9219 13.3748 17.3281 13.5728 16.6927C13.7655 16.0573 13.8592 15.4063 13.8592 14.7448V7.35938C15.3696 8.4375 17.0519 8.97917 18.9061 8.97396V5.35938C18.5467 5.35938 18.1926 5.32292 17.8436 5.24479Z"
                              className="fill-white group-hover:fill-black"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="bg-[#2E2D2D] rounded-full w-[42px] h-[42px] flex items-center justify-center p-2 transition-all ease duration-300 group hover:bg-white"
                        >
                          <svg
                            className="w-auto h-full"
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clipPath="url(#clip0_1025_5048)">
                              <path
                                d="M27.3804 6.9171L27.4154 7.14577C27.2557 6.56388 26.9504 6.03227 26.5283 5.60115C26.1062 5.17002 25.5811 4.8536 25.0027 4.68177L24.9782 4.67593C22.7954 4.08327 14.0115 4.08327 14.0115 4.08327C14.0115 4.08327 5.24986 4.0716 3.04486 4.67593C2.46546 4.84361 1.93832 5.1561 1.51314 5.58393C1.08796 6.01177 0.77876 6.54084 0.614688 7.12127L0.608855 7.14577C-0.206645 11.4053 -0.212478 16.5234 0.645022 21.0839L0.608855 20.8529C0.768475 21.4348 1.07377 21.9664 1.49591 22.3976C1.91806 22.8287 2.44312 23.1451 3.02152 23.3169L3.04602 23.3228C5.22652 23.9166 14.0127 23.9166 14.0127 23.9166C14.0127 23.9166 22.7732 23.9166 24.9794 23.3228C25.559 23.1554 26.0865 22.843 26.5119 22.4151C26.9373 21.9873 27.2466 21.458 27.4107 20.8774L27.4165 20.8529C27.7875 18.8719 27.9999 16.5923 27.9999 14.2636L27.9987 14.0058L27.9999 13.7374C27.9999 11.4076 27.7875 9.12793 27.3804 6.9171ZM11.2092 18.2594V9.75093L18.5195 14.0116L11.2092 18.2594Z"
                                className="fill-white group-hover:fill-black"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_1025_5048">
                                <rect
                                  width="28"
                                  height="28"
                                  className="fill-white group-hover:fill-black"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className=" flex items-center sm:justify-between justify-center md:py-[1.1904761905em] sm:px-[2.5132275132em] p-[5.7291666667em]">
              <span className="font-medium md:text-[1.0582010582em] xs:text-[3.3333333333em] text-[4.4444444444em] sm:text-start text-center text-white [text-shadow:0_0_16px_rgba(255,255,255,0.77)]">
                Copyright @ 2025 Language King
              </span>

              <ul className="sm:flex hidden gap-5">
                <li>
                  <a
                    href="#"
                    className="bg-[#2E2D2D] rounded-full w-[2.7777777778em] h-[2.7777777778em] flex items-center justify-center p-[0.6613756614em] transition-all ease duration-300 group hover:bg-white"
                  >
                    <svg
                      className="w-auto h-full"
                      width="13"
                      height="26"
                      viewBox="0 0 13 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.27116 4.69287H12.042V0.583496H8.50553V0.599121C3.8597 0.770997 2.90137 3.32829 2.82324 6.03662H2.80762V8.88558H0.0419922V12.995H2.80762V25.4897H7.77637V12.995H11.3389L12.042 8.88558H7.77637V6.3335C7.77637 5.42725 8.39616 4.69287 9.27116 4.69287Z"
                        fill="white"
                        className="fill-white group-hover:fill-black"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="bg-[#2E2D2D] rounded-full w-[2.7777777778em] h-[2.7777777778em] flex items-center justify-center p-[0.6613756614em] transition-all ease duration-300 group hover:bg-white"
                  >
                    <svg
                      className="w-auto h-full"
                      width="26"
                      height="25"
                      viewBox="0 0 26 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g mask="url(#mask0_1025_4974)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.2909 24.651C3.1346 24.651 0.95752 22.4739 0.95752 12.3228C0.95752 2.16658 3.1346 -0.010498 13.2909 -0.010498C23.4419 -0.010498 25.619 2.16658 25.619 12.3228C25.619 22.4739 23.4419 24.651 13.2909 24.651ZM17.4002 6.15617C17.4002 6.72388 17.8586 7.18221 18.4263 7.18221C18.994 7.18221 19.4523 6.72388 19.4523 6.15617C19.4523 5.58846 18.994 5.13013 18.4263 5.13013C17.8586 5.13013 17.4002 5.58846 17.4002 6.15617ZM8.15023 12.3228C8.15023 9.48429 10.4523 7.18221 13.2909 7.18221C16.1242 7.18221 18.4263 9.48429 18.4263 12.3228C18.4263 15.1562 16.1242 17.4583 13.2909 17.4583C10.4523 17.4583 8.15023 15.1562 8.15023 12.3228Z"
                          className="fill-white group-hover:fill-black"
                        />
                      </g>
                      <circle
                        cx="13.292"
                        cy="12.3364"
                        r="3.39893"
                        className="fill-white group-hover:fill-black"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="bg-[#2E2D2D] rounded-full w-[2.7777777778em] h-[2.7777777778em] flex items-center justify-center p-[0.6613756614em] transition-all ease duration-300 group hover:bg-white"
                  >
                    <svg
                      className="w-auto h-full"
                      width="19"
                      height="22"
                      viewBox="0 0 19 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.8436 5.24479C17.3176 5.13542 16.8228 4.94271 16.354 4.67188C15.8905 4.40104 15.4738 4.0625 15.1196 3.65625C14.7603 3.25521 14.4738 2.80729 14.2603 2.3125C14.0415 1.8125 13.9113 1.29688 13.8592 0.760417V0.296875H10.2238V14.7396C10.2186 15.3958 10.0259 15.9896 9.64047 16.5208C9.26027 17.0521 8.75506 17.4219 8.13527 17.6302C7.51027 17.8385 6.89047 17.849 6.26027 17.6563C5.63527 17.4635 5.12485 17.1042 4.72381 16.5833C4.32277 16.0521 4.11443 15.4531 4.10402 14.7865C4.0936 14.1198 4.27589 13.5156 4.66131 12.9688C5.04672 12.4219 5.55714 12.0469 6.18735 11.8333C6.81756 11.6198 7.45297 11.6146 8.08839 11.8177V8.11979C7.40089 8.02604 6.70818 8.03646 6.02068 8.15625C5.33839 8.27604 4.68214 8.5 4.06756 8.82292C3.44776 9.14584 2.89568 9.55729 2.4061 10.0521C1.91652 10.5521 1.51547 11.1094 1.20297 11.7344C0.890474 12.3542 0.676932 13.0104 0.567557 13.6979C0.458182 14.3854 0.458183 15.0781 0.562349 15.7656C0.671725 16.4531 0.880057 17.1094 1.19256 17.7344C1.50506 18.3594 1.90089 18.9167 2.39047 19.4167C2.85401 19.8906 3.38006 20.2917 3.96339 20.6094C4.54152 20.9271 5.16131 21.1563 5.81235 21.2917C6.46339 21.4271 7.11964 21.4635 7.7811 21.401C8.44256 21.3438 9.08318 21.1875 9.69777 20.9375C10.3123 20.6875 10.8801 20.349 11.3957 19.9323C11.9113 19.5104 12.354 19.026 12.7238 18.474C13.0936 17.9219 13.3748 17.3281 13.5728 16.6927C13.7655 16.0573 13.8592 15.4063 13.8592 14.7448V7.35938C15.3696 8.4375 17.0519 8.97917 18.9061 8.97396V5.35938C18.5467 5.35938 18.1926 5.32292 17.8436 5.24479Z"
                        className="fill-white group-hover:fill-black"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="bg-[#2E2D2D] rounded-full w-[2.7777777778em] h-[2.7777777778em] flex items-center justify-center p-[0.6613756614em] transition-all ease duration-300 group hover:bg-white"
                  >
                    <svg
                      className="w-auto h-full"
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1025_5048)">
                        <path
                          d="M27.3804 6.9171L27.4154 7.14577C27.2557 6.56388 26.9504 6.03227 26.5283 5.60115C26.1062 5.17002 25.5811 4.8536 25.0027 4.68177L24.9782 4.67593C22.7954 4.08327 14.0115 4.08327 14.0115 4.08327C14.0115 4.08327 5.24986 4.0716 3.04486 4.67593C2.46546 4.84361 1.93832 5.1561 1.51314 5.58393C1.08796 6.01177 0.77876 6.54084 0.614688 7.12127L0.608855 7.14577C-0.206645 11.4053 -0.212478 16.5234 0.645022 21.0839L0.608855 20.8529C0.768475 21.4348 1.07377 21.9664 1.49591 22.3976C1.91806 22.8287 2.44312 23.1451 3.02152 23.3169L3.04602 23.3228C5.22652 23.9166 14.0127 23.9166 14.0127 23.9166C14.0127 23.9166 22.7732 23.9166 24.9794 23.3228C25.559 23.1554 26.0865 22.843 26.5119 22.4151C26.9373 21.9873 27.2466 21.458 27.4107 20.8774L27.4165 20.8529C27.7875 18.8719 27.9999 16.5923 27.9999 14.2636L27.9987 14.0058L27.9999 13.7374C27.9999 11.4076 27.7875 9.12793 27.3804 6.9171ZM11.2092 18.2594V9.75093L18.5195 14.0116L11.2092 18.2594Z"
                          className="fill-white group-hover:fill-black"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1025_5048">
                          <rect
                            width="28"
                            height="28"
                            className="fill-white group-hover:fill-black"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="sm:pb-[3.5714285714em] sm:pt-0 pt-[2.0833333333vw] pb-[6.25vw] sm:px-0 px-4">
            <h5 className="2xl:text-[1.3227513228em] 2xl:leading-[1.4] sm:text-[1.1904761905em] xs:text-[2.9166666667em] sm:leading-[1.56] text-[3.8888888889em] font-light text-[#8B8C8D] tracking-[0.3px]">
              Disclaimer - Language King is an independent coaching provider for
              the NAATI CCL and PTE tests. We are not affiliated with, endorsed
              by, or sponsored by NAATI or PTE. All test applications must be
              made directly with NAATI or PTE.
            </h5>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
