import React, {useEffect, useState} from 'react'


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
    threshold: 0.9
}

export function Menu () {
    const [selectedSection, setSelectedSection] = useState('header')

    const scrollEffect = newScrollSectionsEffect(setSelectedSection)
    const handleRadioChange = scrollToSectionOnChangeHandler

    useEffect(scrollEffect, [])

    return <ul className={'menu p-4 gap-2 mx-4 w-80 self-start ext-base-content justify-center bg-white/30 rounded-2xl'}>
        <h2 className={headerStyle}>Android</h2>
        <input
            type='radio'
            aria-label={'Tile Farm'}
            name='sections'
            value={'section-tile-farm'}
            checked={selectedSection === 'section-tile-farm'}
            onChange={handleRadioChange}
            className='btn'/>
        <input
            type='radio'
            aria-label={'Modern Compass'}
            name='sections'
            value={'section-modern-compass'}
            checked={selectedSection === 'section-modern-compass'}
            onChange={handleRadioChange}
            className='btn'/>
        <input
            type='radio'
            aria-label={'Calibre Inhale'}
            name='sections'
            value={'section-calibre-inhale'}
            checked={selectedSection === 'section-calibre-inhale'}
            onChange={handleRadioChange}
            className='btn'/>

        <h2 className={headerStyle}>Web</h2>
        <input
            type='radio'
            aria-label={'Valid Coffee'}
            name='sections'
            value={'section-valid-coffee'}
            checked={selectedSection === 'section-valid-coffee'}
            onChange={handleRadioChange}
            className='btn'/>

        <h2 className={headerStyle}>Unreal</h2>
        <input
            type='radio'
            aria-label={'ShapeArt'}
            name='sections'
            value={'section-shape-art'}
            checked={selectedSection === 'section-shape-art'}
            onChange={handleRadioChange}
            className='btn'/>
    </ul>

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

function scrollToSectionOnChangeHandler (event: React.ChangeEvent<HTMLInputElement>) {
    const targetId = event.target.value
    closeDrawer()
    scrollTo(targetId)
}

function closeDrawer() {
    const myCheckbox = document.getElementById('my-drawer') as HTMLInputElement;
    myCheckbox.checked = false;

}

function scrollTo(targetId: string) {
    document.getElementById('page-content')?.scrollTo({
        top: document.getElementById(targetId)?.offsetTop,
        behavior: 'smooth'
    })
}