import React from 'react'
import { useState, useEffect } from 'react';
import AuthService from '../services/authService';
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom';

export default function Navbar() {

    const [showAdmin, setShowAdmin] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            setCurrentUser(user);
            setShowAdmin(user.user.role === "ROLE_ADMIN");
        }
    }, []);

    let navigate = useNavigate();

    const logOut = () => {
        AuthService.logout();
        navigate("/");

        window.location.reload();
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success bg-opacity-75">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"> Vita Med </Link>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link" to="/doctors">Наши врачи</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contacts">Наши контакты</Link>
                            </li>

                            {currentUser && !showAdmin && (
                                <li className="nav-item">
                                    <Link to={"/my_patients"} className="nav-link">
                                        Мои питомцы
                                    </Link>

                                </li>
                            )}
                            {currentUser && !showAdmin && (
                                <li className="nav-item">
                                    <Link to={"/my_visits"} className="nav-link">
                                        Мои визиты
                                    </Link>

                                </li>
                            )}
                            {currentUser && !showAdmin && (
                                <li className="nav-item">
                                    <Link to={"/profile"} className="nav-link">
                                        Профиль
                                    </Link>
                                </li>
                            )}
                            {showAdmin && (
                                <li className="nav-item">
                                    <Link to={"/visits"} className="nav-link">
                                        Записи в клиниу
                                    </Link>
                                </li>
                            )}
                            {showAdmin && (
                                <li className="nav-item">
                                    <Link to={"/patients"} className="nav-link">
                                        Пациенты
                                    </Link>

                                </li>
                            )}
                            {showAdmin && (
                                <li className="nav-item">
                                    <Link to={"/owners"} className="nav-link">
                                        Хозяева
                                    </Link>

                                </li>
                            )}
                        </ul>

                        {currentUser && (
                            <div className='me-3 text-light'>Вы вошли как {currentUser.user.name + " " + currentUser.user.surname}</div>
                        )}

                        {currentUser ? (
                            <Link href="/login" className="btn btn-outline-light" onClick={logOut}>
                                Выйти
                            </Link>
                        ) : (
                            <Link to={"/login"} className="btn btn-outline-light">
                                Войти
                            </Link>
                        )}
                    </div>
                </div>
            </nav>

        </div>
    )
}
