# EXPERIMENT 6: FORM VALIDATION IN REACT

**Name:** HANIEL REENA D R  
**Register Number:** 2305001008  
**Department:** CSE

## 1. AIM

To create a React form with validation for required fields, email, password, and display appropriate error messages.

## 2. ALGORITHM

1. Start the React application.
2. Import useState and the CSS file.
3. Create formData state for name, email, and password.
4. Create an errors state to store validation messages.
5. Use handleChange() to update the form values.
6. Validate required fields, email format, and password length.
7. Display error messages using conditional rendering.
8. Prevent page refresh using preventDefault().
9. Display a success alert when all fields are valid.
10. Stop the application.

## 3. PROJECT STRUCTURE

```text
Experiment_06/
├── index.html
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    └── index.css
```

## 4. PROGRAMS

### Program 1: App.jsx

**Location:** `src/App.jsx`

```jsx
import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (formData.password === "") {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password =
        "Password must contain at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="container">
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        {errors.name && (
          <p className="error">{errors.name}</p>
        )}

        <label>Email</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        {errors.email && (
          <p className="error">{errors.email}</p>
        )}

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
        />
        {errors.password && (
          <p className="error">{errors.password}</p>
        )}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
```

### Program 2: App.css

**Location:** `src/App.css`

```css
* {
  box-sizing: border-box;
}

#root {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Segoe UI", Arial, sans-serif;
  background: linear-gradient(135deg, #eef4ff, #f8fafc);
}

.container {
  width: 500px;
  max-width: calc(100% - 40px);
  background: white;
  padding: 40px;
  border-radius: 18px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.12);
}

h1 {
  margin: 0 0 28px;
  text-align: center;
  font-size: 30px;
  color: #1e3a8a;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 15px;
  margin-bottom: 7px;
  font-size: 15px;
  font-weight: 600;
  color: #334155;
}

input {
  width: 100%;
  padding: 13px 15px;
  border: 1px solid #cbd5e1;
  border-radius: 9px;
  background: #f8fafc;
  font-size: 15px;
  outline: none;
}

input:focus {
  background: white;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
}

.error {
  margin: 6px 0 0;
  font-size: 13px;
  font-weight: 500;
  color: #dc2626;
}

button {
  width: 100%;
  margin-top: 25px;
  padding: 13px;
  border: none;
  border-radius: 9px;
  background: #2563eb;
  color: white;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
}
```

### Program 3: main.jsx

**Location:** `src/main.jsx`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Program 4: index.css

**Location:** `src/index.css`

```css
* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  min-width: 320px;
  min-height: 100%;
}
```

## 5. EXECUTION

1. Open the Experiment_06 folder in VS Code.
2. Open the terminal.
3. Install the dependencies:

```bash
npm install
```

4. Run the React application:

```bash
npm run dev
```

5. Open the localhost URL displayed in the terminal.
6. Enter Name, Email, and Password.
7. Click the Register button.
8. Check whether the appropriate validation messages or success alert are displayed.

## 6. BUILD CHECK

```bash
npm run build
```

## 7. OUTPUT

<img width="710" height="653" alt="image" src="https://github.com/user-attachments/assets/a7849b2e-4598-404f-8635-690d04a19073" />


## 8. OBSERVATION

The form validates the entered name, email, and password. Appropriate error messages are displayed for invalid input, and a success alert is shown when the form data passes validation.

## 9. RESULT

Thus, a React form with required-field, email, and password validation was successfully created, and dynamic error messages were displayed using React state.
