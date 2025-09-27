import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Smart Cafeteria & Food Ordering System',
      company: 'Gokhana Pvt Ltd',
      duration: 'June 2025 – Present',
      description: 'Developed a cross-platform food ordering and cafeteria management system using Flutter & Dart. Implemented alerts for critical events such as device failures and status changes. Integrated reporting features to help fleet managers monitor and optimize operations.',
      techStack: ['ReactJS', 'Context API', 'HTML', 'CSS', 'JavaScript', 'Flutter', 'Dart', 'REST APIs'],
      category: 'Food Tech',
      status: 'In Progress',
      statusColor: 'text-yellow-400'
    },
    {
      title: 'Track and Trace Vehicle Management System',
      company: 'Nexus Tech Innovations Pvt Ltd',
      duration: 'Oct 2023 – April 2025',
      description: 'Developed a Flutter-based web app for real-time fleet tracking, including vehicle speed, location, and driver work hours. Implemented alerts for critical events such as device failures and status changes. Integrated reporting features to help fleet managers monitor and optimize operations.',
      techStack: ['Flutter', 'Dart', 'REST APIs'],
      category: 'Fleet Management',
      status: 'Completed',
      statusColor: 'text-green-400'
    },
    {
      title: 'Dashubhashitam - Telugu Audio Book',
      company: 'Bhavitha Tech Solutions Pvt Ltd',
      duration: 'May 2023 – Oct 2023',
      description: 'Created a cross-platform music app using FlutterFlow with Firebase integration. Utilized FlutterFlow\'s UI builder for rapid prototyping and design consistency. Ensured full compatibility across iOS, Android, and web platforms.',
      techStack: ['FlutterFlow', 'Firebase', 'NodeJS', 'Express', 'MongoDB'],
      category: 'Media & Entertainment',
      status: 'Completed',
      statusColor: 'text-green-400'
    },
    {
      title: 'Temperature Pressure Management System',
      company: 'Altorum Leren Pvt Ltd',
      duration: '2021 – Mar 2023',
      description: 'Developed a real-time UI to monitor and alert based on temperature and pressure thresholds of train wheels. Implemented device settings and warning mechanisms within a web app for Mumbai Monorail IoT Project.',
      techStack: ['Flutter', 'Firebase', 'Express', 'NodeJS', 'MongoDB'],
      category: 'IoT & Monitoring',
      status: 'Completed',
      statusColor: 'text-green-400'
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Food Tech': 'from-orange-500 to-red-500',
      'Fleet Management': 'from-blue-500 to-cyan-500',
      'Media & Entertainment': 'from-purple-500 to-pink-500',
      'IoT & Monitoring': 'from-green-500 to-emerald-500'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  return (
    <section id="projects" className="py-20 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Flutter & Full Stack Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional Flutter mobile apps and full-stack web applications across food tech, fleet management, IoT, and media industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-effect rounded-2xl p-8 group cursor-pointer"
            >
              {/* Project Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${project.statusColor} bg-white/10`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-primary-300 font-medium mb-1">{project.company}</p>
                  <p className="text-gray-500 text-sm">{project.duration}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getCategoryColor(project.category)} mt-2 sm:mt-0`}>
                  {project.category}
                </div>
              </div>

              {/* Project Description */}
              <p className="text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div>
                <h4 className="text-sm font-semibold text-gray-300 mb-3">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm font-medium hover:bg-primary-500/20 hover:text-primary-300 transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Project Stats */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>Duration: {project.duration}</span>
                  <span className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                    <span>{project.status}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              Project Impact & Scope
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">4+</div>
                <div className="text-gray-300">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">4</div>
                <div className="text-gray-300">Different Industries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">3+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
            <p className="text-gray-300 mt-6 leading-relaxed">
              These projects demonstrate my expertise in cross-platform development, real-time systems, 
              IoT integration, and full-stack solutions across diverse industries including food tech, 
              fleet management, media, and transportation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
