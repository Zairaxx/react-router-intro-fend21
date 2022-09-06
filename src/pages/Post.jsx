import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import axios from 'axios'
const Post = () => {
    // Vi kan hämta id-värdet från den URL med hjälp utav useParams (för att vi har :id i vår route i App.js)
    const {id} = useParams()
    const [data, setData] = useState(null);
    useEffect( () => {
        //Om vi vill använda oss utav axios som vi laddat ner med "npm install axios"
         axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => setData(res.data))

        // Alternativt en vanlig fetch
        // fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        //   .then(response => response.json())
        //   .then(json => setData(json))
    }, []);

  return (
    // Glöm inte att kolla att vi har data innan vi försöker skriva ut värden från data-objektet
    <div>
        {data ? <>
        <h3>Title: {data.title}</h3>
        <h3>Body: {data.body}</h3>
        </> : <h3>Loading...</h3>}
    </div>
  )
}

export default Post