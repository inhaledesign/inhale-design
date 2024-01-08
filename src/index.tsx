import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {HexagonClip} from './components/Images'
import {Modal} from './components/Modal'
import tileFarmScreenShot1 from './images/tile_farm_screenshot_1.png'
import tileFarmScreenShot2 from './images/tile_farm_screenshot_2.png'
import tileFarmScreenShot3 from './images/tile_farm_screenshot_3.png'
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
                <CarouselSlide
                    id={'slide-modern-compass-1'} previousId={'slide-modern-compass-3'}
                    nextId={'slide-modern-compass-2'}>
                    <img src={modernCompassScreenShot1} alt={'Modern Compass 3D view'}/>
                </CarouselSlide>
                <CarouselSlide
                    id={'slide-modern-compass-2'} previousId={'slide-modern-compass-1'}
                    nextId={'slide-modern-compass-3'}>
                    <img src={modernCompassScreenShot2} alt={'Modern Compass notification'}/>
                </CarouselSlide>
                <CarouselSlide
                    id={'slide-modern-compass-3'} previousId={'slide-modern-compass-2'}
                    nextId={'slide-modern-compass-1'}>
                    <img src={modernCompassScreenShot3} alt={'Modern Compass notification in system bar'}/>
                </CarouselSlide>
            </Carousel>
        </Modal>
        <Modal id={'modal-tile-farm'}>
            <Carousel>
                <CarouselSlide id={'slide-tile-farm-1'} previousId={'slide-tile-farm-3'} nextId={'slide-tile-farm-2'}>
                    <img src={tileFarmScreenShot1} alt={'Tiles tool in Tile Farm'}/>
                </CarouselSlide>
                <CarouselSlide id={'slide-tile-farm-2'} previousId={'slide-tile-farm-1'} nextId={'slide-tile-farm-3'}>
                    <img src={tileFarmScreenShot2} alt={'Tiles styled with circles and lines in Tile Farm'}/>
                </CarouselSlide>
                <CarouselSlide id={'slide-tile-farm-3'} previousId={'slide-tile-farm-2'} nextId={'slide-tile-farm-1'}>
                    <img src={tileFarmScreenShot3} alt={'Color tool in Tile Farm'}/>
                </CarouselSlide>
            </Carousel>
        </Modal>
        <HexagonClip/>
        <App/>
    </React.StrictMode>
)