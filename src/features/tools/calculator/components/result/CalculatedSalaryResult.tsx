import { linearGradientColor, theme } from '@/config/theme'
import { CalculatorInputsFormType } from '@/features/tools/calculator/components/CalculatorForm'
import { Currencies } from '@/features/tools/calculator/components/CalculatorResult'
import { ConvertTypesEnum } from '@/features/tools/calculator/components/inputs/ConvertTypeSelector'
import { currencyFormat } from '@/utils/currencyFormat'
import { Box, Typography } from '@mui/material'
import { FC } from 'react'

type Props = {
  inputs: CalculatorInputsFormType
  data: any
}

export const NetSalaryResult: FC<Props> = ({ inputs, data }) => {
  const { currency, salary, convertType } = inputs as CalculatorInputsFormType
  const { healthInsurance, calculatedSalary, personalIncomeTax, socialInsurance, unemploymentInsurance } = data
  const isGrossToNet = convertType === ConvertTypesEnum.gtn
  const currencyType = Object.values(Currencies).find(item => item.label === currency)
  if (!currencyType) {
    return <></>
  }
  const currencySymbol = currencyType.symbol

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        gap: 4,
        margin: '0 auto',
      }}>
      <Box sx={{ boxShadow: 1, borderRadius: '28px', background: linearGradientColor }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            padding: '24px',
            borderStartStartRadius: '12px',
            borderStartEndRadius: '12px',
          }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Typography variant="h3" fontWeight={theme.typography.fontWeightBold} color={theme.palette.info.main}>
              {isGrossToNet ? 'Employee Net Salary' : 'Employee Gross Salary'}
            </Typography>
            <Box display="flex" mt="8px">
              <Typography
                variant="h3"
                fontWeight={theme.typography.fontWeightBold}
                sx={{
                  color: theme.palette.info.main,
                  marginTop: 'auto',
                  marginBottom: '8px',
                  paddingRight: '6px',
                }}>
                {currencySymbol}
              </Typography>
              <Typography variant="h2" fontWeight={theme.typography.fontWeightBold} color={theme.palette.info.main}>
                {currencyFormat(calculatedSalary)}
              </Typography>
            </Box>
          </Box>
          <Typography variant="h4" sx={{ color: theme.palette.info.main, fontWeight: 'bold', textAlign: 'center' }}>
            {isGrossToNet ? 'Net monthly salary' : 'Gross monthly salary'}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: 2,
            padding: '24px',
            '@media (min-width: 600px)': { flexDirection: 'row' },
          }}>
          <Typography variant="h4" sx={{ color: theme.palette.info.main, fontWeight: 'bold' }}>
            {isGrossToNet ? 'Gross monthly salary costs' : 'Net monthly salary costs'}
          </Typography>
          <Typography variant="h4" sx={{ color: theme.palette.info.main, fontWeight: 'bold' }}>
            {currencySymbol} {currencyFormat(salary)}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            justifyContent: 'space-between',
            padding: '24px',
            '@media (min-width: 600px)': { flexDirection: 'row' },
          }}>
          <Typography variant="h4" sx={{ color: theme.palette.info.main }}>
            Health Insurance
          </Typography>
          <Typography variant="h4" sx={{ color: theme.palette.info.main, fontWeight: 'bold' }}>
            {currencySymbol} {currencyFormat(healthInsurance)}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            justifyContent: 'space-between',
            padding: '24px',
            '@media (min-width: 600px)': { flexDirection: 'row' },
          }}>
          <Typography variant="h4" sx={{ color: theme.palette.info.main }}>
            Unemployment Insurance
          </Typography>
          <Typography variant="subtitle1" sx={{ color: theme.palette.info.main, fontWeight: 'bold' }}>
            {currencySymbol} {currencyFormat(unemploymentInsurance)}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            padding: '24px',
            justifyContent: 'space-between',
            '@media (min-width: 600px)': { flexDirection: 'row' },
          }}>
          <Typography variant="h4" sx={{ color: theme.palette.info.main }}>
            Social Insurance
          </Typography>
          <Typography variant="h4" sx={{ color: theme.palette.info.main, fontWeight: 'bold' }}>
            {currencySymbol} {currencyFormat(socialInsurance)}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            padding: '24px',
            justifyContent: 'space-between',
            '@media (min-width: 600px)': { flexDirection: 'row' },
          }}>
          <Typography variant="h4" sx={{ color: theme.palette.info.main }}>
            Personal income tax
          </Typography>
          <Typography variant="h4" sx={{ color: theme.palette.info.main, fontWeight: 'bold' }}>
            {currencySymbol} {currencyFormat(personalIncomeTax)}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
