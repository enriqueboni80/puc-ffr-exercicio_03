import React from "react";
import "./styles.css";
import MoviesList from "./components/MoviesList";
import MovieDetail from "./components/MovieDetails"
import MoviesFavorites from './components/MoviesFavorites'
import Header from './components/Header'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from "react-router-dom"

import store from './store'

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={MoviesList} />
          <Route exact path="/movie/:movieID" component={MovieDetail} />
          <Route exact path="/favorites" component={MoviesFavorites} />
        </BrowserRouter>
      </Provider>
    </div>
  );
}
