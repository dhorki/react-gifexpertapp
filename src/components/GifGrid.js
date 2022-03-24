import React /*, { useEffect, useState }*/ from "react";
import { useFetchGif } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);
  const { data: images, loading } = useFetchGif(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>
      {loading && <p className="animate__animated animate__flash">Loading</p>}
      {!loading && images.length === 0 && <p>You chose... poorly!</p>}
      <div className="card-grid">
        {images.map((imagen) => (
          <GifGridItem key={imagen.id} {...imagen} />
        ))}
      </div>
    </>
  );
};
