/**
 * reset the form
 * @param {string} setFirstname 
 * @param {string} setLastname 
 * @param {string} setStreet 
 * @param {string} setCity 
 * @param {number} setZipCode 
 * @param {date} setDateBirth 
 * @param {date} setStartDate 
 */
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