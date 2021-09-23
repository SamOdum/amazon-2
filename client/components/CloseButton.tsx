import React from 'react'
import { X } from 'react-feather'
import IconLink from './IconLink'

const CloseButton = ({ onClick }: { onClick: () => void }): JSX.Element => {
  return (
    <span>
      <IconLink leftIcon={<X />} onClick={onClick} noLeftPadding={true} noRightPadding={true} />
    </span>
  )
}

export default CloseButton
