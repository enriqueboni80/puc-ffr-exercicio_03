import React from "react";
import "./styles.css";
import MoviesList from "./components/MoviesListContainer";
import MovieDetail from "./components/MovieDetailsContainer"
import MoviesFavorites from './components/MoviesFavorites'
import Header from './components/Header'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from "react-router-dom"

import store from './store'

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={MoviesList} />
            <Route exact path="/movie/:movieID" component={MovieDetail} />
            <Route exact path="/favorites" component={MoviesFavorites} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
