import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Footer from '../layout/Footer';
import AuthService from '../services/authService';

export default function MyVisits() {

  const currentUser = AuthService.getCurrentUser();

  const [visits, setVisits] = useState([])

  const { id } = useParams()

  useEffect(() => {
    loadVisits();
  }, []);

  const loadVisits = async () => {
    const result = await axios.get("http://localhost:8090/visits");
    setVisits(result.data);
  }

  return (
    <div>
      <Container>
        <h1 className='text-center mt-4 mb-4'>Визиты в клинику</h1>
        <Table className="table table-success table-striped shadow">
          <thead>
            <tr>
              <th scope="col">Дата визита</th>
              <th scope="col">Пациент</th>
              <th scope="col">Доктор</th>
              <th scope="col">Действие</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">

            {
              visits.map((visit, index) => {
                if (currentUser.user.phone === visit.patient_PatientCode.ownerOwnerCode.ownerTelephone) {
                  return <tr>
                    <td>{visit.visitDate}</td>
                    <td>{visit.patient_PatientCode.patientName}</td>
                    <td>{visit.doctor_DoctorCode.doctorName + " " + visit.doctor_DoctorCode.doctorSurname}</td>
                    <td>
                      <Link to={`/view_visit_user/${visit.visitCode}`} className="btn btn-success mx-2">Просмотреть</Link>
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
