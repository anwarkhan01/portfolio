import React from "react";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Introduction />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

const Introduction = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-blue-500 text-white">
      <h1 className="text-6xl font-bold text-center">Hello, I'm Anwar</h1>
      <p className="text-2xl mt-3">A fullstack web developer</p>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 bg-blue-200">
      <div className="p-2 bg-white rounded shadow-md">HTML</div>
      <div className="p-2 bg-white rounded shadow-md">CSS</div>
      <div className="p-2 bg-white rounded shadow-md">JavaScript</div>
      <div className="p-2 bg-white rounded shadow-md">ReactJS</div>
      <div className="p-2 bg-white rounded shadow-md">Tailwind CSS</div>
      <div className="p-2 bg-white rounded shadow-md">NodeJS</div>
      <div className="p-2 bg-white rounded shadow-md">Mongo DB</div>
      <div className="p-2 bg-white rounded shadow-md">Express</div>
      <div className="p-2 bg-white rounded shadow-md">
        <a href="https://github.com/anwarkhan01" target="_blank">
          Git & GitHub
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-blue-500">Projects</h2>

      <div className="p-4 bg-blue-100 rounded shadow-md mb-4">
        <h3 className="text-xl font-semibold text-blue-700">
          <a href="https://markethub.onrender.com" target="_blank">
            MarketHub
          </a>
        </h3>
        <p className="mt-2 text-blue-600">
          <a
            href="https://markethub.onrender.com"
            target="_blank"
            className="underline"
          >
            MarketHub
          </a>{" "}
          is a platform that connects individuals with local service providers
          like plumbers, electricians, and cleaners. Users can search for
          professionals by profession and view key details, including their
          location and distance. Service providers can create and manage their
          profiles, showcasing their expertise.
        </p>
      </div>

      <div className="p-4 bg-blue-100 rounded shadow-md">
        <h3 className="text-xl font-semibold text-blue-700">
          <a href="https://dsa-tracker.onrender.com" target="_blank">
            DSA Tracker
          </a>
        </h3>
        <p className="mt-2 text-blue-600">
          <a
            href="https://dsa-tracker.onrender.com"
            target="_blank"
            className="underline"
          >
            DSA Tracker
          </a>{" "}
          is a lightweight tool designed to help users track their progress in
          Data Structures and Algorithms (DSA). Users can save code snippets,
          mark problems as completed, and add custom problems with optional
          links. Local storage is used to track progress, save code snippets,
          and store custom problems with optional links, ensuring seamless and
          persistent data management.".
        </p>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="p-4 bg-blue-200 ">
      <h2 className="text-3xl font-bold mb-4 text-blue-500">Contact</h2>
      <p className="mb-4 text-blue-600">
        Feel free to reach out to me via email at{" "}
        <a
          href="mailto:anwarkhan0840@gmail.com"
          className="text-blue-800 underline"
          target="_blank"
        >
          anwarkhan84088@gmail.com
        </a>{" "}
        or visit my GitHub account:{" "}
        <a
          href="https://github.com/anwarkhan01"
          className="text-blue-800 underline"
          target="_blank"
        >
          anwarkhan01
        </a>
      </p>
      <p className="mb-4 text-blue-600">
        You can also download my resume to know more about me:{" "}
        <a href="resume.pdf" download className="text-blue-800 underline">
          Download Resume
        </a>
      </p>
    </div>
  );
};

export default App;
