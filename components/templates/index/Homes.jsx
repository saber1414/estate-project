import Home from "@/components/modules/Home";
import React, { useEffect, useState } from "react";
import data from "../../../data/db.json";

const Homes = () => {
  const [homes, setHomes] = useState([]);
  
  const randomHomes = (arr,randomItem) => {
    let shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0,randomItem)
  };

  useEffect(() => {
    setHomes(data.homes)
  }, [homes]);

  return (
    <>
      <div className="homes">
        {randomHomes(homes,4).map((home) => (
          <Home key={home.id} {...home} />
        ))}
      </div>
    </>
  );
};

export default Homes;
