import { Divider, Typography, styled } from '@mui/material'
import Link from '@mui/material/Link'

import { theme } from '@/config/theme'
import { OutlinedButton } from '@/helpers/common/atoms/Buttons'
import { TemplateSlider } from './TemplatesSlider'

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  borderColor: theme.palette.primary.main,
  ':hover': {
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.main,
  },
}))

export const TemplateSelect = () => {
  return (
    <div
      className={`h-[459px] w-[600px] bg-white flex flex-col px-10 py-[23px] shadow-2xl`}
      style={{
        height: '520px',
        width: '600px',
        display: 'flex',
        flexDirection: 'column',
        paddingInline: '2.5rem',
        paddingBlock: '23px',
        boxShadow:
          'px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)',
      }}>
      <TemplateSlider />
      <Divider />
      <Typography marginBottom="12px" color={theme.palette.primary.main} fontWeight="600" fontSize="20px">
        Want to build your own template?
      </Typography>
      <div>
        <OutlinedButton
          onClick={() => {
            window.open('https://github.com/sadanandpai/resume-builder', '_blank')
          }}>
          Contribute on Github
        </OutlinedButton>
      </div>
    </div>
  )
}
