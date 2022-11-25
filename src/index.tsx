import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { register, unregister } from './serviceWorker'
import 'moment/locale/cs'


const prod = process.env.NODE_ENV === 'production'

const render = () => {
  ReactDOM.render(
    <App/>,
    document.getElementById('root'),
  )
}

render()

if (prod) {
  unregister()
} else {
  register()
}
