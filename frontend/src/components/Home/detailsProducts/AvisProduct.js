import axios from 'axios'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AvisProduct(props) {


  const  [avis , setAvis] = useState("")
  const  [message, setMessage] = useState("")

  const handleAvis = (e)=>{
    return setAvis(e.target.value)
  }

  const API = `http://localhost:8080/avis/client/${props.id}`

  const avisPost = async () => {
    const feedback = {
      avis,
    }
  
  try {
    const response = await axios.post(API, feedback)
    setMessage(response.data.message)
  } catch (error) {
    setMessage(error)
  }
}

const showToastMessage = () => {
  toast.success(`${message}`, {
      position: toast.POSITION.BOTTOM_RIGHT
  });
};

const submit = () => {
  avisPost()
  showToastMessage()
}

  return (
    
    // {props.id}
    <>
      <div className="mb-6" >
        <h1 className=" font-bold mb-2 text-gray-900 dark:text-white">please give our feedback between 1 & 5 stars :</h1>
        <input value={avis} onChange={handleAvis} className="bg-gray-50 border  comment border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " required/>
        <button onClick={submit} className='mt-4 button'>SUBMIT AVIS</button>
        <ToastContainer />
     </div>
    </>
  )
}

export default AvisProduct