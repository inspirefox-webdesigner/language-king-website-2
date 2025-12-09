import { useState } from "react";
import CloseIcon from "../assets/close.svg"; // Custom close icon
import PhoneInput from "./PhoneInput";
import CustomDropdown from "./custom-dropdown";
import { Link } from "react-router-dom";
import CallbackThankyou from "./callback-thankyou";
import API_BASE_URL from "../config/api";

const CallbackForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "default",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ setTouched] = useState({});

  const validateField = (name, value) => {
    let error = "";

    if (name === "name" && !value.trim()) {
      error = "Full name is required";
    } else if (name === "phone") {
      if (!value.trim()) {
        error = "Phone number is required";
      } else {
        // Remove all non-digits and check if it has at least 10 digits
        const digitsOnly = value.replace(/\D/g, "");
        if (digitsOnly.length < 10) {
          error = "Enter a valid phone number";
        }
      }
    } else if (name === "course" && value === "default") {
      error = "Please select a course";
    }

    return error;
  };

  const validate = () => {
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));

    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleDropdownBlur = () => {
    setTouched((prev) => ({ ...prev, course: true }));

    const error = validateField("course", formData.course);
    setErrors((prev) => ({ ...prev, course: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const submitData = {
      name: formData.name,
      phone: formData.phone,
      course: formData.course,
      form_source: "Course Form"
    };

    try {
      const dbRes = await fetch(`${API_BASE_URL}/forms/course`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      if (!dbRes.ok) {
        throw new Error(`Database request failed: ${dbRes.status}`);
      }

      const dbResult = await dbRes.json();

      if (dbResult.success) {
        try {
          const emailRes = await fetch(`${API_BASE_URL.replace('/api','')}/send-email`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(submitData),
          });

          if (emailRes.ok) {
            const emailResult = await emailRes.json();
            console.log("Email sent:", emailResult);
          }
        } catch (emailError) {
          console.error("Email failed but form saved:", emailError);
        }

        console.log("Form submitted successfully", dbResult);
        setIsSubmitted(true);
      } else {
        console.error("Form submission failed", dbResult);
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
      console.log("Backend not connected. Form data:", submitData);
      setIsSubmitted(true);
    }
  };

  return (
    <>
      <div
        className="fixed h-full top-0 bottom-0 left-0 right-0 inset-0 z-[51] bg-black/[94.5%] flex items-start justify-center xs:py-[1em] py-[3vw]"
        onClick={onClose}
      >
        <div
          className="bg-[#121212] 2xl:p-[1.5873015873em] sm:px-[1.8518518519em] sm:pt-[1.1904761905em] sm:pb-[1.6792328042vw] px-[18px] py-[18px] w-full md:max-w-[34.1931216931vw] xs:max-w-[73.0117340287em] max-w-[92%] relative max-h-[99%] sm:h-auto overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {!isSubmitted ? (
            <>
              <div className="flex justify-between items-center border-b-[0.1041666667vw] border-[#2A2A2A] xs:pb-[1.1904761905em] pb-[14px]">
                <h2 className="text-white 2xl:text-[1.9841269841em] md:text-[1.9510582011vw] sm:text-[4.375em] xs:text-[5.8333333333em] text-[7.7777777778em] font-bold">
                  Get-a-Callback
                </h2>
                <button
                  onClick={onClose}
                  className="flex items-center justify-center sm:p-[0.7936507937em] p-2 sm:w-[3.1084656085em] sm:h-[3.1084656085em] w-[10.23em] h-[10.23em] bg-chinese-Black border border-davys-Grey focus:outline-none cursor-pointer shadow-[0px_4px_0px_#000000] text-white"
                >
                  <img
                    src={CloseIcon}
                    alt="CloseIcon"
                    className="sm:w-[1.8518518519em] sm:h-[1.8518518519em] w-7 h-7"
                  />
                </button>
              </div>
              <p className="font-normal text-white/75 2xl:text-[1.3227513228em] md:text-[1.1904761905em] sm:text-[2.1875em] xs:text-[2.9166666667em] text-[3.88889em] leading-[1.4] pt-[1.2em]">
                Please fill out the below form. Our team will be in touch with
                you shortly.
              </p>
              <div className="sm:pt-[1.5873015873em] pt-4">
                <form onSubmit={handleSubmit} className="">
                  <div className="flex flex-col mb-4">
                    <label
                      htmlFor="name"
                      className="text-white font-semibold 2xl:text-[1.1904761905em] sm:text-[1.0582010582em] xs:text-[2.9166666667em]  text-[3.8888888888889em] mb-[0.3333333333em]"
                    >
                      Full Name*
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your first & last name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`placeholder:text-[#919191] bg-white py-[5vw] xs:py-[0.7222222222em] sm:px-[1.3333333333em] px-4 sm:text-[1.1904761905em] text-[4.2vw] ${
                        errors.name
                          ? "border-red-500 border"
                          : "border-[#949AA5] border-0"
                      }`}
                    />

                    {errors.name && (
                      <span className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="25"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          role="img"
                        >
                          <path
                            fill="currentColor"
                            d="m21.809 19.417-8.33-15.342a1.64 1.64 0 0 0-.614-.631 1.7 1.7 0 0 0-1.722 0c-.26.152-.472.37-.614.63L2.2 19.418a1.58 1.58 0 0 0 .05 1.614c.152.233.362.424.612.555.249.132.529.2.813.196h16.66c.287 0 .57-.072.819-.208.25-.137.459-.334.607-.572a1.58 1.58 0 0 0 .049-1.585M11.17 9.67c0-.215.088-.42.244-.571a.85.85 0 0 1 .589-.237c.22 0 .433.085.59.237a.8.8 0 0 1 .243.57v4.845c0 .214-.088.42-.244.571a.85.85 0 0 1-.589.237.85.85 0 0 1-.589-.237.8.8 0 0 1-.244-.57zm.875 9.285a1.3 1.3 0 0 1-.879-.347 1.22 1.22 0 0 1-.388-.84 1.16 1.16 0 0 1 .344-.868q.173-.174.402-.27a1.26 1.26 0 0 1 1.358.25c.236.221.374.522.387.84a1.16 1.16 0 0 1-.343.868 1.24 1.24 0 0 1-.881.367"
                          ></path>
                        </svg>
                        {errors.name}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col mb-4">
                    <label
                      htmlFor="phone"
                      className="text-white font-semibold 2xl:text-[1.1904761905em] sm:text-[1.0582010582em] xs:text-[2.9166666667em]  text-[3.8888888888889em] mb-[0.3333333333em]"
                    >
                      Phone Number*
                    </label>
                    <PhoneInput
                      formData={formData}
                      setFormData={setFormData}
                      errors={errors}
                      onBlur={handleBlur}
                      wrapperClassName="border-0 "
                      inputClassName="placeholder:text-[#919191] border-0 bg-white py-[5vw] xs:py-[0.7222222222em] sm:px-[1.3333333333em] px-4 sm:text-[1.1904761905em] text-[4.2vw]"
                    />
                  </div>

                  <div className="flex flex-col xs:mb-4 mb-[3.75em]">
                    <label
                      htmlFor="course"
                      className="text-white font-semibold 2xl:text-[1.1904761905em] sm:text-[1.0582010582em] xs:text-[2.9166666667em]  text-[3.8888888888889em] mb-[0.3333333333em]"
                    >
                      Course Interested in*
                    </label>

                    <CustomDropdown
                      selected={formData.course}
                      onChange={(value) => {
                        setFormData((prev) => ({ ...prev, course: value }));
                        if (errors.course) {
                          setErrors((prev) => ({ ...prev, course: "" }));
                        }
                      }}
                      onBlur={handleDropdownBlur}
                      error={errors.course}
                      buttonClassName="placeholder:text-[#919191] border-0 bg-white py-[5vw] xs:py-[0.7222222222em] sm:px-[1.3333333333em] px-4 sm:text-[1.1904761905em] text-[4.2vw]"
                      wrapperClassName="border-0"
                      listClassName="rounded-[0px] max-h-[190px]"
                    />

                    {errors.course && (
                      <span className="text-red-500 text-sm mt-1 flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="25"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          role="img"
                        >
                          <path
                            fill="currentColor"
                            d="m21.809 19.417-8.33-15.342a1.64 1.64 0 0 0-.614-.631 1.7 1.7 0 0 0-1.722 0c-.26.152-.472.37-.614.63L2.2 19.418a1.58 1.58 0 0 0 .05 1.614c.152.233.362.424.612.555.249.132.529.2.813.196h16.66c.287 0 .57-.072.819-.208.25-.137.459-.334.607-.572a1.58 1.58 0 0 0 .049-1.585M11.17 9.67c0-.215.088-.42.244-.571a.85.85 0 0 1 .589-.237c.22 0 .433.085.59.237a.8.8 0 0 1 .243.57v4.845c0 .214-.088.42-.244.571a.85.85 0 0 1-.589.237.85.85 0 0 1-.589-.237.8.8 0 0 1-.244-.57zm.875 9.285a1.3 1.3 0 0 1-.879-.347 1.22 1.22 0 0 1-.388-.84 1.16 1.16 0 0 1 .344-.868q.173-.174.402-.27a1.26 1.26 0 0 1 1.358.25c.236.221.374.522.387.84a1.16 1.16 0 0 1-.343.868 1.24 1.24 0 0 1-.881.367"
                          ></path>
                        </svg>
                        {errors.course}
                      </span>
                    )}
                  </div>

                  <span className="font-normal text-[#949AA4] md:text-[0.9259259259em] md:leading-[1.2] xs:text-[2.5em] text-[3.33vw] py-[0.75em] block">
                    Your information will be used to consider and fulfill your
                    request and will be handled pursuant to our{" "}
                    <Link to="/privacy-policy" className="underline">
                      Privacy Policy.
                    </Link>
                  </span>

                  <button
                    type="submit"
                    className="align-middle inline-flex items-center justify-center text-center primary-btn bg-gradient-OrangeRed text-white px-[0.6em] xs:py-[0.8em] py-[4.7vw] w-full font-bold md:text-[1.3227513228em] xs:text-[2.8125em] md:leading-[1.4] text-[4.8em] relative z-10 mt-[0.8em]"
                  >
                    Get In Touch
                  </button>
                </form>
              </div>
            </>
          ) : (
            <div className="">
              <div className="flex justify-between items-center border-b-[0.1041666667vw] border-[#2A2A2A] xs:pb-[1.1904761905em] pb-[14px] xs:mb-6 mb-[4.6875vw]">
                <h2 className="text-white 2xl:text-[1.9841269841em] md:text-[1.9510582011vw] sm:text-[4.375em] xs:text-[5.8333333333em] text-[7.7777777778em] font-bold">
                  Get-a-Callback
                </h2>
                <button
                  onClick={onClose}
                  className="flex items-center justify-center sm:p-[0.7936507937em] p-2 sm:w-[3.1084656085em] sm:h-[3.1084656085em] w-[10.23em] h-[10.23em] bg-chinese-Black border border-davys-Grey focus:outline-none cursor-pointer shadow-[0px_4px_0px_#000000] text-white"
                >
                  <img
                    src={CloseIcon}
                    alt="CloseIcon"
                    className="sm:w-[1.8518518519em] sm:h-[1.8518518519em] w-7 h-7"
                  />
                </button>
              </div>
              <CallbackThankyou />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CallbackForm;



// new code for callback form

// import { useState } from "react";
// import CloseIcon from "../assets/close.svg"; // Custom close icon
// import PhoneInput from "./PhoneInput";
// import CustomDropdown from "./custom-dropdown";
// import CallbackPopupThankyou from "./callback-popup-thankyou";
// import { Link } from "react-router-dom";

// const CallbackForm = ({ onClose }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     course: "default",
//   });

//   const [errors, setErrors] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitted(true);
//   };

//   return (
//     <>
//       <div
//         className="fixed h-full top-0 bottom-0 left-0 right-0 inset-0 z-[51] bg-black/[94.5%] flex items-start justify-center xs:py-[1em] py-[3vw]"
//         onClick={onClose}
//       >
//         <div
//           className="bg-[#121212] 2xl:p-[1.5873015873em] sm:px-[1.8518518519em] sm:pt-[1.1904761905em] sm:pb-[1.6792328042vw] px-[18px] py-[18px] w-full md:max-w-[34.1931216931vw] xs:max-w-[73.0117340287em] max-w-[92%] relative max-h-[99%] sm:h-auto overflow-y-auto"
//           onClick={(e) => e.stopPropagation()}
//         >
//           {!isSubmitted ? (
//             <>
//              <div className="flex justify-between items-center xs:border-b-[0.1041666667vw] border-b-[0.3649635036vw] border-[#2A2A2A] xs:pb-[1.1904761905em] pb-[14px]">

//                 <h2 className="text-white 2xl:text-[1.9841269841em] md:text-[1.9510582011vw] sm:text-[4.375em] xs:text-[5.8333333333em] text-[7.7777777778em] font-bold">
//                   Get-a-Callback
//                 </h2>
//                 <button
//                   onClick={onClose}
//                   className="flex items-center justify-center sm:p-[0.7936507937em] p-2 sm:w-[3.1084656085em] sm:h-[3.1084656085em] w-[10.23em] h-[10.23em] bg-chinese-Black border border-davys-Grey focus:outline-none cursor-pointer shadow-[0px_4px_0px_#000000] text-white"
//                 >
//                   <img
//                     src={CloseIcon}
//                     alt="CloseIcon"
//                     className="sm:w-[1.8518518519em] sm:h-[1.8518518519em] w-7 h-7"
//                   />
//                 </button>
//               </div>
//               <p className="font-normal text-white/75 2xl:text-[1.3227513228em] md:text-[1.1904761905em] sm:text-[2.1875em] xs:text-[2.9166666667em] text-[3.88889em] leading-[1.4] pt-[1.2em]">
//                 Please fill out the below form. Our team will be in touch with
//                 you shortly.
//               </p>
//               <div className="sm:pt-[1.5873015873em] pt-4">
//                 <form onSubmit={handleSubmit} className="">
//                   <div className="flex flex-col mb-4">
//                     <label
//                       htmlFor="name"
//                       className="text-white font-semibold 2xl:text-[1.1904761905em] sm:text-[1.0582010582em] xs:text-[2.9166666667em]  text-[3.8888888888889em] mb-[0.3333333333em]"
//                     >
//                       Full Name*
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       placeholder="Your first & last name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       className={`placeholder:text-[#919191] bg-white py-[5vw] xs:py-[1.044973545vw] sm:px-[1.3333333333em] px-4 sm:text-[1.25vw] text-[4.2vw] ${
//                         errors.name
//                           ? "border-red-500 border"
//                           : "border-[#949AA5] border-0"
//                       }`}
//                     />

//                     {errors.name && (
//                       <span className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="16"
//                           height="25"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           aria-hidden="true"
//                           role="img"
//                         >
//                           <path
//                             fill="currentColor"
//                             d="m21.809 19.417-8.33-15.342a1.64 1.64 0 0 0-.614-.631 1.7 1.7 0 0 0-1.722 0c-.26.152-.472.37-.614.63L2.2 19.418a1.58 1.58 0 0 0 .05 1.614c.152.233.362.424.612.555.249.132.529.2.813.196h16.66c.287 0 .57-.072.819-.208.25-.137.459-.334.607-.572a1.58 1.58 0 0 0 .049-1.585M11.17 9.67c0-.215.088-.42.244-.571a.85.85 0 0 1 .589-.237c.22 0 .433.085.59.237a.8.8 0 0 1 .243.57v4.845c0 .214-.088.42-.244.571a.85.85 0 0 1-.589.237.85.85 0 0 1-.589-.237.8.8 0 0 1-.244-.57zm.875 9.285a1.3 1.3 0 0 1-.879-.347 1.22 1.22 0 0 1-.388-.84 1.16 1.16 0 0 1 .344-.868q.173-.174.402-.27a1.26 1.26 0 0 1 1.358.25c.236.221.374.522.387.84a1.16 1.16 0 0 1-.343.868 1.24 1.24 0 0 1-.881.367"
//                           ></path>
//                         </svg>
//                         {errors.name}
//                       </span>
//                     )}
//                   </div>

//                   <div className="flex flex-col mb-4">
//                     <label
//                       htmlFor="phone"
//                       className="text-white font-semibold 2xl:text-[1.1904761905em] sm:text-[1.0582010582em] xs:text-[2.9166666667em]  text-[3.8888888888889em] mb-[0.3333333333em]"
//                     >
//                       Phone Number*
//                     </label>
//                     <PhoneInput
//                       formData={formData}
//                       setFormData={setFormData}
//                       errors={errors}
//                       wrapperClassName="border-0 "
//                       inputClassName="placeholder:text-[#919191] border-0 bg-white py-[5vw] xs:py-[1.044973545vw] sm:px-[1.3333333333em] px-4 sm:text-[1.25vw] text-[4.2vw]"
//                     />
//                   </div>

//                   <div className="flex flex-col xs:mb-4 mb-[3.75em]">
//                     <label
//                       htmlFor="course"
//                       className="text-white font-semibold 2xl:text-[1.1904761905em] sm:text-[1.0582010582em] xs:text-[2.9166666667em]  text-[3.8888888888889em] mb-[0.3333333333em]"
//                     >
//                       Course Interested in*
//                     </label>

//                     <CustomDropdown
//                       selected={formData.course}
//                       onChange={(value) =>
//                         setFormData((prev) => ({ ...prev, course: value }))
//                       }
//                       error={errors.course}
//                       buttonClassName="placeholder:text-[#919191] border-0 bg-white py-[5vw] xs:py-[1.044973545vw] sm:px-[1.3333333333em] px-4 sm:text-[1.25vw] text-[4.2vw]"
//                       wrapperClassName="border-0"
//                       listClassName="rounded-[0px] max-h-[190px]"
//                     />

//                     {errors.course && (
//                       <span className="text-red-500 text-sm mt-1 flex items-center gap-1">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="16"
//                           height="25"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           aria-hidden="true"
//                           role="img"
//                         >
//                           <path
//                             fill="currentColor"
//                             d="m21.809 19.417-8.33-15.342a1.64 1.64 0 0 0-.614-.631 1.7 1.7 0 0 0-1.722 0c-.26.152-.472.37-.614.63L2.2 19.418a1.58 1.58 0 0 0 .05 1.614c.152.233.362.424.612.555.249.132.529.2.813.196h16.66c.287 0 .57-.072.819-.208.25-.137.459-.334.607-.572a1.58 1.58 0 0 0 .049-1.585M11.17 9.67c0-.215.088-.42.244-.571a.85.85 0 0 1 .589-.237c.22 0 .433.085.59.237a.8.8 0 0 1 .243.57v4.845c0 .214-.088.42-.244.571a.85.85 0 0 1-.589.237.85.85 0 0 1-.589-.237.8.8 0 0 1-.244-.57zm.875 9.285a1.3 1.3 0 0 1-.879-.347 1.22 1.22 0 0 1-.388-.84 1.16 1.16 0 0 1 .344-.868q.173-.174.402-.27a1.26 1.26 0 0 1 1.358.25c.236.221.374.522.387.84a1.16 1.16 0 0 1-.343.868 1.24 1.24 0 0 1-.881.367"
//                           ></path>
//                         </svg>
//                         {errors.course}
//                       </span>
//                     )}
//                   </div>

//                   <span className="font-normal text-[#949AA4] md:text-[0.9259259259em] md:leading-[1.2] xs:text-[2.5em] text-[3.33vw] py-[0.75em] block">
//                     Your information will be used to consider and fulfill your
//                     request and will be handled pursuant to our{" "}
//                     <Link to="/privacy-policy" className="underline">
//                       Privacy Policy.
//                     </Link>
//                   </span>

//                   <button
//                     type="submit"
//                     className="align-middle inline-flex items-center justify-center text-center primary-btn bg-gradient-OrangeRed text-white px-[0.6em] xs:py-[1.1243386243vw] py-[4.7vw] w-full font-bold md:text-[1.3227513228em] xs:text-[2.8125em] md:leading-[1.4] text-[4.8em] relative z-10 mt-[0.8em]"
//                   >
//                     Get In Touch
//                   </button>
//                 </form>
//               </div>
//             </>
//           ) : (
//             <div className="">


//               <div className="flex justify-between items-center xs:border-b-[0.1041666667vw] border-b-[0.3649635036vw] border-[#2A2A2A] xs:pb-[1.1904761905em] pb-[14px] xs:mb-[1.5873015873em] mb-[4.6875vw]">
//                 <h2 className="text-white 2xl:text-[1.9841269841em] md:text-[1.9510582011vw] sm:text-[4.375em] xs:text-[5.8333333333em] text-[7.7777777778em] font-bold">
//                 </h2>
//                 <button
//                   onClick={onClose}
//                   className="flex items-center justify-center sm:p-[0.7936507937em] p-2 sm:w-[3.1084656085em] sm:h-[3.1084656085em] w-[10.23em] h-[10.23em] bg-chinese-Black border border-davys-Grey focus:outline-none cursor-pointer shadow-[0px_4px_0px_#000000] text-white"
//                 >
//                   <img
//                     src={CloseIcon}
//                     alt="CloseIcon"
//                     className="sm:w-[1.8518518519em] sm:h-[1.8518518519em] w-7 h-7"
//                   />
//                 </button>
//               </div>
//               <CallbackPopupThankyou />
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default CallbackForm;
