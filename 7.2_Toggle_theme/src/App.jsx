import react, { createContext, useEffect, useState } from 'react'
import Card from './Components/Card';
import ThemeBtn from './Components/ThemeBtn';

export const ThemeContext = createContext("light");

function App() {
  
  const [theme, setTheme] = useState("light");

  const darkTheme = () => {
    setTheme("dark");
  }

  const lightTheme = () => {
    setTheme("light");
  }

  useEffect(() => {
    const element = document.querySelector('html');
    element.classList.remove("dark", "light");
    element.classList.add(theme);
  }, [theme])

  return (
    <>
      <ThemeContext.Provider value={{theme, darkTheme, lightTheme}}>
        
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <Card />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <ThemeBtn />
                    </div>
                </div>
            </div>

      </ThemeContext.Provider>
    </>
  )
}

export default App
