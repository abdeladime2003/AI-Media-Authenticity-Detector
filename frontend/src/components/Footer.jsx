import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-gray-900 via-gray-800 to-purple-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-sky-400">DeepFakeDetection</h2>
        
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-purple-300">Navigation</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#accueil" className="hover:text-sky-400">Accueil</a></li>
            <li><a href="#services" className="hover:text-sky-400">comment ça marche</a></li>
            <li><a href="#faq" className="hover:text-sky-400">FAQ</a></li>
            <li><a href="#contact" className="hover:text-sky-400">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-purple-300">Suivez-nous</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-sky-400"><FaFacebookF size={20} /></a>
            <a href="#" className="hover:text-sky-400"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-sky-400"><FaLinkedinIn size={20} /></a>
            <a href="#" className="hover:text-sky-400"><FaInstagram size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} DeepFakeDetection. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
