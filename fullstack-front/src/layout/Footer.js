import React from 'react'
import { faBuilding, faMailBulk, faPhone, faFax, faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

export default function Footer () {
    return (
        <div class="text-center text-lg-start bg-success bg-opacity-75 text-white mt-2">
            <section className="pt-1">
                <div class="container text-center text-md-start mt-5">
                    <div class="row mt-3">
                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                <FontAwesomeIcon icon={faPaw} /> Vita Med Clinics
                            </h6>
                            <p>
                                Получите квалифицированную ветеринарную помощь в удобном для Вас формате, не выходя из дома
                            </p>
                        </div>
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                Мы в соцсетях
                            </h6>
                            <p>
                                <a href="#!" class="text-reset">Группа ВК</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Instagram</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Telegram</a>
                            </p>
                            <p>
                                <a href="#!" class="text-reset">Facebook</a>
                            </p>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">
                                Узнайте больше
                            </h6>
                            <p>
                                <Link to="/contacts" class="text-reset">Наши контакты</Link>
                            </p>
                            <p>
                                <Link to="/doctors" class="text-reset">Наши врачи</Link>
                            </p>
                            <p>
                                <Link to="/" class="text-reset">Главная</Link>
                            </p>
                        </div>
                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 class="text-uppercase fw-bold mb-4">Связаться с нами</h6>
                            <p><FontAwesomeIcon icon={faBuilding} /> Волгоградский пр-т., д.8 стр. 3</p>
                            <p><FontAwesomeIcon icon={faMailBulk} /> vita-med@example.com</p>
                            <p><FontAwesomeIcon icon={faPhone} /> 8 499 198 30 76</p>
                            <p><FontAwesomeIcon icon={faFax} />  8 499 623 98 27</p>
                        </div>
                    </div>
                </div>
            </section>
            <div class="text-center p-4 bg-secondary bg-opacity-50">
                © 2023 Copyright: VitaMed
            </div>
        </div>
    )
}
