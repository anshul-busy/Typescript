import { useState } from "react";
import "./style/Signup.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {

const navigate = useNavigate()
const [name,setName]= useState<string>('')
const [email,setEmail] = useState<string>('')
const [password,setPassword] = useState<string>('')
const [confirmPassword,setConfirmPassword] = useState<string>('')
const [error,setError] = useState<string | null>('')
  

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function handleSubmit (e: React.SubmitEvent<HTMLFormElement>){
    e.preventDefault()
    if(!name || !email || !password || !confirmPassword){
        setError("All feilds are mendatory")
          console.log(error);
        return;
    }

    if(password !== confirmPassword){
        setError    ("Password does not match")
        console.log(error);
          return;
    }
    if(!EMAIL_REGEX.test(email)){
        console.log(EMAIL_REGEX.test(email));
         setError("Invalid email")
          return;
        }
        setError(null)
        console.log("User registered successfully");
        localStorage.setItem("user", email)
        navigate("/dashboard");
}


    return (
    <div className="container">
     
     <form onSubmit={handleSubmit}>
      <div className="auth-box">
        <h2>Create Account</h2>

        <input type="text" placeholder="Full Name" value={name} onChange={ (e)=>setName(e.target.value) } />
        <input type="email" placeholder="Email" value={email} onChange={ (e)=>setEmail(e.target.value) }/>
        <input type="password" placeholder="Password" value={password} onChange={ (e)=>setPassword(e.target.value) }/>
        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={ (e)=>setConfirmPassword(e.target.value) } />

        <button type="submit">Create Account</button>
      
      {
            <p style={{ color: "red" }}>{error}</p>
      }
    

        <p className="switch-text">
          Already have an account? <span> <Link to="/">Login</Link></span>
        </p>
      </div>
      </form>
    </div>
  );
};

export default Signup;