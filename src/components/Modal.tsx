import {ChildProps, IdProps} from '../types/Props'

export function Modal ({id, children}: IdProps & ChildProps) {
    return <dialog id={id} className={'modal modal-bottom md:modal-middle'}>
        <div className={'modal-box'}>
            {children}
        </div>
        <form method={'dialog'} className={'modal-backdrop'}>
            <button>close</button>
        </form>
    </dialog>
}

export function showModal(id: string) {
    (document.getElementById(id) as HTMLDialogElement).showModal()
}