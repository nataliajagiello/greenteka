import React from "react";
import { plants } from "./data/plantsData";

import epipremnumImg from "./assets/epipremnum.jpg";
import monsteraImg from "./assets/monstera.jpg";
import sansevieriaImg from "./assets/sansewieria.jpg";
import krotonImg from "./assets/kroton.jpg";
import aloesImg from "./assets/aloes.jpg";
import hibiskusImg from "./assets/hibiskus.jpg";

import PlantCard from "./components/PlantCard";
import { Flower, Flower2, Leaf, Sprout, TreePine } from "lucide-react";
import "./App.css";

const getPicture = (plantName: string): string => {
  switch(plantName) {
    case "Epipremnum":
      return epipremnumImg;
    case "Monstera":
      return monsteraImg;
    case "Kroton":
      return krotonImg;
    case "Sansewieria":
      return sansevieriaImg;
    case "Aloes":
      return aloesImg;
    case "Hibiskus":
      return hibiskusImg;
    default:
      return epipremnumImg;
  }
}

const App: React.FC = () => {
  return (<div>
      {/* Header */}
        <header
          style={{
            textAlign: "center",
            marginTop: "10px",
            position: "relative",
          }}
        >
          <div style={{ position: "relative", display: "inline-block" }}>
            <div
              style={{
                position: "absolute",
                top: "-16px",
                left: "-32px",
                color: "#bbf7d0",
                opacity: 0.6,
              }}
            >
              <Leaf size={48} style={{ transform: "rotate(12deg)" }} />
            </div>
            <div
              style={{
                position: "absolute",
                top: "-8px",
                right: "-24px",
                color: "#a7f3d0",
                opacity: 0.4,
              }}
            >
              <Leaf size={32} style={{ transform: "rotate(-45deg)" }} />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "-12px",
                left: "-16px",
                color: "#86efac",
                opacity: 0.5,
              }}
            >
              <Leaf size={24} style={{ transform: "rotate(45deg)" }} />
            </div>

            {/* Główny tytuł */}
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "300",
                color: "#292524",
                letterSpacing: "4px",
                margin: "0 0 16px 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                position: "relative",
                zIndex: 10,
              }}
            >
              <Sprout size={48} style={{ color: "#059669" }} />
              ZIELOTEKA
              <TreePine size={40} style={{ color: "#047857" }} />
            </h1>
          </div>

          {/* Podtytuł z dekoracyjną linią */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              marginTop: "16px",
            }}
          >
            <div
              style={{
                height: "1px",
                width: "64px",
                background: "linear-gradient(to right, transparent, #86efac, transparent)",
              }}
            />
            <p
              style={{
                color: "#57534e",
                fontWeight: "300",
                fontStyle: "italic",
                margin: "0",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Flower size={16} style={{ color: "#f472b6" }} />
              Karty pielęgnacji roślin domowych
              <Flower2 size={16} style={{ color: "#a855f7" }} />
            </p>
            <div
              style={{
                height: "1px",
                width: "64px",
                background: "linear-gradient(to right, transparent, #86efac, transparent)",
              }}
            />
          </div>

          {/* Subtelny opis */}
          <p
            style={{
              fontSize: "14px",
              color: "#78716c",
              marginTop: "12px",
              maxWidth: "500px",
              margin: "12px auto 0",
              lineHeight: "1.6",
            }}
          >
            Twoja kolekcja praktycznych porad dla zdrowych i pięknych roślin
          </p>
        </header>
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


