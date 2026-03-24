import React from "react";
import { Link } from "react-router-dom";

function PaymentSuccessMessage() {


  return (
      <div className="min-h-screen flex items-center justify-center bg-[#121212] px-4 relative z-10">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
        <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-green-100">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Payment Successful
        </h2>

        <p className="text-gray-500 mb-6">
          Your payment has been completed successfully.
        </p>

        <Link
          to="/"
          className="w-full block text-center py-3 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition"
        >
          OK
        </Link>
      </div>
    </div>
  );
}

export default PaymentSuccessMessage;
