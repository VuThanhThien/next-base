import { PageWrapper } from '@/components/PageWrapper'
import { CalculatorSection } from '@/features/tools/calculator/components/CalculatorSection'
import { CalculatorPageFAQ } from '@/features/tools/calculator/components/FAQ/FAQSection'

export default function Page() {
  return (
    <>
      <PageWrapper customStyle={{ paddingLeft: '10%', paddingRight: '10%' }}>
        <CalculatorSection />
        <CalculatorPageFAQ />
      </PageWrapper>
    </>
  )
}
