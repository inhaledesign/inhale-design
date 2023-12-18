import './App.css';
import {
    GalleryImage, GooglePlayImage,
    HexagonImage, LinkImage
} from './components/Images'
import {Divider} from './components/Divider'
import {Section, SectionBadges, SectionName, SectionProse} from './components/Section'
import about from './images/about.jpg'
import tileFarm from './images/tile_farm.png'
import modernCompass from './images/modern_compass.png'
import shapeArt from './images/shape_art.png'
import calibreInhale from './images/calibre_inhale.svg'

import {
    AndroidBadge,
    CppBadge,
    JavaBadge,
    KotlinBadge,
    OpenGLBadge,
    PostgresqlBadge,
    SQLiteBadge,
    Unreal5Badge
} from './components/Badge'
import {DrawerContent, DrawerLayout, PageContent} from './components/Drawer'
import {DrawerLink, SocialLinks} from './components/Links'
import React from 'react'
import {StyleProps} from './types/Props'
import {Menu} from './App.Menu'


export default function App () {
    return <div className='bg-cloud-mask'>
        <div className={'sticky lg:hidden top-0 z-20 flex justify-between p-2 drop-shadow-md bg-base-200/90'}>
            <DrawerLink/>
            <SocialLinks/>
        </div>
        <DrawerLayout>
            <PageContent>
                <Header/>
                <Divider className={'lg:hidden'}/>
                <AboutMeSection className={'lg:hidden'}/>
                <Divider/>
                <TileFarmSection/>
                <Divider/>
                <ModernCompassSection/>
                <Divider/>
                <CalibreInhaleSection/>
                <Divider/>
                <ValidCoffeeSection/>
                <Divider/>
                <ShapeArtSection/>
            </PageContent>
            <DrawerContent>
                <Menu/>
            </DrawerContent>
        </DrawerLayout>
    </div>
}

function Header () {
    return <header
        id={'header'}
        className={'hero min-h-screen snap-start z-10 bg-transparent text-primary-content shadow-lg shadow-sky-800/20'}>
        <div className={'container text-center mx-2 md:mx-auto mt-4 drop-shadow-md'}>
            <span className={'mb-5 text-7xl font-bold tracking-widest'}>Inhale<br/></span>
            <span className={'mb-12 text-7xl font-bold tracking-widest ml-5'}>&nbsp;Design</span>
            <p className={'font-bold text-xl mt-10 mb-8 tracking-widest'}>Full-stack development for creative user experiences</p>
        </div>
    </header>
}


function AboutMeSection ({className}: StyleProps) {
    return <Section id={'section-about-me'} className={className}>
        <HexagonImage imageSource={about}/>
        <SectionName>Bob Liberatore</SectionName>
        <SectionProse>
            <p>I'm a passionate app developer dedicated to crafting products that deliver <strong>innovative user experiences</strong>. If you're looking for someone to collaborate with on your app vision, let's connect and bring it to life!
            </p>
            <p>I firmly believe that in the realm of app development, <strong>execution is everything</strong>. I thrive on an Agile mentality, harnessing cutting-edge development practices to deliver top-notch apps efficiently and hassle-free. With a strong focus on quality, I ensure that every app I develop is production ready.
            </p>
        </SectionProse>
    </Section>
}

function TileFarmSection () {
    return <Section id={'section-tile-farm'}>
        <HexagonImage imageSource={tileFarm}/>
        <SectionName>Tile Farm</SectionName>
        <SectionBadges>
            <AndroidBadge/>
            <KotlinBadge/>
            <JavaBadge/>
            <PostgresqlBadge/>
            <SQLiteBadge/>
        </SectionBadges>

        <SectionProse>
            <p>Teaming up with a professional mathematician, I crafted a unique app that aligns with constructivist teaching methodologies. Tile Farm delivers a uniquely creative learning experience with a custom mutli-touch drag-and-drop gesture interface. Tile Farm's groundbreaking ideas were honored with an SBIR grant from the National Science Foundation.</p>
        </SectionProse>

        <button className='btn btn-secondary text-secondary-content fill-accent'><GalleryImage/> Screenshots</button>
    </Section>
}

function ModernCompassSection () {
    return <Section id={'section-modern-compass'}>
        <HexagonImage imageSource={modernCompass}/>
        <SectionName>Modern Compass</SectionName>
        <SectionBadges>
            <AndroidBadge/>
            <KotlinBadge/>
            <OpenGLBadge/>
        </SectionBadges>

        <SectionProse>
            <p>An innovative take one the traditional magnetic compass. Modern Compass offers a variety of novel features, including a service that integrates an animated compass into the Android notification bar, as well as a three-dimensional compass.</p>
        </SectionProse>
        <div className={'flex gap-2'}>
            <button className={'btn btn-secondary text-secondary-content fill-accent'}><GalleryImage/> Screenshots
            </button>
            <a href={'https://play.google.com/store/apps/details?id=design.inhale.compass'}>
                <button className={'btn btn-secondary text-secondary-content'}><GooglePlayImage/> Download</button>
            </a>
        </div>
    </Section>
}

function CalibreInhaleSection () {
    return <Section id={'section-calibre-inhale'}>
        <HexagonImage imageSource={calibreInhale}/>
        <SectionName>Calibre Inhale</SectionName>
        <SectionBadges>
            <AndroidBadge/>
            <KotlinBadge/>
            <SQLiteBadge/>
        </SectionBadges>

        <SectionProse>
            <p>A client-side app for the Calibre E-book management software. Focused on providing a user-first interface for syncing books to Android based e-readers. In the early stages of development, it currently integrates with Google Drive's REST API. Support for more cloud storage services is in the works.</p>
        </SectionProse>
    </Section>
}

function ValidCoffeeSection () {
    return <Section id={'section-valid-coffee'}>
        <SectionName>Valid Coffee</SectionName>
        <a href={'http://coffee.inhale.design'}>
            <button className={'btn btn-secondary text-secondary-content fill-accent'}><LinkImage/> Website</button>
        </a>
    </Section>
}

function ShapeArtSection () {
    return <Section id={'section-shape-art'}>
        <HexagonImage imageSource={shapeArt}/>
        <SectionName>ShapeArt</SectionName>
        <SectionBadges>
            <Unreal5Badge/>
            <CppBadge/>
        </SectionBadges>

        <SectionProse>
            <p>A passion project that aims to empower users to effortlessly create stunning 2D and 3D geometric art. ShapeArt is being written 3D first, which means inventing creating custom widgets in 3D space.</p>
        </SectionProse>
    </Section>
}