import {StyleProps} from '../types/Props'

export function Divider({className} : StyleProps) {
    return <div className={`h-4 bg-white/50 ${className}`}/>
}