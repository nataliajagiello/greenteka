import type React from "react"
import "./PlantNotFoundCard.css"

interface PlantNotFoundCardProps {
  searchTerm?: string
  message?: string
  subtitle?: string
}

const PlantNotFoundCard: React.FC<PlantNotFoundCardProps> = ({
  searchTerm,
  message = "Nie znaleziono roślin",
  subtitle = "Spróbuj użyć innych słów kluczowych",
}) => {
  return (
    <div className="plant-not-found-card">
      <div className="not-found-icon">🌱</div>
      <div className="not-found-title">{searchTerm ? `Brak wyników dla "${searchTerm}"` : message}</div>
      <div className="not-found-subtitle">{subtitle}</div>
      <div className="not-found-suggestions">
        <p className="suggestions-title">Spróbuj wyszukać:</p>
        <ul className="suggestions-list">
          <li>Monstera</li>
          <li>Sansewieria</li>
          <li>Aloes</li>
        </ul>
      </div>
    </div>
  )
}

export default PlantNotFoundCard
