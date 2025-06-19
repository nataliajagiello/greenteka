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
  {
  id: 4,
  name: "Aloes",
  scientificName: "Aloe vera",
  description:
    "Sukulent o mięsistych liściach zawierających żel o właściwościach leczniczych. Bardzo łatwy w uprawie i odporny na suszę.",
  difficulty: "Łatwa",
  wateringFrequency: "Raz na 2-3 tygodnie, gdy ziemia całkowicie przeschnie",
  lightRequirement: "Pełne słońce lub jasne światło",
  temperature: "18-27°C",
  image: "../assets/aloes.jpg", // upewnij się, że obraz istnieje
},
{
  id: 5,
  name: "Kroton",
  scientificName: "Codiaeum variegatum",
  description:
    "Roślina ozdobna o kolorowych, wzorzystych liściach. Potrzebuje wilgotności i stałych warunków, ale zachwyca intensywnymi barwami.",
  difficulty: "Średnia",
  wateringFrequency: "Utrzymuj lekko wilgotną ziemię, nie przesuszaj",
  lightRequirement: "Jasne, rozproszone światło (im więcej, tym intensywniejsze kolory)",
  temperature: "18-26°C",
  image: "../assets/kroton.jpg",
},
{
  id: 6,
  name: "Hibiskus",
  scientificName: "Hibiscus rosa-sinensis",
  description:
    "Efektowna roślina kwitnąca z dużymi kwiatami. Lubi ciepło i wilgoć. Idealna na słoneczne parapety lub tarasy.",
  difficulty: "Średnia",
  wateringFrequency: "Regularnie, utrzymuj wilgotne podłoże",
  lightRequirement: "Dużo światła słonecznego",
  temperature: "20-30°C",
  image: "../assets/hibiskus.jpg",
}
];
