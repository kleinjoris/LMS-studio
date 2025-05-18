import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <Logo variant="light" />
              <span className="ml-2 text-xl font-bold text-white">EduLearn</span>
            </Link>
            <p className="text-gray-400">
              Empowering education through technology. Our platform connects learners with quality content and instructors worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-white">
                  All Courses
                </Link>
              </li>
              <li>
                <Link to="/courses?category=programming" className="text-gray-400 hover:text-white">
                  Programming
                </Link>
              </li>
              <li>
                <Link to="/courses?category=design" className="text-gray-400 hover:text-white">
                  Design
                </Link>
              </li>
              <li>
                <Link to="/courses?category=business" className="text-gray-400 hover:text-white">
                  Business
                </Link>
              </li>
              <li>
                <Link to="/courses?category=marketing" className="text-gray-400 hover:text-white">
                  Marketing
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/instructors" className="text-gray-400 hover:text-white">
                  Instructors
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Mail size={20} className="mr-2 mt-1 flex-shrink-0 text-gray-400" />
                <span className="text-gray-400">support@edulearn.com</span>
              </li>
              <li className="mt-4">
                <form className="space-y-2">
                  <label htmlFor="newsletter" className="sr-only">Email for newsletter</label>
                  <input
                    type="email"
                    id="newsletter"
                    placeholder="Enter your email"
                    className="w-full rounded-md border-gray-700 bg-gray-800 px-4 py-2 text-sm text-white placeholder-gray-400 focus:border-primary-500 focus:ring-primary-500"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    Subscribe to Newsletter
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-400">
            &copy; {currentYear} EduLearn LMS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;