
import epipremnumImg from "../assets/epipremnum.jpg";
import monsteraImg from "../assets/monstera.jpg";
import sansevieriaImg from "../assets/sansewieria.jpg";
import krotonImg from "../assets/kroton.jpg";
import aloesImg from "../assets/aloes.jpg";
import hibiskusImg from "../assets/hibiskus.jpg";
import kalateaImg from "../assets/calathea.jpg";
import pachiraImg from "../assets/pachira.jpg";
import hoyaImg from "../assets/hoya.jpg";

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
    default:
      return epipremnumImg;
  }
}

export {getPicture}