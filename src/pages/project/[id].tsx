import { PageWrapper } from '@/components/PageWrapper'
import { useProjectDetail } from '@/features/project/api/useProjectDetail.api'
import { ProjectDetailPageContent } from '@/features/project/components/ProjectDetail'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { styled } from 'styled-components'

const Container = styled('div')({
  width: '100%',
  textAlign: 'left',
  paddingLeft: '10%',
  paddingRight: '10%',
})

export const getServerSideProps: GetServerSideProps<{
  id: any
}> = async context => {
  return { props: { id: context.query.id } }
}

const Page = ({ id }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data } = useProjectDetail(id)

  return (
    <PageWrapper title={'Project Detail'}>
      <Container>{data && <ProjectDetailPageContent data={data} />}</Container>
    </PageWrapper>
  )
}

export default Page
