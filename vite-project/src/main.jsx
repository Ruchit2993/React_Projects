import React from 'react'
import ReactDOM from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import { createRef } from 'react'

const anotherElement =(
  <a href="https://google.com" target='_blank'>visit google 
  </a>
)

const anotherUser = "Monkey D Luffy"

const reactElement = React.createElement(
    'a',
    {href:'https://one-piece.com/op/links_eng/',target: '_blank'},
    'offfffff____',
    anotherUser

)

ReactDOM.createRoot(document.getElementById('root')).render(
  
 //<App />
reactElement
 
)
