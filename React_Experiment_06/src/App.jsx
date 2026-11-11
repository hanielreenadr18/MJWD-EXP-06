import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const validate = () => {
    const newErrors = {}

    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required'
    }

    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required'
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'Enter a valid email'
    }

    if (formData.password === '') {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must contain at least 6 characters'
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      alert('Form submitted successfully!')
    }
  }

  return (
    <div className="container">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={formData.name}
          onChange={handleChange} placeholder="Enter your name" />
        {errors.name && <p className="error">{errors.name}</p>}

        <label>Email</label>
        <input type="text" name="email" value={formData.email}
          onChange={handleChange} placeholder="Enter your email" />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>Password</label>
        <input type="password" name="password" value={formData.password}
          onChange={handleChange} placeholder="Enter password" />
        {errors.password && <p className="error">{errors.password}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default App
