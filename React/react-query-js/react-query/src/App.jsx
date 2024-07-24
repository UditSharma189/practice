// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import axios from "axios"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./components/user";
import AddUserForm from "./components/addUserForm";

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/add" element={<AddUserForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
