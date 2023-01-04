import { useEffect , useState } from 'react'
import axios from 'axios'

function ShowComments(props) {


  const id_product = props.id

  const [comments ,setComments] = useState([])
  const API = `http://localhost:8080/commentaire/allcomments/${id_product}`


  

  const getComments = async () => {
    try {
        const data = await axios.get(API)
        setComments(data.data)
        console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getComments()
  }, [])

  return (
    <>
    {comments.map((comment,i) => 
    <div className="w-full flex flex-col text-start md:text-left md:flex-row shadow bg-white mt-3 mb-3 p-3">
       <img src="https://xsgames.co/randomusers/avatar.php?g=male" style={{width: 90, marginRight: 10}} className="rounded-full" alt="Pic For The person who comment " />
        <div className="flex-1 flex flex-col justify-center md:justify-start">
        <p className="font-semibold text-2xl px-4">test</p>
          <p className="pt-2 px-4" key={i} style={{color: '#256D85'}}>{comment.commentaire}</p>
        </div>
    </div>
    )}
        </>
  )
}

export default ShowComments