import { theme } from '@/config/theme'
import { Button, Typography } from '@mui/material'

export const OutlinedButton = ({
  onClick,
  children,
  disabled = false,
}: {
  onClick: () => void
  children: React.ReactNode | string
  disabled?: boolean
}) => (
  <Button
    variant="outlined"
    style={{ background: theme.palette.primary.main, borderRadius: '8px', width: '100%' }}
    onClick={onClick}
    className="text-resume-900"
    disabled={disabled}>
    <Typography fontSize="1rem" fontWeight="700" color={theme.palette.info.main} textTransform="none">
      {children}
    </Typography>
  </Button>
)

export const TextButton = ({
  onClick,
  children,
  disabled = false,
}: {
  onClick: () => void
  children: React.ReactNode | string
  disabled?: boolean
}) => (
  <Button onClick={onClick} variant="outlined" disabled={disabled} style={{ borderRadius: '8px', width: '100%' }}>
    <Typography fontSize="1rem" fontWeight="700" color={theme.palette.primary.main} textTransform="none">
      {children}
    </Typography>
  </Button>
)
