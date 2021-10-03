import React from 'react'
import { ArrowLeft } from 'react-feather'
import IconLink from './IconLink'

const BackButton = ({ onClick }: { onClick: () => void }): JSX.Element => {
  return (
    <span>
      <IconLink
        leftIcon={<ArrowLeft />}
        onClick={onClick}
        noLeftPadding={true}
        noRightPadding={true}
      />
    </span>
  )
}

export default BackButton
