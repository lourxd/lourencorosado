import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaReact, 
  FaGoogle, 
  FaAppStore, 
  FaDatabase,
  FaAws
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiFirebase, 
  SiPrisma, 
  SiMysql,
  SiTypescript,
  SiTailwindcss
} from 'react-icons/si';
import { DiLinux } from 'react-icons/di';

const iconColors = {
  React: "#61DAFB",
  "Next.js": "#000000",
  "Google Cloud": "#4285F4",
  "App Store": "#A2AAAD",
  Firebase: "#FFCA28",
  Prisma: "#2D3748",
  MySQL: "#4479A1",
  Linux: "#FCC624",
  Databases: "#00758F",
  AWS: "#FF9900",
  TypeScript: "#3178C6",
  Tailwind: "#06B6D4"
};

const StaticIcon = ({ Icon, name, onClick, position }) => (
  <motion.div
    className="absolute cursor-pointer"
    style={{
      ...position,
      opacity: 0.4,
    }}
    whileHover={{ scale: 1.2, opacity: 1 }}
    onClick={() => onClick(name)}
  >
    <Icon style={{ color: iconColors[name] || "white", fontSize: '1.5rem' }} />
  </motion.div>
);

const InfoBox = ({ name, experience, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md text-white p-4 rounded-lg shadow-lg z-20 max-w-md w-full"
  >
    <h3 className="text-lg font-bold mb-2">{name}</h3>
    <p className="text-sm">{experience}</p>
    <button
      onClick={onClose}
      className="absolute top-2 right-2 text-gray-300 hover:text-white"
    >
      ✕
    </button>
  </motion.div>
);

const AnimatedBackground = () => (
  <motion.div
    className="absolute inset-0 z-0"
    animate={{
      background: [
        'linear-gradient(45deg, #1a0a2e, #0d0d2c)',
        'linear-gradient(45deg, #2c0d3e, #1a0a2e)',
        'linear-gradient(45deg, #3e0d2c, #2c0d3e)',
        'linear-gradient(45deg, #2c0d1a, #3e0d2c)',
        'linear-gradient(45deg, #1a0a2e, #0d0d2c)',
      ],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      repeatType: 'reverse',
    }}
  />
);

const HeroSection = () => {
  const [selectedTech, setSelectedTech] = useState(null);

  const icons = useMemo(() => [
    { Icon: FaReact, name: 'React', experience: 'Advanced: 5+ years of experience in building complex web applications.' },
    { Icon: SiNextdotjs, name: 'Next.js', experience: 'Intermediate: 3 years of experience in server-side rendering and static site generation.' },
    { Icon: FaGoogle, name: 'Google Cloud', experience: 'Intermediate: Familiar with GCP services for 2 years, including App Engine and Cloud Functions.' },
    { Icon: FaAppStore, name: 'App Store', experience: 'Advanced: Published multiple iOS apps over the last 4 years.' },
    { Icon: SiFirebase, name: 'Firebase', experience: 'Advanced: Extensive use in real-time databases and authentication for 4+ years.' },
    { Icon: SiPrisma, name: 'Prisma', experience: 'Intermediate: 2 years of experience in database ORM and migrations.' },
    { Icon: SiMysql, name: 'MySQL', experience: 'Advanced: 6+ years of experience in database design and optimization.' },
    { Icon: DiLinux, name: 'Linux', experience: 'Intermediate: 4 years of experience in server management and bash scripting.' },
    { Icon: FaDatabase, name: 'Databases', experience: 'Advanced: Proficient in various database systems including NoSQL for 7+ years.' },
    { Icon: FaAws, name: 'AWS', experience: 'Intermediate: 3 years of experience with various AWS services.' },
    { Icon: SiTypescript, name: 'TypeScript', experience: 'Advanced: 4+ years of experience in large-scale TypeScript projects.' },
    { Icon: SiTailwindcss, name: 'Tailwind', experience: 'Advanced: 3+ years of using Tailwind CSS for rapid UI development.' },
  ], []);

  const handleIconClick = (name) => {
    setSelectedTech(name);
  };

  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
      <AnimatedBackground />
      <div className="z-10 text-center mb-12">
        <motion.h1 
          className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-4 text-white"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Lourenço Rosado
        </motion.h1>
        <motion.p 
          className="text-xl sm:text-2xl lg:text-3xl text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Software Developer
        </motion.p>
      </div>
      {icons.map((IconComponent, index) => (
        <StaticIcon
          key={IconComponent.name}
          Icon={IconComponent.Icon}
          name={IconComponent.name}
          onClick={handleIconClick}
          position={{
            top: `${15 + Math.random() * 70}%`,
            left: `${5 + Math.random() * 90}%`,
          }}
        />
      ))}
      <AnimatePresence>
        {selectedTech && (
          <InfoBox
            name={selectedTech}
            experience={icons.find(icon => icon.name === selectedTech).experience}
            onClose={() => setSelectedTech(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;