import React from 'react'
import { appColors } from '../../styles/variables'
import { useNavModal } from '../store/stateHooks'
import { classNames } from '../utils/style'
import CloseButton from './CloseButton'
import Container from './Container'

interface ModalProps {
  alignment?: 'left' | 'right'
  children: JSX.Element
  key: string
}

const Modal = ({ alignment = 'right', children, key }: ModalProps): JSX.Element => {
  const [navModal, setNavModal] = useNavModal()

  const horizontAl = alignment == 'left' ? 'start' : 'end'
  const hEntrance = alignment == 'left' ? -100 : 100

  return (
    <>
      <div className={classNames('modal', navModal && 'modal modal--open')} data-key={key}>
        <div className="modal__content">
          <Container>
            <>
              <header className="header">
                <CloseButton onClick={setNavModal} />
              </header>
              {children}
            </>
          </Container>
        </div>
      </div>
      <style jsx>
        {`
          .modal {
            position: fixed;
            margin-top: -50px; // Must agree with height of nav
            height: 100vh;
            width: 100vw;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: ${horizontAl};
            z-index: 1;
            opacity: 0.5;
            transform: translateX(${hEntrance}%);
            transition: all 0.4s;
          }

          .modal--open {
            transform: translateX(0%);
            opacity: 1;
          }

          .modal__content {
            background-color: white;
            width: 288px;
            height: 100%;
            z-index: 2;
            position: relative;
          }

          .header {
            background-color: ${appColors.darkSeagreen};
            height: 50px;
            display: flex;
            align-items: center;
          }
        `}
      </style>
    </>
  )
}

export default Modal
