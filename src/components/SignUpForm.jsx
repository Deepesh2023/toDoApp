import { useState } from 'react'
const bcrypt = require('bcrypt')

const SignUpForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [reTypedPassword, setReTypedPassword] = useState('')

  const SignUpButtonAction = async (event) => {
    event.preventDefault()

    if (!username || !password || !reTypedPassword) {
      console.log('please provide correct info')
      return
    }

    const exsistingUser = window.localStorage.getItem(username)
    if (exsistingUser) {
      console.log('user already exists')
      return
    }

    if (password !== reTypedPassword) {
      console.log('passwords do not match')
      return
    }

    // const saltRounds = 69
    // const passwordHash = await bcrypt.hash(password, saltRounds)
    // console.log(passwordHash)
  }

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

        <button type="submit" onClick={SignUpButtonAction}>
          Sign up
        </button>
      </form>
    </>
  )
}

export default SignUpForm
