// import React, { useState } from "react";
// import PhoneInput from "./PhoneInput";
// import CustomDropdown from "./custom-dropdown";
// import ContactThankyou from "./Contact-thankyou";
// import { Link } from "react-router-dom";
// import API_BASE_URL from "../config/api";
 
// const GetInTouch = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     course: "default",
//   });
 
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});
 
//   const validateField = (name, value) => {
//     let error = "";
 
//     if (name === "name" && !value.trim()) {
//       error = "Full name is required";
//     } else if (name === "phone") {
//       if (!value.trim()) {
//         error = "Phone number is required";
//       } else {
//         // Remove all non-digits and check if it has at least 10 digits
//         const digitsOnly = value.replace(/\D/g, "");
//         if (digitsOnly.length < 10) {
//           error = "Enter a valid phone number";
//         }
//       }
//     } else if (name === "course" && value === "default") {
//       error = "Please select a course";
//     }
 
//     return error;
//   };
 
//   const validate = () => {
//     const newErrors = {};
 
//     Object.keys(formData).forEach((key) => {
//       const error = validateField(key, formData[key]);
//       if (error) newErrors[key] = error;
//     });
 
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };
 
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: "" }));
//     }
//   };
 
//   const handleBlur = (e) => {
//     const { name, value } = e.target;
//     setTouched((prev) => ({ ...prev, [name]: true }));
 
//     const error = validateField(name, value);
//     setErrors((prev) => ({ ...prev, [name]: error }));
//   };
 
//   const handleDropdownBlur = () => {
//     setTouched((prev) => ({ ...prev, course: true }));
 
//     const error = validateField("course", formData.course);
//     setErrors((prev) => ({ ...prev, course: error }));
//   };
 
//   const handleSubmit = async (e) => {
//     e.preventDefault();
   
//     if (!validate()) {
//       return;
//     }
 
//     const submitData = {
//       name: formData.name,
//       phone: formData.phone,
//       course: formData.course,
//       form_source: "Contact Form"
//     };
 
//     try {
//       // Store in database
//       const dbRes = await fetch(`${API_BASE_URL}/forms/contact`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(submitData),
//       });
     
//       if (!dbRes.ok) {
//         throw new Error(`Database request failed: ${dbRes.status}`);
//       }

//       const dbResult = await dbRes.json();
     
//       if (dbResult.success) {
//         // Send email after successful database save
//         try {
//           const emailRes = await fetch(`${API_BASE_URL.replace('/api','')}/send-email`, {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(submitData),
//           });
          
//           if (emailRes.ok) {
//             const emailResult = await emailRes.json();
//             console.log("Email sent:", emailResult);
//           }
//         } catch (emailError) {
//           console.error("Email failed but form saved:", emailError);
//         }
        
//         console.log("Form submitted successfully", dbResult);
//         setIsSubmitted(true);
//       } else {
//         console.error("Form submission failed", dbResult);
//         alert("Form submission failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Network error. Please check your connection and try again.");
//     }
//   };
 
//   return (
//     <>
//       {!isSubmitted ? (
//         <div className="bg-white xs:rounded-[9px] rounded-[4px] md:pt-[2.084em] md:px-[2.292em] md:pb-[2.292em] px-[15px] pt-[5.5555555556vw] pb-[6.6666666667vw]">
//           <p
//             className="font-normal sm:leading-[1.2] leading-[1.42] tracking-[0.011em] text-black lg:text-[1.1903em] md:text-[2.0860495437em] sm:text-[2.5em] text-[3.8888888889em]"
//             style={{ textShadow: "rgba(0, 0, 0, 0.3) 0.485px 0.485px 0px" }}
//           >
//             Please fill out the below form. Our team will be in touch with you shortly.
//           </p>
//           <form onSubmit={handleSubmit} className="sm:pt-[2.116em] pt-[6.9444444444vw]">
//             {/* Full Name */}
//             <div className="flex flex-col lg:mb-[1.323em] md:mb-[1.5625em] sm:mb-[2.0860495437em] xs:mb-[2.5em] mb-[4.6875vw]">
//               <label
//                 htmlFor="name"
//                 className="text-black font-bold md:text-[0.926em] text-sm mb-[0.529em]"
//               >
//                 Full Name*
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your first & last name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//                 className={`border-1 xs:rounded-md rounded-[3px] bg-white xs:py-[0.6666666667em] py-[4.4444444444vw] xs:px-[1em] px-[4.4444444444vw] md:text-[1.1904761905em] xs:text-[3.3333333333em] text-[4.16667em] leading-[1.556] ${
//                   errors.name ? "border-red-500" : "border-[#949AA5]"
//                 }`}
//               />
//               {errors.name && (
//                 <span className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="25"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     aria-hidden="true"
//                     role="img"
//                   >
//                     <path
//                       fill="currentColor"
//                       d="m21.809 19.417-8.33-15.342a1.64 1.64 0 0 0-.614-.631 1.7 1.7 0 0 0-1.722 0c-.26.152-.472.37-.614.63L2.2 19.418a1.58 1.58 0 0 0 .05 1.614c.152.233.362.424.612.555.249.132.529.2.813.196h16.66c.287 0 .57-.072.819-.208.25-.137.459-.334.607-.572a1.58 1.58 0 0 0 .049-1.585M11.17 9.67c0-.215.088-.42.244-.571a.85.85 0 0 1 .589-.237c.22 0 .433.085.59.237a.8.8 0 0 1 .243.57v4.845c0 .214-.088.42-.244.571a.85.85 0 0 1-.589.237.85.85 0 0 1-.589-.237.8.8 0 0 1-.244-.57zm.875 9.285a1.3 1.3 0 0 1-.879-.347 1.22 1.22 0 0 1-.388-.84 1.16 1.16 0 0 1 .344-.868q.173-.174.402-.27a1.26 1.26 0 0 1 1.358.25c.236.221.374.522.387.84a1.16 1.16 0 0 1-.343.868 1.24 1.24 0 0 1-.881.367"
//                     ></path>
//                   </svg>
//                   {errors.name}
//                 </span>
//               )}
//             </div>
 
//             {/* Phone Number */}
//             <div className="flex flex-col lg:mb-[1.323em] md:mb-[1.5625em] sm:mb-[2.0860495437em] xs:mb-[2.5em] mb-[4.6875vw]">
//               <label
//                 htmlFor="phone"
//                 className="text-black font-bold md:text-[0.926em] text-sm mb-[0.529em]"
//               >
//                 Phone Number*
//               </label>
//               <PhoneInput
//                 formData={formData}
//                 setFormData={setFormData}
//                 errors={errors}
//                 onBlur={handleBlur}
//                 wrapperClassName={`w-full border-1 xs:rounded-md rounded-[3px] bg-white ${
//                   errors.phone ? "border-red-500" : "border-[#949AA5]"
//                 }`}
//                 inputClassName="xs:py-[0.6666666667em] py-[4.4444444444vw] xs:px-[1em] px-[4.4444444444vw] md:text-[1.1904761905em] xs:text-[3.3333333333em] text-[4.16667em] leading-[1.556]"
//               />
//               {errors.phone && (
//                 <span className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="25"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     aria-hidden="true"
//                     role="img"
//                   >
//                     <path
//                       fill="currentColor"
//                       d="m21.809 19.417-8.33-15.342a1.64 1.64 0 0 0-.614-.631 1.7 1.7 0 0 0-1.722 0c-.26.152-.472.37-.614.63L2.2 19.418a1.58 1.58 0 0 0 .05 1.614c.152.233.362.424.612.555.249.132.529.2.813.196h16.66c.287 0 .57-.072.819-.208.25-.137.459-.334.607-.572a1.58 1.58 0 0 0 .049-1.585M11.17 9.67c0-.215.088-.42.244-.571a.85.85 0 0 1 .589-.237c.22 0 .433.085.59.237a.8.8 0 0 1 .243.57v4.845c0 .214-.088.42-.244.571a.85.85 0 0 1-.589.237.85.85 0 0 1-.589-.237.8.8 0 0 1-.244-.57zm.875 9.285a1.3 1.3 0 0 1-.879-.347 1.22 1.22 0 0 1-.388-.84 1.16 1.16 0 0 1 .344-.868q.173-.174.402-.27a1.26 1.26 0 0 1 1.358.25c.236.221.374.522.387.84a1.16 1.16 0 0 1-.343.868 1.24 1.24 0 0 1-.881.367"
//                     ></path>
//                   </svg>
//                   {errors.phone}
//                 </span>
//               )}
//             </div>
 
//             {/* Course Interested In */}
//             <div className="flex flex-col lg:mb-[1.323em] md:mb-[1.5625em] sm:mb-[2.0860495437em] xs:mb-[2.5em] mb-[4.6875vw]">
//               <label
//                 htmlFor="course"
//                 className="text-black font-bold md:text-[0.926em] text-sm mb-[0.529em]"
//               >
//                 Course Interested in*
//               </label>
//               <CustomDropdown
//                 selected={formData.course}
//                 onChange={(value) => {
//                   setFormData((prev) => ({ ...prev, course: value }));
//                   if (errors.course) {
//                     setErrors(prev => ({ ...prev, course: "" }));
//                   }
//                 }}
//                 onBlur={handleDropdownBlur}
//                 error={errors.course}
//                 buttonClassName={`border-1 xs:rounded-md rounded-[3px] bg-white xs:py-[0.6666666667em] py-[4.4444444444vw] xs:px-[1em] px-[4.4444444444vw] md:text-[1.1904761905em] xs:text-[3.3333333333em] text-[4.16667em] leading-[1.556] ${
//                   errors.course ? "border-red-500" : "border-[#949AA5]"
//                 }`}
//                 listClassName="xs:max-h-60 max-h-40"
//               />
//               {errors.course && (
//                 <span className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="25"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     aria-hidden="true"
//                     role="img"
//                   >
//                     <path
//                       fill="currentColor"
//                       d="m21.809 19.417-8.33-15.342a1.64 1.64 0 0 0-.614-.631 1.7 1.7 0 0 0-1.722 0c-.26.152-.472.37-.614.63L2.2 19.418a1.58 1.58 0 0 0 .05 1.614c.152.233.362.424.612.555.249.132.529.2.813.196h16.66c.287 0 .57-.072.819-.208.25-.137.459-.334.607-.572a1.58 1.58 0 0 0 .049-1.585M11.17 9.67c0-.215.088-.42.244-.571a.85.85 0 0 1 .589-.237c.22 0 .433.085.59.237a.8.8 0 0 1 .243.57v4.845c0 .214-.088.42-.244.571a.85.85 0 0 1-.589.237.85.85 0 0 1-.589-.237.8.8 0 0 1-.244-.57zm.875 9.285a1.3 1.3 0 0 1-.879-.347 1.22 1.22 0 0 1-.388-.84 1.16 1.16 0 0 1 .344-.868q.173-.174.402-.27a1.26 1.26 0 0 1 1.358.25c.236.221.374.522.387.84a1.16 1.16 0 0 1-.343.868 1.24 1.24 0 0 1-.881.367"
//                     ></path>
//                   </svg>
//                   {errors.course}
//                 </span>
//               )}
//             </div>
 
//             {/* Privacy Notice */}
//             <span className="font-normal text-[#949AA4] md:text-[0.926em] sm:text-[2.5em] xs:text-[3.3333333333em] text-[3.33vw] leading-[1.3] xs:py-[0.529em] pt-[1.5vw] pb-[0.329em] block ">
//               Your information will be used to consider and fulfill your request
//               and will be handled pursuant to our{" "}
//               <Link to="/privacy-policy" className="underline">
//                 Privacy Policy
//               </Link>
//               .
//             </span>
 
//             {/* Button */}
//             <button
//               type="submit"
//               className="text-center primary-btn bg-[#E42552] text-white sm:px-[9.5em] px-[4.8vw] md:py-[1.058em] py-[4.8vw] w-full font-bold md:text-[1.1903em] sm:text-[2.8125em] xs:text-[3.75em] text-[4.4444444444em] relative z-10 xs:mt-[1.058em] mt-[6.3vw] xs:rounded-md rounded-[3px]"
//             >
//               Get In Touch
//             </button>
//           </form>
//         </div>
//       ) : (
//         <div className="bg-[#121211] rounded-[1.042em] xs:px-[1.3227513228em] xs:py-[1.5873015873em] py-[3vw] pt-[6vw] px-[3vw] shadow-[0_0_11px_3px_rgba(255,176,193,0.7)]">
//           <ContactThankyou />
//         </div>
//       )}
//     </>
//   );
// };
 
// export default GetInTouch;




// Fronend Code only for client view

import React, { useState } from "react";
import PhoneInput from "./PhoneInput";
import CustomDropdown from "./custom-dropdown";
import ContactThankyou from "./Contact-thankyou";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "default",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      {!isSubmitted ? (
        <div className="bg-white xs:rounded-[9px] rounded-[4px] md:pt-[2.084em] md:px-[2.292em] md:pb-[2.292em] px-[15px] pt-[5.5555555556vw] pb-[6.6666666667vw]">
          <p
            className="font-normal sm:leading-[1.2] leading-[1.42] tracking-[0.011em] text-black lg:text-[1.1903em] md:text-[2.0860495437em] sm:text-[2.5em] text-[3.8888888889em]"
            style={{ textShadow: "rgba(0, 0, 0, 0.3) 0.485px 0.485px 0px" }}
          >
            Please fill out the below form. Our team will be in touch with you shortly.
          </p>
          <form className="sm:pt-[2.116em] pt-[6.9444444444vw]">
            {/* Full Name */}
            <div className="flex flex-col lg:mb-[1.323em] md:mb-[1.5625em] sm:mb-[2.0860495437em] xs:mb-[2.5em] mb-[4.6875vw]">
              <label
                htmlFor="name"
                className="text-black font-bold md:text-[0.926em] text-sm mb-[0.529em]"
              >
                Full Name*
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your first & last name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
                className="border-1 border-[#949AA5] xs:rounded-md rounded-[3px] bg-white xs:py-[0.6666666667em] py-[4.4444444444vw] xs:px-[1em] px-[4.4444444444vw] md:text-[1.1904761905em] xs:text-[3.3333333333em] text-[4.16667em] leading-[1.556]"
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col lg:mb-[1.323em] md:mb-[1.5625em] sm:mb-[2.0860495437em] xs:mb-[2.5em] mb-[4.6875vw]">
              <label
                htmlFor="phone"
                className="text-black font-bold md:text-[0.926em] text-sm mb-[0.529em]"
              >
                Phone Number*
              </label>
              <PhoneInput
                formData={formData}
                setFormData={setFormData}
                errors={{}} // no validation errors
                flagwrapper="border-[#949AA5]"
                wrapperClassName="w-full border-1 xs:rounded-md rounded-[3px] bg-white border-[#949AA5]"
                inputClassName="xs:py-[0.6666666667em] py-[4.4444444444vw] xs:px-[1em] px-[4.4444444444vw] md:text-[1.1904761905em] xs:text-[3.3333333333em] text-[4.16667em] leading-[1.556]"
              />
            </div>

            {/* Course Interested In */}
            <div className="flex flex-col lg:mb-[1.323em] md:mb-[1.5625em] sm:mb-[2.0860495437em] xs:mb-[2.5em] mb-[4.6875vw]">
              <label
                htmlFor="course"
                className="text-black font-bold md:text-[0.926em] text-sm mb-[0.529em]"
              >
                Course Interested in*
              </label>
              <CustomDropdown
                selected={formData.course}
                onChange={(value) =>
                  setFormData((prev) => ({ ...prev, course: value }))
                }
                error={null}
                buttonClassName="border-1 border-[#949AA5] xs:rounded-md rounded-[3px] bg-white xs:py-[0.6666666667em] py-[4.4444444444vw] xs:px-[1em] px-[4.4444444444vw] md:text-[1.1904761905em] xs:text-[3.3333333333em] text-[4.16667em] leading-[1.556]"
                listClassName="xs:max-h-60 max-h-40"
              />
            </div>

            {/* Privacy Notice */}
            <span className="font-normal text-[#949AA4] md:text-[0.926em] sm:text-[2.5em] xs:text-[3.3333333333em] text-[3.33vw] leading-[1.3] xs:py-[0.529em] pt-[1.5vw] pb-[0.329em] block ">
              Your information will be used to consider and fulfill your request
              and will be handled pursuant to our{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
              .
            </span>

            {/* Button */}
            <button
              type="button"
              onClick={() => setIsSubmitted(true)}
              className="text-center primary-btn bg-[#E42552] text-white sm:px-[9.5em] px-[4.8vw] md:py-[1.058em] py-[4.8vw] w-full font-bold md:text-[1.1903em] sm:text-[2.8125em] xs:text-[3.75em] text-[4.4444444444em] relative z-10 xs:mt-[1.058em] mt-[6.3vw] xs:rounded-md rounded-[3px]"
            >
              Get In Touch
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-[#121211] rounded-[1.042em] xs:px-[1.3227513228em] xs:py-[1.5873015873em] py-[3vw] pt-[6vw] px-[3vw] shadow-[0_0_11px_3px_rgba(255,176,193,0.7)]">
          <ContactThankyou />
        </div>
      )}
    </>
  );
};

export default GetInTouch;
