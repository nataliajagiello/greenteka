import "./Header.css"
import { Flower, Flower2, Leaf, Sprout, TreePine } from "lucide-react"

const Header: React.FC = () => {
  const getIconSize = (small: number, medium: number, large: number) => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 480) return small
      if (window.innerWidth < 768) return medium
    }
    return large
  }

  return (
    <header className="headerContainer">
      <div style={{ position: "relative", display: "inline-block" }}>
        <div className="decorativeLeaf">
          <Leaf size={48} style={{ transform: "rotate(12deg)" }} />
        </div>
        <div className="decorativeLeaf">
          <Leaf size={32} style={{ transform: "rotate(-45deg)" }} />
        </div>
        <div className="decorativeLeaf">
          <Leaf size={24} style={{ transform: "rotate(45deg)" }} />
        </div>

        {/* Title */}
        <h1 className="headerTitle">
          <Sprout size={getIconSize(32, 40, 48)} className="conSprout" />
          ZIELOTEKA
          <TreePine size={getIconSize(28, 36, 40)} className="iconTreePine" />
        </h1>
      </div>

      {/* Description */}
      <div className="descriptionContainer">
        <div className="descriptionLine" />
        <p className="descriptionText">
          <Flower size={getIconSize(12, 16, 16)} className="iconFlower" />
          Karty pielęgnacji roślin domowych
          <Flower2 size={getIconSize(12, 16, 16)} className="iconFlower2" />
        </p>
        <div className="descriptionLine" />
      </div>

      {/* Additional Description */}
      <p className="additionalDescription">Twoja kolekcja praktycznych porad dla zdrowych i pięknych roślin</p>
    </header>
  )
}

export default Header
