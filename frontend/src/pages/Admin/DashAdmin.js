import React, { useState } from 'react'
import axios from 'axios'

const DashAdmin = () => {

  const [Apartments, SetApartments] = useState()


  const URL_1 = "http://localhost:8080/apartments"
  function GetApartments() {
    return axios.get(URL_1)
  }

  GetApartments().then(response => {
    SetApartments((response.data).length)
  })
  
  return (
    <>
      <main class="main">
        <div class="Container p-4 ">
          <div class="d-flex justify-content-between border-bottom fw-bold fs-4">
            <p class="">Dashboard</p>
          </div>
          <div class="divs1 mt-3 px-5">
            <div class="divs2 card">
              <i class=""></i>
              <p>
                Apartments
              </p>
              <p class="num">
                {Apartments}
              </p>
            </div>
            <div class="divs2 card" id="wst1">
              <i class=""></i>
              <p>
                Months Paid
              </p>
              <p class="num">
                234
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default DashAdmin
