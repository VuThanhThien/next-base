import { ControllerFieldForm, FieldWrapper } from '@/components/form'
import { Box, MenuItem, Select, SelectProps, Typography, useTheme } from '@mui/material'
import { useCallback, useMemo } from 'react'
import { Controller, ControllerRenderProps, FieldValues, useFormContext } from 'react-hook-form'

export type SelectOption = {
  label?: string
  groupLabel?: {
    firstLabel: string
    secondLabel: string | number
  }
  value: string
}

type SelectFieldProps = ControllerFieldForm<SelectProps> & {
  options: SelectOption[]
  isFilter?: boolean
}

const ControllerStyle = {
  border: '1px solid var(--gray-300, #D0D5DD)',
  borderRadius: '8px',
  boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
}

export const SelectField = (props: SelectFieldProps) => {
  const {
    options = [],
    error,
    name,
    label,
    defaultValue,
    placeholder,
    wrapperBoxProps,
    labelProps,
    isFilter,
    ...selectProps
  } = props

  const theme = useTheme()

  const { control, register } = useFormContext()

  const optionsCompose = useMemo(() => {
    if (!isFilter) return options

    return [{ label: 'selectAll', value: 'SelectAll' }, ...options]
  }, [isFilter, options])

  const renderField = useCallback(
    ({ field }: { field: ControllerRenderProps<FieldValues, string> }) => {
      return (
        <Select
          fullWidth
          displayEmpty // Display placeholder on un-focus
          error={!!error}
          {...selectProps}
          {...field}
          {...register(name)}>
          {!!placeholder && (
            <MenuItem style={{ height: 32 }} disabled value="">
              <Box color={theme.palette.text.primary}>{placeholder}</Box>
            </MenuItem>
          )}
          {optionsCompose.map(({ label, value, groupLabel }: SelectOption) => (
            <MenuItem key={`${value}-${label ?? groupLabel}`} value={value}>
              {!!groupLabel && (
                <Box display="flex" justifyContent="space-between">
                  <Typography>{groupLabel?.firstLabel}</Typography>
                  <Typography sx={{ color: error ? 'error.main' : 'common.black' }}>
                    {groupLabel?.secondLabel}
                  </Typography>
                </Box>
              )}
              {label}
            </MenuItem>
          ))}
        </Select>
      )
    },
    [error, optionsCompose],
  )

  return (
    <FieldWrapper error={error} label={label} boxProps={wrapperBoxProps} labelProps={labelProps}>
      <Controller name={name} control={control} defaultValue="" render={renderField} />
    </FieldWrapper>
  )
}
