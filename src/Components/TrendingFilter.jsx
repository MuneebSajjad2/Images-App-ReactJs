import React, { useState } from 'react';
import { Menu, X, Flame } from 'lucide-react';

const TrendingFilter = ({ setUrl }) => {
  // Local state to handle whether the mobile menu is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // List of your filter categories and their respective Pixabay API search parameters
  const filters = [
    { name: 'Nature', query: 'nature' },
    { name: 'Architecture', query: 'architecture' },
    { name: 'Fashion', query: 'fashion' },
    { name: 'Business', query: 'business' },
    { name: 'Animals', query: 'animals' },
    { name: 'Travel', query: 'travel' }
  ];

  const handleFilterClick = (query) => {
    // Dynamically update the main app URL with the chosen category
    setUrl(`https://pixabay.com/api/?key=35590015-90bbde0463c65a8aa9cabd6b7&q=${query}&image_type=photo&pretty=true`);
    // Automatically close the mobile overlay panel once a choice is selected
    setIsOpen(false);
  };

  return (
    <div className="w-full bg-gray-900 border border-gray-700/50 rounded-lg p-4 mb-6 text-white shadow-sm relative">
      <div className="flex justify-between items-center">
        
        {/* Label Tag */}
        <div className="flex items-center gap-2">
          <Flame className="text-orange-500 w-5 h-5 animate-pulse" />
          <span className="font-semibold text-sm tracking-wide uppercase text-gray-300">Trending Topics</span>
        </div>

        {/* Hamburger Trigger (Only visible on screens smaller than Tailwinds 'md' breakpoint) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-purple-400 focus:outline-none transition-colors"
          aria-label="Toggle filters"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Regular Desktop Layout (Hidden on mobile screens, snaps out at md:flex) */}
        <div className="hidden md:flex items-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter.name}
              onClick={() => handleFilterClick(filter.query)}
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-gray-800 border border-gray-700 hover:bg-purple-600 hover:border-purple-500 transition-all shadow-sm"
            >
              {filter.name}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Collapsible Dropdown Drawer (Only visible when isOpen is true on small viewports) */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-3 border-t border-gray-700/60 flex flex-col gap-2 animate-fadeIn">
          {filters.map((filter) => (
            <button
              key={filter.name}
              onClick={() => handleFilterClick(filter.query)}
              className="w-full text-left px-4 py-2.5 rounded-md text-sm font-medium bg-gray-800 hover:bg-purple-600 border border-gray-700/40 hover:border-purple-500 transition-all"
            >
              {filter.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrendingFilter;
