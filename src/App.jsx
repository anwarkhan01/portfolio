import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiGithub,
} from "react-icons/si";
import {FaEnvelope, FaGithub, FaDownload} from "react-icons/fa";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white scroll-smooth">
      <Navbar />
      <Introduction />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

const Navbar = () => {
  const navItems = [
    {name: "Home", href: "#home"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
  ];

  return (
    <nav className="fixed top-0 w-full bg-transparent z-50 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <a
            className="cursor-pointer"
            href="https://github.com/anwarkhan01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub className="text-gray-200" />
          </a>
          <span className="tracking-wide">Anwar</span>
        </div>
        <ul className="md:flex gap-6 text-sm font-medium hidden">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="hover:text-blue-400 transition duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const Introduction = () => {
  return (
    <div
      id="home"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 pt-20 px-4"
    >
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-center">
        Hi, I'm Anwar
      </h1>
      <p className="text-xl md:text-2xl mt-4 font-light text-center max-w-2xl text-gray-300">
        A passionate fullstack web developer crafting modern, scalable
        solutions.
      </p>
      <a
        href="#skills"
        className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
      >
        Explore My Work
      </a>
    </div>
  );
};

const Skills = () => {
  const skills = [
    {name: "HTML", icon: <SiHtml5 className="w-8 h-8 text-orange-500" />},
    {name: "CSS", icon: <SiCss3 className="w-8 h-8 text-blue-500" />},
    {
      name: "JavaScript",
      icon: <SiJavascript className="w-8 h-8 text-yellow-400" />,
    },
    {name: "ReactJS", icon: <SiReact className="w-8 h-8 text-cyan-400" />},
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="w-8 h-8  text-sky-400" />,
    },
    {
      name: "Bootstrap CSS",
      icon: <SiBootstrap className="w-8 h-8 text-purple-700" />,
    },
    {name: "NodeJS", icon: <SiNodedotjs className="w-8 h-8 text-green-500" />},
    {name: "MongoDB", icon: <SiMongodb className="w-8 h-8 text-green-600" />},
    {name: "Express", icon: <SiExpress className="w-8 h-8 text-gray-200" />},
    {
      name: "Git & GitHub",
      icon: <SiGithub className="w-8 h-8 text-white" />,
      link: "https://github.com/anwarkhan01",
    },
  ];

  return (
    <div id="skills" className="py-16 px-4 bg-gray-800">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        My Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((skill) => (
          <a
            key={skill.name}
            href={skill.link || "#"}
            target={skill.link ? "_blank" : "_self"}
            className="flex flex-col items-center p-4 bg-gray-900 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
          >
            {skill.icon}
            <span className="mt-2 text-white font-medium">{skill.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "MarketHub",
      live: "https://markethub-frontend-t145.onrender.com",
      github: "https://github.com/anwarkhan01/markethub",
      description:
        "A platform connecting individuals with local service providers like plumbers, electricians, and cleaners. Users can search by profession and view details, including location and distance. Providers can manage profiles to showcase expertise.",
    },
    {
      title: "DSA Tracker",
      live: "https://dsa-tracker-32yk.onrender.com",
      github: "https://github.com/anwarkhan01/dsa-tracker",
      description:
        "A lightweight tool to track progress in Data Structures and Algorithms. Users can save code snippets, mark problems as completed, and add custom problems with optional links, using local storage for persistent data management.",
    },
  ];

  return (
    <div id="projects" className="py-16 px-4 bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 min-h-[200px]"
          >
            <h3 className="text-2xl font-semibold text-blue-400 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4 flex-1">{project.description}</p>
            <div className="flex gap-4 mt-auto">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Live Project
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div id="contact" className="py-10 px-4 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Connect With Me</h2>
      <div className="max-w-2xl mx-auto text-center space-y-4 text-base">
        <p className="flex justify-center items-center gap-2 flex-wrap">
          <FaEnvelope className="text-blue-300" />
          <a
            href="mailto:anwarkhan84088@gmail.com"
            className="no-underline hover:text-blue-300 transition"
          >
            anwarkhan84088@gmail.com
          </a>
        </p>

        <p className="flex justify-center items-center gap-2 flex-wrap">
          <FaGithub className="text-blue-300" />
          <a
            href="https://github.com/anwarkhan01"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:text-blue-300 transition"
          >
            github.com/anwarkhan01
          </a>
        </p>

        <p className="flex justify-center items-center gap-2 flex-wrap">
          <FaDownload className="text-blue-300" />
          <a
            href="resume.pdf"
            download
            className="no-underline hover:text-blue-300 transition"
          >
            Download My Resume
          </a>
        </p>
      </div>

      <hr className="my-6 border-gray-600 w-3/4 mx-auto" />

      <p className="text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Anwar Khan. All rights reserved.
      </p>
    </div>
  );
};

export default App;
