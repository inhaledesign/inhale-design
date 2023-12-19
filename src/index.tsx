import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {HexagonClip} from './components/Images'
import {Modal} from './components/Modal'
import tileFarmScreenShot from './images/tile_farm_screenshot.png'
import modernCompassScreenShot from './images/modern_compass_screenshot.webp'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Modal id={'modal-modern-compass'}>
            <img src={modernCompassScreenShot} alt={'Modern Compass 3D view'}/>
        </Modal>
        <Modal id={'modal-tile-farm'}>
            <img src={tileFarmScreenShot} alt={'Tile Farm mobile'}/>
        </Modal>
        <HexagonClip/>
        <App/>
    </React.StrictMode>
)