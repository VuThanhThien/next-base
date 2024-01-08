import { SelectField } from '@/components/form'
import { Box } from '@mui/material'
import { FC } from 'react'
import { FieldError, useFormContext } from 'react-hook-form'

type Props = {}

export enum ConvertTypesEnum {
  gtn = 'gtn',
  ntg = 'ntg',
}

const convertTypes = [
  { label: 'Gross to Net', value: ConvertTypesEnum.gtn },
  { label: 'Net to Gross', value: ConvertTypesEnum.ntg },
]

export const ConvertTypeSelector: FC<Props> = () => {
  const { formState } = useFormContext()
  return (
    <Box marginTop={4} marginBottom={2}>
      <SelectField
        label="Convert from"
        placeholder="Convert from"
        options={convertTypes}
        name="convertType"
        error={formState.errors['convertType'] as FieldError}
      />
    </Box>
  )
}
