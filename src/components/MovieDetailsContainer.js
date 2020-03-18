import React, { useState, useEffect } from 'react'
import MoviesServices from "../services/MoviesService"
import MovieDetailPresentation from "./MovieDetailsPresentation"
import './movie-details.css'


const MovieDetailContainer = (props) => {

    const movieID = props.match.params.movieID
    const [movie, setMovie] = useState({ data: {} })


    const requestMovie = async () => {
        const MovieResult = await MoviesServices.getByMovieId(movieID)
        setMovie(MovieResult)
    }

    useEffect(() => {
        requestMovie();
    }, [])

    return (
        <MovieDetailPresentation movie={movie} />
    )
}

export default MovieDetailContainer;