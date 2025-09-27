import React from 'react';
import { motion } from 'framer-motion';

const TechnicalSkills = () => {
  const skillCategories = [
    {
      title: 'Front-End',
      skills: ['ReactJS', 'Flutter', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
      color: 'from-blue-500 to-cyan-500',
      icon: '💻'
    },
    {
      title: 'Back-End (Learning)',
      skills: ['Node.js', 'Express', 'MongoDB', 'Firebase'],
      color: 'from-green-500 to-emerald-500',
      icon: '⚙️'
    },
    {
      title: 'Tools & DevOps',
      skills: ['Git', 'GitHub', 'REST APIs', 'Postman', 'Docker'],
      color: 'from-purple-500 to-pink-500',
      icon: '🔧'
    }
  ];

  const certifications = [
    {
      title: 'Backend Development with Node.js',
      provider: 'Coursera',
      status: 'In Progress',
      statusColor: 'text-yellow-400'
    },
    {
      title: 'MongoDB for Developers',
      provider: 'MongoDB University',
      status: 'Completed Sep 2025',
      statusColor: 'text-green-400'
    }
  ];

  return (
    <section id="technical-skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical Skills - Flutter, ReactJS & Full Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expertise in Flutter cross-platform development, ReactJS frontend, and expanding into Node.js backend technologies
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-effect rounded-2xl p-8 group cursor-pointer"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className={`px-3 py-1 bg-gradient-to-r ${category.color} text-white rounded-full text-sm font-medium shadow-lg`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Certifications & Learning
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-xl p-6 border border-white/10"
              >
                <h4 className="text-lg font-semibold text-white mb-2">
                  {cert.title}
                </h4>
                <p className="text-gray-400 mb-3">{cert.provider}</p>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                  <span className={`text-sm font-medium ${cert.statusColor}`}>
                    {cert.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Journey */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              My Learning Journey
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              With 4+ years of frontend experience, I'm now expanding my expertise into full-stack development. 
              I'm actively learning backend technologies like Node.js, Express, and MongoDB to become a proficient 
              Full Stack Developer. My goal is to build complete end-to-end applications that deliver exceptional 
              user experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
