"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";

const experiences = [
  {
    id: 1,
    company: "ManaLab",
    period: "มกราคม 2023 - ปัจจุบัน",
    title: "นักพัฒนา Flutter",
    location: "สตูล, ประเทศไทย",
    description:
      "พัฒนาแอปพลิเคชัน Chat ที่มีคุณสมบัติการส่งข้อความแบบเรียลไทม์ การส่งไฟล์ และการสร้างกลุ่ม",
    responsibilities: [
      "พัฒนาส่วนติดต่อผู้ใช้ด้วย Flutter",
      "จัดการระบบการแจ้งเตือน",
      "ทำงานร่วมกับทีม backend เพื่อเชื่อมต่อ API",
      "ทดสอบฟังก์ชันการทำงานของแอปพลิเคชัน",
    ],
    technologies: ["Flutter", "Firebase", "Websocket", "Node.js"],
  },
  {
    id: 2,
    company: "AiiLab",
    period: "มิถุนายน 2022 - ธันวาคม 2022",
    title: "นักพัฒนาแอปพลิเคชัน",
    location: "สตูล, ประเทศไทย",
    description:
      "ทำงานในโปรเจค Rental Management และ Smart AI Garbage ซึ่งเป็นแอปพลิเคชันที่ใช้เทคโนโลยีล่าสุด",
    responsibilities: [
      "พัฒนาแอปพลิเคชัน Rental Management สำหรับเจ้าของอสังหาริมทรัพย์",
      "ปรับปรุง UI/UX ตามหลักการออกแบบที่ดี",
      "พัฒนาระบบการชำระเงินออนไลน์",
      "พัฒนาแอปพลิเคชันสำหรับโปรเจค Smart AI Garbage",
    ],
    technologies: [
      "Flutter",
      "Laravel",
      "MySQL",
      "AWS",
      "Python",
      "TensorFlow",
    ],
  },
  {
    id: 3,
    company: "Ai Technovation",
    period: "มกราคม 2022 - พฤษภาคม 2022",
    title: "นักพัฒนา Flutter",
    location: "สตูล, ประเทศไทย",
    description: "พัฒนาแอปพลิเคชันมือถือหลากหลายรูปแบบสำหรับลูกค้าบริษัท",
    responsibilities: [
      "ออกแบบและพัฒนาแอปพลิเคชันมือถือตามความต้องการของลูกค้า",
      "สร้าง UI ที่ทันสมัยและใช้งานง่าย",
      "ปรับปรุงประสิทธิภาพของแอปพลิเคชัน",
      "ดูแลด้านความปลอดภัยของข้อมูล",
    ],
    technologies: ["Flutter", "Firebase", "RESTful API", "Material Design"],
  },
];

function TimelineItem({
  experience,
  index,
}: {
  experience: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={`relative flex items-start ${
        index !== experiences.length - 1 ? "pb-16" : ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Line */}
      {index !== experiences.length - 1 && (
        <div className="absolute top-8 left-6 w-px h-full bg-gray-300 dark:bg-gray-700"></div>
      )}

      {/* Circle */}
      <div className="flex-shrink-0 z-10">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary">
          <FiBriefcase className="text-primary w-5 h-5" />
        </div>
      </div>

      {/* Content */}
      <div className="ml-6">
        <h3 className="text-xl font-heading font-bold mb-1">
          {experience.title}
        </h3>
        <div className="flex items-center mb-1 text-gray-600 dark:text-gray-400">
          <span className="font-medium">{experience.company}</span>
        </div>

        <div className="flex flex-wrap gap-y-2 gap-x-4 mb-3 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center">
            <FiCalendar className="mr-1 w-4 h-4" />
            <span>{experience.period}</span>
          </div>
          <div className="flex items-center">
            <FiMapPin className="mr-1 w-4 h-4" />
            <span>{experience.location}</span>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {experience.description}
        </p>

        <div className="mb-4">
          <h4 className="text-sm font-medium mb-2">ความรับผิดชอบ:</h4>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 text-sm space-y-1">
            {experience.responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">ประสบการณ์ของผม</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            ประสบการณ์การทำงานที่ผ่านมาในสายงานพัฒนาซอฟต์แวร์
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
