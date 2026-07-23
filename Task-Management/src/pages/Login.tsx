import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './style/Login.css'
import { useState } from "react";
const Login = () => {
  
const navigate = useNavigate()
const [email,setEmail] = useState<string>('')
const [password,setPassword] = useState<string>('')
const [error,setError] = useState<string | null>('')

function handleLogin (e: React.SubmitEvent<HTMLFormElement>){
    
  e.preventDefault()

  if(!email || !password){
    setError("Eamil and Password both are required")
    return;
  }

  if(!EMAIL_REGEX.test(email)){
    setError("Invalid email format");
    return;
  }
        setError(null)
        console.log("Login successful");
        navigate("/dashboard");

        
} 


const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


return (
  <div className="container">
       <form onSubmit={handleLogin}>
    <div className="login-box">
      <h2>Login</h2>
        <input 
          type="email" 
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input 
          type="password" 
          placeholder="Enter your password"
          value={password}
            onChange={ (e) => setPassword(e.target.value)}
    />

        <button type="submit">Login</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <p className="switch-text">
        Dont have an account?{" "}
        <span>
          <Link to="./Signup">Sign Up</Link>
        </span>
      </p>
    </div>
          </form>

  </div>
);
}

export default Login