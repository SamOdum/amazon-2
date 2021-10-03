import React, { useState } from 'react'
import { classNames } from '../../utils/styles'
import Modal from '../components/Modal'
import { useNavModal } from '../store/stateHooks'

// interface navChildDataProps {
//   id: string
//   label: string
//   link: string
// }

// interface navDataProps {
//   id: string
//   levels: number
//   label: string
//   link: string
//   children?: navChildDataProps[]
// }

const navData = [
  {
    id: '01',
    levels: 2,
    label: 'layouts',
    link: '/layouts',
    children: [
      {
        id: '010',
        parent: '01',
        label: 'frontpage',
        link: '/frontpage',
        children: [
          {
            id: '0101',
            parent: '010',
            label: 'home v1',
            link: '/home-v1',
          },
          {
            id: '0102',
            parent: '010',
            label: 'home v2',
            link: '/home-v2',
          },
          {
            id: '0103',
            parent: '010',
            label: 'home v3',
            link: '/home-v3',
          },
          {
            id: '0104',
            parent: '010',
            label: 'home v4',
            link: '/home-v4',
          },
        ],
      },
    ],
  },
  {
    id: '02',
    levels: 2,
    label: 'colours',
    link: '/colourss',
    children: [
      {
        id: '020',
        parent: '02',
        label: 'colourpage',
        link: '/colourpage',
        children: [
          {
            id: '0201',
            parent: '020',
            label: 'colour v1',
            link: '/colour-v1',
          },
          {
            id: '0202',
            parent: '020',
            label: 'colour v2',
            link: '/colour-v2',
          },
          {
            id: '0203',
            parent: '020',
            label: 'colour v3',
            link: '/colour-v3',
          },
          {
            id: '0204',
            parent: '020',
            label: 'colour v4',
            link: '/colour-v4',
          },
        ],
      },
      {
        id: '021',
        parent: '02',
        label: 'waterpage',
        link: '/waterpage',
        children: [
          {
            id: '0211',
            parent: '020',
            label: 'water v1',
            link: '/water-v1',
          },
          {
            id: '0212',
            parent: '020',
            label: 'water v2',
            link: '/water-v2',
          },
          {
            id: '0213',
            parent: '020',
            label: 'water v3',
            link: '/water-v3',
          },
          {
            id: '0214',
            parent: '020',
            label: 'water v4',
            link: '/water-v4',
          },
        ],
      },
    ],
  },
]

// const NavMobile1 = (): JSX.Element => {
//   const [navModal, setNavModal] = useNavModal()

//   const [count, setCount] = useState(0)
//   const [reverseCount, setReverseCount] = useState(0)
//   const [state, setState] = useState<{ [key: string]: boolean }>({ l1: true })

//   const handleClose = (): void => {
//     setNavModal()
//     setTimeout(() => {
//       setCount(0)
//       setReverseCount(0)
//       setState({ l1: true })
//     }, 300)
//   }

//   return (
//     <Modal datakey="navmobile" open={navModal} setOpen={handleClose} pin="left">
//       <>
//         <button className="back" onClick={() => setState({ lr: true })}>
//           Back
//         </button>
//         <nav className={classNames('main-nav', state.lr && 'main-nav--reverse')}>
//           <ul className={classNames('nav-level1', state.l1 && 'show-nav', state.lr && 'back')}>
//             <li className="nav-level1__child">
//               <button
//                 onClick={() => {
//                   setState({ l2: true })
//                   setCount(1)
//                 }}
//               >
//                 layout
//               </button>
//             </li>
//             <li className="nav-level1__child">shop</li>
//             <li className="nav-level1__child">blog</li>
//             <li className="nav-level1__child">gallery</li>
//             <li className="nav-level1__child">pages</li>
//             <li className="nav-level1__child">womens</li>
//             <li className="nav-level1__child">mens</li>
//             <li className="nav-level1__child">buy now</li>
//           </ul>
//           <ul className={classNames('nav-level2', state.l2 && 'show-nav')}>
//             <li className="nav-level2__child">
//               <button
//                 onClick={() => {
//                   setState({ l3: true })
//                   setCount(2)
//                 }}
//               >
//                 layout1
//               </button>
//             </li>
//             <li className="nav-level2__child">layout1</li>
//             <li className="nav-level2__child">layout1</li>
//             <li className="nav-level2__child">layout1</li>
//             <li className="nav-level2__child">layout1</li>
//             <li className="nav-level2__child">layout1</li>
//             <li className="nav-level2__child">layout1</li>
//             <li className="nav-level2__child">layout1</li>
//           </ul>
//           <ul className={classNames('nav-level3', state.l3 && 'show-nav')}>
//             <li className="nav-level3__child">
//               <a href="#">Third child</a>
//             </li>
//             <li className="nav-level3__child">layout2</li>
//             <li className="nav-level3__child">layout2</li>
//             <li className="nav-level3__child">layout2</li>
//             <li className="nav-level3__child">layout2</li>
//             <li className="nav-level3__child">layout2</li>
//             <li className="nav-level3__child">layout2</li>
//             <li className="nav-level3__child">layout2</li>
//           </ul>

//           <style jsx>{`
//             ul {
//               list-style: none;
//               transition: transform 0.2s 0.4s;
//               width: 100%;
//             }
//             .main-nav {
//               display: flex;
//               flex-direction: row;
//               justify-content: stretch;
//               width: 300%;
//               transform: translateX(${(100 / -3) * count}%);
//               transition: transform 0.3s;
//             }
//             .nav-level1 {
//               opacity: 0;
//               pointer-events: none;
//               background-color: skyblue;
//             }
//             .nav-level2 {
//               opacity: 0;
//               pointer-events: none;
//               background-color: orange;
//             }
//             .nav-level3 {
//               opacity: 0;
//               pointer-events: none;
//               background-color: green;
//             }
//             .show-nav {
//               opacity: 1;
//               pointer-events: auto;
//               transform: translateX(0);
//             }
//             .main-nav--reverse {
//               opacity: 1;
//               pointer-events: auto;
//               transform: translateX(${(100 / -3) * reverseCount}%);
//               // transform: translateX(0%);
//             }
//             .back {
//               opacity: 1;
//               pointer-events: auto;
//             }
//           `}</style>
//         </nav>
//       </>
//     </Modal>
//   )
// }

// const NavMobileLevel = ({
//   // id,
//   level,
//   levels,
//   label,
//   link,
//   onClick,
// }: {
//   // id: string
//   level?: string
//   levels?: string
//   label?: string
//   link?: string
//   onClick?: () => void
// }): JSX.Element => {
//   return (
//     <li className={`${level}-child`}>
//       <button type="button" className={`${level}-child-btn`} onClick={onClick}>
//         <a href={link ? link : '#'}>{label}</a>
//       </button>
//     </li>
//   )
// }

const NavMobile = (): JSX.Element => {
  const [navModal, setNavModal] = useNavModal()

  const [count, setCount] = useState(0)
  // reverseCount is initially set to zero which excludes it from the main nav nav
  // classlist, which means the base case would have to be set to 1 conditionally
  // include it in the classlist. So this 1 would be prepended to the state and
  // removed in the CSS to balance out.
  const [reverseCount, setReverseCount] = useState(0)
  const [state, setState] = useState<{ [key: string]: boolean | string }>({})
  const [stateB, setStateB] = useState<{ [key: string]: boolean | string }>({})
  const [stateC, setStateC] = useState<{ [key: string]: boolean | string }>({ level1: true })

  const handleClose = (): void => {
    setNavModal()
    setTimeout(() => {
      setCount(0)
      setReverseCount(0)
      setStateB({})
      setStateC({ level1: true })
    }, 300)
  }

  const extractId = (id: string, key: string, count: number): void => {
    setCount(count)
    setReverseCount(0)
    setStateC({ [key]: true })
    setState({ levelId: id })
    console.log(state, stateB, stateC)
  }

  const extractId2 = (id: string, key: string, count: number): void => {
    setCount(count)
    setReverseCount(0)
    setStateC({ [key]: true })
    setStateB({ level2Id: id, [key]: true })
    console.log(state, stateB, stateC)
  }

  const goBack = (): void => {
    if (stateC.level3) {
      setReverseCount(2)
      setStateC({ level2: true })
      console.log(state, stateB, stateC)
    }
    if (stateC.level2) {
      setReverseCount(1)
      setStateC({ level1: true })
      console.log(state, stateB, stateC)
    }
  }

  return (
    <Modal
      datakey="navmobile"
      open={navModal}
      setOpen={handleClose}
      pin="left"
      // backButton={stateC.level2 || stateC.level3}
      setBackButton={goBack}
    >
      <>
        {/* <button className="back" onClick={goBack}>
          Back
        </button> */}
        <nav className={classNames('main-nav', reverseCount && 'main-nav--reverse')}>
          <ul className={classNames('level1', stateC.level1 && 'active-level')}>
            {navData.map((level1) => (
              <li className={`${level1.label}-child`} key={level1.id}>
                <button
                  type="button"
                  className={`${level1.label}-child-btn`}
                  onClick={() => extractId(level1.id, 'level2', 1)}
                >
                  {level1.label}
                </button>
              </li>
            ))}
          </ul>
          <ul className={classNames('level2', stateC.level2 && 'active-level')}>
            {navData
              .filter((level) => level.id === state.levelId)
              .map((level2) => (
                <li className={`category`} key={level2.id}>
                  <a href={level2.link} className={`category-link`}>
                    {level2.label}
                  </a>
                  <button className="back" onClick={goBack}>
                    Back
                  </button>
                </li>
              ))}

            {navData
              .filter((level) => level.id === state.levelId)
              .map((level) =>
                level.children.map((level2) => (
                  <li className={`${level2.label}-child`} key={level2.id}>
                    <button
                      type="button"
                      className={`${level2.label}-child-btn`}
                      onClick={() => extractId2(level2.id, 'level3', 2)}
                    >
                      {level2.label}
                    </button>
                  </li>
                ))
              )}
          </ul>
          <ul className={classNames('level3', stateC.level3 && 'active-level')}>
            {navData
              .filter((level) => level.id === state.levelId)
              .map((level) =>
                level.children
                  .filter((level2) => level2.id === stateB.level2Id)
                  .map((level2) => (
                    <li className={`category`} key={level2.id}>
                      <a href={level2.link} className={`category-link`}>
                        {level2.label}
                      </a>
                      <button className="back" onClick={goBack}>
                        Back
                      </button>
                    </li>
                  ))
              )}

            {navData
              .filter((level) => level.id === state.levelId)
              .map((level) =>
                level.children
                  .filter((level2) => level2.id === stateB.level2Id)
                  .map((level2) =>
                    level2.children.map((level3) => (
                      <li className={`${level3.label}-child`} key={level3.id}>
                        <button type="button" className={`${level3.label}-child-btn`}>
                          <a href={level3.link ? level3.link : '#'}>{level3.label}</a>
                        </button>
                      </li>
                    ))
                  )
              )}
          </ul>
        </nav>

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

          .level1,
          .level2,
          .level3 {
            opacity: 0;
            visibility: none;
            pointer-events: none;
          }

          .active-level {
            opacity: 1;
            visibility: visible;
            transform: translateX(0);
            pointer-events: auto;
          }
          .active-level li,
          .active-level li button {
            cursor: pointer;
          }

          .main-nav--reverse {
            opacity: 1;
            pointer-events: auto;
            // Remove 'padding' 1 to arrive at true reverseCount value. See comment above.
            transform: translateX(${(100 / -3) * (reverseCount - 1)}%);
          }
          .back {
            opacity: 1;
            pointer-events: auto;
            visibility: visible;
          }

          .category {
            display: flex;
            justify-content: space-between;
          }
        `}</style>
      </>
    </Modal>
  )
}

export default NavMobile
