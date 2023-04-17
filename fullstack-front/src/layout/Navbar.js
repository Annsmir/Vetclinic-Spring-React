import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success bg-opacity-75">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"> Vita Med </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link" to="/doctors">Наши врачи</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/visits">Записи в клинику</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/patients">Пациенты</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/owners">Хозяева</Link>
                            </li>
                            {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
            
        </div>
    )
}
