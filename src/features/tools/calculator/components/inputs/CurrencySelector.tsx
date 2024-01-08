import { SelectField } from '@/components/form'
import { Box } from '@mui/material'
import { FC } from 'react'
import { FieldError, useFormContext } from 'react-hook-form'

type Props = {}

const currencies = [
  {
    label: 'USD',
    value: 'USD',
  },
  {
    label: 'VND',
    value: 'VND',
  },
  {
    label: 'EUR',
    value: 'EUR',
  },
  {
    label: 'SGD',
    value: 'SGD',
  },
]

export const CurrencySelector: FC<Props> = () => {
  const { formState } = useFormContext()

  return (
    <Box marginTop={2} width="100%">
      <SelectField
        label="Currency"
        placeholder="Select currency"
        options={currencies}
        name="currency"
        error={formState.errors['currency'] as FieldError}
      />
    </Box>
  )
}
