import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Footer from '../layout/Footer';

export default function Home() {
    const [visits, setVisits] = useState([])
    const [search, setSearch] = useState('');

    const {id} = useParams()

    useEffect(() => {
        loadVisits();
    }, []);

    const loadVisits = async () => {
        const result = await axios.get("http://localhost:8090/visits");
        setVisits(result.data);
    }

    const deleteVisit=async (id) => {
        await axios.delete(`http://localhost:8090/visit/${id}`)
        loadVisits()
    }

    return (
        <div>
            <Container>
                    <h1 className='text-center mt-4'>Все визиты в клинику</h1>
                    <Link className="btn btn-outline-success" to="/add_visit">Новый визит</Link>
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
                            <th scope="col">Дата визита</th>
                            <th scope="col">Пациент</th>
                            <th scope="col">Доктор</th>
                            <th scope="col">Действие</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">

                        {
                            visits.filter((item) => {
                                return search.toLowerCase() === ''
                                  ? item
                                  : item.patient_PatientCode.patientName.toLowerCase().includes(search);
                              })
                            .map((visit, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index+1}</th>
                                    <td>{visit.visitDate}</td>
                                    <td>{visit.patient_PatientCode.patientName}</td>
                                    <td>{visit.doctor_DoctorCode.doctorName + " " + visit.doctor_DoctorCode.doctorSurname}</td>
                                    <td>
                                        <Link to={`/view_visit/${visit.visitCode}`} className="btn btn-success mx-2">Просмотреть</Link>
                                        <Link to={`/editvisit/${visit.visitCode}`} className="btn btn-outline-success mx-2">Редактировать</Link>
                                        <button onClick={()=>deleteVisit(visit.visitCode)} className="btn btn-danger mx-2">Удалить</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </Container>
            <Footer/>
        </div>
    )
}
