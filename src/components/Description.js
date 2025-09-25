import React from 'react';
import { motion } from 'framer-motion';

const Description = () => {
  const skills = [
    { name: 'Frontend Development', icon: '💻', description: 'ReactJS, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS' },
    { name: 'Mobile Development', icon: '📱', description: 'Flutter, React Native, Dart, Cross-platform development' },
    { name: 'Backend Development', icon: '⚙️', description: 'Node.js, Express.js, REST APIs, Server-side development' },
    { name: 'Database Management', icon: '🗄️', description: 'MongoDB, Firebase, NoSQL databases, Data modeling' },
    { name: 'Tools & DevOps', icon: '🔧', description: 'Git, GitHub, Postman, Docker, API testing' },
    { name: 'Learning & Growth', icon: '📚', description: 'Full Stack Development, Backend technologies, Continuous learning' }
  ];

  return (
    <section id="description" className="py-20 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What I Do
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I specialize in creating digital solutions that combine beautiful design with robust functionality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-effect rounded-2xl p-8 text-center group cursor-pointer"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-primary-400 transition-colors duration-300">
                {skill.name}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">
              My Approach
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              I believe in creating solutions that not only meet requirements but exceed expectations. 
              My process involves understanding user needs, designing intuitive interfaces, and building 
              scalable applications that stand the test of time. I'm passionate about clean code, 
              user experience, and continuous learning.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Description;
