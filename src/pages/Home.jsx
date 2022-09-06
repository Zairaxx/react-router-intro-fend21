import { useNavigate } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();

    const checkValue = () => {
        let value = document.querySelector("#idNumber").value;
        console.log(value);
        navigate(`/post/${value}`)
    }
  return (
    <>
    <div>Home</div>
        <select id="idNumber">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
        </select>
        {/* När vi klickar på denna knapp så hämtar vi värdet på dropdownen och skickar användaren till en ny route */}
        <button onClick={checkValue}>Get post by ID</button>
    </>
  )
}

export default Home