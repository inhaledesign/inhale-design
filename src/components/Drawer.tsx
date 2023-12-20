import {ChildProps, StyleProps} from '../types/Props'

export function DrawerLayout ({children}: ChildProps) {
    return <div className={'drawer lg:drawer-open'}>
        <input id={'my-drawer'} type={'checkbox'} className={'drawer-toggle'}/>
        {children}
    </div>
}
export function DrawerPage({children}: ChildProps) {
    return <div className={'drawer-content'}>{children}</div>
}

export function PageContent({children}: ChildProps) {
    return <div id={'page-content'} className={'bg-cloud snap-y snap-mandatory h-[calc(100dvh-48px)] lg:h-[100dvh] overflow-y-scroll'}>
        {children}
    </div>
}

export function PageActionBar ({children}: ChildProps) {
    return <div className={'lg:hidden z-20 flex w-screen justify-between p-2 drop-shadow-md bg-base-200'}>
        {children}
    </div>
}

export function DrawerContent ({children}: ChildProps) {
    return <div className={'drawer-side h-[100dvh] z-20'}>
        <label htmlFor={'my-drawer'} aria-label={'close sidebar'} className={'drawer-overlay'}/>
        {children}
    </div>
}

export function DrawerToggleLink ({children, className}: StyleProps & ChildProps) {
    return <label htmlFor={'my-drawer'} className={className}>{children}</label>
}