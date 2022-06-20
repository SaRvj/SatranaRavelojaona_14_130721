import employees from "../../data/employeeList";

 function SaveEmployees(firstname, lastname, street, city, zipCode) {
    const employee = {
        firstName: firstname,
        lastName: lastname,
        dateOfBirth: document.getElementById('date-of-birth').value,
        startDate: document.getElementById('start-date').value,
        department: document.getElementById('department').querySelector(".css-qc6sy-singleValue").innerHTML,
        street: street,
        city: city,
        state: document.getElementById('state').querySelector(".css-qc6sy-singleValue").innerHTML,
        zipCode: zipCode
    }
    employees.push(employee) 
}

export default SaveEmployees  