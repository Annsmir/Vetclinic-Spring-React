import React, {useState, useRef, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import AuthService from '../services/authService';
import photo from '../img/auth_photo.jpg'

const Register = () => {

  let navigate = useNavigate();

  const [error, setError] = useState("");
  const errorRef = useRef();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  useEffect(() => {
    setError("");
  }, [phone, password]);

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name); // добавление нового объекта
  }

  const onChangeSurname = (e) => {
    const surname = e.target.value;
    setSurname(surname); // добавление нового объекта
  }

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email); // добавление нового объекта
  }

  const onChangePhone = (e) => {
    const phone = e.target.value;
    setPhone(phone); // добавление нового объекта
  }

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password); // добавление нового объекта
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    AuthService.register(phone, name, surname, email, password).then(
      () => {
        navigate("/login");
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
        <span ref={errorRef} className={error ? "error" : "offscreen"} aria-live="assertive">
          {error}
        </span>
            <section className="vh-100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 text-black">
                            <div className="d-flex justify-content-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                                <form className="auth-form" onSubmit={(e)=> onSubmit(e)} style={{ width: '23rem' }}>
                                    <span ref={errorRef} style={{ color: "red" }} className={error ? "error" : "offscreen"} aria-live="assertive">
                                        {error}
                                    </span>
                                    <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Регистрация</h3>

                                    <div className="form-outline mb-4">
                                        <input required type={"text"} name="name" placeholder='Имя' onChange={(e) => onChangeName(e)} value={name} id="form2Example18" className="form-control form-control-lg" />
                                        <label className="form-label" htmlFor="form2Example18">Имя</label>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input required type="text" name="surname" value={surname} onChange={(e)=>onChangeSurname(e)} placeholder='Фамилия' id="form2Example28" className="form-control form-control-lg" />
                                        <label className="form-label" htmlFor="form2Example28">Фамилия</label>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input  required type="email"  name="email" value={email} onChange={(e)=>onChangeEmail(e)} placeholder='Почта' id="form2Example18" className="form-control form-control-lg" />
                                        <label className="form-label" htmlFor="form2Example18">Почта</label>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input required  type="text" name="phone" value={phone} onChange={(e)=>onChangePhone(e)} placeholder='Номер телефона' id="form2Example18" className="form-control form-control-lg" />
                                        <label className="form-label" htmlFor="form2Example18">Номер телефона</label>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input  required id="password" name="password" value={password} onChange={(e)=>onChangePassword(e)} type="password" placeholder='Пароль' className="form-control form-control-lg" />
                                        <label className="form-label" htmlFor="form2Example18">Пароль</label>
                                    </div>

                                    <div className="pt-1 mb-4">
                                        <button className="btn btn-success btn-lg btn-block">Зарегистрироваться</button>
                                    </div>
                                    <p>Уже зарегистрированы? <Link className="link-info" to="/login">Войдите</Link></p>
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
  )
}

export default Register