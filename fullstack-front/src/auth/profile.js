import React from 'react'
import AuthService from '../services/authService';
import "./profile.css";
import Footer from '../layout/Footer';
import About from '../layout/About';

const Profile = () => {
    const currentUser = AuthService.getCurrentUser();

    return (
        <div>
            <About/>
            <h3>
                Данные Вашей учётной записи
            </h3>
            <p>
                <strong>Имя:</strong> <span className='personal'>{currentUser.user.name}</span>
            </p>
            <p>
                <strong>Фамилия:</strong> <span className='personal'>{currentUser.user.surname}</span>
            </p>
            <p>
                <strong>Мобильный телефон:</strong> <span className='personal'>{currentUser.user.phone}</span>
            </p>
            <p>
                <strong>Email:</strong> <span className='personal'>{currentUser.user.email}</span>
            </p>
            <Footer />
        </div>

    );

};

export default Profile;