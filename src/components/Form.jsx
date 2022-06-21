import React, { useState } from 'react'
import Select from 'react-select';
import DatePicker from "react-datepicker"; 
import departments from '../data/department';
import states from '../data/state';
import save from "../utils/functions/saveEmployee";
import resetEmployee from "../utils/functions/resetForm";
import Modal from 'react-modal';
import customStyles from "../utils/modalCustumization/modalStyleCustomization";

function Form () {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [zipCode, setZipCode] = useState("")
    const [dateBirth, setDateBirth] = useState('')
    const [startDate, setStartDate] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        if(firstname !== "" && lastname!== "" && street !== "" && city !== "" &&  zipCode !== "" &&
            document.getElementById('department').querySelector(".css-qc6sy-singleValue") &&
            document.getElementById('state').querySelector(".css-qc6sy-singleValue") &&
            document.getElementById('date-of-birth').value !== "" && 
            document.getElementById('start-date').value !== ""
        ){
            save(firstname, lastname, street, city, zipCode)
            resetEmployee(e, setFirstname, setLastname, setStreet, setCity, setZipCode, setDateBirth, setStartDate)
            setModalIsOpen(true)
        }
    }

    function closeModal() {
        setModalIsOpen(false);
    }
    
    return (
        <form className="createEmployee-body_form" id="createEmployee-body_form" action="#" onSubmit={handleSubmit}>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
                <label htmlFor="date-of-birth">Date of Birth</label>
                <DatePicker idInput="date-of-birth" dateInput={dateBirth} updateDate={setDateBirth}/>
                <label htmlFor="start-date" >Start Date</label>
                <DatePicker idInput="start-date" dateInput={startDate} updateDate={setStartDate}/>
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
                {modalIsOpen === true ?
                    <Modal
                    isOpen={modalIsOpen}
                    ariaHideApp={false}
                    style={customStyles}
                    >
                        <div onClick={closeModal} className="createEmployee-body-button-close">X</div>
                        <div className="modal">Employee create !</div>
                    </Modal>
                : null}
        </form>
    )
}


export default Form