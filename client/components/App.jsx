import React, {useState, useEffect} from 'react'
import {getGreeting} from '../apiClient'
import Form from './Form'
import Output from './Output'

const App = () => {

  const [greeting, setGreeting] = useState('')
  const [count, setCount] = useState(0)

  useEffect(() => {
    getGreeting()
      .then((greeting) => {
        console.log(greeting)
        setGreeting(greeting)
      })
  })

  return (
    <>
    {count}
    <h1>{greeting}</h1>
    <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  )
}

export default App
