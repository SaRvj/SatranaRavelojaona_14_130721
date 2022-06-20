function ResetForm(e, setFirstname, setLastname, setStreet, setCity, setZipCode,  setDateBirth, setStartDate) {
    
    setFirstname("")
    setLastname("")
    setStreet("")
    setCity("")
    setZipCode("")
    setDateBirth('')
    setStartDate('')
    e.target.querySelector('#department').querySelector(".css-qc6sy-singleValue").innerHTML= "Select..."
    e.target.querySelector('#state').querySelector(".css-qc6sy-singleValue").innerHTML= "Select..."
  
}

export default ResetForm