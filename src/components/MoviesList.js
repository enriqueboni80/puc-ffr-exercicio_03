import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux'
import MoviesServices from "../services/MoviesService"
import { Link } from "react-router-dom"
import './movie-list.css'
import { IoIosStarOutline, IoIosStar } from 'react-icons/io'


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

  
  const toogleFavorito = (contador, ligado=false) => {
      if(ligado) {
        document.getElementsByClassName('add-favorite')[contador].style.display = "block";
        document.getElementsByClassName('remove-favorite')[contador].style.display = "none";
      }else{
        document.getElementsByClassName('add-favorite')[contador].style.display = "none";
        document.getElementsByClassName('remove-favorite')[contador].style.display = "block";
      }
  }
  
  
  const adcionarFavorito = (movie, contador, e) => {
    e.preventDefault()
    toogleFavorito(contador)
    dispatch({
      type: 'ADD_FAVORITES',
      movie
    })
  }

  const removerFavorito = (movie, contador, e) => {
    e.preventDefault()
    toogleFavorito(contador, true)
    alert('Apagar Favorito')
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
                  <a href="/" class="add-favorite" onClick={(e) => adcionarFavorito(movie, contador, e)}> <IoIosStarOutline size={35} /> </a>
                  <a href="/" style={{display: "none"}} class="remove-favorite" onClick={(e) => removerFavorito(movie, contador, e)}> <IoIosStar size={35} /> </a>
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
};

export default MoviesList
