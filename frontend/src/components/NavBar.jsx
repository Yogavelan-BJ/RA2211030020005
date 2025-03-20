import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const nav = useNavigate();
  return (
    <div className="w-screen text-2xl bg-blue-200 h-10 flex items-center justify-center font-serif">
      <button onClick={() => nav("/")} className="mx-2 cursor-pointer">
        Feed
      </button>
      <button onClick={() => nav("/top-users")} className="mx-2 cursor-pointer">
        Top-Posts
      </button>
      <button
        onClick={() => nav("/trending-posts")}
        className="mx-2 cursor-pointer"
      >
        Trending-Posts
      </button>
    </div>
  );
}

export default NavBar;
