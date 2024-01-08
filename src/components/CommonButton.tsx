import styled from '@emotion/styled'
import { Button } from '@mui/material'
import { CSSProperties, FC, MouseEventHandler } from 'react'

type Props = {
  children?: any
  customStyle?: CSSProperties
  type?: 'button' | 'submit' | 'reset'
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const StyledButton = styled(Button)({
  borderRadius: '8px',
})

export const CommonButton: FC<Props> = ({ children, customStyle, type, onClick }) => {
  return (
    <StyledButton variant="outlined" type={type} style={customStyle} onClick={onClick}>
      {children}
    </StyledButton>
  )
}
