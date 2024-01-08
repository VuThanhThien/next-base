import { Box, BoxProps, Collapse, FormControl, FormHelperText, FormLabel, FormLabelProps, styled } from '@mui/material'
import React from 'react'
import { FieldError } from 'react-hook-form'

export type FieldWrapperBoxProps = {
  wrapperBoxProps?: BoxProps
  labelProps?: FormLabelProps
}

type FieldWrapperProps = FieldWrapperBoxProps & {
  children: React.ReactNode
  label?: string
  error?: FieldError
  boxProps?: BoxProps
  required?: boolean
}

const FormLabelSC = styled(FormLabel)(({ theme }) => ({
  marginLeft: '4px',
  fontSize: '14px',
  opacity: 0.5,
}))

const BoxHelperSC = styled(FormLabel)<{ label?: string }>(({ label }) => ({
  display: 'flex',
  justifyContent: label ? 'space-between' : 'right',
  alignItems: 'center',
  marginBottom: '8px',
  height: '20px',
}))

export const FieldWrapper = (props: FieldWrapperProps) => {
  const { label, error, children, boxProps, labelProps, required } = props

  return (
    <Box {...boxProps}>
      <FormControl fullWidth>
        <BoxHelperSC label={label}>
          {label && (
            <Box>
              <FormLabelSC {...labelProps}>{label}</FormLabelSC>
              {required && <span style={{ color: 'red', fontSize: 18, marginLeft: 4 }}>*</span>}
            </Box>
          )}
          <Collapse in={!!error?.message}>
            {error?.message && (
              <FormHelperText sx={{ mt: 0, ml: 0 }} error={!!error?.message} role="alert" aria-label={error.message}>
                {error.message}
              </FormHelperText>
            )}
          </Collapse>
        </BoxHelperSC>
        <Box sx={{ border: '1px solid var(--gray-300, #D0D5DD)', borderRadius: '8px' }}>{children}</Box>
      </FormControl>
    </Box>
  )
}
