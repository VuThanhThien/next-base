import { CommonButton } from '@/components/CommonButton'
import { Form } from '@/components/form/Form'
import { InputField } from '@/components/form/InputField'
import { linearGradientColor, theme } from '@/config/theme'
import { useCreateProjectMutation } from '@/features/project/api/createProject.api'
import { UploadProject } from '@/features/project/components/UploadProject'
import { zodResolver } from '@hookform/resolvers/zod'
import { Box, FormHelperText, Modal, Typography, styled } from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useQueryClient } from 'react-query'
import { z } from 'zod'

const Wrapper = styled('div')(props => ({
  background: '#fff',
  boxShadow: '0px 0px 24px rgba(0, 0, 0, 0.3)',
  borderRadius: '16px',
  paddingInline: 20,
  paddingBlock: 20,
  margin: 20,
  textAlign: 'center',
  [props.theme.breakpoints.up('xs')]: {
    paddingLeft: '5%',
    paddingRight: '5%',
    marginTop: '20%',
    marginBottom: '20%',
  },
  [props.theme.breakpoints.up('sm')]: {
    paddingInline: 50,
    paddingBlock: 30,
    margin: '10%',
    marginLeft: '25%',
    marginRight: '25%',
  },
  [props.theme.breakpoints.up('md')]: {
    paddingInline: 50,
    paddingBlock: 30,
    margin: '10%',
    marginLeft: '35%',
    marginRight: '35%',
  },
}))

export type CalculatorInputsFormType = {
  projectType: string
  deadline: string
  techStack: string
  requirement: string
}
const schema = z.object({
  projectType: z.string({ required_error: 'Please enter Type of Project!' }),
  deadline: z.string({ required_error: 'Please enter deadline!' }),
  techStack: z.string({ required_error: 'Please enter Technology/Framework!' }),
  requirement: z.string({ required_error: 'Please enter Porject Requirement!' }),
})
type CreateProjectFormData = z.infer<typeof schema>

export const OverviewForm = ({ onChangeTab }: { onChangeTab: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<CreateProjectFormData>({
    resolver: zodResolver(schema),
  })

  const [showModal, setShowModal] = useState(false)
  const [payload, setPayload] = useState<CalculatorInputsFormType>()
  const queryClient = useQueryClient()

  const { mutate: createProject, isLoading } = useCreateProjectMutation({
    onSuccess: () => {
      queryClient.invalidateQueries('useProjectList')
    },
  })

  async function handleSubmitProject(data: CreateProjectFormData) {
    const { projectType, deadline, techStack, requirement } = data
    const payload = {
      projectType,
      techStack,
      requirement,
      deadline,
    }
    createProject(payload)
  }
  return (
    <>
      <Box textAlign={'left'}>
        <Typography variant="h3" fontWeight="bold" color={theme.palette.primary.main} marginBottom={'15px'}>
          Write Your Full Job Description
        </Typography>
        <Form<CalculatorInputsFormType, typeof schema>
          onSubmit={data => {
            setPayload(data)
            setShowModal(true)
          }}
          schema={schema}
          options={{
            defaultValues: {},
          }}>
          {({ setValue }) => (
            <Box display="flex" flexDirection="column" gap={'10px'}>
              <InputField
                label="Type of Project"
                {...register('projectType')}
                onChange={e => setValue('projectType', e.target.value)}
              />
              <FormHelperText sx={{ color: theme.palette.info.main, fontSize: '14px', marginLeft: '12px' }}>
                {errors.projectType?.message?.toString()}
              </FormHelperText>
              <InputField type="date" label="Deadline" onChange={e => setValue('deadline', e.target.value)} />
              <InputField label="Technology/Framework" onChange={e => setValue('techStack', e.target.value)} />
              <InputField label="Project Requirement" onChange={e => setValue('requirement', e.target.value)} />
              <UploadProject />
              <Box display="flex">
                <CommonButton
                  type="submit"
                  customStyle={{
                    background: linearGradientColor,
                    height: '62px',
                    width: '100%',
                    padding: '17px',
                    borderRadius: '80px',
                  }}>
                  <Typography variant="h4" fontSize="15px" color={theme.palette.info.main} textTransform="none">
                    Submit
                  </Typography>
                </CommonButton>
              </Box>
            </Box>
          )}
        </Form>
      </Box>
      <Modal open={showModal} onClose={() => setShowModal(!showModal)}>
        <Wrapper>
          <Typography variant="h2" fontWeight="bold" color={theme.palette.primary.main} textTransform={'uppercase'}>
            Project in review
          </Typography>
          <Typography>This process usually take 2 days</Typography>
          <Box display={'flex'} marginTop={'20px'} justifyContent={'space-between'}>
            <CommonButton onClick={() => setShowModal(false)}>Cancel</CommonButton>
            <CommonButton
              onClick={() => {
                payload && handleSubmitProject(payload)
                onChangeTab()
                setShowModal(false)
              }}>
              Continue
            </CommonButton>
          </Box>
        </Wrapper>
      </Modal>
    </>
  )
}
