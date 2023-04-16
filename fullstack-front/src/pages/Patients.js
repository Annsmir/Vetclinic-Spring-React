import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Footer from '../layout/Footer';

export default function Patients() {

  const [patients, setPatients] = useState([])
  const [search, setSearch] = useState('');

  const { id } = useParams()

  useEffect(() => {
    loadPatients();
  }, []);

  const loadPatients = async () => {
    const result = await axios.get("http://localhost:8090/patients");
    setPatients(result.data);
  }

  const deletePatient = async (id) => {
    await axios.delete(`http://localhost:8090/patient/${id}`)
    loadPatients()
  }

  return (
    <div>
      <Container>
        <h1 className='text-center mt-4'>Все пациенты клиники</h1>
        <Link className="btn btn-outline-success" to="/add_patient">Новый пациент</Link>
        <Form>
          <InputGroup className='my-3'>
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Поиск по пациентам...'
            />
          </InputGroup>
        </Form>
        <Table className="table table-success table-striped shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Кличка</th>
              <th scope="col">Номер карты</th>
              <th scope="col">Категория животного</th>
              <th scope="col">Действие</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">

            {
              patients.filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.patientName.toLowerCase().includes(search);
              })
                .map((patient, index) => (
                  <tr>
                    <th scope="row" key={index}>{index + 1}</th>
                    <td>{patient.patientName}</td>
                    <td>{patient.patientCardNumber}</td>
                    <td>{patient.animalAnimalCategory.animalCategoryName}</td>
                    <td>
                      <Link to={`/view_patient/${patient.patientCode}`} className="btn btn-success mx-2">Просмотреть</Link>
                      <Link to={`/editpatient/${patient.patientCode}`} className="btn btn-outline-success mx-2">Редактировать</Link>
                      <button onClick={() => deletePatient(patient.patientCode)} className="btn btn-danger mx-2">Удалить</button>
                    </td>
                  </tr>
                ))
            }
          </tbody>
        </Table>
      </Container>
      <Footer />
    </div>
  )
}
