import './App.css';
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Post from './pages/Post'

function App() {

  const navigate = useNavigate();

  let onNavigate = (page) => {
    //Här kan vi köra lite logik
    console.log("T.ex. lägger en vara i en varukorg, bekräftar köpet, eller annan logik som behövs...");
    //Och SEN kan vi navigera till sidan
    navigate(page)
  }

  return (
    <div className="App App-header">
      <nav>
        {/* 1. Vi kan navigera genom att använda oss utav Link */}
      <Link to="/home">
          <button>Home</button>
      </Link>
      {/* Eller så kan vi använda oss utav navigate som vi definierar på rad 9 m.h.a useNavigate(), eller en funktion som använder sig utav den*/}
          <button onClick={() => onNavigate("/contact")}>Contact</button>
      </nav>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/contact/" element={<Contact/>} />
        {/* Vi skapar en route med en parameter. Så om vi t.ex navigerar till /post/18 så är id = 18 .  */}
        <Route path="/post/:id" element={<Post/>}/>
      </Routes>
    </div>
  );
}

export default App;
