import React from "react";
import useFetch from "../DataFetch/useFetch";
import ImageCard from "./ImageCard";

const ImageGrid = ({ url, favorites, onFavoriteToggle }) => {
  const { data, loading, error } = useFetch(url);

  if (loading) return <p className="text-white text-center py-10">Loading layout elements...</p>;
  if (error) return <p className="text-red-500 text-center py-10">Error loading feed: {error}</p>;

  return (
    <div className="w-full min-h-screen">
      <ImageCard 
        data={data?.hits || []} 
        favorites={favorites} 
        onFavoriteToggle={onFavoriteToggle} 
      />
    </div>
  );
};

export default ImageGrid;
