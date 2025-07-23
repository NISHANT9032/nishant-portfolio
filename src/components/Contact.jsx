const Contact = () => {
  return (
    <section id="contact" className="px-6 py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white" />
          <input type="email" placeholder="Your Email" className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white" />
          <textarea placeholder="Your Message" rows="5" className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-black dark:text-white" />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Send</button>
        </form>
        <p className="mt-6 text-center text-gray-500">or reach me at <strong>nishant45p@gmail.com</strong></p>
      </div>
    </section>
  );
};

export default Contact;
