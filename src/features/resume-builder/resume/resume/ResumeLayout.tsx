import { AVAILABLE_TEMPLATES } from '@/helpers/constants'
import { useThemes } from '@/stores/themes'
import { useResumeStore } from '@/stores/useResumeStore'
import { useTemplates } from '@/stores/useTemplate'
import { useZoom } from '@/stores/useZoom'
import { Context, createContext, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'

// TODO: need to define types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export let StateContext: Context<any> = createContext(null)

export const ResumeLayout = () => {
  const resumeData = useResumeStore()
  const zoom = useZoom((state: any) => state.zoom)

  const templateId = useTemplates(state => state.activeTemplate.id)
  const Template = AVAILABLE_TEMPLATES[templateId].component
  const selectedTheme = useThemes(state => state.selectedTheme)
  StateContext = createContext(resumeData)

  useEffect(() => {
    const selectedTemplateId = localStorage.getItem('selectedTemplateId') || AVAILABLE_TEMPLATES['modern'].id
    useTemplates.getState().setTemplate(AVAILABLE_TEMPLATES[selectedTemplateId])
  }, [])

  return (
    <div className="print:mb-0" style={{}}>
      <div
        style={{
          transform: `scale(${zoom})`,
          transformOrigin: 'top',
          transitionProperty: 'all',
          transitionTimingFunction: 'linear',
          transitionDuration: '300ms',
        }}
        className="	print:!scale-100">
        <div
          style={{
            background: 'white',
            marginTop: 0,
            marginBottom: 0,
            marginInline: 'auto',
          }}>
          <StateContext.Provider value={resumeData}>
            <ThemeProvider theme={selectedTheme}>{Template && <Template />}</ThemeProvider>
          </StateContext.Provider>
        </div>
      </div>
    </div>
  )
}
