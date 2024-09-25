const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Redux DLSiem. All rights reserved.
        </p>
        <ul className="flex justify-center gap-4 mt-2">
          <li>
            <a href="/privacy" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
