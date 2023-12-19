import './App.css';
import {
    GalleryImage, GithubImage, GooglePlayImage,
    HexagonImage, LinkImage
} from './components/Images'
import {Section, SectionBadges, SectionName, SectionProse} from './components/Section'
import tileFarm from './images/tile_farm.png'
import modernCompass from './images/modern_compass.png'
import shapeArt from './images/shape_art.png'
import calibreInhale from './images/calibre_inhale.svg'

import {
    AndroidBadge,
    CppBadge, Css3Badge, DockerBadge, ExpressBadge, Html5Badge,
    JavaBadge,
    KotlinBadge, NextBadge, NodeBadge,
    OpenGLBadge,
    PostgresqlBadge, ReactBadge,
    SQLiteBadge, TypescriptBadge,
    Unreal5Badge
} from './components/Badge'
import {DrawerContent, DrawerLayout, PageActionBar, PageContent} from './components/Drawer'
import {DrawerLink, SocialLinks} from './components/Links'
import React from 'react'
import {Menu} from './App.Menu'
import {showModal} from './components/Modal'


export default function App () {
    return <DrawerLayout>
        <PageContent>
            <PageActionBar>
                <DrawerLink/>
                <SocialLinks/>
            </PageActionBar>
            <Header/>
            <TileFarmSection/>
            <ModernCompassSection/>
            <CalibreInhaleSection/>
            <ValidCoffeeSection/>
            <ShapeArtSection/>
        </PageContent>
        <DrawerContent>
            <Menu/>
        </DrawerContent>
    </DrawerLayout>
}

function Header () {
    return <header
        id={'header'}
        className={'hero h-screen pt-[48px] snap-start z-10 bg-transparent text-primary-content'}>
        <div
            className={'container prose text-primary-content prose-headings:text-primary-content prose-strong:text-accent mx-2 drop-shadow-md'}>
            <h1 className={'text-7xl text-center mb-0 font-bold tracking-widest'}>Inhale<br/>&nbsp;&nbsp;&nbsp;Design
            </h1>
            <h2 className={'font-bold text-center mt-6 mb-20 tracking-widest'}>Full-stack development for creative user experiences</h2>
            <p className={'text-md md:text-lg mx-2 font-semibold'}>In the realm of app development, <strong>execution is everything</strong>. I thrive on an Agile mentality, harnessing quality practices to develop production-ready apps efficiently while crafting <strong>innovative user experiences</strong>.
            </p>
        </div>
    </header>
}

function TileFarmSection () {
    const showGallery = () => showModal('modal-tile-farm')
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

        <button className='btn btn-secondary text-secondary-content fill-accent' onClick={showGallery}>
            <GalleryImage/> Screenshots
        </button>
    </Section>
}

function ModernCompassSection () {
    const showGallery = () => showModal('modal-modern-compass')
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
            <button className={'btn btn-secondary text-secondary-content fill-accent'} onClick={showGallery}>
                <GalleryImage/> Screenshots
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
        <SectionBadges>
            <Html5Badge/>
            <Css3Badge/>
            <TypescriptBadge/>
            <PostgresqlBadge/>
            <ReactBadge/>
            <NextBadge/>
            <DockerBadge/>
            <ExpressBadge/>
            <NodeBadge/>
        </SectionBadges>
        <SectionProse>
            <p>A user-focused web app that provides a streamlined review interface for cafes in Albuquerque. I led a team of full stack web development students from conception to production to deliver this awesome capstone project.</p>
        </SectionProse>
        <div className={'flex gap-2'}>
            <a href={'http://coffee.inhale.design'}>
                <button className={'btn btn-secondary text-secondary-content fill-accent'}><LinkImage/> Website</button>
            </a>
            <a href={'https://github.com/cohort-web-43-coffee/coffee-capstone'}>
                <button className={'btn btn-secondary text-secondary-content fill-accent'}><GithubImage/> Github</button>
            </a>
        </div>
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