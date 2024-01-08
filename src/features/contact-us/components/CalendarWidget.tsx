import CallImage from '@/assets/images/call.png'
import { ScheduleForm } from '@/features/contact-us/components/ScheduleForm'
import { Button, Modal, styled } from '@mui/material'
import Image from 'next/image'
import { FC, useState } from 'react'

type Props = {}

export const CalendarWidget: FC<Props> = () => {
  const [showModal, setShowModal] = useState(false)

  const WidgetWrapper = styled('div')({
    position: 'fixed',
    bottom: 24,
    right: 12,
  })

  const ButtonWrapper = styled(Button)({
    zIndex: 1000,
    border: 'none !important',
    '&.MuiButton-contained': {
      borderRadius: 30,
      fontWeight: '500',
    },
  })

  return (
    <WidgetWrapper>
      <ButtonWrapper variant="outlined" onClick={() => setShowModal(true)} className="schedule">
        <Image src={CallImage} width={48} height={0} alt="" />
      </ButtonWrapper>
      <Modal open={showModal} onClose={() => setShowModal(!showModal)}>
        <ScheduleForm />
      </Modal>
    </WidgetWrapper>
  )
}
