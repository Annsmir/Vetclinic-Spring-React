import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import AuthService from '../services/authService';

export default function MyPatients() {

  const currentUser = AuthService.getCurrentUser();

  const [patients, setPatients] = useState([])

  const { id } = useParams()

  useEffect(() => {
    loadPatients();
  }, []);

  const loadPatients = async () => {
    const result = await axios.get("http://localhost:8090/patients");
    setPatients(result.data);
  }

  return (
    <div>
      <Container>
        <h1 className='text-center mt-4 mb-4'>Мои питомцы</h1>
        <Table className="table table-success table-striped shadow">
          <thead>
            <tr>
              <th scope="col">Кличка</th>
              <th scope="col">Номер карты</th>
              <th scope="col">Категория животного</th>
              <th scope="col">Действие</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {
              patients.map((patient, index) => {
              if (currentUser.user.phone === patient.ownerOwnerCode.ownerTelephone) {
                return <tr>
                    <td>{patient.patientName}</td>
                    <td>{patient.patientCardNumber}</td>
                    <td>{patient.animalAnimalCategory.animalCategoryName}</td>
                    <td>
                      <Link to={`/view_patient_user/${patient.patientCode}`} className="btn btn-success mx-2">Просмотреть</Link>
                    </td>
                  </tr>
              }
              return null;
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  )
}
