import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {HexagonClip} from './components/Images'
import {Modal} from './components/Modal'
import tileFarmScreenShot from './images/tile_farm_screenshot.png'
import modernCompassScreenShot1 from './images/modern_compass_screenshot_1.webp'
import modernCompassScreenShot2 from './images/modern_compass_screenshot_2.webp'
import modernCompassScreenShot3 from './images/modern_compass_screenshot_3.webp'
import {Carousel, CarouselSlide} from './components/Carousel'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Modal id={'modal-modern-compass'}>
            <Carousel>
                <CarouselSlide id={'slide-modern-compass-1'} previousId={'slide-modern-compass-3'} nextId={'slide-modern-compass-2'}>
                    <img src={modernCompassScreenShot1} alt={'Modern Compass 3D view'}/>
                </CarouselSlide>
                <CarouselSlide id={'slide-modern-compass-2'} previousId={'slide-modern-compass-1'} nextId={'slide-modern-compass-3'}>
                    <img src={modernCompassScreenShot2} alt={'Modern Compass notification'}/>
                </CarouselSlide>
                <CarouselSlide id={'slide-modern-compass-3'} previousId={'slide-modern-compass-2'} nextId={'slide-modern-compass-1'}>
                    <img src={modernCompassScreenShot3} alt={'Modern Compass notification in system bar'}/>
                </CarouselSlide>
            </Carousel>
        </Modal>
        <Modal id={'modal-tile-farm'}>
            <img src={tileFarmScreenShot} alt={'Tile Farm mobile'}/>
        </Modal>
        <HexagonClip/>
        <App/>
    </React.StrictMode>
)