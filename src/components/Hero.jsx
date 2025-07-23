// src/components/Hero.jsx
const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex flex-col justify-center items-center text-center px-6 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1537432376769-00a9100fdf4b?auto=format&fit=crop&w=1350&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 text-white" data-aos="zoom-in">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Nishant Pandey</h2>
        <p className="text-lg md:text-xl">Web Developer | C++ | MERN Stack | DSA Enthusiast</p>
        <a
          href="#projects"
          className="mt-6 inline-block bg-blue-600 px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
