"use client";

import Navbar from '@/components/Navbar';
import NavigationLink from '@/components/NavigationLink';
import { FaArrowLeft } from 'react-icons/fa';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { calsans } from '@/fonts';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

export default function Experience() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Navbar */}
      <div className="w-full absolute top-0">
        <Navbar />
      </div>
      
      <div className="pt-28 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center mb-6">
          <NavigationLink href="/" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            <FaArrowLeft className="mr-2" />
            <span>Back to Home</span>
          </NavigationLink>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500 bg-clip-text text-transparent mb-6 md:mb-8">
          Professional Experience
        </h1>
        
        <TracingBeam className="px-2 sm:px-4">
          <div className="max-w-2xl mx-auto antialiased pt-2 sm:pt-4 relative">
            {experienceData.map((item, index) => (
              <div key={`experience-${index}`} className="mb-12 sm:mb-16">
                <h2 className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full text-xs sm:text-sm w-fit px-3 sm:px-4 py-1 mb-3 sm:mb-4">
                  {item.period}
                </h2>

                <p className={twMerge(calsans.className, "text-xl sm:text-2xl text-white mb-3 sm:mb-4")}>
                  {item.title} @ {item.company}
                </p>

                <div className="text-sm prose prose-sm dark:prose-invert">
                  <div className="space-y-2 sm:space-y-3 text-gray-300">
                    {item.description.map((desc, i) => (
                      <p key={i}>{desc}</p>
                    ))}
                  </div>
                  
                  {item.technologies && (
                    <div className="mt-3 sm:mt-4">
                      <h3 className="text-xs sm:text-sm font-semibold text-blue-400 mb-2">Technologies Used:</h3>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
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
            <div className="pt-12 sm:pt-16 pb-6 sm:pb-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-400 to-red-500 bg-clip-text text-transparent mb-6 sm:mb-8">
                Communities & Meetups
              </h1>
              
              {communityData.map((item, index) => (
                <div key={`community-${index}`} className="mb-12 sm:mb-16">
                  <h2 className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full text-xs sm:text-sm w-fit px-3 sm:px-4 py-1 mb-3 sm:mb-4">
                    {item.period}
                  </h2>

                  <p className={twMerge(calsans.className, "text-xl sm:text-2xl text-white mb-3 sm:mb-4")}>
                    {item.role} @ {item.organization}
                  </p>
                  
                  {/* Image container */}
                  {item.image && (
                    <div className="mb-4 sm:mb-6 rounded-xl overflow-hidden">
                      <Image 
                        src={item.image} 
                        alt={`${item.organization} visual`} 
                        width={600} 
                        height={340}
                        className="w-full object-cover rounded-xl hover:scale-105 transition-transform duration-500 ease-in-out"
                      />
                    </div>
                  )}

                  <div className="text-sm prose prose-sm dark:prose-invert">
                    <div className="space-y-2 sm:space-y-3 text-gray-300">
                      {item.contribution.map((contrib, i) => (
                        <p key={i}>{contrib}</p>
                      ))}
                    </div>
                    
                    {item.topics && (
                      <div className="mt-3 sm:mt-4">
                        <h3 className="text-xs sm:text-sm font-semibold text-pink-400 mb-2">Focus Areas:</h3>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
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
                <NavigationLink href="/" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                  Return to home
                </NavigationLink>
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
    "description": [
      "Built and deployed the infrastructure for a scalable API service from scratch, ensuring high availability and modular design.",
      "Collaborated with the team to design and implement scalable APIs using Django and GraphQL, optimizing performance and maintainability.",
      "Led efforts to enhance application security through containerization and Docker best practices, along with enforcing secure API patterns.",
      "Performed large-scale web scraping using Selenium and BeautifulSoup to collect and process high-volume data efficiently for analytics."
    ],
    technologies: ["Django","GraphQL","Docker","AWS","System Design","Selenium","BeautifulSoup","Web Scraping"]
      
  },
  {
    "period": "2025 - present",
    "title": "Individual Member",
    "company": "Django Software Foundation",
    "description": [
      "Selected as an individual member of the Django Software Foundation by the board in recognition of contributions to the Django ecosystem."
    ],
    "technologies": ["Django", "Open Source", "Community Involvement"]
  },
  {
    "period": "2024 - Present",
    "title": "Open Source Developer",
    "company": "Django Software Foundation",
    "description": [
      "Contributed to the core source code of the Django framework, which powers major platforms like Instagram, Spotify, and Pinterest.",
      "Worked on key areas including Django's async testing framework, file storage system, docstrings, and official documentation.",
      "Recognized and nominated as an individual member of the Django Software Foundation for impactful open-source contributions.",
      "Selected as a mentee in the prestigious Djangonaut Space program to further contribute to Django under mentorship from core contributors."
    ],
    "technologies": ["Python", "Django", "AsyncIO", "Testing Frameworks", "Documentation", "Open Source"]
  },
//   {
//     period: "2024 - 2025",
//     title: "Freelance Developer",
//     company: "Global Tech Solutions",
//     description: [
//       "Contributed to the development of an e-commerce platform serving 10,000+ daily active users.",
//       "Implemented payment processing systems that reduced checkout abandonment by 25%.",
//       "Fixed critical bugs and performance issues that improved application stability by 40%.",
//       "Participated in agile development processes, consistently meeting sprint goals and delivery timelines."
//     ],
//     technologies: ["PHP", "Laravel", "MySQL", "jQuery", "Git", "Bootstrap", "REST APIs"]
//   }
];

// Community and Meetup data
const communityData = [
    {
        "period": "2025",
        "role": "Speaker",
        "organization": "PyCon Italia",
        "contribution": [
          "Selected to speak at PyCon Italia 2025 in Bologna, Italy.",
          "Delivering a talk on how Celery can be used to build better infrastructure designs in Django and other Python web frameworks by offloading CPU-intensive background tasks like scraping, ML processing, or bulk emailing.",
          "The session covers Celery's architecture, message brokers (like Redis), and Python's concurrency models including multiprocessing, threading, eventlet, and gevent, with live demos to help developers understand real-time asynchronous processing."
        ],
        "topics": ["Celery", "Django", "Concurrency", "Infrastructure Design", "Python"],
        "image": "/community/pycon.png" // Update this with the actual path or URL if needed
      },
    {
        "period": "2022 - Present",
        "role": "Organizer",
        "organization": "DjangoIndia",
        "contribution": [
          "Helped organize and conduct multiple Django meetups across India to promote Django adoption and awareness.",
          "Coordinated with speakers, venues, and sponsors to ensure smooth execution of events and workshops.",
          "Facilitated community engagement through talks, Q&A sessions, and mentorship for aspiring Django developers."
        ],
        "topics": ["Community Building", "Event Coordination", "Mentorship", "Open Source Advocacy"],
        "image": "/community/django_india.jpeg" // Local image path
    },
    {
        "period": "Oct 2024 – Dec 2024",
        "role": "Fellow",
        "organization": "Djangonaut Space Program",
        "contribution": [
          "Selected as one of 14 global participants in the prestigious Djangonaut Space program by the Django Software Foundation.",
          "Collaborated with Team Saturn on contributions to the Django Core project under the guidance of experienced mentors."
        ],
        "topics": ["Django", "Open Source", "Mentorship", "Core Contributions"],
        "image": "/community/djnaut.png" // Update path as needed
    },
    {
        "period": "2024 - 2025",
        "role": "Speaker",
        "organization": "FOSS United & DjangoIndia Meetups",
        "contribution": [
          "Passionate about sharing knowledge and giving talks based on my daily learning and open-source experiences.",
          "Delivered sessions at FOSS United Delhi Meetup and DjangoIndia Meetup at IIIT Lucknow on Django and developer workflows."
        ],
        "topics": ["Community Engagement", "Public Speaking", "Open Source", "Knowledge Sharing"],
        "image": "/community/spaker.JPG" // Update path as needed
      },
      
//   {
//     period: "2017 - 2019",
//     role: "aa",
//     organization: "Code Education Nonprofit",
//     contribution: [
//       "Taught programming fundamentals to 200+ underrepresented students in free weekend workshops.",
//       "Developed curriculum materials for Python and web development bootcamps.",
//       "Created a peer learning system that increased student completion rates by 35%.",
//       "Organized a career day that connected students with local companies, resulting in 15 internship placements."
//     ],
//     topics: ["Education", "Python", "Web Development", "Diversity in Tech", "Curriculum Development"],
//     image: "/community/workshop.jpg" // Local image path
//   }
]; 