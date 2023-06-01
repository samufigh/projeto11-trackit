import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Cadastro from './pages/Cadastro/Cadastro';
import Habitos from './pages/Habitos/Habitos';
import Hoje from "./pages/Hoje/Hoje";
import Historico from './pages/Historico/Historico';

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [picture, setPicture] = useState('');

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login 
              email={email} 
              setEmail={setEmail} 
              password={password} 
              setPassword={setPassword}
              />}/>
          <Route path="/cadastro" element={<Cadastro 
              email={email} 
              setEmail={setEmail} 
              password={password} 
              setPassword={setPassword}
              name={name} 
              setName={setName} 
              picture={picture} 
              setPicture={setPicture}
              />}/>
          <Route path="/habitos" element={<Habitos />}/>
          <Route path="/hoje" element={<Hoje />}/>
          <Route path="/historico" element={<Historico />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
