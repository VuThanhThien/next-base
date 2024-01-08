import { NavBarMenu } from '@/features/resume-builder/nav-bar/atoms'
import { NavMenuItem } from '@/features/resume-builder/nav-bar/components/MenuItem'
import { TemplateSelect } from '@/features/resume-builder/nav-bar/components/TemplateSelect'
import { AVAILABLE_TEMPLATES } from '@/helpers/constants'
import { useZoom } from '@/stores/useZoom'
import ResumeController from '../atoms/ResumeController'

const ResumeHeader = () => {
  const { zoomIn, zoomOut, resetZoom } = useZoom.getState()
  const TOTAL_TEMPLATES_AVAILABLE = Object.keys(AVAILABLE_TEMPLATES).length

  return (
    <div
      className="flex items-center justify-between"
      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <NavBarMenu>
        <NavMenuItem caption={`Templates (${TOTAL_TEMPLATES_AVAILABLE})`} popoverChildren={<TemplateSelect />} />
      </NavBarMenu>
      <ResumeController zoomIn={zoomIn} zoomOut={zoomOut} resetZoom={resetZoom} />
    </div>
  )
}

export default ResumeHeader
