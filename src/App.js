
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { Routes,Route } from 'react-router-dom';
import Login from './Components/Login';
import Details from './Components/Details';
function App() {
  return (
   <>
   <Header/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/details" element={<Details/>}/>
   </Routes>
   
   </>
  );
}

export default App;
