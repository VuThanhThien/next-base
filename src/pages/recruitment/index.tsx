import { PageWrapper } from '@/components/PageWrapper'
import { useJobList } from '@/features/recruitment/api/useJobList'
import { JobFields, jobFields } from '@/features/recruitment/components/JobFields'
import { JobList } from '@/features/recruitment/components/JobList'
import { RecruitmentPageHeading } from '@/features/recruitment/components/RecruitmentPageHeading'
import { useMemo, useState } from 'react'

export default function Page() {
  const [selectedItem, setSelectedItem] = useState(jobFields[0].slug)
  const { data: jobList, isLoading } = useJobList(selectedItem)
  const selectedField = useMemo(() => {
    return jobFields.find(item => item.slug === selectedItem)?.name
  }, [selectedItem])
  return (
    <PageWrapper customStyle={{ paddingLeft: '10%', paddingRight: '10%' }}>
      <RecruitmentPageHeading />
      <JobFields onClick={setSelectedItem} selectedItem={selectedItem} />
      <JobList data={jobList} selectedField={selectedField} isLoading={isLoading} />
    </PageWrapper>
  )
}
