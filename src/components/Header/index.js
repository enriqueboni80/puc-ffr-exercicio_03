import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"

const Header = () => {

    const qtdFavoritos = useSelector(state => state.favorites.length)

    return (
    <div>
        <Link to="/favorites">Aqui</Link>
        Aqui - {qtdFavoritos}
    </div>
    )
}

export default Header