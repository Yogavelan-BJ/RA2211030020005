import React from "react";

function Post({ id, title, index, image }) {
  return (
    <div
      key={index}
      className="w-58 h-96 bg-black m-5 flex flex-col rounded-lg p-2"
    >
      <div className="h-1/2 w-full  rounded-lg">
        <img src={image} className="object-contain w-full h-full" />
      </div>
      <h1 className="text-xl text-white">Post ID :{id}</h1>
      <h1 className="text-xl text-white">Post Title :{title}</h1>
    </div>
  );
}

export default Post;
