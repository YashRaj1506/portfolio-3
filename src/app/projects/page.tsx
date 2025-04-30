"use client";

import Navbar from '@/components/Navbar';
import NavigationLink from '@/components/NavigationLink';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { calsans } from '@/fonts';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

export default function Projects() {
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
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6 md:mb-8">
          My Projects
        </h1>
        
        <TracingBeam className="px-2 sm:px-4">
          <div className="max-w-4xl mx-auto antialiased pt-2 sm:pt-4 relative">
            {projectsData.map((project, index) => (
              <div key={`project-${index}`} className="mb-16 sm:mb-24">
                <h2 className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full text-xs sm:text-sm w-fit px-3 sm:px-4 py-1 mb-3 sm:mb-4">
                  {project.category}
                </h2>

                <p className={twMerge(calsans.className, "text-xl sm:text-2xl text-white mb-3 sm:mb-4")}>
                  {project.title}
                </p>

                {/* Project image */}
                <div className="mb-4 sm:mb-6 rounded-xl overflow-hidden border border-gray-800 shadow-xl transition-all duration-500 hover:shadow-blue-900/20 hover:border-gray-700">
                  <Image 
                    src={project.imagePath} 
                    alt={project.title}
                    width={800} 
                    height={450}
                    className="w-full object-cover hover:scale-102 transition-transform duration-500 ease-in-out"
                  />
                </div>

                <div className="prose prose-sm dark:prose-invert">
                  <div className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
                    {project.description.map((desc, i) => (
                      <p key={i}>{desc}</p>
                    ))}
                  </div>
                  
                  {/* Links */}
                  <div className="mt-4 sm:mt-6 flex flex-wrap gap-3 sm:gap-4">
                    {project.githubLink && (
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors text-white text-sm"
                      >
                        <FaGithub /> GitHub
                      </a>
                    )}
                    
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-800 hover:bg-blue-700 rounded-md transition-colors text-white text-sm"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                  
                  {/* Technologies */}
                  {project.technologies && (
                    <div className="mt-4 sm:mt-6">
                      <h3 className="text-xs sm:text-sm font-semibold text-blue-400 mb-2">Technologies Used:</h3>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="px-2 sm:px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 border border-gray-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {/* Footer section */}
            <div className="pt-12 pb-24 text-center">
              <div className="w-full max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>
              <p className="text-gray-500 text-sm mb-3">Thanks for checking out my projects</p>
              <NavigationLink href="/" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                Return to home
              </NavigationLink>
            </div>
          </div>
        </TracingBeam>
      </div>
      
      {/* Extended background to ensure full coverage */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-black"></div>
      
      {/* Code Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-5 overflow-hidden z-0">
        <pre className="text-xs sm:text-sm md:text-base text-blue-500 font-mono p-4 overflow-hidden pointer-events-none">
          {`
function Project() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getProjectsData();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch projects", error);
      }
    }
    
    fetchProjects();
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="project-grid">
      {projects.map(project => (
        <ProjectCard 
          key={project.id}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          image={project.image}
          githubLink={project.githubLink}
          liveLink={project.liveLink}
        />
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

const projectsData = [
  {
    category: "Web Development",
    title: "U-NEWS-UAL",
    imagePath: "/project-images/scraper.png",
    description: [
      "Engineered an automated system to build News REST APIs, streamlining the process of API development.",
      "Developed a Python script leveraging BeautifulSoup for web scraping, integrated seamlessly with Django and Django REST Framework to generate dynamic REST APIs.",
      "Optimized workload distribution by implementing Celery with Redis as a message broker, utilizing Celery Beat and workers to offload and handle asynchronous tasks efficiently."
    ],
    technologies: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Docker", "Celery", "Redis", "BeautifulSoup"],
    githubLink: "https://github.com/YashRaj1506/u-news-ual",
  },
  {
    category: "Backend Development",
    title: "djangocraft",
    imagePath: "/project-images/djangocli.png",
    description: [
      "djangocraft is a powerful CLI tool that rapidly sets up Django projects, ideal for hackathons and quick development cycles.",
      "With a single command, it scaffolds a Django project and includes a personalized pre-built authentication system based on user input.",
      "Uses Typer for building intuitive CLI commands, allowing customization of authentication fields and structure within seconds.",
      "Speeds up boilerplate project setup and integrates best practices, enabling developers to focus on building features faster."
    ],
    technologies: ["Python", "Typer", "Subprocess", "Shutil", "OS"],
    githubLink: "https://github.com/YashRaj1506/djangocraft_cli",
    liveLink: "https://pypi.org/project/djangocraft/"
  },
  // {
  //   category: "Data Collection",
  //   title: "Convo-Haven",
  //   imagePath: "/project-images/convo-haven.svg",
  //   description: [
  //     "Developed ConvoHaven, a web-based application built on the Django framework, enabling user interactions.",
  //     "Implemented authentication and multiple CRUD functionalities to streamline flow and enhance user experience.",
  //     "Engineered a search feature allowing users to discover rooms and servers based on conversation topics of interest."
  //   ],
  //   technologies: ["Python", "Django", "HTML", "CSS", "TailwindCSS", "JavaScript", "SQLite3"],
  //   githubLink: "https://github.com/YashRaj1506/Convo_Haven",
  //   liveLink: null
  // }
]; 