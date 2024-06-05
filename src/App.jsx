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
      <p className="text-2xl mt-3">A front-end web developer</p>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 bg-blue-200 ">
      <div className="p-2 bg-white rounded">HTML</div>
      <div className="p-2 bg-white rounded">CSS</div>
      <div className="p-2 bg-white rounded">JavaScript</div>
      <div className="p-2 bg-white rounded">ReactJS</div>
      <div className="p-2 bg-white rounded">Tailwind CSS</div>
      <div className="p-2 bg-white rounded">
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
      <div className="p-4 bg-blue-100 rounded shadow-md">
        <h3 className="text-xl font-semibold text-blue-700">
          <a href="https://anwarkhan01.github.io/todo-app/" target="_blank">
            Todo app
          </a>
        </h3>
        <p className="mt-2 text-blue-600">
          This React{" "}
          <a
            href="https://anwarkhan01.github.io/todo-app/"
            target="_blank"
            className="underline"
          >
            Todo app
          </a>{" "}
          allows users to manage a list of tasks with features to add, edit,
          delete, and mark tasks as completed. The app ensures tasks are unique
          and non-empty, dynamically resizes input fields for a better user
          experience, and maintains the state of completed tasks. Custom buttons
          and responsive design make it user-friendly and intuitive.
        </p>
      </div>
      <div className="p-4 bg-blue-100 rounded shadow-md">
        <h3 className="text-xl font-semibold text-blue-700">
          <a href="https://anwarkhan01.github.io/weather-app/" target="_blank">
            Weather app
          </a>
        </h3>
        <p className="mt-2 text-blue-600">
          This React{" "}
          <a
            href="https://anwarkhan01.github.io/weather-app/"
            target="_blank"
            className="underline"
          >
            weather app
          </a>{" "}
          enables users to retrieve real-time weather data for any city
          worldwide. It displays temperature, humidity, wind speed, visibility,
          cloud cover, and updates the data regularly. The app uses the{" "}
          <a
            href="https://openweathermap.org/api"
            target="_blank"
            className="underline"
          >
            OpenWeatherMap
          </a>{" "}
          API and includes error handling for invalid city names.
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
          anwarkhan0840@gmail.com
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
