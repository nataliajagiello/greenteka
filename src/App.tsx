import React from "react";
import "./App.css";

import { plants } from "./data/plantsData";
import { getPicture } from "./utils/pictures";

import PlantCard from "./components/PlantCard";
import Header from "./components/Header";

const App: React.FC = () => {
  return (<div>
    <Header />
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    }}>
      
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} picture={getPicture(plant.name)}/>
      ))}
    </div></div>
  );
};

export default App;


