import { PageWrapper } from '@/components/PageWrapper'
import { appConfig } from '@/config/appConfig'
import { BlogDetailPageContent } from '@/features/blog/components/BolgDetailPageContent'
import { styled } from '@mui/material'
import axios from 'axios'
import { format } from 'date-fns'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

const Container = styled('div')({
  width: '100%',
  textAlign: 'left',
  paddingLeft: '10%',
  paddingRight: '10%',
})

export const getServerSideProps: GetServerSideProps<{
  data: any
}> = async context => {
  const res = await axios.get(`${appConfig.apiUrl}/blog/${context.query.slug}`)
  return { props: { data: res.data } }
}

export default function Page({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageWrapper
      title={data.metadata.properties.Name.title[0]?.plain_text}
      metaTags={{
        title: data.metadata.properties.Name.title[0]?.plain_text,
        image: data.metadata.cover?.external?.url || data.metadata.cover?.file?.url,
        description: data.metadata.properties.Summary.rich_text[0].plain_text,
        publishedDate: format(new Date(data.metadata.created_time), 'MMM dd, yyyy'),
      }}>
      <Container>
        <BlogDetailPageContent data={data} />
      </Container>
    </PageWrapper>
  )
}
