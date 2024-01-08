import ResumeBuilderIcon from '@/assets/images/ResumeBuilderIcon.png'
import SalaryCalculatorIcon from '@/assets/images/SalaryCalculatorIcon.png'

import { appPaths } from '@/constants/appPaths'
import { Box, MenuItem, MenuList, styled } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { Zoom } from 'react-awesome-reveal'

const StyledMenuList = styled(MenuList)({
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  position: 'fixed',
  borderRadius: '8px',
  zIndex: '10000',
  background: '#FFF',
  overflowY: 'auto',
})

type Props = {
  item: {
    label: string
    link: string
    toolsItem: {
      label: string
      link: string
    }[]
  }
  handleClick: () => void
  isHovered: boolean
}

export const ToolsItem: FC<Props> = ({ item, handleClick, isHovered }) => {
  return (
    <div>
      <a className="nav-links" onClick={handleClick}>
        {item.label}
      </a>
      {isHovered && (
        <Zoom duration={500}>
          <StyledMenuList>
            <MenuItem>
              <Link href={appPaths.tools}>
                <Box style={{ display: 'flex', alignItems: 'center', padding: '4px' }}>
                  <Image
                    src={SalaryCalculatorIcon}
                    width={20}
                    height={0}
                    alt=""
                    style={{ marginRight: '10px', marginLeft: '-10%' }}
                  />

                  {item.toolsItem[0].label}
                </Box>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href={appPaths.resumeBuilder}>
                <Box style={{ display: 'flex', alignItems: 'center', padding: '4px' }}>
                  <Image
                    src={ResumeBuilderIcon}
                    width={20}
                    height={0}
                    alt=""
                    style={{ marginRight: '10px', marginLeft: '-10%' }}
                  />

                  {item.toolsItem[1].label}
                </Box>
              </Link>
            </MenuItem>
          </StyledMenuList>
        </Zoom>
      )}
    </div>
  )
}
