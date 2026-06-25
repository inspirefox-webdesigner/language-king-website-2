import React, { useState, useEffect } from "react";
import Avatar4 from "../assets/avatar7.png";
import Avatar2 from "../assets/avatar8.png";
import Avatar9 from "../assets/avatar9.png";
import Avatar10 from "../assets/avatar10.png";
import Avatar11 from "../assets/avatar11.png";
import Frame from "../assets/trusted bg 2.png";
import WP from "../assets/Iconswp.svg";
import API_BASE_URL from "../config/api";
import { FILE_BASE_URL } from "../config/api";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
// import Transparent_Pricing2 from "./Transparent_Pricing(MobileApi)";

// Static fallback data
const STATIC_COURSES_BY_TAB = {
  PTE: [
    {
      id: 1,
      title: "1 Month PTE Coaching",
      price: 899,
      badge: null,
      points: [
        "Suited for those aiming for BAND 5 and 6",
        "5 Full Mock Tests + 20 Sectional Mock Tests",
      ],
    },
    {
      id: 2,
      title: "1-Month PTE Guarantee",
      price: 999,
      badge: "BEST VALUE",
      points: [
        "Ideal for those aiming for BAND 7, 8 or Nursing",
        "10 Full Mock Test + 40 Sectional Mock Tests",
        "Course extends to 6 months if target not achieved",
      ],
    },
    {
      id: 3,
      title: "Unlimited PTE Coaching",
      price: 1499,
      badge: "Most Popular",
      points: [
        "Life time coaching till you get your PR",
        "10 Full Mock Test + 40 Sectional Mock Tests",
        "Ideal for weak students or those who are stuck in visa loop and looking to get PR",
      ],
    },
    {
      id: 4,
      title: "1-to-1 PTE Coaching",
      price: 649,
      badge: null,
      points: [
        "5 Classess with a Band 8 PTE Expert",
        "Ideal for students who are missing their target score by a few marks",
        "Contact us to tailor this coaching to your needs",
      ],
    },
  ],

  "NAATI CCL": [
    {
      id: 1,
      title: "NAATI CCL Starter",
      price: 599,
      badge: null,
      points: ["Beginner-friendly material", "10 Mock Dialogues"],
    },
    {
      id: 2,
      title: "NAATI CCL Intensive",
      price: 899,
      badge: "BEST VALUE",
      points: ["Conversational coaching", "20 Mock Dialogues"],
    },
    {
      id: 3,
      title: "NAATI CCL 1-to-1",
      price: 1199,
      badge: "Most Popular",
      points: ["Personal mentor", "Unlimited feedback"],
    },
    {
      id: 4,
      title: "1-to-1 NAATI Coaching",
      price: 700,
      badge: null,
      points: [
        "5 Classess with a Band 8 PTE Expert",
        "Ideal for students who are missing their target score by a few marks",
        "Contact us to tailor this coaching to your needs",
      ],
    },
  ],

  COMBO: [
    {
      id: 1,
      title: "PTE + NAATI Combo Basic",
      price: 1299,
      badge: null,
      points: ["Access to PTE basic + NAATI starter", "Shared resources"],
    },
    {
      id: 2,
      title: "PTE + NAATI Combo Pro",
      price: 1899,
      badge: "BEST VALUE",
      points: ["Full PTE + NAATI prep", "Priority support"],
    },
    {
      id: 3,
      title: "PTE + NAATI Combo Intensive",
      price: 899,
      badge: "BEST VALUE",
      points: ["Conversational coaching", "20 Mock Dialogues"],
    },
    {
      id: 4,
      title: "PTE + NAATI Combo 1-to-1",
      price: 1199,
      badge: null,
      points: ["Personal mentor", "Unlimited feedback"],
    },
  ],
};

const faqs = [
  {
    question: "Do you offer refunds?",
    answer:
      "When making a purchase, be sure to choose carefully as refunds for incorrectly choosing a product aren’t simply refunded. Be sure to make use of the images of the product to be sure you have correctly selected your item before proceeding to check out.",
  },
  {
    question: "What happens after my payment?",
    answer:
      "When making a purchase, be sure to choose carefully as refunds for incorrectly choosing a product aren't simply refunded. Be sure to make use of the images of the product to be sure you have correctly selected your item before proceeding to check out.",
  },
  {
    question: "What if I miss a class?",
    answer:
      "When making a purchase, be sure to choose carefully as refunds for incorrectly choosing a product aren't simply refunded. Be sure to make use of the images of the product to be sure you have correctly selected your item before proceeding to check out.",
  },
  {
    question: "How will I get feedback?",
    answer:
      "When making a purchase, be sure to choose carefully as refunds for incorrectly choosing a product aren't simply refunded. Be sure to make use of the images of the product to be sure you have correctly selected your item before proceeding to check out.",
  },
  {
    question: "How long does it take to get desired Band?",
    answer:
      "When making a purchase, be sure to choose carefully as refunds for incorrectly choosing a product aren't simply refunded. Be sure to make use of the images of the product to be sure you have correctly selected your item before proceeding to check out.",
  },
  {
    question: "Do you offer offline classes?",
    answer:
      "When making a purchase, be sure to choose carefully as refunds for incorrectly choosing a product aren't simply refunded. Be sure to make use of the images of the product to be sure you have correctly selected your item before proceeding to check out.",
  },
  {
    question: "How do I access Study Material?",
    answer:
      "When making a purchase, be sure to choose carefully as refunds for incorrectly choosing a product aren't simply refunded. Be sure to make use of the images of the product to be sure you have correctly selected your item before proceeding to check out.",
  },
];

function Transparent_Pricing() {
  const [openIndex, setOpenIndex] = useState(0);
  const [selectedCourse1, setSelectedCourse1] = useState(null);
  const [dynamicFaqs, setDynamicFaqs] = useState(faqs);
  const [trustedSection, setTrustedSection] = useState({
    heading: "Trusted by students in their TR, Nursing and PR Journey",
    avatar_images: [Avatar4, Avatar2, Avatar9, Avatar10, Avatar11],
    avatar_text: "10,000+ students and counting...",
    star_rating: 4.92,
    star_text: "4.92/5 student satisfaction",
    bottom_heading: "I cleared my PTE in just 15 days under their guidance",
    bottom_text: "— Nursing applicant, VIC",
  });

  // Dynamic state for tabs, cards, and popups
  const [tabs, setTabs] = useState(["PTE", "NAATI CCL", "COMBO"]);
  const [coursesByTab, setCoursesByTab] = useState(STATIC_COURSES_BY_TAB);
  const [courseDetails, setCourseDetails] = useState({});
  const [activeTab, setActiveTab] = useState("PTE");
  const [selectedCourse, setSelectedCourse] = useState(
    STATIC_COURSES_BY_TAB.PTE[0],
  );
  const navigate = useNavigate();
  const [setDiscountApplied] = useState(false);
  // const [invalidCoupon, setInvalidCoupon] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [status, setStatus] = useState("idle");
  // idle | typing | invalid | expired | valid

  const VALID_CODE = "Dis150Ja2602";

  const handleChange = (e) => {
    setCoupon(e.target.value);
    setStatus("typing");
  };

  // const handleApply = () => {
  //   const value = coupon.trim();

  //   if (!value) return;

  //   if (value === VALID_CODE) {
  //     setStatus("valid");
  //     return;
  //   }

  //   if (VALID_CODE.toLowerCase().startsWith(value.toLowerCase().slice(0, 5))) {
  //     setStatus("expired");
  //   } else {
  //     setStatus("invalid");
  //   }
  // };

  const handleApply = () => {
    const value = coupon.trim();

    if (!value) return;

    if (value === VALID_CODE) {
      setStatus("valid");
      // trigger price zoom then success sweep sequence (transient)
      setPriceZoom(true);
      setShowSuccessAnim(false);
      setTimeout(() => {
        setPriceZoom(false);
        setShowSuccessAnim(true);
        setTimeout(() => setShowSuccessAnim(false), 950);
      }, 450);

      return;
    }

    if (VALID_CODE.toLowerCase().startsWith(value.toLowerCase().slice(0, 5))) {
      setStatus("expired");
    } else {
      setStatus("invalid");
    }
  };

  const [isChecked, setIsChecked] = useState(false);
  const [showError, setShowError] = useState(false);
  // transient animation triggers (not persisted on reload)
  const [showSuccessAnim, setShowSuccessAnim] = useState(false);
  const [priceZoom, setPriceZoom] = useState(false);

  const handleBuyNow = () => {
    if (!isChecked) {
      setShowError(true);
      return;
    }
    setShowError(false);
    console.log("Proceed to payment");
  };

  const discountedPrice =
    status === "valid" && selectedCourse
      ? selectedCourse.price - 50
      : selectedCourse?.price || 0;

  // Fetch dynamic tabs, cards, and popups
  useEffect(() => {
    const fetchPricingData = async () => {
      try {
        // Fetch tabs
        const tabsRes = await fetch(`${API_BASE_URL}/pricing-tabs`);
        if (tabsRes.ok) {
          const tabsData = await tabsRes.json();
          if (tabsData && tabsData.length > 0) {
            const tabNames = tabsData.map((t) => t.tab_name);
            setTabs(tabNames);
            setActiveTab(tabNames[0]);

            // Fetch cards for all tabs
            const cardsRes = await fetch(`${API_BASE_URL}/pricing-cards`);
            if (cardsRes.ok) {
              const cardsData = await cardsRes.json();

              // Group cards by tab_name
              const groupedCards = {};
              cardsData.forEach((card) => {
                if (!groupedCards[card.tab_name]) {
                  groupedCards[card.tab_name] = [];
                }
                groupedCards[card.tab_name].push(card);
              });
              setCoursesByTab(groupedCards);

              // Set first course as selected
              if (groupedCards[tabNames[0]] && groupedCards[tabNames[0]][0]) {
                setSelectedCourse(groupedCards[tabNames[0]][0]);
              }

              // Fetch popups
              const popupsRes = await fetch(`${API_BASE_URL}/pricing-popups`);
              if (popupsRes.ok) {
                const popupsData = await popupsRes.json();

                // Map popups by card title
                const popupsByTitle = {};
                popupsData.forEach((popup) => {
                  popupsByTitle[popup.card_title] = {
                    heading: popup.heading,
                    content: popup.content || [],
                    validity: popup.validity,
                    whothis: popup.who_this_for,
                    howwill: popup.how_to_access,
                    numberof: popup.number_of_devices || [],
                    class: popup.class_timing || [],
                    examfee: popup.exam_fee_covered,
                    contact: popup.contact_info,
                    footer: popup.footer_text,
                  };
                });
                setCourseDetails(popupsByTitle);
              }
            }
          }
        }
      } catch (error) {
        console.error("Error fetching pricing data:", error);
        // Fallback to static data already set in useState
      }
    };

    fetchPricingData();
  }, []);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/pricing-faqs`);
        if (response.ok) {
          const data = await response.json();
          if (data && data.length > 0) {
            setDynamicFaqs(data);
          }
        }
      } catch (error) {
        console.error("Error fetching pricing FAQs:", error);
      }
    };
    fetchFaqs();
  }, []);

  useEffect(() => {
    const fetchTrustedSection = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/trusted-section`);
        if (response.ok) {
          const data = await response.json();
          if (data) {
            const avatarImages = data.avatar_images.map(
              // (img) => `${API_BASE_URL}${img}`,
              (img) => `${FILE_BASE_URL}${img}`,
            );
            setTrustedSection({
              ...data,
              avatar_images: avatarImages,
            });
          }
        }
      } catch (error) {
        console.error("Error fetching trusted section:", error);
      }
    };
    fetchTrustedSection();
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const PlusIcon = () => (
    <svg
      width="100%"
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

  const STATIC_COURSE_DETAILS = { 
    /* PTE POPUP START HERE*/
    "1 Month PTE Coaching": {
      heading: "1 Month PTE Coaching",
      content: [
        "Video lessons with latest tips & Tricks ",
        "Online Live Classes with PTE Expert",
        "Class Recordings",
        "1-to-1 Feedback",
        `AI Portal with 5000+ exam questions 
     <br/>
     <span class="ai-text">( 5 Full + 20 Sectional Test can be taken once )</span>`,
        "5 Full + 20 Sectional Test (once)",
        "Prediction File & Course documents",
      ],
      validity: "1 Month (enough for Band 5 and 6)",
      whothis: "Student aiming for Band 8/7 and Nursing",
      howwill:
        "You can access this course bydownloading our official mobile app from the <a>Google Play</a> or <a>App Store</a>",
      numberof: [
        "Access is limited to 1 device only.",
        "A device change is permitted only of youe phoen is lost or replace with new one.",
        "In such cases, a one-time device change fee of A$50 will apply.",
      ],
      class: [
        "classes are conducted all 7 days online via zoom.",
        "Group classes (Melbourne Time)",
        "10:30 Am to 12:30 Am",
        "6 Pm - 8 Pm",
        "1-to-1 Coashing Timing will be fixed as per your availability. ",
      ],
      examfee:
        "No, you'll have to pay the exam fee seprately to book the test on the official person PTE , IELTS or NAATI Website.",
      footer:
        'For all the other class related queries please check our <a href="/faq" class="text-white underline">FAQ Section</a>.',
    },
    "1-Month PTE Guarantee": {
      heading: "1-Month PTE Guarantee",
      content: [
        "Video lessons with latest tips & Tricks",
        "Online Live Classes with PTE Expert",
        "Class Recordings",
        "1-to-1 Feedback",
        "AI Portal with 5000+ exam questions",
        "6 and 5 Each Templates",
        "Prediction File & Course documents",
      ],
      validity: "1 Month",
      whothis: "Student aiming for Band 8/7 and Nursing",
      howwill:
        "You can access this course bydownloading our official mobile app from the <a>Google Play</a> or <a>App Store</a>",
      numberof: [
        "Access is limited to 1 device only.",
        "A device change is permitted only of youe phoen is lost or replace with new one.",
        "In such cases, a one-time device change fee of A$50 will apply.",
      ],
      class: [
        "classes are conducted all 7 days online via zoom.",
        "Group classes (Melbourne Time)",
        "10:30 Am to 12:30 Am",
        "6 Pm - 8 Pm",
        "1-to-1 Coashing Timing will be fixed as per your availability.",
      ],
      examfee:
        "No, you'll have to pay the exam fee seprately to book the test on the official person PTE , IELTS or NAATI Website.",
      footer:
        'For all the other class related queries please check our <a href="/faq" class="text-white underline">FAQ Section</a>.',
    },
    "Unlimited PTE Coaching": {
      heading: "Unlimited PTE Coaching",
      content: [
        "Unlimited Live Classes",
        "Unlimited Mock Tests",
        "AI Portal Access",
        "Templates & Predictions",
        "Expert Feedback",
      ],
      validity: "Unlimited",
      whothis: "Student aiming for Band 8/7 and Nursing",
      howwill:
        "You can access this course bydownloading our official mobile app from the <a>Google Play</a> or <a>App Store</a>",
      numberof: [
        "Access is limited to 1 device only.",
        "A device change is permitted only of youe phoen is lost or replace with new one.",
        "In such cases, a one-time device change fee of A$50 will apply.",
      ],
      class: [
        "classes are conducted all 7 days online via zoom.",
        "Group classes (Melbourne Time)",
        "10:30 Am to 12:30 Am",
        "6 Pm - 8 Pm",
        "1-to-1 Coashing Timing will be fixed as per your availability. ",
      ],
      examfee:
        "No, you'll have to pay the exam fee seprately to book the test on the official person PTE , IELTS or NAATI Website.",
      footer:
        'For all the other class related queries please check our <a href="/faq" class="text-[#FFDB15] underline">FAQ Section</a>.',
    },
    "1-to-1 PTE Coaching": {
      heading: "1-to-1 PTE Coaching",
      content: [
        "Personal Mentor",
        "Custom Study Plan",
        "Live 1-to-1 Sessions",
        "Detailed Feedback",
      ],
      validity: "As per plan",
      whothis: "Student aiming for Band 8/7 and Nursing",
      howwill:
        "You can access this course bydownloading our official mobile app from the <a>Google Play</a> or <a>App Store</a>",
      numberof: [
        "Access is limited to 1 device only.",
        "A device change is permitted only of youe phoen is lost or replace with new one.",
        "In such cases, a one-time device change fee of A$50 will apply.",
      ],
      class: [
        "classes are conducted all 7 days online via zoom.",
        "Group classes (Melbourne Time)",
        "10:30 Am to 12:30 Am",
        "6 Pm - 8 Pm",
        "1-to-1 Coashing Timing will be fixed as per your availability. ",
      ],
      examfee:
        "No, you'll have to pay the exam fee seprately to book the test on the official person PTE , IELTS or NAATI Website.",
      contact:
        '<a href="" class="text-[#FFDB15] underline">Contact us</a> to Customize this course as per your needs.',
      footer:
        'For all the other class related queries please check our <a href="" class="text-[#FFDB15] underline">FAQ Section</a>.',
    },
    /* PTE POPUP START HERE*/

    /* NAATI CCL POPUP START HERE*/
    "NAATI CCL Starter": {
      heading: "NAATI CCL Starter",
      content: [
        "Personal Mentor",
        "Custom Study Plan",
        "Live 1-to-1 Sessions",
        "Detailed Feedback",
      ],
      validity: "As per plan",
      whothis: "Student aiming for Band 8/7 and Nursing",
      howwill:
        "You can access this course bydownloading our official mobile app from the <a>Google Play</a> or <a>App Store</a>",
      numberof: [
        "Access is limited to 1 device only.",
        "A device change is permitted only of youe phoen is lost or replace with new one.",
        "In such cases, a one-time device change fee of A$50 will apply.",
      ],
      class: [
        "classes are conducted all 7 days online via zoom.",
        "Group classes (Melbourne Time)",
        "10:30 Am to 12:30 Am",
        "6 Pm - 8 Pm",
        "1-to-1 Coashing Timing will be fixed as per your availability. ",
      ],
      examfee:
        "No, you'll have to pay the exam fee seprately to book the test on the official person PTE , IELTS or NAATI Website.",

      footer:
        'For all the other class related queries please check our <a href="" class="text-[#FFDB15] underline">FAQ Section</a>.',
    },
    "NAATI CCL Intensive": {
      heading: "NAATI CCL Intensive",
      content: [
        "Personal Mentor",
        "Custom Study Plan",
        "Live 1-to-1 Sessions",
        "Detailed Feedback",
      ],
      validity: "As per plan",
      whothis: "Student aiming for Band 8/7 and Nursing",
      howwill:
        "You can access this course bydownloading our official mobile app from the <a>Google Play</a> or <a>App Store</a>",
      numberof: [
        "Access is limited to 1 device only.",
        "A device change is permitted only of youe phoen is lost or replace with new one.",
        "In such cases, a one-time device change fee of A$50 will apply.",
      ],
      class: [
        "classes are conducted all 7 days online via zoom.",
        "Group classes (Melbourne Time)",
        "10:30 Am to 12:30 Am",
        "6 Pm - 8 Pm",
        "1-to-1 Coashing Timing will be fixed as per your availability. ",
      ],
      examfee:
        "No, you'll have to pay the exam fee seprately to book the test on the official person PTE , IELTS or NAATI Website.",

      footer:
        'For all the other class related queries please check our <a href="" class="text-[#FFDB15] underline">FAQ Section</a>.',
    },
    "NAATI CCL 1-to-1": {
      heading: "NAATI CCL 1-to-1",
      content: [
        "Personal Mentor",
        "Custom Study Plan",
        "Live 1-to-1 Sessions",
        "Detailed Feedback",
      ],
      validity: "As per plan",
      whothis: "Student aiming for Band 8/7 and Nursing",
      howwill:
        "You can access this course bydownloading our official mobile app from the <a>Google Play</a> or <a>App Store</a>",
      numberof: [
        "Access is limited to 1 device only.",
        "A device change is permitted only of youe phoen is lost or replace with new one.",
        "In such cases, a one-time device change fee of A$50 will apply.",
      ],
      class: [
        "classes are conducted all 7 days online via zoom.",
        "Group classes (Melbourne Time)",
        "10:30 Am to 12:30 Am",
        "6 Pm - 8 Pm",
        "1-to-1 Coashing Timing will be fixed as per your availability. ",
      ],
      examfee:
        "No, you'll have to pay the exam fee seprately to book the test on the official person PTE , IELTS or NAATI Website.",

      footer:
        'For all the other class related queries please check our <a href="" class="text-[#FFDB15] underline">FAQ Section</a>.',
    },
    "1-to-1 NAATI Coaching": {
      heading: "1-to-1 NAATI Coaching",
      content: [
        "Personal Mentor",
        "Custom Study Plan",
        "Live 1-to-1 Sessions",
        "Detailed Feedback",
      ],
      validity: "As per plan",
      whothis: "Student aiming for Band 8/7 and Nursing",
      howwill:
        "You can access this course bydownloading our official mobile app from the <a>Google Play</a> or <a>App Store</a>",
      numberof: [
        "Access is limited to 1 device only.",
        "A device change is permitted only of youe phoen is lost or replace with new one.",
        "In such cases, a one-time device change fee of A$50 will apply.",
      ],
      class: [
        "classes are conducted all 7 days online via zoom.",
        "Group classes (Melbourne Time)",
        "10:30 Am to 12:30 Am",
        "6 Pm - 8 Pm",
        "1-to-1 Coashing Timing will be fixed as per your availability. ",
      ],
      examfee:
        "No, you'll have to pay the exam fee seprately to book the test on the official person PTE , IELTS or NAATI Website.",

      footer:
        'For all the other class related queries please check our <a href="" class="text-[#FFDB15] underline">FAQ Section</a>.',
    },
    /* NAATI CCL POPUP END HERE*/

    /* COMBO POPUP START HERE*/
    "PTE + NAATI Combo Basic": {
      heading: "PTE + NAATI Combo Basic",
      content: [
        "Personal Mentor",
        "Custom Study Plan",
        "Live 1-to-1 Sessions",
        "Detailed Feedback",
      ],
      validity: "As per plan",
      whothis: "Student aiming for Band 8/7 and Nursing",
      howwill:
        "You can access this course bydownloading our official mobile app from the <a>Google Play</a> or <a>App Store</a>",
      numberof: [
        "Access is limited to 1 device only.",
        "A device change is permitted only of youe phoen is lost or replace with new one.",
        "In such cases, a one-time device change fee of A$50 will apply.",
      ],
      class: [
        "classes are conducted all 7 days online via zoom.",
        "Group classes (Melbourne Time)",
        "10:30 Am to 12:30 Am",
        "6 Pm - 8 Pm",
        "1-to-1 Coashing Timing will be fixed as per your availability. ",
      ],
      examfee:
        "No, you'll have to pay the exam fee seprately to book the test on the official person PTE , IELTS or NAATI Website.",

      footer:
        'For all the other class related queries please check our <a href="" class="text-[#FFDB15] underline">FAQ Section</a>.',
    },
    "PTE + NAATI Combo Pro": {
      heading: "PTE + NAATI Combo Pro",
      content: [
        "Personal Mentor",
        "Custom Study Plan",
        "Live 1-to-1 Sessions",
        "Detailed Feedback",
      ],
      validity: "As per plan",
      whothis: "Student aiming for Band 8/7 and Nursing",
      howwill:
        "You can access this course bydownloading our official mobile app from the <a>Google Play</a> or <a>App Store</a>",
      numberof: [
        "Access is limited to 1 device only.",
        "A device change is permitted only of youe phoen is lost or replace with new one.",
        "In such cases, a one-time device change fee of A$50 will apply.",
      ],
      class: [
        "classes are conducted all 7 days online via zoom.",
        "Group classes (Melbourne Time)",
        "10:30 Am to 12:30 Am",
        "6 Pm - 8 Pm",
        "1-to-1 Coashing Timing will be fixed as per your availability. ",
      ],
      examfee:
        "No, you'll have to pay the exam fee seprately to book the test on the official person PTE , IELTS or NAATI Website.",

      footer:
        'For all the other class related queries please check our <a href="" class="text-[#FFDB15] underline">FAQ Section</a>.',
    },
    "PTE + NAATI Combo Intensive": {
      heading: "PTE + NAATI Combo Intensive",
      content: [
        "Personal Mentor",
        "Custom Study Plan",
        "Live 1-to-1 Sessions",
        "Detailed Feedback",
      ],
      validity: "As per plan",
      whothis: "Student aiming for Band 8/7 and Nursing",
      howwill:
        "You can access this course bydownloading our official mobile app from the <a>Google Play</a> or <a>App Store</a>",
      numberof: [
        "Access is limited to 1 device only.",
        "A device change is permitted only of youe phoen is lost or replace with new one.",
        "In such cases, a one-time device change fee of A$50 will apply.",
      ],
      class: [
        "classes are conducted all 7 days online via zoom.",
        "Group classes (Melbourne Time)",
        "10:30 Am to 12:30 Am",
        "6 Pm - 8 Pm",
        "1-to-1 Coashing Timing will be fixed as per your availability. ",
      ],
      examfee:
        "No, you'll have to pay the exam fee seprately to book the test on the official person PTE , IELTS or NAATI Website.",

      footer:
        'For all the other class related queries please check our <a href="" class="text-[#FFDB15] underline">FAQ Section</a>.',
    },
    "PTE + NAATI Combo 1-to-1": {
      heading: "PTE + NAATI Combo 1-to-1",
      content: [
        "Personal Mentor",
        "Custom Study Plan",
        "Live 1-to-1 Sessions",
        "Detailed Feedback",
      ],
      validity: "As per plan",
      whothis: "Student aiming for Band 8/7 and Nursing",
      howwill:
        "You can access this course bydownloading our official mobile app from the <a>Google Play</a> or <a>App Store</a>",
      numberof: [
        "Access is limited to 1 device only.",
        "A device change is permitted only of youe phoen is lost or replace with new one.",
        "In such cases, a one-time device change fee of A$50 will apply.",
      ],
      class: [
        "classes are conducted all 7 days online via zoom.",
        "Group classes (Melbourne Time)",
        "10:30 Am to 12:30 Am",
        "6 Pm - 8 Pm",
        "1-to-1 Coashing Timing will be fixed as per your availability. ",
      ],
      examfee:
        "No, you'll have to pay the exam fee seprately to book the test on the official person PTE , IELTS or NAATI Website.",

      footer:
        'For all the other class related queries please check our <a href="" class="text-[#FFDB15] underline">FAQ Section</a>.',
    },
    /* COMBO POPUP END HERE*/
  };

  const currentCourseDetail = selectedCourse1
    ? courseDetails[selectedCourse1] ||
      STATIC_COURSE_DETAILS[selectedCourse1] ||
      {}
    : {};

  return (
    <>
      {/* bg-[rgb(17,17,17)] */}
      <section className="flex items-center justify-center px-4 pt-[50.9166666667vw] lg:pt-[17.78125vw] mt-[-30.33em] lg:mt-[-7.33em]">
        <div className="text-center w-full lg:max-w-[41.5104166667vw]">
          <h1 className="text-[#FFFFFF] font-medium lg:text-[3.0208333333vw] md:text-[2.9166666667em] text-[8.8888888889em] mb-[0.4625em] tracking-[1.1px] leading-[1.1724] hidden sm:block">
            Simple, Transparent Pricing
          </h1>

          {/*Mobile Text*/}
          <h1 className="text-[#FFFFFF] block sm:hidden text-[8.8888888889em] mb-[5.7291666667vw] tracking-[1.1px] leading-[1.21875] font-[600]">
            Simple,
            <br />
            Transparent Pricing
          </h1>

          {/* Desktop / Tablet text */}
          <p className="hidden sm:block text-[#FFFFFF] lg:text-[1.3802083333vw] md:text-[1.3541666667vw] text-[3.8888888889vw] mb-[1.5625em] tracking-[0.2px] leading-[1.4615] lg:font-[350]">
            Choose the perfect plan to achieve your target score
            <br />
            See details for course information
          </p>

          {/* Mobile text */}
          <p className="block sm:hidden text-[#FFFFFF] text-[3.9583333333vw] mb-[6.5104166667vw] font-[350] leading-[1.28571]">
            Choose the right plan for your target score.
            <br />
            See course details.
          </p>

          <div className="relative mx-auto">
            <div className="flex justify-center gap-[1.5625vw] lg:gap-[1.8229166667vw] bg-[#212121] rounded-[2.0333333333vw] lg:rounded-[0.6613756614vw] p-[0.78125vw] lg:p-[0.2314814815vw] w-[100%] lg:max-w-[36.0416666667vw] md:max-w-[34.0416666667em] mx-auto">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    // set selected course to first course for the selected tab
                    const first = coursesByTab[tab] && coursesByTab[tab][0];
                    if (first) {
                      setSelectedCourse(first);
                    }
                    setDiscountApplied(false);
                    setCoupon("");
                    setSelectedCourse1(null);
                  }}
                  className={`flex-1 py-[1.5625vw] lg:py-[0.2843915344vw] rounded-[1.5625vw] lg:rounded-[0.496031746vw] text-[3.8888888889em] lg:text-[1.3541666667em] md:text-[1.3541666667em] font-[400] transition-normal
                ${
                  activeTab === tab
                    ? "bg-[#40434C] text-[#FFFFFF] font-[500] leading-[1.1923]"
                    : "text-[#98999F] hover:text-white"
                }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Vertical dividers that move based on active tab
                - divider between tab1 & tab2 at ~33.33%
                - divider between tab2 & tab3 at ~66.66%
                Show/hide them per the requested behaviour:
                when first tab selected -> show right divider
                when third tab selected -> show left divider
                when second tab selected -> show left divider (matches screenshots)
            */}
            <div
              className={`absolute top-1/2 -translate-y-1/2 lg:left-[33.3333%] left-[30.5%] w-[0.4722222222vw] h-[5vw] lg:w-[0.15625vw] lg:h-[1.3015873016vw] bg-[#40434C] rounded transition-opacity duration-300 ${
                activeTab === tabs[2] ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* Right divider (between tab2 & tab3) → only when 1st selected */}
            <div
              className={`absolute top-1/2 -translate-y-1/2 left-[68.5%] lg:left-[66.6667%] w-[0.4722222222vw] h-[5vw] lg:w-[0.15625vw] lg:h-[1.3015873016vw] bg-[#40434C] rounded transition-opacity duration-300 ${
                activeTab === tabs[0] ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
      </section>

      {/* course section start*/}

      <section className="w-full lg:px-4 lg:py-[5.78125vw] pt-[18.3333333333vw]">
        <div className="lg:mx-auto mx-[1.1458333333vw] lg:max-w-[81.6137566138vw] max-w-[96vw]">
          {/* <h2 className="text-[#EDE4CD] text-[5.5555555556em] lg:text-[1.917989418vw] md:text-[1.875em] mb-4 lg:ml-[3.3068783069vw] md:ml-12 font-[500] lg:tracking-[0.65px] lg:mb-[1.5873015873vw]">
            Select a course:
          </h2> */}

          <h2>
            <span className="hidden sm:block text-[#EDE4CD] text-[5.5555555556em] lg:text-[1.917989418vw] md:text-[1.875em] mb-4 lg:ml-[3.3068783069vw] md:ml-12 font-[500] lg:tracking-[0.65px] lg:mb-[1.5873015873vw]">
              Select a course:
            </span>

            {/* // for mobile text */}
            <span className="block sm:hidden text-[#EDE4CD] text-[5.5555555556em] lg:text-[1.917989418vw] md:text-[1.875em] mb-[3.6458333333vw] ml-[1.5625vw] md:ml-12 lg:tracking-[0.65px] lg:mb-[1.5873015873vw] font-[600]">
              Select a course
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-12 gap-8 lg:gap-[7.3412698413vw] items-stretch">
            <div className="lg:col-span-6 md:col-span-6">
              
              <div
                className="rounded-[1.0416666667vw]  lg:h-[35.1475em] md:h-[40.9895833333em] h-[107.7777777778em] overflow-y-scroll space-y-4 [&::-webkit-scrollbar]:w-[2px]
[&::-webkit-scrollbar-track]:bg-[#929292]
[&::-webkit-scrollbar-thumb]:bg-[#FFFFFF]
[&::-webkit-scrollbar-thumb]:rounded-full"
              >
                {(coursesByTab[activeTab] || []).map((course) => (
                  <div
                    key={course.id}
                    onClick={() => {
                      setSelectedCourse(course);
                      setDiscountApplied(false);
                      setCoupon("");
                    }}
                    className={`lg:w-[30.625em] md:w-[30.625em] w-[91.9444444444em] mx-auto cursor-pointer lg:rounded-[1.0416666667vw] rounded-[3.8888888889vw] pt-[3.6458333333vw] pr-[4.6875vw] pl-[3.6458333333vw] pb-[4.9479166667vw] lg:pr-[1.455026455vw] lg:pl-[1.1243386243vw] lg:pt-[1.3227513228vw] lg:pb-[1.455026455vw] lg:border-[0.1666666667vw] border-[0.5555555556vw] transition-all lg:[margin-block-end:1.2566137566vw]


        ${
          selectedCourse && selectedCourse.id === course.id
            ? "border-white bg-[#16181D]"
            : "border-transparent bg-[#15181d]"
        }`}
                  >
                    <div className="flex justify-between items-center lg:mb-[1.3227513228vw] mb-[3.6458333333vw]">
                      <h3 className="text-[#9D9B9B] lg:text-[1.3541666667em] md:text-[1.3541666667em] text-[4.5572916667vw] font-[550] leading-[1.1875]">
                        {course.title}
                      </h3>

                      <span
                        className="text-[2.7777777778em] lg:text-[0.9375em] md:text-[0.9375em] text-[#838383] underline-offset-[2px] underline"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedCourse1(course.title);
                        }}
                      >
                        See Details
                      </span>
                    </div>

                    <div className="flex items-center justify-between mb-[3.6458333333vw] lg:mb-[1.5873015873vw]">
                      <p className="text-white lg:text-[1.6666666667em] md:text-[1.6666666667em] text-[5.5555555556em] lg:font-[550] font-[500] lg:leading-[1]">
                        ${Math.floor(course.price)}
                      </p>

                      {course.badge && (
                        <div className="bg-[#FFFFFF] text-black lg:text-[0.8854166667em] md:text-[0.8854166667em] text-[3.0555555556em] lg:px-[0.8928571429vw] lg:py-[0.376984127vw] px-[2.8645833333vw] py-[1.25vw] rounded-full tracking-[0.2em]">
                          {course.badge}
                        </div>
                      )}
                    </div>

                    <ul className="space-y-5]">
                      {course.points.map((point, i) => (
                        // <li
                        //   key={i}
                        //   className="flex items-start lg:gap-5 gap-[3.6458333333vw] text-white lg:text-[1.09375em] md:text-[1.09375em] text-[3.3333333333em] lg:[margin-block-end:1.5211640212vw]"
                        // >
                        //   {" "}
                        //   <svg
                        //     className="flex-shrink-0 lg:w-[1.1904761905vw] lg:h-[1.1904761905vw] md:w-[1.09375em] md:h-[1.09375em] w-[3.7239583333vw] h-[3.7239583333vw] mt-1"
                        //     viewBox="0 0 24 24"
                        //     fill="none"
                        //   >
                        //     {" "}
                        //     <path
                        //       d="M7.87967 20.8238L0 12.9385L1.70341 11.2351L7.87967 17.417L22.2966 3.00006L24 4.70347L7.87967 20.8238Z"
                        //       fill="#EF94CA"
                        //     />{" "}
                        //   </svg>{" "}
                        //   <span className="leading-[1.45] lg:leading-[1.5283] opacity-[0.75] text-[3.4vw] lg:text-[1.1243386243vw] font-[350] [margin-block-end:3.90625vw]  md:[margin-block-end:0] lg:[margin-block-end:0] ">
                        //     {" "}
                        //     {point}{" "}
                        //   </span>{" "}
                        // </li>
                        <li
                          key={i}
                          className="flex items-start lg:gap-5 gap-[3.6458333333vw] text-white lg:text-[1.09375em] md:text-[1.09375em] text-[3.3333333333em] lg:[margin-block-end:1.5211640212vw] last:lg:[margin-block-end:0] [margin-block-end:3.90625vw] last:[margin-block-end:0]"
                        >
                          <svg
                            className="flex-shrink-0 lg:w-[1.1904761905vw] lg:h-[1.1904761905vw] md:w-[1.09375em] md:h-[1.09375em] w-[3.7239583333vw] h-[3.7239583333vw] mt-1"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.87967 20.8238L0 12.9385L1.70341 11.2351L7.87967 17.417L22.2966 3.00006L24 4.70347L7.87967 20.8238Z"
                              fill="#EF94CA"
                            />
                          </svg>

                          <span className="leading-[1.45] lg:leading-[1.5283] opacity-[0.75] text-[3.4vw] lg:text-[1.1243386243vw] font-[350]">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {selectedCourse1 &&
              createPortal(
                <div className="fixed inset-0 z-[60] flex items-center justify-center [rgba(0,0,0,0.65)] backdrop-blur-[12.5px]">
                  <div className="w-[90%] max-w-[90.5555555556em] lg:max-w-[26.1458333333em] md:max-w-[26.1458333333em] bg-[#16181D] rounded-2xl relative flex flex-col lg:h-[36.7708333333vw] md:h-[36.7708333333vw] h-[117.5em] pb-[9.1145833333vw] pt-[4.4270833333vw] lg:py-[1.3227513228vw] lg:pl-[1.7195767196vw]">
                    <div className="px-[4.6875vw] lg:px-[0] border-white/10">
                      <div className="flex justify-between items-center">
                        <button
                          onClick={() => setSelectedCourse1(null)}
                          className="absolute right-4 text-white mb-2 lg:mb-[0.9920634921vw]"
                        >
                          <svg
                            className="lg:h-[1.09375em] lg:w-[1.09375em] h-[3.8333333333em] w-[3.8333333333em]"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.2773 10.7279L20.9232 3.07683C21.6263 2.37371 21.6315 1.23308 20.9232 0.524747C20.2201 -0.17317 19.0794 -0.178378 18.3763 0.529955L10.7253 8.17579L3.07943 0.529955C2.3763 -0.17317 1.23047 -0.178378 0.527344 0.524747C-0.175781 1.22787 -0.175781 2.37371 0.527344 3.07683L8.17839 10.7279L0.527344 18.3737C-0.175781 19.0768 -0.175781 20.2227 0.527344 20.9258C1.23047 21.6289 2.3763 21.6289 3.07943 20.9258L10.7253 13.2747L18.3763 20.9258C19.0794 21.6289 20.2201 21.6289 20.9232 20.9258C21.6263 20.2227 21.6263 19.0768 20.9232 18.3737L13.2773 10.7279Z"
                              fill="white"
                            />
                          </svg>
                        </button>

                        <h3 className="text-[#9C9B99] lg:text-[1.3756613757vw] md:text-[1.3541666667em] text-[5em] mb-[2.6041666667vw] lg:tracking-[0.2px] lg:leading-[1.1923] lg:mb-[0.9920634921vw] font-[550]">
                          Additional Information
                        </h3>
                      </div>

                      <h2 className="text-[#FBFFDB] lg:text-[1.1574074074vw] md:text-[1.1458333333em] text-[4.4444444444em] leading-normal lg:leading-[1.22] lg:mb-[1.0582010582vw] font-[500] pricepop-heading lg:tracking-[0.1px] mb-[3.125vw]">
                        {currentCourseDetail.heading || selectedCourse1}
                      </h2>
                    </div>

                    <div
                      className="flex-1 overflow-y-scroll px-[4.6875vw] lg:px-0 lg:p-[0] lg:mr-[0.6613756614vw] mr-2
              [&::-webkit-scrollbar]:w-[2px]
              [&::-webkit-scrollbar-track]:bg-[#929292]
              [&::-webkit-scrollbar-thumb]:bg-[#FFFFFF]
              [&::-webkit-scrollbar-thumb]:rounded-full"
                    >
                      <p className="text-white lg:text-[1.1458333333em] md:text-[1.1458333333em] text-[4.4444444444em] mb-[1.8229166667vw] lg:mb-[0.5291005291vw]">
                        What’s Included:
                      </p>

                      <ul className="space-y-[0.6613756614vw] text-[#838383] lg:text-[1.1044973545vw] md:text-[1.09375em] text-[3.9192708333vw] mb-[1.8229166667vw] lg:mb-4 list-disc pl-5 lg:pl-[1.5211640212vw] lg:marker:text-[0.9920634921vw] lg:max-w-[21.2301587302vw] ">
                        {(currentCourseDetail.content || []).map((item, i) => (
                          <li
                            key={i}
                            className="leading-relaxed lg:leading-[1.30] lg:[margin-block-end: 0.6613756614vw] font-[385] lg:pl-[0.1322751323vw] pl-[0.5208333333vw] [margin-block-end:0.9114583333vw]"
                            dangerouslySetInnerHTML={{ __html: item }}
                          />
                        ))}
                      </ul>

                      <p className="text-white lg:text-[1.1458333333em] md:text-[1.1458333333em] text-[4.4444444444em] mb-[2.0833333333vw] lg:mb-[0.5291005291vw] lg:mt-[1.455026455vw] mt-[4.4270833333vw]">
                        Validity
                      </p>
                      <ul className="list-disc pl-5  text-[#838383] lg:text-[1.09375em] md:text-[1.09375em] text-[3.9192708333vw] mb-[1.8229166667vw] lg:mb-4 lg:marker:text-[0.9920634921vw] lg:max-w-[21.2301587302vw] lg:pl-[1.5873015873vw]">
                        <li className="lg:pl-[0.1322751323vw] pl-[0.5208333333vw] [margin-block-end:0.9114583333vw] lg:[margin-block-end:0]">
                          {currentCourseDetail.validity}
                        </li>
                      </ul>

                      <p className="text-white lg:text-[1.1458333333em] md:text-[1.1458333333em] text-[4.4444444444em] mb-[2.0833333333vw] lg:mb-[0.5291005291vw] lg:mt-[1.455026455vw] mt-[4.4270833333vw]">
                        Who this course for?
                      </p>
                      <ul className="list-disc pl-5 text-[#838383] lg:text-[1.09375em] md:text-[1.09375em] text-[3.9192708333vw] mb-[1.8229166667vw] lg:mb-4 lg:marker:text-[0.9920634921vw] lg:max-w-[21.2301587302vw] lg:pl-[1.5873015873vw]">
                        <li className="lg:pl-[0.1322751323vw] pl-[0.5208333333vw] [margin-block-end:0.9114583333vw] lg:[margin-block-end:0]">
                          {currentCourseDetail.whothis}
                        </li>
                      </ul>

                      <p className="text-white lg:text-[1.1458333333em] md:text-[1.1458333333em] text-[4.4444444444em] mb-[2.0833333333vw] lg:mb-[0.5291005291vw] lg:mt-[1.455026455vw] mt-[4.4270833333vw]">
                        How Will i Access This Course?
                      </p>
                      <ul className="list-disc pl-5 text-[#838383] lg:text-[1.09375em] md:text-[1.09375em] text-[3.9192708333vw] mb-[1.8229166667vw] lg:mb-4 lg:marker:text-[0.9920634921vw] lg:max-w-[21.2301587302vw] lg:pl-[1.5873015873vw]">
                        <li
                          className="lg:pl-[0.1322751323vw] pl-[0.5208333333vw] [margin-block-end:0.9114583333vw] lg:[margin-block-end:0]"
                          dangerouslySetInnerHTML={{
                            __html: currentCourseDetail.howwill || "",
                          }}
                        />
                      </ul>

                      <p className="text-white lg:text-[1.1458333333em] md:text-[1.1458333333em] text-[4.4444444444em] mb-[2.0833333333vw] lg:mb-[0.5291005291vw] lg:mt-[1.455026455vw] mt-[4.4270833333vw]">
                        Number of devices?
                      </p>
                      <ul className="list-disc pl-5 text-[#838383] lg:text-[1.09375em] md:text-[1.09375em] text-[3.9192708333vw] mb-[1.8229166667vw] lg:mb-4 space-y-2 lg:marker:text-[0.9920634921vw] lg:max-w-[21.2301587302vw] lg:pl-[1.5873015873vw]">
                        {(currentCourseDetail.numberof || []).map((item, i) => (
                          <li
                            key={i}
                            className="lg:pl-[0.1322751323vw] pl-[0.5208333333vw] [margin-block-end:0.9114583333vw] lg:[margin-block-end:0]"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>

                      <p className="text-white lg:text-[1.1458333333em] md:text-[1.1458333333em] text-[4.4444444444em] mb-[2.0833333333vw] lg:mb-[0.5291005291vw] lg:mt-[1.455026455vw] mt-[4.4270833333vw]">
                        Class Timing and Live Classes?
                      </p>
                      <ul className="list-disc pl-5 text-[#838383] lg:text-[1.09375em] md:text-[1.09375em] text-[3.9192708333vw] mb-[1.8229166667vw] lg:mb-4 space-y-2 lg:marker:text-[0.9920634921vw] lg:max-w-[21.2301587302vw] lg:pl-[1.5873015873vw]">
                        {(currentCourseDetail.class || []).map((item, i) => (
                          <li
                            className="lg:pl-[0.1322751323vw] pl-[0.5208333333vw] [margin-block-end:0.9114583333vw] lg:[margin-block-end:0]"
                            key={i}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>

                      <p className="text-white lg:text-[1.1458333333em] md:text-[1.1458333333em] text-[4.4444444444em] mb-[2.0833333333vw] lg:mb-[0.5291005291vw] lg:mt-[1.455026455vw] mt-[4.4270833333vw]">
                        Is Exam fee coverd?
                      </p>
                      <ul className="list-disc pl-5 text-[#838383] lg:text-[1.09375em] md:text-[1.09375em] text-[3.9192708333vw] mb-[1.8229166667vw] lg:mb-4 lg:marker:text-[0.9920634921vw] lg:max-w-[21.2301587302vw] lg:pl-[1.5873015873vw]">
                        <li className="lg:pl-[0.1322751323vw] pl-[0.5208333333vw] [margin-block-end:0.9114583333vw] lg:[margin-block-end:0]">
                          {currentCourseDetail.examfee}
                        </li>
                      </ul>

                      <p
                        className="text-[#FFDB15] lg:text-[1.09375em] md:text-[1.09375em] text-[3.8888888889em] mb-4"
                        dangerouslySetInnerHTML={{
                          __html: currentCourseDetail.contact || "",
                        }}
                      />
                      <p
                        className="text-white lg:text-[1.14583vw] md:text-[1.09375em] text-[4.44444vw] mb-[0.529101vw] lg:mt-[1.455026455vw] mt-[4.4270833333vw] lg:max-w-[21.4947089947vw]"
                        dangerouslySetInnerHTML={{
                          __html: currentCourseDetail.footer || "",
                        }}
                      />
                    </div>
                  </div>
                </div>,
                document.body,
              )}

            {/*whatsapp div mobile view*/}
            <div className="w-full flex justify-center items-center lg:hidden">
              <div className="flex items-center gap-[3.3854166667vw] lg:gap-[0.9259259259vw] px-[2.8645833333vw] lg:px-0 lg:pl-[0.9259259259vw] lg:pr-[2.2486772487vw] py-[1.5625vw] lg:py-[0.5952380952vw] border-[0.3944444444vw] border-[#00BF63] rounded-[2.6041666667vw] w-[87.2395833333vw]">
                <div className=" rounded-full flex items-center justify-center">
                  <svg
                    className="lg:w-[4.1666666667vw] lg:h-[4.1666666667vw] md:w-[3.3333333333em] md:h-[3.3333333333em] w-[12.2395833333vw] h[12.2395833333vw] my-[0.78125vw]"
                    viewBox="0 0 1540 1555"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1035.61 1258.04C1011.58 1263.13 972.136 1265.05 956.601 1261.91C953.401 1261.27 942.928 1259.35 933.328 1257.6C816.906 1236.66 651.146 1126.87 513.837 979.724C474.71 937.775 462.608 923.724 440.703 894.837C314.71 728.495 266.303 563.637 312.121 456.786C321.139 435.724 346.594 400.059 366.521 380.51C400.208 347.462 429.154 339.55 459.961 354.91C470.87 360.321 487.539 375.361 520.441 409.339C571.757 462.371 597.91 495.477 614.812 528.844C624.877 548.684 626.419 554.27 626.419 571.026C626.419 593.048 622.841 601.164 592.994 647.041C572.339 678.779 566.114 693.091 563.554 714.91C558.666 756.48 594.797 818.531 666.914 892.481C722.855 949.819 763.263 977.979 798.986 984.524C832.703 990.691 857.43 985.019 890.07 963.666C902.666 955.433 920.819 944.961 930.419 940.422C963.903 924.539 1002.65 931.142 1039.1 959.011C1063.48 977.63 1118.55 1031.56 1147.55 1065.22C1175.95 1098.18 1187.87 1118.63 1187.87 1134.31C1187.87 1166.2 1136.73 1218.65 1081.11 1243.87C1070.75 1248.58 1050.27 1254.95 1035.61 1258.04ZM1205.59 836.917C1201.23 848.35 1188.57 853.993 1177.63 849.397C1172.86 847.39 1167.54 843.928 1165.76 841.659C1164.02 839.419 1159.74 819.171 1156.25 796.684C1149.36 752.059 1135.51 705.339 1118.38 668.888C1060.25 545.31 943.219 457.891 806.579 435.957C768.848 429.906 763.146 426.328 763.146 408.699C763.146 399.768 764.863 395.928 770.972 391.128C777.866 385.688 781.183 385.193 799.336 386.822C876.688 393.775 964.834 430.982 1032.24 485.121C1115.38 551.913 1173.27 648.03 1198.93 761.95C1206.49 795.521 1209.31 827.142 1205.59 836.917ZM1053.12 825.688C1035.87 842.939 1010.42 829.295 1010.42 802.793C1010.42 795.87 1007.13 778.91 1003.12 765.062C975.888 671.07 903.685 606.313 803.554 586.095C782.725 581.877 774.783 574.721 774.783 560.117C774.783 541.906 781.503 538.182 810.594 540.248C878.492 545.048 964.688 598.022 1007.34 661.237C1034.86 701.993 1054.9 755.491 1058.88 798.779C1060.57 816.902 1060.19 818.619 1053.12 825.688Z"
                      fill="#20B267"
                    />
                    <path
                      d="M253.795 1491.75C185.635 1526.37 127.773 1554.68 125.213 1554.68C122.653 1554.68 117.067 1551.65 112.791 1547.99C102.784 1539.37 102.755 1526.11 112.646 1497.22C116.631 1485.61 119.336 1476.13 118.638 1476.13C117.969 1476.13 119.831 1469.27 122.827 1460.86C125.795 1452.45 131.787 1433.8 136.151 1419.4C148.456 1378.88 156.369 1353.16 170.711 1307.4C171.671 1304.35 172.573 1301.44 173.446 1298.71C185.227 1261.18 187.991 1252.36 184.995 1246.46C183.86 1244.22 181.882 1242.39 179.235 1239.56C145.635 1203.58 85.4164 1104.52 60.4274 1044.13C47.9183 1013.85 26.9728 955.404 28.66 955.404C29.271 955.404 27.9037 949.993 25.5474 943.389C15.5401 914.968 3.93281 843.026 1.34372 793.077C-6.569 641.164 20.2237 517.673 88.1219 393.135C187.235 211.287 373.3 69.382 577.635 19.8402C640.296 4.65471 683.438 0.0292768 763.147 0.000185907C842.915 -0.028905 876.747 3.34565 939.147 17.5129C1134.46 61.9057 1310.14 184.349 1419.41 352.262C1439.22 382.691 1466.94 435.433 1478.78 465.222C1483.87 478.022 1490.36 494.371 1493.21 501.586C1498.42 514.764 1509.42 551.797 1517.97 584.96C1524.78 611.404 1533.27 666.589 1537.14 709.586C1544.12 786.997 1532.19 894.662 1507.47 977.222C1456.62 1147.14 1343.34 1300.33 1195.15 1399.56C1098.65 1464.17 1001.81 1500.65 878.057 1518.95C823.889 1526.98 705.576 1526.28 651.147 1517.61C571.613 1504.93 511.249 1485.53 434.973 1448.09C401.053 1431.45 383.453 1424.26 381.155 1426.09C379.235 1427.61 321.926 1457.13 253.795 1491.75ZM725.329 1480.2C764.282 1484.89 874.973 1474.62 936.238 1460.6C1137.95 1414.55 1315.79 1273.86 1413.3 1083.23C1468.46 975.36 1495.95 855.68 1492.43 738.677C1489.2 631.157 1466.68 545.077 1414.38 440.495C1368.38 348.48 1305.69 271.215 1224.33 206.342C1121.11 124.015 993.315 69.1493 863.511 51.4329C819.758 45.4693 712.849 44.7129 671.511 50.1238C535.22 67.8984 401.576 126.662 296.5 214.953C211.526 286.371 148.195 368.698 106.275 462.313C91.4965 495.302 74.4201 541.847 71.8892 556.044C71.1037 560.495 68.5728 570.677 66.3037 578.677C59.8746 601.077 50.3619 659.462 48.0928 690.444C45.1837 730.415 48.7038 821.004 54.551 855.04C60.7474 891.404 69.0964 926.72 78.5801 956.858C103.453 1035.93 149.94 1123.87 201.373 1189.18C229.126 1224.47 238.696 1235.61 239.133 1247.13C239.366 1252.95 237.271 1258.85 234.013 1267.99C233.518 1269.41 232.966 1270.95 232.413 1272.55C228.515 1283.72 225.867 1292.86 226.536 1292.86C227.206 1292.86 224.733 1301.7 221.067 1312.49C217.373 1323.29 211.584 1341.29 208.18 1352.49C204.747 1363.69 198.58 1384 194.449 1397.59C190.289 1411.17 183.802 1432.15 179.991 1444.13C172.224 1468.65 169.664 1479.04 171.438 1479.04C172.107 1479.04 219.758 1455.48 277.329 1426.68C342.987 1393.83 385.256 1374.31 390.726 1374.31C395.816 1374.31 407.54 1379.32 419.089 1386.41C448.82 1404.71 506.158 1431.04 544.355 1443.96C597.795 1462.02 633.635 1469.21 725.329 1480.2Z"
                      fill="#44B56E"
                    />
                  </svg>
                </div>

                <div className="text-start">
                  <p className="text-white lg:text-[1.1772486772vw] md:text-[1.1979166667em] text-[3.515625vw] mb-[1.3020833333vw] lg:leading-[1.21] lg:mb-[0.4497354497vw] leading-[1.25] lg:tracking-[0.3px]">
                    Confused? Talk to an expert
                  </p>
                  <div className="flex items-center gap-2">
                    <svg
                      className="lg:w-[1.1979166667em] md:w-[1.1979166667em] w-[3.3333333333em] h-[3.3333333333em] lg:h-[1.1979166667em] md:h-[1.1979166667em]"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.8557 16.8713L19.5812 14.5967C18.3222 13.3429 16.286 13.3429 15.027 14.5967C14.5607 15.0631 14.2705 15.6434 14.1514 16.2444C10.395 15.5397 6.74751 11.9077 6.51954 8.65391C7.1361 8.53992 7.72675 8.24977 8.20342 7.76792C9.45725 6.51407 9.45725 4.47268 8.20342 3.21882L5.92371 0.944274C4.66988 -0.314758 2.63368 -0.314758 1.37467 0.944274C-5.45408 7.76792 15.027 28.2544 21.8557 21.4256C23.1148 20.1665 23.1148 18.1303 21.8557 16.8713Z"
                        fill="#00BF63"
                      />
                    </svg>

                    <p className="text-[#00C26E] leading-[1.21] lg:text-[1.1979166667em] md:text-[1.1979166667em] text-[3.3333333333em]">
                      +61 426 7896 123 / +61 426 444 555
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 md:col-span-6 flex justify-center items-center ml-[5px] lg:ml-0">
              {/* <div
                className={`bg-[#212121] rounded-xl lg:rounded-[1.3227513228vw] p-5 lg:px-[2.0502645503vw] lg:w-[35.3125em] md:w-[35.3125em] w-[94.4444444444em] lg:h-[36.8475em] md:h-[40.9895833333em] h-[119.4444444444em] flex flex-col `}
                // ${showSuccessAnim ? "success-glow success-sweep" : ""}
              > */}
              <div
                className={`bg-[#212121] rounded-xl lg:rounded-[1.3227513228vw] lg:p-[1.3227513228vw] pt-[3.6458333333vw] pb-[4.1666666667vw] px-[20px] lg:px-[2.0502645503vw] lg:w-[35.3125em] md:w-[35.3125em] w-[94.4444444444em] flex flex-col`}
              >
                <div className="flex items-center gap-[2.8645833333vw] lg:gap-[0.9259259259vw] lg:mb-0 mb-[3.125vw]">
                  <svg
                    className="lg:mb-4 lg:h-[1.2896825397vw] lg:w-[1.2896825397vw] w-[4.6875vw] h-[4.6875vw]"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => navigate("/transparent-pricing2")}
                  >
                    <path
                      d="M4.58313 12.4717C3.7401 12.4717 3.06267 13.1697 3.06267 14.03C3.06267 14.8919 3.7401 15.59 4.58313 15.59C5.42783 15.59 6.11028 14.8919 6.11028 14.03C6.11028 13.1697 5.42783 12.4717 4.58313 12.4717ZM0 0V1.56002H1.52882L4.27368 7.47071L3.24331 9.38063C3.12456 9.60763 3.05597 9.86024 3.05597 10.1333C3.05597 10.9953 3.7401 11.6916 4.58313 11.6916H13.7494V10.1333H4.90762C4.80057 10.1333 4.71694 10.048 4.71694 9.93875C4.71694 9.90291 4.7253 9.87219 4.74036 9.84488L5.42281 8.57501H11.1149C11.687 8.57501 12.1871 8.25072 12.4514 7.77111L15.1812 2.71212C15.2431 2.60459 15.2765 2.47487 15.2765 2.33833C15.2765 1.90651 14.9336 1.56002 14.5138 1.56002H3.2199L2.49396 0H0ZM12.2222 12.4717C11.3775 12.4717 10.7018 13.1697 10.7018 14.03C10.7018 14.8919 11.3775 15.59 12.2222 15.59C13.0653 15.59 13.7494 14.8919 13.7494 14.03C13.7494 13.1697 13.0653 12.4717 12.2222 12.4717Z"
                      fill="white"
                    />
                  </svg>

                  <h2 className="text-white lg:text-[1.3888888889vw] lg:leading-[1.23] lg:tracking-[0.2px] md:text-[1.3541666667vw] text-[3.8888888889em] lg:mb-[1.0582010582vw] font-medium">
                    Order Summary
                  </h2>
                </div>

                <hr className="border-[#838383] lg:mb-[1.3227513228vw]" />

                <div className="flex justify-between items-center lg:mb-4 mb-[4.9479166667vw] lg:mt-0 mt-[3.90625vw]">
                  <div className="bg-black lg:px-[0.7275132275vw] lg:py-[0.4431216931vw] px-[1.8229166667vw] py-[1.5625vw] rounded-[2.0833333333vw] lg:rounded-[0.6613756614vw] ">
                    <h3 className="text-[#EDE4CD] font-[550] lg:text-[1.4814814815vw] md:text-[1.4583333333vw] text-[4.4444444444em] leading-[1.14286] lg:tracking-[0.2px]">
                      {selectedCourse?.title || "Select a course"}
                    </h3>
                  </div>
                  <p className="text-[#00FEFC] lg:text-[0.9375em] md:text-[0.9375em] text-[2.7777777778em]">
                    Selected
                  </p>
                </div>

                <label className="block lg:text-[1.0416666667em] md:text-[1.0416666667em] text-[3.3333333333em] text-white mb-2">
                  Discount Code / Coupon code ?
                </label>

                <div className="flex gap-[2.6041666667vw] lg:gap-3 mb-[2.0833333333vw] lg:mb-[0.5291005291vw]">
                  <input
                    value={coupon}
                    onChange={handleChange}
                    onFocus={() => {
                      if (status === "idle") {
                        setStatus("typing");
                      }
                    }}
                    onBlur={() => {
                      if (status === "typing") {
                        setStatus("idle");
                      }
                    }}
                    className={`flex-1 border rounded-md lg:px-[0.9259259259vw] lg:py-[0.9259259259vw] px-2 py-[3.125vw] text-white lg:text-[1.1458333333em] md:text-[1.1458333333em] text-[4.1666666667em] outline-none w-[52.8645833333vw] lg:w-[20em]
${
  status === "idle"
    ? "border-[#838383]"
    : status === "typing"
      ? "border-[#00BCD4]"
      : status === "invalid"
        ? "border-[#ff0303] bg-[#1B1D1B]"
        : status === "expired"
          ? "border-[#ff0303] bg-[#1B1D1B]"
          : status === "valid"
            ? "border-[#00BF63] bg-[#1B1D1B]"
            : ""
}`}
                    placeholder="Enter Coupon Code"
                  />

                  <button
                    onClick={handleApply}
                    className="lg:px-4 px-[4.1666666667vw] bg-[#484B54] text-white rounded-[1.5625vw] lg:rounded-[0.5208333333vw] lg:text-[1.1458333333em] md:text-[1.1458333333em] text-[3.3333333333em]"
                  >
                    Apply Code
                  </button>
                </div>

                {status === "valid" && (
                  <div className="flex items-center gap-2 lg:mt-[0.1322751323vw]">
                    <svg
                      className="w-[4.1666666667em] lg:w-[1.25em] md:w-[1.25em]"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.5938 0.28125L14.1146 1.79688C14.3594 2.03646 14.7188 2.13542 15.0521 2.04688L17.125 1.49479C17.6458 1.35937 18.1719 1.66667 18.3125 2.18229L18.875 4.25521C18.9635 4.58854 19.224 4.84896 19.5573 4.9375L21.6302 5.5C22.1458 5.64063 22.4531 6.16667 22.3177 6.6875L21.7656 8.76042C21.6771 9.09375 21.776 9.45312 22.0156 9.69792L23.5312 11.2188C23.9062 11.599 23.9062 12.2135 23.5312 12.5885L22.0156 14.1146C21.776 14.3594 21.6771 14.7135 21.7656 15.0469L22.3177 17.125C22.4531 17.6406 22.1458 18.1719 21.6302 18.3125L19.5573 18.875C19.224 18.9635 18.9635 19.224 18.875 19.5573L18.3125 21.6302C18.1719 22.1458 17.6458 22.4531 17.125 22.3177L15.0521 21.7656C14.7188 21.6771 14.3594 21.7708 14.1146 22.0156L12.5938 23.5312C12.2135 23.9062 11.6042 23.9062 11.224 23.5312L9.69792 22.0156C9.45312 21.7708 9.09896 21.6771 8.76562 21.7656L6.6875 22.3177C6.17188 22.4531 5.64063 22.1458 5.5 21.6302L4.9375 19.5573C4.84896 19.224 4.58854 18.9635 4.25521 18.875L2.18229 18.3125C1.66667 18.1719 1.35938 17.6406 1.5 17.125L2.04688 15.0469C2.13542 14.7135 2.04167 14.3594 1.79688 14.1146L0.28125 12.5885C-0.09375 12.2135 -0.09375 11.599 0.28125 11.2188L1.79688 9.69792C2.04167 9.45312 2.13542 9.09375 2.04688 8.76042L1.5 6.6875C1.35938 6.16667 1.66667 5.64063 2.18229 5.5L4.25521 4.9375C4.58854 4.84896 4.84896 4.58854 4.9375 4.25521L5.5 2.18229C5.64063 1.66667 6.17188 1.35937 6.6875 1.49479L8.76562 2.04688C9.09896 2.13542 9.45312 2.03646 9.69792 1.79688L11.224 0.28125C11.599 -0.09375 12.2135 -0.09375 12.5938 0.28125Z"
                        fill="#0096FF"
                      />
                      <path
                        d="M9.63542 16.5365C9.40104 16.5365 9.16667 16.4479 8.98958 16.2656L6.09375 13.3698C5.73438 13.0104 5.73438 12.4323 6.09375 12.0729C6.44792 11.7188 7.03125 11.7188 7.38542 12.0729L9.63542 14.3229L16.4271 7.53125C16.7865 7.17708 17.3646 7.17708 17.724 7.53125C18.0833 7.89062 18.0833 8.46875 17.724 8.82812L10.2865 16.2656C10.1042 16.4479 9.86979 16.5365 9.63542 16.5365Z"
                        fill="white"
                      />
                    </svg>
                    <p className="text-[#FFDB15] lg:text-[1.09375em] md:text-[1.09375em] text-[3.3333333333em] lg:mt-[0.1322751323vw]">
                      Discount applied! You saved $50 on this course
                    </p>
                  </div>
                )}

                {status === "invalid" && (
                  <div className="flex items-center gap-2 lg:gap-[0.5952380952vw] lg:mb-0 mb-[0.5208333333vw] lg:mt-[0.1322751323vw]">
                    <svg
                      className="w-[4.1666666667em] lg:w-[1.0582010582vw] md:w-[1.25em]"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.8025 14.586L10.9786 0.846487C10.6753 0.322937 10.1175 0 9.51564 0C8.90891 0 8.35111 0.322937 8.04774 0.846487L0.223854 14.586C-0.074618 15.1095 -0.074618 15.7554 0.223854 16.279C0.52722 16.8074 1.08991 17.1304 1.69175 17.1304H17.3346C17.9414 17.1304 18.4992 16.8074 18.8025 16.279C19.1059 15.7554 19.1059 15.1095 18.8025 14.586Z"
                        fill="#FFDB15"
                      />
                      <path
                        d="M9.51532 12.3254C8.82052 12.3254 8.25293 12.8881 8.25293 13.5829C8.25293 14.2777 8.82052 14.8453 9.51532 14.8453C10.2052 14.8453 10.7728 14.2777 10.7728 13.5829C10.7728 12.8881 10.2052 12.3254 9.51532 12.3254ZM10.352 11.4838L10.7728 4.76086H8.25293L8.67373 11.4838H10.352Z"
                        fill="black"
                      />
                    </svg>
                    <p className="text-[#FFDB15] lg:text-[1.09375em] md:text-[1.09375em] text-[3.3333333333em]">
                      Coupon not found. Enter valid discount code.
                    </p>
                  </div>
                )}

                {status === "expired" && (
                  <div className="flex items-center gap-2 lg:gap-[0.5952380952vw] lg:mb-0 mb-[0.5208333333vw] lg:mt-[0.1322751323vw]">
                    <svg
                      className="w-[4.1666666667em] lg:w-[1.0582010582vw] md:w-[1.25em]"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.8025 14.586L10.9786 0.846487C10.6753 0.322937 10.1175 0 9.51564 0C8.90891 0 8.35111 0.322937 8.04774 0.846487L0.223854 14.586C-0.074618 15.1095 -0.074618 15.7554 0.223854 16.279C0.52722 16.8074 1.08991 17.1304 1.69175 17.1304H17.3346C17.9414 17.1304 18.4992 16.8074 18.8025 16.279C19.1059 15.7554 19.1059 15.1095 18.8025 14.586Z"
                        fill="#FFDB15"
                      />
                      <path
                        d="M9.51532 12.3254C8.82052 12.3254 8.25293 12.8881 8.25293 13.5829C8.25293 14.2777 8.82052 14.8453 9.51532 14.8453C10.2052 14.8453 10.7728 14.2777 10.7728 13.5829C10.7728 12.8881 10.2052 12.3254 9.51532 12.3254ZM10.352 11.4838L10.7728 4.76086H8.25293L8.67373 11.4838H10.352Z"
                        fill="black"
                      />
                    </svg>
                    <p className="text-[#FFDB15] lg:text-[1.09375em] md:text-[1.09375em] text-[3.3333333333em]">
                      Oops! The code seems to be expired.
                    </p>
                  </div>
                )}

                <hr className="border-[#838383] mb-[3.6458333333vw] mt-[1.8229166667vw] lg:mt-[0.7936507937vw] lg:mb-[1.455026455vw]" />

                <div className="flex justify-between text-white lg:mb-4 mb-[4.0506329114vw]">
                  <span className="lg:text-[1.5625em] md:text-[1.5625em] text-[4.7222222222em] font-semibold lg:tracking-[0.5px] tracking-[0.2px]">
                    Grand Total
                  </span>
                  <div className="flex items-center gap-3 lg:gap-[1.3227513228vw]">
                    {/* Show original price with strike when coupon applied */}
                    {status === "valid" && (
                      <span className="lg:text-[1.2566137566vw] md:text-[1.2em] text-[3.6458333333vw] text-[#98999F] line-through font-[600] lg:tracking-[0.5px]">
                        A${Math.floor(selectedCourse?.price || 0)}
                      </span>
                    )}

                    {/* Final discounted price */}
                    {/* <span className="lg:text-[1.5625vw] md:text-[1.5625em] text-[4.7222222222em] font-semibold lg:tracking-[0.5px]">
                      A${Math.floor(discountedPrice)}
                    </span> */}
                    <span
                      className={`lg:text-[1.5625vw] md:text-[1.5625em] text-[4.7222222222em] font-semibold lg:tracking-[0.5px] ${priceZoom ? "price-zoom" : ""}`}
                    >
                      A${Math.floor(discountedPrice)}
                    </span>
                  </div>
                </div>

                <div className="flex items-start lg:gap-[0.9259259259vw] gap-[3.6458333333vw] lg:text-[1.0416666667em] md:text-[1.0416666667em] text-[3.0729166667vw] text-[#98999F] relative w-[81.1111111111vw] lg:w-[30.1111111111vw] lg:mb-0 mb-[4.1304347826vw]">
                  <input
                    id="disclaimer-checkbox"
                    type="checkbox"
                    className="h-[4.1666666667vw] lg:h-[2.5132275132vw] lg:w-[2.5132275132vw] w-[4.1666666667vw] mt-[0.5208333333vw] lg:-mt-[0.4166666667vw]"
                    checked={isChecked}
                    onChange={(e) => {
                      setIsChecked(e.target.checked);
                      setShowError(false);
                    }}
                  />

                  <span className="lg:text-[1.0251322751vw]">
                    Disclaimer: All enrolments are final and non-transferable. Refunds are not provided for change of mind. Please be certain before enrolling.
                  </span>

                  {showError && (
                    <div className="absolute -bottom-4 left-33 -translate-x-1/2 sm:-bottom-[10px] sm:-left-20 sm:translate-x-0 bg-white border border-gray-300 shadow-md rounded-md px-3 py-2 lg:px-2 text-xs sm:text-sm text-gray-700 flex items-center gap-2 w-max max-w-[90vw] sm:max-w-none lg:text-[0.9259259259vw] text-[3.125vw]">
                      <span className="text-orange-500 font-bold">!</span>
                      Please tick the disclaimer checkbox to proceed.
                      <div className="absolute -top-1 lg:left-20 left-4 w-3 h-3 bg-white border-l border-t border-gray-300 rotate-45"></div>
                    </div>
                  )}
                </div>

                <div className="lg:mt-[0.5291005291vw] mt-auto flex items-center justify-center">
                  <button
                    onClick={handleBuyNow}
                    className={`lg:w-[22.4479166667vw] md:w-[20.4479166667em] w-[80.2083333333vw] bg-[#4BAF4F] text-white py-[4.5572916667vw] lg:py-[1.1243386243vw] lg:text-[1.3020833333vw] md:text-[1.3020833333vw] text-[4.4444444444em] rounded-lg font-medium mt-[0.5063291139vw] lg:mt-[1.0416666667vw] lg:mb-[1.0416666667vw] mb-[3.3854166667vw] cursor-pointer
  ${
    status === "valid"
      ? "shadow-[0_0_18px_0_rgba(178,255,0,0.40)] hover:shadow-[0_0_18px_0_rgba(178,255,0,0.60)]"
      : "hover:shadow-[0_0_18px_0_rgba(178,255,0,0.60)]"
  }`}
                  >
                    Buy Now – A${Math.floor(discountedPrice)}
                  </button>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <svg
                    width="9"
                    height="13"
                    viewBox="0 0 9 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.40667 1.39233C5.45451 1.39233 6.30617 2.244 6.30617 3.29184V5.19613H2.50716V3.29184C2.50716 2.244 3.35404 1.39233 4.40667 1.39233ZM7.68415 5.21049V3.27749C7.68415 1.46889 6.21527 0 4.40667 0C2.59328 0 1.12439 1.46889 1.12439 3.27749V5.21049C0.488035 5.29661 0 5.84206 0 6.50235V10.8468C0 11.5645 0.583728 12.1482 1.30143 12.1482H7.50712C8.2296 12.1482 8.81333 11.5645 8.81333 10.8468V6.50235C8.81333 5.84206 8.32051 5.29661 7.68415 5.21049Z"
                      fill="#009C3B"
                    />
                  </svg>

                  <p className="lg:text-[0.7291666667vw] md:text-[0.7291666667vw] text-[2.4739583333vw] text-white">
                    Secure payment • Instant access
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* course section End*/}

      {/*whatsapp div*/}
      <div className="w-full py-10 px-6 lg:flex justify-center items-center hidden">
        <div className="flex items-center gap-4 lg:gap-[1.0582010582vw] px-3 lg:px-0 lg:pl-[0.9259259259vw] lg:pr-[2.2486772487vw] py-2 lg:py-[0.5952380952vw] border-[0.1322751323vw] border-[#00BF63] rounded-xl">
          <div className=" rounded-full flex items-center justify-center">
            {/* <img
              src={WP}
              alt=""
              className="lg:w-[4.1666666667vw] lg:h-[4.1666666667vw] md:w-[3.3333333333em] md:h-[3.3333333333em] w-[9.7222222222em] h[9.7222222222em]"
            /> */}
            <svg
              className="lg:w-[3.5846560847vw] lg:h-[3.5846560847vw] md:w-[3.3333333333em] md:h-[3.3333333333em] w-[9.7222222222em] h[9.7222222222em] mt-[0.1984126984vw] mb-[0.2976190476vw] mx-[0.1984126984vw]"
              viewBox="0 0 1540 1555"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1035.61 1258.04C1011.58 1263.13 972.136 1265.05 956.601 1261.91C953.401 1261.27 942.928 1259.35 933.328 1257.6C816.906 1236.66 651.146 1126.87 513.837 979.724C474.71 937.775 462.608 923.724 440.703 894.837C314.71 728.495 266.303 563.637 312.121 456.786C321.139 435.724 346.594 400.059 366.521 380.51C400.208 347.462 429.154 339.55 459.961 354.91C470.87 360.321 487.539 375.361 520.441 409.339C571.757 462.371 597.91 495.477 614.812 528.844C624.877 548.684 626.419 554.27 626.419 571.026C626.419 593.048 622.841 601.164 592.994 647.041C572.339 678.779 566.114 693.091 563.554 714.91C558.666 756.48 594.797 818.531 666.914 892.481C722.855 949.819 763.263 977.979 798.986 984.524C832.703 990.691 857.43 985.019 890.07 963.666C902.666 955.433 920.819 944.961 930.419 940.422C963.903 924.539 1002.65 931.142 1039.1 959.011C1063.48 977.63 1118.55 1031.56 1147.55 1065.22C1175.95 1098.18 1187.87 1118.63 1187.87 1134.31C1187.87 1166.2 1136.73 1218.65 1081.11 1243.87C1070.75 1248.58 1050.27 1254.95 1035.61 1258.04ZM1205.59 836.917C1201.23 848.35 1188.57 853.993 1177.63 849.397C1172.86 847.39 1167.54 843.928 1165.76 841.659C1164.02 839.419 1159.74 819.171 1156.25 796.684C1149.36 752.059 1135.51 705.339 1118.38 668.888C1060.25 545.31 943.219 457.891 806.579 435.957C768.848 429.906 763.146 426.328 763.146 408.699C763.146 399.768 764.863 395.928 770.972 391.128C777.866 385.688 781.183 385.193 799.336 386.822C876.688 393.775 964.834 430.982 1032.24 485.121C1115.38 551.913 1173.27 648.03 1198.93 761.95C1206.49 795.521 1209.31 827.142 1205.59 836.917ZM1053.12 825.688C1035.87 842.939 1010.42 829.295 1010.42 802.793C1010.42 795.87 1007.13 778.91 1003.12 765.062C975.888 671.07 903.685 606.313 803.554 586.095C782.725 581.877 774.783 574.721 774.783 560.117C774.783 541.906 781.503 538.182 810.594 540.248C878.492 545.048 964.688 598.022 1007.34 661.237C1034.86 701.993 1054.9 755.491 1058.88 798.779C1060.57 816.902 1060.19 818.619 1053.12 825.688Z"
                fill="#20B267"
              />
              <path
                d="M253.795 1491.75C185.635 1526.37 127.773 1554.68 125.213 1554.68C122.653 1554.68 117.067 1551.65 112.791 1547.99C102.784 1539.37 102.755 1526.11 112.646 1497.22C116.631 1485.61 119.336 1476.13 118.638 1476.13C117.969 1476.13 119.831 1469.27 122.827 1460.86C125.795 1452.45 131.787 1433.8 136.151 1419.4C148.456 1378.88 156.369 1353.16 170.711 1307.4C171.671 1304.35 172.573 1301.44 173.446 1298.71C185.227 1261.18 187.991 1252.36 184.995 1246.46C183.86 1244.22 181.882 1242.39 179.235 1239.56C145.635 1203.58 85.4164 1104.52 60.4274 1044.13C47.9183 1013.85 26.9728 955.404 28.66 955.404C29.271 955.404 27.9037 949.993 25.5474 943.389C15.5401 914.968 3.93281 843.026 1.34372 793.077C-6.569 641.164 20.2237 517.673 88.1219 393.135C187.235 211.287 373.3 69.382 577.635 19.8402C640.296 4.65471 683.438 0.0292768 763.147 0.000185907C842.915 -0.028905 876.747 3.34565 939.147 17.5129C1134.46 61.9057 1310.14 184.349 1419.41 352.262C1439.22 382.691 1466.94 435.433 1478.78 465.222C1483.87 478.022 1490.36 494.371 1493.21 501.586C1498.42 514.764 1509.42 551.797 1517.97 584.96C1524.78 611.404 1533.27 666.589 1537.14 709.586C1544.12 786.997 1532.19 894.662 1507.47 977.222C1456.62 1147.14 1343.34 1300.33 1195.15 1399.56C1098.65 1464.17 1001.81 1500.65 878.057 1518.95C823.889 1526.98 705.576 1526.28 651.147 1517.61C571.613 1504.93 511.249 1485.53 434.973 1448.09C401.053 1431.45 383.453 1424.26 381.155 1426.09C379.235 1427.61 321.926 1457.13 253.795 1491.75ZM725.329 1480.2C764.282 1484.89 874.973 1474.62 936.238 1460.6C1137.95 1414.55 1315.79 1273.86 1413.3 1083.23C1468.46 975.36 1495.95 855.68 1492.43 738.677C1489.2 631.157 1466.68 545.077 1414.38 440.495C1368.38 348.48 1305.69 271.215 1224.33 206.342C1121.11 124.015 993.315 69.1493 863.511 51.4329C819.758 45.4693 712.849 44.7129 671.511 50.1238C535.22 67.8984 401.576 126.662 296.5 214.953C211.526 286.371 148.195 368.698 106.275 462.313C91.4965 495.302 74.4201 541.847 71.8892 556.044C71.1037 560.495 68.5728 570.677 66.3037 578.677C59.8746 601.077 50.3619 659.462 48.0928 690.444C45.1837 730.415 48.7038 821.004 54.551 855.04C60.7474 891.404 69.0964 926.72 78.5801 956.858C103.453 1035.93 149.94 1123.87 201.373 1189.18C229.126 1224.47 238.696 1235.61 239.133 1247.13C239.366 1252.95 237.271 1258.85 234.013 1267.99C233.518 1269.41 232.966 1270.95 232.413 1272.55C228.515 1283.72 225.867 1292.86 226.536 1292.86C227.206 1292.86 224.733 1301.7 221.067 1312.49C217.373 1323.29 211.584 1341.29 208.18 1352.49C204.747 1363.69 198.58 1384 194.449 1397.59C190.289 1411.17 183.802 1432.15 179.991 1444.13C172.224 1468.65 169.664 1479.04 171.438 1479.04C172.107 1479.04 219.758 1455.48 277.329 1426.68C342.987 1393.83 385.256 1374.31 390.726 1374.31C395.816 1374.31 407.54 1379.32 419.089 1386.41C448.82 1404.71 506.158 1431.04 544.355 1443.96C597.795 1462.02 633.635 1469.21 725.329 1480.2Z"
                fill="#44B56E"
              />
            </svg>
          </div>

          <div className="text-start">
            <p className="text-white lg:text-[1.1772486772vw] md:text-[1.1979166667em] text-[3.3333333333em] mb-[0.5291005291vw] lg:leading-[1.21] lg:mb-[0.4497354497vw] leading-[2.21] lg:tracking-[0.3px]">
              Confused? Talk to an expert
            </p>
            <div className="flex items-center gap-2">
              <svg
                className="lg:w-[1.1979166667em] md:w-[1.1979166667em] w-[3.3333333333em] h-[3.3333333333em] lg:h-[1.1979166667em] md:h-[1.1979166667em]"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.8557 16.8713L19.5812 14.5967C18.3222 13.3429 16.286 13.3429 15.027 14.5967C14.5607 15.0631 14.2705 15.6434 14.1514 16.2444C10.395 15.5397 6.74751 11.9077 6.51954 8.65391C7.1361 8.53992 7.72675 8.24977 8.20342 7.76792C9.45725 6.51407 9.45725 4.47268 8.20342 3.21882L5.92371 0.944274C4.66988 -0.314758 2.63368 -0.314758 1.37467 0.944274C-5.45408 7.76792 15.027 28.2544 21.8557 21.4256C23.1148 20.1665 23.1148 18.1303 21.8557 16.8713Z"
                  fill="#00BF63"
                />
              </svg>

              <p className="text-[#00C26E] leading-[1.21] lg:text-[1.1979166667em] md:text-[1.1979166667em] text-[3.3333333333em]">
                +61 426 7896 123 / +61 426 444 555
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted Section Start Here*/}

      <div className="w-full text-white py-[7.2916666667em] lg:px-6 mt-3 pt-[28.90625vw] lg:pt-[5.0925925926vw] lg:pb-[12.4338624339vw]">
        <div className=" mx-auto text-center">
          <h2 className="text-[6.1111111111em] md:text-[2.380952381vw] lg:text-[2.380952381vw] lg:font-[400] font-[500] lg:mb-[1.9841269841vw] mb-[1.0416666667vw] tracking-[0.2px] leading-[1.22727] lg:leading-normal">
            {trustedSection.heading}
          </h2>

          {/* Desktop */}
          <div className="hidden md:flex flex-col md:flex-row flex-wrap items-center justify-center gap-[3.1746031746vw] mb-[1.3227513228vw]">
            <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-[1.1458333333vw]">
              <div className="flex -space-x-3">
                {trustedSection.avatar_images.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    className="lg:w-[2.7083333333em] lg:h-[2.7083333333em] md:w-[2.7083333333em] md:h-[2.7083333333em] w-[9.4444444444em] h-[9.4444444444em] rounded-full lg:border-[0.1785714286vw] border-[0.625vw] border-white object-cover"
                    alt={`Avatar ${index + 1}`}
                  />
                ))}
              </div>

              <p className="text-[3.8888888889em] md:text-[1.1904761905vw] lg:text-[1.1904761905vw] font-[500] -tracking-[0.44px] text-[#737886] leading-[1.28571] lg:leading-normal text-left">
                {trustedSection.avatar_text}
              </p>
            </div>

            <div className="flex items-center gap-[1.1458333333vw]">
              <div className="flex text-[#FFDB15] text-[4.1666666667em] md:text-[1.5211640212vw] lg:text-[1.5211640212vw]">
                ★★★★★
              </div>

              <span className="text-[3.8888888889em] md:text-[1.1904761905vw] lg:text-[1.1904761905vw] font-[500] -tracking-[0.44px] text-[#737886]">
                {trustedSection.star_text}
              </span>
            </div>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden md:flex-row items-center md:items-start justify-center lg:gap-[9.1746031746vw] gap-[7.5520833333vw] p-4 lg:pl-0 pl-[10.15625vw] py-[4.1666666667vw] lg:py-0 mb-[3.90625vw]">
            <div className="flex flex-col items-center md:items-start gap-[2.6041666667vw] max-w-[37.7777777778vw]">
              <div className="flex -space-x-3 mb-4 mt-[3.3854166667vw]">
                {trustedSection.avatar_images.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    className="lg:w-[2.7083333333em] lg:h-[2.7083333333em] md:w-[2.7083333333em] md:h-[2.7083333333em] w-[9.4444444444em] h-[9.4444444444em] rounded-full lg:border-[0.1785714286vw] border-[0.625vw] border-white object-cover"
                    alt={`Avatar ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex lg:text-[#FFDB15] text-[#82ff59] text-[4.9479166667vw] md:text-[1.5211640212vw] lg:text-[1.5211640212vw]">
                ★★★★★
              </div>
            </div>

            <div className="flex flex-col md:items-start items-start gap-[3.6458333333vw] max-w-[37.7777777778vw] ">
              <p className="text-[3.8888888889em] md:text-[1.1904761905vw] lg:text-[1.1904761905vw] font-[500] -tracking-[0.44px] text-[#737886] leading-[1.28571] lg:leading-normal text-left mt-[3.38542vw]">
                {trustedSection.avatar_text}
              </p>

              <span className="text-[3.8888888889em] md:text-[1.1904761905vw] lg:text-[1.1904761905vw] font-[500] -tracking-[0.44px] text-[#737886] text-left mt-[3.38542vw]">
                {trustedSection.star_text}
              </span>
            </div>
          </div>

          <div className="relative flex justify-center  overflow-hidden">
            <div className="w-full flex items-center justify-center">
              <img
                src={Frame}
                alt=""
                className="w-[125%] md:w-full max-w-none object-contain mix-blend-screen lg:my-2 lg:mb-0 mb-[7.03125vw]"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, transparent 0%, black 44%, black 80%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, transparent 0%, black 44%, black 80%, transparent 100%)",
                }}
              />
            </div>
          </div>

          <p className="text-[5.5555555556em] md:text-[1.9791666667em] lg:text-[2.0502645503vw] tracking-[0.6px] lg:mb-3 leading-[1.30] lg:leading-normal lg:w-full w-[97.9166666667vw] mb-[2.8645833333vw]">
            <span className="text-[#757575]">“</span>{" "}
            {trustedSection.bottom_heading}{" "}
            <span className="text-[#757575]">”</span>
          </p>

          <p className="text-[4.1666666667em] md:text-[1.3541666667em] lg:text-[1.3541666667em] text-[#737886] font-[500] lg:font-normal">
            {trustedSection.bottom_text}
          </p>
        </div>
      </div>

      {/* Trusted Section end Here*/}

      {/* Faqs Section Start here*/}

      <div className=" relative z-10 sm:mb-[0] mb-[-13.8888888889vw]">
        <div className="custom-container mx-auto md:py-[6.6137566138em] sm:py-[4.6296296296em] py-[40px] px-4 sm:px-[2.1164021164em] w-full z-10 relative pt-[20.5729166667vw] pb-[18.4895833333vw] lg:pt-0 lg:pb-[5.6216931217vw]">
          {/* <h2 className="font-inter font-normal md:text-[4.0211640212em] sm:text-[6.258148631em] text-[11em] leading-[1.11] 2xl:mt-[0.1315789474em] xs:mt-0 mt-[3.125vw] text-white text-center sm:mb-[0.6578947368em] mb-[7.8125vw] xs:tracking-normal tracking-[2.2px]"> */}
          <h2 className="font-inter font-[500] lg:font-[400] md:text-[3.0423280423vw] sm:text-[6.258148631em] text-[8.59375vw] leading-[1.2258] lg:mt-[0.1315789474em] xs:mt-0 mt-[3.125vw] text-[#FBFFDB] text-center sm:mb-[0.6578947368em] mb-[10.4166666667vw] md:mb-[3.3068783069vw] xs:tracking-normal tracking-[0.5px]">
            Frequenty Asked Questions
          </h2>
          <div className="md:max-w-[59.2592592593em] mx-auto sm:p-[1.5873015873em]">
            {dynamicFaqs.map((faq, index) => (
              <div
                key={index}
                className={`py-[4.6875vw] xs:py-[1.0582010582em] ${
                  index !== dynamicFaqs.length - 1
                    ? "border-b border-[#9D9B9B]"
                    : ""
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full text-left gap-[1.0582010582em]"
                >
                  <span className="md:text-[1.3888888889vw] sm:text-[2.6041666667em] xs:text-[2.8125em] text-[4.4444444em] xs:font-bold md:font-[550] sm:leading-[1.273] leading-[1.55555555] text-white w-[calc(100%-28px)] sm:w-[calc(100%-35px)]">
                    {faq.question}
                  </span>
                  <span className="w-[28px] sm:w-[2.3148148148em] basis-[28px] sm:basis-[2.3148148148em] flex items-center justify-center">
                    {openIndex === index ? <MinusIcon /> : <PlusIcon />}
                  </span>
                </button>

                {openIndex === index && faq.answer && (
                  <div className="xs:mt-[0.8888888889em] mt-[4.6875vw] xs:mb-0 mb-[1.5625vw] md:text-[1.1574074074vw] md:mb-[0.6613756614vw] sm:text-[2.0833333333em] xs:text-[2.1875em] text-[3.8888888889em] leading-[1.556] font-medium  text-white/50 lg:max-w-[50.5952380952vw]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*Faqs section end Here*/}
    </>
  );
}

export default Transparent_Pricing;
