import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import NotFound from './pages/notfound/Notfound';
import Createblog from './pages/createblog/Createblog';
import Start from './pages/start/Start';
import Update from './pages/update/Update';
import Myblog from './pages/myblog/Myblog';
import Likedblog from './pages/likeblog/Likeblog';
import { useState } from 'react';

function App() {
  const [token,setToken]=useState('');
  const [idd,setid]=useState('');
  const [emaill,setemaill]=useState('');
  const handletoken=({id,token,email})=>{
    setToken(token);
    setid(id);
    setemaill(email);
  }
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Start />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login handletoken={handletoken}/>} />
      <Route path="/home" element={<Home token={token} idd={idd} name={emaill} /> } />
      <Route path="/detail" element={<Detail token={token} email={emaill} />} />
      <Route path="/createblog" element={<Createblog token={token} name={emaill}/>} />
      <Route path="/updateprofile" element={<Update idd={idd} />} />
      <Route path="/myblog" element={<Myblog idd={idd} token={token} name={emaill} />} />
      <Route path="/likedblog" element={<Likedblog idd={idd} token={token} name={emaill} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
