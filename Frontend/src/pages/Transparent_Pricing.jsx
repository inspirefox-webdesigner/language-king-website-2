import React, { useState, useEffect } from "react";
import Avatar4 from "../assets/avatar7.png";
import Avatar2 from "../assets/avatar8.png";
import Avatar9 from "../assets/avatar9.png";
import Avatar10 from "../assets/avatar10.png";
import Avatar11 from "../assets/avatar11.png";
import Frame from "../assets/trusted bg 2.png";
import WP from "../assets/iconswp.svg";
import API_BASE_URL from "../config/api";
import { FILE_BASE_URL } from "../config/api";

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
  const [discountApplied, setDiscountApplied] = useState(false);
  const [invalidCoupon, setInvalidCoupon] = useState(false);
  const [coupon, setCoupon] = useState("");

  const [isChecked, setIsChecked] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleBuyNow = () => {
    if (!isChecked) {
      setShowError(true);
      return;
    }
    setShowError(false);
    console.log("Proceed to payment");
  };

  const discountedPrice =
    discountApplied && coupon === "Dis150Ja2602" && selectedCourse
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
     <span style="color:#838383; font-size:13px; font-weight:300;">( 5 Full + 20 Sectional Test can be taken once )</span>`,
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
        'For all the other class related queries please check our <a href="/faq" class="text-[#FFDB15] underline">FAQ Section</a>.',
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
        'For all the other class related queries please check our <a href="/faq" class="text-[#FFFFFF] underline">FAQ Section</a>.',
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
        'For all the other class related queries please check our <a href="" class="text-white underline">FAQ Section</a>.',
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
        'For all the other class related queries please check our <a href="" class="text-white underline">FAQ Section</a>.',
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
        'For all the other class related queries please check our <a href="" class="text-white underline">FAQ Section</a>.',
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
        'For all the other class related queries please check our <a href="" class="text-white underline">FAQ Section</a>.',
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
        'For all the other class related queries please check our <a href="" class="text-white underline">FAQ Section</a>.',
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
        'For all the other class related queries please check our <a href="" class="text-white underline">FAQ Section</a>.',
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
        'For all the other class related queries please check our <a href="" class="text-white underline">FAQ Section</a>.',
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
        'For all the other class related queries please check our <a href="" class="text-white underline">FAQ Section</a>.',
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
        'For all the other class related queries please check our <a href="" class="text-white underline">FAQ Section</a>.',
    },
    /* COMBO POPUP END HERE*/
  };

  const currentCourseDetail = selectedCourse1
    ? courseDetails[selectedCourse1] ||
      STATIC_COURSE_DETAILS[selectedCourse1] ||
      {}
    : {};

  return (
    <div className="relative h-full bg-[rgb(17,17,17)]">
      <section className="flex items-center justify-center px-4 pt-[22.9166666667vw] lg:pt-[5.78125vw]">
        <div className="text-center w-full lg:max-w-[41.5104166667vw] max-w-[90vw]">
          <h1 className="text-[#FFFFFF] font-medium lg:text-[3.0208333333vw] md:text-[2.9166666667em] text-[8.8888888889em] mb-[0.4625em] tracking-[1.1px] leading-[1.1724] hidden sm:block">
            Simple, Transparent Pricing
          </h1>

          {/*Mobile Text*/}
          <h1 className="text-[#FFFFFF] block sm:hidden text-[8.8888888889em] mb-[0.4625em] tracking-[1.1px] leading-[1.21875] font-[600]">
            Simple,
            <br />
            Transparent Pricing
          </h1>

          {/* Desktop / Tablet text */}
          <p className="hidden sm:block text-[#FFFFFF] lg:text-[1.3802083333vw] md:text-[1.3541666667vw] text-[3.8888888889vw] mb-[1.5625em] tracking-[0.2px] leading-[1.4615]">
            Choose the perfect plan to achieve your target score
            <br />
            See details for course information
          </p>

          {/* Mobile text */}
          <p className="block sm:hidden text-[#FFFFFF] text-[3.9583333333vw] mb-[7.8125vw] font-[350] leading-[1.28571]">
            Choose the right plan for your target score.
            <br />
            See course details.
          </p>

          <div className="relative mx-auto">
            <div className="flex justify-center gap-[1.5625vw] lg:gap-[1.8229166667vw] bg-[#212121] rounded-[2.0333333333vw] lg:rounded-[0.6613756614vw] p-[0.9114583333vw] lg:p-[0.2314814815vw] w-[100%] lg:max-w-[36.0416666667vw] md:max-w-[34.0416666667em] mx-auto">
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
              className={`absolute inset-y-2 left-[33.3333%] w-[3px] bg-white/20 rounded transition-opacity duration-300 ${
                activeTab === tabs[2] ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* Right divider (between tab2 & tab3) → only when 1st selected */}
            <div
              className={`absolute inset-y-2 left-[66.6667%] w-[3px] bg-white/20 rounded transition-opacity duration-300 ${
                activeTab === tabs[0] ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
      </section>

      {/* course section start*/}

      <section className="w-full lg:px-4 py-[5.78125vw]">
        <div className="mx-auto lg:max-w-[81.6137566138vw] max-w-[95em]">
          <h2 className="text-[#EDE4CD] text-[5.5555555556em] lg:text-[1.917989418vw] md:text-[1.875em] mb-4 lg:ml-[3.3068783069vw] md:ml-12 font-[500] lg:tracking-[0.65px] lg:mb-[1.5873015873vw]">
            Select a course:
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-12 gap-8 lg:gap-[7.3412698413vw] items-stretch">
            <div className="lg:col-span-6 md:col-span-6">
              <div
                className="rounded-[1.0416666667vw]  lg:h-[36.9375em] md:h-[40.9895833333em] h-[107.7777777778em] overflow-y-scroll space-y-4 [&::-webkit-scrollbar]:w-[2px]
[&::-webkit-scrollbar-track]:bg-[#929292]
[&::-webkit-scrollbar-thumb]:bg-[#FFFFFF]
[&::-webkit-scrollbar-thumb]:rounded-full [scrollbar-width:thin]
  [scrollbar-color:#FFFFFF_#929292]"
              >
                {(coursesByTab[activeTab] || []).map((course) => (
                  <div
                    key={course.id}
                    onClick={() => {
                      setSelectedCourse(course);
                      setDiscountApplied(false);
                      setCoupon("");
                    }}
                    className={`lg:w-[30.625em] md:w-[30.625em] w-[91.9444444444em] mx-auto cursor-pointer rounded-[1.0416666667vw] pt-[3.6458333333vw] pr-[4.6875vw] pl-[3.6458333333vw] pb-[4.9479166667vw] lg:pr-[1.455026455vw] lg:pl-[1.1243386243vw] lg:pt-[1.3227513228vw] lg:pb-[1.455026455vw] lg:border-[0.1666666667vw] border-[0.5555555556vw] transition-all lg:[margin-block-end:1.2566137566vw] [margin-block-end:5vw]


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

                    <div className="flex items-center justify-between mb-[3.6458333333vw] lg:mb-4">
                      <p className="text-white lg:text-[1.6666666667em] md:text-[1.6666666667em] text-[5.5555555556em] font-[550] lg:leading-[1]">
                        ${Math.floor(course.price)}
                      </p>

                      {course.badge && (
                        <div className="bg-[#FFFFFF] text-black lg:text-[0.8854166667em] md:text-[0.8854166667em] text-[3.0555555556em] lg:px-[0.8928571429vw] lg:py-[0.376984127vw] px-[2.8645833333vw] py-[1.25vw] rounded-full tracking-[0.2em]">
                          {course.badge}
                        </div>
                      )}
                    </div>

                    <ul className="space-y-5">
                      {course.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-5 text-white lg:text-[1.09375em] md:text-[1.09375em] text-[3.3333333333em]"
                        >
                          <svg
                            className="flex-shrink-0 lg:w-[1.25vw] lg:h-[1.25vw] md:w-[1.09375em] md:h-[1.09375em] w-[3.7239583333vw] h-[3.7239583333vw] mt-1"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7.87967 20.8238L0 12.9385L1.70341 11.2351L7.87967 17.417L22.2966 3.00006L24 4.70347L7.87967 20.8238Z"
                              fill="#EF94CA"
                            />
                          </svg>

                          <span className="leading-[1.45] lg:leading-relaxed opacity-[0.75] text-[3.4vw] lg:text-[1.09375em] font-[350] [margin-block-end:3.90625vw] md:[margin-block-end:0] lg:[margin-block-end:0]">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {selectedCourse1 && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.65)] backdrop-blur-[12.5px]">
                <div className="w-[90%] max-w-[90.5555555556em] lg:max-w-[26.1458333333em] md:max-w-[26.1458333333em] bg-[#16181D] rounded-2xl relative flex flex-col lg:h-[32.6041666667em] md:h-[32.6041666667em] h-[117.5em] py-5">
                  <div className="px-4 border-white/10">
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

                      <h3 className="text-[#9C9B99] lg:text-[1.3756613757vw] md:text-[1.3541666667em] text-[5em] mb-2 lg:tracking-[0.2px] lg:leading-[1.1923] lg:mb-[0.9920634921vw]">
                        Additional Information
                      </h3>
                    </div>

                    <h2 className="text-[#FBFFDB] lg:text-[1.1574074074vw] md:text-[1.1458333333em] text-[4.4444444444em] leading-normal lg:leading-[1.22] lg:mb-[1.1243386243vw] font-[500] pricepop-heading lg:tracking-[0.1px]">
                      {currentCourseDetail.heading || selectedCourse1}
                    </h2>
                  </div>

                  <div
                    className="flex-1 overflow-y-scroll [&::-webkit-scrollbar]:w-[2px]
[&::-webkit-scrollbar-track]:bg-[#929292]
[&::-webkit-scrollbar-thumb]:bg-[#FFFFFF]
[&::-webkit-scrollbar-thumb]:rounded-full p-5 lg:p-[16px] mr-2 [scrollbar-width:thin]
  [scrollbar-color:#FFFFFF_#929292]"
                  >
                    <p className="text-white lg:text-[1.1458333333em] md:text-[1.1458333333em] text-[4.4444444444em] mb-4">
                      What’s Included:
                    </p>

                    <ul className="space-y-[0.6613756614vw] text-[#838383] lg:text-[1.1044973545vw] md:text-[1.09375em] text-[3.8888888889em] mb-4 list-disc pl-5 ">
                      {(currentCourseDetail.content || []).map((item, i) => (
                        <li
                          key={i}
                          className="leading-relaxed lg:leading-[1.30] lg:[margin-block-end: 0.6613756614vw] font-[385]"
                          dangerouslySetInnerHTML={{ __html: item }}
                        />
                      ))}
                    </ul>

                    <p className="text-white lg:text-[1.1458333333em] md:text-[1.1458333333em] text-[4.4444444444em] mb-1">
                      Validity
                    </p>
                    <ul className="list-disc pl-5 text-[#838383] lg:text-[1.09375em] md:text-[1.09375em] text-[3.8888888889em] mb-4">
                      <li>{currentCourseDetail.validity}</li>
                    </ul>

                    <p className="text-white lg:text-[1.1458333333em] md:text-[1.1458333333em] text-[4.4444444444em] mb-1">
                      Who this course for?
                    </p>
                    <ul className="list-disc pl-5 text-[#838383] lg:text-[1.09375em] md:text-[1.09375em] text-[3.8888888889em] mb-4">
                      <li>{currentCourseDetail.whothis}</li>
                    </ul>

                    <p className="text-white lg:text-[1.1458333333em] md:text-[1.1458333333em] text-[4.4444444444em] mb-1">
                      How Will i Access This Course?
                    </p>
                    <ul className="list-disc pl-5 text-[#838383] lg:text-[1.09375em] md:text-[1.09375em] text-[3.8888888889em] mb-4">
                      <li
                        dangerouslySetInnerHTML={{
                          __html: currentCourseDetail.howwill || "",
                        }}
                      />
                    </ul>

                    <p className="text-white lg:text-[1.1458333333em] md:text-[1.1458333333em] text-[4.4444444444em] mb-1">
                      Number of devices?
                    </p>
                    <ul className="list-disc pl-5 text-[#838383] lg:text-[1.09375em] md:text-[1.09375em] text-[3.8888888889em] mb-4 space-y-2">
                      {(currentCourseDetail.numberof || []).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>

                    <p className="text-white lg:text-[1.1458333333em] md:text-[1.1458333333em] text-[4.4444444444em] mb-1">
                      Class Timing and Live Classes?
                    </p>
                    <ul className="list-disc pl-5 text-[#838383] lg:text-[1.09375em] md:text-[1.09375em] text-[3.8888888889em] mb-4 space-y-2">
                      {(currentCourseDetail.class || []).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>

                    <p className="text-white lg:text-[1.1458333333em] md:text-[1.1458333333em] text-[4.4444444444em] mb-1">
                      Is Exam fee coverd?
                    </p>
                    <ul className="list-disc pl-5 text-[#838383] lg:text-[1.09375em] md:text-[1.09375em] text-[3.8888888889em] mb-4">
                      <li>{currentCourseDetail.examfee}</li>
                    </ul>

                    <p
                      className="text-[#FFDB15] lg:text-[1.09375em] md:text-[1.09375em] text-[3.8888888889em] mb-4"
                      dangerouslySetInnerHTML={{
                        __html: currentCourseDetail.contact || "",
                      }}
                    />
                    <p
                      className="text-white lg:text-[1.09375em] md:text-[1.09375em] text-[3.8888888889em]"
                      dangerouslySetInnerHTML={{
                        __html: currentCourseDetail.footer || "",
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="lg:col-span-6 md:col-span-6 flex justify-center items-center">
              <div className="bg-[#212121] rounded-xl lg:rounded-[0.6613756614vw] p-5 lg:px-[2.0502645503vw] lg:w-[35.3125em] md:w-[35.3125em] w-[94.4444444444em] lg:h-[36.9375em] md:h-[40.9895833333em] h-[119.4444444444em] flex flex-col">
                <div className="flex items-center gap-3">
                  <svg
                    className="mb-4 lg:h-[1.48125em] lg:w-[1.48125em] w-[3.8888888889em] h-[3.8888888889em]"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.58313 12.4717C3.7401 12.4717 3.06267 13.1697 3.06267 14.03C3.06267 14.8919 3.7401 15.59 4.58313 15.59C5.42783 15.59 6.11028 14.8919 6.11028 14.03C6.11028 13.1697 5.42783 12.4717 4.58313 12.4717ZM0 0V1.56002H1.52882L4.27368 7.47071L3.24331 9.38063C3.12456 9.60763 3.05597 9.86024 3.05597 10.1333C3.05597 10.9953 3.7401 11.6916 4.58313 11.6916H13.7494V10.1333H4.90762C4.80057 10.1333 4.71694 10.048 4.71694 9.93875C4.71694 9.90291 4.7253 9.87219 4.74036 9.84488L5.42281 8.57501H11.1149C11.687 8.57501 12.1871 8.25072 12.4514 7.77111L15.1812 2.71212C15.2431 2.60459 15.2765 2.47487 15.2765 2.33833C15.2765 1.90651 14.9336 1.56002 14.5138 1.56002H3.2199L2.49396 0H0ZM12.2222 12.4717C11.3775 12.4717 10.7018 13.1697 10.7018 14.03C10.7018 14.8919 11.3775 15.59 12.2222 15.59C13.0653 15.59 13.7494 14.8919 13.7494 14.03C13.7494 13.1697 13.0653 12.4717 12.2222 12.4717Z"
                      fill="white"
                    />
                  </svg>

                  <h2 className="text-white lg:text-[1.3888888889vw] lg:leading-[1.23] lg:tracking-[0.2px] md:text-[1.3541666667vw] text-[3.8888888889em] mb-4 font-medium ">
                    Order Summary
                  </h2>
                </div>

                <hr className="border-[#838383] mb-4 lg:mb-[1.3227513228vw]" />

                <div className="flex justify-between items-center mb-4">
                  <div className="bg-black lg:px-[0.625vw] lg:py-[0.4166666667vw] px-[1.8229166667vw] py-[1.5625vw] rounded-[2.0833333333vw] lg:rounded-[0.625vw]">
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

                <div className="flex gap-3 mb-3 lg:mb-0">
                  <input
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    className="flex-1 border border-[#838383] rounded-md lg:px-[0.9259259259vw] lg:py-3 px-2 py-2 text-white lg:text-[1.1458333333em] md:text-[1.1458333333em] text-[4.1666666667em] outline-none w-[53.0555555556em] lg:w-[20em]"
                    placeholder="Enter Coupon Code"
                  />
                  <button
                    onClick={() => {
                      if (coupon === "Dis150Ja2602") {
                        setDiscountApplied(true);
                      } else if (coupon.trim()) {
                        setDiscountApplied(false);
                        setInvalidCoupon(true);
                      }
                    }}
                    className="px-4 bg-[#484B54] text-white rounded-[0.5208333333vw] lg:text-[1.1458333333em] md:text-[1.1458333333em] text-[3.3333333333em]"
                  >
                    Apply Code
                  </button>
                </div>

                {discountApplied && (
                  <div className="flex items-center gap-2 mt-2">
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

                    <p className="text-[#FFDB15] lg:text-[1.09375em] md:text-[1.09375em] text-[3.3333333333em]">
                      Discount applied! You saved $50 on this course
                    </p>
                  </div>
                )}

                {invalidCoupon && (
                  <div className="flex items-center gap-2 mt-2">
                    <svg
                      className="w-[4.1666666667em] lg:w-[1.25em] md:w-[1.25em]"
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

                <hr className="border-[#838383] mb-[1.455026455vw] mt-[1.1979166667vw]" />

                <div className="flex justify-between text-white mb-4">
                  <span className="lg:text-[1.5625em] md:text-[1.5625em] text-[4.7222222222em] font-semibold lg:tracking-[0.5px]">
                    Grand Total
                  </span>
                  <div className="flex items-center gap-3">
                    {/* Show original price with strike when coupon applied */}
                    {discountApplied && (
                      <span className="lg:text-[1.2em] md:text-[1.2em] text-[3.8em] text-[#98999F] line-through">
                        A${Math.floor(selectedCourse?.price || 0)}
                      </span>
                    )}

                    {/* Final discounted price */}
                    <span className="lg:text-[1.25em] md:text-[1.5625em] text-[4.7222222222em] font-semibold">
                      A${Math.floor(discountedPrice)}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2 lg:text-[1.0416666667em] md:text-[1.0416666667em] text-[3.0555555556em] text-[#98999F] relative">
                  <input
                    type="checkbox"
                    className="h-[18px] w-[18px]"
                    checked={isChecked}
                    onChange={(e) => {
                      setIsChecked(e.target.checked);
                      setShowError(false);
                    }}
                  />

                  <span className="lg:text-[1.0251322751vw]">
                    Disclaimer: There will be no refund for this course, as all
                    our products are online. Please make up your mind before
                    joining this course.
                  </span>

                  {showError && (
                    <div className="absolute -bottom-[10px] -left-20 bg-white border border-gray-300 shadow-md rounded-md px-4 py-2 text-sm text-gray-700 flex items-center gap-2">
                      <span className="text-orange-500 font-bold">!</span>
                      Please tick this box if you want to proceed.
                    </div>
                  )}
                </div>

                <div className="lg:mt-[0.5291005291vw] mt-auto flex items-center justify-center">
                  <button
                    onClick={handleBuyNow}
                    className="lg:w-[22.4479166667vw] md:w-[20.4479166667em] w-[70.2222222222em] bg-[#4BAF4F] text-white py-[3.2566137566vw] lg:py-[1.1243386243vw] lg:text-[1.3020833333vw] md:text-[1.3020833333vw] text-[4.4444444444em] rounded-lg font-medium mt-[1.0416666667vw] mb-[1.0416666667vw]"
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

                  <p className="lg:text-[0.7291666667vw] md:text-[0.7291666667vw] text-[2.7777777778em] text-white">
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
      <div className="w-full py-10 px-6 flex justify-center items-center">
        <div className="flex items-center gap-4 px-3 lg:pl-[1.0582010582vw] lg:pr-[2.2486772487vw] py-2 border-[0.1322751323vw] border-[#00BF63] rounded-xl">
          <div className=" rounded-full flex items-center justify-center">
            <img
              src={WP}
              alt=""
              className="lg:w-[4.3650793651vw] lg:h-[4.3650793651vw] md:w-[3.3333333333em] md:h-[3.3333333333em] w-[9.7222222222em] h[9.7222222222em]"
            />
          </div>

          <div className="text-start">
            <p className="text-white lg:text-[1.1979166667em] md:text-[1.1979166667em] text-[3.3333333333em] mb-[0.5291005291vw] lg:leading-[1.21] lg:mb-[0.5291005291vw] leading-[2.21]">
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

      <div className="w-full text-white py-[7.2916666667em] px-6 mt-3">
        <div className=" mx-auto text-center">
          <h2 className="text-[6.1111111111em] md:text-[2.380952381vw] lg:text-[2.380952381vw] font-[400] mb-[1.9841269841vw] tracking-[0.2px]">
            {trustedSection.heading}
          </h2>

          <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-[3.1746031746vw] mb-10">
            <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-[1.1458333333vw]">
              <div className="flex -space-x-3">
                {trustedSection.avatar_images.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    className="lg:w-[2.7083333333em] lg:h-[2.7083333333em] md:w-[2.7083333333em] md:h-[2.7083333333em] w-[9.4444444444em] h-[9.4444444444em] rounded-full border-[0.1785714286vw] border-white object-cover"
                    alt={`Avatar ${index + 1}`}
                  />
                ))}
              </div>

              <p className="text-[3.8888888889em] md:text-[1.1904761905vw] lg:text-[1.1904761905vw] font-[500] -tracking-[0.44px] text-[#737886]">
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

          <div className="relative flex justify-center my-2">
            {/* <div className="w-full max-w-4xl h-32 rounded-full bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-70 blur-sm" /> */}
            {/* <div className="absolute inset-0 flex items-center justify-center"></div> */}
            <div className="w-full flex items-center justify-center">
              <img src={Frame} alt="" />
            </div>
          </div>

          <p className="text-[5.5555555556em] md:text-[1.9791666667em] lg:text-[2.0502645503vw] tracking-[0.6px] mb-3">
            <span className="text-[#757575]">"</span>{" "}
            {trustedSection.bottom_heading}{" "}
            <span className="text-[#757575]">"</span>
          </p>

          <p className="text-[4.1666666667em] md:text-[1.3541666667em] lg:text-[1.3541666667em] text-[#737886]">
            {trustedSection.bottom_text}
          </p>
        </div>
      </div>

      {/* Trusted Section end Here*/}

      {/* Faqs Section Start here*/}

      <div className=" relative z-10 sm:mb-[0] mb-[-13.8888888889vw]">
        <div className="custom-container mx-auto md:py-[6.6137566138em] sm:py-[4.6296296296em] py-[40px] px-4 sm:px-[2.1164021164em] w-full z-10 relative">
          {/* <h2 className="font-inter font-normal md:text-[4.0211640212em] sm:text-[6.258148631em] text-[11em] leading-[1.11] 2xl:mt-[0.1315789474em] xs:mt-0 mt-[3.125vw] text-white text-center sm:mb-[0.6578947368em] mb-[7.8125vw] xs:tracking-normal tracking-[2.2px]"> */}
          <h2 className="font-inter font-normal md:text-[3.0423280423vw] sm:text-[6.258148631em] text-[11em] leading-[1.11] lg:mt-[0.1315789474em] xs:mt-0 mt-[3.125vw] text-[#FBFFDB] text-center sm:mb-[0.6578947368em] mb-[7.8125vw] md:mb-[3.3068783069vw] xs:tracking-normal tracking-[2.2px]">
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
                  <div className="xs:mt-[0.8888888889em] mt-[4.6875vw] xs:mb-0 mb-[1.5625vw] md:text-[1.1904761905em] md:mb-[0.6613756614vw] sm:text-[2.0833333333em] xs:text-[2.1875em] text-[3.8888888889em] leading-[1.556] font-medium  text-white/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*Faqs section end Here*/}
    </div>
  );
}

export default Transparent_Pricing;
