import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <>
      <h1 style={{color: "white"}}> Hey Everyone</h1>
    </>
  )
}

const MyElement = (
  <h1> Hello World</h1>
)

ReactDOM.createRoot(document.getElementById('root'))
.render(
  // <App />
  // < MyApp />
  // MyApp()
  MyElement
)
