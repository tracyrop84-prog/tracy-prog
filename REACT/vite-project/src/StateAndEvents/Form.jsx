function Form() {
    const NameOnChange=(e)=>{
        console.log(e.target.value)
    }
     const EmailOnChange=(e)=>{
        console.log(e.target.value)
    }
     const PasswordOnChange=(e)=>{
        console.log(e.target.value)
    }
    const onSubmit=()=>{
console.log("submit button clicked!")
    }
  return (
    <div>
      <main>
        <div>
          <label>Name</label>
        </div >
        <div>
          <input onChange={NameOnChange}/>
        </div>
      </main>

      <main>
        <div>
          <label>Email</label>
        </div>
        <div>
          <input onChange={EmailOnChange} />
        </div>
      </main>

      <main>
        <div>
          <label>Password</label>
        </div>
        <div>
          <input onChange={PasswordOnChange} />
        </div>
      </main>
      <main>
        <div>
            <button type="submit" onClick={onSubmit}>Submit</button>
        </div>
      </main>
    </div>
  );
}
export default Form;
