import {ReactNode} from 'react'

export type ChildProps = {
    children: ReactNode
}

export type ImageProps = {
    imageSource: string
    imageAlt?: string
}