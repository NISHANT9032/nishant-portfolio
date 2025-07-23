// src/components/Navbar.jsx
const Navbar = () => {
  return (
    <header className="bg-white dark:bg-gray-900 shadow sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Nishant Pandey</h1>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
