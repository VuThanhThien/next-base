import CommentsIcon from '@/assets/images/CommentsIcon.png'
import EmailIcon from '@/assets/images/EmailIcon.png'
import NameIcon from '@/assets/images/NameIcon.png'
import TimeIcon from '@/assets/images/TimeIcon.png'
import { TextFieldForm } from '@/components/TextFieldForm'
import { Form } from '@/components/form'
import { theme } from '@/config/theme'
import { useCreateMeetingRequestMutation } from '@/features/contact-us/api/createMeetingRequest.api'
import { Success } from '@/features/contact-us/components/Success'
import { FormActions } from '@/features/contact-us/components/confirmStep/styles'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoadingButton } from '@mui/lab'
import { Box, Button, CircularProgress, FormHelperText, Typography, styled } from '@mui/material'
import dayjs from 'dayjs'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type ConfirmFormData = z.infer<typeof confirmFormSchema>

interface ConfirmStepProps {
  schedulingDate: Date
  onCancelConfirmation: () => void
}

type ConfirmInputsFormType = {
  name: string
  email: string
  comments: string
}

const confirmFormSchema = z.object({
  name: z.string().min(3, { message: 'Name needs at least 3 characters' }),
  email: z.string().email({ message: 'Enter a valid email address' }),
  comments: z.string(),
})

const Wrapper = styled('div')(props => ({
  background: 'linear-gradient(103.71deg, #181E54 0%, #EB1933 100%)',
  boxShadow: '0px 0px 24px rgba(0, 0, 0, 0.3)',
  borderRadius: '16px',
  paddingInline: 20,
  paddingBlock: 20,
  margin: 20,
  [props.theme.breakpoints.up('xs')]: {
    paddingLeft: '5%',
    paddingRight: '5%',
    marginTop: '20%',
    marginBottom: '20%',
  },
  [props.theme.breakpoints.up('sm')]: {
    paddingInline: 100,
    paddingBlock: 58,
    margin: '10%',
    marginLeft: '15%',
    marginRight: '15%',
  },
  [props.theme.breakpoints.up('md')]: {
    paddingInline: 100,
    paddingBlock: 58,
    margin: '10%',
    marginLeft: '20%',
    marginRight: '20%',
  },
}))

const TimeCard = styled('div')(props => ({
  width: '100%',
  height: 91,
  display: 'flex',
  background: '#FFFFFF',
  borderRadius: '8px',
  marginLeft: 'auto',
  marginRight: 'auto',
  alignItems: 'center',
  justifyContent: 'flex-start',
  [props.theme.breakpoints.down('md')]: {
    textAlign: 'left',
  },
}))

const FormActionsButton = styled(Button)({
  width: '100%',
  borderRadius: '8px',
  boxShadow: '0px 4px 61px rgba(77, 71, 195, 0.4)',
})

export function ConfirmStep({ schedulingDate, onCancelConfirmation }: ConfirmStepProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ConfirmFormData>({
    resolver: zodResolver(confirmFormSchema),
  })

  const [showSuccess, setShowSuccess] = useState(false)

  const { mutate: createSchedule, isLoading } = useCreateMeetingRequestMutation({
    onSuccess: () => setShowSuccess(true),
  })

  const [name, setName] = useState<string>()

  async function handleConfirmScheduling(data: ConfirmFormData) {
    const { name, email } = data
    setName(name)
    const payload = {
      name: name,
      email: email,
      date: schedulingDate.toISOString(),
    }
    createSchedule(payload)
  }

  const describedDate = dayjs(schedulingDate).format('DD MMMM YYYY')
  const describedTime = dayjs(schedulingDate).format('HH:mm')
  const describedTimeEnd = dayjs(schedulingDate).add(30, 'minute').format('HH:mm')
  const describedDay = dayjs(schedulingDate).format('dddd')
  return (
    <Wrapper>
      {!showSuccess && (
        <Form<ConfirmInputsFormType, typeof confirmFormSchema>
          schema={confirmFormSchema}
          onSubmit={() => {}}
          options={{
            defaultValues: {},
          }}>
          {() => (
            <Box display="flex" flexDirection="column" textAlign="center" justifyContent="center">
              <Typography variant="h2" fontWeight={theme.typography.fontWeightBold} color={theme.palette.info.main}>
                Schedule a call
              </Typography>
              <Typography
                variant="h4"
                fontWeight={theme.typography.fontWeightRegular}
                color={theme.palette.info.main}
                textAlign="center"
                paddingTop="16px"
                paddingBottom="32px">
                Fill the form or write an e-mail to office@8seneca.com
              </Typography>
              <TimeCard>
                <Box marginLeft="24px">
                  <Image src={TimeIcon} style={{ width: 22, height: 22, marginRight: 24 }} alt="time_icon" />
                </Box>
                <Typography variant="body1" fontWeight={theme.typography.fontWeightRegular}>
                  {describedDay}, {describedDate}, {describedTime} - {describedTimeEnd}
                </Typography>
              </TimeCard>

              <Box component="div" marginTop="28px" display="flex" justifyContent="center">
                <Box component="div" width="100%">
                  <TextFieldForm placeholder="Name" register={{ ...register('name') }} icon={NameIcon} />
                  <FormHelperText sx={{ color: theme.palette.info.main, fontSize: '14px', marginLeft: '12px' }}>
                    {errors.name?.message?.toString()}
                  </FormHelperText>
                </Box>
              </Box>

              <Box component="div" paddingTop={errors.name ? '12px' : '28px'} display="flex" justifyContent="center">
                <Box component="div" width="100%">
                  <TextFieldForm placeholder="Business e-mail" register={{ ...register('email') }} icon={EmailIcon} />
                  <FormHelperText sx={{ color: theme.palette.info.main, fontSize: '14px', paddingLeft: '12px' }}>
                    {errors.email?.message?.toString()}
                  </FormHelperText>
                </Box>
              </Box>
              <Box component="div" paddingTop={errors.email ? '12px' : '28px'} display="flex" justifyContent="center">
                <Box component="div" width="100%">
                  <TextFieldForm placeholder="Comments" register={{ ...register('comments') }} icon={CommentsIcon} />
                </Box>
              </Box>
              <FormActions>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <FormActionsButton type="button" onClick={onCancelConfirmation} style={{ background: '#FFFFFF' }}>
                    <Typography
                      variant="body1"
                      fontWeight={theme.typography.fontWeightRegular}
                      color={theme.palette.primary.main}>
                      Cancel
                    </Typography>
                  </FormActionsButton>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <LoadingButton
                    loading={isLoading}
                    type="submit"
                    onClick={handleSubmit(handleConfirmScheduling)}
                    loadingIndicator={<CircularProgress size={20} sx={{ color: 'white' }} />}
                    style={{
                      background: theme.palette.primary.main,
                      width: '100%',
                      borderRadius: '8px',
                      boxShadow: '0px 4px 61px rgba(77, 71, 195, 0.4)',
                    }}>
                    {!isLoading && (
                      <Typography
                        variant="body1"
                        fontWeight={theme.typography.fontWeightRegular}
                        color={theme.palette.info.main}>
                        Confirm
                      </Typography>
                    )}
                  </LoadingButton>
                </motion.div>
              </FormActions>
            </Box>
          )}
        </Form>
      )}

      <Success
        open={showSuccess}
        describedDate={describedDate}
        describedDay={describedDay}
        describedTime={describedTime}
        describedTimeEnd={describedTimeEnd}
        name={name}
      />
    </Wrapper>
  )
}
