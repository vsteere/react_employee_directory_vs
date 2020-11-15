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
      .get("https://randomuser.me/api/?results=15&nat=us")
      .then((response) => {
        setEmployees([...response.data.results]);
        console.log(response);
      });
  }, []);

  const [inputValue, setInputValue] = useState('');
  const [filteredValue, setFilteredValue] = useState(employees);

   //this function will filter the employees array based on the content of the input box 
   function handleChange(e) {
    // checking if props.employees contains data
    console.log(employees)
    setInputValue(e.target.value);
    const userInput = e.target.value;
    console.log(userInput)
    console.log(employees)
    const filteredList = employees.filter(item => {
        if (item.name.last.toLowerCase() === userInput.toLowerCase()) {
            return true
        } 
        return false
    })
  //  setFilteredValue(filteredList)
  //  console.log(filteredValue)
}



  return (
    <div className="App">

<div>
                <h2>Search Employees</h2>

            </div>
            {/* Includes on OnChange event that will pass the value in the search box to the filter function above.  */}
            <div>
                <form>
                    <input type="search" onChange={handleChange} placeholder="Enter Last Name to filter by" />

                </form>
            </div>
      {/* This is the EmployeeTable component with the employees state that was set above in the Axios call */}
      <EmployeeTable employees={employees} />

    </div>
  );
}




export default App;
