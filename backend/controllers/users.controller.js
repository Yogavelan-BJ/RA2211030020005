export async function usersController(req, res) {
  try {
    //the provided Auth token is not valid. I am getting error stating Unauthorized. I registerd and got my aauth token as mentioned in the instructions
    fetch("http://20.244.56.144/test/users", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNDc2NjkxLCJpYXQiOjE3NDI0NzYzOTEsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImU3ZDQ5MDA2LTNjYmItNDAzMS1iMTRhLTAyMzYyOTY3ZmRkNCIsInN1YiI6InliOTEzM0Bzcm1pc3QuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoiU1JNSVNUIiwiY2xpZW50SUQiOiJlN2Q0OTAwNi0zY2JiLTQwMzEtYjE0YS0wMjM2Mjk2N2ZkZDQiLCJjbGllbnRTZWNyZXQiOiJFQllWek9Jd2dBcUlEWFJ1Iiwib3duZXJOYW1lIjoiWW9nYXZlbGFuIEIgSiIsIm93bmVyRW1haWwiOiJ5YjkxMzNAc3JtaXN0LmVkdS5pbiIsInJvbGxObyI6IlJBMjIxMTAzMDAyMDAwNSJ9.soHNibW6NAF13BRgt7AbsnjHCYuQE1JHyU6-fqgMsLg",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => res.status(200).json(data));
  } catch (err) {
    res.status(500).send(err.message);
  }
}
