import { Button } from '@mantine/core'
import React, { MouseEventHandler, ReactChild } from 'react'

interface ButtonProps {
  children?: ReactChild
  onClick?: MouseEventHandler
  shadow?: boolean
  color?: string
  textColor: string
  green?: boolean
  red?: boolean
  loading?: boolean
  rightIcon?: any
}

const Btn = ({
  children,
  rightIcon,
  onClick,
  loading = false,
  shadow = false,
  green = false,
  red = false,
  color = ' bg-gradient-to-br from-secondary to-orange-500 hover:bg-gradient-to-r hover:from-secondary hover:to-orange-500',
  textColor
}: ButtonProps) => {

  let currentcolor = color

  if (green) {
    currentcolor = ' bg-gradient-to-br from-emerald-800 to-primary hover:bg-gradient-to-r hover:from-primay hover:to-emerald-700'
  }
  if (red) {
    currentcolor = ' bg-gradient-to-br from-red-500 to-red-700 hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700'
  }


  return (
    <Button
      loading={loading}
      onClick={onClick}
      rightIcon={rightIcon}
      // leftIcon={leftIcon}
      className={`hover:scale-105 hover:bg-secondaryDark w-full h-10 flex ${shadow && 'shadow-heavy'} text-white justify-center items-center rounded-full font-bold cursor-pointer transition-all duration-200 ${currentcolor} ${textColor} bg-${color} flex justify-center`}>
      {children}
    </Button>
  )
}

export default Btn