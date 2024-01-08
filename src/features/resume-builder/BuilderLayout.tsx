import { ResumeLayout } from '@/features/resume-builder/resume/resume/ResumeLayout'
import { Grid } from '@mui/material'
import EditorLayout from './editor/EditorLayout'

const BuilderLayout = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', boxShadow: '2px 2px 2px 2px #E0E0E0' }}>
      <Grid container justifyContent="space-between">
        <Grid item xs={8}>
          <div className="no-scrollbar" style={{ overflow: 'auto' }}>
            <ResumeLayout />
          </div>
        </Grid>
        <Grid item xs={3} style={{ background: 'rgba(24, 30, 84, 0.05)' }}>
          <aside className="print:hidden" style={{ paddingInline: '24px', paddingBlock: '36px', height: '100%' }}>
            <EditorLayout />
          </aside>
        </Grid>
      </Grid>
    </div>
  )
}

export default BuilderLayout
