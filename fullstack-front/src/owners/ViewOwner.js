import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewOwner() {

  const [owner, setOwner] = useState({
    ownerName: "",
    ownerTelephone: ""
  });

  const { id } = useParams()

  useEffect(() => {
    loadOwner()
  }, [])

  const loadOwner = async () => {
    const result = await axios.get(`http://localhost:8090/owner/${id}`)
    setOwner(result.data)
  }


  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>Просмотр хазяина</h2>
            <div className='card'>
              <div className='card-header'>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>
                    <b>ID хозяина </b>
                    {owner.ownerCode}
                  </li>
                  <li className='list-group-item'>
                    <b>Фамилия Имя</b><br></br>
                    {owner.ownerName} <br></br>
                  </li>
                  <li className='list-group-item'>
                    <b>Номер телефона</b> <br></br>
                    {owner.ownerTelephone} <br></br>
                  </li>
                </ul>
              </div>
            </div>
            <Link className='btn btn-success my-2' to={"/owners"}>Назад</Link>
            <Link to={`/editowner/${owner.ownerCode}`} className="btn btn-outline-success mx-2">Редактировать</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
