"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-[#020617] text-white">    
      <div className="absolute inset-0 bg-linear-to-br from-indigo-900 via-black to-cyan-900 opacity-80" />
      <div className="absolute w-72 h-72 bg-cyan-500 rounded-full blur-[120px] opacity-30 top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-[120px] opacity-30 bottom-10 right-10 animate-pulse"></div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl rounded-3xl p-10 text-center max-w-md w-full"
      >
        <h1 className="text-5xl font-extrabold bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          product Not Found
        </h1>
        <h1 className="text-8xl font-extrabold bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          404
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Lost in space...
        </p>
        <p className="text-sm text-gray-400 mt-2">
          The page you’re looking for doesn’t exist or was moved.
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <Link href="/">
            <button className="px-6 py-2 rounded-xl bg-linear-to-r from-cyan-500 to-blue-500 hover:scale-105 transition-all shadow-lg">
              Go Home
            </button>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-2 rounded-xl border border-white/20 hover:bg-white/10 transition"
          >
            Go Back
          </button>
        </div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-6 -right-6 text-3xl"
        >
          🚀
        </motion.div>

      </motion.div>
    </div>
  );
}