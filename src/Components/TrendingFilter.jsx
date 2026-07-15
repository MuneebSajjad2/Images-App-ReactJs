import React, { useEffect, useState } from "react";
import useFetch from "./DataFetch/useFetch";

const TrendingFilter = ({ setUrl }) => {


  const categories = [
    "Trending",
    "Nature",
    "Technology",
    "People",
    "Architecture",
    "Animals",
    "Travel",
    "Food",
    "Indian",
    "Russian",
  ];

  return (
    <>
      <div className="flex gap-3 px-6">
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              onClick={(e) => {
                setUrl(`https://pixabay.com/api/?key=35590015-90bbde0463c65a8aa9cabd6b7&q=${category}&image_type=photo&pretty=true`);
              }}
              className="bg-black text-gray-400 px-2 py-1 rounded"
            >
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default TrendingFilter;
