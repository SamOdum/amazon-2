import React from 'react'
import Link from 'next/link'
import { CheckSquare, ChevronDown, Gift, Globe, Phone, Truck, User } from 'react-feather'
import { appColors, appTheme, media } from '../../styles/variables'
import Container from '../components/Container'
import { classNames } from '../../utils/styles'
import IconLink, { IconlinkProps } from '../components/IconLink'

const iconSize = 14

const iconLinkPhoneAttributes: IconlinkProps = {
  iconText: '0801 234 5678',
  leftIcon: <Phone size={iconSize} />,
  //   rightIcon: <ChevronDown size={iconSize} />,
  // rightborder: true,
  //   leftborder: true,
}

const iconLinkShippingAttributes: IconlinkProps = {
  iconText: 'Shipping & Returns',
  leftIcon: <Truck size={iconSize} />,
  //   rightIcon: <ChevronDown size={iconSize} />,
  // rightborder: true,
  //   leftborder: true,
}

const iconLinkTermsAttributes: IconlinkProps = {
  iconText: 'Terms',
  leftIcon: <CheckSquare size={iconSize} />,
  //   rightIcon: <ChevronDown size={iconSize} />,
  //   rightborder: true,
  //   leftborder: true,
}

const iconLinkGiftAttributes: IconlinkProps = {
  iconText: 'Gift Cards',
  leftIcon: <Gift size={iconSize} />,
  //   rightIcon: <ChevronDown size={iconSize} />,
  // rightborder: true,
  //   leftborder: true,
}

const iconLinkAccountAttributes: IconlinkProps = {
  iconText: 'Sign In or Registration',
  leftIcon: <User size={iconSize} />,
  //   rightIcon: <ChevronDown size={iconSize} />,
  // rightborder: true,
  //   leftborder: true,
}

const iconLinkLanguageAttributes: IconlinkProps = {
  iconText: 'English',
  leftIcon: <Globe size={iconSize} />,
  rightIcon: <ChevronDown size={iconSize} />,
  //   rightborder: true,
  //   leftborder: true,
}

interface HeaderCol1NavProps {
  gap?: number
  noLeftPadding?: boolean
  noRightPadding?: boolean
  sideBorders?: boolean
  icon1Attributes: IconlinkProps
  icon2Attributes: IconlinkProps
  icon3Attributes: IconlinkProps
}
const HeaderCol1Nav = ({
  gap = 0.5,
  noLeftPadding,
  noRightPadding,
  sideBorders,
  icon1Attributes,
  icon2Attributes,
  icon3Attributes,
}: HeaderCol1NavProps): JSX.Element => {
  return (
    <>
      <ul className="headercol1nav">
        <li
          className={classNames(
            'headercol1nav__child ',
            noLeftPadding && 'headercol1nav__child--no-left-padding '
          )}
        >
          <IconLink {...icon1Attributes} gap={gap} noLeftPadding={noLeftPadding} />
        </li>
        <li
          className={classNames(
            'headercol1nav__child',
            sideBorders && 'headercol1nav__child--side-borders '
          )}
        >
          <IconLink {...icon2Attributes} gap={gap} />
        </li>
        <li
          className={classNames(
            'headercol1nav__child ',
            noRightPadding && 'headercol1nav__child--no-right-padding '
          )}
        >
          <IconLink {...icon3Attributes} gap={gap} noRightPadding={noRightPadding} />
        </li>
      </ul>

      <style jsx>{`
        .headercol1nav {
          background-color: green;
          display: flex;
          list-style-type: none;
        }
        .headercol1nav__child--side-borders {
          border-right: ${appTheme.border};
          border-left: ${appTheme.border};
        }
        .headercol1nav__child--no-left-padding {
          padding-left: 0;
        }
        .headercol1nav__child--no-right-padding {
          padding-right: 0;
        }
      `}</style>
    </>
  )
}

const headerCol1LeftgNavProps: HeaderCol1NavProps = {
  noLeftPadding: true,
  sideBorders: true,
  icon1Attributes: iconLinkPhoneAttributes,
  icon2Attributes: iconLinkShippingAttributes,
  icon3Attributes: iconLinkTermsAttributes,
}

const headerCol1RightNavProps: HeaderCol1NavProps = {
  noRightPadding: true,
  sideBorders: true,
  icon1Attributes: iconLinkGiftAttributes,
  icon2Attributes: iconLinkAccountAttributes,
  icon3Attributes: iconLinkLanguageAttributes,
}

const HeaderOld = (): JSX.Element => {
  return (
    <>
      <header className="header">
        <Container>
          <div className="header__col1">
            <div className="headercol1__left">
              <HeaderCol1Nav {...headerCol1LeftgNavProps} />
            </div>
            <Link href="/">
              <a className="headercol1__logo">LOGO HERE</a>
            </Link>
            <div className="headercol1__right">
              <HeaderCol1Nav {...headerCol1RightNavProps} />
            </div>
          </div>
        </Container>
        <div className="header__col2">col 2</div>
      </header>

      <style jsx>{`
        .header {
          width: 100%;
          background-color: ${appColors.darkSeagreen};
        }

        .header__col1 {
          border-bottom: ${appTheme.border};
          display: flex;
          justify-content: space-between;
          padding: 0.25rem 0;
        }

        .headercol1__right,
        .headercol1__left {
          background-color: green;
          display: flex;
          list-style-type: none;
          max-width: 40%;
        }

        .headercol1__logo {
          font-size: 12px;
          font-weight: bold;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        .header__col2 {
          background-color: ${appColors.lightGreen};
        }

        @media (${media.mdPlus}) {
          .headercol1__right,
          .headercol1__left {
            max-width: 42%;
          }
        }
      `}</style>
    </>
  )
}

export default HeaderOld
