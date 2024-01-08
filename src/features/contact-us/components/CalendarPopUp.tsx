import { ScheduleForm } from '@/features/contact-us/components/ScheduleForm'
import { Box, Modal } from '@mui/material'
import { FC } from 'react'

type Props = {
  open: boolean
  onClose: () => void
}

export const CalendarPopUp: FC<Props> = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box>
        {/* <Box
          component="img"
          src={BackgroundLogo}
          position="absolute"
          left={0}
          top={0}
          bottom={0}
          borderRadius="16px"
          zIndex="-1"
        /> */}
        <ScheduleForm />
      </Box>
    </Modal>
  )
}
