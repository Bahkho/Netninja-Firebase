import React from "react";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const navigate = useNavigate();
  const nextPage = () => {
    navigate("/logout");
  };
  return (
    <div className="flex flex-col gap-8 justify-center items-center text-white w-[30%] mx-auto mt-8">
      <h1 className="font-bold underline">Read The Informations Below</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        incidunt molestias, omnis reprehenderit possimus officiis earum sequi
        veritatis aperiam corporis adipisci at culpa eum natus nobis assumenda
        cupiditate aliquid numquam?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        incidunt molestias, omnis reprehenderit possimus officiis earum sequi
        veritatis aperiam corporis adipisci at culpa eum natus nobis assumenda
        cupiditate aliquid numquam?
      </p>
      <button className=" bg-slate-700 px-4 py-2 w-full" onClick={nextPage}>
        Next Page To Logout
      </button>
    </div>
  );
};

export default Info;
