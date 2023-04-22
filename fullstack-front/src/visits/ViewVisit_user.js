import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewVisitUser() {

    const [visit, setVisit] = useState({
        visitDate: "",
        visitSymptoms: "",
        testResults: "",
        visitNumber: "",
        patient_PatientCode: "",
        drug_DrugCode: "",
        diagnosis_DiagnosisCode: "",
        doctor_DoctorCode: ""
    })

    const { id } = useParams()

    useEffect(() => {
        loadVisit()
    }, [])

    const loadVisit = async () => {
        const result = await axios.get(`http://localhost:8090/visit/${id}`)
        setVisit(result.data)
    }

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 offset-md-3 border rounded p-4 mt-4 shadow mb-4'>
                        <h2 className='text-center m-4'>Просмотр визита</h2>
                        <div className='card'>
                            <div className='card-header'>
                                <ul className='list-group list-group-flush'>
                                    <li className='list-group-item'>
                                        <b>ID визита </b>
                                        {visit.visitCode}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>ID питомца </b>
                                        {visit.patient_PatientCode.patientCode} <br></br>
                                        Кличка: {visit.patient_PatientCode.patientName} <br></br>
                                        Пол: {visit.patient_PatientCode.patientSex} <br></br>
                                        Дата рождения: {visit.patient_PatientCode.patientBirthday} <br></br>
                                        Номер карты: {visit.patient_PatientCode.patientCardNumber} <br></br>
                                        Категория животного:
                                        {/* {visit.patient_PatientCode.animalAnimalCategory.animalCategoryName}*/} <br></br>
                                        Порода: {visit.patient_PatientCode.patientBreed} <br></br>
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Дата визита</b> <br></br>
                                        {visit.visitDate}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Симптомы</b> <br></br>
                                        {visit.visitSymptoms}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Результаты анализов и диагностики</b> <br></br>
                                        {visit.testResults}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Порядковый номер визита</b> <br></br>
                                        {visit.visitNumber}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Назначенный препарат</b> <br></br>
                                        {visit.drug_DrugCode.drugName}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Поставленный диагноз</b> <br></br>
                                        {visit.diagnosis_DiagnosisCode.diagnosisName}
                                    </li>
                                    <li className='list-group-item'>
                                        <b>Врач</b> <br></br>
                                        {visit.doctor_DoctorCode.doctorSurname} {visit.doctor_DoctorCode.doctorName}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Link className='btn btn-success m-4' to={"/my_visits"}>Назад</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
