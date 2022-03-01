import React, { useState } from 'react'

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal'
} as const

type StatusType = (typeof STATUS)[keyof typeof STATUS]

interface Props {
  page?: string
}

export const Link: React.FC<Props> = ({page, children}) => {
  const [status, setStatus] = useState<StatusType>(STATUS.NORMAL)

  const onMouseEnter = () => setStatus(STATUS.HOVERED)

  const onMouseLeave = () => setStatus(STATUS.NORMAL)

  return (
    <a
      className={status}
      href={page ?? '#'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  )
}