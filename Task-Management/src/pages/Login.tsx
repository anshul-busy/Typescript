import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './style/Login.css'
import { useState ,useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const Login = () => {

const navigate = useNavigate()
const [email,setEmail] = useState<string>('')
const [password,setPassword] = useState<string>('')
const [error,setError] = useState<string | null>('')
const [remember, setRemember] = useState(false);


useEffect(() => {
  const saved = localStorage.getItem("remember");
  if (saved) setRemember(JSON.parse(saved));
}, []);

function handleLogin (e: React.SubmitEvent<HTMLFormElement>){
  //fn for validating the email id ans password
    
  e.preventDefault()

  if(!email || !password){
    setError("Eamil and Password both are required")
    return;
  }

  if(!EMAIL_REGEX.test(email)){
    setError("Invalid email format");
    return;
  }

  if (remember) {
    localStorage.setItem("remember", "true");
  } else {
    localStorage.removeItem("remember");
  }
        setError(null)
        console.log("Login successful");
        navigate("/dashboard");
} 


const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


return (
  <div className="bgv">
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
           <div className="login-options">

              <div className="remember">
                 <div className="check">
               <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              </div>
                <div className="p-tag">
                <p> Remember me</p>
                </div>
              </div>

            <span className="forgot">Forgot password?</span>
          </div>
         
        <button id = "login-btn"type="submit">Login</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

        <div className="continue">
  <hr />
  <span>Or continue with</span>
  <hr />
</div>

      <div className="cont-btn">
        
                <button><FcGoogle />Google</button>
        
       
            <button><FaGithub /> Google</button>
            
        </div>


      <p className="switch-text">
        Dont have an account?{" "}
        <span>
          <Link to="./Signup">Sign Up</Link>
        </span>
      </p>
    </div>
          </form>

  </div>
  </div>
);

}

export default Login