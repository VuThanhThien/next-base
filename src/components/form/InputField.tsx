import { TextField, TextFieldProps } from '@mui/material'
import { FieldWrapper, FieldWrapperBoxProps } from './FieldWrapper'
import { FieldForm } from './Form'

type InputFieldProps = FieldForm<TextFieldProps> & FieldWrapperBoxProps

export const InputField = (props: InputFieldProps) => {
  const { label, registration, error, wrapperBoxProps, labelProps, required, ...inputProps } = props

  return (
    <FieldWrapper label={label} error={error} boxProps={wrapperBoxProps} labelProps={labelProps} required={required}>
      <TextField fullWidth error={!!error} {...inputProps} {...registration} />
    </FieldWrapper>
  )
}
