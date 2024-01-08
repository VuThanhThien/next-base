import { IconButton } from '@mui/material'
import CloseIcon from '@mui/material/SvgIcon'
import { SnackbarKey, useSnackbar, VariantType } from 'notistack'
import { Fragment, useEffect, useState } from 'react'

export type NotificationType = {
  msg: string
  variant: VariantType
}

const useNotification = () => {
  const [conf, setConf] = useState<NotificationType>()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const action = (key: SnackbarKey) => (
    <Fragment>
      <IconButton
        onClick={() => {
          closeSnackbar(key)
        }}>
        <CloseIcon />
      </IconButton>
    </Fragment>
  )

  useEffect(() => {
    if (conf?.msg) {
      let variant: VariantType = 'info'
      if (conf.variant) {
        variant = conf.variant
      }
      enqueueSnackbar(conf.msg, {
        variant: variant,
        autoHideDuration: 2000,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right',
        },
        action,
      })
    }
  }, [conf])

  return { showNotification: setConf }
}

export default useNotification
