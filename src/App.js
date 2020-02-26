import React from "react";
import "./styles.css";
import { MoviesList } from "./components/MoviesList";
import { MovieDetail } from "./components/MovieDetails"
import { BrowserRouter, Route } from "react-router-dom"

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={MoviesList} />
        <Route exact path="/movie/:movieID" component={MovieDetail} />
      </BrowserRouter>
    </div>
  );
}
