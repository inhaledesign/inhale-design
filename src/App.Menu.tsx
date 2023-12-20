import React, {useEffect, useState} from 'react'
import {IdProps, LabelProps} from './types/Props'
import {HexagonImage} from './components/Images'
import about from './images/about.jpg'
import {SocialLinks} from './components/Links'


type SectionSetter = React.Dispatch<React.SetStateAction<string>>
const sectionIds = [
    'header',
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
        className={'bg-base-200 h-full flex flex-col justify-center gap-2 md:justify-around'}>
        <div className={'self-start text-center mx-auto'}>
            <HexagonImage imageSource={about} className={'mx-auto'}/>
            <h1 className={'text-2xl font-semibold'}>Bob Liberatore</h1>
            <p className={'italic'}>Developing innovative user experiences.</p>
        </div>
        <ul className={'menu p-4 gap-2 mx-4 w-80 self-start ext-base-content justify-center bg-white/30 rounded-2xl'}>
            <MenuHeader label={'Android'}/>
            <MenuItem label={'Tile Farm'} selectedSection={selectedSection} id={'section-tile-farm'}/>
            <MenuItem label={'Modern Compass'} selectedSection={selectedSection} id={'section-modern-compass'}/>
            <MenuItem label={'Calibre Inhale'} selectedSection={selectedSection} id={'section-calibre-inhale'}/>

            <MenuHeader label={'Web'}/>
            <MenuItem label={'Valid Coffee'} selectedSection={selectedSection} id={'section-valid-coffee'}/>

            <MenuHeader label={'Unreal'}/>
            <MenuItem label={'ShapeArt'} selectedSection={selectedSection} id={'section-shape-art'}/>
        </ul>
        <div className={'self-end mx-auto'}>
            <SocialLinks className={'justify-self-center'}/>
        </div>
    </div>
}

function MenuItem ({label, id, selectedSection}: { selectedSection: string } & IdProps & LabelProps) {
    return <input
        type='radio'
        aria-label={label}
        name='sections'
        value={id}
        checked={selectedSection === id}
        onChange={scrollToSectionChangeHandler}
        className='btn hover:bg-accent/50'/>
}

function MenuHeader ({label}: LabelProps) {
    return <h2 className={'menu-title text-left text-lg sm:text-xl p-0 sm:p-4 drop-shadow-md'}>{label}</h2>
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