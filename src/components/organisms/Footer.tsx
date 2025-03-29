"use client";

import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  // ฟังก์ชันสำหรับเลื่อนขึ้นไปด้านบนสุดของหน้า
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          {/* Logo and Copyright */}
          <div className="mb-6 md:mb-0">
            <div className="font-heading font-bold text-xl text-primary mb-2">
              กิตติพันธ์
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {new Date().getFullYear()} สงวนลิขสิทธิ์ทั้งหมด
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              ลิงค์ด่วน
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  หน้าแรก
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  เกี่ยวกับ
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  ผลงาน
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  ติดต่อ
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              โซเชียลมีเดีย
            </h3>
            <div className="flex space-x-3">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:sk.kittipan@gmail.com"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-colors"
                aria-label="Email"
              >
                <FiMail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Back to Top Button */}
          <div>
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors shadow-md"
              aria-label="กลับไปด้านบน"
            >
              <FiArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-6 text-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            สร้างด้วย React, Next.js และ Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
