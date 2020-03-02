import React, { useState, useEffect } from 'react'
import MoviesServices from "../services/MoviesService"
import './movie-details.css'


const MovieDetail = (props) => {

    const movieID = props.match.params.movieID
    const moviesURL = 'https://image.tmdb.org/t/p/w500/'
    const [movie, setMovie] = useState({ data: {} })
    

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

export default MovieDetail;