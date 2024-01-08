import { theme } from '@/config/theme'
import { useCreateSubscriberMutation } from '@/features/subscribe/api/useCreateSubscriber'
import useNotification from '@/hooks/useNotification'
import SendIcon from '@mui/icons-material/Send'
import { Box, Button, InputAdornment, TextField, Typography, styled } from '@mui/material'
import { FC, useState } from 'react'

const StyledTextField = styled(TextField)({
  borderRadius: '8px',
  height: '56px',
  marginTop: '24px',
  marginBottom: '24px',
})

type Props = {}

export const SubscribeUsSection: FC<Props> = () => {
  const { showNotification } = useNotification()

  const [isSendButtonHovered, setIsSendButtonHovered] = useState(false)
  const [email, setEmail] = useState('')
  const { mutate: createSubscriber, isLoading } = useCreateSubscriberMutation()

  const handleSubmit = () => {
    if (!email) {
      return
    }
    createSubscriber(
      { email },
      {
        onSuccess: () => {
          setEmail('')
          showNotification({ msg: 'Thanks for subscribe!', variant: 'success' })
        },
      },
    )
  }

  return (
    <Box width="100%" textAlign="left" marginTop="5%">
      <Typography variant="h6" color="#FFF" fontSize="24px">
        SUBSCRIBE TO US
      </Typography>
      <StyledTextField
        sx={{ paddingRight: 0 }}
        type="email"
        placeholder="Info@yourgmail.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button
                sx={{
                  background: theme.palette.primary.main,
                  width: '100%',
                  paddingY: '26%',
                  borderRadius: '0 8px 8px 0',
                  color: isSendButtonHovered ? theme.palette.primary.main : '#FFF',
                }}
                onMouseEnter={() => setIsSendButtonHovered(true)}
                onMouseLeave={() => setIsSendButtonHovered(false)}
                onClick={handleSubmit}>
                <SendIcon />
              </Button>
            </InputAdornment>
          ),
          style: {
            padding: 0,
          },
        }}
      />
      <Typography variant="subtitle2" textAlign="center" color="rgba(255, 255, 255, 0.7)">
        By subscribing, you agree to receive occasional communications regarding 8seneca's products, services, and
        events. You can unsubscribe at any time. To read more visit privacy policy.
      </Typography>
    </Box>
  )
}
