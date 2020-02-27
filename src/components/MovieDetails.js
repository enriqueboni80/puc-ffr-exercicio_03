import React, { useState, useEffect } from 'react'
import MoviesServices from "../services/MoviesService"
import './movie-details.css'


export const MovieDetail = (props) => {

    const [movieID, setMovieID] = useState(props.match.params.movieID)
    const [movie, setMovie] = useState({ data: {} })
    const [moviesLocate, setMoviesLocate] = useState('https://image.tmdb.org/t/p/w500/')

    const requestMovie = async () => {
        const MovieResult = await MoviesServices.getByMovieId(movieID)
        setMovie(MovieResult)
    }

    useEffect(() => {
        requestMovie();
    }, [])

    return (
        <div className="container-movie">
            {console.log(movie)}
            <div className="filme">
                <div className="title">
                    {movie.data.title}
                </div>
                <img src={`${moviesLocate}/${movie.data.backdrop_path}`} alt="capa" />
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