import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  // si algo necesita cambiar y disparar un refresh se usa con hooks
  // const categories = ["One Punch", "Samurai X", "Dragon Ball"];
  // const [categories, setCategories] = useState([
  //   "One Punch",
  //   "Samurai X",
  //   "Dragon Ball",
  // ]);
  const [categories, setCategories] = useState(["futurama"]);

  // const handleAdd = () => {
  //   setCategories([...categories, "Neon Genesis Evangelion"]);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory setCategories={setCategories} />
      <ol>
        {
          // no se puede usar un "for" porque el for no regresa un elemento imprimible en html
          categories.map((category, i) => (
            <GifGrid key={category} category={category} />
          ))
        }
      </ol>
    </>
  );
};

export default GifExpertApp;
