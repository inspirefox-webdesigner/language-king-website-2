import React from "react";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PTEBanner from "../assets/pte-banner.png";
import HomeBanner from "../assets/Homepage-banner.png";
import avatar from "../assets/avatar-img.png";
import AppleIcon from "../assets/icons/apple-icon.svg";
import AndroidIcon from "../assets/icons/android-icon.svg";
import WindowsIcon from "../assets/icons/windows-icon.svg";
import Checkmark from "../assets/icons/blue-checkmark.svg";
import Coursecover1 from "../assets/course/read-aloud.png";
import Coursecover2 from "../assets/course/low-score.png";
import Coursecover3 from "../assets/course/word-essay.png";
import Coursecover4 from "../assets/course/integrated-task.png";
import Coursecover5 from "../assets/course/master-reading.png";
import Coursecover6 from "../assets/course/4-steps-rop.png";
import Coursecover7 from "../assets/course/extra-words.png";
import PTEResponse from "../assets/course/pte-res.png";
import LandingTeacherImage1 from "../assets/course/landing-teacher-1.png";
import LandingTeacherImage2 from "../assets/course/landing-teacher-2.png";
import LandingTeacherImage3 from "../assets/course/landing-teacher-3.png";
import LandingTeacherImage4 from "../assets/course/landing-teacher-4.png";
import LandingTeacherImage5 from "../assets/course/landing-teacher-5.png";
import LandingTeacherImage6 from "../assets/course/landing-teacher-6.png";
import LandingTeacherImage7 from "../assets/course/landing-teacher-7.png";
import PTEResponse1 from "../assets/course/major-mistakes.png";
import Russia from "../assets/students/1.png";
import Spain from "../assets/students/2.png";
import India from "../assets/students/3.png";
import China from "../assets/students/4.png";
import Philippines from "../assets/students/4.png";
import Vietnam from "../assets/students/6.png";
import Pakistan from "../assets/students/7.png";
import Malaysia from "../assets/students/8.png";
import Indonesia from "../assets/students/9.png";
import SriLanka from "../assets/students/10.png";
import Bangladesh from "../assets/students/11.png";
import Nepal from "../assets/students/12.png";
import SKorea from "../assets/students/13.png";
import Iran from "../assets/students/1.png";
import Thailand from "../assets/students/1.png";
import Brazil from "../assets/students/1.png";

import Russia1 from "../assets/flags/Russia1.png";
import Spain1 from "../assets/flags/Spain1.png";
import India1 from "../assets/flags/India1.png";
import China1 from "../assets/flags/China1.png";
import Philippines1 from "../assets/flags/Philippines1.png";
import Vietnam1 from "../assets/flags/Vietnam1.png";
import Pakistan1 from "../assets/flags/Pakistan1.png";
import Malaysia1 from "../assets/flags/Malaysia1.png";
import Indonesia1 from "../assets/flags/Indonesia1.png";
import SriLanka1 from "../assets/flags/SriLanka1.png";
import Bangladesh1 from "../assets/flags/Bangaladesh1.png";
import Nepal1 from "../assets/flags/Nepal1.png";
import SKorea1 from "../assets/flags/SKorea1.png";
import Iran1 from "../assets/flags/Iran1.png";
import Thailand1 from "../assets/flags/Thailand1.png";
import Brazil1 from "../assets/flags/Brazil1.png";
import freeLesson from "../assets/course/free-lesson.png";
import video from "../assets/videos/placeholder-video.mp4";
import Support1 from "../assets/course/support-1.png";
import Support2 from "../assets/course/support-2.png";
import Support3 from "../assets/course/support-3.png";
import Support4 from "../assets/course/support-4.png";
import Support5 from "../assets/course/support-5.png";
import Support6 from "../assets/course/support-6.png";
// import divider3 from "../assets/course/Group.png";
import CourseImg1 from "../assets/course-img1.png";
import CourseImg3 from "../assets/course-img3.png";
import CallbackForm from "../components/callback-popup";
import facebookIcon from "../assets/icons/facebook-dark.svg";
import InstaIcon from "../assets/icons/instagram-dark.svg";
import TiktokIcon from "../assets/icons/tiktok-dark.svg";
import facebookIconLight from "../assets/icons/facebook-icon-light.svg";
import InstaIconLight from "../assets/icons/instagram-icon-light.svg";
import TiktokIconLight from "../assets/icons/tiktok-icon-light.svg";
import ImageWithToggle from "../components/ImageWithToggle";
import API_BASE_URL from "../config/api";

const PTEMasterClass = () => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  const courseData = [
    {
      title: "PTE 1-Line Strategy",
      image: Coursecover1,
      description:
        "Find the truth behind 1-Line Strategy in Read Aloud, and who can use it.",
    },
    {
      title: "Low score after Nov 2024",
      image: Coursecover2,
      description:
        "Learn how to attempt images without text and the answer to speaking till the end. Can you answer be checked by a person?",
    },
    {
      title: "1 Word Essay Templates",
      image: Coursecover3,
      description:
        "Can you use Old Essay Templates in 2025? Watch Ab discuss about human evaluation, use of templates, and much more.",
    },
    {
      title: "Integrated tasks",
      image: Coursecover4,
      description:
        "Does Speaking still affect your Reading & Listening Score after Aug 2025 update ?",
    },
    {
      title: "Master Reading Blanks",
      image: Coursecover5,
      description:
        "Is “Grammar” really important in Reading & Writing Fill in the Blanks?",
    },
    {
      title: "4 Step ROP Hack",
      image: Coursecover6,
      description:
        "Solve any Re-order paragraph with our 4 Step Master Techinique.",
    },
    {
      title: "Extra words in WFD",
      image: Coursecover7,
      description:
        "Should you add extra words ? Can it lower score in Writing Module ? Let’s discuss what no one else will.",
    },
  ];

  const courseData2 = [
    {
      title: "Helped Many Students",
      image: LandingTeacherImage1,
      description:
        "AB’s goal is to help students get their desired score, and he has a proven track record of making that happen.",
    },
    {
      title: "5+ Years in Results Delivered",
      image: LandingTeacherImage2,
      description:
        "AB has helped students of all levels—from beginners to advanced—across diverse backgrounds achieve their desired score.",
    },
    {
      title: "20+ Teachers Trained",
      image: LandingTeacherImage3,
      description:
        "AB has taught 20+ Teachers in the field. Learn from the Master who has taught other teachers.",
    },
    {
      title: "Book Author",
      image: LandingTeacherImage4,
      description:
        "Author of popular book: NAATI CCL: Learn the Right Vocabulary",
    },
    {
      title: "PTE Certified Trainer",
      image: LandingTeacherImage6,
      description:
        "Successfully completed TRAIN THE TRAINER Workshop conducted by PTE Academic ULVI and PTE Home",
    },
    {
      title: "2x NAATI CCL",
      image: LandingTeacherImage5,
      description:
        "Ab has cleared the NAATI CCL Test twice with only 3 days preparation. Learn all the exam-related tricks from him.",
    },
    {
      title: "Need to Think",
      image: LandingTeacherImage7,
      description: "Need to Think",
    },
  ];

  const tabs = ["band8", "band7", "band65", "others"];
  const [activeTab, setActiveTab] = useState("band8");

  const tabImages = {
    band8: PTEResponse,
    band7: PTEResponse1,
    band65: PTEResponse,
    others: PTEResponse1,
  };
  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = tabs.indexOf(prev);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // cleanup on unmount
  });

  const [students, setStudents] = useState([
    {
      name: "Natalie",
      country: "Russia",
      flag: Russia1,
      image: Russia,
      gradient:
        "linear-gradient(90deg, #FFF 0%, #FDFDFF 0.39%, #FBFBFF 0.78%, #FAF9FF 1.17%, #F8F7FF 1.56%, #F6F5FF 1.95%, #F4F3FF 2.34%, #F3F1FF 2.73%, #F1EFFF 3.12%, #EFEDFF 3.51%, #EDEBFF 3.9%, #EBE9FF 4.29%, #EAE7FF 4.68%, #E8E5FF 5.07%, #E6E3FF 5.47%, #E4E1FF 5.86%, #E3DFFF 6.25%, #E1DDFF 6.64%, #DFDBFF 7.03%, #DDD9FF 7.42%, #DCD7FF 7.81%, #DAD5FF 8.2%, #D8D3FF 8.59%, #D6D1FF 8.98%, #D4CFFF 9.37%, #D3CDFF 9.76%, #D1CBFF 10.15%, #CFC9FF 10.54%, #CDC7FF 10.93%, #CCC5FF 11.32%, #CAC3FF 11.72%, #C8C1FF 12.11%, #C6BFFF 12.5%, #C4BDFF 12.89%, #C3BBFF 13.28%, #C1B9FF 13.67%, #BFB7FF 14.06%, #BDB5FF 14.45%, #BCB3FF 14.84%, #BAB1FF 15.23%, #B8AFFF 15.62%, #B6ADFF 16.01%, #B5ABFF 16.4%, #B3A9FF 16.79%, #B1A7FF 17.18%, #AFA5FF 17.57%, #ADA3FF 17.97%, #ACA1FF 18.36%, #AA9FFF 18.75%, #A89DFF 19.14%, #A69BFF 19.53%, #A599FF 19.92%, #A397FF 20.31%, #A195FF 20.7%, #9F93FF 21.09%, #9D91FF 21.48%, #9C8FFF 21.87%, #9A8DFF 22.26%, #988BFF 22.65%, #9689FF 23.04%, #9587FF 23.43%, #9385FF 23.82%, #9183FF 24.22%, #8F81FF 24.61%, #8E80FF 25%, #8C7EFF 25.39%, #8A7CFF 25.78%, #887AFF 26.17%, #8678FF 26.56%, #8576FF 26.95%, #8374FF 27.34%, #8172FF 27.73%, #7F70FF 28.12%, #7E6EFF 28.51%, #7C6CFF 28.9%, #7A6AFF 29.29%, #7868FF 29.68%, #7666FF 30.07%, #7564FF 30.47%, #7362FF 30.86%, #7160FF 31.25%, #6F5EFF 31.64%, #6E5CFF 32.03%, #6C5AFF 32.42%, #6A58FF 32.81%, #6856FF 33.2%, #6754FF 33.59%, #6552FF 33.98%, #6350FF 34.37%, #614EFF 34.76%, #5F4CFF 35.15%, #5E4AFF 35.54%, #5C48FF 35.93%, #5A46FF 36.32%, #5844FF 36.72%, #5742FF 37.11%, #5540FF 37.5%, #533EFF 37.89%, #513CFF 38.28%, #4F3AFF 38.67%, #4E38FF 39.06%, #4C36FF 39.45%, #4A34FF 39.84%, #4832FF 40.23%, #4730FF 40.62%, #452EFF 41.01%, #432CFF 41.4%, #412AFF 41.79%, #4028FF 42.18%, #3E26FF 42.57%, #3C24FF 42.97%, #3A22FF 43.36%, #3820FF 43.75%, #371EFF 44.14%, #351CFF 44.53%, #331AFF 44.92%, #3118FF 45.31%, #3016FF 45.7%, #2E14FF 46.09%, #2C12FF 46.48%, #2A10FF 46.87%, #280EFF 47.26%, #270CFF 47.65%, #250AFF 48.04%, #2308FF 48.43%, #2106FF 48.82%, #2004FF 49.22%, #1E02FF 49.61%, #1C00FF 50%, #1E00FD 50.39%, #2000FB 50.78%, #2100F9 51.17%, #2300F7 51.56%, #2500F5 51.95%, #2700F3 52.34%, #2800F1 52.73%, #2A00EF 53.12%, #2C00ED 53.51%, #2E00EB 53.9%, #3000E9 54.29%, #3100E7 54.68%, #3300E5 55.07%, #3500E3 55.47%, #3700E1 55.86%, #3800DF 56.25%, #3A00DD 56.64%, #3C00DB 57.03%, #3E00D9 57.42%, #4000D7 57.81%, #4100D5 58.2%, #4300D3 58.59%, #4500D1 58.98%, #4700CF 59.37%, #4800CD 59.76%, #4A00CB 60.15%, #4C00C9 60.54%, #4E00C7 60.93%, #4F00C5 61.32%, #5100C3 61.72%, #5300C1 62.11%, #5500BF 62.5%, #5700BD 62.89%, #5800BB 63.28%, #5A00B9 63.67%, #5C00B7 64.06%, #5E00B5 64.45%, #5F00B3 64.84%, #6100B1 65.23%, #6300AF 65.62%, #6500AD 66.01%, #6700AB 66.4%, #6800A9 66.79%, #6A00A7 67.18%, #6C00A5 67.57%, #6E00A3 67.97%, #6F00A1 68.36%, #71009F 68.75%, #73009D 69.14%, #75009B 69.53%, #760099 69.92%, #780097 70.31%, #7A0095 70.7%, #7C0093 71.09%, #7E0091 71.48%, #7F008F 71.87%, #81008D 72.26%, #83008B 72.65%, #850089 73.04%, #860087 73.43%, #880085 73.82%, #8A0083 74.22%, #8C0081 74.61%, #8E0080 75%, #8F007E 75.39%, #91007C 75.78%, #93007A 76.17%, #950078 76.56%, #960076 76.95%, #980074 77.34%, #9A0072 77.73%, #9C0070 78.12%, #9D006E 78.51%, #9F006C 78.9%, #A1006A 79.29%, #A30068 79.68%, #A50066 80.07%, #A60064 80.47%, #A80062 80.86%, #AA0060 81.25%, #AC005E 81.64%, #AD005C 82.03%, #AF005A 82.42%, #B10058 82.81%, #B30056 83.2%, #B50054 83.59%, #B60052 83.98%, #B80050 84.37%, #BA004E 84.76%, #BC004C 85.15%, #BD004A 85.54%, #BF0048 85.93%, #C10046 86.32%, #C30044 86.72%, #C40042 87.11%, #C60040 87.5%, #C8003E 87.89%, #CA003C 88.28%, #CC003A 88.67%, #CD0038 89.06%, #CF0036 89.45%, #D10034 89.84%, #D30032 90.23%, #D40030 90.62%, #D6002E 91.01%, #D8002C 91.4%, #DA002A 91.79%, #DC0028 92.18%, #DD0026 92.57%, #DF0024 92.97%, #E10022 93.36%, #E30020 93.75%, #E4001E 94.14%, #E6001C 94.53%, #E8001A 94.92%, #EA0018 95.31%, #EB0016 95.7%, #ED0014 96.09%, #EF0012 96.48%, #F10010 96.87%, #F3000E 97.26%, #F4000C 97.65%, #F6000A 98.04%, #F80008 98.43%, #FA0006 98.82%, #FB0004 99.22%, #FD0002 99.61%, #F00 100%)",
    },
    {
      name: "Greg",
      country: "Spain",
      flag: Spain1,
      image: Spain,
      gradient:
        "linear-gradient(90deg, #FD0000 0%, #FD0100 0.39%, #FD0200 0.78%, #FD0300 1.17%, #FD0400 1.56%, #FD0500 1.96%, #FD0600 2.35%, #FD0700 2.74%, #FD0800 3.13%, #FD0900 3.52%, #FD0A00 3.91%, #FD0B00 4.3%, #FD0C00 4.69%, #FD0D00 5.08%, #FD0E00 5.47%, #FD0F00 5.86%, #FD1000 6.25%, #FD1100 6.64%, #FD1200 7.03%, #FD1300 7.42%, #FD1400 7.81%, #FD1500 8.21%, #FD1600 8.6%, #FD1700 8.99%, #FD1800 9.38%, #FD1900 9.77%, #FD1A00 10.16%, #FD1B00 10.55%, #FD1C00 10.94%, #FD1D00 11.33%, #FD1E00 11.72%, #FD1F00 12.11%, #FD2000 12.5%, #FD2100 12.89%, #FD2200 13.28%, #FD2300 13.67%, #FD2400 14.06%, #FD2500 14.46%, #FD2600 14.85%, #FC2700 15.24%, #FC2800 15.63%, #FC2900 16.02%, #FC2A00 16.41%, #FC2B00 16.8%, #FC2C00 17.19%, #FC2D00 17.58%, #FC2E00 17.97%, #FC2F00 18.36%, #FC3000 18.75%, #FC3100 19.14%, #FC3200 19.53%, #FC3300 19.92%, #FC3400 20.31%, #FC3500 20.71%, #FC3600 21.1%, #FC3700 21.49%, #FC3800 21.88%, #FC3900 22.27%, #FC3A00 22.66%, #FC3B00 23.05%, #FC3C00 23.44%, #FC3D00 23.83%, #FC3E00 24.22%, #FC3F00 24.61%, #FC4001 25%, #FC4101 25.39%, #FC4201 25.78%, #FC4301 26.17%, #FC4401 26.56%, #FC4501 26.96%, #FC4601 27.35%, #FC4701 27.74%, #FC4801 28.13%, #FC4901 28.52%, #FC4A01 28.91%, #FC4B01 29.3%, #FC4C01 29.69%, #FC4D01 30.08%, #FC4E01 30.47%, #FC4F01 30.86%, #FC5001 31.25%, #FC5101 31.64%, #FC5201 32.03%, #FC5301 32.42%, #FC5401 32.81%, #FC5501 33.21%, #FC5601 33.6%, #FC5701 33.99%, #FC5801 34.38%, #FC5901 34.77%, #FC5A01 35.16%, #FC5B01 35.55%, #FC5C01 35.94%, #FC5D01 36.33%, #FC5E01 36.72%, #FC5F01 37.11%, #FC6001 37.5%, #FC6101 37.89%, #FC6201 38.28%, #FC6301 38.67%, #FC6401 39.06%, #FC6501 39.46%, #FC6601 39.85%, #FC6701 40.24%, #FC6801 40.63%, #FC6901 41.02%, #FC6A01 41.41%, #FC6B01 41.8%, #FC6C01 42.19%, #FC6D01 42.58%, #FC6E01 42.97%, #FC6F01 43.36%, #FC7001 43.75%, #FC7101 44.14%, #FC7201 44.53%, #FC7301 44.92%, #FC7401 45.31%, #FC7501 45.71%, #FC7601 46.1%, #FC7701 46.49%, #FC7801 46.88%, #FC7901 47.27%, #FB7A01 47.66%, #FB7B01 48.05%, #FB7C01 48.44%, #FB7D01 48.83%, #FB7E01 49.22%, #FB7F01 49.61%, #FB7F01 50%, #FB8001 50.39%, #FB8101 50.78%, #FB8201 51.17%, #FB8301 51.56%, #FB8401 51.96%, #FB8501 52.35%, #FB8601 52.74%, #FB8701 53.13%, #FB8801 53.52%, #FB8901 53.91%, #FB8A01 54.3%, #FB8B01 54.69%, #FB8C01 55.08%, #FB8D01 55.47%, #FB8E01 55.86%, #FB8F01 56.25%, #FB9001 56.64%, #FB9101 57.03%, #FB9201 57.42%, #FB9301 57.81%, #FB9401 58.21%, #FB9501 58.6%, #FB9601 58.99%, #FB9701 59.38%, #FB9801 59.77%, #FB9901 60.16%, #FB9A01 60.55%, #FB9B01 60.94%, #FB9C01 61.33%, #FB9D01 61.72%, #FB9E01 62.11%, #FB9F01 62.5%, #FBA001 62.89%, #FBA101 63.28%, #FBA201 63.67%, #FBA301 64.06%, #FBA401 64.46%, #FBA501 64.85%, #FBA601 65.24%, #FBA701 65.63%, #FBA801 66.02%, #FBA901 66.41%, #FBAA01 66.8%, #FBAB01 67.19%, #FBAC01 67.58%, #FBAD01 67.97%, #FBAE01 68.36%, #FBAF01 68.75%, #FBB001 69.14%, #FBB101 69.53%, #FBB201 69.92%, #FBB301 70.31%, #FBB401 70.71%, #FBB501 71.1%, #FBB601 71.49%, #FBB701 71.88%, #FBB801 72.27%, #FBB901 72.66%, #FBBA01 73.05%, #FBBB01 73.44%, #FBBC02 73.83%, #FBBD02 74.22%, #FBBE02 74.61%, #FBBF02 75%, #FBC002 75.39%, #FBC102 75.78%, #FBC202 76.17%, #FBC302 76.56%, #FBC402 76.96%, #FBC502 77.35%, #FBC602 77.74%, #FBC702 78.13%, #FBC802 78.52%, #FBC902 78.91%, #FBCA02 79.3%, #FBCB02 79.69%, #FBCC02 80.08%, #FACD02 80.47%, #FACE02 80.86%, #FACF02 81.25%, #FAD002 81.64%, #FAD102 82.03%, #FAD202 82.42%, #FAD302 82.81%, #FAD402 83.21%, #FAD502 83.6%, #FAD602 83.99%, #FAD702 84.38%, #FAD802 84.77%, #FAD902 85.16%, #FADA02 85.55%, #FADB02 85.94%, #FADC02 86.33%, #FADD02 86.72%, #FADE02 87.11%, #FADF02 87.5%, #FAE002 87.89%, #FAE102 88.28%, #FAE202 88.67%, #FAE302 89.06%, #FAE402 89.46%, #FAE502 89.85%, #FAE602 90.24%, #FAE702 90.63%, #FAE802 91.02%, #FAE902 91.41%, #FAEA02 91.8%, #FAEB02 92.19%, #FAEC02 92.58%, #FAED02 92.97%, #FAEE02 93.36%, #FAEF02 93.75%, #FAF002 94.14%, #FAF102 94.53%, #FAF202 94.92%, #FAF302 95.31%, #FAF402 95.71%, #FAF502 96.1%, #FAF602 96.49%, #FAF702 96.88%, #FAF802 97.27%, #FAF902 97.66%, #FAFA02 98.05%, #FAFB02 98.44%, #FAFC02 98.83%, #FAFD02 99.22%, #FAFE02 99.61%, #FAFF02 100%)",
    },
    {
      name: "Priyanka",
      country: "India",
      flag: India1,
      image: India,
      gradient:
        "linear-gradient(90deg, #FA3C00 0%, #FA3E03 0.39%, #FA4006 0.78%, #FA4309 1.17%, #FA450C 1.56%, #FA470F 1.96%, #FA4912 2.35%, #FA4C15 2.74%, #FA4E18 3.13%, #FA501B 3.52%, #FA521E 3.91%, #FB5521 4.3%, #FB5723 4.69%, #FB5926 5.08%, #FB5B29 5.47%, #FB5E2C 5.86%, #FB602F 6.25%, #FB6232 6.64%, #FB6435 7.03%, #FB6738 7.42%, #FB693B 7.81%, #FB6B3E 8.21%, #FB6D41 8.6%, #FB7044 8.99%, #FB7247 9.38%, #FB744A 9.77%, #FB764D 10.16%, #FC7950 10.55%, #FC7B53 10.94%, #FC7D56 11.33%, #FC7F59 11.72%, #FC825C 12.11%, #FC845F 12.5%, #FC8662 12.89%, #FC8964 13.28%, #FC8B67 13.67%, #FC8D6A 14.06%, #FC8F6D 14.46%, #FC9270 14.85%, #FC9473 15.24%, #FC9676 15.63%, #FC9879 16.02%, #FC9B7C 16.41%, #FC9D7F 16.8%, #FD9F82 17.19%, #FDA185 17.58%, #FDA488 17.97%, #FDA68B 18.36%, #FDA88E 18.75%, #FDAA91 19.14%, #FDAD94 19.53%, #FDAF97 19.92%, #FDB19A 20.31%, #FDB39D 20.71%, #FDB6A0 21.1%, #FDB8A3 21.49%, #FDBAA5 21.88%, #FDBCA8 22.27%, #FDBFAB 22.66%, #FDC1AE 23.05%, #FDC3B1 23.44%, #FEC5B4 23.83%, #FEC8B7 24.22%, #FECABA 24.61%, #FECCBD 25%, #FECEC0 25.39%, #FED1C3 25.78%, #FED3C6 26.17%, #FED5C9 26.56%, #FED7CC 26.96%, #FEDACF 27.35%, #FEDCD2 27.74%, #FEDED5 28.13%, #FEE0D8 28.52%, #FEE3DB 28.91%, #FEE5DE 29.3%, #FEE7E1 29.69%, #FFE9E4 30.08%, #FFECE7 30.47%, #FFEEE9 30.86%, #FFF0EC 31.25%, #FFF2EF 31.64%, #FFF5F2 32.03%, #FFF7F5 32.42%, #FFF9F8 32.81%, #FEFAF9 33.21%, #FDFBFB 33.6%, #FAFAF9 33.99%, #F7F9F7 34.38%, #F4F8F6 34.77%, #F1F7F4 35.16%, #EEF6F2 35.55%, #EBF5F1 35.94%, #E8F4EF 36.33%, #E5F3ED 36.72%, #E2F2EC 37.11%, #DFF1EA 37.5%, #DCF0E8 37.89%, #D9EFE6 38.28%, #D6EDE5 38.67%, #D3ECE3 39.06%, #D0EBE1 39.46%, #CDEAE0 39.85%, #CAE9DE 40.24%, #C7E8DC 40.63%, #C4E7DB 41.02%, #C1E6D9 41.41%, #BEE5D7 41.8%, #BBE4D6 42.19%, #B8E3D4 42.58%, #B5E2D2 42.97%, #B2E1D1 43.36%, #AFE0CF 43.75%, #ACDFCD 44.14%, #A9DECC 44.53%, #A6DDCA 44.92%, #A3DCC8 45.31%, #A0DBC7 45.71%, #9DD9C5 46.1%, #9AD8C3 46.49%, #97D7C1 46.88%, #94D6C0 47.27%, #91D5BE 47.66%, #8ED4BC 48.05%, #8BD3BB 48.44%, #88D2B9 48.83%, #85D1B7 49.22%, #82D0B6 49.61%, #80CFB4 50%, #7DCEB2 50.39%, #7ACDB1 50.78%, #77CCAF 51.17%, #74CBAD 51.56%, #71CAAC 51.96%, #6EC9AA 52.35%, #6BC8A8 52.74%, #68C7A7 53.13%, #65C5A5 53.52%, #62C4A3 53.91%, #5FC3A2 54.3%, #5CC2A0 54.69%, #59C19E 55.08%, #56C09C 55.47%, #53BF9B 55.86%, #50BE99 56.25%, #4DBD97 56.64%, #4ABC96 57.03%, #47BB94 57.42%, #44BA92 57.81%, #41B991 58.21%, #3EB88F 58.6%, #3BB78D 58.99%, #38B68C 59.38%, #35B58A 59.77%, #32B488 60.16%, #2FB387 60.55%, #2CB185 60.94%, #29B083 61.33%, #26AF82 61.72%, #23AE80 62.11%, #20AD7E 62.5%, #1DAC7D 62.89%, #1AAB7B 63.28%, #17AA79 63.67%, #14A977 64.06%, #11A876 64.46%, #0EA774 64.85%, #0BA672 65.24%, #08A571 65.63%, #05A46F 66.02%, #02A36D 66.41%, #02A16D 66.8%, #01A06D 67.19%, #029E6E 67.58%, #039C6E 67.97%, #049A6F 68.36%, #05986F 68.75%, #069670 69.14%, #069471 69.53%, #079271 69.92%, #089072 70.31%, #098E73 70.71%, #0A8D73 71.1%, #0B8B74 71.49%, #0C8974 71.88%, #0D8775 72.27%, #0E8576 72.66%, #0E8376 73.05%, #0F8177 73.44%, #107F78 73.83%, #117D78 74.22%, #127B79 74.61%, #137A7A 75%, #14787A 75.39%, #15767B 75.78%, #16747B 76.17%, #17727C 76.56%, #17707D 76.96%, #186E7D 77.35%, #196C7E 77.74%, #1A6A7F 78.13%, #1B687F 78.52%, #1C6780 78.91%, #1D6580 79.3%, #1E6381 79.69%, #1F6182 80.08%, #1F5F82 80.47%, #205D83 80.86%, #215B84 81.25%, #225984 81.64%, #235785 82.03%, #245586 82.42%, #255486 82.81%, #265287 83.21%, #275087 83.6%, #274E88 83.99%, #284C89 84.38%, #294A89 84.77%, #2A488A 85.16%, #2B468B 85.55%, #2C448B 85.94%, #2D428C 86.33%, #2E418C 86.72%, #2F3F8D 87.11%, #2F3D8E 87.5%, #303B8E 87.89%, #31398F 88.28%, #323790 88.67%, #333590 89.06%, #343391 89.46%, #353192 89.85%, #362F92 90.24%, #372E93 90.63%, #372C93 91.02%, #382A94 91.41%, #392895 91.8%, #3A2695 92.19%, #3B2496 92.58%, #3C2297 92.97%, #3D2097 93.36%, #3E1E98 93.75%, #3F1C98 94.14%, #401B99 94.53%, #40199A 94.92%, #41179A 95.31%, #42159B 95.71%, #43139C 96.1%, #44119C 96.49%, #450F9D 96.88%, #460D9E 97.27%, #470B9E 97.66%, #48099F 98.05%, #48089F 98.44%, #4906A0 98.83%, #4A04A1 99.22%, #4B02A1 99.61%, #4C00A2 100%)",
    },
    {
      name: "Jing",
      country: "China",
      flag: China1,
      image: China,
      gradient:
        "linear-gradient(90deg, #FAFF00 0%, #FAFE00 0.39%, #FAFD00 0.78%, #FAFC00 1.17%, #FAFB00 1.56%, #FAFA00 1.96%, #FAF900 2.35%, #FAF800 2.74%, #FAF700 3.13%, #FAF600 3.52%, #FAF500 3.91%, #FAF400 4.3%, #FAF300 4.69%, #FAF200 5.08%, #FAF100 5.47%, #FAF000 5.86%, #FAEF00 6.25%, #FAEE00 6.64%, #FAED00 7.03%, #FAEC00 7.42%, #FAEB00 7.81%, #FAEA00 8.21%, #FAE900 8.6%, #FAE800 8.99%, #FAE700 9.38%, #FAE600 9.77%, #FAE500 10.16%, #FAE400 10.55%, #FAE300 10.94%, #FAE200 11.33%, #FAE100 11.72%, #FBE000 12.11%, #FBDF00 12.5%, #FBDE00 12.89%, #FBDD00 13.28%, #FBDC00 13.67%, #FBDB00 14.06%, #FBDA00 14.46%, #FBD900 14.85%, #FBD800 15.24%, #FBD700 15.63%, #FBD600 16.02%, #FBD500 16.41%, #FBD400 16.8%, #FBD300 17.19%, #FBD200 17.58%, #FBD100 17.97%, #FBD000 18.36%, #FBCF00 18.75%, #FBCE00 19.14%, #FBCD00 19.53%, #FBCC00 19.92%, #FBCB00 20.31%, #FBCA00 20.71%, #FBC900 21.1%, #FBC800 21.49%, #FBC700 21.88%, #FBC600 22.27%, #FBC500 22.66%, #FBC400 23.05%, #FBC300 23.44%, #FBC200 23.83%, #FBC100 24.22%, #FBC000 24.61%, #FBBF00 25%, #FBBE00 25.39%, #FBBD00 25.78%, #FBBC00 26.17%, #FBBB00 26.56%, #FBBA00 26.96%, #FBB900 27.35%, #FBB800 27.74%, #FBB700 28.13%, #FBB600 28.52%, #FBB500 28.91%, #FBB400 29.3%, #FBB300 29.69%, #FBB200 30.08%, #FBB100 30.47%, #FBB000 30.86%, #FBAF00 31.25%, #FCAE00 31.64%, #FCAD00 32.03%, #FCAC00 32.42%, #FCAB00 32.81%, #FCAA00 33.21%, #FCA900 33.6%, #FCA800 33.99%, #FCA700 34.38%, #FCA600 34.77%, #FCA500 35.16%, #FCA400 35.55%, #FCA300 35.94%, #FCA200 36.33%, #FCA100 36.72%, #FCA000 37.11%, #FC9F00 37.5%, #FC9E00 37.89%, #FC9D00 38.28%, #FC9C00 38.67%, #FC9B00 39.06%, #FC9A00 39.46%, #FC9900 39.85%, #FC9800 40.24%, #FC9700 40.63%, #FC9600 41.02%, #FC9500 41.41%, #FC9400 41.8%, #FC9300 42.19%, #FC9200 42.58%, #FC9100 42.97%, #FC9000 43.36%, #FC8F00 43.75%, #FC8E00 44.14%, #FC8D00 44.53%, #FC8C00 44.92%, #FC8B00 45.31%, #FC8A00 45.71%, #FC8900 46.1%, #FC8800 46.49%, #FC8700 46.88%, #FC8600 47.27%, #FC8500 47.66%, #FC8400 48.05%, #FC8300 48.44%, #FC8200 48.83%, #FC8100 49.22%, #FC8000 49.61%, #FC8000 50%, #FC7F00 50.39%, #FC7E00 50.78%, #FD7D00 51.17%, #FD7C00 51.56%, #FD7B00 51.96%, #FD7A00 52.35%, #FD7900 52.74%, #FD7800 53.13%, #FD7700 53.52%, #FD7600 53.91%, #FD7500 54.3%, #FD7400 54.69%, #FD7300 55.08%, #FD7200 55.47%, #FD7100 55.86%, #FD7000 56.25%, #FD6F00 56.64%, #FD6E00 57.03%, #FD6D00 57.42%, #FD6C00 57.81%, #FD6B00 58.21%, #FD6A00 58.6%, #FD6900 58.99%, #FD6800 59.38%, #FD6700 59.77%, #FD6600 60.16%, #FD6500 60.55%, #FD6400 60.94%, #FD6300 61.33%, #FD6200 61.72%, #FD6100 62.11%, #FD6000 62.5%, #FD5F00 62.89%, #FD5E00 63.28%, #FD5D00 63.67%, #FD5C00 64.06%, #FD5B00 64.46%, #FD5A00 64.85%, #FD5900 65.24%, #FD5800 65.63%, #FD5700 66.02%, #FD5600 66.41%, #FD5500 66.8%, #FD5400 67.19%, #FD5300 67.58%, #FD5200 67.97%, #FD5100 68.36%, #FD5000 68.75%, #FD4F00 69.14%, #FD4E00 69.53%, #FD4D00 69.92%, #FD4C00 70.31%, #FE4B00 70.71%, #FE4A00 71.1%, #FE4900 71.49%, #FE4800 71.88%, #FE4700 72.27%, #FE4600 72.66%, #FE4500 73.05%, #FE4400 73.44%, #FE4300 73.83%, #FE4200 74.22%, #FE4100 74.61%, #FE4000 75%, #FE3F00 75.39%, #FE3E00 75.78%, #FE3D00 76.17%, #FE3C00 76.56%, #FE3B00 76.96%, #FE3A00 77.35%, #FE3900 77.74%, #FE3800 78.13%, #FE3700 78.52%, #FE3600 78.91%, #FE3500 79.3%, #FE3400 79.69%, #FE3300 80.08%, #FE3200 80.47%, #FE3100 80.86%, #FE3000 81.25%, #FE2F00 81.64%, #FE2E00 82.03%, #FE2D00 82.42%, #FE2C00 82.81%, #FE2B00 83.21%, #FE2A00 83.6%, #FE2900 83.99%, #FE2800 84.38%, #FE2700 84.77%, #FE2600 85.16%, #FE2500 85.55%, #FE2400 85.94%, #FE2300 86.33%, #FE2200 86.72%, #FE2100 87.11%, #FE2000 87.5%, #FE1F00 87.89%, #FE1E00 88.28%, #FE1D00 88.67%, #FE1C00 89.06%, #FE1B00 89.46%, #FE1A00 89.85%, #FE1900 90.24%, #FF1800 90.63%, #FF1700 91.02%, #FF1600 91.41%, #FF1500 91.8%, #FF1400 92.19%, #FF1300 92.58%, #FF1200 92.97%, #F10 93.36%, #FF1000 93.75%, #FF0F00 94.14%, #FF0E00 94.53%, #FF0D00 94.92%, #FF0C00 95.31%, #FF0B00 95.71%, #FF0A00 96.1%, #FF0900 96.49%, #FF0800 96.88%, #FF0700 97.27%, #FF0600 97.66%, #FF0500 98.05%, #FF0400 98.44%, #FF0300 98.83%, #FF0200 99.22%, #FF0100 99.61%, #F00 100%)",
    },
    {
      name: "Carmela",
      country: "Philippines",
      flag: Philippines1,
      image: Philippines,
      gradient:
        "linear-gradient(90deg, #4A00FF 0%, #4B02FF 0.39%, #4D04FF 0.78%, #4E06FF 1.17%, #5008FF 1.56%, #510AFF 1.95%, #520CFF 2.34%, #540EFF 2.73%, #5510FF 3.12%, #5712FF 3.51%, #5814FF 3.9%, #5916FF 4.29%, #5B18FF 4.68%, #5C1AFF 5.07%, #5E1CFF 5.47%, #5F1EFF 5.86%, #6120FF 6.25%, #6222FF 6.64%, #6324FF 7.03%, #6526FF 7.42%, #6628FF 7.81%, #682AFF 8.2%, #692CFF 8.59%, #6A2EFF 8.98%, #6C30FF 9.37%, #6D32FF 9.76%, #6F34FF 10.15%, #7036FF 10.54%, #7238FF 10.93%, #733AFF 11.32%, #743CFF 11.71%, #763EFF 12.1%, #7740FF 12.49%, #7942FF 12.88%, #7A44FF 13.27%, #7B46FF 13.66%, #7D48FF 14.05%, #7E4AFF 14.44%, #804CFF 14.83%, #814EFF 15.22%, #8250FF 15.61%, #8452FF 16%, #8554FF 16.4%, #8756FF 16.79%, #8858FF 17.18%, #8A5AFF 17.57%, #8B5CFF 17.96%, #8C5EFF 18.35%, #8E60FF 18.74%, #8F62FF 19.13%, #9164FF 19.52%, #9266FF 19.91%, #9368FF 20.3%, #956AFF 20.69%, #966CFF 21.08%, #986DFF 21.47%, #996FFF 21.86%, #9B71FF 22.25%, #9C73FF 22.64%, #9D75FF 23.03%, #9F77FF 23.42%, #A079FF 23.81%, #A27BFF 24.2%, #A37DFF 24.59%, #A47FFF 24.98%, #A681FF 25.37%, #A783FF 25.76%, #A985FF 26.15%, #AA87FF 26.54%, #AB89FF 26.93%, #AD8BFF 27.33%, #AE8DFF 27.72%, #B08FFF 28.11%, #B191FF 28.5%, #B393FF 28.89%, #B495FF 29.28%, #B597FF 29.67%, #B799FF 30.06%, #B89BFF 30.45%, #BA9DFF 30.84%, #BB9FFF 31.23%, #BCA1FF 31.62%, #BEA3FF 32.01%, #BFA5FF 32.4%, #C1A7FF 32.79%, #C2A9FF 33.18%, #C4ABFF 33.57%, #C5ADFF 33.96%, #C6AFFF 34.35%, #C8B1FF 34.74%, #C9B3FF 35.13%, #CBB5FF 35.52%, #CCB7FF 35.91%, #CDB9FF 36.3%, #CFBBFF 36.69%, #D0BDFF 37.08%, #D2BFFF 37.47%, #D3C1FF 37.86%, #D4C3FF 38.26%, #D6C5FF 38.65%, #D7C7FF 39.04%, #D9C9FF 39.43%, #DACBFF 39.82%, #DCCDFF 40.21%, #DDCFFF 40.6%, #DED1FF 40.99%, #E0D3FF 41.38%, #E1D5FF 41.77%, #E3D7FF 42.16%, #E4D9FF 42.55%, #E5DBFF 42.94%, #E7DDFF 43.33%, #E8DFFF 43.72%, #EAE1FF 44.11%, #EBE3FF 44.5%, #ECE5FF 44.89%, #EEE7FF 45.28%, #EFE9FF 45.67%, #F1EBFF 46.06%, #F2EDFF 46.45%, #F4EFFF 46.84%, #F5F1FF 47.23%, #F6F3FF 47.62%, #F8F5FF 48.01%, #F9F7FF 48.4%, #FBF9FF 48.79%, #FCFBFF 49.19%, #FDFDFF 49.58%, #FFF 49.97%, #FFFDFD 50.36%, #FFFBFB 50.75%, #FFF9F9 51.14%, #FFF7F7 51.53%, #FEF5F5 51.92%, #FEF3F3 52.31%, #FEF1F1 52.7%, #FEEFEF 53.09%, #FEEDED 53.48%, #FEEBEB 53.87%, #FEE9E9 54.26%, #FEE7E7 54.65%, #FDE5E5 55.04%, #FDE3E3 55.43%, #FDE1E1 55.82%, #FDDFDF 56.21%, #FDDDDD 56.6%, #FDDBDB 56.99%, #FDD9D9 57.38%, #FDD7D7 57.77%, #FCD5D5 58.16%, #FCD3D3 58.55%, #FCD1D1 58.94%, #FCCFCF 59.33%, #FCCDCD 59.72%, #FCCBCB 60.12%, #FCC9C9 60.51%, #FBC7C7 60.9%, #FBC5C5 61.29%, #FBC3C3 61.68%, #FBC1C1 62.07%, #FBBFBF 62.46%, #FBBDBD 62.85%, #FBBBBB 63.24%, #FBB9B9 63.63%, #FAB8B8 64.02%, #FAB6B6 64.41%, #FAB4B4 64.8%, #FAB2B2 65.19%, #FAB0B0 65.58%, #FAAEAE 65.97%, #FAACAC 66.36%, #FAAAAA 66.75%, #F9A8A8 67.14%, #F9A6A6 67.53%, #F9A4A4 67.92%, #F9A2A2 68.31%, #F9A0A0 68.7%, #F99E9E 69.09%, #F99C9C 69.48%, #F99A9A 69.87%, #F89898 70.26%, #F89696 70.65%, #F89494 71.05%, #F89292 71.44%, #F89090 71.83%, #F88E8E 72.22%, #F88C8C 72.61%, #F88A8A 73%, #F78888 73.39%, #F78686 73.78%, #F78484 74.17%, #F78282 74.56%, #F78080 74.95%, #F77E7E 75.34%, #F77C7C 75.73%, #F77A7A 76.12%, #F67878 76.51%, #F67676 76.9%, #F67474 77.29%, #F67272 77.68%, #F67070 78.07%, #F66E6E 78.46%, #F66C6C 78.85%, #F66A6A 79.24%, #F56868 79.63%, #F56666 80.02%, #F56464 80.41%, #F56262 80.8%, #F56060 81.19%, #F55E5E 81.58%, #F55C5C 81.98%, #F55A5A 82.37%, #F45858 82.76%, #F45656 83.15%, #F45454 83.54%, #F45252 83.93%, #F45050 84.32%, #F44E4E 84.71%, #F44C4C 85.1%, #F44A4A 85.49%, #F34848 85.88%, #F34646 86.27%, #F34444 86.66%, #F34242 87.05%, #F34040 87.44%, #F33E3E 87.83%, #F33C3C 88.22%, #F33A3A 88.61%, #F23838 89%, #F23636 89.39%, #F23434 89.78%, #F23232 90.17%, #F23030 90.56%, #F22E2E 90.95%, #F22C2C 91.34%, #F22A2A 91.73%, #F12828 92.12%, #F12626 92.51%, #F12424 92.91%, #F12222 93.3%, #F12020 93.69%, #F11E1E 94.08%, #F11C1C 94.47%, #F11A1A 94.86%, #F01818 95.25%, #F01616 95.64%, #F01414 96.03%, #F01212 96.42%, #F01010 96.81%, #F00E0E 97.2%, #F00C0C 97.59%, #F00A0A 97.98%, #EF0808 98.37%, #EF0606 98.76%, #EF0404 99.15%, #EF0202 99.54%, #EF0000 99.93%)",
    },
    {
      name: "Minh",
      country: "Vietnam",
      flag: Vietnam1,
      image: Vietnam,
      gradient:
        " linear-gradient(90deg, #FD0000 0%, #FD0100 0.39%, #FD0200 0.78%, #FD0300 1.17%, #FD0400 1.56%, #FD0500 1.96%, #FD0600 2.35%, #FD0700 2.74%, #FD0800 3.13%, #FD0900 3.52%, #FD0A00 3.91%, #FD0B00 4.3%, #FD0C00 4.69%, #FD0D00 5.08%, #FD0E00 5.47%, #FD0F00 5.86%, #FD1000 6.25%, #FD1100 6.64%, #FD1200 7.03%, #FD1300 7.42%, #FD1400 7.81%, #FD1500 8.21%, #FD1600 8.6%, #FD1700 8.99%, #FD1800 9.38%, #FD1900 9.77%, #FD1A00 10.16%, #FD1B00 10.55%, #FD1C00 10.94%, #FD1D00 11.33%, #FD1E00 11.72%, #FD1F00 12.11%, #FD2000 12.5%, #FD2100 12.89%, #FD2200 13.28%, #FD2300 13.67%, #FD2400 14.06%, #FD2500 14.46%, #FD2600 14.85%, #FC2700 15.24%, #FC2800 15.63%, #FC2900 16.02%, #FC2A00 16.41%, #FC2B00 16.8%, #FC2C00 17.19%, #FC2D00 17.58%, #FC2E00 17.97%, #FC2F00 18.36%, #FC3000 18.75%, #FC3100 19.14%, #FC3200 19.53%, #FC3300 19.92%, #FC3400 20.31%, #FC3500 20.71%, #FC3600 21.1%, #FC3700 21.49%, #FC3800 21.88%, #FC3900 22.27%, #FC3A00 22.66%, #FC3B00 23.05%, #FC3C00 23.44%, #FC3D00 23.83%, #FC3E00 24.22%, #FC3F00 24.61%, #FC4001 25%, #FC4101 25.39%, #FC4201 25.78%, #FC4301 26.17%, #FC4401 26.56%, #FC4501 26.96%, #FC4601 27.35%, #FC4701 27.74%, #FC4801 28.13%, #FC4901 28.52%, #FC4A01 28.91%, #FC4B01 29.3%, #FC4C01 29.69%, #FC4D01 30.08%, #FC4E01 30.47%, #FC4F01 30.86%, #FC5001 31.25%, #FC5101 31.64%, #FC5201 32.03%, #FC5301 32.42%, #FC5401 32.81%, #FC5501 33.21%, #FC5601 33.6%, #FC5701 33.99%, #FC5801 34.38%, #FC5901 34.77%, #FC5A01 35.16%, #FC5B01 35.55%, #FC5C01 35.94%, #FC5D01 36.33%, #FC5E01 36.72%, #FC5F01 37.11%, #FC6001 37.5%, #FC6101 37.89%, #FC6201 38.28%, #FC6301 38.67%, #FC6401 39.06%, #FC6501 39.46%, #FC6601 39.85%, #FC6701 40.24%, #FC6801 40.63%, #FC6901 41.02%, #FC6A01 41.41%, #FC6B01 41.8%, #FC6C01 42.19%, #FC6D01 42.58%, #FC6E01 42.97%, #FC6F01 43.36%, #FC7001 43.75%, #FC7101 44.14%, #FC7201 44.53%, #FC7301 44.92%, #FC7401 45.31%, #FC7501 45.71%, #FC7601 46.1%, #FC7701 46.49%, #FC7801 46.88%, #FC7901 47.27%, #FB7A01 47.66%, #FB7B01 48.05%, #FB7C01 48.44%, #FB7D01 48.83%, #FB7E01 49.22%, #FB7F01 49.61%, #FB7F01 50%, #FB8001 50.39%, #FB8101 50.78%, #FB8201 51.17%, #FB8301 51.56%, #FB8401 51.96%, #FB8501 52.35%, #FB8601 52.74%, #FB8701 53.13%, #FB8801 53.52%, #FB8901 53.91%, #FB8A01 54.3%, #FB8B01 54.69%, #FB8C01 55.08%, #FB8D01 55.47%, #FB8E01 55.86%, #FB8F01 56.25%, #FB9001 56.64%, #FB9101 57.03%, #FB9201 57.42%, #FB9301 57.81%, #FB9401 58.21%, #FB9501 58.6%, #FB9601 58.99%, #FB9701 59.38%, #FB9801 59.77%, #FB9901 60.16%, #FB9A01 60.55%, #FB9B01 60.94%, #FB9C01 61.33%, #FB9D01 61.72%, #FB9E01 62.11%, #FB9F01 62.5%, #FBA001 62.89%, #FBA101 63.28%, #FBA201 63.67%, #FBA301 64.06%, #FBA401 64.46%, #FBA501 64.85%, #FBA601 65.24%, #FBA701 65.63%, #FBA801 66.02%, #FBA901 66.41%, #FBAA01 66.8%, #FBAB01 67.19%, #FBAC01 67.58%, #FBAD01 67.97%, #FBAE01 68.36%, #FBAF01 68.75%, #FBB001 69.14%, #FBB101 69.53%, #FBB201 69.92%, #FBB301 70.31%, #FBB401 70.71%, #FBB501 71.1%, #FBB601 71.49%, #FBB701 71.88%, #FBB801 72.27%, #FBB901 72.66%, #FBBA01 73.05%, #FBBB01 73.44%, #FBBC02 73.83%, #FBBD02 74.22%, #FBBE02 74.61%, #FBBF02 75%, #FBC002 75.39%, #FBC102 75.78%, #FBC202 76.17%, #FBC302 76.56%, #FBC402 76.96%, #FBC502 77.35%, #FBC602 77.74%, #FBC702 78.13%, #FBC802 78.52%, #FBC902 78.91%, #FBCA02 79.3%, #FBCB02 79.69%, #FBCC02 80.08%, #FACD02 80.47%, #FACE02 80.86%, #FACF02 81.25%, #FAD002 81.64%, #FAD102 82.03%, #FAD202 82.42%, #FAD302 82.81%, #FAD402 83.21%, #FAD502 83.6%, #FAD602 83.99%, #FAD702 84.38%, #FAD802 84.77%, #FAD902 85.16%, #FADA02 85.55%, #FADB02 85.94%, #FADC02 86.33%, #FADD02 86.72%, #FADE02 87.11%, #FADF02 87.5%, #FAE002 87.89%, #FAE102 88.28%, #FAE202 88.67%, #FAE302 89.06%, #FAE402 89.46%, #FAE502 89.85%, #FAE602 90.24%, #FAE702 90.63%, #FAE802 91.02%, #FAE902 91.41%, #FAEA02 91.8%, #FAEB02 92.19%, #FAEC02 92.58%, #FAED02 92.97%, #FAEE02 93.36%, #FAEF02 93.75%, #FAF002 94.14%, #FAF102 94.53%, #FAF202 94.92%, #FAF302 95.31%, #FAF402 95.71%, #FAF502 96.1%, #FAF602 96.49%, #FAF702 96.88%, #FAF802 97.27%, #FAF902 97.66%, #FAFA02 98.05%, #FAFB02 98.44%, #FAFC02 98.83%, #FAFD02 99.22%, #FAFE02 99.61%, #FAFF02 100%)",
    },
    {
      name: "Asma",
      country: "Pakistan",
      flag: Pakistan1,
      image: Pakistan,
      gradient:
        " linear-gradient(90deg, #FFFDFD 0%, #FEFCFC 0.39%, #FEFCFC 0.78%, #FDFBFB 1.17%, #FCFAFA 1.56%, #FCFAFA 1.96%, #FBF9F9 2.35%, #FAF8F8 2.74%, #FAF8F8 3.13%, #F9F7F7 3.52%, #F8F6F6 3.91%, #F8F6F6 4.3%, #F7F5F5 4.69%, #F6F4F4 5.08%, #F6F4F4 5.47%, #F5F3F3 5.86%, #F4F2F2 6.25%, #F4F2F2 6.64%, #F3F1F1 7.03%, #F2F0F0 7.42%, #F2F0F0 7.81%, #F1EFEF 8.21%, #F0EFEF 8.6%, #F0EEEE 8.99%, #EFEDED 9.38%, #EEEDED 9.77%, #EEECEC 10.16%, #EDEBEB 10.55%, #ECEBEB 10.94%, #ECEAEA 11.33%, #EBE9E9 11.72%, #EAE9E9 12.11%, #EAE8E8 12.5%, #E9E7E7 12.89%, #E8E7E7 13.28%, #E8E6E6 13.67%, #E7E5E5 14.06%, #E6E5E5 14.46%, #E6E4E4 14.85%, #E5E3E3 15.24%, #E4E3E3 15.63%, #E4E2E2 16.02%, #E3E1E1 16.41%, #E2E1E1 16.8%, #E2E0E0 17.19%, #E1DFDF 17.58%, #E0DFDF 17.97%, #E0DEDE 18.36%, #DFDDDD 18.75%, #DEDDDD 19.14%, #DEDCDC 19.53%, #DDDBDB 19.92%, #DCDBDB 20.31%, #DCDADA 20.71%, #DBDADA 21.1%, #DAD9D9 21.49%, #DAD8D8 21.88%, #D9D8D8 22.27%, #D8D7D7 22.66%, #D8D6D6 23.05%, #D7D6D6 23.44%, #D6D5D5 23.83%, #D6D4D4 24.22%, #D5D4D4 24.61%, #D4D3D3 25%, #D4D2D2 25.39%, #D3D2D2 25.78%, #D2D1D1 26.17%, #D2D0D0 26.56%, #D1D0D0 26.96%, #D0CFCF 27.35%, #D0CECE 27.74%, #CFCECE 28.13%, #CECDCD 28.52%, #CECCCC 28.91%, #CDCCCC 29.3%, #CDCBCB 29.69%, #CCCACA 30.08%, #CBCACA 30.47%, #CBC9C9 30.86%, #CAC8C8 31.25%, #C9C8C8 31.64%, #C9C7C7 32.03%, #C8C6C6 32.42%, #C7C6C6 32.81%, #C7C5C5 33.21%, #C6C5C5 33.6%, #C5C4C4 33.99%, #C5C3C3 34.38%, #C4C3C3 34.77%, #C3C2C2 35.16%, #C3C1C1 35.55%, #C2C1C1 35.94%, #C1C0C0 36.33%, #C1BFBF 36.72%, #C0BFBF 37.11%, #BFBEBE 37.5%, #BFBDBD 37.89%, #BEBDBD 38.28%, #BDBCBC 38.67%, #BDBBBB 39.06%, #BCBBBB 39.46%, #BBBABA 39.85%, #BBB9B9 40.24%, #BAB9B9 40.63%, #B9B8B8 41.02%, #B9B7B7 41.41%, #B8B7B7 41.8%, #B7B6B6 42.19%, #B7B5B5 42.58%, #B6B5B5 42.97%, #B5B4B4 43.36%, #B5B3B3 43.75%, #B4B3B3 44.14%, #B3B2B2 44.53%, #B3B1B1 44.92%, #B2B1B1 45.31%, #B1B0B0 45.71%, #B1AFAF 46.1%, #B0AFAF 46.49%, #AFAEAE 46.88%, #AFAEAE 47.27%, #AEADAD 47.66%, #ADACAC 48.05%, #ADACAC 48.44%, #ACABAB 48.83%, #ABAAAA 49.22%, #ABAAAA 49.61%, #AAA9A9 50%, #A9A8A8 50.39%, #A9A8A8 50.78%, #A8A7A7 51.17%, #A7A6A6 51.56%, #A7A6A6 51.96%, #A6A5A5 52.35%, #A5A4A4 52.74%, #A5A4A4 53.13%, #A4A3A3 53.52%, #A3A2A2 53.91%, #A3A2A2 54.3%, #A2A1A1 54.69%, #A1A0A0 55.08%, #A1A0A0 55.47%, #A09F9F 55.86%, #9F9E9E 56.25%, #9F9E9E 56.64%, #9E9D9D 57.03%, #9D9C9C 57.42%, #9D9C9C 57.81%, #9C9B9B 58.21%, #9B9A9A 58.6%, #9B9A9A 58.99%, #9A9999 59.38%, #999 59.77%, #999898 60.16%, #989797 60.55%, #979797 60.94%, #979696 61.33%, #969595 61.72%, #959595 62.11%, #959494 62.5%, #949393 62.89%, #939393 63.28%, #939292 63.67%, #929191 64.06%, #919191 64.46%, #919090 64.85%, #908F8F 65.24%, #8F8F8F 65.63%, #8F8E8E 66.02%, #8E8D8D 66.41%, #8D8D8D 66.8%, #8D8C8C 67.19%, #8C8B8B 67.58%, #8B8B8B 67.97%, #8B8A8A 68.36%, #8A8989 68.75%, #898989 69.14%, #898888 69.53%, #888787 69.92%, #878787 70.31%, #878686 70.71%, #868585 71.1%, #858585 71.49%, #858484 71.88%, #848484 72.27%, #838383 72.66%, #838282 73.05%, #828282 73.44%, #818181 73.83%, #818080 74.22%, #808080 74.61%, #7F7F7F 75%, #7F7E7E 75.39%, #7E7E7E 75.78%, #7D7D7D 76.17%, #7D7C7C 76.56%, #7C7C7C 76.96%, #7B7B7B 77.35%, #7B7A7A 77.74%, #7A7A7A 78.13%, #797979 78.52%, #797878 78.91%, #787878 79.3%, #777 79.69%, #777676 80.08%, #767676 80.47%, #757575 80.86%, #757474 81.25%, #747474 81.64%, #737373 82.03%, #737272 82.42%, #727272 82.81%, #717171 83.21%, #717070 83.6%, #707070 83.99%, #6F6F6F 84.38%, #6F6F6F 84.77%, #6E6E6E 85.16%, #6D6D6D 85.55%, #6D6D6D 85.94%, #6C6C6C 86.33%, #6C6B6B 86.72%, #6B6B6B 87.11%, #6A6A6A 87.5%, #6A6969 87.89%, #696969 88.28%, #686868 88.67%, #686767 89.06%, #676767 89.46%, #666 89.85%, #666565 90.24%, #656565 90.63%, #646464 91.02%, #646363 91.41%, #636363 91.8%, #626262 92.19%, #626161 92.58%, #616161 92.97%, #606060 93.36%, #605F5F 93.75%, #5F5F5F 94.14%, #5E5E5E 94.53%, #5E5D5D 94.92%, #5D5D5D 95.31%, #5C5C5C 95.71%, #5C5B5B 96.1%, #5B5B5B 96.49%, #5A5A5A 96.88%, #5A5A5A 97.27%, #595959 97.66%, #585858 98.05%, #585858 98.44%, #575757 98.83%, #565656 99.22%, #565656 99.61%, #555 100%)",
    },
    {
      name: "Farhana",
      country: "Malaysia",
      flag: Malaysia1,
      image: Malaysia,
      gradient:
        " linear-gradient(90deg, #FFFDFD 0%, #FEFCFC 0.39%, #FEFCFC 0.78%, #FDFBFB 1.17%, #FCFAFA 1.56%, #FCFAFA 1.96%, #FBF9F9 2.35%, #FAF8F8 2.74%, #FAF8F8 3.13%, #F9F7F7 3.52%, #F8F6F6 3.91%, #F8F6F6 4.3%, #F7F5F5 4.69%, #F6F4F4 5.08%, #F6F4F4 5.47%, #F5F3F3 5.86%, #F4F2F2 6.25%, #F4F2F2 6.64%, #F3F1F1 7.03%, #F2F0F0 7.42%, #F2F0F0 7.81%, #F1EFEF 8.21%, #F0EFEF 8.6%, #F0EEEE 8.99%, #EFEDED 9.38%, #EEEDED 9.77%, #EEECEC 10.16%, #EDEBEB 10.55%, #ECEBEB 10.94%, #ECEAEA 11.33%, #EBE9E9 11.72%, #EAE9E9 12.11%, #EAE8E8 12.5%, #E9E7E7 12.89%, #E8E7E7 13.28%, #E8E6E6 13.67%, #E7E5E5 14.06%, #E6E5E5 14.46%, #E6E4E4 14.85%, #E5E3E3 15.24%, #E4E3E3 15.63%, #E4E2E2 16.02%, #E3E1E1 16.41%, #E2E1E1 16.8%, #E2E0E0 17.19%, #E1DFDF 17.58%, #E0DFDF 17.97%, #E0DEDE 18.36%, #DFDDDD 18.75%, #DEDDDD 19.14%, #DEDCDC 19.53%, #DDDBDB 19.92%, #DCDBDB 20.31%, #DCDADA 20.71%, #DBDADA 21.1%, #DAD9D9 21.49%, #DAD8D8 21.88%, #D9D8D8 22.27%, #D8D7D7 22.66%, #D8D6D6 23.05%, #D7D6D6 23.44%, #D6D5D5 23.83%, #D6D4D4 24.22%, #D5D4D4 24.61%, #D4D3D3 25%, #D4D2D2 25.39%, #D3D2D2 25.78%, #D2D1D1 26.17%, #D2D0D0 26.56%, #D1D0D0 26.96%, #D0CFCF 27.35%, #D0CECE 27.74%, #CFCECE 28.13%, #CECDCD 28.52%, #CECCCC 28.91%, #CDCCCC 29.3%, #CDCBCB 29.69%, #CCCACA 30.08%, #CBCACA 30.47%, #CBC9C9 30.86%, #CAC8C8 31.25%, #C9C8C8 31.64%, #C9C7C7 32.03%, #C8C6C6 32.42%, #C7C6C6 32.81%, #C7C5C5 33.21%, #C6C5C5 33.6%, #C5C4C4 33.99%, #C5C3C3 34.38%, #C4C3C3 34.77%, #C3C2C2 35.16%, #C3C1C1 35.55%, #C2C1C1 35.94%, #C1C0C0 36.33%, #C1BFBF 36.72%, #C0BFBF 37.11%, #BFBEBE 37.5%, #BFBDBD 37.89%, #BEBDBD 38.28%, #BDBCBC 38.67%, #BDBBBB 39.06%, #BCBBBB 39.46%, #BBBABA 39.85%, #BBB9B9 40.24%, #BAB9B9 40.63%, #B9B8B8 41.02%, #B9B7B7 41.41%, #B8B7B7 41.8%, #B7B6B6 42.19%, #B7B5B5 42.58%, #B6B5B5 42.97%, #B5B4B4 43.36%, #B5B3B3 43.75%, #B4B3B3 44.14%, #B3B2B2 44.53%, #B3B1B1 44.92%, #B2B1B1 45.31%, #B1B0B0 45.71%, #B1AFAF 46.1%, #B0AFAF 46.49%, #AFAEAE 46.88%, #AFAEAE 47.27%, #AEADAD 47.66%, #ADACAC 48.05%, #ADACAC 48.44%, #ACABAB 48.83%, #ABAAAA 49.22%, #ABAAAA 49.61%, #AAA9A9 50%, #A9A8A8 50.39%, #A9A8A8 50.78%, #A8A7A7 51.17%, #A7A6A6 51.56%, #A7A6A6 51.96%, #A6A5A5 52.35%, #A5A4A4 52.74%, #A5A4A4 53.13%, #A4A3A3 53.52%, #A3A2A2 53.91%, #A3A2A2 54.3%, #A2A1A1 54.69%, #A1A0A0 55.08%, #A1A0A0 55.47%, #A09F9F 55.86%, #9F9E9E 56.25%, #9F9E9E 56.64%, #9E9D9D 57.03%, #9D9C9C 57.42%, #9D9C9C 57.81%, #9C9B9B 58.21%, #9B9A9A 58.6%, #9B9A9A 58.99%, #9A9999 59.38%, #999 59.77%, #999898 60.16%, #989797 60.55%, #979797 60.94%, #979696 61.33%, #969595 61.72%, #959595 62.11%, #959494 62.5%, #949393 62.89%, #939393 63.28%, #939292 63.67%, #929191 64.06%, #919191 64.46%, #919090 64.85%, #908F8F 65.24%, #8F8F8F 65.63%, #8F8E8E 66.02%, #8E8D8D 66.41%, #8D8D8D 66.8%, #8D8C8C 67.19%, #8C8B8B 67.58%, #8B8B8B 67.97%, #8B8A8A 68.36%, #8A8989 68.75%, #898989 69.14%, #898888 69.53%, #888787 69.92%, #878787 70.31%, #878686 70.71%, #868585 71.1%, #858585 71.49%, #858484 71.88%, #848484 72.27%, #838383 72.66%, #838282 73.05%, #828282 73.44%, #818181 73.83%, #818080 74.22%, #808080 74.61%, #7F7F7F 75%, #7F7E7E 75.39%, #7E7E7E 75.78%, #7D7D7D 76.17%, #7D7C7C 76.56%, #7C7C7C 76.96%, #7B7B7B 77.35%, #7B7A7A 77.74%, #7A7A7A 78.13%, #797979 78.52%, #797878 78.91%, #787878 79.3%, #777 79.69%, #777676 80.08%, #767676 80.47%, #757575 80.86%, #757474 81.25%, #747474 81.64%, #737373 82.03%, #737272 82.42%, #727272 82.81%, #717171 83.21%, #717070 83.6%, #707070 83.99%, #6F6F6F 84.38%, #6F6F6F 84.77%, #6E6E6E 85.16%, #6D6D6D 85.55%, #6D6D6D 85.94%, #6C6C6C 86.33%, #6C6B6B 86.72%, #6B6B6B 87.11%, #6A6A6A 87.5%, #6A6969 87.89%, #696969 88.28%, #686868 88.67%, #686767 89.06%, #676767 89.46%, #666 89.85%, #666565 90.24%, #656565 90.63%, #646464 91.02%, #646363 91.41%, #636363 91.8%, #626262 92.19%, #626161 92.58%, #616161 92.97%, #606060 93.36%, #605F5F 93.75%, #5F5F5F 94.14%, #5E5E5E 94.53%, #5E5D5D 94.92%, #5D5D5D 95.31%, #5C5C5C 95.71%, #5C5B5B 96.1%, #5B5B5B 96.49%, #5A5A5A 96.88%, #5A5A5A 97.27%, #595959 97.66%, #585858 98.05%, #585858 98.44%, #575757 98.83%, #565656 99.22%, #565656 99.61%, #555 100%)",
    },
    {
      name: "Bima",
      country: "Indonesia",
      flag: Indonesia1,
      image: Indonesia,
      gradient:
        " linear-gradient(90deg, #F00 0%, #FF0101 0.39%, #FF0202 0.78%, #FF0303 1.17%, #FF0404 1.56%, #FF0505 1.96%, #FF0606 2.35%, #FF0707 2.74%, #FF0808 3.13%, #FF0909 3.52%, #FF0A0A 3.91%, #FF0B0B 4.3%, #FF0C0C 4.69%, #FF0D0D 5.08%, #FF0E0E 5.47%, #FF0F0F 5.86%, #FF1010 6.25%, #F11 6.64%, #FF1212 7.03%, #FF1313 7.42%, #FF1414 7.81%, #FF1515 8.21%, #FF1616 8.6%, #FF1717 8.99%, #FF1818 9.38%, #FF1919 9.77%, #FF1A1A 10.16%, #FF1B1B 10.55%, #FF1C1C 10.94%, #FF1D1D 11.33%, #FF1E1E 11.72%, #FF1F1F 12.11%, #FF2020 12.5%, #FF2121 12.89%, #F22 13.28%, #FF2323 13.67%, #FF2424 14.06%, #FF2525 14.46%, #FF2626 14.85%, #FF2727 15.24%, #FF2828 15.63%, #FF2929 16.02%, #FF2A2A 16.41%, #FF2B2B 16.8%, #FF2C2C 17.19%, #FF2D2D 17.58%, #FF2E2E 17.97%, #FF2F2F 18.36%, #FF3030 18.75%, #FF3131 19.14%, #FF3232 19.53%, #F33 19.92%, #FF3434 20.31%, #FF3535 20.71%, #FF3636 21.1%, #FF3737 21.49%, #FF3838 21.88%, #FF3939 22.27%, #FF3A3A 22.66%, #FF3B3B 23.05%, #FF3C3C 23.44%, #FF3D3D 23.83%, #FF3E3E 24.22%, #FF3F3F 24.61%, #FF4040 25%, #FF4141 25.39%, #FF4242 25.78%, #FF4343 26.17%, #F44 26.56%, #FF4545 26.96%, #FF4646 27.35%, #FF4747 27.74%, #FF4848 28.13%, #FF4949 28.52%, #FF4A4A 28.91%, #FF4B4B 29.3%, #FF4C4C 29.69%, #FF4D4D 30.08%, #FF4E4E 30.47%, #FF4F4F 30.86%, #FF5050 31.25%, #FF5151 31.64%, #FF5252 32.03%, #FF5353 32.42%, #FF5454 32.81%, #F55 33.21%, #FF5656 33.6%, #FF5757 33.99%, #FF5858 34.38%, #FF5959 34.77%, #FF5A5A 35.16%, #FF5B5B 35.55%, #FF5C5C 35.94%, #FF5D5D 36.33%, #FF5E5E 36.72%, #FF5F5F 37.11%, #FF6060 37.5%, #FF6161 37.89%, #FF6262 38.28%, #FF6363 38.67%, #FF6464 39.06%, #FF6565 39.46%, #F66 39.85%, #FF6767 40.24%, #FF6868 40.63%, #FF6969 41.02%, #FF6A6A 41.41%, #FF6B6B 41.8%, #FF6C6C 42.19%, #FF6D6D 42.58%, #FF6E6E 42.97%, #FF6F6F 43.36%, #FF7070 43.75%, #FF7171 44.14%, #FF7272 44.53%, #FF7373 44.92%, #FF7474 45.31%, #FF7575 45.71%, #FF7676 46.1%, #F77 46.49%, #FF7878 46.88%, #FF7979 47.27%, #FF7A7A 47.66%, #FF7B7B 48.05%, #FF7C7C 48.44%, #FF7D7D 48.83%, #FF7E7E 49.22%, #FF7F7F 49.61%, #FF7F7F 50%, #FF8080 50.39%, #FF8181 50.78%, #FF8282 51.17%, #FF8383 51.56%, #FF8484 51.96%, #FF8585 52.35%, #FF8686 52.74%, #FF8787 53.13%, #F88 53.52%, #FF8989 53.91%, #FF8A8A 54.3%, #FF8B8B 54.69%, #FF8C8C 55.08%, #FF8D8D 55.47%, #FF8E8E 55.86%, #FF8F8F 56.25%, #FF9090 56.64%, #FF9191 57.03%, #FF9292 57.42%, #FF9393 57.81%, #FF9494 58.21%, #FF9595 58.6%, #FF9696 58.99%, #FF9797 59.38%, #FF9898 59.77%, #F99 60.16%, #FF9A9A 60.55%, #FF9B9B 60.94%, #FF9C9C 61.33%, #FF9D9D 61.72%, #FF9E9E 62.11%, #FF9F9F 62.5%, #FFA0A0 62.89%, #FFA1A1 63.28%, #FFA2A2 63.67%, #FFA3A3 64.06%, #FFA4A4 64.46%, #FFA5A5 64.85%, #FFA6A6 65.24%, #FFA7A7 65.63%, #FFA8A8 66.02%, #FFA9A9 66.41%, #FAA 66.8%, #FFABAB 67.19%, #FFACAC 67.58%, #FFADAD 67.97%, #FFAEAE 68.36%, #FFAFAF 68.75%, #FFB0B0 69.14%, #FFB1B1 69.53%, #FFB2B2 69.92%, #FFB3B3 70.31%, #FFB4B4 70.71%, #FFB5B5 71.1%, #FFB6B6 71.49%, #FFB7B7 71.88%, #FFB8B8 72.27%, #FFB9B9 72.66%, #FFBABA 73.05%, #FBB 73.44%, #FFBCBC 73.83%, #FFBDBD 74.22%, #FFBEBE 74.61%, #FFBFBF 75%, #FFC0C0 75.39%, #FFC1C1 75.78%, #FFC2C2 76.17%, #FFC3C3 76.56%, #FFC4C4 76.96%, #FFC5C5 77.35%, #FFC6C6 77.74%, #FFC7C7 78.13%, #FFC8C8 78.52%, #FFC9C9 78.91%, #FFCACA 79.3%, #FFCBCB 79.69%, #FCC 80.08%, #FFCDCD 80.47%, #FFCECE 80.86%, #FFCFCF 81.25%, #FFD0D0 81.64%, #FFD1D1 82.03%, #FFD2D2 82.42%, #FFD3D3 82.81%, #FFD4D4 83.21%, #FFD5D5 83.6%, #FFD6D6 83.99%, #FFD7D7 84.38%, #FFD8D8 84.77%, #FFD9D9 85.16%, #FFDADA 85.55%, #FFDBDB 85.94%, #FFDCDC 86.33%, #FDD 86.72%, #FFDEDE 87.11%, #FFDFDF 87.5%, #FFE0E0 87.89%, #FFE1E1 88.28%, #FFE2E2 88.67%, #FFE3E3 89.06%, #FFE4E4 89.46%, #FFE5E5 89.85%, #FFE6E6 90.24%, #FFE7E7 90.63%, #FFE8E8 91.02%, #FFE9E9 91.41%, #FFEAEA 91.8%, #FFEBEB 92.19%, #FFECEC 92.58%, #FFEDED 92.97%, #FEE 93.36%, #FFEFEF 93.75%, #FFF0F0 94.14%, #FFF1F1 94.53%, #FFF2F2 94.92%, #FFF3F3 95.31%, #FFF4F4 95.71%, #FFF5F5 96.1%, #FFF6F6 96.49%, #FFF7F7 96.88%, #FFF8F8 97.27%, #FFF9F9 97.66%, #FFFAFA 98.05%, #FFFBFB 98.44%, #FFFCFC 98.83%, #FFFDFD 99.22%, #FFFEFE 99.61%, #FFF 100%)",
    },
    {
      name: "Tharushi",
      country: "Sri Lanka",
      flag: SriLanka1,
      image: SriLanka,
      gradient:
        "linear-gradient(90deg, #00FF38 0%, #02FC38 0.39%, #04F937 0.78%, #05F636 1.17%, #07F336 1.56%, #09F035 1.96%, #0BED35 2.35%, #0DEA34 2.74%, #0EE733 3.13%, #10E433 3.52%, #12E132 3.91%, #14DE32 4.3%, #16DC31 4.69%, #17D931 5.08%, #19D630 5.47%, #1BD32F 5.86%, #1DD02F 6.25%, #1FCD2E 6.64%, #20CA2E 7.03%, #22C72D 7.42%, #24C42D 7.81%, #26C12C 8.21%, #27BE2B 8.6%, #29BB2B 8.99%, #2BB82A 9.38%, #2DB52A 9.77%, #2FB229 10.16%, #30AF29 10.55%, #32AC28 10.94%, #34A927 11.33%, #36A627 11.72%, #38A326 12.11%, #39A026 12.5%, #3B9D25 12.89%, #3D9B24 13.28%, #3F9824 13.67%, #419523 14.06%, #429223 14.46%, #448F22 14.85%, #468C22 15.24%, #488921 15.63%, #4A8620 16.02%, #4B8320 16.41%, #4D801F 16.8%, #4F7D1F 17.19%, #517A1E 17.58%, #53771E 17.97%, #54741D 18.36%, #56711C 18.75%, #586E1C 19.14%, #5A6B1B 19.53%, #5C681B 19.92%, #5D651A 20.31%, #5F6219 20.71%, #615F19 21.1%, #635C18 21.49%, #655918 21.88%, #665717 22.27%, #685417 22.66%, #6A5116 23.05%, #6C4E15 23.44%, #6D4B15 23.83%, #6F4814 24.22%, #714514 24.61%, #734213 25%, #753F13 25.39%, #763C12 25.78%, #783911 26.17%, #7A3611 26.56%, #7C3310 26.96%, #7E3010 27.35%, #7F2D0F 27.74%, #812A0F 28.13%, #83270E 28.52%, #85240D 28.91%, #87210D 29.3%, #881E0C 29.69%, #8A1B0C 30.08%, #8C180B 30.47%, #8E160A 30.86%, #90130A 31.25%, #911009 31.64%, #930D09 32.03%, #950A08 32.42%, #970708 32.81%, #980607 33.21%, #990407 33.6%, #9A0607 33.99%, #9B0807 34.38%, #9B0A07 34.77%, #9C0C07 35.16%, #9C0D06 35.55%, #9D0F06 35.94%, #9E1106 36.33%, #9E1306 36.72%, #9F1506 37.11%, #9F1706 37.5%, #A01806 37.89%, #A01A06 38.28%, #A11C06 38.67%, #A21E06 39.06%, #A22006 39.46%, #A32106 39.85%, #A32305 40.24%, #A42505 40.63%, #A52705 41.02%, #A52905 41.41%, #A62A05 41.8%, #A62C05 42.19%, #A72E05 42.58%, #A73005 42.97%, #A83205 43.36%, #A93405 43.75%, #A93505 44.14%, #AA3705 44.53%, #AA3904 44.92%, #AB3B04 45.31%, #AC3D04 45.71%, #AC3E04 46.1%, #AD4004 46.49%, #AD4204 46.88%, #AE4404 47.27%, #AE4604 47.66%, #AF4804 48.05%, #B04904 48.44%, #B04B04 48.83%, #B14D04 49.22%, #B14F04 49.61%, #B25103 50%, #B35203 50.39%, #B35403 50.78%, #B45603 51.17%, #B45803 51.56%, #B55A03 51.96%, #B55B03 52.35%, #B65D03 52.74%, #B75F03 53.13%, #B76103 53.52%, #B86303 53.91%, #B86503 54.3%, #B96602 54.69%, #BA6802 55.08%, #BA6A02 55.47%, #BB6C02 55.86%, #BB6E02 56.25%, #BC6F02 56.64%, #BD7102 57.03%, #BD7302 57.42%, #BE7502 57.81%, #BE7702 58.21%, #BF7802 58.6%, #BF7A02 58.99%, #C07C02 59.38%, #C17E01 59.77%, #C18001 60.16%, #C28201 60.55%, #C28301 60.94%, #C38501 61.33%, #C48701 61.72%, #C48901 62.11%, #C58B01 62.5%, #C58C01 62.89%, #C68E01 63.28%, #C69001 63.67%, #C79201 64.06%, #C89400 64.46%, #C89500 64.85%, #C99700 65.24%, #C99900 65.63%, #CA9B00 66.02%, #CB9D00 66.41%, #CA9C00 67.19%, #C99A00 67.58%, #C89800 67.97%, #C79600 68.36%, #C69400 68.75%, #C69300 69.14%, #C59100 69.53%, #C48F00 69.92%, #C38D00 70.31%, #C28B00 70.71%, #C18900 71.1%, #C08800 71.49%, #C08600 71.88%, #BF8400 72.27%, #BE8200 72.66%, #BD8000 73.05%, #BC7E00 73.44%, #BB7C00 73.83%, #BB7B00 74.22%, #BA7900 74.61%, #B97700 75%, #B87500 75.39%, #B77300 75.78%, #B67100 76.17%, #B57000 76.56%, #B56E00 76.96%, #B46C00 77.35%, #B36A00 77.74%, #B26800 78.13%, #B16600 78.52%, #B06500 78.91%, #AF6300 79.3%, #AF6100 79.69%, #AE5F00 80.08%, #AD5D00 80.47%, #AC5B00 80.86%, #AB5900 81.25%, #AA5800 81.64%, #A95600 82.03%, #A95400 82.42%, #A85200 82.81%, #A75001 83.21%, #A64E01 83.6%, #A54D01 83.99%, #A44B01 84.38%, #A34901 84.77%, #A34701 85.16%, #A24501 85.55%, #A14301 85.94%, #A04201 86.33%, #9F4001 86.72%, #9E3E01 87.11%, #9D3C01 87.5%, #9D3A01 87.89%, #9C3801 88.28%, #9B3601 88.67%, #9A3501 89.06%, #993301 89.46%, #983101 89.85%, #972F01 90.24%, #972D01 90.63%, #962B01 91.02%, #952A01 91.41%, #942801 91.8%, #932601 92.19%, #922401 92.58%, #912201 92.97%, #912001 93.36%, #901F01 93.75%, #8F1D01 94.14%, #8E1B01 94.53%, #8D1901 94.92%, #8C1701 95.31%, #8B1501 95.71%, #8B1301 96.1%, #8A1201 96.49%, #891001 96.88%, #880E01 97.27%, #870C01 97.66%, #860A01 98.05%, #850801 98.44%, #850701 98.83%, #840501 99.22%, #830301 99.61%, #820101 100%)",
    },
    {
      name: "Abdul",
      country: "Bangladesh",
      flag: Bangladesh1,
      image: Bangladesh,
      gradient:
        " linear-gradient(90deg, #075700 0%, #085700 0.39%, #095600 0.78%, #0A5600 1.17%, #0B5600 1.56%, #0C5500 1.96%, #0D5500 2.35%, #0E5500 2.74%, #0F5400 3.13%, #105400 3.52%, #115400 3.91%, #125300 4.3%, #135300 4.69%, #135300 5.08%, #145200 5.47%, #155200 5.86%, #165200 6.25%, #175100 6.64%, #185100 7.03%, #195000 7.42%, #1A5000 7.81%, #1B5000 8.21%, #1C4F00 8.6%, #1D4F00 8.99%, #1E4F00 9.38%, #1F4E00 9.77%, #204E00 10.16%, #214E00 10.55%, #224D00 10.94%, #234D00 11.33%, #244D00 11.72%, #254C00 12.11%, #264C00 12.5%, #274C00 12.89%, #284B00 13.28%, #294B00 13.67%, #2A4B00 14.06%, #2B4A00 14.46%, #2C4A00 14.85%, #2D4A00 15.24%, #2E4900 15.63%, #2F4900 16.02%, #304900 16.41%, #314800 16.8%, #324800 17.19%, #324800 17.58%, #334700 17.97%, #344700 18.36%, #354700 18.75%, #364600 19.14%, #374600 19.53%, #384600 19.92%, #394500 20.31%, #3A4500 20.71%, #3B4500 21.1%, #3C4400 21.49%, #3D4400 21.88%, #3E4400 22.27%, #3F4300 22.66%, #404300 23.05%, #414300 23.44%, #424200 23.83%, #434200 24.22%, #444200 24.61%, #454100 25%, #464100 25.39%, #474100 25.78%, #484000 26.17%, #494000 26.56%, #4A4000 26.96%, #4B3F00 27.35%, #4C3F00 27.74%, #4D3E00 28.13%, #4E3E00 28.52%, #4F3E00 28.91%, #503D00 29.3%, #513D00 29.69%, #523D00 30.08%, #523C00 30.47%, #533C00 30.86%, #543C00 31.25%, #553B00 31.64%, #563B00 32.03%, #573B00 32.42%, #583A00 32.81%, #593A00 33.21%, #5A3A00 33.6%, #5B3900 33.99%, #5C3900 34.38%, #5D3900 34.77%, #5E3800 35.16%, #5F3800 35.55%, #603800 35.94%, #613700 36.33%, #623700 36.72%, #633700 37.11%, #643600 37.5%, #653600 37.89%, #663600 38.28%, #673500 38.67%, #683500 39.06%, #693500 39.46%, #6A3400 39.85%, #6B3400 40.24%, #6C3400 40.63%, #6D3300 41.02%, #6E3300 41.41%, #6F3300 41.8%, #703200 42.19%, #713200 42.58%, #713200 42.97%, #723100 43.36%, #733100 43.75%, #743100 44.14%, #753000 44.53%, #763000 44.92%, #773000 45.31%, #782F00 45.71%, #792F00 46.1%, #7A2F00 46.49%, #7B2E00 46.88%, #7C2E00 47.27%, #7D2E00 47.66%, #7E2D00 48.05%, #7F2D00 48.44%, #802C00 48.83%, #812C00 49.22%, #822C00 49.61%, #832B00 50%, #842B00 50.39%, #852B00 50.78%, #862A00 51.17%, #872A00 51.56%, #882A00 51.96%, #892900 52.35%, #8A2900 52.74%, #8B2900 53.13%, #8C2800 53.52%, #8D2800 53.91%, #8E2800 54.3%, #8F2700 54.69%, #902700 55.08%, #912700 55.47%, #912600 55.86%, #922600 56.25%, #932600 56.64%, #942500 57.03%, #952500 57.42%, #962500 57.81%, #972400 58.21%, #982400 58.6%, #992400 58.99%, #9A2300 59.38%, #9B2300 59.77%, #9C2300 60.16%, #9D2200 60.55%, #9E2200 60.94%, #9F2200 61.33%, #A02100 61.72%, #A12100 62.11%, #A22100 62.5%, #A32000 62.89%, #A42000 63.28%, #A52000 63.67%, #A61F00 64.06%, #A71F00 64.46%, #A81F00 64.85%, #A91E00 65.24%, #AA1E00 65.63%, #AB1E00 66.02%, #AC1D00 66.41%, #AD1D00 66.8%, #AE1D00 67.19%, #AF1C00 67.58%, #B01C00 67.97%, #B01C00 68.36%, #B11B00 68.75%, #B21B00 69.14%, #B31A00 69.53%, #B41A00 69.92%, #B51A00 70.31%, #B61900 70.71%, #B71900 71.1%, #B81900 71.49%, #B91800 71.88%, #BA1800 72.27%, #BB1800 72.66%, #BC1700 73.05%, #BD1700 73.44%, #BE1700 73.83%, #BF1600 74.22%, #C01600 74.61%, #C11600 75%, #C21500 75.39%, #C31500 75.78%, #C41500 76.17%, #C51400 76.56%, #C61400 76.96%, #C71400 77.35%, #C81300 77.74%, #C91300 78.13%, #CA1300 78.52%, #CB1200 78.91%, #CC1200 79.3%, #CD1200 79.69%, #CE1100 80.08%, #CF1100 80.47%, #D01100 80.86%, #D01000 81.25%, #D11000 81.64%, #D21000 82.03%, #D30F00 82.42%, #D40F00 82.81%, #D50F00 83.21%, #D60E00 83.6%, #D70E00 83.99%, #D80E00 84.38%, #D90D00 84.77%, #DA0D00 85.16%, #DB0D00 85.55%, #DC0C00 85.94%, #DD0C00 86.33%, #DE0C00 86.72%, #DF0B00 87.11%, #E00B00 87.5%, #E10B00 87.89%, #E20A00 88.28%, #E30A00 88.67%, #E40A00 89.06%, #E50900 89.46%, #E60900 89.85%, #E70800 90.24%, #E80800 90.63%, #E90800 91.02%, #EA0700 91.41%, #EB0700 91.8%, #EC0700 92.19%, #ED0600 92.58%, #EE0600 92.97%, #EF0600 93.36%, #EF0500 93.75%, #F00500 94.14%, #F10500 94.53%, #F20400 94.92%, #F30400 95.31%, #F40400 95.71%, #F50300 96.1%, #F60300 96.49%, #F70300 96.88%, #F80200 97.27%, #F90200 97.66%, #FA0200 98.05%, #FB0100 98.44%, #FC0100 98.83%, #FD0100 99.22%, #FE0000 99.61%, #F00 100%)",
    },
    {
      name: "Sudip",
      country: "Nepal",
      flag: Nepal1,
      image: Nepal,
      gradient:
        "linear-gradient(90deg, #F00 0%, #FE0002 0.39%, #FD0004 0.78%, #FB0006 1.17%, #FA0008 1.56%, #F9000A 1.96%, #F8000C 2.35%, #F7000E 2.74%, #F60010 3.13%, #F40012 3.52%, #F30014 3.91%, #F20016 4.3%, #F10018 4.69%, #F0001A 5.08%, #EF001C 5.47%, #ED001E 5.86%, #EC0020 6.25%, #EB0022 6.64%, #EA0024 7.03%, #E90026 7.42%, #E80028 7.81%, #E6002A 8.21%, #E5002C 8.6%, #E4002E 8.99%, #E30030 9.38%, #E20032 9.77%, #E10034 10.16%, #DF0036 10.55%, #DE0038 10.94%, #DD003A 11.33%, #DC003C 11.72%, #DB003E 12.11%, #DA0040 12.5%, #D80042 12.89%, #D70044 13.28%, #D60046 13.67%, #D50048 14.06%, #D4004A 14.46%, #D2004C 14.85%, #D1004E 15.24%, #D00050 15.63%, #CF0052 16.02%, #CE0054 16.41%, #CD0056 16.8%, #CB0058 17.19%, #CA005A 17.58%, #C9005C 17.97%, #C8005E 18.36%, #C70060 18.75%, #C60062 19.14%, #C40064 19.53%, #C30066 19.92%, #C20068 20.31%, #C1006A 20.71%, #C0006C 21.1%, #BF006E 21.49%, #BD0070 21.88%, #BC0072 22.27%, #BB0074 22.66%, #BA0076 23.05%, #B90078 23.44%, #B8007A 23.83%, #B6007C 24.22%, #B5007E 24.61%, #B4007F 25%, #B30081 25.39%, #B20083 25.78%, #B10085 26.17%, #AF0087 26.56%, #AE0089 26.96%, #AD008B 27.35%, #AC008D 27.74%, #AB008F 28.13%, #A90091 28.52%, #A80093 28.91%, #A70095 29.3%, #A60097 29.69%, #A50099 30.08%, #A4009B 30.47%, #A2009D 30.86%, #A1009F 31.25%, #A000A1 31.64%, #9F00A3 32.03%, #9E00A5 32.42%, #9D00A7 32.81%, #9B00A9 33.21%, #9A00AB 33.6%, #9900AD 33.99%, #9800AF 34.38%, #9700B1 34.77%, #9600B3 35.16%, #9400B5 35.55%, #9300B7 35.94%, #9200B9 36.33%, #9100BB 36.72%, #9000BD 37.11%, #8F00BF 37.5%, #8D00C1 37.89%, #8C00C3 38.28%, #8B00C5 38.67%, #8A00C7 39.06%, #8900C9 39.46%, #8800CB 39.85%, #8600CD 40.24%, #8500CF 40.63%, #8400D1 41.02%, #8300D3 41.41%, #8200D5 41.8%, #8000D7 42.19%, #7F00D9 42.58%, #7E00DB 42.97%, #7D00DD 43.36%, #7C00DF 43.75%, #7B00E1 44.14%, #7900E3 44.53%, #7800E5 44.92%, #7700E7 45.31%, #7600E9 45.71%, #7500EB 46.1%, #7400ED 46.49%, #7200EF 46.88%, #7100F1 47.27%, #7000F3 47.66%, #6F00F5 48.05%, #6E00F7 48.44%, #6D00F9 48.83%, #6B00FB 49.22%, #6A00FD 49.61%, #6900FF 50%, #6A02FF 50.39%, #6B04FF 50.78%, #6D06FF 51.17%, #6E08FF 51.56%, #6F0AFF 51.96%, #700CFF 52.35%, #710EFF 52.74%, #7210FF 53.13%, #7312FF 53.52%, #7514FF 53.91%, #7616FF 54.3%, #7718FF 54.69%, #781AFF 55.08%, #791CFF 55.47%, #7A1EFF 55.86%, #7C20FF 56.25%, #7D22FF 56.64%, #7E24FF 57.03%, #7F26FF 57.42%, #8028FF 57.81%, #8129FF 58.21%, #822BFF 58.6%, #842DFF 58.99%, #852FFF 59.38%, #8631FF 59.77%, #8733FF 60.16%, #8835FF 60.55%, #8937FF 60.94%, #8B39FF 61.33%, #8C3BFF 61.72%, #8D3DFF 62.11%, #8E3FFE 62.5%, #8F41FE 62.89%, #9043FE 63.28%, #9145FE 63.67%, #9347FE 64.06%, #9449FE 64.46%, #954BFE 64.85%, #964DFE 65.24%, #974FFE 65.63%, #9851FE 66.02%, #9A53FE 66.41%, #9B55FE 66.8%, #9C57FE 67.19%, #9D59FE 67.58%, #9E5BFE 67.97%, #9F5DFE 68.36%, #A15FFE 68.75%, #A261FE 69.14%, #A363FE 69.53%, #A465FE 69.92%, #A567FE 70.31%, #A669FE 70.71%, #A76BFE 71.1%, #A96DFE 71.49%, #AA6FFE 71.88%, #AB71FE 72.27%, #AC73FE 72.66%, #AD75FE 73.05%, #AE77FE 73.44%, #B079FE 73.83%, #B17BFE 74.22%, #B27DFE 74.61%, #B37EFE 75%, #B480FE 75.39%, #B582FE 75.78%, #B684FE 76.17%, #B886FE 76.56%, #B988FE 76.96%, #BA8AFE 77.35%, #BB8CFE 77.74%, #BC8EFE 78.13%, #BD90FE 78.52%, #BF92FE 78.91%, #C094FE 79.3%, #C196FE 79.69%, #C298FE 80.08%, #C39AFE 80.47%, #C49CFE 80.86%, #C59EFE 81.25%, #C7A0FE 81.64%, #C8A2FE 82.03%, #C9A4FE 82.42%, #CAA6FE 82.81%, #CBA8FE 83.21%, #CCAAFE 83.6%, #CEACFE 83.99%, #CFAEFE 84.38%, #D0B0FE 84.77%, #D1B2FE 85.16%, #D2B4FE 85.55%, #D3B6FE 85.94%, #D5B8FE 86.33%, #D6BAFD 86.72%, #D7BCFD 87.11%, #D8BEFD 87.5%, #D9C0FD 87.89%, #DAC2FD 88.28%, #DBC4FD 88.67%, #DDC6FD 89.06%, #DEC8FD 89.46%, #DFCAFD 89.85%, #E0CCFD 90.24%, #E1CEFD 90.63%, #E2D0FD 91.02%, #E4D1FD 91.41%, #E5D3FD 91.8%, #E6D5FD 92.19%, #E7D7FD 92.58%, #E8D9FD 92.97%, #E9DBFD 93.36%, #EADDFD 93.75%, #ECDFFD 94.14%, #EDE1FD 94.53%, #EEE3FD 94.92%, #EFE5FD 95.31%, #F0E7FD 95.71%, #F1E9FD 96.1%, #F3EBFD 96.49%, #F4EDFD 96.88%, #F5EFFD 97.27%, #F6F1FD 97.66%, #F7F3FD 98.05%, #F8F5FD 98.44%, #F9F7FD 98.83%, #FBF9FD 99.22%, #FCFBFD 99.61%, #FDFDFD 100%)",
    },
    {
      name: "Deiji",
      country: "S. Korea",
      flag: SKorea1,
      image: SKorea,
      gradient:
        "linear-gradient(90deg, #FFFBFB 0%, #FCF8F8 0.39%, #F9F5F5 0.78%, #F6F2F2 1.17%, #F3EFEF 1.56%, #F0ECEC 1.96%, #EDE9E9 2.35%, #EAE6E6 2.74%, #E7E3E3 3.13%, #E4E0E0 3.52%, #E1DDDD 3.91%, #DEDBDB 4.3%, #DBD8D8 4.69%, #D8D5D5 5.08%, #D5D2D2 5.47%, #D2CFCF 5.86%, #CFCCCC 6.25%, #CCC9C9 6.64%, #C9C6C6 7.03%, #C6C3C3 7.42%, #C3C0C0 7.81%, #C0BDBD 8.21%, #BDBABA 8.6%, #BAB7B7 8.99%, #B7B4B4 9.38%, #B4B1B1 9.77%, #B1AEAE 10.16%, #AEABAB 10.55%, #ABA9A9 10.94%, #A8A6A6 11.33%, #A5A3A3 11.72%, #A2A0A0 12.11%, #9F9D9D 12.5%, #9C9A9A 12.89%, #999797 13.28%, #969494 13.67%, #939191 14.06%, #908E8E 14.46%, #8D8B8B 14.85%, #8A8888 15.24%, #878585 15.63%, #848282 16.02%, #817F7F 16.41%, #7E7C7C 16.8%, #7B7979 17.19%, #787676 17.58%, #757474 17.97%, #727171 18.36%, #6F6E6E 18.75%, #6C6B6B 19.14%, #696868 19.53%, #666565 19.92%, #636262 20.31%, #605F5F 20.71%, #5D5C5C 21.1%, #5A5959 21.49%, #575656 21.88%, #545353 22.27%, #525050 22.66%, #4F4D4D 23.05%, #4C4A4A 23.44%, #494747 23.83%, #464444 24.22%, #434141 24.61%, #403F3F 25%, #3D3C3C 25.39%, #3A3939 25.78%, #373636 26.17%, #343333 26.56%, #313030 26.96%, #2E2D2D 27.35%, #2B2A2A 27.74%, #282727 28.13%, #252424 28.52%, #222121 28.91%, #1F1E1E 29.3%, #1C1B1B 29.69%, #191818 30.08%, #161515 30.47%, #131212 30.86%, #100F0F 31.25%, #0D0D0D 31.64%, #0A0A0A 32.03%, #070707 32.42%, #040404 32.81%, #030202 33.21%, #020000 33.6%, #050000 33.99%, #080000 34.38%, #0B0000 34.77%, #0E0000 35.16%, #100 35.55%, #140000 35.94%, #170000 36.33%, #1A0000 36.72%, #1D0000 37.11%, #200000 37.5%, #230000 37.89%, #260000 38.28%, #290000 38.67%, #2C0000 39.06%, #2F0000 39.46%, #320000 39.85%, #350000 40.24%, #380000 40.63%, #3B0000 41.02%, #3E0000 41.41%, #410000 41.8%, #400 42.19%, #470000 42.58%, #4A0000 42.97%, #4D0000 43.36%, #500000 43.75%, #530000 44.14%, #560000 44.53%, #590000 44.92%, #5C0000 45.31%, #5F0000 45.71%, #620000 46.1%, #650000 46.49%, #680000 46.88%, #6B0000 47.27%, #6E0000 47.66%, #710000 48.05%, #740000 48.44%, #700 48.83%, #7A0000 49.22%, #7D0000 49.61%, #7F0000 50%, #820000 50.39%, #850000 50.78%, #800 51.17%, #8B0000 51.56%, #8E0000 51.96%, #910000 52.35%, #940000 52.74%, #970000 53.13%, #9A0000 53.52%, #9D0000 53.91%, #A00000 54.3%, #A30000 54.69%, #A60000 55.08%, #A90000 55.47%, #AC0000 55.86%, #AF0000 56.25%, #B20000 56.64%, #B50000 57.03%, #B80000 57.42%, #B00 57.81%, #BE0000 58.21%, #C10000 58.6%, #C40000 58.99%, #C70000 59.38%, #CA0000 59.77%, #CD0000 60.16%, #D00000 60.55%, #D30000 60.94%, #D60000 61.33%, #D90000 61.72%, #DC0000 62.11%, #DF0000 62.5%, #E20000 62.89%, #E50000 63.28%, #E80000 63.67%, #EB0000 64.06%, #E00 64.46%, #F10000 64.85%, #F40000 65.24%, #F70000 65.63%, #FA0000 66.02%, #FD0000 66.41%, #FD0002 66.8%, #FD0004 67.19%, #FB0007 67.58%, #FA000A 67.97%, #F8000D 68.36%, #F60010 68.75%, #F50013 69.14%, #F30016 69.53%, #F10019 69.92%, #EF001C 70.31%, #EE001F 70.71%, #EC0022 71.1%, #EA0025 71.49%, #E90028 71.88%, #E7002B 72.27%, #E5002E 72.66%, #E40031 73.05%, #E20034 73.44%, #E00037 73.83%, #DF003A 74.22%, #DD003D 74.61%, #DB0040 75%, #DA0043 75.39%, #D80046 75.78%, #D60049 76.17%, #D5004C 76.56%, #D3004F 76.96%, #D10052 77.35%, #D00054 77.74%, #CE0057 78.13%, #CC005A 78.52%, #CB005D 78.91%, #C90060 79.3%, #C70063 79.69%, #C60066 80.08%, #C40069 80.47%, #C2006C 80.86%, #C0006F 81.25%, #BF0072 81.64%, #BD0075 82.03%, #BB0078 82.42%, #BA007B 82.81%, #B8007E 83.21%, #B60081 83.6%, #B50084 83.99%, #B30087 84.38%, #B1008A 84.77%, #B0008D 85.16%, #AE0090 85.55%, #AC0093 85.94%, #AB0096 86.33%, #A90099 86.72%, #A7009C 87.11%, #A6009F 87.5%, #A400A2 87.89%, #A200A5 88.28%, #A100A8 88.67%, #9F00AB 89.06%, #9D00AE 89.46%, #9C00B1 89.85%, #9A00B4 90.24%, #9800B7 90.63%, #9700BA 91.02%, #9500BD 91.41%, #9300C0 91.8%, #9200C3 92.19%, #9000C6 92.58%, #8E00C9 92.97%, #8C00CC 93.36%, #8B00CF 93.75%, #8900D2 94.14%, #8700D5 94.53%, #8600D8 94.92%, #8400DB 95.31%, #8200DE 95.71%, #8100E1 96.1%, #7F00E4 96.49%, #7D00E7 96.88%, #7C00EA 97.27%, #7A00ED 97.66%, #7800F0 98.05%, #7700F3 98.44%, #7500F6 98.83%, #7300F9 99.22%, #7200FC 99.61%, #7000FF 100%)",
    },
    {
      name: "Natalie",
      country: "Iran",
      flag: Iran1,
      image: Iran,
      gradient:
        "linear-gradient(90deg, #03A822 0%, #05A924 0.39%, #07A925 0.78%, #09AA27 1.18%, #0BAB29 1.57%, #0DAB2B 1.96%, #0FAC2C 2.35%, #11AD2E 2.74%, #13AD30 3.13%, #15AE31 3.52%, #17AF33 3.91%, #19B035 4.3%, #1BB037 4.69%, #1DB138 5.08%, #1FB23A 5.47%, #21B23C 5.86%, #23B33E 6.25%, #25B43F 6.64%, #26B441 7.03%, #28B543 7.43%, #2AB644 7.82%, #2CB646 8.21%, #2EB748 8.6%, #30B84A 8.99%, #32B84B 9.38%, #34B94D 9.77%, #36BA4F 10.16%, #38BA51 10.55%, #3ABB52 10.94%, #3CBC54 11.33%, #3EBC56 11.72%, #40BD57 12.11%, #42BE59 12.5%, #44BE5B 12.89%, #46BF5D 13.28%, #48C05E 13.68%, #4AC060 14.07%, #4CC162 14.46%, #4EC264 14.85%, #50C365 15.24%, #52C367 15.63%, #54C469 16.02%, #56C56A 16.41%, #58C56C 16.8%, #5AC66E 17.19%, #5CC770 17.58%, #5EC771 17.97%, #60C873 18.36%, #62C975 18.75%, #64C977 19.14%, #65CA78 19.53%, #67CB7A 19.93%, #69CB7C 20.32%, #6BCC7D 20.71%, #6DCD7F 21.1%, #6FCD81 21.49%, #71CE83 21.88%, #73CF84 22.27%, #75CF86 22.66%, #77D088 23.05%, #79D18A 23.44%, #7BD18B 23.83%, #7DD28D 24.22%, #7FD38F 24.61%, #81D490 25%, #83D492 25.39%, #85D594 25.78%, #87D696 26.18%, #89D697 26.57%, #8BD799 26.96%, #8DD89B 27.35%, #8FD89D 27.74%, #91D99E 28.13%, #93DAA0 28.52%, #95DAA2 28.91%, #97DBA3 29.3%, #99DCA5 29.69%, #9BDCA7 30.08%, #9DDDA9 30.47%, #9FDEAA 30.86%, #A1DEAC 31.25%, #A2DFAE 31.64%, #A4E0B0 32.03%, #A6E0B1 32.43%, #A8E1B3 32.82%, #AAE2B5 33.21%, #ACE2B6 33.6%, #AEE3B8 33.99%, #B0E4BA 34.38%, #B2E5BC 34.77%, #B4E5BD 35.16%, #B6E6BF 35.55%, #B8E7C1 35.94%, #BAE7C3 36.33%, #BCE8C4 36.72%, #BEE9C6 37.11%, #C0E9C8 37.5%, #C2EAC9 37.89%, #C4EBCB 38.28%, #C6EBCD 38.68%, #C8ECCF 39.07%, #CAEDD0 39.46%, #CCEDD2 39.85%, #CEEED4 40.24%, #D0EFD6 40.63%, #D2EFD7 41.02%, #D4F0D9 41.41%, #D6F1DB 41.8%, #D8F1DC 42.19%, #DAF2DE 42.58%, #DCF3E0 42.97%, #DEF3E2 43.36%, #E0F4E3 43.75%, #E1F5E5 44.14%, #E3F5E7 44.53%, #E5F6E9 44.93%, #E7F7EA 45.32%, #E9F8EC 45.71%, #EBF8EE 46.1%, #EDF9EF 46.49%, #EFFAF1 46.88%, #F1FAF3 47.27%, #F3FBF5 47.66%, #F5FCF6 48.05%, #F7FCF8 48.44%, #F9FDFA 48.83%, #FBFEFC 49.22%, #FDFEFD 49.61%, #FFF 50%, #FFFDFD 50.39%, #FFFBFB 50.78%, #FFF9F9 51.18%, #FFF7F7 51.57%, #FFF5F5 51.96%, #FFF3F3 52.35%, #FFF1F1 52.74%, #FFEFEF 53.13%, #FFEDED 53.52%, #FFEBEB 53.91%, #FFE9E9 54.3%, #FFE7E7 54.69%, #FEE5E5 55.08%, #FEE3E3 55.47%, #FEE1E1 55.86%, #FEDFDF 56.25%, #FEDDDD 56.64%, #FEDBDB 57.03%, #FED9D9 57.43%, #FED7D7 57.82%, #FED5D5 58.21%, #FED3D3 58.6%, #FED1D1 58.99%, #FECFCF 59.38%, #FECDCD 59.77%, #FECBCB 60.16%, #FEC9C9 60.55%, #FEC7C7 60.94%, #FEC5C5 61.33%, #FEC3C3 61.72%, #FEC1C1 62.11%, #FEBFBF 62.5%, #FEBDBD 62.89%, #FEBBBB 63.28%, #FEB9B9 63.68%, #FEB7B7 64.07%, #FEB5B5 64.46%, #FDB3B3 64.85%, #FDB1B1 65.24%, #FDAFAF 65.63%, #FDADAD 66.02%, #FDABAB 66.41%, #FDA9A9 66.8%, #FDA7A7 67.19%, #FDA5A5 67.58%, #FDA3A3 67.97%, #FDA1A1 68.36%, #FD9F9F 68.75%, #FD9D9D 69.14%, #FD9B9B 69.53%, #FD9999 69.93%, #FD9797 70.32%, #FD9595 70.71%, #FD9393 71.1%, #FD9191 71.49%, #FD8F8F 71.88%, #FD8D8D 72.27%, #FD8B8B 72.66%, #FD8989 73.05%, #FD8787 73.44%, #FD8585 73.83%, #FD8383 74.22%, #FC8181 74.61%, #FC8080 75%, #FC7E7E 75.39%, #FC7C7C 75.78%, #FC7A7A 76.18%, #FC7878 76.57%, #FC7676 76.96%, #FC7474 77.35%, #FC7272 77.74%, #FC7070 78.13%, #FC6E6E 78.52%, #FC6C6C 78.91%, #FC6A6A 79.3%, #FC6868 79.69%, #FC6666 80.08%, #FC6464 80.47%, #FC6262 80.86%, #FC6060 81.25%, #FC5E5E 81.64%, #FC5C5C 82.03%, #FC5A5A 82.43%, #FC5858 82.82%, #FC5656 83.21%, #FC5454 83.6%, #FC5252 83.99%, #FB5050 84.38%, #FB4E4E 84.77%, #FB4C4C 85.16%, #FB4A4A 85.55%, #FB4848 85.94%, #FB4646 86.33%, #FB4444 86.72%, #FB4242 87.11%, #FB4040 87.5%, #FB3E3E 87.89%, #FB3C3C 88.28%, #FB3A3A 88.68%, #FB3838 89.07%, #FB3636 89.46%, #FB3434 89.85%, #FB3232 90.24%, #FB3030 90.63%, #FB2E2E 91.02%, #FB2C2C 91.41%, #FB2A2A 91.8%, #FB2828 92.19%, #FB2626 92.58%, #FB2424 92.97%, #FB2222 93.36%, #FB2020 93.75%, #FA1E1E 94.14%, #FA1C1C 94.53%, #FA1A1A 94.93%, #FA1818 95.32%, #FA1616 95.71%, #FA1414 96.1%, #FA1212 96.49%, #FA1010 96.88%, #FA0E0E 97.27%, #FA0C0C 97.66%, #FA0A0A 98.05%, #FA0808 98.44%, #FA0606 98.83%, #FA0404 99.22%, #FA0202 99.61%, #FA0000 100%)",
    },
    {
      name: "Natalie",
      country: "Thailand",
      flag: Thailand1,
      image: Thailand,
      gradient:
        "linear-gradient(90deg, #8B0000 0%, #8C0202 0.39%, #8D0404 0.78%, #8E0606 1.18%, #8F0808 1.57%, #900A0A 1.96%, #900C0C 2.35%, #910E0E 2.74%, #921010 3.13%, #931212 3.52%, #941414 3.91%, #951616 4.3%, #961818 4.69%, #971A1A 5.08%, #981C1C 5.47%, #991E1E 5.86%, #992020 6.25%, #9A2222 6.64%, #9B2424 7.03%, #9C2626 7.43%, #9D2828 7.82%, #9E2A2A 8.21%, #9F2C2C 8.6%, #A02E2E 8.99%, #A13030 9.38%, #A23232 9.77%, #A33434 10.16%, #A33636 10.55%, #A43838 10.94%, #A53A3A 11.33%, #A63C3C 11.72%, #A73E3E 12.11%, #A84040 12.5%, #A94242 12.89%, #A44 13.28%, #AB4646 13.68%, #AC4848 14.07%, #AD4A4A 14.46%, #AD4C4C 14.85%, #AE4E4E 15.24%, #AF5050 15.63%, #B05252 16.02%, #B15454 16.41%, #B25656 16.8%, #B35858 17.19%, #B45A5A 17.58%, #B55C5C 17.97%, #B65E5E 18.36%, #B66060 18.75%, #B76262 19.14%, #B86464 19.53%, #B96666 19.93%, #BA6868 20.32%, #BB6A6A 20.71%, #BC6C6C 21.1%, #BD6E6E 21.49%, #BE7070 21.88%, #BF7272 22.27%, #C07474 22.66%, #C07676 23.05%, #C17878 23.44%, #C27A7A 23.83%, #C37C7C 24.22%, #C47E7E 24.61%, #C57F7F 25%, #C68181 25.39%, #C78383 25.78%, #C88585 26.18%, #C98787 26.57%, #CA8989 26.96%, #CA8B8B 27.35%, #CB8D8D 27.74%, #CC8F8F 28.13%, #CD9191 28.52%, #CE9393 28.91%, #CF9595 29.3%, #D09797 29.69%, #D19999 30.08%, #D29B9B 30.47%, #D39D9D 30.86%, #D39F9F 31.25%, #D4A1A1 31.64%, #D5A3A3 32.03%, #D6A5A5 32.43%, #D7A7A7 32.82%, #D8A9A9 33.21%, #D9ABAB 33.6%, #DAADAD 33.99%, #DBAFAF 34.38%, #DCB1B1 34.77%, #DDB3B3 35.16%, #DDB5B5 35.55%, #DEB7B7 35.94%, #DFB9B9 36.33%, #E0BBBB 36.72%, #E1BDBD 37.11%, #E2BFBF 37.5%, #E3C1C1 37.89%, #E4C3C3 38.28%, #E5C5C5 38.68%, #E6C7C7 39.07%, #E7C9C9 39.46%, #E7CBCB 39.85%, #E8CDCD 40.24%, #E9CFCF 40.63%, #EAD1D1 41.02%, #EBD3D3 41.41%, #ECD5D5 41.8%, #EDD7D7 42.19%, #EED9D9 42.58%, #EFDBDB 42.97%, #F0DDDD 43.36%, #F0DFDF 43.75%, #F1E1E1 44.14%, #F2E3E3 44.53%, #F3E5E5 44.93%, #F4E7E7 45.32%, #F5E9E9 45.71%, #F6EBEB 46.1%, #F7EDED 46.49%, #F8EFEF 46.88%, #F9F1F1 47.27%, #FAF3F3 47.66%, #FAF5F5 48.05%, #FBF7F7 48.44%, #FCF9F9 48.83%, #FDFBFB 49.22%, #FEFDFD 49.61%, #FFF 50%, #FDFDFE 50.39%, #FCFBFD 50.78%, #FAF9FB 51.18%, #F8F7FA 51.57%, #F7F5F9 51.96%, #F5F3F8 52.35%, #F4F1F6 52.74%, #F2EFF5 53.13%, #F0EDF4 53.52%, #EFEBF3 53.91%, #EDE9F1 54.3%, #EBE7F0 54.69%, #EAE5EF 55.08%, #E8E3EE 55.47%, #E7E1ED 55.86%, #E5DFEB 56.25%, #E3DDEA 56.64%, #E2DBE9 57.03%, #E0D9E8 57.43%, #DED7E6 57.82%, #DDD5E5 58.21%, #DBD3E4 58.6%, #DAD1E3 58.99%, #D8CFE2 59.38%, #D6CDE0 59.77%, #D5CBDF 60.16%, #D3C9DE 60.55%, #D1C7DD 60.94%, #D0C5DB 61.33%, #CEC3DA 61.72%, #CDC1D9 62.11%, #CBC0D8 62.5%, #C9BED7 62.89%, #C8BCD5 63.28%, #C6BAD4 63.68%, #C4B8D3 64.07%, #C3B6D2 64.46%, #C1B4D0 64.85%, #C0B2CF 65.24%, #BEB0CE 65.63%, #BCAECD 66.02%, #BBACCB 66.41%, #B9AACA 66.8%, #B7A8C9 67.19%, #B6A6C8 67.58%, #B4A4C7 67.97%, #B3A2C5 68.36%, #B1A0C4 68.75%, #AF9EC3 69.14%, #AE9CC2 69.53%, #AC9AC0 69.93%, #AA98BF 70.32%, #A996BE 70.71%, #A794BD 71.1%, #A692BC 71.49%, #A490BA 71.88%, #A28EB9 72.27%, #A18CB8 72.66%, #9F8AB7 73.05%, #9D88B5 73.44%, #9C86B4 73.83%, #9A84B3 74.22%, #9982B2 74.61%, #9780B0 75%, #957EAF 75.39%, #947CAE 75.78%, #927AAD 76.18%, #9078AC 76.57%, #8F76AA 76.96%, #8D74A9 77.35%, #8C72A8 77.74%, #8A70A7 78.13%, #886EA5 78.52%, #876CA4 78.91%, #856AA3 79.3%, #8368A2 79.69%, #8266A1 80.08%, #80649F 80.47%, #7F629E 80.86%, #7D609D 81.25%, #7B5E9C 81.64%, #7A5C9A 82.03%, #785A99 82.43%, #765898 82.82%, #755697 83.21%, #735495 83.6%, #725294 83.99%, #705093 84.38%, #6E4E92 84.77%, #6D4C91 85.16%, #6B4A8F 85.55%, #69488E 85.94%, #68468D 86.33%, #66448C 86.72%, #65438A 87.11%, #634189 87.5%, #613F88 87.89%, #603D87 88.28%, #5E3B86 88.68%, #5C3984 89.07%, #5B3783 89.46%, #593582 89.85%, #583381 90.24%, #56317F 90.63%, #542F7E 91.02%, #532D7D 91.41%, #512B7C 91.8%, #4F297A 92.19%, #4E2779 92.58%, #4C2578 92.97%, #4B2377 93.36%, #492176 93.75%, #471F74 94.14%, #461D73 94.53%, #441B72 94.93%, #421971 95.32%, #41176F 95.71%, #3F156E 96.1%, #3E136D 96.49%, #3C116C 96.88%, #3A0F6B 97.27%, #390D69 97.66%, #370B68 98.05%, #350967 98.44%, #340766 98.83%, #320564 99.22%, #310363 99.61%, #2F0162 100%)",
    },
    {
      name: "Natalie",
      country: "Brazil",
      flag: Brazil1,
      image: Brazil,
      gradient:
        "linear-gradient(90deg, #04B600 0%, #06B700 0.39%, #08B700 0.78%, #09B800 1.18%, #0BB800 1.57%, #0DB900 1.96%, #0FB900 2.35%, #11BA00 2.74%, #13BB00 3.13%, #14BB00 3.52%, #16BC00 3.91%, #18BC00 4.3%, #1ABD00 4.69%, #1CBD00 5.08%, #1DBE00 5.47%, #1FBF00 5.86%, #21BF00 6.25%, #23C000 6.64%, #25C000 7.03%, #26C100 7.43%, #28C100 7.82%, #2AC200 8.21%, #2CC300 8.6%, #2EC300 8.99%, #2FC400 9.38%, #31C400 9.77%, #33C500 10.16%, #35C500 10.55%, #37C600 10.94%, #38C700 11.33%, #3AC700 11.72%, #3CC800 12.11%, #3EC800 12.5%, #40C900 12.89%, #41C900 13.28%, #43CA00 13.68%, #45CB00 14.07%, #47CB00 14.46%, #49CC00 14.85%, #4ACC00 15.24%, #4CCD00 15.63%, #4ECD00 16.02%, #50CE00 16.41%, #52CF00 16.8%, #53CF00 17.19%, #55D000 17.58%, #57D000 17.97%, #59D100 18.36%, #5BD100 18.75%, #5DD200 19.14%, #5ED300 19.53%, #60D300 19.93%, #62D400 20.32%, #64D400 20.71%, #66D500 21.1%, #67D500 21.49%, #69D600 21.88%, #6BD700 22.27%, #6DD700 22.66%, #6FD800 23.05%, #70D800 23.44%, #72D900 23.83%, #74D900 24.22%, #76DA00 24.61%, #78DB00 25%, #79DB00 25.39%, #7BDC00 25.78%, #7DDC00 26.18%, #7FDD00 26.57%, #81DD00 26.96%, #82DE00 27.35%, #84DF00 27.74%, #86DF00 28.13%, #88E000 28.52%, #8AE000 28.91%, #8BE100 29.3%, #8DE100 29.69%, #8FE200 30.08%, #91E300 30.47%, #93E300 30.86%, #94E400 31.25%, #96E400 31.64%, #98E500 32.03%, #9AE500 32.43%, #9CE600 32.82%, #9DE600 33.21%, #9FE700 33.6%, #A1E800 33.99%, #A3E800 34.38%, #A5E900 34.77%, #A7E900 35.16%, #A8EA00 35.55%, #AAEA00 35.94%, #ACEB00 36.33%, #AEEC00 36.72%, #B0EC00 37.11%, #B1ED00 37.5%, #B3ED00 37.89%, #B5EE00 38.28%, #B7EE00 38.68%, #B9EF00 39.07%, #BAF000 39.46%, #BCF000 39.85%, #BEF100 40.24%, #C0F100 40.63%, #C2F200 41.02%, #C3F200 41.41%, #C5F300 41.8%, #C7F400 42.19%, #C9F400 42.58%, #CBF500 42.97%, #CCF500 43.36%, #CEF600 43.75%, #D0F600 44.14%, #D2F700 44.53%, #D4F800 44.93%, #D5F800 45.32%, #D7F900 45.71%, #D9F900 46.1%, #DBFA00 46.49%, #DDFA00 46.88%, #DEFB00 47.27%, #E0FC00 47.66%, #E2FC00 48.05%, #E4FD00 48.44%, #E6FD00 48.83%, #E7FE00 49.22%, #E9FE00 49.61%, #EBFF00 50%, #EAFD02 50.39%, #EAFB04 50.78%, #E9F906 51.18%, #E8F708 51.57%, #E8F50A 51.96%, #E7F30C 52.35%, #E6F10E 52.74%, #E6EF10 53.13%, #E5ED12 53.52%, #E4EB14 53.91%, #E4E916 54.3%, #E3E718 54.69%, #E2E51A 55.08%, #E2E31C 55.47%, #E1E11E 55.86%, #E0DF20 56.25%, #E0DD22 56.64%, #DFDB24 57.03%, #DED926 57.43%, #DED728 57.82%, #DDD52A 58.21%, #DCD32C 58.6%, #DCD12E 58.99%, #DBCF30 59.38%, #DACD32 59.77%, #DACB34 60.16%, #D9C936 60.55%, #D8C738 60.94%, #D8C53A 61.33%, #D7C33C 61.72%, #D6C13E 62.11%, #D6BF40 62.5%, #D5BD42 62.89%, #D4BB44 63.28%, #D4B946 63.68%, #D3B748 64.07%, #D2B54A 64.46%, #D2B34C 64.85%, #D1B14E 65.24%, #D0AF50 65.63%, #D0AD52 66.02%, #CFAB54 66.41%, #CEA956 66.8%, #CEA758 67.19%, #CDA55A 67.58%, #CDA35C 67.97%, #CCA15E 68.36%, #CB9F60 68.75%, #CB9D62 69.14%, #CA9B64 69.53%, #C99966 69.93%, #C99768 70.32%, #C8956A 70.71%, #C7936C 71.1%, #C7916E 71.49%, #C68F70 71.88%, #C58D72 72.27%, #C58B74 72.66%, #C48976 73.05%, #C38778 73.44%, #C3857A 73.83%, #C2837C 74.22%, #C1817E 74.61%, #C1807F 75%, #C07E81 75.39%, #BF7C83 75.78%, #BF7A85 76.18%, #BE7887 76.57%, #BD7689 76.96%, #BD748B 77.35%, #BC728D 77.74%, #BB708F 78.13%, #BB6E91 78.52%, #BA6C93 78.91%, #B96A95 79.3%, #B96897 79.69%, #B86699 80.08%, #B7649B 80.47%, #B7629D 80.86%, #B6609F 81.25%, #B55EA1 81.64%, #B55CA3 82.03%, #B45AA5 82.43%, #B358A7 82.82%, #B356A9 83.21%, #B254AB 83.6%, #B152AD 83.99%, #B150AF 84.38%, #B04EB1 84.77%, #AF4CB3 85.16%, #AF4AB5 85.55%, #AE48B7 85.94%, #AD46B9 86.33%, #AD44BB 86.72%, #AC42BD 87.11%, #AB40BF 87.5%, #AB3EC1 87.89%, #AA3CC3 88.28%, #A93AC5 88.68%, #A938C7 89.07%, #A836C9 89.46%, #A734CB 89.85%, #A732CD 90.24%, #A630CF 90.63%, #A52ED1 91.02%, #A52CD3 91.41%, #A42AD5 91.8%, #A328D7 92.19%, #A326D9 92.58%, #A224DB 92.97%, #A122DD 93.36%, #A120DF 93.75%, #A01EE1 94.14%, #9F1CE3 94.53%, #9F1AE5 94.93%, #9E18E7 95.32%, #9D16E9 95.71%, #9D14EB 96.1%, #9C12ED 96.49%, #9B10EF 96.88%, #9B0EF1 97.27%, #9A0CF3 97.66%, #990AF5 98.05%, #9908F7 98.44%, #9806F9 98.83%, #9704FB 99.22%, #9702FD 99.61%, #9600FF 100%)",
    },
  ]);

  // Fetch students from API
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/frontend/pte-students`
        );
        if (response.data && response.data.length > 0) {
          setStudents(
            response.data.map((student) => ({
              name: student.name,
              country: student.country,
              flag: student.flag
                ? `${API_BASE_URL.replace('/api','')}${student.flag}`
                : Malaysia1,
              image: student.image
                ? `${API_BASE_URL.replace('/api','')}${student.image}`
                : Malaysia,
              gradient: student.gradient,
            }))
          );
        }
      } catch (error) {
        console.error("Error fetching students:", error);
        // Keep default students if API fails
      }
    };

    fetchStudents();
  }, []);

  // const defaultStudents = [
  //   {
  //     name: "Natalie",
  //     country: "Russia",
  //     flag: Russia1,
  //     image: Russia,
  //     gradient:
  //       "linear-gradient(90deg, #FFF 0%, #FDFDFF 0.39%, #FBFBFF 0.78%, #FAF9FF 1.17%, #F8F7FF 1.56%, #F6F5FF 1.95%, #F4F3FF 2.34%, #F3F1FF 2.73%, #F1EFFF 3.12%, #EFEDFF 3.51%, #EDEBFF 3.9%, #EBE9FF 4.29%, #EAE7FF 4.68%, #E8E5FF 5.07%, #E6E3FF 5.47%, #E4E1FF 5.86%, #E3DFFF 6.25%, #E1DDFF 6.64%, #DFDBFF 7.03%, #DDD9FF 7.42%, #DCD7FF 7.81%, #DAD5FF 8.2%, #D8D3FF 8.59%, #D6D1FF 8.98%, #D4CFFF 9.37%, #D3CDFF 9.76%, #D1CBFF 10.15%, #CFC9FF 10.54%, #CDC7FF 10.93%, #CCC5FF 11.32%, #CAC3FF 11.72%, #C8C1FF 12.11%, #C6BFFF 12.5%, #C4BDFF 12.89%, #C3BBFF 13.28%, #C1B9FF 13.67%, #BFB7FF 14.06%, #BDB5FF 14.45%, #BCB3FF 14.84%, #BAB1FF 15.23%, #B8AFFF 15.62%, #B6ADFF 16.01%, #B5ABFF 16.4%, #B3A9FF 16.79%, #B1A7FF 17.18%, #AFA5FF 17.57%, #ADA3FF 17.97%, #ACA1FF 18.36%, #AA9FFF 18.75%, #A89DFF 19.14%, #A69BFF 19.53%, #A599FF 19.92%, #A397FF 20.31%, #A195FF 20.7%, #9F93FF 21.09%, #9D91FF 21.48%, #9C8FFF 21.87%, #9A8DFF 22.26%, #988BFF 22.65%, #9689FF 23.04%, #9587FF 23.43%, #9385FF 23.82%, #9183FF 24.22%, #8F81FF 24.61%, #8E80FF 25%, #8C7EFF 25.39%, #8A7CFF 25.78%, #887AFF 26.17%, #8678FF 26.56%, #8576FF 26.95%, #8374FF 27.34%, #8172FF 27.73%, #7F70FF 28.12%, #7E6EFF 28.51%, #7C6CFF 28.9%, #7A6AFF 29.29%, #7868FF 29.68%, #7666FF 30.07%, #7564FF 30.47%, #7362FF 30.86%, #7160FF 31.25%, #6F5EFF 31.64%, #6E5CFF 32.03%, #6C5AFF 32.42%, #6A58FF 32.81%, #6856FF 33.2%, #6754FF 33.59%, #6552FF 33.98%, #6350FF 34.37%, #614EFF 34.76%, #5F4CFF 35.15%, #5E4AFF 35.54%, #5C48FF 35.93%, #5A46FF 36.32%, #5844FF 36.72%, #5742FF 37.11%, #5540FF 37.5%, #533EFF 37.89%, #513CFF 38.28%, #4F3AFF 38.67%, #4E38FF 39.06%, #4C36FF 39.45%, #4A34FF 39.84%, #4832FF 40.23%, #4730FF 40.62%, #452EFF 41.01%, #432CFF 41.4%, #412AFF 41.79%, #4028FF 42.18%, #3E26FF 42.57%, #3C24FF 42.97%, #3A22FF 43.36%, #3820FF 43.75%, #371EFF 44.14%, #351CFF 44.53%, #331AFF 44.92%, #3118FF 45.31%, #3016FF 45.7%, #2E14FF 46.09%, #2C12FF 46.48%, #2A10FF 46.87%, #280EFF 47.26%, #270CFF 47.65%, #250AFF 48.04%, #2308FF 48.43%, #2106FF 48.82%, #2004FF 49.22%, #1E02FF 49.61%, #1C00FF 50%, #1E00FD 50.39%, #2000FB 50.78%, #2100F9 51.17%, #2300F7 51.56%, #2500F5 51.95%, #2700F3 52.34%, #2800F1 52.73%, #2A00EF 53.12%, #2C00ED 53.51%, #2E00EB 53.9%, #3000E9 54.29%, #3100E7 54.68%, #3300E5 55.07%, #3500E3 55.47%, #3700E1 55.86%, #3800DF 56.25%, #3A00DD 56.64%, #3C00DB 57.03%, #3E00D9 57.42%, #4000D7 57.81%, #4100D5 58.2%, #4300D3 58.59%, #4500D1 58.98%, #4700CF 59.37%, #4800CD 59.76%, #4A00CB 60.15%, #4C00C9 60.54%, #4E00C7 60.93%, #4F00C5 61.32%, #5100C3 61.72%, #5300C1 62.11%, #5500BF 62.5%, #5700BD 62.89%, #5800BB 63.28%, #5A00B9 63.67%, #5C00B7 64.06%, #5E00B5 64.45%, #5F00B3 64.84%, #6100B1 65.23%, #6300AF 65.62%, #6500AD 66.01%, #6700AB 66.4%, #6800A9 66.79%, #6A00A7 67.18%, #6C00A5 67.57%, #6E00A3 67.97%, #6F00A1 68.36%, #71009F 68.75%, #73009D 69.14%, #75009B 69.53%, #760099 69.92%, #780097 70.31%, #7A0095 70.7%, #7C0093 71.09%, #7E0091 71.48%, #7F008F 71.87%, #81008D 72.26%, #83008B 72.65%, #850089 73.04%, #860087 73.43%, #880085 73.82%, #8A0083 74.22%, #8C0081 74.61%, #8E0080 75%, #8F007E 75.39%, #91007C 75.78%, #93007A 76.17%, #950078 76.56%, #960076 76.95%, #980074 77.34%, #9A0072 77.73%, #9C0070 78.12%, #9D006E 78.51%, #9F006C 78.9%, #A1006A 79.29%, #A30068 79.68%, #A50066 80.07%, #A60064 80.47%, #A80062 80.86%, #AA0060 81.25%, #AC005E 81.64%, #AD005C 82.03%, #AF005A 82.42%, #B10058 82.81%, #B30056 83.2%, #B50054 83.59%, #B60052 83.98%, #B80050 84.37%, #BA004E 84.76%, #BC004C 85.15%, #BD004A 85.54%, #BF0048 85.93%, #C10046 86.32%, #C30044 86.72%, #C40042 87.11%, #C60040 87.5%, #C8003E 87.89%, #CA003C 88.28%, #CC003A 88.67%, #CD0038 89.06%, #CF0036 89.45%, #D10034 89.84%, #D30032 90.23%, #D40030 90.62%, #D6002E 91.01%, #D8002C 91.4%, #DA002A 91.79%, #DC0028 92.18%, #DD0026 92.57%, #DF0024 92.97%, #E10022 93.36%, #E30020 93.75%, #E4001E 94.14%, #E6001C 94.53%, #E8001A 94.92%, #EA0018 95.31%, #EB0016 95.7%, #ED0014 96.09%, #EF0012 96.48%, #F10010 96.87%, #F3000E 97.26%, #F4000C 97.65%, #F6000A 98.04%, #F80008 98.43%, #FA0006 98.82%, #FB0004 99.22%, #FD0002 99.61%, #F00 100%)",
  //   },
  //   {
  //     name: "Farhana",
  //     country: "Malaysia",
  //     flag: Malaysia1,
  //     image: Malaysia,
  //     gradient: " linear-gradient(90deg, #FFFDFD 0%, #FEFCFC 0.39%, #FEFCFC 0.78%, #FDFBFB 1.17%, #FCFAFA 1.56%, #FCFAFA 1.96%, #FBF9F9 2.35%, #FAF8F8 2.74%, #FAF8F8 3.13%, #F9F7F7 3.52%, #F8F6F6 3.91%, #F8F6F6 4.3%, #F7F5F5 4.69%, #F6F4F4 5.08%, #F6F4F4 5.47%, #F5F3F3 5.86%, #F4F2F2 6.25%, #F4F2F2 6.64%, #F3F1F1 7.03%, #F2F0F0 7.42%, #F2F0F0 7.81%, #F1EFEF 8.21%, #F0EFEF 8.6%, #F0EEEE 8.99%, #EFEDED 9.38%, #EEEDED 9.77%, #EEECEC 10.16%, #EDEBEB 10.55%, #ECEBEB 10.94%, #ECEAEA 11.33%, #EBE9E9 11.72%, #EAE9E9 12.11%, #EAE8E8 12.5%, #E9E7E7 12.89%, #E8E7E7 13.28%, #E8E6E6 13.67%, #E7E5E5 14.06%, #E6E5E5 14.46%, #E6E4E4 14.85%, #E5E3E3 15.24%, #E4E3E3 15.63%, #E4E2E2 16.02%, #E3E1E1 16.41%, #E2E1E1 16.8%, #E2E0E0 17.19%, #E1DFDF 17.58%, #E0DFDF 17.97%, #E0DEDE 18.36%, #DFDDDD 18.75%, #DEDDDD 19.14%, #DEDCDC 19.53%, #DDDBDB 19.92%, #DCDBDB 20.31%, #DCDADA 20.71%, #DBDADA 21.1%, #DAD9D9 21.49%, #DAD8D8 21.88%, #D9D8D8 22.27%, #D8D7D7 22.66%, #D8D6D6 23.05%, #D7D6D6 23.44%, #D6D5D5 23.83%, #D6D4D4 24.22%, #D5D4D4 24.61%, #D4D3D3 25%, #D4D2D2 25.39%, #D3D2D2 25.78%, #D2D1D1 26.17%, #D2D0D0 26.56%, #D1D0D0 26.96%, #D0CFCF 27.35%, #D0CECE 27.74%, #CFCECE 28.13%, #CECDCD 28.52%, #CECCCC 28.91%, #CDCCCC 29.3%, #CDCBCB 29.69%, #CCCACA 30.08%, #CBCACA 30.47%, #CBC9C9 30.86%, #CAC8C8 31.25%, #C9C8C8 31.64%, #C9C7C7 32.03%, #C8C6C6 32.42%, #C7C6C6 32.81%, #C7C5C5 33.21%, #C6C5C5 33.6%, #C5C4C4 33.99%, #C5C3C3 34.38%, #C4C3C3 34.77%, #C3C2C2 35.16%, #C3C1C1 35.55%, #C2C1C1 35.94%, #C1C0C0 36.33%, #C1BFBF 36.72%, #C0BFBF 37.11%, #BFBEBE 37.5%, #BFBDBD 37.89%, #BEBDBD 38.28%, #BDBCBC 38.67%, #BDBBBB 39.06%, #BCBBBB 39.46%, #BBBABA 39.85%, #BBB9B9 40.24%, #BAB9B9 40.63%, #B9B8B8 41.02%, #B9B7B7 41.41%, #B8B7B7 41.8%, #B7B6B6 42.19%, #B7B5B5 42.58%, #B6B5B5 42.97%, #B5B4B4 43.36%, #B5B3B3 43.75%, #B4B3B3 44.14%, #B3B2B2 44.53%, #B3B1B1 44.92%, #B2B1B1 45.31%, #B1B0B0 45.71%, #B1AFAF 46.1%, #B0AFAF 46.49%, #AFAEAE 46.88%, #AFAEAE 47.27%, #AEADAD 47.66%, #ADACAC 48.05%, #ADACAC 48.44%, #ACABAB 48.83%, #ABAAAA 49.22%, #ABAAAA 49.61%, #AAA9A9 50%, #A9A8A8 50.39%, #A9A8A8 50.78%, #A8A7A7 51.17%, #A7A6A6 51.56%, #A7A6A6 51.96%, #A6A5A5 52.35%, #A5A4A4 52.74%, #A5A4A4 53.13%, #A4A3A3 53.52%, #A3A2A2 53.91%, #A3A2A2 54.3%, #A2A1A1 54.69%, #A1A0A0 55.08%, #A1A0A0 55.47%, #A09F9F 55.86%, #9F9E9E 56.25%, #9F9E9E 56.64%, #9E9D9D 57.03%, #9D9C9C 57.42%, #9D9C9C 57.81%, #9C9B9B 58.21%, #9B9A9A 58.6%, #9B9A9A 58.99%, #9A9999 59.38%, #999 59.77%, #999898 60.16%, #989797 60.55%, #979797 60.94%, #979696 61.33%, #969595 61.72%, #959595 62.11%, #959494 62.5%, #949393 62.89%, #939393 63.28%, #939292 63.67%, #929191 64.06%, #919191 64.46%, #919090 64.85%, #908F8F 65.24%, #8F8F8F 65.63%, #8F8E8E 66.02%, #8E8D8D 66.41%, #8D8D8D 66.8%, #8D8C8C 67.19%, #8C8B8B 67.58%, #8B8B8B 67.97%, #8B8A8A 68.36%, #8A8989 68.75%, #898989 69.14%, #898888 69.53%, #888787 69.92%, #878787 70.31%, #878686 70.71%, #868585 71.1%, #858585 71.49%, #858484 71.88%, #848484 72.27%, #838383 72.66%, #838282 73.05%, #828282 73.44%, #818181 73.83%, #818080 74.22%, #808080 74.61%, #7F7F7F 75%, #7F7E7E 75.39%, #7E7E7E 75.78%, #7D7D7D 76.17%, #7D7C7C 76.56%, #7C7C7C 76.96%, #7B7B7B 77.35%, #7B7A7A 77.74%, #7A7A7A 78.13%, #797979 78.52%, #797878 78.91%, #787878 79.3%, #777 79.69%, #777676 80.08%, #767676 80.47%, #757575 80.86%, #757474 81.25%, #747474 81.64%, #737373 82.03%, #737272 82.42%, #727272 82.81%, #717171 83.21%, #717070 83.6%, #707070 83.99%, #6F6F6F 84.38%, #6F6F6F 84.77%, #6E6E6E 85.16%, #6D6D6D 85.55%, #6D6D6D 85.94%, #6C6C6C 86.33%, #6C6B6B 86.72%, #6B6B6B 87.11%, #6A6A6A 87.5%, #6A6969 87.89%, #696969 88.28%, #686868 88.67%, #686767 89.06%, #676767 89.46%, #666 89.85%, #666565 90.24%, #656565 90.63%, #646464 91.02%, #646363 91.41%, #636363 91.8%, #626262 92.19%, #626161 92.58%, #616161 92.97%, #606060 93.36%, #605F5F 93.75%, #5F5F5F 94.14%, #5E5E5E 94.53%, #5E5D5D 94.92%, #5D5D5D 95.31%, #5C5C5C 95.71%, #5C5B5B 96.1%, #5B5B5B 96.49%, #5A5A5A 96.88%, #5A5A5A 97.27%, #595959 97.66%, #585858 98.05%, #585858 98.44%, #575757 98.83%, #565656 99.22%, #565656 99.61%, #555 100%)",
  //   },
  //   {
  //     name: "Bima",
  //     country: "Indonesia",
  //     flag: Indonesia1,
  //     image: Indonesia,
  //     gradient: " linear-gradient(90deg, #F00 0%, #FF0101 0.39%, #FF0202 0.78%, #FF0303 1.17%, #FF0404 1.56%, #FF0505 1.96%, #FF0606 2.35%, #FF0707 2.74%, #FF0808 3.13%, #FF0909 3.52%, #FF0A0A 3.91%, #FF0B0B 4.3%, #FF0C0C 4.69%, #FF0D0D 5.08%, #FF0E0E 5.47%, #FF0F0F 5.86%, #FF1010 6.25%, #F11 6.64%, #FF1212 7.03%, #FF1313 7.42%, #FF1414 7.81%, #FF1515 8.21%, #FF1616 8.6%, #FF1717 8.99%, #FF1818 9.38%, #FF1919 9.77%, #FF1A1A 10.16%, #FF1B1B 10.55%, #FF1C1C 10.94%, #FF1D1D 11.33%, #FF1E1E 11.72%, #FF1F1F 12.11%, #FF2020 12.5%, #FF2121 12.89%, #F22 13.28%, #FF2323 13.67%, #FF2424 14.06%, #FF2525 14.46%, #FF2626 14.85%, #FF2727 15.24%, #FF2828 15.63%, #FF2929 16.02%, #FF2A2A 16.41%, #FF2B2B 16.8%, #FF2C2C 17.19%, #FF2D2D 17.58%, #FF2E2E 17.97%, #FF2F2F 18.36%, #FF3030 18.75%, #FF3131 19.14%, #FF3232 19.53%, #F33 19.92%, #FF3434 20.31%, #FF3535 20.71%, #FF3636 21.1%, #FF3737 21.49%, #FF3838 21.88%, #FF3939 22.27%, #FF3A3A 22.66%, #FF3B3B 23.05%, #FF3C3C 23.44%, #FF3D3D 23.83%, #FF3E3E 24.22%, #FF3F3F 24.61%, #FF4040 25%, #FF4141 25.39%, #FF4242 25.78%, #FF4343 26.17%, #F44 26.56%, #FF4545 26.96%, #FF4646 27.35%, #FF4747 27.74%, #FF4848 28.13%, #FF4949 28.52%, #FF4A4A 28.91%, #FF4B4B 29.3%, #FF4C4C 29.69%, #FF4D4D 30.08%, #FF4E4E 30.47%, #FF4F4F 30.86%, #FF5050 31.25%, #FF5151 31.64%, #FF5252 32.03%, #FF5353 32.42%, #FF5454 32.81%, #F55 33.21%, #FF5656 33.6%, #FF5757 33.99%, #FF5858 34.38%, #FF5959 34.77%, #FF5A5A 35.16%, #FF5B5B 35.55%, #FF5C5C 35.94%, #FF5D5D 36.33%, #FF5E5E 36.72%, #FF5F5F 37.11%, #FF6060 37.5%, #FF6161 37.89%, #FF6262 38.28%, #FF6363 38.67%, #FF6464 39.06%, #FF6565 39.46%, #F66 39.85%, #FF6767 40.24%, #FF6868 40.63%, #FF6969 41.02%, #FF6A6A 41.41%, #FF6B6B 41.8%, #FF6C6C 42.19%, #FF6D6D 42.58%, #FF6E6E 42.97%, #FF6F6F 43.36%, #FF7070 43.75%, #FF7171 44.14%, #FF7272 44.53%, #FF7373 44.92%, #FF7474 45.31%, #FF7575 45.71%, #FF7676 46.1%, #F77 46.49%, #FF7878 46.88%, #FF7979 47.27%, #FF7A7A 47.66%, #FF7B7B 48.05%, #FF7C7C 48.44%, #FF7D7D 48.83%, #FF7E7E 49.22%, #FF7F7F 49.61%, #FF7F7F 50%, #FF8080 50.39%, #FF8181 50.78%, #FF8282 51.17%, #FF8383 51.56%, #FF8484 51.96%, #FF8585 52.35%, #FF8686 52.74%, #FF8787 53.13%, #F88 53.52%, #FF8989 53.91%, #FF8A8A 54.3%, #FF8B8B 54.69%, #FF8C8C 55.08%, #FF8D8D 55.47%, #FF8E8E 55.86%, #FF8F8F 56.25%, #FF9090 56.64%, #FF9191 57.03%, #FF9292 57.42%, #FF9393 57.81%, #FF9494 58.21%, #FF9595 58.6%, #FF9696 58.99%, #FF9797 59.38%, #FF9898 59.77%, #F99 60.16%, #FF9A9A 60.55%, #FF9B9B 60.94%, #FF9C9C 61.33%, #FF9D9D 61.72%, #FF9E9E 62.11%, #FF9F9F 62.5%, #FFA0A0 62.89%, #FFA1A1 63.28%, #FFA2A2 63.67%, #FFA3A3 64.06%, #FFA4A4 64.46%, #FFA5A5 64.85%, #FFA6A6 65.24%, #FFA7A7 65.63%, #FFA8A8 66.02%, #FFA9A9 66.41%, #FAA 66.8%, #FFABAB 67.19%, #FFACAC 67.58%, #FFADAD 67.97%, #FFAEAE 68.36%, #FFAFAF 68.75%, #FFB0B0 69.14%, #FFB1B1 69.53%, #FFB2B2 69.92%, #FFB3B3 70.31%, #FFB4B4 70.71%, #FFB5B5 71.1%, #FFB6B6 71.49%, #FFB7B7 71.88%, #FFB8B8 72.27%, #FFB9B9 72.66%, #FFBABA 73.05%, #FBB 73.44%, #FFBCBC 73.83%, #FFBDBD 74.22%, #FFBEBE 74.61%, #FFBFBF 75%, #FFC0C0 75.39%, #FFC1C1 75.78%, #FFC2C2 76.17%, #FFC3C3 76.56%, #FFC4C4 76.96%, #FFC5C5 77.35%, #FFC6C6 77.74%, #FFC7C7 78.13%, #FFC8C8 78.52%, #FFC9C9 78.91%, #FFCACA 79.3%, #FFCBCB 79.69%, #FCC 80.08%, #FFCDCD 80.47%, #FFCECE 80.86%, #FFCFCF 81.25%, #FFD0D0 81.64%, #FFD1D1 82.03%, #FFD2D2 82.42%, #FFD3D3 82.81%, #FFD4D4 83.21%, #FFD5D5 83.6%, #FFD6D6 83.99%, #FFD7D7 84.38%, #FFD8D8 84.77%, #FFD9D9 85.16%, #FFDADA 85.55%, #FFDBDB 85.94%, #FFDCDC 86.33%, #FDD 86.72%, #FFDEDE 87.11%, #FFDFDF 87.5%, #FFE0E0 87.89%, #FFE1E1 88.28%, #FFE2E2 88.67%, #FFE3E3 89.06%, #FFE4E4 89.46%, #FFE5E5 89.85%, #FFE6E6 90.24%, #FFE7E7 90.63%, #FFE8E8 91.02%, #FFE9E9 91.41%, #FFEAEA 91.8%, #FFEBEB 92.19%, #FFECEC 92.58%, #FFEDED 92.97%, #FEE 93.36%, #FFEFEF 93.75%, #FFF0F0 94.14%, #FFF1F1 94.53%, #FFF2F2 94.92%, #FFF3F3 95.31%, #FFF4F4 95.71%, #FFF5F5 96.1%, #FFF6F6 96.49%, #FFF7F7 96.88%, #FFF8F8 97.27%, #FFF9F9 97.66%, #FFFAFA 98.05%, #FFFBFB 98.44%, #FFFCFC 98.83%, #FFFDFD 99.22%, #FFFEFE 99.61%, #FFF 100%)",
  //   },
  //   {
  //     name: "Tharushi",
  //     country: "Sri Lanka",
  //     flag: SriLanka1,
  //     image: SriLanka,
  //     gradient: "linear-gradient(90deg, #00FF38 0%, #02FC38 0.39%, #04F937 0.78%, #05F636 1.17%, #07F336 1.56%, #09F035 1.96%, #0BED35 2.35%, #0DEA34 2.74%, #0EE733 3.13%, #10E433 3.52%, #12E132 3.91%, #14DE32 4.3%, #16DC31 4.69%, #17D931 5.08%, #19D630 5.47%, #1BD32F 5.86%, #1DD02F 6.25%, #1FCD2E 6.64%, #20CA2E 7.03%, #22C72D 7.42%, #24C42D 7.81%, #26C12C 8.21%, #27BE2B 8.6%, #29BB2B 8.99%, #2BB82A 9.38%, #2DB52A 9.77%, #2FB229 10.16%, #30AF29 10.55%, #32AC28 10.94%, #34A927 11.33%, #36A627 11.72%, #38A326 12.11%, #39A026 12.5%, #3B9D25 12.89%, #3D9B24 13.28%, #3F9824 13.67%, #419523 14.06%, #429223 14.46%, #448F22 14.85%, #468C22 15.24%, #488921 15.63%, #4A8620 16.02%, #4B8320 16.41%, #4D801F 16.8%, #4F7D1F 17.19%, #517A1E 17.58%, #53771E 17.97%, #54741D 18.36%, #56711C 18.75%, #586E1C 19.14%, #5A6B1B 19.53%, #5C681B 19.92%, #5D651A 20.31%, #5F6219 20.71%, #615F19 21.1%, #635C18 21.49%, #655918 21.88%, #665717 22.27%, #685417 22.66%, #6A5116 23.05%, #6C4E15 23.44%, #6D4B15 23.83%, #6F4814 24.22%, #714514 24.61%, #734213 25%, #753F13 25.39%, #763C12 25.78%, #783911 26.17%, #7A3611 26.56%, #7C3310 26.96%, #7E3010 27.35%, #7F2D0F 27.74%, #812A0F 28.13%, #83270E 28.52%, #85240D 28.91%, #87210D 29.3%, #881E0C 29.69%, #8A1B0C 30.08%, #8C180B 30.47%, #8E160A 30.86%, #90130A 31.25%, #911009 31.64%, #930D09 32.03%, #950A08 32.42%, #970708 32.81%, #980607 33.21%, #990407 33.6%, #9A0607 33.99%, #9B0807 34.38%, #9B0A07 34.77%, #9C0C07 35.16%, #9C0D06 35.55%, #9D0F06 35.94%, #9E1106 36.33%, #9E1306 36.72%, #9F1506 37.11%, #9F1706 37.5%, #A01806 37.89%, #A01A06 38.28%, #A11C06 38.67%, #A21E06 39.06%, #A22006 39.46%, #A32106 39.85%, #A32305 40.24%, #A42505 40.63%, #A52705 41.02%, #A52905 41.41%, #A62A05 41.8%, #A62C05 42.19%, #A72E05 42.58%, #A73005 42.97%, #A83205 43.36%, #A93405 43.75%, #A93505 44.14%, #AA3705 44.53%, #AA3904 44.92%, #AB3B04 45.31%, #AC3D04 45.71%, #AC3E04 46.1%, #AD4004 46.49%, #AD4204 46.88%, #AE4404 47.27%, #AE4604 47.66%, #AF4804 48.05%, #B04904 48.44%, #B04B04 48.83%, #B14D04 49.22%, #B14F04 49.61%, #B25103 50%, #B35203 50.39%, #B35403 50.78%, #B45603 51.17%, #B45803 51.56%, #B55A03 51.96%, #B55B03 52.35%, #B65D03 52.74%, #B75F03 53.13%, #B76103 53.52%, #B86303 53.91%, #B86503 54.3%, #B96602 54.69%, #BA6802 55.08%, #BA6A02 55.47%, #BB6C02 55.86%, #BB6E02 56.25%, #BC6F02 56.64%, #BD7102 57.03%, #BD7302 57.42%, #BE7502 57.81%, #BE7702 58.21%, #BF7802 58.6%, #BF7A02 58.99%, #C07C02 59.38%, #C17E01 59.77%, #C18001 60.16%, #C28201 60.55%, #C28301 60.94%, #C38501 61.33%, #C48701 61.72%, #C48901 62.11%, #C58B01 62.5%, #C58C01 62.89%, #C68E01 63.28%, #C69001 63.67%, #C79201 64.06%, #C89400 64.46%, #C89500 64.85%, #C99700 65.24%, #C99900 65.63%, #CA9B00 66.02%, #CB9D00 66.41%, #CA9C00 67.19%, #C99A00 67.58%, #C89800 67.97%, #C79600 68.36%, #C69400 68.75%, #C69300 69.14%, #C59100 69.53%, #C48F00 69.92%, #C38D00 70.31%, #C28B00 70.71%, #C18900 71.1%, #C08800 71.49%, #C08600 71.88%, #BF8400 72.27%, #BE8200 72.66%, #BD8000 73.05%, #BC7E00 73.44%, #BB7C00 73.83%, #BB7B00 74.22%, #BA7900 74.61%, #B97700 75%, #B87500 75.39%, #B77300 75.78%, #B67100 76.17%, #B57000 76.56%, #B56E00 76.96%, #B46C00 77.35%, #B36A00 77.74%, #B26800 78.13%, #B16600 78.52%, #B06500 78.91%, #AF6300 79.3%, #AF6100 79.69%, #AE5F00 80.08%, #AD5D00 80.47%, #AC5B00 80.86%, #AB5900 81.25%, #AA5800 81.64%, #A95600 82.03%, #A95400 82.42%, #A85200 82.81%, #A75001 83.21%, #A64E01 83.6%, #A54D01 83.99%, #A44B01 84.38%, #A34901 84.77%, #A34701 85.16%, #A24501 85.55%, #A14301 85.94%, #A04201 86.33%, #9F4001 86.72%, #9E3E01 87.11%, #9D3C01 87.5%, #9D3A01 87.89%, #9C3801 88.28%, #9B3601 88.67%, #9A3501 89.06%, #993301 89.46%, #983101 89.85%, #972F01 90.24%, #972D01 90.63%, #962B01 91.02%, #952A01 91.41%, #942801 91.8%, #932601 92.19%, #922401 92.58%, #912201 92.97%, #912001 93.36%, #901F01 93.75%, #8F1D01 94.14%, #8E1B01 94.53%, #8D1901 94.92%, #8C1701 95.31%, #8B1501 95.71%, #8B1301 96.1%, #8A1201 96.49%, #891001 96.88%, #880E01 97.27%, #870C01 97.66%, #860A01 98.05%, #850801 98.44%, #850701 98.83%, #840501 99.22%, #830301 99.61%, #820101 100%)",
  //   },
  //   {
  //     name: "Abdul",
  //     country: "Bangladesh",
  //     flag: Bangladesh1,
  //     image: Bangladesh,
  //     gradient: " linear-gradient(90deg, #075700 0%, #085700 0.39%, #095600 0.78%, #0A5600 1.17%, #0B5600 1.56%, #0C5500 1.96%, #0D5500 2.35%, #0E5500 2.74%, #0F5400 3.13%, #105400 3.52%, #115400 3.91%, #125300 4.3%, #135300 4.69%, #135300 5.08%, #145200 5.47%, #155200 5.86%, #165200 6.25%, #175100 6.64%, #185100 7.03%, #195000 7.42%, #1A5000 7.81%, #1B5000 8.21%, #1C4F00 8.6%, #1D4F00 8.99%, #1E4F00 9.38%, #1F4E00 9.77%, #204E00 10.16%, #214E00 10.55%, #224D00 10.94%, #234D00 11.33%, #244D00 11.72%, #254C00 12.11%, #264C00 12.5%, #274C00 12.89%, #284B00 13.28%, #294B00 13.67%, #2A4B00 14.06%, #2B4A00 14.46%, #2C4A00 14.85%, #2D4A00 15.24%, #2E4900 15.63%, #2F4900 16.02%, #304900 16.41%, #314800 16.8%, #324800 17.19%, #324800 17.58%, #334700 17.97%, #344700 18.36%, #354700 18.75%, #364600 19.14%, #374600 19.53%, #384600 19.92%, #394500 20.31%, #3A4500 20.71%, #3B4500 21.1%, #3C4400 21.49%, #3D4400 21.88%, #3E4400 22.27%, #3F4300 22.66%, #404300 23.05%, #414300 23.44%, #424200 23.83%, #434200 24.22%, #444200 24.61%, #454100 25%, #464100 25.39%, #474100 25.78%, #484000 26.17%, #494000 26.56%, #4A4000 26.96%, #4B3F00 27.35%, #4C3F00 27.74%, #4D3E00 28.13%, #4E3E00 28.52%, #4F3E00 28.91%, #503D00 29.3%, #513D00 29.69%, #523D00 30.08%, #523C00 30.47%, #533C00 30.86%, #543C00 31.25%, #553B00 31.64%, #563B00 32.03%, #573B00 32.42%, #583A00 32.81%, #593A00 33.21%, #5A3A00 33.6%, #5B3900 33.99%, #5C3900 34.38%, #5D3900 34.77%, #5E3800 35.16%, #5F3800 35.55%, #603800 35.94%, #613700 36.33%, #623700 36.72%, #633700 37.11%, #643600 37.5%, #653600 37.89%, #663600 38.28%, #673500 38.67%, #683500 39.06%, #693500 39.46%, #6A3400 39.85%, #6B3400 40.24%, #6C3400 40.63%, #6D3300 41.02%, #6E3300 41.41%, #6F3300 41.8%, #703200 42.19%, #713200 42.58%, #713200 42.97%, #723100 43.36%, #733100 43.75%, #743100 44.14%, #753000 44.53%, #763000 44.92%, #773000 45.31%, #782F00 45.71%, #792F00 46.1%, #7A2F00 46.49%, #7B2E00 46.88%, #7C2E00 47.27%, #7D2E00 47.66%, #7E2D00 48.05%, #7F2D00 48.44%, #802C00 48.83%, #812C00 49.22%, #822C00 49.61%, #832B00 50%, #842B00 50.39%, #852B00 50.78%, #862A00 51.17%, #872A00 51.56%, #882A00 51.96%, #892900 52.35%, #8A2900 52.74%, #8B2900 53.13%, #8C2800 53.52%, #8D2800 53.91%, #8E2800 54.3%, #8F2700 54.69%, #902700 55.08%, #912700 55.47%, #912600 55.86%, #922600 56.25%, #932600 56.64%, #942500 57.03%, #952500 57.42%, #962500 57.81%, #972400 58.21%, #982400 58.6%, #992400 58.99%, #9A2300 59.38%, #9B2300 59.77%, #9C2300 60.16%, #9D2200 60.55%, #9E2200 60.94%, #9F2200 61.33%, #A02100 61.72%, #A12100 62.11%, #A22100 62.5%, #A32000 62.89%, #A42000 63.28%, #A52000 63.67%, #A61F00 64.06%, #A71F00 64.46%, #A81F00 64.85%, #A91E00 65.24%, #AA1E00 65.63%, #AB1E00 66.02%, #AC1D00 66.41%, #AD1D00 66.8%, #AE1D00 67.19%, #AF1C00 67.58%, #B01C00 67.97%, #B01C00 68.36%, #B11B00 68.75%, #B21B00 69.14%, #B31A00 69.53%, #B41A00 69.92%, #B51A00 70.31%, #B61900 70.71%, #B71900 71.1%, #B81900 71.49%, #B91800 71.88%, #BA1800 72.27%, #BB1800 72.66%, #BC1700 73.05%, #BD1700 73.44%, #BE1700 73.83%, #BF1600 74.22%, #C01600 74.61%, #C11600 75%, #C21500 75.39%, #C31500 75.78%, #C41500 76.17%, #C51400 76.56%, #C61400 76.96%, #C71400 77.35%, #C81300 77.74%, #C91300 78.13%, #CA1300 78.52%, #CB1200 78.91%, #CC1200 79.3%, #CD1200 79.69%, #CE1100 80.08%, #CF1100 80.47%, #D01100 80.86%, #D01000 81.25%, #D11000 81.64%, #D21000 82.03%, #D30F00 82.42%, #D40F00 82.81%, #D50F00 83.21%, #D60E00 83.6%, #D70E00 83.99%, #D80E00 84.38%, #D90D00 84.77%, #DA0D00 85.16%, #DB0D00 85.55%, #DC0C00 85.94%, #DD0C00 86.33%, #DE0C00 86.72%, #DF0B00 87.11%, #E00B00 87.5%, #E10B00 87.89%, #E20A00 88.28%, #E30A00 88.67%, #E40A00 89.06%, #E50900 89.46%, #E60900 89.85%, #E70800 90.24%, #E80800 90.63%, #E90800 91.02%, #EA0700 91.41%, #EB0700 91.8%, #EC0700 92.19%, #ED0600 92.58%, #EE0600 92.97%, #EF0600 93.36%, #EF0500 93.75%, #F00500 94.14%, #F10500 94.53%, #F20400 94.92%, #F30400 95.31%, #F40400 95.71%, #F50300 96.1%, #F60300 96.49%, #F70300 96.88%, #F80200 97.27%, #F90200 97.66%, #FA0200 98.05%, #FB0100 98.44%, #FC0100 98.83%, #FD0100 99.22%, #FE0000 99.61%, #F00 100%)",
  //   },
  //   {
  //     name: "Sudip",
  //     country: "Nepal",
  //     flag: Nepal1,
  //     image: Nepal,
  //     gradient: "linear-gradient(90deg, #F00 0%, #FE0002 0.39%, #FD0004 0.78%, #FB0006 1.17%, #FA0008 1.56%, #F9000A 1.96%, #F8000C 2.35%, #F7000E 2.74%, #F60010 3.13%, #F40012 3.52%, #F30014 3.91%, #F20016 4.3%, #F10018 4.69%, #F0001A 5.08%, #EF001C 5.47%, #ED001E 5.86%, #EC0020 6.25%, #EB0022 6.64%, #EA0024 7.03%, #E90026 7.42%, #E80028 7.81%, #E6002A 8.21%, #E5002C 8.6%, #E4002E 8.99%, #E30030 9.38%, #E20032 9.77%, #E10034 10.16%, #DF0036 10.55%, #DE0038 10.94%, #DD003A 11.33%, #DC003C 11.72%, #DB003E 12.11%, #DA0040 12.5%, #D80042 12.89%, #D70044 13.28%, #D60046 13.67%, #D50048 14.06%, #D4004A 14.46%, #D2004C 14.85%, #D1004E 15.24%, #D00050 15.63%, #CF0052 16.02%, #CE0054 16.41%, #CD0056 16.8%, #CB0058 17.19%, #CA005A 17.58%, #C9005C 17.97%, #C8005E 18.36%, #C70060 18.75%, #C60062 19.14%, #C40064 19.53%, #C30066 19.92%, #C20068 20.31%, #C1006A 20.71%, #C0006C 21.1%, #BF006E 21.49%, #BD0070 21.88%, #BC0072 22.27%, #BB0074 22.66%, #BA0076 23.05%, #B90078 23.44%, #B8007A 23.83%, #B6007C 24.22%, #B5007E 24.61%, #B4007F 25%, #B30081 25.39%, #B20083 25.78%, #B10085 26.17%, #AF0087 26.56%, #AE0089 26.96%, #AD008B 27.35%, #AC008D 27.74%, #AB008F 28.13%, #A90091 28.52%, #A80093 28.91%, #A70095 29.3%, #A60097 29.69%, #A50099 30.08%, #A4009B 30.47%, #A2009D 30.86%, #A1009F 31.25%, #A000A1 31.64%, #9F00A3 32.03%, #9E00A5 32.42%, #9D00A7 32.81%, #9B00A9 33.21%, #9A00AB 33.6%, #9900AD 33.99%, #9800AF 34.38%, #9700B1 34.77%, #9600B3 35.16%, #9400B5 35.55%, #9300B7 35.94%, #9200B9 36.33%, #9100BB 36.72%, #9000BD 37.11%, #8F00BF 37.5%, #8D00C1 37.89%, #8C00C3 38.28%, #8B00C5 38.67%, #8A00C7 39.06%, #8900C9 39.46%, #8800CB 39.85%, #8600CD 40.24%, #8500CF 40.63%, #8400D1 41.02%, #8300D3 41.41%, #8200D5 41.8%, #8000D7 42.19%, #7F00D9 42.58%, #7E00DB 42.97%, #7D00DD 43.36%, #7C00DF 43.75%, #7B00E1 44.14%, #7900E3 44.53%, #7800E5 44.92%, #7700E7 45.31%, #7600E9 45.71%, #7500EB 46.1%, #7400ED 46.49%, #7200EF 46.88%, #7100F1 47.27%, #7000F3 47.66%, #6F00F5 48.05%, #6E00F7 48.44%, #6D00F9 48.83%, #6B00FB 49.22%, #6A00FD 49.61%, #6900FF 50%, #6A02FF 50.39%, #6B04FF 50.78%, #6D06FF 51.17%, #6E08FF 51.56%, #6F0AFF 51.96%, #700CFF 52.35%, #710EFF 52.74%, #7210FF 53.13%, #7312FF 53.52%, #7514FF 53.91%, #7616FF 54.3%, #7718FF 54.69%, #781AFF 55.08%, #791CFF 55.47%, #7A1EFF 55.86%, #7C20FF 56.25%, #7D22FF 56.64%, #7E24FF 57.03%, #7F26FF 57.42%, #8028FF 57.81%, #8129FF 58.21%, #822BFF 58.6%, #842DFF 58.99%, #852FFF 59.38%, #8631FF 59.77%, #8733FF 60.16%, #8835FF 60.55%, #8937FF 60.94%, #8B39FF 61.33%, #8C3BFF 61.72%, #8D3DFF 62.11%, #8E3FFE 62.5%, #8F41FE 62.89%, #9043FE 63.28%, #9145FE 63.67%, #9347FE 64.06%, #9449FE 64.46%, #954BFE 64.85%, #964DFE 65.24%, #974FFE 65.63%, #9851FE 66.02%, #9A53FE 66.41%, #9B55FE 66.8%, #9C57FE 67.19%, #9D59FE 67.58%, #9E5BFE 67.97%, #9F5DFE 68.36%, #A15FFE 68.75%, #A261FE 69.14%, #A363FE 69.53%, #A465FE 69.92%, #A567FE 70.31%, #A669FE 70.71%, #A76BFE 71.1%, #A96DFE 71.49%, #AA6FFE 71.88%, #AB71FE 72.27%, #AC73FE 72.66%, #AD75FE 73.05%, #AE77FE 73.44%, #B079FE 73.83%, #B17BFE 74.22%, #B27DFE 74.61%, #B37EFE 75%, #B480FE 75.39%, #B582FE 75.78%, #B684FE 76.17%, #B886FE 76.56%, #B988FE 76.96%, #BA8AFE 77.35%, #BB8CFE 77.74%, #BC8EFE 78.13%, #BD90FE 78.52%, #BF92FE 78.91%, #C094FE 79.3%, #C196FE 79.69%, #C298FE 80.08%, #C39AFE 80.47%, #C49CFE 80.86%, #C59EFE 81.25%, #C7A0FE 81.64%, #C8A2FE 82.03%, #C9A4FE 82.42%, #CAA6FE 82.81%, #CBA8FE 83.21%, #CCAAFE 83.6%, #CEACFE 83.99%, #CFAEFE 84.38%, #D0B0FE 84.77%, #D1B2FE 85.16%, #D2B4FE 85.55%, #D3B6FE 85.94%, #D5B8FE 86.33%, #D6BAFD 86.72%, #D7BCFD 87.11%, #D8BEFD 87.5%, #D9C0FD 87.89%, #DAC2FD 88.28%, #DBC4FD 88.67%, #DDC6FD 89.06%, #DEC8FD 89.46%, #DFCAFD 89.85%, #E0CCFD 90.24%, #E1CEFD 90.63%, #E2D0FD 91.02%, #E4D1FD 91.41%, #E5D3FD 91.8%, #E6D5FD 92.19%, #E7D7FD 92.58%, #E8D9FD 92.97%, #E9DBFD 93.36%, #EADDFD 93.75%, #ECDFFD 94.14%, #EDE1FD 94.53%, #EEE3FD 94.92%, #EFE5FD 95.31%, #F0E7FD 95.71%, #F1E9FD 96.1%, #F3EBFD 96.49%, #F4EDFD 96.88%, #F5EFFD 97.27%, #F6F1FD 97.66%, #F7F3FD 98.05%, #F8F5FD 98.44%, #F9F7FD 98.83%, #FBF9FD 99.22%, #FCFBFD 99.61%, #FDFDFD 100%)",
  //   },
  //   {
  //     name: "Deiji",
  //     country: "S. Korea",
  //     flag: SKorea1,
  //     image: SKorea,
  //     gradient: "linear-gradient(90deg, #FFFBFB 0%, #FCF8F8 0.39%, #F9F5F5 0.78%, #F6F2F2 1.17%, #F3EFEF 1.56%, #F0ECEC 1.96%, #EDE9E9 2.35%, #EAE6E6 2.74%, #E7E3E3 3.13%, #E4E0E0 3.52%, #E1DDDD 3.91%, #DEDBDB 4.3%, #DBD8D8 4.69%, #D8D5D5 5.08%, #D5D2D2 5.47%, #D2CFCF 5.86%, #CFCCCC 6.25%, #CCC9C9 6.64%, #C9C6C6 7.03%, #C6C3C3 7.42%, #C3C0C0 7.81%, #C0BDBD 8.21%, #BDBABA 8.6%, #BAB7B7 8.99%, #B7B4B4 9.38%, #B4B1B1 9.77%, #B1AEAE 10.16%, #AEABAB 10.55%, #ABA9A9 10.94%, #A8A6A6 11.33%, #A5A3A3 11.72%, #A2A0A0 12.11%, #9F9D9D 12.5%, #9C9A9A 12.89%, #999797 13.28%, #969494 13.67%, #939191 14.06%, #908E8E 14.46%, #8D8B8B 14.85%, #8A8888 15.24%, #878585 15.63%, #848282 16.02%, #817F7F 16.41%, #7E7C7C 16.8%, #7B7979 17.19%, #787676 17.58%, #757474 17.97%, #727171 18.36%, #6F6E6E 18.75%, #6C6B6B 19.14%, #696868 19.53%, #666565 19.92%, #636262 20.31%, #605F5F 20.71%, #5D5C5C 21.1%, #5A5959 21.49%, #575656 21.88%, #545353 22.27%, #525050 22.66%, #4F4D4D 23.05%, #4C4A4A 23.44%, #494747 23.83%, #464444 24.22%, #434141 24.61%, #403F3F 25%, #3D3C3C 25.39%, #3A3939 25.78%, #373636 26.17%, #343333 26.56%, #313030 26.96%, #2E2D2D 27.35%, #2B2A2A 27.74%, #282727 28.13%, #252424 28.52%, #222121 28.91%, #1F1E1E 29.3%, #1C1B1B 29.69%, #191818 30.08%, #161515 30.47%, #131212 30.86%, #100F0F 31.25%, #0D0D0D 31.64%, #0A0A0A 32.03%, #070707 32.42%, #040404 32.81%, #030202 33.21%, #020000 33.6%, #050000 33.99%, #080000 34.38%, #0B0000 34.77%, #0E0000 35.16%, #100 35.55%, #140000 35.94%, #170000 36.33%, #1A0000 36.72%, #1D0000 37.11%, #200000 37.5%, #230000 37.89%, #260000 38.28%, #290000 38.67%, #2C0000 39.06%, #2F0000 39.46%, #320000 39.85%, #350000 40.24%, #380000 40.63%, #3B0000 41.02%, #3E0000 41.41%, #410000 41.8%, #400 42.19%, #470000 42.58%, #4A0000 42.97%, #4D0000 43.36%, #500000 43.75%, #530000 44.14%, #560000 44.53%, #590000 44.92%, #5C0000 45.31%, #5F0000 45.71%, #620000 46.1%, #650000 46.49%, #680000 46.88%, #6B0000 47.27%, #6E0000 47.66%, #710000 48.05%, #740000 48.44%, #700 48.83%, #7A0000 49.22%, #7D0000 49.61%, #7F0000 50%, #820000 50.39%, #850000 50.78%, #800 51.17%, #8B0000 51.56%, #8E0000 51.96%, #910000 52.35%, #940000 52.74%, #970000 53.13%, #9A0000 53.52%, #9D0000 53.91%, #A00000 54.3%, #A30000 54.69%, #A60000 55.08%, #A90000 55.47%, #AC0000 55.86%, #AF0000 56.25%, #B20000 56.64%, #B50000 57.03%, #B80000 57.42%, #B00 57.81%, #BE0000 58.21%, #C10000 58.6%, #C40000 58.99%, #C70000 59.38%, #CA0000 59.77%, #CD0000 60.16%, #D00000 60.55%, #D30000 60.94%, #D60000 61.33%, #D90000 61.72%, #DC0000 62.11%, #DF0000 62.5%, #E20000 62.89%, #E50000 63.28%, #E80000 63.67%, #EB0000 64.06%, #E00 64.46%, #F10000 64.85%, #F40000 65.24%, #F70000 65.63%, #FA0000 66.02%, #FD0000 66.41%, #FD0002 66.8%, #FD0004 67.19%, #FB0007 67.58%, #FA000A 67.97%, #F8000D 68.36%, #F60010 68.75%, #F50013 69.14%, #F30016 69.53%, #F10019 69.92%, #EF001C 70.31%, #EE001F 70.71%, #EC0022 71.1%, #EA0025 71.49%, #E90028 71.88%, #E7002B 72.27%, #E5002E 72.66%, #E40031 73.05%, #E20034 73.44%, #E00037 73.83%, #DF003A 74.22%, #DD003D 74.61%, #DB0040 75%, #DA0043 75.39%, #D80046 75.78%, #D60049 76.17%, #D5004C 76.56%, #D3004F 76.96%, #D10052 77.35%, #D00054 77.74%, #CE0057 78.13%, #CC005A 78.52%, #CB005D 78.91%, #C90060 79.3%, #C70063 79.69%, #C60066 80.08%, #C40069 80.47%, #C2006C 80.86%, #C0006F 81.25%, #BF0072 81.64%, #BD0075 82.03%, #BB0078 82.42%, #BA007B 82.81%, #B8007E 83.21%, #B60081 83.6%, #B50084 83.99%, #B30087 84.38%, #B1008A 84.77%, #B0008D 85.16%, #AE0090 85.55%, #AC0093 85.94%, #AB0096 86.33%, #A90099 86.72%, #A7009C 87.11%, #A6009F 87.5%, #A400A2 87.89%, #A200A5 88.28%, #A100A8 88.67%, #9F00AB 89.06%, #9D00AE 89.46%, #9C00B1 89.85%, #9A00B4 90.24%, #9800B7 90.63%, #9700BA 91.02%, #9500BD 91.41%, #9300C0 91.8%, #9200C3 92.19%, #9000C6 92.58%, #8E00C9 92.97%, #8C00CC 93.36%, #8B00CF 93.75%, #8900D2 94.14%, #8700D5 94.53%, #8600D8 94.92%, #8400DB 95.31%, #8200DE 95.71%, #8100E1 96.1%, #7F00E4 96.49%, #7D00E7 96.88%, #7C00EA 97.27%, #7A00ED 97.66%, #7800F0 98.05%, #7700F3 98.44%, #7500F6 98.83%, #7300F9 99.22%, #7200FC 99.61%, #7000FF 100%)",
  //   },
  //   {
  //     name: "Natalie",
  //     country: "Iran",
  //     flag: Iran1,
  //     image: Iran,
  //     gradient: "linear-gradient(90deg, #03A822 0%, #05A924 0.39%, #07A925 0.78%, #09AA27 1.18%, #0BAB29 1.57%, #0DAB2B 1.96%, #0FAC2C 2.35%, #11AD2E 2.74%, #13AD30 3.13%, #15AE31 3.52%, #17AF33 3.91%, #19B035 4.3%, #1BB037 4.69%, #1DB138 5.08%, #1FB23A 5.47%, #21B23C 5.86%, #23B33E 6.25%, #25B43F 6.64%, #26B441 7.03%, #28B543 7.43%, #2AB644 7.82%, #2CB646 8.21%, #2EB748 8.6%, #30B84A 8.99%, #32B84B 9.38%, #34B94D 9.77%, #36BA4F 10.16%, #38BA51 10.55%, #3ABB52 10.94%, #3CBC54 11.33%, #3EBC56 11.72%, #40BD57 12.11%, #42BE59 12.5%, #44BE5B 12.89%, #46BF5D 13.28%, #48C05E 13.68%, #4AC060 14.07%, #4CC162 14.46%, #4EC264 14.85%, #50C365 15.24%, #52C367 15.63%, #54C469 16.02%, #56C56A 16.41%, #58C56C 16.8%, #5AC66E 17.19%, #5CC770 17.58%, #5EC771 17.97%, #60C873 18.36%, #62C975 18.75%, #64C977 19.14%, #65CA78 19.53%, #67CB7A 19.93%, #69CB7C 20.32%, #6BCC7D 20.71%, #6DCD7F 21.1%, #6FCD81 21.49%, #71CE83 21.88%, #73CF84 22.27%, #75CF86 22.66%, #77D088 23.05%, #79D18A 23.44%, #7BD18B 23.83%, #7DD28D 24.22%, #7FD38F 24.61%, #81D490 25%, #83D492 25.39%, #85D594 25.78%, #87D696 26.18%, #89D697 26.57%, #8BD799 26.96%, #8DD89B 27.35%, #8FD89D 27.74%, #91D99E 28.13%, #93DAA0 28.52%, #95DAA2 28.91%, #97DBA3 29.3%, #99DCA5 29.69%, #9BDCA7 30.08%, #9DDDA9 30.47%, #9FDEAA 30.86%, #A1DEAC 31.25%, #A2DFAE 31.64%, #A4E0B0 32.03%, #A6E0B1 32.43%, #A8E1B3 32.82%, #AAE2B5 33.21%, #ACE2B6 33.6%, #AEE3B8 33.99%, #B0E4BA 34.38%, #B2E5BC 34.77%, #B4E5BD 35.16%, #B6E6BF 35.55%, #B8E7C1 35.94%, #BAE7C3 36.33%, #BCE8C4 36.72%, #BEE9C6 37.11%, #C0E9C8 37.5%, #C2EAC9 37.89%, #C4EBCB 38.28%, #C6EBCD 38.68%, #C8ECCF 39.07%, #CAEDD0 39.46%, #CCEDD2 39.85%, #CEEED4 40.24%, #D0EFD6 40.63%, #D2EFD7 41.02%, #D4F0D9 41.41%, #D6F1DB 41.8%, #D8F1DC 42.19%, #DAF2DE 42.58%, #DCF3E0 42.97%, #DEF3E2 43.36%, #E0F4E3 43.75%, #E1F5E5 44.14%, #E3F5E7 44.53%, #E5F6E9 44.93%, #E7F7EA 45.32%, #E9F8EC 45.71%, #EBF8EE 46.1%, #EDF9EF 46.49%, #EFFAF1 46.88%, #F1FAF3 47.27%, #F3FBF5 47.66%, #F5FCF6 48.05%, #F7FCF8 48.44%, #F9FDFA 48.83%, #FBFEFC 49.22%, #FDFEFD 49.61%, #FFF 50%, #FFFDFD 50.39%, #FFFBFB 50.78%, #FFF9F9 51.18%, #FFF7F7 51.57%, #FFF5F5 51.96%, #FFF3F3 52.35%, #FFF1F1 52.74%, #FFEFEF 53.13%, #FFEDED 53.52%, #FFEBEB 53.91%, #FFE9E9 54.3%, #FFE7E7 54.69%, #FEE5E5 55.08%, #FEE3E3 55.47%, #FEE1E1 55.86%, #FEDFDF 56.25%, #FEDDDD 56.64%, #FEDBDB 57.03%, #FED9D9 57.43%, #FED7D7 57.82%, #FED5D5 58.21%, #FED3D3 58.6%, #FED1D1 58.99%, #FECFCF 59.38%, #FECDCD 59.77%, #FECBCB 60.16%, #FEC9C9 60.55%, #FEC7C7 60.94%, #FEC5C5 61.33%, #FEC3C3 61.72%, #FEC1C1 62.11%, #FEBFBF 62.5%, #FEBDBD 62.89%, #FEBBBB 63.28%, #FEB9B9 63.68%, #FEB7B7 64.07%, #FEB5B5 64.46%, #FDB3B3 64.85%, #FDB1B1 65.24%, #FDAFAF 65.63%, #FDADAD 66.02%, #FDABAB 66.41%, #FDA9A9 66.8%, #FDA7A7 67.19%, #FDA5A5 67.58%, #FDA3A3 67.97%, #FDA1A1 68.36%, #FD9F9F 68.75%, #FD9D9D 69.14%, #FD9B9B 69.53%, #FD9999 69.93%, #FD9797 70.32%, #FD9595 70.71%, #FD9393 71.1%, #FD9191 71.49%, #FD8F8F 71.88%, #FD8D8D 72.27%, #FD8B8B 72.66%, #FD8989 73.05%, #FD8787 73.44%, #FD8585 73.83%, #FD8383 74.22%, #FC8181 74.61%, #FC8080 75%, #FC7E7E 75.39%, #FC7C7C 75.78%, #FC7A7A 76.18%, #FC7878 76.57%, #FC7676 76.96%, #FC7474 77.35%, #FC7272 77.74%, #FC7070 78.13%, #FC6E6E 78.52%, #FC6C6C 78.91%, #FC6A6A 79.3%, #FC6868 79.69%, #FC6666 80.08%, #FC6464 80.47%, #FC6262 80.86%, #FC6060 81.25%, #FC5E5E 81.64%, #FC5C5C 82.03%, #FC5A5A 82.43%, #FC5858 82.82%, #FC5656 83.21%, #FC5454 83.6%, #FC5252 83.99%, #FB5050 84.38%, #FB4E4E 84.77%, #FB4C4C 85.16%, #FB4A4A 85.55%, #FB4848 85.94%, #FB4646 86.33%, #FB4444 86.72%, #FB4242 87.11%, #FB4040 87.5%, #FB3E3E 87.89%, #FB3C3C 88.28%, #FB3A3A 88.68%, #FB3838 89.07%, #FB3636 89.46%, #FB3434 89.85%, #FB3232 90.24%, #FB3030 90.63%, #FB2E2E 91.02%, #FB2C2C 91.41%, #FB2A2A 91.8%, #FB2828 92.19%, #FB2626 92.58%, #FB2424 92.97%, #FB2222 93.36%, #FB2020 93.75%, #FA1E1E 94.14%, #FA1C1C 94.53%, #FA1A1A 94.93%, #FA1818 95.32%, #FA1616 95.71%, #FA1414 96.1%, #FA1212 96.49%, #FA1010 96.88%, #FA0E0E 97.27%, #FA0C0C 97.66%, #FA0A0A 98.05%, #FA0808 98.44%, #FA0606 98.83%, #FA0404 99.22%, #FA0202 99.61%, #FA0000 100%)",
  //   },
  //   {
  //     name: "Natalie",
  //     country: "Thailand",
  //     flag: Thailand1,
  //     image: Thailand,
  //     gradient: "linear-gradient(90deg, #8B0000 0%, #8C0202 0.39%, #8D0404 0.78%, #8E0606 1.18%, #8F0808 1.57%, #900A0A 1.96%, #900C0C 2.35%, #910E0E 2.74%, #921010 3.13%, #931212 3.52%, #941414 3.91%, #951616 4.3%, #961818 4.69%, #971A1A 5.08%, #981C1C 5.47%, #991E1E 5.86%, #992020 6.25%, #9A2222 6.64%, #9B2424 7.03%, #9C2626 7.43%, #9D2828 7.82%, #9E2A2A 8.21%, #9F2C2C 8.6%, #A02E2E 8.99%, #A13030 9.38%, #A23232 9.77%, #A33434 10.16%, #A33636 10.55%, #A43838 10.94%, #A53A3A 11.33%, #A63C3C 11.72%, #A73E3E 12.11%, #A84040 12.5%, #A94242 12.89%, #A44 13.28%, #AB4646 13.68%, #AC4848 14.07%, #AD4A4A 14.46%, #AD4C4C 14.85%, #AE4E4E 15.24%, #AF5050 15.63%, #B05252 16.02%, #B15454 16.41%, #B25656 16.8%, #B35858 17.19%, #B45A5A 17.58%, #B55C5C 17.97%, #B65E5E 18.36%, #B66060 18.75%, #B76262 19.14%, #B86464 19.53%, #B96666 19.93%, #BA6868 20.32%, #BB6A6A 20.71%, #BC6C6C 21.1%, #BD6E6E 21.49%, #BE7070 21.88%, #BF7272 22.27%, #C07474 22.66%, #C07676 23.05%, #C17878 23.44%, #C27A7A 23.83%, #C37C7C 24.22%, #C47E7E 24.61%, #C57F7F 25%, #C68181 25.39%, #C78383 25.78%, #C88585 26.18%, #C98787 26.57%, #CA8989 26.96%, #CA8B8B 27.35%, #CB8D8D 27.74%, #CC8F8F 28.13%, #CD9191 28.52%, #CE9393 28.91%, #CF9595 29.3%, #D09797 29.69%, #D19999 30.08%, #D29B9B 30.47%, #D39D9D 30.86%, #D39F9F 31.25%, #D4A1A1 31.64%, #D5A3A3 32.03%, #D6A5A5 32.43%, #D7A7A7 32.82%, #D8A9A9 33.21%, #D9ABAB 33.6%, #DAADAD 33.99%, #DBAFAF 34.38%, #DCB1B1 34.77%, #DDB3B3 35.16%, #DDB5B5 35.55%, #DEB7B7 35.94%, #DFB9B9 36.33%, #E0BBBB 36.72%, #E1BDBD 37.11%, #E2BFBF 37.5%, #E3C1C1 37.89%, #E4C3C3 38.28%, #E5C5C5 38.68%, #E6C7C7 39.07%, #E7C9C9 39.46%, #E7CBCB 39.85%, #E8CDCD 40.24%, #E9CFCF 40.63%, #EAD1D1 41.02%, #EBD3D3 41.41%, #ECD5D5 41.8%, #EDD7D7 42.19%, #EED9D9 42.58%, #EFDBDB 42.97%, #F0DDDD 43.36%, #F0DFDF 43.75%, #F1E1E1 44.14%, #F2E3E3 44.53%, #F3E5E5 44.93%, #F4E7E7 45.32%, #F5E9E9 45.71%, #F6EBEB 46.1%, #F7EDED 46.49%, #F8EFEF 46.88%, #F9F1F1 47.27%, #FAF3F3 47.66%, #FAF5F5 48.05%, #FBF7F7 48.44%, #FCF9F9 48.83%, #FDFBFB 49.22%, #FEFDFD 49.61%, #FFF 50%, #FDFDFE 50.39%, #FCFBFD 50.78%, #FAF9FB 51.18%, #F8F7FA 51.57%, #F7F5F9 51.96%, #F5F3F8 52.35%, #F4F1F6 52.74%, #F2EFF5 53.13%, #F0EDF4 53.52%, #EFEBF3 53.91%, #EDE9F1 54.3%, #EBE7F0 54.69%, #EAE5EF 55.08%, #E8E3EE 55.47%, #E7E1ED 55.86%, #E5DFEB 56.25%, #E3DDEA 56.64%, #E2DBE9 57.03%, #E0D9E8 57.43%, #DED7E6 57.82%, #DDD5E5 58.21%, #DBD3E4 58.6%, #DAD1E3 58.99%, #D8CFE2 59.38%, #D6CDE0 59.77%, #D5CBDF 60.16%, #D3C9DE 60.55%, #D1C7DD 60.94%, #D0C5DB 61.33%, #CEC3DA 61.72%, #CDC1D9 62.11%, #CBC0D8 62.5%, #C9BED7 62.89%, #C8BCD5 63.28%, #C6BAD4 63.68%, #C4B8D3 64.07%, #C3B6D2 64.46%, #C1B4D0 64.85%, #C0B2CF 65.24%, #BEB0CE 65.63%, #BCAECD 66.02%, #BBACCB 66.41%, #B9AACA 66.8%, #B7A8C9 67.19%, #B6A6C8 67.58%, #B4A4C7 67.97%, #B3A2C5 68.36%, #B1A0C4 68.75%, #AF9EC3 69.14%, #AE9CC2 69.53%, #AC9AC0 69.93%, #AA98BF 70.32%, #A996BE 70.71%, #A794BD 71.1%, #A692BC 71.49%, #A490BA 71.88%, #A28EB9 72.27%, #A18CB8 72.66%, #9F8AB7 73.05%, #9D88B5 73.44%, #9C86B4 73.83%, #9A84B3 74.22%, #9982B2 74.61%, #9780B0 75%, #957EAF 75.39%, #947CAE 75.78%, #927AAD 76.18%, #9078AC 76.57%, #8F76AA 76.96%, #8D74A9 77.35%, #8C72A8 77.74%, #8A70A7 78.13%, #886EA5 78.52%, #876CA4 78.91%, #856AA3 79.3%, #8368A2 79.69%, #8266A1 80.08%, #80649F 80.47%, #7F629E 80.86%, #7D609D 81.25%, #7B5E9C 81.64%, #7A5C9A 82.03%, #785A99 82.43%, #765898 82.82%, #755697 83.21%, #735495 83.6%, #725294 83.99%, #705093 84.38%, #6E4E92 84.77%, #6D4C91 85.16%, #6B4A8F 85.55%, #69488E 85.94%, #68468D 86.33%, #66448C 86.72%, #65438A 87.11%, #634189 87.5%, #613F88 87.89%, #603D87 88.28%, #5E3B86 88.68%, #5C3984 89.07%, #5B3783 89.46%, #593582 89.85%, #583381 90.24%, #56317F 90.63%, #542F7E 91.02%, #532D7D 91.41%, #512B7C 91.8%, #4F297A 92.19%, #4E2779 92.58%, #4C2578 92.97%, #4B2377 93.36%, #492176 93.75%, #471F74 94.14%, #461D73 94.53%, #441B72 94.93%, #421971 95.32%, #41176F 95.71%, #3F156E 96.1%, #3E136D 96.49%, #3C116C 96.88%, #3A0F6B 97.27%, #390D69 97.66%, #370B68 98.05%, #350967 98.44%, #340766 98.83%, #320564 99.22%, #310363 99.61%, #2F0162 100%)",
  //   },
  //   {
  //     name: "Natalie",
  //     country: "Brazil",
  //     flag: Brazil1,
  //     image: Brazil,
  //     gradient: "linear-gradient(90deg, #04B600 0%, #06B700 0.39%, #08B700 0.78%, #09B800 1.18%, #0BB800 1.57%, #0DB900 1.96%, #0FB900 2.35%, #11BA00 2.74%, #13BB00 3.13%, #14BB00 3.52%, #16BC00 3.91%, #18BC00 4.3%, #1ABD00 4.69%, #1CBD00 5.08%, #1DBE00 5.47%, #1FBF00 5.86%, #21BF00 6.25%, #23C000 6.64%, #25C000 7.03%, #26C100 7.43%, #28C100 7.82%, #2AC200 8.21%, #2CC300 8.6%, #2EC300 8.99%, #2FC400 9.38%, #31C400 9.77%, #33C500 10.16%, #35C500 10.55%, #37C600 10.94%, #38C700 11.33%, #3AC700 11.72%, #3CC800 12.11%, #3EC800 12.5%, #40C900 12.89%, #41C900 13.28%, #43CA00 13.68%, #45CB00 14.07%, #47CB00 14.46%, #49CC00 14.85%, #4ACC00 15.24%, #4CCD00 15.63%, #4ECD00 16.02%, #50CE00 16.41%, #52CF00 16.8%, #53CF00 17.19%, #55D000 17.58%, #57D000 17.97%, #59D100 18.36%, #5BD100 18.75%, #5DD200 19.14%, #5ED300 19.53%, #60D300 19.93%, #62D400 20.32%, #64D400 20.71%, #66D500 21.1%, #67D500 21.49%, #69D600 21.88%, #6BD700 22.27%, #6DD700 22.66%, #6FD800 23.05%, #70D800 23.44%, #72D900 23.83%, #74D900 24.22%, #76DA00 24.61%, #78DB00 25%, #79DB00 25.39%, #7BDC00 25.78%, #7DDC00 26.18%, #7FDD00 26.57%, #81DD00 26.96%, #82DE00 27.35%, #84DF00 27.74%, #86DF00 28.13%, #88E000 28.52%, #8AE000 28.91%, #8BE100 29.3%, #8DE100 29.69%, #8FE200 30.08%, #91E300 30.47%, #93E300 30.86%, #94E400 31.25%, #96E400 31.64%, #98E500 32.03%, #9AE500 32.43%, #9CE600 32.82%, #9DE600 33.21%, #9FE700 33.6%, #A1E800 33.99%, #A3E800 34.38%, #A5E900 34.77%, #A7E900 35.16%, #A8EA00 35.55%, #AAEA00 35.94%, #ACEB00 36.33%, #AEEC00 36.72%, #B0EC00 37.11%, #B1ED00 37.5%, #B3ED00 37.89%, #B5EE00 38.28%, #B7EE00 38.68%, #B9EF00 39.07%, #BAF000 39.46%, #BCF000 39.85%, #BEF100 40.24%, #C0F100 40.63%, #C2F200 41.02%, #C3F200 41.41%, #C5F300 41.8%, #C7F400 42.19%, #C9F400 42.58%, #CBF500 42.97%, #CCF500 43.36%, #CEF600 43.75%, #D0F600 44.14%, #D2F700 44.53%, #D4F800 44.93%, #D5F800 45.32%, #D7F900 45.71%, #D9F900 46.1%, #DBFA00 46.49%, #DDFA00 46.88%, #DEFB00 47.27%, #E0FC00 47.66%, #E2FC00 48.05%, #E4FD00 48.44%, #E6FD00 48.83%, #E7FE00 49.22%, #E9FE00 49.61%, #EBFF00 50%, #EAFD02 50.39%, #EAFB04 50.78%, #E9F906 51.18%, #E8F708 51.57%, #E8F50A 51.96%, #E7F30C 52.35%, #E6F10E 52.74%, #E6EF10 53.13%, #E5ED12 53.52%, #E4EB14 53.91%, #E4E916 54.3%, #E3E718 54.69%, #E2E51A 55.08%, #E2E31C 55.47%, #E1E11E 55.86%, #E0DF20 56.25%, #E0DD22 56.64%, #DFDB24 57.03%, #DED926 57.43%, #DED728 57.82%, #DDD52A 58.21%, #DCD32C 58.6%, #DCD12E 58.99%, #DBCF30 59.38%, #DACD32 59.77%, #DACB34 60.16%, #D9C936 60.55%, #D8C738 60.94%, #D8C53A 61.33%, #D7C33C 61.72%, #D6C13E 62.11%, #D6BF40 62.5%, #D5BD42 62.89%, #D4BB44 63.28%, #D4B946 63.68%, #D3B748 64.07%, #D2B54A 64.46%, #D2B34C 64.85%, #D1B14E 65.24%, #D0AF50 65.63%, #D0AD52 66.02%, #CFAB54 66.41%, #CEA956 66.8%, #CEA758 67.19%, #CDA55A 67.58%, #CDA35C 67.97%, #CCA15E 68.36%, #CB9F60 68.75%, #CB9D62 69.14%, #CA9B64 69.53%, #C99966 69.93%, #C99768 70.32%, #C8956A 70.71%, #C7936C 71.1%, #C7916E 71.49%, #C68F70 71.88%, #C58D72 72.27%, #C58B74 72.66%, #C48976 73.05%, #C38778 73.44%, #C3857A 73.83%, #C2837C 74.22%, #C1817E 74.61%, #C1807F 75%, #C07E81 75.39%, #BF7C83 75.78%, #BF7A85 76.18%, #BE7887 76.57%, #BD7689 76.96%, #BD748B 77.35%, #BC728D 77.74%, #BB708F 78.13%, #BB6E91 78.52%, #BA6C93 78.91%, #B96A95 79.3%, #B96897 79.69%, #B86699 80.08%, #B7649B 80.47%, #B7629D 80.86%, #B6609F 81.25%, #B55EA1 81.64%, #B55CA3 82.03%, #B45AA5 82.43%, #B358A7 82.82%, #B356A9 83.21%, #B254AB 83.6%, #B152AD 83.99%, #B150AF 84.38%, #B04EB1 84.77%, #AF4CB3 85.16%, #AF4AB5 85.55%, #AE48B7 85.94%, #AD46B9 86.33%, #AD44BB 86.72%, #AC42BD 87.11%, #AB40BF 87.5%, #AB3EC1 87.89%, #AA3CC3 88.28%, #A93AC5 88.68%, #A938C7 89.07%, #A836C9 89.46%, #A734CB 89.85%, #A732CD 90.24%, #A630CF 90.63%, #A52ED1 91.02%, #A52CD3 91.41%, #A42AD5 91.8%, #A328D7 92.19%, #A326D9 92.58%, #A224DB 92.97%, #A122DD 93.36%, #A120DF 93.75%, #A01EE1 94.14%, #9F1CE3 94.53%, #9F1AE5 94.93%, #9E18E7 95.32%, #9D16E9 95.71%, #9D14EB 96.1%, #9C12ED 96.49%, #9B10EF 96.88%, #9B0EF1 97.27%, #9A0CF3 97.66%, #990AF5 98.05%, #9908F7 98.44%, #9806F9 98.83%, #9704FB 99.22%, #9702FD 99.61%, #9600FF 100%)",
  //   },
  // ];

  const [showVideo, setShowVideo] = useState(false);

  const supportData = [
    {
      image: Support1,
      title: "Live 24/7 Support",
      description:
        "Connect with expert tutors anytime, anywhere — get instant help, guidance, and problem-solving on demand.",
    },
    {
      image: Support2,
      title: "Personalized plans",
      description:
        "Get a tailored study plan designed just for you — focused on your goals, timeline, and target score.",
    },
    {
      image: Support3,
      title: "Online Classes with Feedback",
      description:
        "Learn tried-and-tested tips and tricks from 90 each tutors. Get feedback, learn with other students, ask doubts, and much more.",
    },
    {
      image: Support4,
      title: "Missed a Class",
      description:
        "Don't worry we got you covered. Class recordings are available 24/7 for instant access.",
    },
    {
      image: Support5,
      title: "Watch PTE Band 8 Tips & Tricks",
      description:
        "Watch pre-recorded video lectures covering all 20 tasks — from Basic to Advanced Strategies, Updated Templates, and Latest Tips and Tricks.",
    },
    {
      image: Support6,
      title: "Study Material",
      description: (
        <>
          Carefully curated resources including Templates, Prediction File,
          Question Bank, and Real Exam Questions.{" "}
          <a href="#app-icon" className="underline">
            Explore more in our App.
          </a>
        </>
      ),
      // description:
      //   "Carefully curated resources including Templates, Prediction File, Question Bank, and Real Exam Questions.",
    },
  ];

  const grouped = [];
  for (let i = 0; i < supportData.length; i += 2) {
    grouped.push(supportData.slice(i, i + 2));
  }

  const courses = [
    {
      title: "NAATI CCL Fast Track Course",
      subtitle: "Need to clear the test in 3 days, we’ve got you covered!",
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
      title: "PTE Master Handbook",
      subtitle: "PTE 79+ in 7 days\nCrack PTE in 1 attempt",
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

  const studentsSectionRef = useRef(null);
  const [showMobileCTA, setShowMobileCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!studentsSectionRef.current) return;
      const rect = studentsSectionRef.current.getBoundingClientRect();
      // Show button if the bottom of the section is above or at the top of the viewport
      setShowMobileCTA(rect.bottom <= 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="bg-gradient-to-b from-black/20 to-transparent relative h-full">
        <section className="course-banner lg:pt-[17.8571428571em] sm:pt-[26.3671875em] pt-[450px] sm:pb-[6.6137566138em] pb-[60px] mt-[-150px] relative flex flex-column justify-center items-center">
          <div className="2xl:w-[66%] w-full 2xl:h-[75%] sm:h-full h-[50%] top-0 right-0 bottom-0 absolute">
            <ImageWithToggle
              src={PTEBanner}
              alt="HomeBanner"
              className=" w-full h-full top-0 left-0 right-0 bottom-0 object-cover"
            />
            <div className="course-banner-gradient absolute w-full h-full top-0 left-0 right-0 bottom-0"></div>
          </div>
          <div className="custom-container mx-auto py-0 px-4 sm:px-[2.1164021164em] w-full relative z-10">
            <div className="grid lg:grid-cols-2 items-end">
              <div className="">
                <div className="flex flex-col 2xl:gap-[1.0582010582em] sm:gap-[0.7936507937em] xs:gap-[2.5em] gap-[4.8vw]">
                  <h2 className="text-[#0A8AF2] font-bold 2xl:text-[1.8229166667em] md:text-[1.5873015873em] sm:text-[3.1290743155em] xs:text-[3.75em] text-[6.6666666667em] xs:mb-0 mb-[-1.5625vw]">
                    PTE MasterClass
                  </h2>
                  <h1 className="font-inter font-bold md:text-[4.0211640212em] sm:text-[6.258148631em] xs:text-[7.5em] text-[10em] leading-[1.11] 2xl:mt-2 mt-0 text-white">
                    Missed your score! <br />
                    Clear in 2 weeks
                  </h1>
                  <p className="md:text-[1.1904761905em] md:leading-[1.556] sm:text-[2.5em] xs:text-[3.3333333333em] text-[4.444444444em] font-normal md:max-w-[36.6666666667em] text-white/75">
                    This is literally the best advice that I give every student.
                    My strategies will teach you how to get 90 in each module.
                    I’ve helped students out for 5+ years as a super-friendly
                    teacher to get their desired score, now it’s your turn.
                  </p>
                  <div className="flex items-center gap-3 my-[0.7936507937em]">
                    <ImageWithToggle
                      src={avatar}
                      alt="avatar"
                      className="md:w-[3.3068783069em] md:h-[3.3068783069em] xs:w-[7.8125em] xs:h-[7.8125em] w-[13.8888888889vw] h-[13.8888888889vw] rounded-full border-4 border-white/10"
                    />
                    <h3 className="md:text-[1.1904761905em] sm:text-[2.5em] xs:text-[3.3333333333em] text-[5em] font-light text-white/60">
                      Taught by{" "}
                      <span className="text-white font-size: font-semibold">
                        Abhishek
                      </span>
                    </h3>
                  </div>
                </div>
                <div className="sm:mt-[2.5132275132em] mt-[4.8vw] flex sm:flex-nowrap flex-wrap sm:gap-[2.0502645503em] gap-[4.2vw] xl:max-w-[39.6825396825em] lg:max-w-[46.875em] md:max-w-[58.59375em]">
                  <a
                    href="#"
                    className="primary-btn bg-gradient-secondary md:p-[0.7936507937em] sm:p-[1.5645371578em] xs:p-[1.875em] p-[4.2vw] md:w-[50%] w-full relative z-10 text-center"
                  >
                    <span className="font-semibold md:text-[1.3227513228em] sm:text-[3.125em] xs:text-[4.1666666667em] md:leading-[1.4] text-[5.55555555em] text-white">
                      Take the Course
                    </span>
                  </a>
                  <a
                    href="#"
                    className="align-middle inline-flex items-center gap-[18px] justify-center bg-[#111] border-[1.5px] border-[#333434] md:p-[0.7936507937em] sm:p-[1.5645371578em] xs:p-[1.875em] p-[4.2vw] md:w-[50%] w-full transition-all duration-300 ease hover:bg-[#111]/80"
                  >
                    <span className="font-semibold md:text-[1.3227513228em] sm:text-[3.125em] xs:text-[4.1666666667em] md:leading-[1.4] text-[5.55555555em] align-middle inline-flex items-center gap-[18px] justify-center text-center text-white">
                      <svg
                        className="sm:w-[1.05em] sm:h-[1.15em] xs:w-[3.4375em] xs:h-[3.4375em] w-[5.8333333333vw] h-[6.3888888889vw]"
                        width="21"
                        height="23"
                        viewBox="0 0 21 23"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.6718 11.2245L0.647949 22.0227V0.42627L20.6718 11.2245Z"
                          fill="url(#paint0_linear_814_2245)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_814_2245"
                            x1="20.6718"
                            y1="-1.24423"
                            x2="18.2482"
                            y2="25.8636"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#17FFBA" />
                            <stop offset="0.130208" stop-color="#76B4C8" />
                            <stop offset="1" stop-color="#2F57A7" />
                          </linearGradient>
                        </defs>
                      </svg>
                      Watch a Free Lesson
                    </span>
                  </a>
                </div>
              </div>
              <div className="text-end lg:block hidden">
                <h4 className="font-normal text-[#A1A0A0] text-[1.3227513228em] leading-[1.4] text-end">
                  Devices Supported:
                </h4>
                <div className="max-w-[13.2275132275em] ms-auto mt-[2.1164021164em] flex justify-between items-center">
                  <img
                    src={AppleIcon}
                    alt="AppleIcon"
                    className="w-auto h-[2.1164021164em]"
                  />
                  <img
                    src={AndroidIcon}
                    alt="AndroidIcon"
                    className="w-auto h-[2.1164021164em]"
                  />
                  <img
                    src={WindowsIcon}
                    alt="WindowsIcon"
                    className="w-auto h-[2.1164021164em]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={studentsSectionRef}>
          <div className="custom-container mx-auto py-0 px-4 sm:px-[2.1164021164em] w-full">
            <div className="flex justify-between items-center relative">
              <div className="text-center w-auto mx-auto z-10 relative bg-[#0c0c0c]/80 px-3">
                <span className="font-normal lg:text-[1.3227513228em] md:text-[2.0860495437em] sm:text-[2.5em] xs:text-[3.3333333333em] text-[5em] lg:leading-[1.4] text-white/60 text-center sm:inline hidden">
                  Helped <strong className="text-white">10K+ students</strong>{" "}
                  get their desired scores
                </span>
                <span className="font-bold lg:text-[1.3227513228em] md:text-[2.0860495437em] sm:text-[2.5em] xs:text-[3.3333333333em] text-[5em] text-white/60 text-center sm:hidden inline w-[320px]">
                  Now teaching{" "}
                  <div className="text-white inline-block">10K+ students!</div>
                </span>
              </div>
              <hr className="border-[#252525] w-full absolute left-0 right-0 z-[-1]" />
            </div>
          </div>
        </section>

        <section className="sm:py-[5.2700922266em] xs:py-[11.25em] py-[20em]">
          <div className="custom-container mx-auto py-0 px-4 sm:px-[2.1164021164em] w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[2.1080368906em] sm:gap-y-[3.8208168643em] gap-[18em]">
              <h2 className="text-gradient-secondary font-bold lg:text-[1.9841269841em] md:text-[2.9296875em] sm:text-[3.9113428944em] xs:text-[4.0625em] text-[7em] xs:leading-[1.2] leading-[1.33] inline-block 2xl:max-w-[350px] lg:max-w-[300px] xs:mb-0 mb-[1vw]">
                This course covers all 22 tasks{" "}
                <i className="font-normal">(Updated 2025 Aug)</i> with easy to
                understand video lessons, live classes and more.
              </h2>

              {courseData.map((course, index) => (
                <div className="flex flex-col gap-4" key={index}>
                  <div className="flex items-center sm:gap-1 gap-[1.2vw]">
                    <div className="border-[1.2px] border-white/40 sm:px-[0.3968253968em] sm:py-[0.462962963em] px-[6px] py-[6px] sm:me-[0.5952380952em] me-1">
                      <svg
                        className="lg:w-[1.1904761905em] w-[16px] lg:h-[1.0582010582em] h-[16px]"
                        width="18"
                        height="16"
                        viewBox="0 0 18 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.18724 5.9984C2.84642 6.33491 3.32419 6.66505 3.58908 7.23134C3.89223 7.90339 4.26872 8.61289 4.57197 9.28495C4.6835 9.42817 4.93813 9.47187 5.08123 9.37246C5.11616 9.30415 5.18939 9.34149 5.22433 9.27306C5.40225 9.10535 5.65352 8.97485 5.7582 8.76968C6.56807 7.54503 7.63594 6.53815 8.59227 5.38818C8.66214 5.25144 8.69708 5.18301 8.84006 5.0836C10.3755 3.8844 11.6529 2.46727 13.3383 1.51701C13.7325 1.2872 14.0536 1.02 14.4862 0.895959C15.4911 0.374321 16.6178 0.518383 17.5035 1.31538C17.9081 1.60811 17.995 2.3422 17.639 2.67776C17.4261 2.91402 17.2132 3.15017 16.8922 3.4174C16.1419 3.98285 15.3917 4.54817 14.7147 5.15095C13.7166 6.02097 12.7569 6.99675 11.9819 8.1531C11.2419 9.24101 10.3171 10.1485 9.53876 11.1306C9.11294 11.603 8.76034 12.1128 8.40787 12.6225C8.12515 12.9955 7.88072 13.4743 7.52477 13.81C5.99615 15.3574 6.24741 15.227 4.2417 14.6343C3.91384 14.5532 3.65583 14.3353 3.36286 14.1857C2.40731 13.5254 1.73789 12.6665 1.46276 11.5776C1.11099 10.2772 0.685965 8.93944 0.260933 7.6017C0.219191 7.32174 0.250692 7.07911 0.320526 6.94237C0.599827 6.39517 1.02904 6.09696 1.56981 5.94198C1.78612 5.87991 2.07908 6.02949 2.18724 5.9984Z"
                          fill="url(#paint0_linear_1024_1236)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_1024_1236"
                            x1="6.19843"
                            y1="-4.57243"
                            x2="18.847"
                            y2="3.07249"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#17FFBA" />
                            <stop offset="0.130208" stop-color="#76B4C8" />
                            <stop offset="1" stop-color="#2F57A7" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <span className="font-bold 2xl:text-[1.5873015873em] lg:text-[1.3227513228em] md:text-[1.953125em] sm:text-[2.6041666667em] xs:text-[3.125em] text-[5.8em] text-white leading-[1.6]">
                      {course.title}
                    </span>
                  </div>
                  <ImageWithToggle
                    src={course.image}
                    alt={`Image of ${course.title}`}
                    className="w-full h-auto object-contain"
                  />
                  <p className="font-normal lg:text-[1.0582010582em] sm:text-[1.5625em] xs:text-[2.5em] text-[4.2em] leading-[1.5] text-white/60">
                    {course.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="">
          <div className="custom-container mx-auto px-4 sm:px-[2.1164021164em] w-full">
            <div className="flex lg:flex-nowrap flex-wrap items-center sm:py-[6.6137566138em] xs:py-[11.25em] py-[20em] border-y-2 border-[#252525] sm:gap-[3.3068783069em] gap-[9.7222222222em]">
              <div className="lg:w-[79%] w-full tab-content">
                <ImageWithToggle
                  src={tabImages[activeTab]}
                  alt="PTE Response"
                  className="w-full h-auto animate-fade-in"
                />
              </div>

              <div className="lg:w-[26%] w-full flex flex-col sm:gap-y-[1.2566137566em] gap-[5.2777777778em]">
                <h2 className="text-gradient-Bluedark font-bold lg:text-[2.0833333333vw] sm:text-[2.9296875em] xs:text-[5em] text-[7.2em] sm:leading-[1.2] leading-[1.3] lg:max-w-[22.1333333333vw]">
                  Watch AB grade students’ responses and give Feedback
                </h2>
                <p className="font-normal 2xl:text-[1.3227513228em] sm:leading-[1.3333333] lg:text-[1.1904761905em] sm:text-[1.5625em] text-[4.2em] text-white/60">
                  One of the best ways to learn what works and what doesn’t is
                  to simply review other students’ responses and scores.
                </p>

                <p className="font-normal 2xl:text-[1.3227513228em] sm:leading-[1.3333333] lg:text-[1.1904761905em] sm:text-[1.5625em] text-[4.2em] text-white/60">
                  We'll review scores for:
                </p>

                <ul className="tab-links">
                  {tabs.map((tab) => (
                    <li key={tab}>
                      <button
                        onClick={() => setActiveTab(tab)}
                        className="flex sm:gap-[0.7936507937em] gap-[3.3vw] sm:pt-0 pt-[1.3em] items-center group w-full text-left"
                      >
                        <img
                          src={Checkmark}
                          alt="Checkmark"
                          className="sm:w-[1.3227513228em] w-4"
                        />
                        <span
                          className={`font-medium 2xl:text-[1.3227513228em] sm:leading-[1.55] lg:text-[1.1904761905em] sm:text-[1.5625em] text-[4.2em] cursor-pointer transition-all duration-300 ease-in-out ${
                            activeTab === tab
                              ? "text-white"
                              : "text-white/60 group-hover:text-white"
                          }`}
                        >
                          {tab === "band8"
                            ? "Band 8"
                            : tab === "band7"
                            ? "Band 7"
                            : tab === "band65"
                            ? "Band 6.5"
                            : "And others!"}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="sm:pt-[5.2700922266em] pt-[20em] sm:pb-[2.6455026455em] pb-[22.22222222vw]">
          <div className="custom-container mx-auto py-0 px-4 sm:px-[2.1164021164em] w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[2.1164021164em] xs:gap-y-[3.835978836em] gap-[18vw]">
              <div>
                <h2 className="text-gradient-secondary font-bold lg:text-[1.9841269841em] md:text-[2.9296875em] sm:text-[3.9113428944em] xs:text-[4.0625em] text-[7em] xs:leading-[1.2] leading-[1.33] inline-block 2xl:max-w-[410px] lg:max-w-[300px] xs:mb-[1em] mb-[16vw]">
                  Having an instructor like AB bring you the real experience
                  needed to get desired score.
                </h2>
                <div className="flex flex-col items-start sm:gap-[1.455026455em] gap-3">
                  <div className="bg-[#1A1A1A] xs:py-[0.9259259259em] xs:ps-[0.9259259259em] xs:pe-[2.9761904762em] p-[3.8888888889vw] sm:w-[auto] w-[91.1111111111vw] rounded-[100px] flex items-center sm:gap-[1.0582010582em] gap-[2.5vw] group transition-all duration-300 ease hover:bg-white">
                    <img
                      src={facebookIcon}
                      alt="facebookIcon"
                      className="lg:w-[2.6455026455em] lg:h-[2.6455026455em] md:w-[3.90625em] md:h-[3.90625em] sm:w-[5.2151238592em] sm:h-[5.2151238592em] w-[12vw] h-[12vw]  group-hover:hidden transition-all duration-300 ease"
                    />
                    <img
                      src={facebookIconLight}
                      alt="facebookIcon"
                      className="lg:w-[2.6455026455em] lg:h-[2.6455026455em] md:w-[3.90625em] md:h-[3.90625em] sm:w-[5.2151238592em] sm:h-[5.2151238592em] w-[12vw] h-[12vw]  hidden group-hover:flex transition-all duration-300 ease"
                    />
                    <div>
                      <h4 className="font-aileron lg:text-[0.9259259259em] md:text-[1.8252933507em] sm:text-[2.1875em] xs:text-[2.9166666667em] text-[4.6em] text-white transition-all duration-300 ease group-hover:text-black font-bold leading-[1.1]">
                        Join the Facebook Community
                      </h4>
                      <span className="lg:text-[0.7936507937em] md:text-[1.5645371578em] sm:text-[1.875em] xs:text-[2.5em] text-[4.2em] text-white/50 font-medium transition-all duration-300 ease group-hover:text-black/50 break-all block leading-[14px] mt-1">
                        facebook.com/languageking
                      </span>
                    </div>
                  </div>
                  <div className="bg-[#1A1A1A] xs:py-[0.9259259259em] xs:ps-[0.9259259259em] xs:pe-[2.9761904762em] p-[3.8888888889vw] sm:w-[auto] w-[91.1111111111vw] rounded-[100px] flex items-center sm:gap-[1.0582010582em] gap-[2.5vw] group transition-all duration-300 ease hover:bg-white">
                    <img
                      src={InstaIcon}
                      alt="InstaIcon"
                      className="lg:w-[2.6455026455em] lg:h-[2.6455026455em] md:w-[3.90625em] md:h-[3.90625em] sm:w-[5.2151238592em] sm:h-[5.2151238592em] w-[12vw] h-[12vw]  group-hover:hidden transition-all duration-300 ease"
                    />
                    <img
                      src={InstaIconLight}
                      alt="facebookIcon"
                      className="lg:w-[2.6455026455em] lg:h-[2.6455026455em] md:w-[3.90625em] md:h-[3.90625em] sm:w-[5.2151238592em] sm:h-[5.2151238592em] w-[12vw] h-[12vw]  hidden group-hover:flex transition-all duration-300 ease"
                    />
                    <div>
                      <h4 className="font-aileron lg:text-[0.9259259259em] md:text-[1.8252933507em] sm:text-[2.1875em] xs:text-[2.9166666667em] text-[4.6em] text-white transition-all duration-300 ease group-hover:text-black font-bold leading-[1.1]">
                        Follow us on Instagram
                      </h4>
                      <span className="lg:text-[0.7936507937em] md:text-[1.5645371578em] sm:text-[1.875em] xs:text-[2.5em] text-[4.2em] text-white/50 font-medium transition-all duration-300 ease group-hover:text-black/50 break-all block leading-[14px] mt-1">
                        instagram.com/languageking
                      </span>
                    </div>
                  </div>
                  <div className="bg-[#1A1A1A] xs:py-[0.9259259259em] xs:ps-[0.9259259259em] xs:pe-[2.9761904762em] p-[3.8888888889vw] sm:w-[auto] w-[91.1111111111vw] rounded-[100px] flex items-center sm:gap-[1.0582010582em] gap-[2.5vw] group transition-all duration-300 ease hover:bg-white">
                    <img
                      src={TiktokIcon}
                      alt="TiktokIcon"
                      className="lg:w-[2.6455026455em] lg:h-[2.6455026455em] md:w-[3.90625em] md:h-[3.90625em] sm:w-[5.2151238592em] sm:h-[5.2151238592em] w-[12vw] h-[12vw]  group-hover:hidden transition-all duration-300 ease"
                    />
                    <img
                      src={TiktokIconLight}
                      alt="facebookIcon"
                      className="lg:w-[2.6455026455em] lg:h-[2.6455026455em] md:w-[3.90625em] md:h-[3.90625em] sm:w-[5.2151238592em] sm:h-[5.2151238592em] w-[12vw] h-[12vw]  hidden group-hover:flex transition-all duration-300 ease"
                    />
                    <div>
                      <h4 className="font-aileron lg:text-[0.9259259259em] md:text-[1.8252933507em] sm:text-[2.1875em] xs:text-[2.9166666667em] text-[4.6em] text-white transition-all duration-300 ease group-hover:text-black font-bold leading-[1.1]">
                        Explore our content on TikTok
                      </h4>
                      <span className="lg:text-[0.7936507937em] md:text-[1.5645371578em] sm:text-[1.875em] xs:text-[2.5em] text-[4.2em] text-white/50 font-medium transition-all duration-300 ease group-hover:text-black/50 break-all block leading-[14px] mt-1">
                        tiktok.com/@languageking
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {courseData2.map((course, index) => (
                <div
                  className="flex flex-col sm:gap-[1.0582010582em] gap-3"
                  key={index}
                >
                  <div className="flex items-center gap-1">
                    <span className="font-semibold 2xl:text-[1.5873015873em] lg:text-[1.3227513228em] md:text-[1.953125em] sm:text-[2.6041666667em] xs:text-[3.125em] text-[5.8em] text-white leading-[1.6]">
                      {course.title}
                    </span>
                  </div>
                  <ImageWithToggle
                    src={course.image}
                    alt={`Image of ${course.title}`}
                    className="w-full h-auto object-contain"
                  />
                  <p className="font-normal lg:text-[1.0582010582em] xs:text-[1.5625em] text-[4.2em] leading-[1.5] text-white/60">
                    {course.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="lg:pb-[5.9523809524em] md:pb-[10.4302477184em] sm:pb-[12.5em] xs:pb-[16.6666666667em] pb-[25vw]">
          <div className="custom-container mx-auto py-0 px-4 sm:px-[2.1164021164em] w-full">
            <h3 className="text-white xs:font-semibold font-bold md:text-[1.5873015873em] sm:text-[3.75em] xs:text-[5em] text-[7em] mb-[1.6666666667em]">
              + AB has worked with most diverse students in the world like:
            </h3>
            <div className="grid grid-cols-4 md:grid-cols-8 xl:grid-cols-16 gap-x-[5.5555555556vw] sm:gap-x-[1.455026455em] 2xl:gap-x-[2.1164021164em]  sm:gap-y-[2.9761904762em] gap-y-[12.5vw]">
              {students.map((student, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className="md:w-[4.2328042328em] md:h-[4.2328042328em] sm:w-[10em] sm:h-[10em] xs:w-[13.3333333333em] xs:h-[13.3333333333em] w-[18vw] h-[18vw] rounded-full p-[2.5px] relative"
                    style={{ background: student.gradient }}
                  >
                    <ImageWithToggle
                      src={student.image}
                      alt={student.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                    <img
                      src={student.flag}
                      alt={student.country}
                      className="md:w-[1.3227513228em] md:h-[1.3227513228em] w-5 h-5 rounded-full absolute top-0 right-0 z-10"
                    />
                  </div>

                  <div className="flex flex-col items-center md:mt-[0.7936507937em] mt-3 text-center">
                    <p className="2xl:text-[1.1904761905em] md:text-[1.0582010582em] sm:text-[2.5em] xs:text-[3.3333333333em] text-[5.5555em] leading-[1.3] text-white mb-0">
                      {student.name}
                    </p>
                    <span className="md:text-[0.9259259259em] sm:text-[1.8252933507em] xs:text-[2.1875em] text-[3.8888888889em] md:mt-[0.2142857143em] mt-[3px] font-light text-[#FFED00]">
                      {student.country}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="video-wrapper">
          <div className="custom-container mx-auto px-4 sm:px-[2.1164021164em] w-full">
            <div className="flex lg:flex-nowrap flex-wrap items-center lg:py-[5.291005291em] md:py-[10.4302477184em] sm:py-[12.5em] xs:py-[16.6666666667em] py-[25vw] sm:mb-[4.6296296296em] mb-[26.3888888889vw] border-y-2 border-[#252525] sm:gap-[1.6534391534em] gap-[9.7222222222em]">
              <div className="lg:w-[77%] w-full tab-content relative">
                {!showVideo ? (
                  <>
                    <div
                      onClick={() => setShowVideo(true)}
                      className="cursor-pointer"
                    >
                      <ImageWithToggle
                        src={freeLesson}
                        alt="PTE Response"
                        className="w-full h-auto animate-fade-in"
                      />
                    </div>
                    <button
                      onClick={() => setShowVideo(true)}
                      className="flex w-auto text-left gap-3 md:text-[1.3227513228em] sm:text-base text-[3.8888888889em] leading-[1.4] absolute sm:bottom-5 sm:left-5 bottom-1 left-1 bg-black/90 sm:px-[1em] sm:py-[0.6em] items-center text-white p-[4.1666666667vw]"
                    >
                      <svg
                        className="sm:w-[15px] h-auto w-[4.1666666667vw]"
                        width="15"
                        height="21"
                        viewBox="0 0 15 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.8689 10.7426L0.630859 20.5043L0.63086 0.980957L14.8689 10.7426Z"
                          fill="url(#paint0_linear_1020_7271)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_1020_7271"
                            x1="14.8689"
                            y1="-0.529178"
                            x2="12.0969"
                            y2="23.8573"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#17FFBA" />
                            <stop offset="0.130208" stopColor="#76B4C8" />
                            <stop offset="1" stopColor="#2F57A7" />
                          </linearGradient>
                        </defs>
                      </svg>
                      {/* Watch a part of How to Tease Continuation */}
                      Watch a part of Grammar Rules
                    </button>
                  </>
                ) : (
                  <video
                    src={video}
                    controls
                    autoPlay
                    className="w-full h-auto rounded-md shadow-lg"
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>

              <div className="lg:w-[28%] w-full">
                <div className="lg:max-w-[22.8174603175em] flex flex-col sm:gap-y-[1.2566137566em] gap-y-[4.4444444444vw] items-start">
                  <h2 className="text-gradient-Bluedark font-bold lg:text-[2.38095em] sm:text-[2.9296875em] xs:text-[5em] text-[7.2em] sm:leading-[1.2] leading-[1.3]">
                    Try a Free Lesson <br></br> Real Quick
                  </h2>
                  <p className="font-normal 2xl:text-[1.3227513228em] sm:leading-[1.3333333] lg:text-[1.1904761905em] sm:text-[1.5625em] text-[4.2em] text-white/60">
                    Watch AB guiding a student and a funny interaction between
                    them.
                  </p>

                  <p className="font-normal 2xl:text-[1.3227513228em] sm:leading-[1.3333333] lg:text-[1.1904761905em] sm:text-[1.5625em] text-[4.2em] text-white/60">
                    As an expert - AB guides his students through various
                    hurdles, by providing insightful feedback.
                  </p>

                  <a
                    href="#"
                    className="primary-btn bg-gradient-secondary md:p-[0.9259259259vw] sm:p-[1.5645371578em] xs:p-[1.875em] p-[4.2vw] lg:w-full sm:w-auto w-full relative z-10 text-center"
                  >
                    <span className="font-semibold md:text-[1.3227513228em] sm:text-[3.125em] xs:text-[4.1666666667em] md:leading-[1.4] text-[5.55555555em] text-white">
                      Take the Course
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="custom-container sm:px-[2.1164021164em] px-4">
          <div className="sm:pb-[5.291005291em] xs:pb-[16.6666666667em] pb-[22.2222222222em] border-y-2 border-[#252525]">
            <div className="mx-auto 2xl:px-[8.9285714286em] md:px-[6.6137566138em] sm:px-[3.3068783069em] px-4 w-full bg-[#FFDD74] support-grid">
              <div className="sm:pt-[3.4391534392em] pt-[7.7777777778vw]">
                <h2 className="text-black lg:text-[3.1746031746em] md:text-[3.1746031746em] sm:text-[5.625em] xs:text-[7.5em] text-[7.7777777778em] sm:font-bold font-extrabold xs:leading-normal  leading-[1.2]">
                  Support{" "}
                </h2>
                <p className="relative z-1 text-black lg:text-[2.9100529101em] md:text-[1.9841269841em] sm:text-[5.625em] xs:text-[7.5em] text-[7.7777777778em] font-light xs:mt-2 mt-0  xs:leading-7 leading-[1.2]">
                  In Every Possible Way
                </p>
              </div>
              {grouped.map((row, rowIndex) => (
                <div className="grid-block" key={rowIndex}>
                  {rowIndex !== 0 && (
                    <div
                      className="h-[4px] w-full"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, rgba(43,43,43,0.00) 0%, #000 51.44%, rgba(102,102,102,0.00) 100%)",
                        filter: " blur(7.900000095367432px)",
                      }}
                    ></div>
                  )}
                  <div
                    className={`inner grid grid-cols-1 md:grid-cols-2 md:gap-[3.3068783069em] sm:gap-[7.8125em] xs:gap-[10.4166666667em] gap-[16vw] sm:pt-[3.9682539683em] sm:pb-[5.9523809524em] pb-[16vw] bg-[#FFDD74] relative ${
                      rowIndex === 0 ? "pt-[12.3333vw]" : "pt-[18vw]"
                    }`}
                  >
                    {row.map((item, index) => (
                      <div key={index}>
                        <ImageWithToggle
                          src={item.image}
                          alt={item.title}
                          className="rounded-[0.6613756614em] md:mb-[1.0582010582em] sm:mb-[2.5em] xs:mb-[3.3333333333em] mb-[4.4444444444vw] w-full"
                        />
                        <h4 className="text-black md:text-[1.9841269841em] sm:text-[3.9113428944em] xs:text-[4.6875em] text-[6.6666666667em] leading-[1.2] font-bold xs:mb-[0.2666666667em] mb-[2.5vw]">
                          {item.title}
                        </h4>
                        <p className="text-black md:text-[1.1904761905em] md:leading-[1.556] sm:text-[2.5em] xs:text-[3.3333333333em] text-[4.2em] sm:leading-[1.5555555]">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="sm:pt-[3.835978836em] xs:pt-[12.0833333333em]  pt-[16.1111111111em] lg:scroll-mt-[90px]"
          id="courses"
        >
          <div className="custom-container mx-auto py-0 px-4 sm:px-[2.1164021164em] z-50">
            <div className="md:pb-[2vw] sm:pb-[4.6875em] xs:pb-[6.25em] pb-[8.3333333333em]">
              <h2 className="md:text-[1.9841269841em] text-2xl leading-[1.2] font-semibold text-white text-left">
                Check out some other courses
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
                        <span className="text-white font-semibold">
                          Abhishek
                        </span>
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
      </div>

      {/* Mobile CTA button */}
      {showMobileCTA && (
        <a
          href="#"
          className="primary-btn bg-gradient-secondary align-middle inline-flex items-center justify-center text-center text-white p-[5.2vw] w-full font-semibold sm:text-[3.125em] xs:text-[4.1666666667em] text-[5.55em] z-10 fixed bottom-0 left-0 right-0 md:hidden"
        >
          Take the Course
        </a>
      )}
    </>
  );
};

export default PTEMasterClass;
