import './App.css';
import Login from "./component/Login";
import UserLogin from "./component/UserLogin";
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<UserLogin/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
