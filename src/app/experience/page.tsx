"use client";

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { calsans } from '@/fonts';
import { twMerge } from 'tailwind-merge';

export default function Experience() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Navbar */}
      <div className="w-full absolute top-0">
        <Navbar />
      </div>
      
      <div className="pt-28 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center mb-6">
          <Link href="/" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            <FaArrowLeft className="mr-2" />
            <span>Back to Home</span>
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500 bg-clip-text text-transparent mb-8">
          Professional Experience
        </h1>
        
        <TracingBeam className="px-4">
          <div className="max-w-2xl mx-auto antialiased pt-4 relative">
            {experienceData.map((item, index) => (
              <div key={`experience-${index}`} className="mb-16">
                <h2 className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                  {item.period}
                </h2>

                <p className={twMerge(calsans.className, "text-2xl text-white mb-4")}>
                  {item.title} @ {item.company}
                </p>

                <div className="text-sm prose prose-sm dark:prose-invert">
                  <div className="space-y-3 text-gray-300">
                    {item.description.map((desc, i) => (
                      <p key={i}>{desc}</p>
                    ))}
                  </div>
                  
                  {item.technologies && (
                    <div className="mt-4">
                      <h3 className="text-sm font-semibold text-blue-400 mb-2">Technologies Used:</h3>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, i) => (
                          <span key={i} className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {/* Community and Meetups Section */}
            <div className="pt-16 pb-8">
              <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-400 to-red-500 bg-clip-text text-transparent mb-8">
                Communities & Meetups
              </h1>
              
              {communityData.map((item, index) => (
                <div key={`community-${index}`} className="mb-16">
                  <h2 className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                    {item.period}
                  </h2>

                  <p className={twMerge(calsans.className, "text-2xl text-white mb-4")}>
                    {item.role} @ {item.organization}
                  </p>

                  <div className="text-sm prose prose-sm dark:prose-invert">
                    <div className="space-y-3 text-gray-300">
                      {item.contribution.map((contrib, i) => (
                        <p key={i}>{contrib}</p>
                      ))}
                    </div>
                    
                    {item.topics && (
                      <div className="mt-4">
                        <h3 className="text-sm font-semibold text-pink-400 mb-2">Focus Areas:</h3>
                        <div className="flex flex-wrap gap-2">
                          {item.topics.map((topic, i) => (
                            <span key={i} className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300">
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {/* Footer section to ensure no white space */}
              <div className="pt-12 pb-24 text-center">
                <div className="w-full max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>
                <p className="text-gray-500 text-sm mb-3">Thanks for viewing my experience journey</p>
                <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                  Return to home
                </Link>
              </div>
            </div>
          </div>
        </TracingBeam>
      </div>
      
      {/* Extended background to ensure full coverage */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-black"></div>
      
      {/* Code Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-5 overflow-hidden z-0">
        <pre className="text-xs sm:text-sm md:text-base text-blue-500 font-mono p-4 overflow-hidden">
          {`
// Career Progression
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Career() {
  const [experience, setExperience] = useState([]);
  
  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await fetch('/api/experience');
        const result = await response.json();
        setExperience(result);
      } catch (error) {
        console.error("Error fetching experience", error);
      }
    };
    
    fetchExperience();
  }, []);
  
  return (
    <div className="container">
      <h1>Professional Journey</h1>
      {experience.map(job => (
        <motion.div
          key={job.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {job.title} @ {job.company}
        </motion.div>
      ))}
    </div>
  );
}
          `}
        </pre>
      </div>
    </div>
  );
}

const experienceData = [
  {
    period: "2025 - Present",
    title: "Backend Engineer",
    company: "Yarasi Tech",
    description: [
      "Led development of a high-performance financial dashboard that processes over 1 million transactions daily, improving client reporting efficiency by 35%.",
      "Architected and implemented a microservices infrastructure that reduced system downtime by 75% and improved scalability for peak usage periods.",
      "Mentored a team of 5 junior developers, implementing code review processes and best practices that improved code quality metrics by 40%.",
      "Collaborated with product and design teams to create intuitive user interfaces that increased customer satisfaction scores from 72% to 91%."
    ],
    technologies: ["React", "Node.js", "AWS", "GraphQL", "Docker", "MongoDB", "TypeScript"]
  },
  {
    period: "2018 - 2021",
    title: "Backend Developer",
    company: "DataFlow Systems",
    description: [
      "Developed and maintained RESTful APIs that processed over 500,000 requests daily with 99.9% uptime.",
      "Implemented automated testing infrastructure that reduced bugs in production by 60% and deployment time by 45%.",
      "Optimized database queries that improved application response time by 78%, significantly enhancing user experience.",
      "Integrated third-party services and payment gateways that expanded platform functionality and increased revenue by 28%."
    ],
    technologies: ["Python", "Django", "PostgreSQL", "Redis", "AWS", "Docker", "Celery"]
  },
  {
    period: "2016 - 2018",
    title: "Frontend Developer",
    company: "WebVision Creative",
    description: [
      "Developed responsive web applications that increased mobile user engagement by 45% and reduced bounce rate by 30%.",
      "Created and maintained a component library that accelerated development time for new features by 60%.",
      "Collaborated with UX designers to implement accessibility improvements that brought the platform to WCAG 2.1 AA compliance.",
      "Utilized performance optimization techniques that improved page load speeds by 35% and Google Lighthouse scores from 65 to 92."
    ],
    technologies: ["JavaScript", "React", "Redux", "SASS", "Webpack", "Jest", "Figma"]
  },
  {
    period: "2014 - 2016",
    title: "Junior Software Engineer",
    company: "Global Tech Solutions",
    description: [
      "Contributed to the development of an e-commerce platform serving 10,000+ daily active users.",
      "Implemented payment processing systems that reduced checkout abandonment by 25%.",
      "Fixed critical bugs and performance issues that improved application stability by 40%.",
      "Participated in agile development processes, consistently meeting sprint goals and delivery timelines."
    ],
    technologies: ["PHP", "Laravel", "MySQL", "jQuery", "Git", "Bootstrap", "REST APIs"]
  }
];

// Community and Meetup data
const communityData = [
  {
    period: "2022 - Present",
    role: "Organizer",
    organization: "LocalTech Meetup",
    contribution: [
      "Founded and grew a local developer meetup from 15 to 150+ active members over 18 months.",
      "Organized and hosted 24 technical workshops and networking events with industry speakers.",
      "Created a mentorship program connecting junior developers with senior engineers that resulted in 12 job placements.",
      "Developed partnerships with 8 local companies to provide sponsorship and event spaces."
    ],
    topics: ["Community Building", "Technical Workshops", "Networking", "Developer Education"]
  },
  {
    period: "2020 - Present",
    role: "Open Source Contributor",
    organization: "Web Developer Community",
    contribution: [
      "Contributed 30+ merged pull requests to popular open source projects in the JavaScript ecosystem.",
      "Created and maintained documentation that improved onboarding experience for new contributors.",
      "Spoke at 6 community conferences about best practices in front-end development and testing.",
      "Mentored 12 first-time contributors through their initial open source contributions."
    ],
    topics: ["Open Source", "Documentation", "JavaScript", "Testing", "Mentorship"]
  },
  {
    period: "2019 - 2021",
    role: "Hackathon Mentor",
    organization: "Tech for Good Initiative",
    contribution: [
      "Mentored 15+ teams during 8 social impact hackathons focused on solving local community challenges.",
      "Provided technical guidance and code reviews for projects addressing accessibility, education, and environmental issues.",
      "Led workshops on rapid prototyping and MVP development for non-technical participants.",
      "Helped three teams advance their hackathon projects into funded startups."
    ],
    topics: ["Hackathons", "Social Impact", "Rapid Prototyping", "Technical Mentorship"]
  },
  {
    period: "2017 - 2019",
    role: "Workshop Facilitator",
    organization: "Code Education Nonprofit",
    contribution: [
      "Taught programming fundamentals to 200+ underrepresented students in free weekend workshops.",
      "Developed curriculum materials for Python and web development bootcamps.",
      "Created a peer learning system that increased student completion rates by 35%.",
      "Organized a career day that connected students with local companies, resulting in 15 internship placements."
    ],
    topics: ["Education", "Python", "Web Development", "Diversity in Tech", "Curriculum Development"]
  }
]; 