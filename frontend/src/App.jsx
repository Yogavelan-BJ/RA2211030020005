import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Feed from "./pages/Feed";
import TopUsers from "./pages/TopUsers";
import TrendingPosts from "./pages/TrendingPosts";
import { AppProvider } from "./context/context";
function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/top-users" element={<TopUsers />} />
          <Route path="/trending-posts" element={<TrendingPosts />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
