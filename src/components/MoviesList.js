import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux'
import MoviesServices from "../services/MoviesService"
import { Link } from "react-router-dom"
import './movie-list.css'


const MoviesList = () => {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState({ data: { results: [] } })
  const moviesLocate = 'https://image.tmdb.org/t/p/w500/'

  const requestMovies = async () => {
    const MoviesResult = await MoviesServices.getPopularMovies()
    setMovies(MoviesResult)
  }

  useEffect(() => {
    requestMovies();
  }, [])

  const AdcionarFavorito = (movie) => {
    dispatch({
      type: 'ADD_FAVORITES',
      movie
    })
  }

  return (
    <div className="container">
      <div className="lista-filmes">
        {movies.data.results.map(movie => {
          return (
            <article className="filme">
              <img src={`${moviesLocate}/${movie.poster_path}`} alt="capa" />
              <div className="link">
                <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                <button onClick={() => AdcionarFavorito(movie)}> aqui </button>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
};

export default MoviesList
