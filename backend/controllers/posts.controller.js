export function postsController(req, res) {
  //the provided Auth token is not valid. I am getting error stating Unauthorized. I registerd and got my aauth token as mentioned in the instructions
  const { type } = req.query;
  if (type === "popular") {
    res.status(200).json({ popularPosts: [{ id: 1 }, { id: 2 }] });
  } else {
    res.status(200).json({ latestPosts: [{ id: 3 }, { id: 4 }] });
  }
}
