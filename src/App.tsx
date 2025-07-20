"use client"

import type React from "react"
import { useMemo, useState } from "react"
import "./App.css"

import { plants } from "./data/plantsData"
import { getPicture } from "./utils/pictures"

import PlantCard from "./components/PlantCard"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import PlantNotFoundCard from "./components/PlantNotFoundCard"

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("")

  const filteredPlants = useMemo(() => {
    if (!searchTerm.trim()) {
      return plants
    }

    return plants.filter(
      (plant) =>
        plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        plant.scientificName?.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }, [searchTerm])

  return (
    <div className="full-width-app">
      <Header />
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        resultsCount={filteredPlants.length}
        placeholder="Wyszukaj roślinę..."
      />

      <div className="full-width-container">
        {filteredPlants.length > 0 ? (
          filteredPlants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} picture={getPicture(plant.name)} searchTerm={searchTerm} />
          ))
        ) : searchTerm ? (
          <PlantNotFoundCard searchTerm={searchTerm} />
        ) : null}
      </div>
    </div>
  )
}

export default App
