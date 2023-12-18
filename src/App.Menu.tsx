import React, {useEffect, useState} from 'react'
import {IdProps, LabelProps} from './types/Props'
import {HexagonImage} from './components/Images'
import about from './images/about.jpg'
import {SocialLinks} from './components/Links'


type SectionSetter = React.Dispatch<React.SetStateAction<string>>
const headerStyle = 'menu-title text-left text-xl drop-shadow-md'
const sectionIds = [
    'header',
    'section-about-me',
    'section-tile-farm',
    'section-modern-compass',
    'section-calibre-inhale',
    'section-valid-coffee',
    'section-shape-art'
]
const intersectionOptions = {
    root: document.getElementById('page-content'),
    threshold: 0.55
}

export function Menu () {
    const [selectedSection, setSelectedSection] = useState('header')
    const scrollEffect = newScrollSectionsEffect(setSelectedSection)
    useEffect(scrollEffect, [])

    return <div
        className={'bg-base-200 min-h-full grid grid-cols-1 grid-rows-[1fr_2fr_1fr] justify-between py-4'}>
        <div className={'self-start text-center'}>
            <HexagonImage imageSource={about} className={'mx-auto'}/>
            <h1 className={'text-2xl font-semibold'}>Bob Liberatore</h1>
            <p className={'w-80 mx-auto italic'}>Crafting innovative user experiences.</p>
        </div>
        <ul className={'menu p-4 gap-2 mx-4 w-80 self-start ext-base-content justify-center bg-white/30 rounded-2xl'}>
            <MenuSectionHeader label={'Android'}/>
            <MenuSectionItem label={'Tile Farm'} selectedSection={selectedSection} id={'section-tile-farm'}/>
            <MenuSectionItem label={'Modern Compass'} selectedSection={selectedSection} id={'section-modern-compass'}/>
            <MenuSectionItem label={'Calibre Inhale'} selectedSection={selectedSection} id={'section-calibre-inhale'}/>

            <MenuSectionHeader label={'Web'}/>
            <MenuSectionItem label={'Valid Coffee'} selectedSection={selectedSection} id={'section-valid-coffee'}/>

            <MenuSectionHeader label={'Unreal'}/>
            <MenuSectionItem label={'ShapeArt'} selectedSection={selectedSection} id={'section-shape-art'}/>
        </ul>
        <div className={'self-end mx-auto'}>
            <SocialLinks className={'justify-self-center'}/>
        </div>
    </div>
}

function MenuSectionItem ({label, id, selectedSection}: { selectedSection: string } & IdProps & LabelProps) {
    return <input
        type='radio'
        aria-label={label}
        name='sections'
        value={id}
        checked={selectedSection === id}
        onChange={scrollToSectionChangeHandler}
        className='btn'/>
}

function MenuSectionHeader ({label}: LabelProps) {
    return <h2 className={headerStyle}>{label}</h2>
}

function newScrollSectionsEffect (sectionSetter: SectionSetter) {
    return () => {
        const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    sectionSetter(entry.target.id)
                }
            }
        }

        const intersectionObserver = new IntersectionObserver(intersectionCallback, intersectionOptions)

        sectionIds.forEach(sectionId => {
            const section = document.getElementById(sectionId) as Element
            intersectionObserver.observe(section)
        })
    }
}

function scrollToSectionChangeHandler (event: React.ChangeEvent<HTMLInputElement>) {
    const targetId = event.target.value
    closeDrawer()
    scrollTo(targetId)
}

function closeDrawer () {
    const myCheckbox = document.getElementById('my-drawer') as HTMLInputElement;
    myCheckbox.checked = false;
}

function scrollTo (targetId: string) {
    document.getElementById('page-content')?.scrollTo({
        top: document.getElementById(targetId)?.offsetTop,
        behavior: 'smooth'
    })
}