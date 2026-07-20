import React, { useState } from 'react'
import { Camera, Search } from 'lucide-react'
import { NavLink } from 'react-router-dom';

const Navbar = ({ setUrl, favoritesCount }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    if (!inputValue.trim()) return;
    // setUrl(`https://pixabay.com{encodeURIComponent(inputValue.trim())}&image_type=photo&pretty=true`);
      setUrl(`https://pixabay.com/api/?key=35590015-90bbde0463c65a8aa9cabd6b7&q=${inputValue.trim()}&image_type=photo&pretty=true`);
    setInputValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSubmit();
  };

  return (
    <div className='flex flex-col md:flex-row justify-between items-center gap-4 p-4 sm:p-6 sticky top-0 z-40 bg-gray-900 shadow-md text-white rounded-b-lg mb-4 w-full'>
      
      {/* Brand Title */}
      <NavLink to="/" className='flex items-center gap-2 hover:opacity-80 transition-opacity w-full md:w-auto justify-center md:justify-start'>
        <Camera className='text-purple-500 w-6 h-6' />
        <span className='font-sans font-bold text-xl tracking-wide'>Pixabay</span>
      </NavLink>

      {/* Searchbar Container */}
      <div className='flex items-center gap-2 w-full max-w-xl bg-gray-800 border border-gray-700 rounded-lg px-3 py-1.5 focus-within:border-purple-500 transition-colors order-3 md:order-2'>
        <Search className="text-gray-400 w-5 h-5 flex-shrink-0" />
        <input 
          type='text' 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          onKeyDown={handleKeyDown}
          className='flex-1 bg-transparent border-none outline-none text-white placeholder-gray-400 text-sm w-full' 
          placeholder='Search high-quality images...' 
        />
        <button 
          onClick={handleSubmit} 
          className='bg-purple-600 hover:bg-purple-700 text-white font-medium px-4 py-1.5 rounded-md transition-colors text-sm flex-shrink-0'
        >
          Go
        </button>
      </div>

      {/* Navigation Buttons */}
      <div className='w-full md:w-auto flex justify-center md:justify-end order-2 md:order-3'>
        <NavLink 
          to="/favorites" 
          className={({ isActive }) => 
            `flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all shadow-sm w-full sm:w-auto ${
              isActive 
                ? "bg-purple-600 text-white" 
                : "bg-gray-800 text-gray-300 hover:bg-purple-700 hover:text-white"
            }`
          }
        >
          <span>❤️ Favorites</span>
          <span className="bg-white text-purple-900 text-xs font-bold px-2 py-0.5 rounded-full min-w-[20px] text-center">
            {favoritesCount || 0}
          </span>
        </NavLink>
      </div>

    </div>
  )
}

export default Navbar;
