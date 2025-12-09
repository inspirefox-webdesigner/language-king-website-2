import React, { useState } from "react";
import { Link } from "react-router-dom";
import PhoneInput from "./PhoneInput";
import CustomDropdown from "./custom-dropdown";
import CallbackThankyou from "./callback-thankyou";
import API_BASE_URL from "../config/api";

const BookFreeTrail = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "default",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [setTouched] = useState({});

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
      form_source: "BookTrail Form",
    };

    try {
      const dbRes = await fetch(`${API_BASE_URL}/forms/booktrail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      const emailRes = await fetch(`${API_BASE_URL.replace('/api','')}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      const [dbResult] = await Promise.all([dbRes.json(), emailRes.json()]);

      if (dbResult.success) {
        console.log("Form submitted successfully", dbResult);
        setIsSubmitted(true);
      } else {
        console.error("Form submission failed", dbResult);
      }
    } catch (error) {
      console.log("Backend not connected. Form data:", submitData);
      setIsSubmitted(true);
    }
  };

  return (
    <>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col lg:mb-[1.0582010582em] md:mb-[1.5625em] sm:mb-[2.0860495437em] xs:mb-[2.5em] mb-[4.6875vw]">
            <label
              htmlFor="name"
              className="text-white font-semibold md:text-[1.1904761905em] sm:text-[1.0582010582em] xs:text-[2.9166666667em]  text-[3.8888888888889em] mb-[0.3333333333em]"
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
              className={`md:text-[1.1904761905em] xs:text-[2.5em] text-[4.1666666667em] md:py:[0.8888888889em] xs:py-[0.7222222222em] py-[4.223vw] md:px-[1.3333333333em] px-4 leading-[1.778] placeholder:text-[#919191] bg-white border ${
                errors.name ? "border-red-500" : "border-transparent"
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

          <div className="flex flex-col lg:mb-[1.0582010582em] md:mb-[1.5625em] sm:mb-[2.0860495437em] xs:mb-[2.5em] mb-[4.6875vw]">
            <label
              htmlFor="phone"
              className="text-white font-semibold md:text-[1.1904761905em] sm:text-[1.0582010582em] xs:text-[2.9166666667em]  text-[3.8888888888889em] mb-[0.3333333333em]"
            >
              Phone Number*
            </label>
            <PhoneInput
              formData={formData}
              setFormData={setFormData}
              errors={errors}
              onBlur={handleBlur}
              wrapperClassName="border"
              inputClassName="w-full rounded-[0px] border border-transparent md:text-[1.1904761905em] xs:text-[2.5em] text-[4.1666666667em] md:py:[0.8888888889em] xs:py-[0.7222222222em] py-[4.223vw] md:px-[1.3333333333em] px-4 leading-[1.778] placeholder:text-[#919191] bg-white"
            />
            {errors.phone && (
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
                {errors.phone}
              </span>
            )}
          </div>

          <div className="flex flex-col lg:mb-[1.0582010582em] md:mb-[1.5625em] sm:mb-[2.0860495437em] xs:mb-[2.5em] mb-[4.6875vw]">
            <label
              htmlFor="course"
              className="text-white font-semibold md:text-[1.1904761905em] sm:text-[1.0582010582em] xs:text-[2.9166666667em]  text-[3.8888888888889em] mb-[0.3333333333em]"
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
              buttonClassName="md:text-[1.1904761905em] xs:text-[2.5em] text-[4.1666666667em] md:py:[0.8888888889em] xs:py-[0.7222222222em] py-[4.223vw] md:px-[1.3333333333em] px-4 leading-[1.778] placeholder:text-[#919191] bg-white border"
              listClassName="rounded-0 xs:max-h-60 max-h-40"
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

          <span className="font-normal text-[#949AA4] md:text-[1.0582010582em] md:leading-[1.5] xs:text-[2.5em] text-[3.33vw] py-[0.75em] block">
            Your information will be used to consider and fulfill your request
            and will be handled pursuant to our{" "}
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
      ) : (
        <div className="bg-[#121211] rounded-[1.042em] xs:px-[1.3227513228em] xs:py-[1.5873015873em] py-[3vw] pt-[6vw] px-[3vw] shadow-[0_0_11px_3px_rgba(255,176,193,0.7)]">
          <CallbackThankyou />
        </div>
      )}
    </>
  );
};

export default BookFreeTrail;
