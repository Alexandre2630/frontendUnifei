import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

export default function Menu() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/"> Início </Link> </li>
                    <li><Link to="/IMC"> IMC </Link></li>
                    <li><Link to="/Unidades"> Unidades </Link></li>
                </ul>
            </nav>
        </header>
    )
}

