import {ChildProps, StyleProps} from '../types/Props'

export function DrawerLayout ({children}: ChildProps) {
    return <div className={'drawer lg:drawer-open'}>
        <input id={'my-drawer'} type={'checkbox'} className={'drawer-toggle'}/>
        {children}
    </div>
}

export function PageContent ({children}: ChildProps) {
    return <div className={'drawer-content'}>{children}</div>
}

export function DrawerContent ({children}: ChildProps) {
    return <div className={'drawer-side z-20'}>
        <label htmlFor={'my-drawer'} aria-label={'close sidebar'} className={'drawer-overlay'}></label>
        {children}
    </div>
}

export function DrawerToggleLink ({children, className}: StyleProps & ChildProps) {
    return <label htmlFor={'my-drawer'} className={className}>{children}</label>
}