import React from 'react';

function Form () {

return (
  <div className="formContainer">
    <form>
      <input type="text" className="input" placeholder="Name" name="fname"/> <br/>
      <input type="text" className="input" placeholder="Age" name="age"/> <br/>
      <input type="text" className="input" placeholder="Email" name="email"/>
    </form>
    <div>
      <ul>
         <li><h2 className="formAttribute">Name</h2><h3 className="userInput">{}</h3></li>
         <li><h2 className="formAttribute">Age</h2><h3 className="userInput">{}</h3></li>
         <li><h2 className="formAttribute">Email</h2><h3 className="userInput">{}</h3></li>
      </ul>
    </div>
  </div>
  )
}

export default Form
