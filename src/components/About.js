import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const experiences = [
    {
      year: 'June 2025 - Present',
      title: 'Flutter Developer',
      company: 'Gokhana',
      location: 'Bangalore',
      description: 'Implemented features for menu browsing, order placement, digital payments, and live order tracking. Integrated real-time notifications, offers, and alerts to enhance user engagement. Worked on push notifications, payment gateway integration, and offline functionality. Implemented state management (BLoC/Provider) ensuring scalable and maintainable architecture.'
    },
    {
      year: 'Oct 2023 - Apr 2025',
      title: 'Senior Software Developer',
      company: 'NexusTech Innovations Private Limited',
      location: 'Bangalore',
      description: 'Developed and maintained a real-time vehicle tracking and fleet management system using Flutter and Dart. Implemented features for GPS tracking, odometer reading, and status monitoring (running, idle, stopped). Integrated real-time notifications and alert systems for device faults and new installations. Collaborated with back-end teams to create efficient APIs and generate analytics-driven reports.'
    },
    {
      year: 'May 2023 - Oct 2023',
      title: 'Software Developer',
      company: 'Bhavitha Tech Solution Private Limited',
      location: 'Bangalore',
      description: 'Built a cross-platform music streaming application using FlutterFlow integrated with Firebase. Designed intuitive and responsive user interfaces through a drag-and-drop UI builder. Ensured seamless deployment across Android, iOS, and web platforms. Focused on rapid prototyping and MVP delivery using low-code development practices.'
    },
    {
      year: 'Jan 2021 - Mar 2023',
      title: 'Software Engineer',
      company: 'Altorumleren Private Limited',
      location: 'Bangalore',
      description: 'Developed Flutter-based interfaces for salary tracking and reminder notifications. Enabled real-time admin alerts for pending user balances using Bloc and Provider state management. Enhanced communication flows between the company and users regarding salary disbursement.'
    }
  ];

  const achievements = [
    '4+ years of experience in Flutter and cross-platform mobile development',
    'Built real-time vehicle tracking and fleet management systems',
    'Developed food delivery and music streaming applications',
    'Expertise in state management (BLoC/Provider) and Firebase integration',
    'Currently learning Node.js and MongoDB for full-stack development'
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me - Flutter & Full Stack Developer
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate Flutter Developer with expertise in cross-platform mobile development and full-stack solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">My Story</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate Flutter Developer with 4+ years of experience in cross-platform mobile development, 
                currently expanding into full stack development with Node.js, Express, and MongoDB. 
                My journey began with curiosity about mobile app development, and it has evolved into a career 
                focused on building scalable and user-centered mobile applications across various industries.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I have extensive experience in building real-time applications, payment integrations, and complex 
                state management solutions. I'm actively working on backend technologies to become a proficient 
                Full Stack Developer. When I'm not coding, you can find me learning new technologies, working on 
                personal projects, or contributing to the developer community.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full blur-2xl opacity-30"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-primary-400 to-purple-500 rounded-full flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect rounded-xl p-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                    <span className="text-primary-400 text-sm font-medium">{exp.year}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <p className="text-primary-300 font-medium">{exp.company}</p>
                    <p className="text-gray-500 text-sm">{exp.location}</p>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Key Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 glass-effect rounded-lg p-4"
                >
                  <div className="w-2 h-2 bg-primary-400 rounded-full flex-shrink-0"></div>
                  <p className="text-gray-300">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
