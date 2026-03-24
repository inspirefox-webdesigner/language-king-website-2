import React from "react";
import { Link } from "react-router-dom";

function PaymentCancelMessage() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#121212] px-4 relative z-10">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
        <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-red-100">
          <svg
            className="w-10 h-10 text-red-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Payment Unsuccessful
        </h2>

        <p className="text-gray-500 mb-6">
          Your payment was cancelled or failed.
        </p>

        <div className="flex gap-3">
          <Link
            to="/transparent-pricing-mobile"
            className="w-1/2 text-center py-3 rounded-lg bg-gray-800 text-white font-medium hover:bg-gray-900 transition"
          >
            OK
          </Link>

          <Link
            to="/"
            className="w-1/2 text-center py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PaymentCancelMessage;
