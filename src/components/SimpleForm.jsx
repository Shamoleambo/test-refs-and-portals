import { forwardRef } from 'react'

const SimpleForm = forwardRef(function SimpleForm(
  { name, onButtonClick },
  ref
) {
  return (
    <form>
      <h2>Welcome {name}</h2>
      <label htmlFor='name'>Type in your name: </label>
      <input ref={ref} type='text' id='name' name='name'></input>
      <button type='button' onClick={onButtonClick}>
        Click on me
      </button>
    </form>
  )
})

export default SimpleForm
