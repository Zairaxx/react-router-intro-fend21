import './App.css';
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Post from './pages/Post'

function App() {

  const navigate = useNavigate();

  let onNavigate = (page) => {
    //Här kan vi köra lite logik
    console.log("Bekräftar köpet, och annan logik som behövs...");
    //Och SEN kan vi navigera till sidan
    navigate(page)
  }

  return (
    <div className="App App-header">
      <nav>
      <Link to="/home">
          <button>Home</button>
      </Link>
          <button onClick={() => onNavigate("/contact")}>Contact</button>
      </nav>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/contact/" element={<Contact/>} />
        <Route path="/contact/:id/:name" element={<Contact/>} />
        <Route path="/post/:id" element={<Post/>}/>
      </Routes>
    </div>
  );
}

export default App;
