import {ImageProps} from '../types/Props'
import android from '../images/badges/android.svg'
import kotlin from '../images/badges/kotlin.svg'
import java from '../images/badges/java.svg'
import postgresql from '../images/badges/postgresql.svg'
import sqlite from '../images/badges/sqlite.svg'
import opengl from '../images/badges/opengl.png'
import ue5 from '../images/badges/unreal.svg'
import cpp from '../images/badges/cpp.svg'

const badgeHeight = 24
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
    return <img className={badgeStyle} src={opengl} alt={'OpenGL Badge'}/>
}

export function Unreal5Badge () {
    return <Badge imageSource={ue5} imageAlt={'Unreal5 Badge'}/>
}

export function  CppBadge () {
    return <Badge imageSource={cpp} imageAlt={'C++ Badge'}/>
}

function Badge ({imageSource, imageAlt}: ImageProps) {
    return <img className={badgeStyle} src={imageSource} alt={imageAlt} width={badgeHeight} height={badgeHeight}/>
}