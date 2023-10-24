import React, {useState} from 'react'




export const EmployeeLogin = () => {

  
    const [data,setData]=useState
    ({
        email:'',
        password:'',
       
    })
    const {email,password}=data;

    const changeHandler = e =>
    {
        setData({...data,[e.target.name]:[e.target.value]})
    }

    const submitHandler=((e) => {
      e.preventDefault();
    });
  
  
  return (
    <div className="border bg-light w-25 mt-2 m-auto p-3" onClick={submitHandler}>
    <h4 style={{textAlign:"center"}}>Login</h4><br/>
       <form>
       <label for="email" className="label">Email:</label>
       <div className="inputBox mt-2">
        <input
          type="email" 
          class="form-control col-sm-6" 
          name='email' placeholder="Enter Email"
          value={email} onChange={changeHandler} />
      </div>
      <label for="password" className="label mt-3">Password:</label>
      <div className="inputBox mt-2  ">
        <input
          type="password" 
          class="form-control col-sm-6" 
          name='password' placeholder="Enter Password" 
          value={password} onChange={changeHandler} />
      </div>
        <button className='btn btn-warning mb-4 w-100 mt-5' >Login</button><br/>
       </form>
    </div>
  )
}

export default EmployeeLogin