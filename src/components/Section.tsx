import {ChildProps, IdProps, StyleProps} from '../types/Props'

export function Section ({children, id, className}: ChildProps & IdProps & StyleProps) {
    return <section id={id} className={`hero relative snap-start z-10 h-full bg-transparent ${className}`}>
        <div className={'hero-content flex flex-col gap-0 items-center drop-shadow-lg'}>
            {children}
        </div>
    </section>
}

export function SectionName ({children}: ChildProps) {
    return <h1 className={'mb-2 text-primary-content text-4xl font-semibold tracking-widest'}>{children}</h1>
}

export function SectionBadges ({children}: ChildProps) {
    return <div className={'flex gap-2 justify-center'}>{children}</div>
}

export function SectionProse ({children}: ChildProps) {
    return <div className={'prose my-4 text-md md:text-xl font-medium text-primary-content prose-strong:text-accent'}>{children}</div>
}