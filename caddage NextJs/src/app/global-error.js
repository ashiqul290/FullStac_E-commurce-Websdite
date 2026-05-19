"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error("Global Error:", error);
  }, [error]);

  return (
    <div className="relative h-screen flex items-center justify-center bg-[#020617] overflow-hidden text-white px-4">
      <div className="absolute inset-0 bg-linear-to-br from-red-900 via-black to-indigo-900 opacity-80" />
      <div className="absolute w-72 h-72 bg-red-500 rounded-full blur-[120px] opacity-30 top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-indigo-500 rounded-full blur-[120px] opacity-30 bottom-10 right-10 animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl rounded-3xl p-10 text-center max-w-md w-full"
      >
        
        <h1 className="text-5xl font-extrabold bg-linear-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
          Something went wrong
        </h1>

        <p className="mt-4 text-gray-300">
          Unexpected error occurred in the application.
        </p>
        <p className="text-xs text-red-400 mt-2 break-all opacity-70">
          {error?.message}
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-2 rounded-xl bg-linear-to-r from-red-500 to-pink-500 hover:scale-105 transition-all shadow-lg"
          >
            Try Again
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="px-6 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition"
          >
            Go Home
          </button>
        </div>
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-6 -right-6 text-3xl"
        >
        </motion.div>

      </motion.div>
    </div>
  );
}