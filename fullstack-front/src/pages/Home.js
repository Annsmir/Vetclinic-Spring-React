import React from 'react'
import About from '../layout/About';
import "./home.css";
import icon1 from '../img/icons8-pet-shop-64.png'
import icon2 from '../img/icons8-vet-64.png'
import icon3 from '../img/icons8-pet-info-64.png'
import icon4 from '../img/icons8-pet-dif-64.png'
import icon5 from '../img/icons8-pet-ind-64.png'
import icon6 from '../img/icons8-pet-hospital-64.png'
import icon7 from '../img/icons8-pet-64.png'
import icon8 from '../img/icons8-heart-with-dog-paw-64.png'
import Footer from '../layout/Footer';

export default function Home() {
    return (
        <div>
            <About />
            <div class="containter1">
                <h3 class="main">Всё, что нужно — в одном месте</h3>
                <p class="desc">Прививки по календарю прививок, сезонные вакцинации, анализы, диагностика, профилактические визиты, экстренная госпитализация<br></br><br></br>
                Волгоградский пр-т., д.8 стр. 3
                </p>
            </div>
            <div class="container2">
                <div class="container3">
                    <div class="container4">
                        <img src={icon1} alt="icon"></img>
                        <div class="title">Вся информация под рукой</div>
                        <div class="details">Легко получить доступ к информации о визитах Вашего питомца в Vita Med в любое время</div>
                    </div>
                </div>
                <div class="container3">
                    <div class="container4">
                        <img src={icon2} alt="icon"></img>
                        <div class="title">Специлисты высокого класса</div>
                        <div class="details">Врачи Vita Med окажут квалифицированную медицинскую помощь Вашему питомцу в любой ситуации</div>
                    </div>
                </div>
                <div class="container3">
                    <div class="container4">
                        <img src={icon3} alt="icon"></img>
                        <div class="title">Карточки питомца</div>
                        <div class="details">Просматривайте карточки с информацией о Ваших питомцах</div>
                    </div>
                </div>
                <div class="container3">
                    <div class="container4">
                        <img src={icon4} alt="icon"></img>
                        <div class="title">Любые виды животных</div>
                        <div class="details">В Vita Med оказывают помощь абсоютно всем домашним животным</div>
                    </div>
                </div>
                <div class="container3">
                    <div class="container4">
                        <img src={icon5} alt="icon"></img>
                        <div class="title">Индивидуальный подход</div>
                        <div class="details">Сотрудники Vita Med сделают всё возможное, чтобы Вым и Вашему питомцу понравилось в нашей клинике</div>
                    </div>
                </div>
                <div class="container3">
                    <div class="container4">
                        <img src={icon6} alt="icon"></img>
                        <div class="title">Большой опыт работы</div>
                        <div class="details">Клиника Vita Med работает с 2015 года</div>
                    </div>
                </div>
                <div class="container3">
                    <div class="container4">
                        <img src={icon7} alt="icon"></img>
                        <div class="title">Ваш питомец - наш приоритет</div>
                        <div class="details">Специлисты Vita Med позаботятся о комфорте и безопасноти вашего любимца</div>
                    </div>
                </div>
                <div class="container3">
                    <div class="container4">
                        <img src={icon8} alt="icon"></img>
                        <div class="title">Позаботьтесь о здоровье Вашего питомца</div>
                        <div class="details">Vita Med предоставляет широкий спектр услуг - от сезонных вакцинаций до экстренной госпитализации</div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div >
    )
}
