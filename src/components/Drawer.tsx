import {ChildProps, StyleProps} from '../types/Props'

export function DrawerLayout ({children}: ChildProps) {
    return <div className={'drawer lg:drawer-open'}>
        <input id={'my-drawer'} type={'checkbox'} className={'drawer-toggle'}/>
        {children}
    </div>
}

export function PageContent({children}: ChildProps) {
    return <div id={'page-content'} className={'drawer-content bg-cloud snap-y snap-mandatory h-screen overflow-y-scroll'}>
        {children}
    </div>
}

export function PageActionBar ({children}: ChildProps) {
    return <div className={'lg:hidden top-0 z-20 flex sticky justify-between p-2 drop-shadow-md bg-base-200'}>
        {children}
    </div>
}

export function DrawerContent ({children}: ChildProps) {
    return <div className={'drawer-side z-20'}>
        <label htmlFor={'my-drawer'} aria-label={'close sidebar'} className={'drawer-overlay'}/>
        {children}
    </div>
}

export function DrawerToggleLink ({children, className}: StyleProps & ChildProps) {
    return <label htmlFor={'my-drawer'} className={className}>{children}</label>
}