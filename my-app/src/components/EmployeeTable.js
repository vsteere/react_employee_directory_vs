import React, { useState, useEffect } from 'react'

const EmployeeTable = (props) => {
    console.log(props);

    return (
        <>
        <h1>Corporate Employee Directory</h1>
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
