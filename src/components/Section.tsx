import {ChildProps} from '../types/Props'

export function Section ({children}: ChildProps) {
    return <section className='relative z-10 bg-transparent rounded-sm shadow-lg'>
        <div
            className='container mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] md:grid-rows-[128px_auto] gap-4 py-4 drop-shadow-md'>
            {children}
        </div>
    </section>
}