import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewPatient() {

  const [patient, setPatient] = useState({
    patientName: "",
    patientBirthday: "",
    patientCardNumber: "",
    patientBreed: "",
    patientSex: "",
    ownerOwnerCode: "",
    animalAnimalCategory: ""
  })

  const { id } = useParams()

  useEffect(() => {
    loadPatient()
  }, [])

  const loadPatient = async () => {
    const result = await axios.get(`http://localhost:8090/patient/${id}`)
    setPatient(result.data)
  }


  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>Просмотр пациента</h2>
            <div className='card'>
              <div className='card-header'>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>
                    <b>ID пациента </b>
                    {patient.patientCode}
                  </li>
                  <li className='list-group-item'>
                    <b>Кличка</b><br></br>
                    {patient.patientName} <br></br>
                  </li>
                  <li className='list-group-item'>
                    <b>Пол</b> <br></br>
                    {patient.patientSex} <br></br>
                  </li>
                  <li className='list-group-item'>
                    <b>Номер карты</b><br></br>
                    {patient.patientCardNumber} <br></br>
                  </li>
                  <li className='list-group-item'>
                    <b>Дата рождения</b><br></br>
                    {patient.patientBirthday} <br></br>
                  </li>
                  <li className='list-group-item'>
                    <b>Категория животного </b>
                    {patient.animalAnimalCategory.animalCategoryName} ({patient.animalAnimalCategory.animalCategory}) <br></br>
                    Порода: {patient.patientBreed}
                  </li>
                  <li className='list-group-item'>
                    <b>ID владельца </b> {patient.ownerOwnerCode.ownerCode} <br></br>
                    Имя владельца:  {patient.ownerOwnerCode.ownerName} <br></br>
                    Телефон владельца: {patient.ownerOwnerCode.ownerTelephone}
                  </li>
                </ul>
              </div>
            </div>
            <Link className='btn btn-success my-2' to={"/patients"}>Назад</Link>
            <Link to={`/editpatient/${patient.patientCode}`} className="btn btn-outline-success mx-2">Редактировать</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
