import {ImageProps} from '../types/Props'
import android from '../images/badges/android.svg'
import kotlin from '../images/badges/kotlin.svg'
import java from '../images/badges/java.svg'
import postgresql from '../images/badges/postgresql.svg'
import sqlite from '../images/badges/sqlite.svg'
import opengl from '../images/badges/opengl.png'
import ue5 from '../images/badges/unreal.svg'
import cpp from '../images/badges/cpp.svg'
import html5 from '../images/badges/html5.svg'
import css3 from '../images/badges/css3.svg'
import typescript from '../images/badges/typescript.svg'
import react from '../images/badges/react.svg'
import next from '../images/badges/next.svg'
import docker from '../images/badges/docker.svg'
import express from '../images/badges/express.svg'
import node from '../images/badges/node.svg'

const badgeSize = 24
const badgeStyle = 'inline my-0'

export function AndroidBadge () {
    return <Badge imageSource={android} imageAlt={'Android badge'}/>
}

export function KotlinBadge () {
    return <Badge imageSource={kotlin} imageAlt={'Kotlin badge'}/>
}

export function JavaBadge () {
    return <Badge imageSource={java} imageAlt={'Java badge'}/>
}

export function PostgresqlBadge () {
    return <Badge imageSource={postgresql} imageAlt={'PostgreSQL badge'}/>
}

export function SQLiteBadge () {
    return <Badge imageSource={sqlite} imageAlt={'SQLite badge'}/>
}

export function OpenGLBadge () {
    return <img className={badgeStyle} src={opengl} alt={'OpenGL badge'}/>
}

export function Unreal5Badge () {
    return <Badge imageSource={ue5} imageAlt={'Unreal5 badge'}/>
}

export function CppBadge () {
    return <Badge imageSource={cpp} imageAlt={'C++ badge'}/>
}

export function Html5Badge () {
    return <Badge imageSource={html5} imageAlt={'HTML5 badge'}/>
}

export function Css3Badge () {
    return <Badge imageSource={css3} imageAlt={'CSS3 badge'}/>
}

export function TypescriptBadge () {
    return <Badge imageSource={typescript} imageAlt={'Typescript badge'}/>
}

export function ReactBadge () {
    return <Badge imageSource={react} imageAlt={'React.js badge'}/>
}

export function NextBadge () {
    return <Badge imageSource={next} imageAlt={'Next.js badge'}/>
}

export function DockerBadge () {
    return <Badge imageSource={docker} imageAlt={'Docker badge'}/>
}

export function ExpressBadge () {
    return <Badge imageSource={express} imageAlt={'Express.js badge'}/>
}

export function NodeBadge () {
    return <Badge imageSource={node} imageAlt={'Node.js badge'}/>
}

function Badge ({imageSource, imageAlt}: ImageProps) {
    return <img className={badgeStyle} src={imageSource} alt={imageAlt} width={badgeSize} height={badgeSize}/>
}