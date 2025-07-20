import React from "react";
import type { Plant } from "../data/plantsData";
import { Droplets, Sun, Thermometer } from "lucide-react";

interface PlantCardProps {
  plant: Plant;
  picture:string;
  searchTerm?: string
}

const PlantCard: React.FC<PlantCardProps> = ({ plant, picture, searchTerm }) => {

 const highlightText = (text: string, term: string) => {
    if (!term.trim()) return text

    const regex = new RegExp(`(${term})`, "gi")
    const parts = text.split(regex)

    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark key={index} className="highlight">
          {part}
        </mark>
      ) : (
        part
      ),
    )
  }

  return (
    <div className="plant-card" style={{ border: "1px solid #ddd", padding: "1rem", margin: "1rem", borderRadius: "8px", maxWidth: "300px" }}>
        <img src={picture} alt={plant.name} style={{ width: "100%", height: "auto", borderRadius: "8px" }} />
      <p style={{textAlign:'left', fontWeight:'bold'}}>{highlightText(plant.name, searchTerm || "")}</p>
      <p style={{textAlign:'left'}}><em>{highlightText(plant.scientificName, searchTerm || "")}</em></p>
      <hr/>
      <p style={{textAlign:'left'}}>{plant.description}</p>
       {/* Informacje pielęgnacyjne */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
            <Droplets size={12} style={{ color: "#3b82f6", marginTop: "2px", flexShrink: 0 }} />
            <div style={{ flex: "1" }}>
              <p
                style={{
                  textAlign:'left',
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "#44403c",
                  margin: "0",
                }}
              >
                Podlewanie
              </p>
              <p
                style={{
                  textAlign:'left',
                  fontSize: "12px",
                  color: "#57534e",
                  margin: "2px 0 0 0",
                }}
              >
                {plant.wateringFrequency}
              </p>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
            <Sun size={12} style={{ color: "#eab308", marginTop: "2px", flexShrink: 0 }} />
            <div style={{ flex: "1" }}>
              <p
                style={{
                  textAlign:'left',
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "#44403c",
                  margin: "0",
                }}
              >
                Światło
              </p>
              <p
                style={{
                  textAlign:'left',
                  fontSize: "12px",
                  color: "#57534e",
                  margin: "2px 0 0 0",
                }}
              >
                {plant.lightRequirement}
              </p>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
            <Thermometer size={12} style={{ color: "#22c55e", marginTop: "2px", flexShrink: 0 }} />
            <div style={{ flex: "1" }}>
              <p
                style={{
                  textAlign:'left',
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "#44403c",
                  margin: "0",
                }}
              >
                Temperatura
              </p>
              <p
                style={{
                  textAlign:'left',
                  fontSize: "12px",
                  color: "#57534e",
                  margin: "2px 0 0 0",
                }}
              >
                {plant.temperature}
              </p>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default PlantCard;
