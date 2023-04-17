import { MenuItem, Select } from '@mui/material';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const EditPatient = () => {
  const defaultValues = {
    patientName: "",
    patientBirthday: "",
    patientCardNumber: "",
    patientBreed: "",
    patientSex: "",
    ownerOwnerCode: "",
    animalAnimalCategory: ""
  };

  let navigate = useNavigate()

  const { id } = useParams()

  const [values_o, setValues_o] = useState([])

  const [values_a, setValues_a] = useState([])

  useEffect(() => {
    fetch("http://localhost:8090/animals").then((data) => data.json()).then((val) => setValues_a(val))
  }, [])

  useEffect(() => {
    fetch("http://localhost:8090/owners").then((data) => data.json()).then((val) => setValues_o(val))
  }, [])

  const [formValues, setFormValues] = useState(defaultValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8090/patient/${id}`, formValues)
    navigate("/patients")
  };

  useEffect(() => {
    loadPatient()
  }, [])

  const loadPatient = async () => {
    const result = await axios.get(`http://localhost:8090/patient/${id}`)
    setFormValues(result.data)
  }

  return (
    <div>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Редактирование информации о пациенте</h2>

          <form onSubmit={onSubmit}>

            <div className='mb-1'>
            </div>
            <div className='mb-1'>
              <label htmlFor='PatientName' className='form-label'>
                Кличка
              </label>
              <input type={"text"} className='form-control' placeholder='Кличка питомца' name="patientName" value={formValues.patientName} onChange={handleInputChange} />
            </div>

            <div className='mb-1'>
              <label htmlFor='ЗatientBirthday' className='form-label'>
                Дата рождения
              </label>
              <input type={"text"} className='form-control' placeholder='гггг-мм-дд' name="patientBirthday" value={formValues.patientBirthday} onChange={handleInputChange} />
            </div>

            <div className='mb-1'>
              <label htmlFor='PatientCardNumber' className='form-label'>
                Номер карты
              </label>
              <input type={"text"} className='form-control' placeholder='Номер выданной на регистратуре карты' name="patientCardNumber" value={formValues.patientCardNumber} onChange={handleInputChange} />
            </div>

            <div className='mb-1'>
              <label htmlFor='AnimalAnimalCategory' className='form-label'>
                Категория животного
              </label>
              <br></br>
              <Select name='animalAnimalCategory' required className='mb-2' value={formValues.animalAnimalCategory} onChange={handleInputChange}>
                <MenuItem value="">
                  <em>------------ выбрать ------------</em>
                </MenuItem>
                {values_a.map((animal) => (
                  <MenuItem key={animal.animalCategory} value={animal}>
                    {animal.animalCategoryName} ({animal.animalCategory})
                  </MenuItem>
                ))}
              </Select>
            </div>

            <div className='mb-1'>
              <label htmlFor='PatientBreed' className='form-label'>
                Порода
              </label>
              <input type={"text"} className='form-control' placeholder='Порода пациента' name="patientBreed" value={formValues.patientBreed} onChange={handleInputChange} />
            </div>

            <div className='mb-1'>
              <label htmlFor='PatientSex' className='form-label'>
                Пол
              </label>
              <input type={"text"} className='form-control' placeholder='Мужской (M) / Женский (F)' name="patientSex" value={formValues.patientSex} onChange={handleInputChange} />
            </div>

            <div className='mb-1'>
              <label htmlFor='OwnerOwnerCode' className='form-label'>
                Хозяин животного
              </label>
              <br></br>
              <Select name='ownerOwnerCode' required className='mb-2' value={formValues.ownerOwnerCode} onChange={handleInputChange}>
                <MenuItem value="">
                  <em>------------ выбрать ------------</em>
                </MenuItem>
                {values_o.map((owner) => (
                  <MenuItem key={owner.ownerCode} value={owner}>
                    {owner.ownerName} ({owner.ownerCode})
                  </MenuItem>
                ))}
              </Select>
            </div>

            <button type='submit' className='btn btn-outline-success'>Готово</button>
            <Link className='btn btn-outline-danger mx-2' to="/patients">Отмена</Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditPatient;
