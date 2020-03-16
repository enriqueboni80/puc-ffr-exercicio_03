import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux'
import MoviesServices from "../services/MoviesService"
import { Link } from "react-router-dom"
import './movie-list.css'
import { IoIosStarOutline, IoIosStar } from 'react-icons/io'
import { useSelector } from 'react-redux'


const MoviesList = () => {
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
    alert('Apagar Favorito')
  }

  const checarFavorito = (movieID) => {
    var exist = false
    {
      favorites.map((favorite) => {
        console.log(`${favorite.id} ---- ${movieID}`)
        if (movieID === favorite.id) {
          exist = true
        }
      })
    }
    return exist
  }

  return (
    <div className="container">
      <div className="lista-filmes">
        {movies.data.results.map((movie, contador) => {
          return (
            <article className="filme">
              <img src={`${moviesLocate}/${movie.poster_path}`} alt="capa" />
              <div className="link">
                <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                <div>
                  {
                    checarFavorito(movie.id)
                      ? (<a href="/" onClick={(e) => removerFavorito(movie, e)}><IoIosStar size={35} /></a>)
                      : (<a href="/" onClick={(e) => adcionarFavorito(movie, e)}><IoIosStarOutline size={35} /></a>)
                  }
                </div>

              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
};

export default MoviesList
