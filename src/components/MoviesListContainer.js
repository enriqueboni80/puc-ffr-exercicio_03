import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux'
import MoviesServices from "../services/MoviesService"
import './movie-list.css'
import { useSelector } from 'react-redux'
import MoviesListPresentation from './MoviesListPresentation'

const MoviesListContainer = () => {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState({ data: { results: [] } })
  const moviesLocate = 'https://image.tmdb.org/t/p/w500/'
  const favorites = useSelector(state => state.favorites)

  const requestMovies = async () => {
    const MoviesResult = await MoviesServices.getPopularMovies()
    setMovies(MoviesResult)
  }

  useEffect(() => {
    requestMovies();
  }, [])

  const adcionarFavorito = (movie, e) => {
    e.preventDefault()
    dispatch({
      type: 'ADD_FAVORITES',
      movie
    })
  }

  const removerFavorito = (movie, e) => {
    e.preventDefault()
    dispatch({
      type: 'DEL_FAVORITES',
      movie
    })
  }

  const checarFavorito = (movieID) => {
    var exist = false
    {
      favorites.map((favorite) => {
        if (movieID === favorite.id) {
          exist = true
        }
      })
    }
    return exist
  }

  return (
    <MoviesListPresentation
      movies={movies.data.results}
      moviesLocate={moviesLocate}
      checarFavorito={checarFavorito}
      removerFavorito={removerFavorito}
      adcionarFavorito={adcionarFavorito}
    />
  )
};

export default MoviesListContainer
