import React, { useState, useEffect } from 'react'
import MoviesServices from "../services/MoviesService"


export const MovieDetail = (props) => {

    const [movieID, setMovieID] = useState(props.match.params.movieID)
    const [movie, setMovie] = useState({ data: {} })

    const requestMovie = async () => {
        const MovieResult = await MoviesServices.getByMovieId(movieID)
        setMovie(MovieResult)
    }

    useEffect(() => {
        requestMovie();
    }, [])

    return (<div>{movie.data.title}</div>)
}