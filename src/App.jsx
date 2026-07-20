import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import TrendingFilter from './Components/TrendingFilter';
import ImageGrid from './Components/Images/ImageGrid';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favorites from './Components/Favorites';
import Footer from './Components/Footer';

const App = () => {
  const [url, setUrl] = useState(
    'https://pixabay.com/api/?key=35590015-90bbde0463c65a8aa9cabd6b7&q=nature&image_type=photo&pretty=true'
  );

  // 1. Core State to hold saved image data objects
  const [favorites, setFavorites] = useState([]);

  // 2. Shared function to add or remove an item from favorites
  const toggleFavorite = (imageObj) => {
    setFavorites((prevFavorites) => {
      const isAlreadyFav = prevFavorites.some((item) => item.id === imageObj.id);
      if (isAlreadyFav) {
        return prevFavorites.filter((item) => item.id !== imageObj.id); // Remove item
      } else {
        return [...prevFavorites, imageObj]; // Add item
      }
    });
  };

  return (
    <BrowserRouter>
      <div className="px-3 bg-gray-800 min-h-screen">
        {/* Pass favorites count to display a live badge on the navbar link */}
        <Navbar setUrl={setUrl} url={url} favoritesCount={favorites.length} />
        
        {/* Placed TrendingFilter here so it stays visible on both pages, or move it inside the "/" Route if you only want it on Home */}
        <TrendingFilter setUrl={setUrl} /> 
        
        <Routes>
          {/* Home Route: Passes down variables to check favorites and add/remove items */}
          <Route 
            path="/" 
            element={
              <ImageGrid 
                url={url} 
                favorites={favorites} 
                onFavoriteToggle={toggleFavorite} 
              />
            } 
          />
          
          {/* Favorites Route: Receives saved data list and the remove action */}
          <Route 
            path="/favorites" 
            element={
              <Favorites 
                favorites={favorites} 
                onFavoriteToggle={toggleFavorite} 
              />
            } 
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
