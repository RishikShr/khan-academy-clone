import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/home/homepage';
import Navbar from './component/Navbar/navbar.component';
import HomeCard from './component/home-card/home-card.component';
import { useDispatch } from 'react-redux';
import axios from "axios";
import { setSubject } from './Redux/features/counter/counterslice';
import { fetchApiData } from './data-api/api';

// export const fetchApiData = async () => {
    
//   const response = await axios.get(
//     "https://mocki.io/v1/795a4a6b-db23-4578-9a28-5958bc958293"
//   );
//   return response.data;
// };
const App:React.FunctionComponent = ()=>{ 
  const dispatch = useDispatch()
  const fetchPatientSets = async () => {
    try {
      const result = await fetchApiData();
      dispatch(setSubject(result));
    } catch (err) {}
  };

  useEffect(() => {
    fetchPatientSets();
  }, []);
  return (
    <div className="App">
       <Navbar />
       
      <BrowserRouter>
      <div style={{marginTop:'62px'}}></div>
       <Routes>
        <Route path ='/' element={<Homepage/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
