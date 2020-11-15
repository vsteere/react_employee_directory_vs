import React from 'react'
//setting up new component for table, filter and search
const EmployeeTable = (props) => {
    //check to see data is pulling from API
    console.log(props);
    
   

   


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
                                    <img src={employee.picture.medium} alt="picture"/>
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
