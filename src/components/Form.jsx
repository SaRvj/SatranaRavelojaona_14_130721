import React, { useState } from 'react'
import Select from 'react-select';
//import DatePicker from "react-datepicker"; 
import departments from '../data/department';
import states from '../data/state';
import save from "../utils/functions/saveEmployee";
import resetEmployee from "../utils/functions/resetForm";
//import Modal from 'react-modal';
import {Modal } from 'modal-satrana14'
//import customStyles from "../utils/modalCustumization/modalStyleCustomization";


/**
 * create employee form
 * @returns form for create employee
 * @func saveEmployee save datas of employee
 * @const { booleen } modalIsOpen - verify if modal is open or close
 * @func closeModal close the modale
 */
function Form () {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [dateBirth, setDateBirth] = useState('')
    const [startDate, setStartDate] = useState('')
    //const [startDate, setStartDate] = useState(new Date());

    function handleSubmit(e) {
        console.log (firstname, lastname, street, city, zipCode, startDate, dateBirth, departments);
        e.preventDefault()
        if(firstname !== "" && lastname!== "" && street !== "" && city !== "" &&  zipCode !== "" && dateBirth && startDate && departments && states
            // document.getElementById('department').querySelector(".css-qc6sy-singleValue") &&
            // document.getElementById('state').querySelector(".css-qc6sy-singleValue") 
            // document.getElementById('date-of-birth').value !== "" && 
            // document.getElementById('start-date').value !== ""
        ){
            save(firstname, lastname, street, city, zipCode)
            resetEmployee(e, setFirstname, setLastname, setStreet, setCity, setZipCode, setDateBirth, setStartDate)
            setModalIsOpen(true)
        }
    }
    
    return (
        <form className="createEmployee-body_form" id="createEmployee-body_form" action="#" onSubmit={handleSubmit}>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
                <label htmlFor="date-of-birth">Date of Birth</label>
                {/* <DatePicker idInput="date-of-birth" dateInput={dateBirth} updateDate={setDateBirth}/> */}
                <input type="date" id="date-of-birth" selected={dateBirth} onChange={(date) => setDateBirth(date)} />
                <label htmlFor="start-date" >Start Date</label>
                {/* <DatePicker idInput="start-date" dateInput={startDate} updateDate={setStartDate}/> */}
                <input type="date" id="start-date" selected={startDate} onChange={(date) => setStartDate(date)} />
                <fieldset className="address">
                    <legend>Address</legend>
                    <label htmlFor="street">Street</label>
                    <input id="street" type="text"  value={street} onChange={(e)=>setStreet(e.target.value)}/>
                    <label htmlFor="city">City</label>
                    <input id="city" type="text" value={city} onChange={(e)=>setCity(e.target.value)}/>
                    <label htmlFor="state">State</label>
                    <Select options={states} id="state" aria-label="state" className="select"/>
                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" value={zipCode} onChange={(e)=>setZipCode(e.target.value)}/>
                </fieldset>
                <label htmlFor="department">Department</label>
                <Select options={departments} id="department" aria-label="department" className="select"/>
                <button  className="button-submit" >Save</button>
                <Modal
                    show={modalIsOpen}
                    setShow={setModalIsOpen}
                    title="Success !"
                    text="Employee created"
                />
        </form>
    )
}


export default Form