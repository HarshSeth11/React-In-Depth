import { useState, useContext } from 'react'
import UserContext from '../contexts/UserContext';


export default function Login() {
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
    }

  return (
    <div>
        <h1>Login</h1>
        <input type="text" placeholder='username' value={username} onChange={(e) => setusername(e.target.value)} />
        {"  "}
        <input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
