import React from "react";
import useFetch from "../DataFetch/useFetch";
import ImageCard from "./ImageCard";

const ImageGrid = ({url}) => {

  const { data, loading, error } = useFetch(url);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log(data.hits);
  

  return <>
            <div className="w-full min-h-screen">

            <ImageCard data={data.hits} />
            
            </div>

  
  
  
  </>;
};

export default ImageGrid;
