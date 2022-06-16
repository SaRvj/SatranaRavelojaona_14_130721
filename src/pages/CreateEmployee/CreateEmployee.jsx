import React from "react";
import "./CreateEmployee.css";

import Nav from "../../components/navigation/Navigation";
import Form from "../../components/Form/Form";


function CreateEmployee() {
    return (
      <div className="createEmployee_container">
        <Nav />
        <h2 className="createEmployee_title">Create Employee</h2>
        <Form />
      </div>
    );
}

export default CreateEmployee;