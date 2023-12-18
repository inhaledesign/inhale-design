import './App.css';
import {
    HexagonImage
} from './components/Images'
import {Divider} from './components/Divider'
import {Section, SectionBadges, SectionName, SectionProse} from './components/Section'
import about from './images/about.jpg'
import tileFarm from './images/tile_farm.png'
import modernCompass from './images/modern_compass.png'
import shapeArt from './images/shape_art.png'
import calibreInhale from './images/calibre_inhale.svg'
import tileFarmScreenshot from './images/tile_farm_screenshot.png'
import modernCompassScreenshot from './images/modern_compass_screenshot.webp'

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
import {Menu} from './components/Menu'
import {DrawerLink, SocialLinks} from './components/Links'
import React from 'react'
import {StyleProps} from './types/Props'


export default function App () {
    return <div className='App bg-cloud-mask'>
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
                    <div
                        className={'bg-base-200 min-h-full grid grid-cols-1 grid-rows-[1fr_2fr_1fr] justify-between py-4'}>
                        <div className={'self-start text-center'}>
                            <HexagonImage imageSource={about} className={'md:mx-auto'}/>
                            <h1 className={'text-2xl font-semibold'}>Bob Liberatore</h1>
                            <p className={'w-80 mx-auto italic'}>Crafting innovative user experiences.
                            </p>
                        </div>

                        <Menu/>

                        <div className={'self-end mx-auto'}>
                            <p className={'w-60'}>If you're looking for someone to collaborate with on your app vision, let's connect and bring it to life!</p>
                            <SocialLinks className={'justify-self-center'}/>
                        </div>
                    </div>
                </DrawerContent>
            </DrawerLayout>
    </div>
}

function Header () {
    return <header
        id={'header'}
        className={'hero min-h-screen snap-start z-10 bg-transparent text-primary-content shadow-lg shadow-sky-800/20'}>
        <div className={'container mx-2 md:mx-auto mt-4 drop-shadow-md'}>
            <span className={'mb-5 text-7xl font-bold tracking-widest'}>Inhale<br/></span>
            <span className={'mb-12 text-7xl font-bold tracking-widest ml-5'}>&nbsp;Design</span>
            <p className={'font-bold text-xl mt-10 mb-8 tracking-widest'}>Full-stack development for creative user experiences</p>
        </div>
    </header>
}


function AboutMeSection ({className} : StyleProps) {
    return <Section id={'section-about-me'} className={className}>
        <HexagonImage imageSource={about}/>
        <SectionName>Bob Liberatore</SectionName>
        <SectionProse>
            <p>I'm a passionate app developer dedicated to crafting products that deliver <strong>innovative user experiences</strong>. If you're looking for someone to collaborate with on your app vision, let's connect and bring it to life!</p>
            <p>I firmly believe that in the realm of app development, <strong>execution is everything</strong>. I thrive on an Agile mentality, harnessing cutting-edge development practices to deliver top-notch apps efficiently and hassle-free. With a strong focus on quality, I ensure that every app I develop is production ready.</p>
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
            <p>Teaming up with a professional mathematician, we embarked on a mission to transform math education by crafting a one-of-a-kind app that caters to learners of every age and diverse educational backgrounds. Tile Farm delivers a uniquely captivating learning experience, designed to align with constructivist teaching methodologies. Tile Farm's groundbreaking ideas were honored with an SBIR grant from the National Science Foundation.</p>
            <p>Tile Farm was developed in native Android Kotlin/Java and a combination of PostgreSQL and SQLite3 for the backend. I pushed the Android API to its limits in order to deliver a multi-touch drag and drop experience not seen anywhere else.</p>
        </SectionProse>

        <div className={'block mx-auto md:my-0 md:row-start-1 md:row-span-2 md:col-start-2 md:self-center'}>
            <img
                className={'rounded-xl'} src={tileFarmScreenshot} alt='Screen shot of Tile Farm on Android'
                width={445}/>
        </div>
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
            <p>Modern Compass is native Android Kotlin/Java and OpenGL ES. I used modern Android Jetpack tools to make a modern MVVM Android App. I achieved 90% test coverage using Test Driven Development and Android testing tools like Espresso, UIAutomator, and JUnit. I used Kotlin coroutines and domain specific languages to achieve clean, asynchronous code for interfacing with the device's permissions, magnetometer, accelerometer, and location systems.</p>
        </SectionProse>

        <div className={'block mx-2 md:mx-0 row-start-3 md:col-start-2 md:row-span-2 md:self-center'}>
            <img
                className={'mx-auto rounded-xl'} src={modernCompassScreenshot}
                alt={'Screenshot of Modern Compass in 3D mode'} width={240}/>
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
            <p>Written using an Android Jetpack stack consisting of Compose, ROOM, Hilt, Lifecycle, Navigation, Espresso, JUnit, Retrofit2, and Kotlin coroutines.</p>
        </SectionProse>
    </Section>
}

function ValidCoffeeSection() {
    return <Section id={'section-valid-coffee'}>
        <SectionName>Valid Coffee</SectionName>
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
            <p>ShapeArt is being developed in UnrealEngine 5, with a balance of C++ and Blueprint. I paid special care to wrangle UE5's build system to run GoogleTest unit tests in a module completely separated from working code.</p>
        </SectionProse>
    </Section>
}