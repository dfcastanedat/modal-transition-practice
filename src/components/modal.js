import reactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import './modal.css'

export default function Modal({ showModal, setShowModal, text }) {
    return (
        reactDOM.createPortal(
            <CSSTransition in={showModal} unmountOnExit classNames={"modal"} timeout={500}>
                <div className="modal__background">
                    <div className="modal__content">
                        <button onClick={() => setShowModal(prevState => !prevState)}>Close Modal</button>
                        {text}
                    </div>
                </div>
            </CSSTransition>,
            document.getElementById('modal')
        )
    )
}

