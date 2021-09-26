import React from 'react'
import Modal from '../components/Modal'
import { useNavModal } from '../store/stateHooks'

const NavMobile = (): JSX.Element => {
  const [navModal, setNavModal] = useNavModal()

  return (
    <Modal datakey="navmobile" open={navModal} setOpen={setNavModal} pin="right">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam labore eligendi maiores
        impedit quos tenetur quaerat adipisci quas neque aut, voluptate commodi nobis alias. Est
        praesentium et magni ipsum. Ipsa cupiditate veniam qui, iusto quidem repellendus obcaecati
        magnam. Sint, vel aliquid. Adipisci molestias temporibus iusto animi minus, quos libero vero
        distinctio tempora quibusdam quasi dolorem veritatis eos placeat blanditiis.
      </p>
    </Modal>
  )
}

export default NavMobile
