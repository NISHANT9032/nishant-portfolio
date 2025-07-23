const Projects = () => {
  const projects = [
    {
      title: "Sorting Algorithm Visualizer",
      description: "Visualize classic sorting algorithms like bubble sort, selection sort, and insertion sort.",
      tech: "HTML, CSS, JavaScript",
      link: "https://github.com/NISHANT9032/sorting-visualizer",
    },
    {
      title: "Registration Form",
      description: "Responsive and animated registration form with base64 profile image upload and session-based login.",
      tech: "HTML, CSS, JavaScript",
      link: "https://github.com/NISHANT9032/task-1-registration-form",
    }
  ];

  return (
    <section id="projects" className="px-6 py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
  <div
    key={index}
    data-aos="fade-up"
    data-aos-delay={index * 100}
    className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition"
  >
    <img
      src="https://www.pngmart.com/files/22/Web-Development-PNG-Isolated-HD.png"
      alt={project.title}
      className="w-full h-48 object-cover rounded mb-4"
    />
    <h3 className="text-xl font-bold">{project.title}</h3>
    <p className="text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
    <p className="text-sm text-gray-500 mt-1">Tech Stack: {project.tech}</p>
    <a
      href={project.link}
      target="_blank"
      className="inline-block mt-3 text-blue-600 dark:text-blue-400 hover:underline"
    >
      GitHub →
    </a>
  </div>
))}

        </div>
      </div>
    </section>
  );
};

export default Projects;
