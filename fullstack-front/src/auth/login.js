import React , {useRef, useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import AuthService from '../services/authService';

import photo from '../img/auth_photo.jpg'

function Login() {

    let navigate = useNavigate();

    const phoneRef = useRef();
    const errorRef = useRef();

    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        phoneRef.current.focus();
    }, []);

    useEffect(() => {
        setError("");
    }, [phone, password]);

    const onSubmit = async (e) => {
        e.preventDefault(); // не обновлять страницу
        setError("");
        AuthService.login(phone, password).then(
            () => {
                navigate("/");
                window.location.reload();
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                setError(resMessage);
            }
        );
    }


    return (
        <div>
            <section className="vh-100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 text-black">
                            <div className="d-flex justify-content-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                                <form className="auth-form" onSubmit={(e) => onSubmit(e)} style={{ width: '23rem' }}>
                                    <span ref={errorRef} style={{ color: "red" }} className={error ? "error" : "offscreen"} aria-live="assertive">
                                        {error}
                                    </span>
                                    <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Вход в систему</h3>
                                    <div className="form-outline mb-4">
                                        <input  ref={phoneRef} onChange={(e) => setPhone(e.target.value)} required name="phone" value={phone} type="text" placeholder='Номер телефона' id="form2Example18" className="form-control form-control-lg" />
                                        <label className="form-label" htmlFor="form2Example18">Логин / Номер телефона</label>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input onChange={(e) => setPassword(e.target.value)}required name="password" value={password} type="password" placeholder='Пароль' id="form2Example28" className="form-control form-control-lg" />
                                        <label className="form-label" htmlFor="form2Example28">Пароль</label>
                                    </div>

                                    <div className="pt-1 mb-4">
                                        <button className="btn btn-success btn-lg btn-block">Войти</button>
                                    </div>
                                    <p>У Вас пока нет аккаунта? <Link to="/register" className="link-info">Зарегистрируйтесь</Link></p>
                                </form>
                            </div>
                        </div>
                        <div className="col-sm-6 px-0 d-none d-sm-block">
                            <img src={photo} alt="Login image" className="w-100 vh-100" style={{ objectFit: 'cover', objectPosition: 'left' }} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;