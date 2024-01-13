import {StyleProps} from '../types/Props'
import {EmailImage, GithubImage, HamburgerImage, LinkedInImage, StackOverflowImage} from './Images'
import React from 'react'
import {DrawerToggleLink} from './Drawer'


const linkStyle = 'fill-secondary hover:fill-accent'


export function SocialLinks ({className}: StyleProps) {
    return <nav className={`flex gap-2 justify-center ${className}`}>
        <a href={'mailto:bob@inhale.design'} className={linkStyle}>
            <EmailImage/>
        </a>
        <a href={'https://www.linkedin.com/in/inhale-design/'} className={linkStyle}>
            <LinkedInImage/>
        </a>
        <a href={'https://github.com/inhaledesign'} className={linkStyle}>
            <GithubImage/>
        </a>
        <a href={'https://stackoverflow.com/users/1748584/bob-liberatore'} className={linkStyle}>
            <StackOverflowImage/>
        </a>
    </nav>
}

export function DrawerLink () {
    return <DrawerToggleLink className={linkStyle}>
        <HamburgerImage className={'cursor-pointer'}/>
    </DrawerToggleLink>
}