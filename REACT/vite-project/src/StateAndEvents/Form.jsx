import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = () => {
    console.log("submit button clicked!");
    console.log(`Name is ${name}
    Email is ${email}
    Password is ${password}`);
  };

  return (
    <div>
      <main>
        <div>
          <label>Name</label>
        </div>
        <div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
      </main>

      <main>
        <div>
          <label>Email</label>
        </div>
        <div>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
      </main>

      <main>
        <div>
          <label>Password</label>
        </div>
        <div>
          <input  type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      </main>
      <main>
        <div>
          <button type="submit" onClick={onSubmit}>
            Submit
          </button>
        </div>
      </main>
      <ul>
        <li>Name {name}</li>
        <li>Email {email}</li>
        <li>Password{password}</li>
      </ul>
    </div>
  );
}
export default Form;
