import React from 'react';

function Form () {

return (
  <div>
    <form>
      <input type="text" id="name" placeholder="Name" name="fname"/> <br/>
      <input type="text" id="age" placeholder="Age" name="age"/> <br/>
      <input type="text" id="email" placeholder="Email" name="email"/>
    </form>
    <div>
      <ul>
         <li><h2 className="formattribute">Name</h2><h3 className="userinput">{}</h3></li>
         <li><h2 className="formattribute">Age</h2><h3 className="userinput">{}</h3></li>
         <li><h2 className="formattribute">Email</h2><h3 className="userinput">{}</h3></li>
      </ul>
    </div>
  </div>
  )
}

export default Form
