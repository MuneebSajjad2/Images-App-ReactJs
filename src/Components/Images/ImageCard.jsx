import React, { useState } from "react";
import { Heart } from "lucide-react";

const ImageCard = ({ data }) => {
  const [favorites, setFavorites] = useState([]);

  const handleFavoritesClick = (id) => {
  setFavorites((prev) => {
    if (prev.includes(id)) {
      return prev.filter((fav) => fav !== id);
    } else {
      return [...prev, id];
    }
  });
};

  return (
    <>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
        {data.map((img) => {
          const imgId = img.id;
          const isFavorated = favorites.includes(imgId);

          return (
            <div
              key={img.id}
              className="w-full h-auto object-cover relative group "
            >
              <Heart
                onClick={() => handleFavoritesClick(img.id)}
                className={`absolute top-2 right-2 z-10 cursor-pointer transition-all duration-300 
                  text-white drop-shadow-md opacity-0 group-hover:opacity-100 hover:text-red-500 hover:fill-red-500
                  

    ${
      isFavorated
        ? "text-red-500 fill-red-500 opacity-100"
        : "text-white drop-shadow-md opacity-0 group-hover:opacity-100 hover:text-red-500 hover:fill-red-500"
    }`}
              />
              <img className="w-100 h-100" src={`${img.largeImageURL}`} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImageCard;
