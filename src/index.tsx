import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {HexagonClip} from './components/Images'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <HexagonClip/>
        <App/>
    </React.StrictMode>
)