"use client"

import type React from "react"
import "./SearchBar.css"

interface SearchBarProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  resultsCount?: number
  placeholder?: string
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
  resultsCount,
  placeholder = "Wyszukaj roślinę...",
}) => {
  const getPlantPlural = (count: number): string => {
    if (count === 1) return "roślinę"
    if (count >= 2 && count <= 4) return "rośliny"
    return "roślin"
  }

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <div className="search-input-container">
          <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <input
            type="text"
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="search-input"
            autoComplete="off"
            autoCapitalize="none"
            spellCheck="false"
          />
        </div>

        {/* Wyniki zawsze obecne, ale niewidoczne gdy brak wyszukiwania */}
        <div className={`search-results-counter ${!searchTerm ? "hidden" : ""}`}>
          <p className="results-text">
            {resultsCount === 0
              ? "Nie znaleziono roślin"
              : `Znaleziono ${resultsCount} ${getPlantPlural(resultsCount ?? 0)}`}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
