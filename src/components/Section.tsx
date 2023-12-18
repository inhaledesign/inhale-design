import {ChildProps, IdProps, StyleProps} from '../types/Props'

export function Section ({children, id, className}: ChildProps & IdProps & StyleProps) {
    return <section id={id} className={`hero relative snap-start z-10 h-screen bg-transparent shadow-lg shadow-sky-800/20 ${className}`}>
        <div
            className={'flex flex-col items-center container mx-auto p-4 drop-shadow-lg'}>
            {children}
        </div>
    </section>
}

export function SectionName ({children}: ChildProps) {
    return <h1 className={'mb-2 text-primary-content text-4xl font-semibold'}>{children}</h1>
}

export function SectionBadges ({children}: ChildProps) {
    return <div className={'flex gap-2 justify-center'}>{children}</div>
}

export function SectionProse ({children}: ChildProps) {
    return <div className={'prose mt-4 text-xl font-medium text-primary-content prose-strong:text-accent'}>{children}</div>
}