import './App.css';
//importing in Axios package
import axios from 'axios';
//importing in React with useEffect and UseState to use Hooks
import React, { useEffect, useState } from 'react';
//importing in the EmployeeTable component to render the data pulled from the API
import EmployeeTable from "./components/EmployeeTable"

// sets the state and uses axios to pull data from the randomuser API. The data will be used to render it in via the EmployeeTable component 
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
      {/* This is the EmployeeTable component with the employees state that was set above in the Axios call */}
      <EmployeeTable employees={employees} />

    </div>
  );
}




export default App;
