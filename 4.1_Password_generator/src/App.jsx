import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("");
  const [lenght, setLength] = useState(8);
  const [isNumbers, setIsNumber] = useState(false);
  const [isSpecialChar, setIsSpecialChar] = useState(false);
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if(isNumbers) str += "123456789";
    if(isSpecialChar) str += "!@#$%^&*()_+/*-+|?><{}[]";

    for(let i = 1; i <= lenght; i++) {
      let rand = Math.floor(Math.random() * str.length);

      pass += str.charAt(rand);
    }

    setPassword(pass);

  }, [lenght, isNumbers, isSpecialChar, setPassword]);

  const copy = useCallback(() => {
    console.log(passwordRef);
    // passwordRef.current?.focus();
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => {
    generatePassword();
  }, [lenght, isNumbers, isSpecialChar, generatePassword])

  return (
    <>
      <div className='container'>
        <div className="content-container">
          <h1>Password Generator</h1>
          <input type="text" 
          readOnly 
          value={password} 
          ref={passwordRef}/>
          <button className={`animation-fade-in ${password ? 'button-visible' : ''}`} onClick={copy}>Copy</button>

          <hr></hr>

          <input type="range" 
          min={6} max={99} 
          name='lenght' 
          value={lenght} 
          onChange={(e) => setLength(e.target.value)} /> 

          <span className='lenght'>{lenght}</span>

          <input type="checkbox" 
          name="number" id="number" 
          onChange={() => setIsNumber(prev => !prev)} />

          <label htmlFor="number">Number</label>

          <input type="checkbox" 
          name="SpecialChar" 
          id="SpecialChar" 
          onChange={() => setIsSpecialChar(prev => !prev)} />

          <label htmlFor="SpecialChar">Special Character</label>

        </div>
      </div>
    </>
  )
}

export default App
