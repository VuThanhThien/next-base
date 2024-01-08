import { linearGradientColor, theme } from '@/config/theme'
import { Box, Button, Typography, styled } from '@mui/material'
import Image, { StaticImageData } from 'next/image'
import { FC } from 'react'

const Wrapper = styled(Button)({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minWidth: '300px',
  maxWidth: '400px',
  height: '100%',
  boxShadow: '1px 15px 23px rgba(229, 229, 229, 0.25)',
  borderRadius: '40px',
  justifyContent: 'center',
})

type Props = {
  data: any
  selectedItem: any
  onClick: any
}

export type FieldItemType = {
  name: string
  slug: string
  inactiveIcon: StaticImageData
  activeIcon: StaticImageData
}

export const JobFieldItem: FC<Props> = ({ data, onClick, selectedItem }) => {
  const isSelected = data.slug === selectedItem

  return (
    <Box component="div" display="flex" width="100%" justifyContent="center">
      <Wrapper
        onClick={() => onClick(data.slug)}
        style={
          isSelected
            ? {
                background: `${linearGradientColor}`,
              }
            : { background: 'rgba(245, 245, 245, 1)' }
        }>
        <Box marginY="14%" display="flex" flexDirection="column" alignItems="center">
          <Image width={72} height={72} alt="" src={isSelected ? data.activeIcon : data.inactiveIcon} />
          <Typography
            variant="h3"
            fontWeight={theme.typography.fontWeightMedium}
            color={isSelected ? theme.palette.info.main : theme.palette.primary.main}
            marginTop={4}>
            {data.name}
          </Typography>
        </Box>
      </Wrapper>
    </Box>
  )
}
