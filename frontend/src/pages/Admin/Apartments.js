import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SideBar from '../../components/Admin/SideBar'

const Apartments = () => {

  const [showAddModal, setshowAddModal] = useState(false);
  const [formData, setFormData] = useState({ Apartment: '', Rent_Price: '', Rented: '', Expiry_Date: '' })
  const { Apartment, Rent_Price, Rented, Expiry_Date } = formData

  let [error, setError] = useState(true)

  const [Apartments, SetApartments] = useState([])

  const URL = "http://localhost:8080/apartments"
  function GetAllApartments() {
    return axios.get(URL)
  }

  useEffect(() => {
    GetAllApartments().then(response => {
      SetApartments(response.data)
    })
  }, [])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const back = () => {
    setError(false)
    setFormData({})
    setshowAddModal(!showAddModal);
  }
  const data = { Apartment, Rent_Price, Rented, Expiry_Date }

  const AddApartment = async () => {
    await axios.post("http://localhost:8080/apartments/AddApartment/", data)
    GetAllApartments().then(response => {
      SetApartments(response.data)
    })
  }

  const DeleteApartment = async (id) => {
    const url = 'http://localhost:8080/apartments/DeleteApartment/' + id
    try {
      await axios.post(url, data, { withCredentials: true });
      GetAllApartments().then(response => {
        SetApartments(response.data)
      })
    } catch (err) {
      console.log(err.response.data);
    }
  }

  return (
    <>
      <SideBar />
      <main class="main">
        <div class="Container p-4 ">
          <div class="d-flex justify-content-between border-bottom fw-bold fs-4">
            <p class="">Apartments</p>
          </div>
          <div class="d-flex justify-content-between">
            <div class="d-flex justify-content-between mt-3 fw-bold">
              <div class="d-flex">
                <p class="m-0">Show</p>
                <select class="select_style sort rounded mx-1">
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="75">75</option>
                  <option value="All">All</option>
                </select>
                <p class="m-0">Entities</p>
              </div>
            </div>
            <div class="d-flex justify-content-end my-2 px-5 fw-bold">
              <button class="btn bg-danger px-3 text-blod Button_ajoute" onClick={back}>Ajouter</button>
              {showAddModal &&
                <div className='position-absolute fixed-top w-25 p-3 bg-white border border-dark mx-auto my-5 rounded-2'>
                  <form>
                    <p className='text-center'>
                      Add New Apartment
                    </p>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Apartment name</label>
                      <input type="text" name='Apartment' onChange={onChange} class="form-control rounded-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Rent Price</label>
                      <input type="text" name='Rent_Price' onChange={onChange} class="form-control rounded-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter price" />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Rented ?</label><br />
                      <select id="exampleInputEmail1" name="Rented" onChange={onChange}>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Expiry Date</label>
                      <input type="date" name='Expiry_Date' onChange={onChange} class="form-control rounded-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter date" />
                    </div>
                    <div className='w-100 d-flex justify-content-between'>
                      <button class="btn bg-dark px-3 text-white mt-2 Button_ajoute" onClick={AddApartment}>Add</button>
                      <button class="btn bg-dark px-3 text-white mt-2 Button_ajoute" onClick={back}>Cancel</button>
                    </div>
                    <p className='text-center text-danger'>
                      {error}
                    </p>
                  </form>
                </div>
              }
            </div>
          </div>
          <div class="table-responsive card p-2">
            <table class="table table-striped Table_responsive">
              <thead>
                <tr class="rounded tr_table">
                  <th scope="col">Apartment</th>
                  <th scope="col">Rent price</th>
                  <th scope="col">Rented</th>
                  <th scope="col">Expiry Date</th>
                  {/* <th scope="col">Update</th> */}
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {Apartments.map(data => (
                  <tr>
                    <td>{data.Apartment}</td>
                    <td>{data.Rent_Price}</td>
                    <td>{data.Rented}</td>
                    <td>{data.Expiry_Date.slice(0, 10)}</td>
                    {/* <td>
                      <button class="btn bg-dark  p-1 px-2 text-white Button_ajoute" onClick={() => DeleteApartment(data._id)} >Update</button>
                    </td> */}
                    <td>
                      <button class="btn bg-dark  p-1 px-2 text-white Button_ajoute" onClick={() => DeleteApartment(data._id)} >Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className='text-center'>
              {Apartments === "" ? 'No Data.' : ''}
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default Apartments
