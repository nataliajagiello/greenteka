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
},
{
  id: 7,
  name: "Kalatea",
  scientificName: "Calathea",
  description:
    "Dekoracyjna roślina o ozdobnych liściach z unikalnymi wzorami. Ceni wysoką wilgotność i rozproszone światło.",
  difficulty: "Średnia",
  wateringFrequency: "Utrzymuj stale lekko wilgotne podłoże, nie zalewaj",
  lightRequirement: "Rozproszone światło, unikać bezpośredniego słońca",
  temperature: "18-25°C",
  image: "../assets/calathea.jpg",
},
{
  id: 8,
  name: "Pachira",
  scientificName: "Pachira aquatica",
  description:
    "Drzewko szczęścia z plecionym pniem i błyszczącymi liśćmi. Łatwa w uprawie, świetnie nadaje się do wnętrz.",
  difficulty: "Łatwa",
  wateringFrequency: "Podlewaj umiarkowanie, gdy wierzchnia warstwa ziemi przeschnie",
  lightRequirement: "Jasne miejsce, najlepiej z rozproszonym światłem",
  temperature: "18-30°C",
  image: "../assets/pachira.jpg",
},
{
  id: 9,
  name: "Hoja",
  scientificName: "Hoya carnosa",
  description:
    "Pnącze o mięsistych liściach i pachnących kwiatach. Idealna do wiszących doniczek. Mało wymagająca.",
  difficulty: "Łatwa",
  wateringFrequency: "Podlewaj oszczędnie, pozwól ziemi przeschnąć między podlewaniami",
  lightRequirement: "Jasne, rozproszone światło; znosi też półcień",
  temperature: "18-27°C",
  image: "../assets/hoya.jpg",
},
{
  id: 10,
  name: "Pieniążek",
  scientificName: "Pilea peperomioides",
  description:
    "Urocza roślina o okrągłych, błyszczących liściach. Łatwa w uprawie i szybko się rozmnaża. Symbol dobrobytu.",
  difficulty: "Łatwa",
  wateringFrequency: "Podlewaj umiarkowanie, gdy wierzchnia warstwa ziemi przeschnie",
  lightRequirement: "Jasne miejsce z rozproszonym światłem",
  temperature: "18-24°C",
  image: "../assets/pilea.jpg",
},
{
  id: 11,
  name: "Strelicja",
  scientificName: "Strelitzia nicolai",
  description:
    "Efektowna roślina o dużych liściach przypominających bananowca. Potrzebuje dużo światła i przestrzeni.",
  difficulty: "Średnia",
  wateringFrequency: "Regularnie, gdy wierzchnia warstwa ziemi przeschnie",
  lightRequirement: "Dużo światła, najlepiej bezpośredniego",
  temperature: "20-30°C",
  image: "../assets/strelicja.jpg",
},
{
  id: 12,
  name: "Zielistka",
  scientificName: "Chlorophytum comosum",
  description:
    "Łatwa i szybkorosnąca roślina doniczkowa, idealna dla początkujących. Dobrze oczyszcza powietrze.",
  difficulty: "Łatwa",
  wateringFrequency: "Podlewaj regularnie, utrzymując lekką wilgotność podłoża",
  lightRequirement: "Jasne, rozproszone światło lub półcień",
  temperature: "16-24°C",
  image: "../assets/zielistka.jpg",
},
{
  id: 13,
  name: "Fikus Benjamina",
  scientificName: "Ficus benjamina",
  description:
    "Klasyczna roślina domowa o eleganckich, delikatnych liściach. Lubi stabilne warunki i jasne miejsce.",
  difficulty: "Średnia",
  wateringFrequency: "Podlewaj umiarkowanie, gdy wierzchnia warstwa ziemi przeschnie",
  lightRequirement: "Jasne miejsce, najlepiej z rozproszonym światłem",
  temperature: "18-25°C",
  image: "../assets/ficusbenjamin.jpg",
},
{
  id: 14,
  name: "Bluszcz",
  scientificName: "Hedera helix",
  description:
    "Pnącze o dekoracyjnych liściach, świetne do wiszących doniczek. Lubi chłód i umiarkowane podlewanie.",
  difficulty: "Średnia",
  wateringFrequency: "Podlewaj regularnie, nie dopuszczaj do przelania",
  lightRequirement: "Rozproszone światło lub półcień",
  temperature: "15-22°C",
  image: "../assets/bluszcz.jpg",
},
{
  id: 15,
  name: "Fitonia",
  scientificName: "Fittonia albivenis",
  description:
    "Niewielka roślina o kolorowych, kontrastowych żyłkach na liściach. Wymaga wysokiej wilgotności.",
  difficulty: "Średnia",
  wateringFrequency: "Utrzymuj stałą wilgotność podłoża, nie przesuszaj",
  lightRequirement: "Rozproszone światło, unikać bezpośredniego słońca",
  temperature: "18-24°C",
  image: "../assets/fitonia.jpg",
},
{
  id: 16,
  name: "Dracena",
  scientificName: "Dracaena marginata",
  description:
    "Roślina o wąskich, dekoracyjnych liściach. Odporna i łatwa w uprawie, dobrze znosi suche powietrze.",
  difficulty: "Łatwa",
  wateringFrequency: "Podlewaj umiarkowanie, gdy ziemia przeschnie",
  lightRequirement: "Jasne miejsce, ale nie bezpośrednie słońce",
  temperature: "18-26°C",
  image: "../assets/dracena.jpg",
},
{
  id: 17,
  name: "Paprotka",
  scientificName: "Nephrolepis exaltata",
  description:
    "Klasyczna roślina domowa o pierzastych liściach. Lubi wilgoć i nie znosi przesuszania.",
  difficulty: "Średnia",
  wateringFrequency: "Utrzymuj stale wilgotne podłoże, zraszaj liście",
  lightRequirement: "Rozproszone światło lub półcień",
  temperature: "16-24°C",
  image: "../assets/paprotka.jpg",
},
{
  id: 18,
  name: "Skrzydłokwiat",
  scientificName: "Spathiphyllum wallisii",
  description:
    "Roślina oczyszczająca powietrze, z eleganckimi białymi kwiatami. Idealna do cienia i półcienia.",
  difficulty: "Łatwa",
  wateringFrequency: "Podlewaj regularnie, ziemia powinna być lekko wilgotna",
  lightRequirement: "Półcień lub jasne, rozproszone światło",
  temperature: "18-26°C",
  image: "../assets/skrzydlokwiat.jpg",
}];
