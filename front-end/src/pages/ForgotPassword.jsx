import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { api } from "../services/api"; // using your axios instance
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      toast.error("Invalid email format");
      return;
    }

    let toastId;
    try {
      setIsSubmitting(true);
      toastId = toast.loading("Sending reset OTP...", { position: "top-center" });

      const response = await api.post("/forgot-password", { email });
      
      toast.update(toastId, {
        render: response.data.message || "OTP sent to your email!",
        type: "success",
        isLoading: false,
        autoClose: 1500,
        position: "top-center"
      });

      localStorage.setItem("resetEmail", email);

      setTimeout(() => {
        navigate("/reset-pass");
      }, 1500);
    } catch (err) {
      console.error("Forgot password failed:", err);
      const message =
        err.response?.data?.message || err.message || "Something went wrong. Try again.";
      toast.update(toastId, {
        render: message,
        type: "error",
        isLoading: false,
        autoClose: 3000,
        position: "top-center"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full min-h-screen flex justify-center items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 px-4 sm:px-6 lg:px-8 py-8">
      <motion.img
        src="/images/login-page.jpg"
        alt="Background"
        className="absolute w-full h-full object-cover blur-sm scale-105"
        initial={{ scale: 1.3 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-emerald-900/50" />

      <div className="relative z-10 w-full max-w-sm sm:max-w-md lg:max-w-lg bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">
            Forgot Password?
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-400 to-sky-400 text-sm sm:text-base mt-2 font-medium">
              Enter your email to reset it 🔑
            </span>
          </h2>
        </div>

        <div className="mb-4 sm:mb-6">
          <label className="block text-white/90 text-sm mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-xl border border-white/30 bg-white/5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all duration-300 text-sm sm:text-base"
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:transform-none shadow-lg text-sm sm:text-base"
        >
          {isSubmitting ? "Sending..." : "Send Reset OTP"}
        </button>

        <div className="text-center mt-4 sm:mt-6">
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-sm text-emerald-300 hover:text-emerald-200 transition-colors"
          >
            Back to Login
          </button>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastClassName="!z-[10050] !bg-gray-800/90 !backdrop-blur-md !border !border-white/20 !text-white"
        bodyClassName="!text-white"
        progressClassName="!bg-gradient-to-r !from-emerald-400 !to-teal-500"
      />
    </div>
  );
}
