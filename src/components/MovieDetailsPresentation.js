import React, { useState, useEffect } from 'react'
import './movie-details.css'

const MovieDetailPresentation = (props) => {

    const moviesURL = 'https://image.tmdb.org/t/p/w500/'
    const movie = props.movie

    return (
        <div className="container-movie">
            <div className="filme">
                <div className="title">
                    {movie.data.title}
                </div>
                <img src={`${moviesURL}/${movie.data.backdrop_path}`} alt="capa" />
                <div className="info">
                    <div className="overview">
                        {movie.data.overview}
                    </div>
                    <div className="link-pagina-filme">
                        <a target="_blank" href={movie.data.homepage}>Acesse a pagina do filme</a>
                    </div>
                </div>
            </div>
            <footer>
                footer
            </footer>
        </div>
    )
}

export default MovieDetailPresentation;