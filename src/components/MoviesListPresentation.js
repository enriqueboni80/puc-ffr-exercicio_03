import React from 'react'
import { Link } from "react-router-dom"
import { IoIosStarOutline, IoIosStar } from 'react-icons/io'


const MoviesListPresentation = (props) => {
    return (
        <div className="container">
            <div className="lista-filmes">
                {props.movies.map((movie) => {
                    return (
                        <article className="filme">
                            <img src={`${props.moviesLocate}/${movie.poster_path}`} alt="capa" />
                            <div className="link">
                                <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                                <div>
                                    {
                                        props.checarFavorito(movie.id)
                                            ? (<a href="/" onClick={(e) => props.removerFavorito(movie, e)}><IoIosStar size={35} /></a>)
                                            : (<a href="/" onClick={(e) => props.adcionarFavorito(movie, e)}><IoIosStarOutline size={35} /></a>)
                                    }
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}

export default MoviesListPresentation