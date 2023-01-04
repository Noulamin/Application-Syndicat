import './CommentStyle.css'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CommentaireProduct(props) {

    const [commentaire , setCommentaire] = useState("");
    const [message , setMessage] = useState("")

    const handleComment = (e) => {
      return setCommentaire(e.target.value)
    }

    const user = localStorage.getItem('id')
    
    const API = `http://localhost:8080/commentaire/client/${props.id}/${user}`

    const commentPost = async () => {
      const feedback = {
        commentaire,
      }
      try {
          const response = await axios.post(API, feedback)
          setMessage(response.data.message)
          console.log(response.data.message)
      } catch (error) {
          setMessage(error)
      }
    }

    const showToastMessage = () => {
      toast.success(`${message}`, {
          position: toast.POSITION.BOTTOM_RIGHT
      });
    }

    const submit = () => {
      commentPost()
      showToastMessage()
    }
      
  return (
    <>
  <div className="mb-6">
    <h1 className=" font-bold mb-2 text-gray-900 dark:text-white">please give our comment : </h1>
    <input value={commentaire} onChange={handleComment} className="bg-gray-50 border  comment border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " />
    <button onClick={submit} className='mt-4 button'>SUBMIT COMMENT</button>
    <ToastContainer />
  </div>
    </>
  )
}
export default CommentaireProduct