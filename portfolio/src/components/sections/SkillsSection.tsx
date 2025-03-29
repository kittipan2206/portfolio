"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiSmartphone,
  FiMonitor,
  FiServer,
  FiCpu,
  FiDatabase,
  FiTool,
} from "react-icons/fi";

// ข้อมูลทักษะ
const skillCategories = [
  {
    name: "การพัฒนามือถือ",
    icon: <FiSmartphone className="w-6 h-6" />,
    skills: [
      { name: "Flutter Framework", level: 90 },
      { name: "Dart", level: 85 },
      { name: "UI/UX Design", level: 75 },
      { name: "Mobile Architecture", level: 70 },
    ],
  },
  {
    name: "การพัฒนาเว็บ",
    icon: <FiMonitor className="w-6 h-6" />,
    skills: [
      { name: "HTML/CSS", level: 75 },
      { name: "JavaScript", level: 70 },
      { name: "Responsive Design", level: 80 },
    ],
  },
  {
    name: "แบ็คเอนด์",
    icon: <FiServer className="w-6 h-6" />,
    skills: [
      { name: "Python (Flask)", level: 65 },
      { name: "RESTful API", level: 75 },
      { name: "Firebase", level: 80 },
    ],
  },
  {
    name: "IoT & AI",
    icon: <FiCpu className="w-6 h-6" />,
    skills: [
      { name: "Machine Learning", level: 60 },
      { name: "Deep Learning", level: 55 },
      { name: "IoT Protocols", level: 70 },
    ],
  },
  {
    name: "ฐานข้อมูล",
    icon: <FiDatabase className="w-6 h-6" />,
    skills: [
      { name: "Firebase Realtime DB", level: 85 },
      { name: "SQLite", level: 70 },
      { name: "MongoDB", level: 65 },
    ],
  },
  {
    name: "เครื่องมือ",
    icon: <FiTool className="w-6 h-6" />,
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "CI/CD (Codemagic)", level: 70 },
      { name: "VS Code", level: 85 },
    ],
  },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {level}%
        </span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-secondary"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function SkillCard({
  category,
  index,
}: {
  category: (typeof skillCategories)[0];
  index: number;
}) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex items-center mb-4">
        <div className="p-2 rounded-md bg-primary/10 text-primary mr-3">
          {category.icon}
        </div>
        <h3 className="text-lg font-heading font-bold">{category.name}</h3>
      </div>

      <div className="mt-4">
        {category.skills.map((skill, idx) => (
          <SkillBar key={idx} name={skill.name} level={skill.level} />
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">ทักษะของผม</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            ทักษะทางเทคนิคที่ผมได้พัฒนาและใช้งานในโปรเจคต่างๆ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
