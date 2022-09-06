import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import axios from 'axios'
const Post = () => {
    const {id} = useParams()
    const [data, setData] = useState(null);
    useEffect( () => {
//         axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
//   .then(res => setData(res.data))

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  .then(response => response.json())
  .then(json => setData(json))
    }, []);

  return (
    <div>{data ? <>
        <h3>Title: {data.title}</h3>
        <h3>Body: {data.body}</h3>
        </> : <h3>Loading...</h3>}
    </div>
  )
}

export default Post