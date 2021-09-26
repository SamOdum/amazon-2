import React, { useState } from 'react'
import { classNames } from '../../utils/styles'
import Modal from '../components/Modal'
import { useNavModal } from '../store/stateHooks'

const NavMobile = (): JSX.Element => {
  const [navModal, setNavModal] = useNavModal()

  const initialLevels = { l1: true, l2: false, l3: false, l4: false }
  const [count, setCount] = useState(0)
  const [state, setState] = useState(initialLevels)

  const handleClose = (): void => {
    setNavModal()
    setTimeout(() => {
      setCount(0)
      setState({ ...state, l1: true })
    }, 300)
  }

  return (
    <Modal datakey="navmobile" open={navModal} setOpen={handleClose} pin="left">
      <nav className="main-nav">
        <ul className={classNames('nav-level1', state && 'show-nav')}>
          <li className="nav-level1__child">
            <button
              onClick={() => {
                setState({ ...state, l2: true })
                setCount(1)
              }}
            >
              layout
            </button>
          </li>
          <li className="nav-level1__child">shop</li>
          <li className="nav-level1__child">blog</li>
          <li className="nav-level1__child">gallery</li>
          <li className="nav-level1__child">pages</li>
          <li className="nav-level1__child">womens</li>
          <li className="nav-level1__child">mens</li>
          <li className="nav-level1__child">buy now</li>
        </ul>
        <ul className={classNames('nav-level2', state.l2 && 'show-nav')}>
          <li className="nav-level2__child">
            <button
              onClick={() => {
                setState({ ...state, l3: true })
                setCount(2)
              }}
            >
              layout1
            </button>
          </li>
          <li className="nav-level2__child">layout1</li>
          <li className="nav-level2__child">layout1</li>
          <li className="nav-level2__child">layout1</li>
          <li className="nav-level2__child">layout1</li>
          <li className="nav-level2__child">layout1</li>
          <li className="nav-level2__child">layout1</li>
          <li className="nav-level2__child">layout1</li>
        </ul>
        <ul className={classNames('nav-level3', state.l3 && 'show-nav')}>
          <li className="nav-level3__child">
            <a href="#">Third child</a>
          </li>
          <li className="nav-level3__child">layout2</li>
          <li className="nav-level3__child">layout2</li>
          <li className="nav-level3__child">layout2</li>
          <li className="nav-level3__child">layout2</li>
          <li className="nav-level3__child">layout2</li>
          <li className="nav-level3__child">layout2</li>
          <li className="nav-level3__child">layout2</li>
        </ul>

        <style jsx>{`
          ul {
            list-style: none;
            transition: transform 0.2s 0.4s;
            width: 100%;
          }
          .main-nav {
            display: flex;
            flex-direction: row;
            justify-content: stretch;
            width: 300%;
            transform: translateX(${(100 / -3) * count}%);
            transition: transform 0.3s;
          }
          .nav-level1 {
            opacity: 0;
            pointer-events: none;
          }
          .nav-level2 {
            opacity: 0;
            pointer-events: none;
          }
          .nav-level3 {
            opacity: 0;
            pointer-events: none;
          }
          .show-nav {
            opacity: 1;
            pointer-events: auto;
            transform: translateX(0);
          }
        `}</style>
      </nav>
    </Modal>
  )
}

export default NavMobile
