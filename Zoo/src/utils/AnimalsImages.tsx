import anaconda from "../assets/anaconda.jpg";
import croccodile from "../assets/croccodile.jpg";
import giraffe from "../assets/giraffe.jpg";
import gorila from "../assets/gorilla.jpg";
import hypo from "../assets/hypo.jpg";
import tiger from "../assets/tiger.jpg";
import antilopa from "../assets/antilope.jpg";
import pinguin from "../assets/pinguin.jpg";
import elephant from "../assets/elephant.jpg";

export interface animalImage {
  image: string;
  name: string;
  text: string;
}

export const animalImages: animalImage[] = [
  {
    image: anaconda,
    name: "Anaconda",
    text: "Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se pozorovatel nechal svést ke čtení obsahu. P",
  },
  {
    image: antilopa,
    name: "Antilope",
    text: "Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se pozorovatel nechal svést ke čtení obsahu. P",
  },
  {
    image: croccodile,
    name: "Croccodile",
    text: "Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se pozorovatel nechal svést ke čtení obsahu. P",
  },
  {
    image: giraffe,
    name: "Giraffe",
    text: "Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se pozorovatel nechal svést ke čtení obsahu. P",
  },
  {
    image: gorila,
    name: "Gorila",
    text: "Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se pozorovatel nechal svést ke čtení obsahu. P",
  },
  {
    image: hypo,
    name: "Hypothalamus",
    text: "Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se pozorovatel nechal svést ke čtení obsahu. P",
  },
  {
    image: tiger,
    name: "Tiger",
    text: "Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se pozorovatel nechal svést ke čtení obsahu. P",
  },
  {
    image: pinguin,
    name: "Pinguin",
    text: "Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se pozorovatel nechal svést ke čtení obsahu. P",
  },
  {
    image: elephant,
    name: "Elephant",
    text: "Pokud by se pro stejný účel použil smysluplný text, bylo by těžké hodnotit pouze vzhled, aniž by se pozorovatel nechal svést ke čtení obsahu. P",
  },
];
