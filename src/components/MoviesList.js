import React, { useState, useEffect } from "react";
import MoviesServices from "../services/MoviesService"
import { Link } from "react-router-dom"
import './movie-list.css'


export const MoviesList = () => {

  const [movies, setMovies] = useState({ data: { results: [] } })
  const [moviesLocate, setMoviesLocate] = useState('https://image.tmdb.org/t/p/w500/')

  const requestMovies = async () => {
    const MoviesResult = await MoviesServices.getPopularMovies()
    setMovies(MoviesResult)
  }

  useEffect(() => {
    requestMovies();
  }, [])

  return (
    <div className="container">
      <div className="lista-filmes">
        {movies.data.results.map(movie => {
          return (
            <article className="filme">
              <strong>{movie.title}</strong>
              <img src={`${moviesLocate}/${movie.poster_path}`} alt="capa" />
              <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
            </article>
          )
        })}
      </div>
    </div>
  )
};
