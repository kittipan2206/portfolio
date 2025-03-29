"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          className="section-header"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            เกี่ยวกับตัวผม
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="section-divider"
          ></motion.div>
          <motion.p variants={itemVariants} className="section-description">
            นักพัฒนาที่มีความหลงใหลในการสร้างสรรค์แอปพลิเคชันที่มีประสิทธิภาพและใช้งานง่าย
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="relative w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden border-gradient">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 mix-blend-overlay z-10"></div>

              {/* สมมติให้มีรูปโปรไฟล์ (ควรเปลี่ยนเป็น URL จริง) */}
              <div className="relative h-full w-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400">
                <p className="text-lg font-medium">รูปโปรไฟล์</p>
              </div>
            </div>

            {/* เส้นตกแต่ง */}
            <div className="absolute -bottom-5 -right-5 w-24 h-24 border-r-4 border-b-4 border-primary z-0"></div>
            <div className="absolute -top-5 -left-5 w-24 h-24 border-l-4 border-t-4 border-secondary z-0"></div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-heading font-bold mb-6">
              สวัสดีครับ!
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              ผมเป็นนักพัฒนาที่มีความเชี่ยวชาญด้าน Flutter และการพัฒนาเว็บไซต์
              ชื่นชอบการสร้างโซลูชั่นที่มีประสิทธิภาพและสวยงาม
              ผมมีความสนใจในเทคโนโลยีล่าสุด
              และพยายามเรียนรู้อยู่เสมอเพื่อพัฒนาทักษะให้ทันสมัย
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    การศึกษา
                  </h4>
                  <p className="font-medium">
                    ปริญญาตรี วิศวกรรมดิจิทัล (หลักสูตรนานาชาติ)
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    เกรดเฉลี่ย 3.61
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    ภาษา
                  </h4>
                  <p>ไทย (ภาษาแม่), อังกฤษ (ระดับกลาง)</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    ความสนใจ
                  </h4>
                  <p>
                    เทรนด์เทคโนโลยีและวิทยาศาสตร์, AI,
                    การเรียนรู้ภาษาโปรแกรมมิ่งใหม่ๆ
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    ที่อยู่
                  </h4>
                  <p>สตูล, ประเทศไทย</p>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
            >
              <span>ติดต่อผม</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
