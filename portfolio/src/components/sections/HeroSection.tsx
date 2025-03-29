"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { Canvas } from "@react-three/fiber";
import { Float, PresentationControls } from "@react-three/drei";

// คอมโพเนนต์ 3D Model
function MobileDevice(props: {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}) {
  // สมมติว่าเรามีโมเดลของมือถือ (ในที่นี้ใช้ box แทน)
  return (
    <mesh {...props} castShadow receiveShadow>
      <boxGeometry args={[0.6, 1.2, 0.1]} />
      <meshStandardMaterial color="#333333" />
      <mesh position={[0, 0, 0.051]}>
        <planeGeometry args={[0.55, 1.1]} />
        <meshBasicMaterial color="#4285F4" />
      </mesh>
    </mesh>
  );
}

// คอมโพเนนต์ Particle Background
function ParticleBackground() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particlesRef.current) return;

    const particles: HTMLDivElement[] = [];
    const container = particlesRef.current;
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className =
        "absolute rounded-full bg-primary/20 dark:bg-primary/30";

      // สุ่มขนาดและตำแหน่ง
      const size = Math.random() * 10 + 5;
      const x = Math.random() * width;
      const y = Math.random() * height;

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;

      // สุ่มแอนิเมชัน
      const duration = Math.random() * 20 + 10;
      particle.style.animation = `float ${duration}s ease-in-out infinite`;
      particle.style.animationDelay = `${Math.random() * 10}s`;

      container.appendChild(particle);
      particles.push(particle);
    }

    return () => {
      particles.forEach((particle) => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      });
    };
  }, []);

  return (
    <div
      ref={particlesRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    />
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* พื้นหลังและอนุภาค */}
      <div className="absolute inset-0 bg-gradient-to-br from-light to-gray-100 dark:from-dark dark:to-gray-900 -z-10" />
      <ParticleBackground />

      <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* ข้อความทางซ้าย */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
              <span className="block">สวัสดีครับ 👋</span>
              <span className="block mt-2">
                ผมชื่อ <span className="text-primary">กิตติพันธ์</span>
              </span>
            </h1>
          </motion.div>

          <motion.h2
            className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            นักพัฒนาแอปพลิเคชันมือถือและเว็บไซต์
          </motion.h2>

          <motion.p
            className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            สร้างสรรค์แอปพลิเคชันมือถือและเว็บโซลูชั่นที่มีนวัตกรรม
            ด้วยประสบการณ์ด้าน Flutter, Web Development และ IoT
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a href="#projects" className="btn btn-primary">
              ดูผลงานของผม
            </a>
            <a href="#contact" className="btn btn-outline">
              ติดต่อผม
            </a>
          </motion.div>

          <motion.div
            className="flex gap-4 mt-8 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="mailto:sk.kittipan@gmail.com"
              className="social-icon"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* 3D Object ทางขวา */}
        <motion.div
          className="flex-1 h-[300px] md:h-[400px] lg:h-[500px] w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Canvas>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <PresentationControls
              global
              rotation={[0.13, 0.1, 0]}
              polar={[-0.4, 0.2]}
              azimuth={[-1, 0.75]}
            >
              <Float rotationIntensity={0.4}>
                <MobileDevice position={[0, 0, 0]} rotation={[0, 0, 0]} />
              </Float>
            </PresentationControls>
          </Canvas>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            Scroll Down
          </span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-gray-400 rounded-full mt-2"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
