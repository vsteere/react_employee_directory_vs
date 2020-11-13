import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EmployeeTable from "./components/EmployeeTable"

function App() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=10&nat=us")
      .then((response) => {
        setEmployees([...response.data.results]);
        console.log(response);
      });
  }, []);


  return (
    <div className="App">
    <EmployeeTable employees = {employees} />
      
    </div>
  );
}




export default App;
