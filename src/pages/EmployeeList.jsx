import React  from 'react'
import { Link } from "react-router-dom";
import TableEmployee from "../components/EmployeeTable";
import '../css/style.css';
import columns from '../data/employeeColumnsTable';
import Styles from "../utils/modalCustumization/tableEmployeeStyleCustomization";
import employees from "../data/employeeList"

/**
 * @const {array} data contains information of the list of employees
 * @returns employee list board
 */
export default function EmployeeList () {
    // eslint-disable-next-line
    const data = React.useMemo(() => employees, [employees])

    return(
        <div className="employeeList">
                <h1>Current Employees</h1>
                <Styles>
                    {/*If the constant data is not empty then I display the array otherwise I display a message*/}
                    {data !== null && data.length > 0? 
                        <TableEmployee columns={columns} data={data}/>
                        : <p className="employeeList-alert">Aucun employé(e) enregistré !</p>}
                </Styles>
                <Link to="/" className="employeeList_link">Home</Link>
        </div>
    )
}