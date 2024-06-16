import { useState } from 'react'

const App = () => {
  return (
    <>
      <h1>ToDoApp</h1>
      <Togglable />
    </>
  )
}

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

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <form action="onSubmit">
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />

        <label htmlFor="password">Password: </label>
        <input
          type="text"
          name="password"
          id="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </>
  )
}

const SignUpForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [reTypedPassword, setReTypedPassword] = useState('')

  return (
    <>
      <form action="onSubmit">
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />

        <label htmlFor="password">Password: </label>
        <input
          type="text"
          name="password"
          id="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />

        <label htmlFor="reTypedPassword">Confirm Password: </label>
        <input
          type="text"
          name="reTypedPassword"
          id="reTypedPassword"
          value={reTypedPassword}
          onChange={({ target }) => setReTypedPassword(target.value)}
        />

        <button type="submit">Sign up</button>
      </form>
    </>
  )
}

export default App
