import {ImageProps, StyleProps} from '../types/Props'


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

export function HexagonImageMask ({imageSource}: ImageProps) {
    return <svg className={'block mx-auto md:mx-0 flex-shrink-0'} aria-hidden={true} width={128} height={128}>
        <defs>
            <clipPath id={'clip'}>
                <polygon
                    id={'hexagon'}
                    points={'117.6935750346352,95 64,126 10.306424965364812,95.00000000000003 10.30642496536479,33.000000000000014 63.999999999999986,2 117.69357503463522,33.00000000000002'}/>
            </clipPath>
        </defs>
        <image href={imageSource} clipPath={'url(#clip)'} width={128} height={128}/>
        <use href={'#hexagon'} className={'stroke-accent'} strokeWidth={2} fill={'transparent'}/>
    </svg>
}

export function HamburgerImage ({className} : StyleProps) {
    return <svg xmlns={'http://www.w3.org/2000/svg'} width={'32'} height={'32'} viewBox={'0 0 512 512'} className={className}>
        <path d={'M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z'}/>
    </svg>
}