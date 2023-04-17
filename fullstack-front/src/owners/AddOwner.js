import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AddOwner = () => {

  const defaultValues = {
    ownerName: "",
    ownerTelephone: ""
  };

  let navigate = useNavigate()

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
    await axios.post("http://localhost:8090/new_owner", formValues)
    navigate("/owners")
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Информация о хозяине</h2>

          <form onSubmit={onSubmit}>

            <div className='mb-1'>
            </div>
            <div className='mb-1'>
              <label htmlFor='OwnerName' className='form-label'>
                Имя
              </label>
              <input type={"text"} className='form-control' placeholder='Фамилия Имя' name="ownerName" value={formValues.ownerName} onChange={handleInputChange} />
            </div>

            <div className='mb-3'>
              <label htmlFor='OwnerTelephone' className='form-label'>
                Номер телефона
              </label>
              <input type={"text"} className='form-control' placeholder='8-ХХХ-ХХХ-ХХ-ХХ' name="ownerTelephone" value={formValues.ownerTelephone} onChange={handleInputChange} />
            </div>

            <button type='submit' className='btn btn-outline-success'>Готово</button>
            <Link className='btn btn-outline-danger mx-2' to="/owners">Отмена</Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddOwner;
