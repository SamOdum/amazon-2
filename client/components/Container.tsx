import React from 'react'
import { media } from '../../styles/variables'

interface Props {
  children: JSX.Element
}

const Container = ({ children }: Props): JSX.Element => {
  return (
    <>
      <div className="container">{children}</div>

      <style jsx>{`
        .container {
          background-color: red;
          width: 90%;
          margin: 0 auto;
        }

        @media (${media.smPlus}) {
          .container {
            width: 88%;
          }
        }

        @media (${media.mdPlus}) {
          .container {
            width: 84%;
          }
        }

        @media (${media.xlPlus}) {
          .container {
            width: 76%;
          }
        }
      `}</style>
    </>
  )
}

export default Container
