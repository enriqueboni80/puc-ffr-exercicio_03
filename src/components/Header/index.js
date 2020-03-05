import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import './header.css'

const Header = () => {

    const qtdFavoritos = useSelector(state => state.favorites.length)

    return (
        <header>
            <div class="head">
                você tem: {qtdFavoritos} filmes favoritos - <Link to="/favorites">Clique aqui</Link>
            </div>
        </header>
    )
}

export default Header