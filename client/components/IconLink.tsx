import { media } from '../../styles/variables'
import { classNames } from '../../utils/styles'

export interface IconlinkProps {
  gap?: number
  iconText?: string
  leftIcon?: JSX.Element
  rightIcon?: JSX.Element
  noLeftPadding?: boolean
  noRightPadding?: boolean
  onClick?: () => void
}

const IconLink = ({
  gap = 0.5,
  iconText,
  leftIcon,
  rightIcon,
  noLeftPadding,
  noRightPadding,
  onClick,
}: IconlinkProps): JSX.Element => {
  return (
    <>
      <button
        className={classNames(
          'iconlink',
          noLeftPadding && 'iconlink--no-left-padding',
          noRightPadding && 'iconlink--no-right-padding'
        )}
        onClick={onClick}
      >
        {leftIcon && <span className="iconlink__image iconlink__image--left">{leftIcon}</span>}
        {iconText && <span className="iconlink__text">{iconText}</span>}
        {rightIcon && <span className="iconlink__image iconlink__image--right">{rightIcon}</span>}
      </button>

      <style jsx>{`
        .iconlink {
          display: flex;
          align-items: center;
          font-size: 14px;
          background-color: transparent;
          border: none;
          padding: ${gap / 2}rem ${gap / 2}rem;
          margin: 0 ${gap / 2}rem;
          cursor: pointer;
        }
        .iconlink__image {
          display: flex;
        }
        .iconlink__image--right {
          display: none;
        }
        .iconlink__text {
          display: none;
        }

        @media (${media.xsPlus}) {
          .iconlink {
            padding: ${gap / 2}rem ${gap * 0.625}rem;
            margin: 0 ${gap * 0.625}rem;
          }
        }

        @media (${media.smPlus}) {
          .iconlink {
            padding: ${gap / 2}rem ${gap}rem;
            margin: 0 ${gap}rem;
          }
        }

        @media (${media.mdPlus}) {
          .iconlink {
            padding: ${gap / 2}rem ${gap / 1.5}rem;
            margin: 0 ${gap / 1.5}rem;
            font-size: 12px;
          }
          .iconlink__text {
            display: flex;
            padding-left: 8px;
          }
        }

        @media (${media.lgPlus}) {
          .iconlink {
            font-size: 16px;
          }
        }

        .iconlink--no-left-padding {
          padding-left: 0;
          margin-left: 0;
        }
        .iconlink--no-right-padding {
          padding-right: 0;
          margin-right: 0;
        }
      `}</style>
    </>
  )
}

export default IconLink
