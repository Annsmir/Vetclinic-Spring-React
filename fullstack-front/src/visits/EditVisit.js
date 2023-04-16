import { MenuItem, Select } from '@mui/material';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const EditVisit = () => {
  const defaultValues = {
    visitDate: "",
    visitSymptoms: "",
    testResults: "",
    visitNumber: "",
    patient_PatientCode: "",
    drug_DrugCode: "",
    diagnosis_DiagnosisCode: "",
    doctor_DoctorCode: ""
  };

  let navigate = useNavigate()

  const { id } = useParams()

  const [values_p, setValues] = useState([])

  const [values_drug, setValues_drug] = useState([])

  const [values_dia, setValues_dia] = useState([])

  const [values_doc, setValues_doc] = useState([])

  useEffect(() => {
    fetch("http://localhost:8090/patients").then((data) => data.json()).then((val) => setValues(val))
  }, [])

  useEffect(() => {
    fetch("http://localhost:8090/drugs").then((data) => data.json()).then((val) => setValues_drug(val))
  }, [])

  useEffect(() => {
    fetch("http://localhost:8090/diagnoses").then((data) => data.json()).then((val) => setValues_dia(val))
  }, [])

  useEffect(() => {
    fetch("http://localhost:8090/doctors").then((data) => data.json()).then((val) => setValues_doc(val))
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
    await axios.put(`http://localhost:8090/visit/${id}`, formValues)
    navigate("/visits")
  };

  useEffect(() => {
    loadVisit()
  }, [])

  const loadVisit = async () => {
    const result = await axios.get(`http://localhost:8090/visit/${id}`)
    setFormValues(result.data)
  }

  return (<div className='container'>
    <div className='row'>
      <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
        <h2 className='text-center m-4'>Редактирование информации о визите</h2>

        <form onSubmit={onSubmit}>

          <div className='mb-1'>
            <label htmlFor='Patient_PatientCode' className='form-label'>
              Пациент
            </label>
            <br></br>
            <Select name='patient_PatientCode' required className='mb-2' value={formValues.patient_PatientCode} onChange={handleInputChange}>
              <MenuItem value="">
                <em>------------ выбрать ------------</em>
              </MenuItem>
              {values_p.map((patient) => (
                <MenuItem key={patient.patientCode} value={patient}>
                  {patient.patientName} ({patient.patientCode})
                </MenuItem>
              ))}
            </Select>
          </div>

          <div className='mb-1'>
            <label htmlFor='VisitDate' className='form-label'>
              Дата приема
            </label>
            <input type={"text"} className='form-control' placeholder='гггг-мм-дд' name="visitDate" value={formValues.visitDate} onChange={handleInputChange} />
          </div>

          <div className='mb-1'>
            <label htmlFor='VisitSymptoms' className='form-label'>
              Симптомы
            </label>
            <input type={"text"} className='form-control' placeholder='Опишите симптомы' name="visitSymptoms" value={formValues.visitSymptoms} onChange={handleInputChange} />
          </div>

          <div className='mb-1'>
            <label htmlFor='TestResults' className='form-label'>
              Результаты анализов
            </label>
            <input type={"text"} className='form-control' placeholder='Диагностика: результат' name="testResults" value={formValues.testResults} onChange={handleInputChange} />
          </div>

          <div className='mb-1'>
            <label htmlFor='VisitNumber' className='form-label'>
              Порядковый номер визита
            </label>
            <input type={"text"} className='form-control' placeholder='Первичный (1), повторный (2) и т.д.' name="visitNumber" value={formValues.visitNumber} onChange={handleInputChange} />
          </div>

          <div className='mb-1'>
            <label htmlFor='Drug_DrugCode' className='form-label'>
              Назначенный препарат
            </label>
            <br></br>
            <Select name='drug_DrugCode' required className='mb-2' value={formValues.drug_DrugCode} onChange={handleInputChange}>
              <MenuItem value="">
                <em>------------ выбрать ------------</em>
              </MenuItem>
              {values_drug.map((drug) => (
                <MenuItem key={drug.drugCode} value={drug}>
                  {drug.drugName} ({drug.drugCode})
                </MenuItem>
              ))}
            </Select>
          </div>

          <div className='mb-1'>
            <label htmlFor='Diagnosis_DiagnosisCode' className='form-label'>
              Итоговый диагноз
            </label>
            <br></br>
            <Select name='diagnosis_DiagnosisCode' required className='mb-2' value={formValues.diagnosis_DiagnosisCode} onChange={handleInputChange}>
              <MenuItem value="">
                <em>------------ выбрать ------------</em>
              </MenuItem>
              {values_dia.map((diagnosis) => (
                <MenuItem key={diagnosis.diagnosisCode} value={diagnosis}>
                  {diagnosis.diagnosisName} ({diagnosis.diagnosisCode})
                </MenuItem>
              ))}
            </Select>
          </div>

          <div className='mb-1'>
            <label htmlFor='Doctor_DoctorCode' className='form-label'>
              Врач
            </label>
            <br></br>
            <Select name='doctor_DoctorCode' required className='mb-2' value={formValues.doctor_DoctorCode} onChange={handleInputChange}>
              <MenuItem value="">
                <em>------------ выбрать ------------</em>
              </MenuItem>
              {values_doc.map((doctor) => (
                <MenuItem key={doctor.doctorCode} value={doctor}>
                  {doctor.doctorSurname} {doctor.doctorName} ({doctor.doctorCode})
                </MenuItem>
              ))}
            </Select>
          </div>

          <button type='submit' className='btn btn-outline-success'>Готово</button>
          <Link className='btn btn-outline-danger mx-2' to="/visits">Отмена</Link>
        </form>
      </div>
    </div>
  </div>
  )
}

export default EditVisit;