import React, { useState, useEffect } from 'react'
//setting up new component for table, filter and search
const EmployeeTable = (props) => {
    //check to see data is pulling from API
    console.log(props);
    const [inputValue, setInputValue] = useState('');
    const [filteredValue, setFilteredValue] = useState(props.employees);

    //this function will filter the employees array based on the content of the input box 
    function handleChange(e) {
        // checking if props.employees contains data
        console.log(props.employees)
        setInputValue(e.target.value);
        const userInput = e.target.value;
        console.log(userInput)
        console.log(props.employees)
        const filteredList = props.employees.filter(item => {
            if (item.name.last.toLowerCase() === userInput.toLowerCase()) {
                return true
            } 
            return false
        })
       setFilteredValue(filteredList)
       console.log(filteredValue)
    }



    return (
        <>
            <h1>Corporate Employee Directory</h1>

            {/* creates a search box for filtering and a button to sort the directory by last name. */}
            

            {/* Table with headings and map functionality to render specific parts of data from the object  */}
            <table>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                </tr>
                {
                    props.employees.map(
                        employee => {
                            return (<tr>

                                <td>
                                    <img src={employee.picture.medium} />
                                </td>
                                <td>
                                    {employee.name.first + " " + employee.name.last}
                                </td>
                                <td>
                                    {employee.phone}
                                </td>
                                <td>
                                    {employee.email}
                                </td>

                            </tr>)
                        }
                    )
                }
            </table>


        </>
    )
}

export default EmployeeTable
