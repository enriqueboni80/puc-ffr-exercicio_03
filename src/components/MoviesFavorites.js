import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import './movie-list.css'

const MoviesFavorites = () => {
    const moviesLocate = 'https://image.tmdb.org/t/p/w500/'
    const favorites = useSelector(state => state.favorites)
    return (
        <div className="container">
          <div className="lista-filmes">
            {favorites.map(movie => {
              return (
                <article className="filme">
                  <img src={`${moviesLocate}/${movie.poster_path}`} alt="capa" />
                  <div className="link">
                    <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      )
}

export default MoviesFavorites