import React from "react";
import { useAppContext } from "../context/context";
import Post from "../components/Post";

function Feed() {
  const { data } = useAppContext();
  return (
    <div className="w-screen flex flex-wrap items-center justify-center">
      {data.map((p, index) => (
        <Post id={p.id} title={p.title} index={p.index} image={p.image} />
      ))}
    </div>
  );
}

export default Feed;
