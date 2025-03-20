export function postsController(req, res) {
  const { type } = req.query;
  if (type === "popular") {
    res.status(200).json({ popularPosts: [{ id: 1 }, { id: 2 }] });
  } else {
    res.status(200).json({ latestPosts: [{ id: 3 }, { id: 4 }] });
  }
}
