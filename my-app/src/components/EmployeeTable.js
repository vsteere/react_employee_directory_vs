import React, {useState, useEffect} from 'react'

const EmployeeTable = (props) => {
console.log(props);

    return (
        <>
         <table>
             <tr>
                <th>Name</th>
                <th>image</th>
                <th>phone number</th>
                <th>email</th>
             </tr>
             {
                 props.employees.map(
                    employee => {
                        return (<tr>
                           
                            <td>
                                <img src = {employee.picture.medium} />
                            </td>

                            <td>
                                {employee.name.first} {employee.name.last}
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
