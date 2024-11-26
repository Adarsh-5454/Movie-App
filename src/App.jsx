import React from "react";
import Home from "./Home";
import MovieDetails from "./MovieDetails";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MovieDetails/:id" element={<MovieDetails />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
