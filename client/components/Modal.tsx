import React from 'react'
import { appColors } from '../../styles/variables'
import { useNavModal } from '../store/stateHooks'
import { classNames } from '../utils/style'
import CloseButton from './CloseButton'
import Container from './Container'

interface ModalProps {
  children: JSX.Element
  datakey: string
  pin?: 'top' | 'right' | 'bottom' | 'left' | 'center'
  height?: string
  width?: string
}

const Modal = ({
  children,
  datakey,
  pin = 'left',
  height = '100vh',
  width = '18rem',
}: ModalProps): JSX.Element => {
  const [navModal, setNavModal] = useNavModal()

  const horizontalDock = pin === 'left' || pin === 'right'
  const verticalDock = pin === 'top' || pin === 'bottom'
  const unDocked = !horizontalDock && !verticalDock

  const horizontalAligment = pin == 'left' ? 'start' : 'end'
  const verticalAligment = pin == 'top' ? 'start' : 'end'

  const hSlide = pin == 'left' ? -100 : 100
  const vSlide = pin == 'top' ? -100 : 100

  return (
    <>
      <div
        className={classNames(
          'modal',
          navModal && 'modal--open',
          horizontalDock && 'modal--horizontal',
          verticalDock && 'modal--vertical',
          unDocked && 'modal--undocked'
        )}
        data-key={datakey}
      >
        <div
          className={classNames(
            'modal__content',
            navModal && 'modal__content--open',
            // verticalDock && verticalAligment && 'modal__content--vertical',
            horizontalDock && 'modal-content__horizontal',
            horizontalDock && navModal && 'modal-content__horizontal--open',
            verticalDock && 'modal-content__vertical',
            verticalDock && navModal && 'modal-content__vertical--open',
            unDocked && 'modal-content__undocked',
            unDocked && navModal && 'modal-content__undocked--open'
          )}
        >
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
            top: 0;
            height: 100vh;
            width: 100vw;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            z-index: -2;
            opacity: 0;
            transition: all 0.4s ease-in-out;
          }

          .modal--open {
            opacity: 1;
            z-index: 2;
          }

          .modal--horizontal {
            justify-content: ${horizontalAligment};
          }

          .modal--vertical {
            align-items: ${verticalAligment};
            justify-content: center;
          }

          .modal--undocked {
            justify-content: center;
            align-items: center;
          }

          .modal__content {
            background-color: white;
            // width: ${width};
            // height: ${height};
            z-index: -2;
            position: relative;
            overflow: hidden;
            // opacity: 0;
            // transform: translateX(${-100}%);
            transition: all 0.5s 0.4s;
          }
          .modal__content--open {
            // opacity: 1;
            z-index: 2;
            // transform: translateX(0%);
          }

          .modal-content__horizontal {
            width: ${width};
            height: ${height};
            overflow: hidden;
            // opacity: 1;
            transform: translateX(${hSlide}%);
            transition: transform 0.4s 0.2s;
          }
          .modal-content__horizontal--open {
            width: ${width};
            height: ${height};
            // opacity: 1;
            transform: translateX(0);
          }

          .modal-content__vertical {
            width: 88%;
            overflow: hidden;
            transform: translateY(${vSlide}%);
            transition: transform 0.4s 0.2s;
          }
          .modal-content__vertical--open {
            overflow: hidden;
            transform: translateY(0);
          }
          .modal-content__undocked {
            max-width: ${width};
            overflow: hidden;
            opacity: 0;
            transform: scale(0);
            transition: all 0.4s 0.2s;
          }
          .modal-content__undocked--open {
            opacity: 1;
            transform: scale(1);
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
