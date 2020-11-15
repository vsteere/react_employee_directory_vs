import React, { useState, useEffect } from 'react'
//setting up new component for table, filter and search
const EmployeeTable = (props) => {
    //check to see data is pulling from API
    console.log(props);
    const [inputValue, setInputValue] = useState('');

    function handleChange(e) {
        setInputValue(e.target.value);
        props.employees.filter(item => props.employees.name.last === inputValue) 
            return item;
        
    }

    return (
        <>
            <h1>Corporate Employee Directory</h1>

            {/* creates a search box for filtering and a button to sort the directory by last name. */}
            <div>
                <h2>Search Employees</h2>

            </div>

            <div>
                <form>
                    <input type="search" onChange={handleChange} value={inputValue} placeholder="Enter Name to filter by" />

                </form>
            </div>

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
