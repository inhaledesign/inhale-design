import {ChildProps, IdProps} from '../types/Props'

type CarouselSlideProps = IdProps & ChildProps & {
    nextId: string
    previousId: string
}

export function Carousel ({children} : ChildProps) {
    return <div className='carousel w-full'>
        {children}
    </div>
}

export function CarouselSlide({id, nextId, previousId, children} : CarouselSlideProps) {
    return <div id={id} className={'carousel-item relative w-full'}>
        {children}
        <div className={'absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'}>
            <a href={`#${previousId}`} className={'btn btn-circle bg-primary/25'}>❮</a>
            <a href={`#${nextId}`} className='btn btn-circle bg-primary/25'>❯</a>
        </div>
    </div>
}