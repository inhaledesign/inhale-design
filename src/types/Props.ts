import {ReactNode} from 'react'

export type ChildProps = {
    children: ReactNode
}

export type ImageProps = {
    imageSource: string
    imageAlt?: string
}

export type StyleProps = {
    className?: string
}

export type IdProps = {
    id: string
}

export type LabelProps = {
    label: string
}

export type ClickProps = {
    onClick: () => void
}