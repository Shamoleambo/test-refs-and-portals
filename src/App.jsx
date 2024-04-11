import { useState, useRef } from 'react'
import SimpleForm from './components/SimpleForm'
import SuperSimplePortal from './components/SuperSimplePortal'

function App() {
  const [name, setName] = useState('')
  const nameInput = useRef()
  const modal = useRef()

  function handleClick() {
    setName(nameInput.current.value)
    modal.current.showModal()
  }

  return (
    <>
      <SuperSimplePortal ref={modal} name={name} />
      <h1>The Super App</h1>
      <SimpleForm name={name} onButtonClick={handleClick} ref={nameInput} />
    </>
  )
}

export default App
