import { useParams } from "react-router-dom"

const Contact = () => {
    const {id,name} = useParams();
  return (
    <div>Contact - ID = {id} Namn: {name}</div>
  )
}

export default Contact