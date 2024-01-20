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

const AnotherElement = React.createElement(
  "a", /* Here we have to provide the tag name */
  { /* This is the options object which is containing attributes for the tag */
    href : "https://www.google.com",
    target : "_blank"
  },
  "Click Here to go to Google" /* This is the children that is passed to the element */
)

ReactDOM.createRoot(document.getElementById('root'))
.render(
  // <App />     /* It Works */
  // < MyApp />  /* It Works */
  // MyApp()     /* It Works */
  // MyElement   /* It Works */
  AnotherElement
)
