import styled from '@emotion/styled'
import { Box, FormHelperText, IconButton, InputAdornment, TextField } from '@mui/material'
import Image, { StaticImageData } from 'next/image'
import { ChangeEvent, FC } from 'react'

type Props = {
  register?: any
  placeholder: string
  type?: string
  icon?: StaticImageData
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  error?: string
}

const StyledTextField = styled(TextField)({
  '& input': {
    fontWeight: 400,
    '&::placeholder': {
      color: 'light gray',
      opacity: 0.36,
    },
  },
})

export const TextFieldForm: FC<Props> = ({ register, placeholder, type, icon, onChange, error }) => {
  return (
    <Box component="div">
      <StyledTextField
        {...register}
        placeholder={placeholder}
        onChange={onChange}
        sx={{
          border: '1px solid #F6F6F6',
          borderRadius: '8px',
          boxShadow: '1px 15px 23px 0px rgba(229, 229, 229, 0.25)',
        }}
        InputProps={
          icon && {
            startAdornment: (
              <InputAdornment position="start">
                <IconButton disabled={true}>
                  <Image src={icon} alt="text_field_cion" />
                </IconButton>
              </InputAdornment>
            ),
          }
        }
        type={type}
      />
      <FormHelperText sx={{ color: 'red', paddingLeft: '1%', fontSize: '16px' }}>{error}</FormHelperText>
    </Box>
  )
}
