export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
        </p>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="#"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Terms
          </a>
          <a
            href="#"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
