import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  // const categories = ["One Punch", "Samuray X", "Dragon Ball"];
  const [categories, setCategories] = useState(["One Punch"]);

  /**
  const handleAdd = () => {
    // cualquiera de las 3 lineas funciona.
    //setCategories([...categories, "HunterXHunter"]);
    setCategories((cats) => [...cats, "HunterXHunter"]);
  };
   */
  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};
