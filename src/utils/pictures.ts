
import epipremnumImg from "../assets/epipremnum.jpg";
import monsteraImg from "../assets/monstera.jpg";
import sansevieriaImg from "../assets/sansewieria.jpg";
import krotonImg from "../assets/kroton.jpg";
import aloesImg from "../assets/aloes.jpg";
import hibiskusImg from "../assets/hibiskus.jpg";
import kalateaImg from "../assets/calathea.jpg";
import pachiraImg from "../assets/pachira.jpg";
import hoyaImg from "../assets/hoya.jpg";
import pileaImg from "../assets/pilea.jpg";
import strelicjaImg from "../assets/strelicja.jpg";
import zielistkaImg from "../assets/zielistka.jpg";
import ficusbenjaminImg from "../assets/fikusbenjamin.jpg";

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
    case "Kalatea":
      return kalateaImg;
    case "Pachira":
      return pachiraImg;    
    case "Hoja":
      return hoyaImg;
        case "Pieniążek":
      return pileaImg;
    case "Strelicja":
      return strelicjaImg;    
    case "Zielistka":
      return zielistkaImg;
    case "Fikus Benjamina":
      return ficusbenjaminImg;
    default:
      return epipremnumImg;
  }
}

export {getPicture}