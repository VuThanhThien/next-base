import { theme } from '@/config/theme'
// import { useUploadToDrive } from '@/features/recruitment/api/useUploadToDrive'
import { CheckCircle } from '@mui/icons-material'
import { Box, Typography, styled } from '@mui/material'
import { motion } from 'framer-motion'
import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

const DropzoneWrapper = styled('div')({
  border: '1px solid var(--gray-300, #D0D5DD)',
  borderRadius: 8,
  width: '100%',
  padding: 56,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 20,
  cursor: 'pointer',
})

export const UploadProject = () => {
  const [enterStatus, setEnterStatus] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File>()

  //   const { mutate: upload } = useUploadToDrive({ onSuccess: () => setUploadSuccess(true) })

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const [file] = acceptedFiles
    setSelectedFile(file)
    setEnterStatus(false)

    // await upload({ file, folder, subfolder })
  }, [])

  const onDragEnter = useCallback((acceptedFiles: any) => {
    setEnterStatus(true)
  }, [])

  const onDragLeave = useCallback((acceptedFiles: any) => {
    setEnterStatus(false)
  }, [])

  const { getRootProps, getInputProps } = useDropzone({ onDrop, onDragEnter, onDragLeave })

  return (
    <DropzoneWrapper {...getRootProps()}>
      <input {...getInputProps()} />
      {selectedFile ? (
        <>
          {uploadSuccess && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
              }}>
              <CheckCircle style={{ color: theme.palette.success.light }} />
            </motion.div>
          )}

          <Typography style={{ marginTop: 5 }}>{selectedFile.name}</Typography>
        </>
      ) : (
        <>
          <Typography style={{ marginTop: 5 }}>Select a file or drag and drop here</Typography>
          <Typography color={'gray'} style={{ marginTop: 5, marginBottom: 15 }}>
            Word or PDF, file size more than 10MB
          </Typography>
          <Box borderRadius={'99px'} border={'1px solid black'} padding={'5px 10px'}>
            <Typography fontSize={'10px'} fontWeight={400} textTransform={'uppercase'}>
              SELECT FILE
            </Typography>
          </Box>
        </>
      )}
    </DropzoneWrapper>
  )
}
