import React from "react";

const Hello = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center text-white mt-8">
      <h1 className="font-bold underline">Welcome To My Course</h1>
      <input
        type="email"
        placeholder="Email..."
        className="p-2 w-[30%] text-slate-700 "
      />
      <input
        type="password"
        placeholder="Password..."
        className="p-2 w-[30%] text-slate-700 "
      />
      <div className="flex flex-row justify-between w-[30%]">
        <button className=" bg-slate-700 px-4 py-2">Sign In With Email</button>
        <button className=" bg-slate-700 px-4 py-2">Sign In With Goggle</button>
      </div>
    </div>
  );
};

export default Hello;
