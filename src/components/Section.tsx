import {ChildProps} from '../types/Props'

export function Section ({children}: ChildProps) {
    return <section className='hero relative snap-start z-10 min-h-screen bg-transparent shadow-lg shadow-sky-800/20'>
        <div
            className={'container mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] md:grid-rows-[128px_auto] gap-4 p-4 drop-shadow-lg'}>
            {children}
        </div>
    </section>
}

export function SectionHeader ({children}: ChildProps) {
    return <div className={'flex flex-col self-baseline md:flex-row'}>{children}</div>
}

export function SectionTitle ({children}: ChildProps) {
    return <div className={'prose prose-headings:text-primary-content self-center'}>{children}</div>
}

export function SectionName ({children}: ChildProps) {
    return <h1 className={'text-center md:text-left mb-0'}>{children}</h1>
}

export function SectionBadges ({children}: ChildProps) {
    return <div className={'flex gap-2 justify-center md:justify-start'}>{children}</div>
}

export function SectionProse ({children}: ChildProps) {
    return <div className={'mx-2 prose text-xl font-medium md:text-left text-primary-content prose-strong:text-accent md:row-start-2'}>{children}</div>
}