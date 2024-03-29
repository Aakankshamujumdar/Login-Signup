import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './comopnents/Login';
import Signup from './comopnents/Signup';

function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Signup/>}></Route>
       <Route path="/login" element={<Login/>}></Route>

     </Routes>
    </BrowserRouter>
    
  )
}

export default App;
