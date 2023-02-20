import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchApiData } from "./api/api";
import { setSubject } from "./Redux/features/counter/counterslice";
import Navbar from "./component/Navbar/navbar.component";
import Routes from "./routes/";
import "./App.css";

const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const fetchPatientSets = async () => {
    try {
      const result = await fetchApiData();
      dispatch(setSubject(result));
    } catch (err) {
      console.error("Error ");
    }
  };

  useEffect(() => {
    fetchPatientSets();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Routes />
    </div>
  );
};

export default App;
