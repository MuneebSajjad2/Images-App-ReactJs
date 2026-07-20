import React from "react";
import ImageCard from "./Images/ImageCard";
import { Link } from "react-router-dom";

const Favorites = ({ favorites = [], onFavoriteToggle }) => {
  if (favorites.length === 0) {
    return (
      <div className="w-full min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="text-5xl sm:text-6xl mb-4">❤️</div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">No Saved Favorites</h2>
        <p className="text-sm text-gray-400 mb-6 max-w-sm">
          Browse through the picture feeds and tap the heart icon on any photo to pin it safely inside this panel.
        </p>
        <Link 
          to="/" 
          className="bg-purple-600 hover:bg-purple-700 text-white font-medium text-sm px-6 py-2.5 rounded-lg transition-colors"
        >
          Explore Images
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen py-4 sm:py-6">
      <div className="mb-6 px-2 sm:px-4 flex items-center gap-2">
        <h1 className="text-xl sm:text-2xl font-bold text-white">Your Saved Favorites</h1>
        <span className="bg-purple-500/20 text-purple-400 text-xs sm:text-sm font-semibold px-2.5 py-0.5 rounded-full">
          {favorites.length} {favorites.length === 1 ? 'image' : 'images'}
        </span>
      </div>
      
      <ImageCard data={favorites} favorites={favorites} onFavoriteToggle={onFavoriteToggle} />
    </div>
  );
};

export default Favorites;
