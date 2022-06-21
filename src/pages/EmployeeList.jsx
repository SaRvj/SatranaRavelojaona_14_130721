import React  from 'react'
import { Link } from "react-router-dom";
import TableEmployee from "../composants/TableEmployee";
import './../sass/style.scss';
import columns from '../datas/columnsTableEmployee.js';
import Styles from "../styled/customStyleTableEmployee.js";
import employees from "../data/employeeList"

export default function EmployeeList () {
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