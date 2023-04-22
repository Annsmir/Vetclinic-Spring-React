import React from 'react'
import About from '../layout/About'
import Footer from '../layout/Footer'
import "./contacts.css";

export default function Contacts() {
  return (
    <div>
      <About />
      <h2>Контакты ветеринарной клиники Vita Med в Москве</h2>
      <div className='des'>Предлагаем все виды ветеринарной помощи — скорой вне очереди и обычной по записи. Ежедневный круглосуточный прием в клинике на Волгоградском проспекте.</div>
      <div className='des'>Обращайтесь по указанным ниже телефонам и адресу, задавайте вопросы администраторам позвонив или написав в WhatsApp.</div>
      <div className='cont1'>
        <div className='bord'>
          <div className='address'>Клиника на Волгоградском проспекте</div>
          <div className='contact_info'>
            Цветной бульвар, дом 11, стр. 1 <br></br>
            Ежедневно, круглосуточно <br></br>
            8 499 198 30 76 <br></br>
            vita-med@example.com</div>
        </div>
        <div className='bord'>
          <div className='address'>Ветеринарная аптека</div>
          <div className='contact_info'>
            Находится в здании клиники на Волгоградском проспекте <br></br>
            8 499 198 30 76 (доб. 150)
          </div>
        </div>
      </div>
      <h3>Клиника на Волгоградском проспекте</h3>
      <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A2984e0dea5dca248ebe61f528d9cf56fe9b15676e11c755358eeef752d2f4e7b&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
      <h3>Как добраться</h3>
      <div className='cont1'>
        <div className='bord'>
          <div className='address'>🚇 На метро</div>
          <div className='contact_info'>
            Метро Крестьянская Застава: 10-ый выход из метро прямо, 500 метров. Повернуть направо к стр. 3
          </div>
          <div className='contact_info'>
            Метро Пролетарская: 1-ый выход из метро прямо, 250 метров. Повернуть направо к стр. 3
          </div>
        </div>
        <div className='bord'>
          <div className='address'>🚘 На машине</div>
          <div className='contact_info'>
            С Нижегородской улицы съезд направо на Абельмановскую улицу. Прямо 880 метров. Съезд на Волгоградский проспект. Прямо 80 метро, поворот на Сосинскую улицу.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
