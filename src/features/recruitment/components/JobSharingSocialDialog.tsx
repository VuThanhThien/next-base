import { CommonButton } from '@/components/CommonButton'
import { linearGradientColor } from '@/config/theme'
import useNotification from '@/hooks/useNotification'
import Facebook from '@/social-sharing/Facebook'
import LinkedIn from '@/social-sharing/LinkedIn'
import Twitter from '@/social-sharing/Twitter'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
  styled,
} from '@mui/material'
import { FC } from 'react'
import { useCopyToClipboard } from 'usehooks-ts'

type Props = {
  open: boolean
  setIsConfirmDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const StyledTextField = styled(TextField)({
  marginBottom: '12px',
  marginTop: '12px',
  border: '1px solid #ccc',
  borderRadius: '4px',
})

const StyledButton = styled(Button)({
  borderRadius: '70px',
  minWidth: '100px',
  display: 'flex',
  alignItems: 'center',
})

export const JobSharingSocialDialog: FC<Props> = ({ open, setIsConfirmDialogOpen }) => {
  const { showNotification } = useNotification()
  const [_value, copy] = useCopyToClipboard()
  return (
    <Dialog open={open} onClose={setIsConfirmDialogOpen} sx={{ width: '100%', borderRadius: '24px' }}>
      <DialogTitle>Share Job Description</DialogTitle>
      <DialogContent>
        <Typography variant="body1">Do you want to share the link bellow ?</Typography>
        <StyledTextField
          placeholder={window.location.href}
          type="text"
          fullWidth
          InputProps={{
            endAdornment: (
              <IconButton
                onClick={() => {
                  copy(window.location.href)
                  showNotification({ msg: 'Copied!', variant: 'success' })
                }}>
                <ContentCopyIcon />
              </IconButton>
            ),
          }}
        />
        <Typography variant="body1">Or you can choose sharing option</Typography>
        <Box display="flex" justifyContent="space-around" marginTop="24px">
          <LinkedIn />
          <Facebook />
          <Twitter />
        </Box>
      </DialogContent>
      <DialogActions>
        <CommonButton
          customStyle={{
            background: linearGradientColor,
            color: '#FFF',
          }}
          onClick={() => setIsConfirmDialogOpen(false)}>
          Done
        </CommonButton>
      </DialogActions>
    </Dialog>
  )
}
