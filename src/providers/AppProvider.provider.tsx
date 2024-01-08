import { theme } from '@/config/theme'
import { queryClient } from '@/libs/react-query'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { SnackbarProvider } from 'notistack'
import { FC, ReactNode, Suspense, useCallback } from 'react'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClientProvider } from 'react-query'
type Props = {
  children: ReactNode
}

const AppProvider: FC<Props> = ({ children }) => {
  const ErrorFallback = useCallback(({ error }: FallbackProps) => {
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={() => window.location.assign(window.location.origin)}>Try again</button>
      </div>
    )
  }, [])

  return (
    <Suspense fallback={<div>loading</div>}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <CssBaseline enableColorScheme />
                <SnackbarProvider maxSnack={3}> {children}</SnackbarProvider>
              </LocalizationProvider>
            </ThemeProvider>
          </QueryClientProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </Suspense>
  )
}

export default AppProvider
