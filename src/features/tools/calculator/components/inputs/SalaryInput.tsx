import { FieldWrapper } from '@/components/form'
import { CalculatorInputsFormType } from '@/features/tools/calculator/components/CalculatorForm'
import { Box } from '@mui/material'
import { FC } from 'react'
import CurrencyInput from 'react-currency-input-field'
import { FieldError, useFormContext, UseFormSetValue } from 'react-hook-form'

type Props = {
  setValue: UseFormSetValue<CalculatorInputsFormType>
}

export const SalaryInput: FC<Props> = ({ setValue }) => {
  const { formState, register } = useFormContext()

  return (
    <Box mt={2}>
      <FieldWrapper label="Monthly Salary Amount" error={formState.errors['salary'] as FieldError}>
        <CurrencyInput
          id="salary-input"
          style={{
            height: 56,
            background: '#ffffff',
            borderRadius: 8,
            fontSize: 16,
            width: '100%',
            paddingLeft: '12px',
          }}
          placeholder="Please enter monthly salary amount"
          {...register('salary')}
          onValueChange={(value, name) => setValue('salary', Number(value))}
        />
      </FieldWrapper>
    </Box>
  )
}
