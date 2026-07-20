import React from 'react';
import { Camera,  Globe, Heart, Shield, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 border-t border-gray-700/50 text-gray-400 mt-auto rounded-t-lg">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        
        {/* Top Section: Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-8">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-3 text-center md:text-left">
            <Link to="/" className="flex items-center gap-2 justify-center md:justify-start hover:opacity-80 transition-opacity">
              <Camera className="text-purple-500 w-6 h-6" />
              <span className="font-sans font-bold text-xl text-white tracking-wide">Pixabay</span>
            </Link>
            <p className="text-xs sm:text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              A high-performance responsive image discovery dashboard connected to the Pixabay engine. Find, review, and bookmark high-quality media elements.
            </p>
          </div>

          {/* Column 2: Navigation Shortcuts */}
          <div className="flex flex-col gap-2 items-center">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-1">Quick Links</h3>
            <div className="flex flex-col gap-2 text-center text-sm">
              <Link to="/" className="hover:text-purple-400 transition-colors">Home Feed</Link>
              <Link to="/favorites" className="hover:text-purple-400 transition-colors">Saved Favorites</Link>
            </div>
          </div>

          {/* Column 3: Tech Meta / Attribution */}
          <div className="flex flex-col gap-2 items-center md:items-end text-center md:text-right">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-1">Integration</h3>
            <div className="flex flex-col gap-1.5 text-xs">
              <div className="flex items-center gap-1.5 justify-center md:justify-end">
                <Terminal className="w-3.5 h-3.5 text-purple-400" />
                <span>Powered by React & Tailwind</span>
              </div>
              <div className="flex items-center gap-1.5 justify-center md:justify-end">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span>Data: Pixabay REST API</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section: Divider & Copyright */}
        <div className="pt-6 border-t border-gray-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 text-center sm:text-left">
          <div>
            &copy; {currentYear} Pixabay Dashboard. Built under personal developer layout rules.
          </div>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500 animate-pulse" />
            <span>for picture enthusiasts</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
