import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/index.css'
import UseStateComponent from './UseStateComponent'
import UseEffectComponent from './UseEffectComponent'
import UseMemoComponent from './UseMemoComponent'


ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <>
    <UseStateComponent />
    <UseEffectComponent />
    <UseMemoComponent />
  
  </>
  // </React.StrictMode>,
)
