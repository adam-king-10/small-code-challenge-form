import React, {useEffect, useState} from 'react';


function Form (props) {
  const defaultState = {
    name: '',
    age: '',
    email: ''
  }
  const [input, setInput] = useState(defaultState)

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
      <input type="text" className="input" placeholder="Name" name="name" value={input.name} onChange={handleChange}/><br/>
      <input type="text" className="input" placeholder="Age" name="age" value={input.age} onChange={handleChange}/> <br/>
      <input type="text" className="input" placeholder="Email" name="email"value={input.email} onChange={handleChange}/>
    </form>
    <div className="tableContainer">
    <table>
      <tbody>
        <tr>
          <th className="formItem">Name</th>
          <td className="userInput">{input.name}</td>
        </tr>
        <tr>
          <th className="formItem">Age</th>
          <td className="userInput">{input.age}</td>
        </tr>
        <tr>
          <th className="formItem">Email</th>
          <td className="userInput">{input.email}</td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
  )
}


export default Form
