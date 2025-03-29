"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // สมมติว่ามีการส่งข้อมูลไปยังเซิร์ฟเวอร์
    try {
      // ในที่นี้เราจะจำลองการส่งข้อมูลสำเร็จ
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      // รีเซ็ตฟอร์ม
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setSubmitStatus("error");
      console.error("เกิดข้อผิดพลาดในการส่งข้อมูล:", err);
    } finally {
      setIsSubmitting(false);
      // ล้างสถานะหลังจาก 5 วินาที
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">ติดต่อผม</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            สนใจในบริการของผมหรือมีคำถามใดๆ โปรดติดต่อผมได้ตามช่องทางด้านล่าง
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-heading font-bold mb-6">
              ข้อมูลติดต่อ
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 rounded-md bg-primary/10 text-primary mr-4">
                  <FiMail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">อีเมล</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    <a
                      href="mailto:sk.kittipan@gmail.com"
                      className="hover:text-primary transition-colors"
                    >
                      sk.kittipan@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-md bg-primary/10 text-primary mr-4">
                  <FiPhone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">โทรศัพท์</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    <a
                      href="tel:+66657766480"
                      className="hover:text-primary transition-colors"
                    >
                      (+66) 65-776-6480
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 rounded-md bg-primary/10 text-primary mr-4">
                  <FiMapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">ที่อยู่</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    สตูล, ประเทศไทย
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-heading font-bold mb-6">
                ข้อมูลอ้างอิง
              </h3>
              <div className="border-l-4 border-primary pl-4 py-2">
                <h4 className="text-lg font-medium">ผศ.นรเทพ รัตนวิพันธ์</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-1">
                  norrathep.r@phuket.psu.ac.th
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  (+66) 76-276-977
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-heading font-bold mb-6">
                ส่งข้อความ
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                    <FiUser />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="ชื่อของคุณ"
                    required
                    className="w-full px-4 py-3 pl-10 rounded-md bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                    <FiMail />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="อีเมลของคุณ"
                    required
                    className="w-full px-4 py-3 pl-10 rounded-md bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                    <FiMessageSquare />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="หัวข้อ"
                    required
                    className="w-full px-4 py-3 pl-10 rounded-md bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="ข้อความของคุณ"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-md bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      กำลังส่ง...
                    </>
                  ) : (
                    <>
                      <FiSend className="mr-2" />
                      ส่งข้อความ
                    </>
                  )}
                </button>

                {submitStatus === "success" && (
                  <div className="p-3 bg-green-100 text-green-700 rounded-md">
                    ส่งข้อความสำเร็จ! ขอบคุณที่ติดต่อเข้ามา
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-3 bg-red-100 text-red-700 rounded-md">
                    เกิดข้อผิดพลาดในการส่งข้อความ โปรดลองอีกครั้งในภายหลัง
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
