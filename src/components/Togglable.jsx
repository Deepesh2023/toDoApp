import { useState } from 'react'

import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'

const Togglable = () => {
  const [showLoginForm, setShowLoginForm] = useState(true)

  if (showLoginForm) {
    return (
      <div>
        <LoginForm />
        <button onClick={() => setShowLoginForm(false)}>
          Not a user? sign up!
        </button>
      </div>
    )
  }

  return (
    <div>
      <SignUpForm />
      <button onClick={() => setShowLoginForm(true)}>
        Already a user? Login!
      </button>
    </div>
  )
}

export default Togglable
