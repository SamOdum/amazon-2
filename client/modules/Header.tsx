import React from 'react'
import Link from 'next/link'
import { Heart, Menu, Settings, ShoppingCart, User } from 'react-feather'
import { appColors, appTheme, media } from '../../styles/variables'
import Container from '../components/Container'
import IconLink from '../components/IconLink'
import { useNavModal } from '../store/stateHooks'
import NavMobile from './NavMobile'

const HeaderCol1 = (): JSX.Element => {
  const [, setNavModal] = useNavModal()
  return (
    <div className="header-col1">
      <span className="menu-toggle">
        <IconLink
          leftIcon={<Menu />}
          noLeftPadding={true}
          noRightPadding={true}
          onClick={setNavModal}
        />
      </span>
      <span className="logo">
        <Link href="/">GADABUY</Link>
      </span>

      <style jsx>{`
        .header-col1 {
          display: flex;
          align-items: center;
        }

        .logo {
          margin-left: 1.125rem;
          font-weight: ${appTheme.fontWeightBold};
        }

        @media (${media.smPlus}) {
          .logo {
            margin-left: 1.5rem;
          }
        }
      `}</style>
    </div>
  )
}

const HeaderCol2 = (): JSX.Element => {
  const iconSize = 20
  const clickAlert = (): void => alert('You clicked')

  return (
    <div className="header__col2">
      <span className="header-col2__person">
        <IconLink leftIcon={<User size={iconSize} />} onClick={clickAlert} />
      </span>
      <span className="header-col2__cart">
        <IconLink leftIcon={<ShoppingCart size={iconSize} />} onClick={clickAlert} />
      </span>
      <span className="header-col2__heart">
        <IconLink leftIcon={<Heart size={iconSize} />} onClick={clickAlert} />
      </span>
      <span className="header-col2__cog">
        <IconLink
          leftIcon={<Settings size={iconSize} />}
          noRightPadding={true}
          onClick={clickAlert}
        />
      </span>

      <style jsx>{`
        .header__col2 {
          display: flex;
          align-items: center;
          justify-content: end;
        }
      `}</style>
    </div>
  )
}

const Header = (): JSX.Element => {
  return (
    <>
      <Container>
        <div className="header">
          <HeaderCol1 />
          <HeaderCol2 />
        </div>
      </Container>
      <NavMobile />

      <style jsx>{`
        .header {
          background-color: ${appColors.darkSeagreen};
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }
      `}</style>
    </>
  )
}

export default Header
