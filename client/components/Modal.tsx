import React from 'react'
import { appColors } from '../../styles/variables'
import { classNames } from '../utils/style'
import CloseButton from './CloseButton'
import Container from './Container'

interface ModalProps {
  children: JSX.Element
  datakey: string
  pin?: 'top' | 'right' | 'bottom' | 'left' | 'center'
  height?: string
  width?: string
  open: boolean
  setOpen: () => void
}

const Modal = ({
  children,
  datakey,
  pin = 'left',
  height = '100vh',
  width = '18rem',
  open,
  setOpen,
}: ModalProps): JSX.Element => {
  const horizontalDock = pin == 'left' || pin == 'right'
  const verticalDock = pin == 'top' || pin == 'bottom'
  const unDocked = !horizontalDock && !verticalDock

  const anchor = pin == 'left' || pin == 'top' ? 'start' : 'end'
  const slide = pin == 'left' || pin == 'top' ? -100 : 100

  return (
    <>
      <div
        className={classNames(
          'modal',
          open && 'modal--open',
          horizontalDock && 'modal--horizontal',
          verticalDock && 'modal--vertical',
          unDocked && 'modal--undocked'
        )}
        data-key={datakey}
      >
        <div
          className={classNames(
            'modal-content',
            horizontalDock && 'modal-content__horizontal',
            horizontalDock && open && 'modal-content__horizontal--open',
            verticalDock && 'modal-content__vertical',
            verticalDock && open && 'modal-content__vertical--open',
            unDocked && 'modal-content__undocked',
            unDocked && open && 'modal-content__undocked--open'
          )}
        >
          <Container>
            <>
              <header className="header">
                <CloseButton onClick={setOpen} />
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
            justify-content: ${anchor};
          }

          .modal--vertical {
            align-items: ${anchor};
            justify-content: center;
          }

          .modal--undocked {
            justify-content: center;
            align-items: center;
          }

          .modal-content {
            background-color: white;
            z-index: -2;
            position: relative;
            transition: all 0.4s 0.2s;
            overflow: hidden;
          }

          .modal-content__horizontal {
            width: ${width};
            height: ${height};
            transform: translateX(${slide}%);
          }
          .modal-content__horizontal--open {
            transform: translateX(0);
            z-index: 2;
          }

          .modal-content__vertical {
            width: 88%;
            transform: translateY(${slide}%);
          }
          .modal-content__vertical--open {
            transform: translateY(0);
            z-index: 2;
          }
          .modal-content__undocked {
            max-width: ${width};
            opacity: 0;
            transform: scale(0);
          }
          .modal-content__undocked--open {
            opacity: 1;
            transform: scale(1);
            z-index: 2;
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
