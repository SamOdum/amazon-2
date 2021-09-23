import React from 'react'
import { appColors } from '../../styles/variables'
import { useNavModal } from '../store/stateHooks'
import CloseButton from './CloseButton'
import Container from './Container'

export const MobileNav = (): JSX.Element => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam labore eligendi maiores
        impedit quos tenetur quaerat adipisci quas neque aut, voluptate commodi nobis alias. Est
        praesentium et magni ipsum. Ipsa cupiditate veniam qui, iusto quidem repellendus obcaecati
        magnam. Sint, vel aliquid. Adipisci molestias temporibus iusto animi minus, quos libero vero
        distinctio tempora quibusdam quasi dolorem veritatis eos placeat blanditiis.
      </p>
    </>
  )
}

const Modal = ({ children }: { children?: JSX.Element }): JSX.Element => {
  const [navModal, setNavModal] = useNavModal()

  if (!navModal) {
    return <></>
  }

  return (
    <>
      <div className="modal">
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
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            height: 100vh;
            width: 100vw;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            z-index: 1;
          }

          .modal__content {
            background-color: white;
            width: 288px;
            height: 100%;
            // opacity: 1;
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
