import { useState } from "react";
function Form1() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmit() {
    console.log("Submit button clicked!");
    console.log(`Name: ${formData.name}`);
    console.log(`Email: ${formData.email}`);
    console.log(`Password: ${formData.password}`);
  }

  return (
    <main onSubmit={onSubmit}>
      <div>
        <label>Name</label>
        <br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <br />

      <div>
        <label>Email</label>
        <br />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <br />

      <div>
        <label>Password</label>
        <br />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <br />

      <button type="submit">Submit</button>
      <ul>
        <li>Name {formData.name}</li>
        <li>Email {formData.email}</li>
        <li>Password{formData.password}</li>
      </ul>
    </main>
  );
}
export default Form1;
