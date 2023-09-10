import React from "react";
import { animalImages } from "../utils/AnimalsImages";
import { AnimalCard } from "../Components/AnimalCard";

function App() {
  return (
    <div className="flex flex-wrap gap-2 w-[max(80%,400px)] justify-center m-auto">
      {animalImages.map((data) => (
        <AnimalCard key={data.name} image={data.image} name={data.name} />
      ))}
    </div>
  );
}

export default App;
