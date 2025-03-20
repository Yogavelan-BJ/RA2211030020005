import React from "react";
import { useAppContext } from "../context/context";

function TopUsers() {
  const { data } = useAppContext();
  return (
    <div className="w-screen flex flex-wrap items-center justify-center">
      {data.map((p, index) => (
        <div
          key={index}
          className="w-58 h-58 bg-black m-5 flex flex-col rounded-lg p-2 items-center justify-center"
        >
          <h1 className="text-xl text-white">User ID :{p.id}</h1>
        </div>
      ))}
    </div>
  );
}

export default TopUsers;
