import React from "react";
import { Heart } from "lucide-react";

const ImageCard = ({ data = [], favorites = [], onFavoriteToggle }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 sm:p-4">
      {data.map((image) => {
        const isFavorited = favorites.some((fav) => fav.id === image.id);

        return (
          <div key={image.id} className="relative group overflow-hidden rounded-lg shadow-md bg-gray-900 border border-gray-700 h-auto flex flex-col">
            <div className="relative overflow-hidden w-full h-64">
              <img 
                src={image.webformatURL} 
                alt={image.tags} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              {/* Overlay heart action tag */}
              <button
                onClick={() => onFavoriteToggle(image)}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/50 backdrop-blur-sm transition-all hover:bg-black/75 z-10"
                aria-label="Toggle Favorite"
              >
                <Heart 
                  className={`w-5 h-5 transition-colors ${
                    isFavorited ? "fill-red-500 text-red-500" : "text-white"
                  }`} 
                />
              </button>
            </div>

            {/* Micro Details Footer */}
            <div className="p-3 text-xs text-gray-400 flex justify-between items-center mt-auto bg-gray-900">
              <span className="truncate max-w-[120px]">By: {image.user}</span>
              <span className="flex-shrink-0">👍 {image.likes}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageCard;
