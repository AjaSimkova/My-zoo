import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { animalImages } from "../utils/AnimalsImages";

const Detail = () => {
  const navigate = useNavigate();
  const { id: name } = useParams();
  const animal = animalImages.find((img) => img.name === name);

  if (!animal) return <div>animal not found.....</div>;
  return (
    <div className="flex flex-col lg:flex-row justify-center  px-5  gap-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold">{animal.name}</h1>
        <img className="min-w-[50%]" src={animal.image}></img>
      </div>
      <div className="flex flex-col justify-start pt-16 gap-8">
        <p>{animal.text}</p>
        <button
          className="bg-blue-800 text-white text-hl rounded-sm p-3 hover:bg-blue-900"
          onClick={() => navigate("/")}
        >
          Return to list
        </button>
      </div>
    </div>
  );
};

export default Detail;
