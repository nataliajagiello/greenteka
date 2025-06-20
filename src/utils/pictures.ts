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
import bluszczImg from "../assets/bluszcz.jpeg";
import paprotkaImg from "../assets/paprotka.jpeg";
import skrzydlokwiatImg from "../assets/skrzydlokwiat.jpeg";
import dracenaImg from "../assets/dracena.jpeg";
import fitoniaImg from "../assets/fitonia.jpg";
import alokazjaImg from "../assets/alokazja.jpeg";
import anturiumImg from "../assets/anturium.jpeg";
import arekaImg from "../assets/areka.jpeg";
import echinocactusImg from "../assets/echinocactus.jpeg";
import eszeweriaImg from "../assets/eszeweria.jpeg";
import fikusrobustaImg from "../assets/fikusrobusta.jpeg";
import gruboszImg from "../assets/grubosz.jpeg";
import marantaImg from "../assets/maranta.jpeg";
import oliwkaImg from "../assets/oliwka.jpeg";
import oplatwaImg from "../assets/oplatwa.jpeg";
import opuncjaImg from "../assets/opuncja.jpeg";
import syngoniumImg from "../assets/syngonium.jpeg";
import szefleraImg from "../assets/szeflera.jpeg";
import zamiokulkasImg from "../assets/zamiokulkas.jpeg";


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
    case "Skrzydłokwiat":
      return skrzydlokwiatImg;
    case "Dracena":
      return dracenaImg;
    case "Paprotka":
      return paprotkaImg;    
    case "Bluszcz":
      return bluszczImg;
    case "Fitonia":
      return fitoniaImg;
    case "Alokazja olbrzymia":
      return alokazjaImg;
    case "Anturium":
      return anturiumImg;
    case "Palma Areka":
      return arekaImg;  
    case "Echinokaktus Grusona":
      return echinocactusImg;
    case "Eszeweria":
      return eszeweriaImg;
    case "Fikus Robusta":
      return fikusrobustaImg;
    case "Grubosz":
      return gruboszImg;
    case "Maranta":
      return marantaImg;
    case "Oliwka":
      return oliwkaImg;
    case "Oplątwa":
      return oplatwaImg;
    case "Opuncja": 
      return opuncjaImg;
    case "Syngonium":
      return syngoniumImg;
    case "Szeflera":
      return szefleraImg;
    case "Zamiokulkas":
      return zamiokulkasImg;
    default:
      return epipremnumImg;
  }
}

export {getPicture}