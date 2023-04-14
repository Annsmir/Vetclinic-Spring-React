import React, { useEffect, useState } from 'react'
import "./doctors.css";
import About from '../layout/About';
import axios from 'axios';
import Footer from '../layout/Footer';

export default function Doctors() {
    const [doctors, setDoctors] = useState([])

    const loadDoctors = async () => {
        const result = await axios.get("http://localhost:8090/doctors");
        setDoctors(result.data);
    }

    useEffect(() => {
        loadDoctors();
    }, []);

    return (
        <div>
            <About />
            <h1 className='text-center'>Наши врачи</h1>
            <ol class="list-counter-circle">
                <li>Отделение общей терапии</li>
                <div>
                    {doctors.map((doctor, index) => {
                        if (doctor.specialitySpecialityCode.specialityCode === 10) {
                            return <h3 className='note' key={index}> 🐾 {doctor.doctorSurname} {doctor.doctorName}</h3>
                        }
                        return null
                    })}
                </div>
                <li>Отделение кардиологии</li>
                <div>
                    {doctors.map((doctor, index) => {
                        if (doctor.specialitySpecialityCode.specialityCode === 1) {
                            return <h3 className='note' key={index}> 🐾 {doctor.doctorSurname} {doctor.doctorName}</h3>
                        }
                        return null
                    })}
                </div>
                <li>Отделение травматологии и хирургии</li>
                <div>
                    {doctors.map((doctor, index) => {
                        if (doctor.specialitySpecialityCode.specialityCode === 2) {
                            return <h3 className='note' key={index}> 🐾 {doctor.doctorSurname} {doctor.doctorName}</h3>
                        }
                        return null
                    })}
                </div>
                <li>Отделение офтальмологии</li>
                <div>
                    {doctors.map((doctor, index) => {
                        if (doctor.specialitySpecialityCode.specialityCode === 3) {
                            return <h3 className='note' key={index}> 🐾 {doctor.doctorSurname} {doctor.doctorName}</h3>
                        }
                        return null
                    })}
                </div>
                <li>Отделение стоматологии</li>
                <div>
                    {doctors.map((doctor, index) => {
                        if (doctor.specialitySpecialityCode.specialityCode === 4) {
                            return <h3 className='note' key={index}> 🐾 {doctor.doctorSurname} {doctor.doctorName}</h3>
                        }
                        return null
                    })}
                </div>
                <li>Отделение отоларингологии</li>
                <div>
                    {doctors.map((doctor, index) => {
                        if (doctor.specialitySpecialityCode.specialityCode === 5) {
                            return <h3 className='note' key={index}> 🐾 {doctor.doctorSurname} {doctor.doctorName}</h3>
                        }
                        return null
                    })}
                </div>
                <li>Отделение эндокринологии</li>
                <div>
                    {doctors.map((doctor, index) => {
                        if (doctor.specialitySpecialityCode.specialityCode === 6) {
                            return <h3 className='note' key={index}> 🐾 {doctor.doctorSurname} {doctor.doctorName}</h3>
                        }
                        return null
                    })}
                </div>
                <li>Отделение функциональной диагностики</li>
                <div>
                    {doctors.map((doctor, index) => {
                        if (doctor.specialitySpecialityCode.specialityCode === 7) {
                            return <h3 className='note' key={index}> 🐾 {doctor.doctorSurname} {doctor.doctorName}</h3>
                        }
                        return null
                    })}
                </div>
                <li>Отделение гастроэнтерологии</li>
                <div>
                    {doctors.map((doctor, index) => {
                        if (doctor.specialitySpecialityCode.specialityCode === 8) {
                            return <h3 className='note' key={index}> 🐾 {doctor.doctorSurname} {doctor.doctorName}</h3>
                        }
                        return null
                    })}
                </div>
                <li>Отделение неврологии</li>
                <div>
                    {doctors.map((doctor, index) => {
                        if (doctor.specialitySpecialityCode.specialityCode === 9) {
                            return <h3 className='note' key={index}> 🐾 {doctor.doctorSurname} {doctor.doctorName}</h3>
                        }
                        return null
                    })}
                </div>
                <li>Отделение дерматологии</li>
                <div>
                    {doctors.map((doctor, index) => {
                        if (doctor.specialitySpecialityCode.specialityCode === 11) {
                            return <h3 className='note' key={index}> 🐾 {doctor.doctorSurname} {doctor.doctorName}</h3>
                        }
                        return null
                    })}
                </div>
            </ol>
            <Footer/>
        </div>
    )
}
