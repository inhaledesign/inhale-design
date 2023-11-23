import {ImageProps} from '../types/Props'
import android from '../images/badges/android.svg'
import kotlin from '../images/badges/kotlin.svg'
import java from '../images/badges/java.svg'
import postgresql from '../images/badges/postgresql.svg'
import sqlite from '../images/badges/sqlite.svg'

const badgeHeight = 24

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

function Badge ({imageSource, imageAlt}: ImageProps) {
    return <img className={'inline my-0'} src={imageSource} alt={imageAlt} width={badgeHeight} height={badgeHeight}/>
}