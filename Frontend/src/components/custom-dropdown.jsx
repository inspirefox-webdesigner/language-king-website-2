import React, { useState, useEffect } from "react";
import { dropdownManager } from "../utils/dropdownManager";
 
const courses = ["PTE", "NAATI CCL", "IELTS", "Other Inquiry"];
 
const CustomDropdown = ({
  selected,
  onChange,
  error,
  wrapperClassName = "",
  buttonClassName = "",
  listClassName = "",
  itemClassName = "",
  onBlur,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownId] = useState(() => `course-${Math.random().toString(36)}`);
 
  useEffect(() => {
    dropdownManager.register(dropdownId, setIsOpen);
    return () => dropdownManager.unregister(dropdownId);
  }, [dropdownId]);
 
  const handleToggle = () => {
    if (isOpen) {
      dropdownManager.closeDropdown(dropdownId);
    } else {
      dropdownManager.openDropdown(dropdownId);
      setIsOpen(true);
    }
  };
 
  const handleSelect = (course) => {
    onChange(course);
    dropdownManager.closeDropdown(dropdownId);
  };
 
  const handleBlur = () => {
    if (onBlur) {
      onBlur();
    }
  };
 
  return (
    <div className={`relative ${wrapperClassName}`}>
      <button
        type="button"
        onClick={handleToggle}
        onBlur={handleBlur}
        className={`w-full text-left c-dropdown border-[#949AA5] ${error ? "border-red-500" : "border-[#949AA5]"
          } ${selected === "default" ? "text-[#919191]" : "text-black"
          } ${buttonClassName}`}
      >
        {selected === "default" ? "Select an option" : selected}
      </button>
 
      {isOpen && (
        <ul
          className={`absolute left-0 z-20 mt-0 w-full bg-white border border-gray-300 shadow-lg overflow-y-auto ${listClassName}`}
        >
          {courses.map((course) => (
            <li
              key={course}
              onClick={() => handleSelect(course)}
              className={`sm:px-[1.058em] sm:py-[0.794em] px-[1.0666666667em] xs:py-[0.529em] py-[4.2vw] bg-white hover:bg-[#F2F2F2] sm:text-[1.058em] xs:text-[2.5em] text-[4.16667vw] leading-normal cursor-pointer text-black ${itemClassName}`}
            >
              {course}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
 
export default CustomDropdown;