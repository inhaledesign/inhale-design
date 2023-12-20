import {ClickProps, ImageProps, StyleProps} from '../types/Props'
import React from 'react'


const linkImageSize = 32

export function EmailImage () {
    return <svg
        role={'img'} width={linkImageSize} height={linkImageSize} viewBox={'0 -960 960 960'}>
        <title>E-mail Icon</title>
        <path
            d={'M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z'}/>
    </svg>
}

export function LinkedInImage () {
    return <svg
        role={'img'} width={linkImageSize} height={linkImageSize} viewBox={'0 0 16 16'}>
        <title>LinkedIn Logo</title>
        <path
            d={'M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z'}/>
    </svg>
}

export function GithubImage () {
    return <svg
        role={'img'} width={linkImageSize} height={linkImageSize} viewBox={'0 0 24 24'}>
        <title>GitHub Logo</title>
        <path
            d={'M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z'}/>
    </svg>
}

export function StackOverflowImage () {
    return <svg
        role={'img'} width={linkImageSize} height={linkImageSize} viewBox={'0 0 24 24'}>
        <title>Stack Overflow Logo</title>
        <path
            d={'M17.36,20.2V14.82h1.79V22H3V14.82H4.8V20.2H17.36M6.77,14.32l.37-1.76,8.79,1.85-.37,1.76L6.77,14.32m1.16-4.21L8.69,8.5l8.14,3.78-.76,1.62L7.93,10.11m2.26-4,1.15-1.38,6.9,5.76-1.15,1.37-6.9-5.75m4.45-4.25L20,9.08l-1.44,1.07L13.2,2.94l1.44-1.07m-8,16.54v-1.8h9v1.8Z'}/>
    </svg>
}

// This needs to be added at the top of the page.
// It's added separately so that it does not get affected by CSS of HexagonImage.
export function HexagonClip () {
    return <svg aria-hidden={true} width={0} height={0}>
        <defs>
            <clipPath id={'clip-hexagon'}>
                <polygon
                    id={'hexagon'}
                    points={'117.6935750346352,95 64,126 10.306424965364812,95.00000000000003 10.30642496536479,33.000000000000014 63.999999999999986,2 117.69357503463522,33.00000000000002'}/>
            </clipPath>
        </defs>
    </svg>
}

export function HexagonImage ({imageSource, className}: ImageProps & StyleProps) {
    return <svg className={`block flex-shrink-0 ${className}`} aria-hidden={true} width={128} height={128}>
        <image href={imageSource} clipPath={'url(#clip-hexagon)'} width={128} height={128}/>
        <use href={'#hexagon'} className={'stroke-accent'} strokeWidth={2} fill={'transparent'}/>
    </svg>
}

export function HamburgerImage ({className}: StyleProps) {
    return <svg width={linkImageSize} height={linkImageSize} viewBox={'0 0 512 512'} className={className}>
        <path d={'M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z'}/>
    </svg>
}

export function GalleryImage () {
    return <svg height={linkImageSize} viewBox={'0 -960 960 960'} width={linkImageSize}>
        <path
            d={'M360-400h400L622-580l-92 120-62-80-108 140Zm-40 160q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z'}/>
    </svg>
}

export function GooglePlayImage () {
    return <svg width={linkImageSize} height={linkImageSize} viewBox={'0 0 32 32'} fill={'none'}>
        <mask
            id={'mask0_87_8320'} style={{maskType: 'alpha'}} maskUnits='userSpaceOnUse' x='7' y='3' width='24'
            height='26'>
            <path
                d={'M30.0484 14.4004C31.3172 15.0986 31.3172 16.9014 30.0484 17.5996L9.75627 28.7659C8.52052 29.4459 7 28.5634 7 27.1663L7 4.83374C7 3.43657 8.52052 2.55415 9.75627 3.23415L30.0484 14.4004Z'}
                fill='#C4C4C4'/>
        </mask>
        <g mask={'url(#mask0_87_8320)'}>
            <path
                d={'M7.63473 28.5466L20.2923 15.8179L7.84319 3.29883C7.34653 3.61721 7 4.1669 7 4.8339V27.1664C7 27.7355 7.25223 28.2191 7.63473 28.5466Z'}
                fill={'url(#paint0_linear_87_8320)'}/>
            <path
                d={'M30.048 14.4003C31.3169 15.0985 31.3169 16.9012 30.048 17.5994L24.9287 20.4165L20.292 15.8175L24.6923 11.4531L30.048 14.4003Z'}
                fill={'url(#paint1_linear_87_8320)'}/>
            <path
                d={'M24.9292 20.4168L20.2924 15.8179L7.63477 28.5466C8.19139 29.0232 9.02389 29.1691 9.75635 28.766L24.9292 20.4168Z'}
                fill={'url(#paint2_linear_87_8320)'}/>
            <path
                d={'M7.84277 3.29865L20.2919 15.8177L24.6922 11.4533L9.75583 3.23415C9.11003 2.87878 8.38646 2.95013 7.84277 3.29865Z'}
                fill={'url(#paint3_linear_87_8320)'}/>
        </g>
        <defs>
            <linearGradient
                id={'paint0_linear_87_8320'} x1={'15.6769'} y1={'10.874'} x2={'7.07106'} y2={'19.5506'}
                gradientUnits={'userSpaceOnUse'}>
                <stop stopColor={'#00C3FF'}/>
                <stop offset={'1'} stopColor={'#1BE2FA'}/>
            </linearGradient>
            <linearGradient
                id={'paint1_linear_87_8320'} x1={'20.292'} y1={'15.8176'} x2={'31.7381'} y2={'15.8176'}
                gradientUnits={'userSpaceOnUse'}>
                <stop stopColor='{#FFCE00}'/>
                <stop offset={'1'} stopColor={'#FFEA00'}/>
            </linearGradient>
            <linearGradient
                id={'paint2_linear_87_8320'} x1={'7.36932'} y1={'30.1004'} x2={'22.595'} y2={'17.8937'}
                gradientUnits={'userSpaceOnUse'}>
                <stop stopColor={'#DE2453'}/>
                <stop offset={'1'} stopColor={'#FE3944'}/>
            </linearGradient>
            <linearGradient
                id={'paint3_linear_87_8320'} x1={'8.10725'} y1={'1.90137'} x2={'22.5971'} y2={'13.7365'}
                gradientUnits={'userSpaceOnUse'}>
                <stop stopColor={'#11D574'}/>
                <stop offset={'1'} stopColor={'#01F176'}/>
            </linearGradient>
        </defs>
    </svg>
}

export function LinkImage () {
    return <svg height={linkImageSize} viewBox='0 -960 960 960' width={linkImageSize}>
        <path
            d={'M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z'}/>
    </svg>
}

export function CloseImage ({className, onClick} : StyleProps & ClickProps) {
    return <svg height={linkImageSize} viewBox={'0 -960 960 960'} width={linkImageSize} className={className} onClick={onClick}>
        <path d={'m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z'}/>
    </svg>
}