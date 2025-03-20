import React from "react";
import Post from "../components/Post";
import { useAppContext } from "../context/context";

function TrendingPosts() {
  const { data } = useAppContext();
  return (
    <div className="w-screen flex flex-wrap items-center justify-center">
      {data.map((p, index) => (
        <Post id={p.id} title={p.title} index={p.index} image={p.image} />
      ))}
    </div>
  );
}

export default TrendingPosts;
