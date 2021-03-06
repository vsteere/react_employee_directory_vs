import './App.css';
//importing in Axios package
import axios from 'axios';
//importing in React with useEffect and UseState to use Hooks
import React, { useEffect, useState } from 'react';
//importing in the EmployeeTable component to render the data pulled from the API
import EmployeeTable from "./components/EmployeeTable"

// sets the state and uses axios to pull data from the randomuser API. The data will be used to render it in via the EmployeeTable component 
function App() {
  //default state that uses the original array from the API pull
  const [employees, setEmployees] = useState([]);
  //state for the filtered results to rerender the page but not overwrite the original array
  const [filteredemployees, setFilteredemployees] = useState([]);
  const [userInput, setuserInput] = useState(null);

  const [sortType, setSortType] = useState("asc");
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=15&nat=us")
      .then((response) => {
        setEmployees([...response.data.results]);
        setFilteredemployees([...response.data.results]);
        console.log(response);
      });
  }, []);

  //this function will filter the employees array based on the content of the input box 
  // function handleChange(e) {
  //   // checking if props.employees contains data. This works
  //   console.log(employees)
  //   //this sets a variable to text currently in search box
  //   const userInput = e.target.value;
  //   // testing to see if data is being captured in search box. This works
  //   console.log(userInput)
  //   //filters the employee array to match entry in search box
  //   const filteredList = employees.filter(item => {
  //     console.log(item.name.last.toLowerCase());
  //     console.log(userInput.toLowerCase())
  //     if (item.name.last.toLowerCase() === userInput.toLowerCase()) {
  //       return true
  //     }
  //     return false
  //   })
  //   //checks to see if array has been filtered. This does not work.
  //   console.log(filteredList)
  //   // updates state use the filteredList array
  //   setFilteredemployees(filteredList)

  // }

  const handleChange = e => setuserInput(e.target.value)

  useEffect(() => {
const filterList = employees.filter(employee => employee.name.last.toLowerCase().includes(userInput) || employee.name.first.toLowerCase().includes(userInput))

return setFilteredemployees(filterList)

  }, [userInput]
  
  
  
  
  
  )

  useEffect(() => {
    // sortType === "desc" ?
    //   filteredemployees([...filteredemployees].sort((a, b) => a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1 : -1) 
    //   : filteredemployees([...filteredemployees].sort((a, b) => b.name.last.toLowerCase() > a.name.last.toLowerCase() ? 1 : -1)
sortType === "desc" 
? setFilteredemployees([...filteredemployees].sort((a,b) => a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1 : -1))
: setFilteredemployees([...filteredemployees].sort((a,b) => b.name.last.toLowerCase() > a.name.last.toLowerCase() ? 1 : -1))

}, [sortType])

const sortToggler = () => sortType === "asc" ? setSortType("desc") : setSortType("asc")  
  return (
    <div className="App">

      <div>
        <h2>Search Employees</h2>

      </div>
      {/* Includes on OnChange event that will pass the value in the search box to the filter function above.  */}
      <div>
        <form>
          <input type="search" onChange={handleChange} placeholder="Enter employee first or last name" />

        </form>
      </div>


      <div>
        <button onClick={sortToggler}>Sort Employees by Last Name</button>
      </div>
      {/* This is the EmployeeTable component with the employees state that was set above in the Axios call */}
      <EmployeeTable employees={filteredemployees} />

    </div>
  );
}

export default App;
