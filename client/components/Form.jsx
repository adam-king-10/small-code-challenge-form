import React, {useEffect, useState} from 'react';
import { use } from '../../server/server';


function Form (props) {
  const defaultState = {
    name: '',
    age: '',
    email: ''
  }
  const [input, setInput] = useState(defaultState)

  useEffect(() => {

  })

  const handleChange = evt => {
    const { name, value } = evt.target
    setInput({
        ...input,
        [name]: value
      })
  }

return (
  <div className="formContainer">
    <form>
      <input type="text" className="input" placeholder="Name" name="fname" value={item.name} onChange={handleChange}/><br/>
      <input type="text" className="input" placeholder="Age" name="age" value={item.name} onChange={handleChange}/> <br/>
      <input type="text" id="email" placeholder="Email" name="email"value={item.name} onChange={handleChange}/>
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
