"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  FiExternalLink,
  FiGithub,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

// ข้อมูลโปรเจค
const projects = [
  {
    id: 1,
    title: "IoT App for Smart Bus",
    description:
      "แอปพลิเคชันสำหรับติดตามรถบัสอัจฉริยะและแสดงข้อมูลแบบเรียลไทม์ เป็นโปรเจคปริญญาตรี",
    image: "/project1.jpg", // สมมติว่ามี
    tech: ["Flutter", "Firebase", "Arduino", "MQTT"],
    role: "นักพัฒนาแอปพลิเคชัน",
    contribution:
      "ออกแบบและพัฒนาแอปพลิเคชันมือถือ, จัดการระบบฐานข้อมูล, เชื่อมต่อกับอุปกรณ์ IoT",
    features: [
      "การติดตามรถบัสแบบเรียลไทม์",
      "การแจ้งเตือนเมื่อรถบัสเข้าใกล้",
      "แดชบอร์ดแสดงสถิติ",
    ],
    impact: "ช่วยเพิ่มความสะดวกในการใช้บริการรถบัสในมหาวิทยาลัย",
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    id: 2,
    title: "Chat App with ManaLab",
    description:
      "แอปพลิเคชันแชทที่มีคุณสมบัติหลากหลาย เช่น การส่งข้อความแบบเรียลไทม์ การแชร์ไฟล์ และการสร้างกลุ่ม",
    image: "/project2.jpg", // สมมติว่ามี
    tech: ["Flutter", "Firebase", "Node.js", "WebSocket"],
    role: "นักพัฒนา Flutter",
    contribution:
      "พัฒนาส่วนติดต่อผู้ใช้, จัดการระบบการแจ้งเตือน, ทำงานร่วมกับทีม backend",
    features: [
      "การแชทแบบเรียลไทม์",
      "การส่งไฟล์และรูปภาพ",
      "การสร้างกลุ่มและห้องแชท",
    ],
    impact: "เพิ่มประสิทธิภาพการสื่อสารภายในองค์กร",
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    id: 3,
    title: "Rental Management Project",
    description:
      "แพลตฟอร์มบริหารจัดการการเช่าที่ให้เจ้าของอสังหาริมทรัพย์จัดการทรัพย์สินได้อย่างมีประสิทธิภาพ",
    image: "/project3.jpg", // สมมติว่ามี
    tech: ["Flutter", "Laravel", "MySQL", "AWS"],
    role: "นักพัฒนาแอปพลิเคชัน",
    contribution:
      "พัฒนาแอปพลิเคชัน, ปรับปรุง UI/UX, จัดการการชำระเงิน, การแจ้งเตือน",
    features: [
      "การจัดการทรัพย์สิน",
      "การชำระเงินออนไลน์",
      "รายงานและการวิเคราะห์",
    ],
    impact:
      "ช่วยให้เจ้าของอสังหาริมทรัพย์จัดการการเช่าได้อย่างมีประสิทธิภาพมากขึ้น",
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    id: 4,
    title: "Smart AI Garbage",
    description:
      "ระบบถังขยะอัจฉริยะที่ใช้ AI เพื่อแยกประเภทขยะและติดตามระดับการเติมเต็มแบบเรียลไทม์",
    image: "/project4.jpg", // สมมติว่ามี
    tech: ["Python", "TensorFlow", "Flutter", "Raspberry Pi"],
    role: "นักพัฒนา IoT & Mobile",
    contribution:
      "พัฒนาแอปพลิเคชันมือถือ, ช่วยในส่วนของการเชื่อมต่อกับอุปกรณ์ IoT",
    features: [
      "การแยกประเภทขยะอัตโนมัติ",
      "การติดตามระดับขยะแบบเรียลไทม์",
      "การแจ้งเตือนเมื่อถังขยะเต็ม",
    ],
    impact: "ช่วยเพิ่มประสิทธิภาพในการจัดการขยะและส่งเสริมการรีไซเคิล",
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    id: 5,
    title: "Mobile Applications",
    description: "พัฒนาแอปพลิเคชันมือถือหลากหลายรูปแบบสำหรับลูกค้าบริษัท",
    image: "/project5.jpg", // สมมติว่ามี
    tech: ["Flutter", "Firebase", "RESTful API", "Material Design"],
    role: "นักพัฒนา Flutter",
    contribution: "ออกแบบและพัฒนาแอปพลิเคชันมือถือตามความต้องการของลูกค้า",
    features: ["UI/UX ที่ทันสมัย", "ประสิทธิภาพสูง", "ความปลอดภัยของข้อมูล"],
    impact: "ช่วยให้ธุรกิจของลูกค้าสามารถเข้าถึงผู้ใช้บนแพลตฟอร์มมือถือได้",
    links: {
      live: "#",
      github: "#",
    },
  },
];

function ProjectCard({
  project,
  isActive,
}: {
  project: (typeof projects)[0];
  isActive: boolean;
}) {
  return (
    <motion.div
      className={`relative rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
        isActive ? "h-auto opacity-100 scale-100" : "h-auto opacity-50 scale-95"
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: isActive ? 1 : 0.5,
        y: 0,
        scale: isActive ? 1 : 0.95,
      }}
      transition={{ duration: 0.5 }}
    >
      {/* สมมติภาพโปรเจค */}
      <div className="relative h-64 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">
          รูปภาพ {project.title}
        </p>
      </div>

      <div className="p-6 bg-white dark:bg-gray-800">
        <h3 className="text-xl font-heading font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
          {project.description}
        </p>

        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                เทคโนโลยีที่ใช้:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                บทบาทของผม:
              </h4>
              <p className="text-sm">{project.role}</p>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                การมีส่วนร่วม:
              </h4>
              <p className="text-sm">{project.contribution}</p>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                คุณสมบัติหลัก:
              </h4>
              <ul className="list-disc pl-5 text-sm">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3 mt-6">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <FiExternalLink className="mr-1" />
                  <span>ดูโปรเจค</span>
                </a>
              )}

              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                >
                  <FiGithub className="mr-1" />
                  <span>โค้ด</span>
                </a>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const nextProject = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">ผลงานของผม</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            ผลงานที่ผมภูมิใจนำเสนอ
            แสดงถึงทักษะและประสบการณ์ในการพัฒนาแอปพลิเคชัน
          </p>
        </motion.div>

        {/* Project Showcase */}
        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-12 z-10 hidden md:block">
            <button
              onClick={prevProject}
              className="p-3 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              aria-label="โปรเจคก่อนหน้า"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
          </div>

          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-12 z-10 hidden md:block">
            <button
              onClick={nextProject}
              className="p-3 rounded-full bg-white dark:bg-gray-700 shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              aria-label="โปรเจคถัดไป"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Current Project */}
          <ProjectCard project={projects[activeProject]} isActive={true} />

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeProject
                    ? "bg-primary scale-125"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
                aria-label={`โปรเจคที่ ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile navigation buttons */}
          <div className="flex justify-between mt-4 md:hidden">
            <button
              onClick={prevProject}
              className="p-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextProject}
              className="p-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
