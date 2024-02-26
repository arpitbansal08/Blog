import { useId } from "react";
import React from "react";

function Select({ options, label, className, ...props }, ref) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}
      <select
        {...props}
        id={id}
        ref={ref}
        className={` ${className} px-3 py-2 rounded-lg bg-white text-black outline-none 
        focus:bg-gray-50 duration-200 border border-gray-200 w-full`}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
