export interface Plant {
  id: number
  name: string
  scientificName: string
  description: string
  difficulty: "Łatwa" | "Średnia" | "Trudna"
  wateringFrequency: string
  lightRequirement: string
  temperature: string
  image: string
}

export const plants: Plant[] = [
  {
    id: 1,
    name: "Sansewieria",
    scientificName: "Sansevieria trifasciata",
    description:
      "Niezwykle odporna roślina o sztywnych, mięsistych liściach. Oczyszcza powietrze i produkuje tlen w nocy. Toleruje zaniedbania.",
    difficulty: "Łatwa",
    wateringFrequency: "Raz na 2-3 tygodnie, zimą rzadziej",
    lightRequirement: "Od słabego do jasnego światła",
    temperature: "15-25°C",
    image: "../assets/sansewieria.jpg"
  },
  {
    id: 2,
    name: "Monstera",
    scientificName: "Monstera deliciosa",
    description:
      "Charakterystyczne dziurawe liście czynią ją wyjątkową. Potrzebuje podpory do wspinania się. Młode liście są całe, dziury pojawiają się z wiekiem.",
    difficulty: "Średnia",
    wateringFrequency: "Co 7-10 dni, sprawdzaj wilgotność ziemi",
    lightRequirement: "Jasne światło rozproszone",
    temperature: "20-25°C",
    image: "../assets/monstera.jpg", 
  },
  {
    id: 3,
    name: "Epipremnum",
    scientificName: "Epipremnum aureum",
    description:
      "Popularna roślina pnąca o sercowatych liściach. Bardzo odporna i tolerancyjna, idealna dla początkujących. Może rosnąć w wodzie lub ziemi.",
    difficulty: "Łatwa",
    wateringFrequency: "Raz w tygodniu, gdy ziemia przeschnie",
    lightRequirement: "Półcień do jasnego światła rozproszonego",
    temperature: "18-24°C",
    image: "../assets/epipremnum.jpg",
  },
];
