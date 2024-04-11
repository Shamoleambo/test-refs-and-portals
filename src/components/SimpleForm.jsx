import { useState, useRef } from 'react'

export default function SimpleForm() {
  const [name, setName] = useState('')
  const nameInput = useRef()

  function handleClick() {
    setName(nameInput.current.value)
  }

  return (
    <form>
      <h2>Welcome {name}</h2>
      <label htmlFor='name'>Type in your name: </label>
      <input ref={nameInput} type='text' id='name' name='name'></input>
      <button type='button' onClick={handleClick}>
        Click on me
      </button>
    </form>
  )
}
