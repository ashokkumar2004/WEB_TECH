import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

function App() {
  const [firstName, setFirstName] = useState('') // useState to store First Name
  const [lastName, setLastName] = useState('') // useState to store Last Name
  const [mobile, setMobile] = useState('') // useState to store Mobile Number
  const [email, setEmail] = useState('') // useState to store Email address of the user
  const [password, setPassword] = useState('') // useState to store Password
  const [confirmpass, setCPassword] = useState('');
  const [datedob, setDob] = useState('');
  //const [add, setAdd] = useState('');
  const [dept, setDept] = useState('');
  const [clg, setClg] = useState('');
  const [gen, setGend] = useState('');

  // Function which will validate the input data whenever submit button is clicked.

  function validateForm() {
    // Check if the First Name is an Empty string or not.

    if (firstName.length == 0) {
      alert('Invalid Form, First Name can not be empty')
      return
    }
    if (!isNaN(firstName)) {
      alert("Only entered numbers");
      document.myform.fname.select();
      return false;
    }
    if (lastName.length == 0) {
      alert('Invalid Form, Lastname cannot be empty');
    }
    if (!isNaN(lastName)) {
      alert("Only entered numbers");
      document.myform.fname.select();
      return false;
    }
    if(mobile == ""){
      alert("Enter the mobile number !!");
      return false;
    }
    if(mobile.length != 10){
      alert('Mobile number Should contain only 10 characters!!!');
      return false;
    }

    if (email.length == 0) {
      alert('Invalid Form, Email Address can not be empty')
      return
    }
    if (email === "") {
      alert("please, Enter your mail id!!!");
      document.myform.mail.focus();
      return false;
    }
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
      alert("please enter valid mail address!!!!");
      return false;
    }

    if (password.length < 8) {
      alert(
        'Invalid Form, Password must contain greater than or equal to 8 characters.',
      )
      return
    }
    if (password !== confirmpass) {
      alert("Password not matched please enter correct one!!!!");
      document.myform.cpass.focus();
      return false;
    }
    if(datedob == ""){
      alert("Enter Date !");
      return false;
    }
    
    if(dept == ""){
      alert('Enter your department!!!');
      return false;
    }
    if(clg == ""){
      alert('Enter college name!!!');
      return false;
    }
    if(gen == ''){
      alert('Select Gender!!!');
      return false;
    }
   

    // if all the conditions are valid, this means that the form is valid

    alert('Form is valid')
  }

  return (
    <div className="main">
      <form>
        {/* Input Field to insert First Name */}
        <input
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        /><br></br>
        {/* Input Field to insert Last Name */}
        <input
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        /><br></br>
        {/* Input Field to insert Mobile Number */}
        <input
          placeholder="Mobile Number"
          onChange={(e) => setMobile(e.target.value)}
        /><br></br>
        {/* Input Field to insert Age */}
        {/* Input Field to insert Email Address of the user */}
        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        {/* Input Field to insert Password */}<br></br>
        <input
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        /><br></br>
        <input
          placeholder='confirm password'
          onChange={(e) => setCPassword(e.target.value)}
        /><br></br>
        <input 
          placeholder='Date of Birth'
          type='date' onChange={(e) => setDob(e.target.value)}
        /> <br />
        <textarea rows={5} cols={10} placeholder='Enter the Address'></textarea> <br />
        <input placeholder='Department'
         onChange={(e) => setDept(e.target.value)}
        /><br></br>
        <input placeholder='College'
         onChange={(e) => setClg(e.target.value)}
        /><br></br>
        <label>Gender: </label><br></br>
        <select name="Gender" id="gender" onChange={(e) => setGend(e.target.value)}>
            <option value="">Gender</option>
            <option name="Gender" value="Male">Male</option>
            <option name="Gender" value="Female">Female</option>
            <option name="Gender" value="Prefer not to say">Prefer not to say</option>
          </select><br></br>
        <button
          type="submit"
          onClick={() => {
            validateForm()
          }}
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default App