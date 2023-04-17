import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Footer from '../layout/Footer';

export default function Owners() {

    const [owners, setOwners] = useState([])
    const [search, setSearch] = useState('');

    const { id } = useParams()

    useEffect(() => {
        loadOwners();
    }, []);

    const loadOwners = async () => {
        const result = await axios.get("http://localhost:8090/owners");
        setOwners(result.data);
    }

    const deleteOwner = async (id) => {
        await axios.delete(`http://localhost:8090/owner/${id}`)
        loadOwners()
    }

    return (
        <div>
            <Container>
                <h1 className='text-center mt-4'>Все хозяева пациентов клиники</h1>
                <Link className="btn btn-outline-success" to="/add_owner">Новый хозяин</Link>
                <Form>
                    <InputGroup className='my-3'>
                        <Form.Control
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder='Поиск по владельцам...'
                        />
                    </InputGroup>
                </Form>
                <Table className="table table-success table-striped shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Фамилия Имя</th>
                            <th scope="col">Номер телефона</th>
                            <th scope="col">Действие</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">

                        {
                            owners.filter((item) => {
                                return search.toLowerCase() === ''
                                    ? item
                                    : item.ownerName.toLowerCase().includes(search);
                            })
                                .map((owner, index) => (
                                    <tr>
                                        <th scope="row" key={index}>{index + 1}</th>
                                        <td>{owner.ownerName}</td>
                                        <td>{owner.ownerTelephone}</td>
                                        <td>
                                            <Link to={`/view_owner/${owner.ownerCode}`} className="btn btn-success mx-2">Просмотреть</Link>
                                            <Link to={`/editowner/${owner.ownerCode}`} className="btn btn-outline-success mx-2">Редактировать</Link>
                                            <button onClick={() => deleteOwner(owner.ownerCode)} className="btn btn-danger mx-2">Удалить</button>
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
