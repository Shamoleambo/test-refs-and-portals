import { forwardRef } from 'react'

const SuperSimpleForm = forwardRef(function ({ name }, ref) {
  return (
    <dialog ref={ref}>
      <h3>Hello {name}, I am a Portal</h3>
      <p>how are you doing?</p>
      <form method='dialog'>
        <button>Bye Bye</button>
      </form>
    </dialog>
  )
})

export default SuperSimpleForm
