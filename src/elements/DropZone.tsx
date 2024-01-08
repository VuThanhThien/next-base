import { theme } from '@/config/theme'
import { useUploadToDrive } from '@/features/recruitment/api/useUploadToDrive'
import { CheckCircle, UploadFile } from '@mui/icons-material'
import { Typography, styled } from '@mui/material'
import { motion } from 'framer-motion'
import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

const DropzoneWrapper = styled('div')({
  border: '1px dashed gray',
  borderRadius: 40,
  width: '100%',
  padding: 15,
  height: 100,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 20,
  cursor: 'pointer',
})

export const DropZone = ({ folder, subfolder }: { folder: string; subfolder: string }) => {
  const [enterStatus, setEnterStatus] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File>()

  const { mutate: upload } = useUploadToDrive({ onSuccess: () => setUploadSuccess(true) })

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const [file] = acceptedFiles
    setSelectedFile(file)
    setEnterStatus(false)

    await upload({ file, folder, subfolder })
  }, [])

  const onDragEnter = useCallback((acceptedFiles: any) => {
    setEnterStatus(true)
  }, [])

  const onDragLeave = useCallback((acceptedFiles: any) => {
    setEnterStatus(false)
  }, [])

  const { getRootProps, getInputProps } = useDropzone({ onDrop, onDragEnter, onDragLeave })

  return (
    <DropzoneWrapper style={{ borderColor: enterStatus ? theme.palette.primary.main : 'gray' }} {...getRootProps()}>
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
          <UploadFile />
          <Typography style={{ marginTop: 5 }}>Drop your CV here</Typography>
        </>
      )}
    </DropzoneWrapper>
  )
}
