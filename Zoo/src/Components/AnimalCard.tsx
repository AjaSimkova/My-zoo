import React, { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
  image: string;
  name: string;
}

export const AnimalCard: FC<Props> = ({ image, name }) => {
  return (
    <div className="flex flex-col gap-3  py-2 px-6 w-full max-w-[500px] bg-sky-200 h-[420px]">
      <h2 className="text-3xl font-bold">{name}</h2>
      <img className=" h-[70%] object-cover" src={image}></img>
      <Link
        className="text-xl text-white bg-blue-800 rounded-sm text-center p-3 hover:bg-blue-900 "
        to={`/detail/${name}`}
      >
        Show more
      </Link>
    </div>
  );
};
