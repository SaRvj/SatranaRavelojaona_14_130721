import React  from 'react'
import { Link } from "react-router-dom";
import TableEmployee from "../components/EmployeeTable";
import '../css/style.css';
import columns from '../data/employeeColumnsTable';
import Styles from "../utils/modalCustumization/tableEmployeeStyleCustomization";
import employees from "../data/employeeList"

export default function EmployeeList () {
    // eslint-disable-next-line
    const data = React.useMemo(() => employees, [employees])

    return(
        <div className="employeeList">
                <h1>Current Employees</h1>
                <Styles>
                   {data !== null && data.length > 0? 
                    <TableEmployee columns={columns} data={data}/>
                    : <p className="employeeList-alert">Aucun employé(e) enregistré !</p>}
                </Styles>
                <Link to="/" className="employeeList_link">Home</Link>
        </div>
    )
}