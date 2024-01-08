// eslint-disable-next-line import/no-unresolved
import '@splidejs/splide/css'

import Splide, { Splide as SplideCore } from '@splidejs/splide'
import { useEffect, useRef } from 'react'

import { AVAILABLE_TEMPLATES } from '@/helpers/constants'
import { useTemplates } from '@/stores/useTemplate'
import { Global } from '@emotion/react'
import Image from 'next/image'

export const TemplateSlider = () => {
  const templateIndex = useTemplates(state => state.activeTemplate.id)

  const targetElementRef = useRef<HTMLElement | null>(null)
  const splideInstanceRef = useRef<Splide | null>(null)

  useEffect(() => {
    const targetElement = targetElementRef.current
    if (targetElement) {
      splideInstanceRef.current = new SplideCore(targetElement, {
        perPage: 2,
        pagination: false,
        gap: '0px',
        width: '100%',
        autoHeight: true,
        perMove: 1,
      })

      splideInstanceRef.current.mount()
    }

    return () => {
      splideInstanceRef.current && splideInstanceRef.current.destroy()
    }
  }, [])

  const onChangeTemplate = (templateId: string) => {
    useTemplates.getState().setTemplate(AVAILABLE_TEMPLATES[templateId])
  }

  return (
    <div>
      <Global
        styles={{
          '.splide__arrow svg': {
            fill: '#000000',
          },
          '.splide__arrow--prev': {
            backgroundColor: 'transparent',
          },
          '.splide__arrow--next': {
            backgroundColor: 'transparent',
          },
          '.splide__arrow--prev:disabled': {
            cursor: 'not-allowed',
          },
          '.splide__arrow--next:disabled': {
            cursor: 'not-allowed',
          },
        }}
      />
      <section
        className="splide "
        style={{ marginTop: '26px', marginBottom: '32px', paddingBlock: '40px' }}
        ref={targetElementRef}>
        <div className="splide__track">
          <ul className="splide__list">
            {Object.keys(AVAILABLE_TEMPLATES).map(templateKey => {
              const template = AVAILABLE_TEMPLATES[templateKey]
              const isActive = template.id === templateIndex
              return (
                <TemplateSlide
                  key={template.id}
                  isActive={isActive}
                  {...template}
                  onChangeTemplate={onChangeTemplate}
                />
              )
            })}
          </ul>
        </div>
      </section>
    </div>
  )
}

export const TemplateSlide = ({
  isActive,
  id,
  name,
  thumbnail,
  onChangeTemplate,
}: {
  isActive: boolean
  id: string
  name: string
  thumbnail: string
  onChangeTemplate: (id: string) => void
}) => {
  return (
    <li className="splide__slide " style={{ display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          height: '255px',
          width: '180px',
          borderRadius: '4px',
          overflow: 'hidden',
          position: 'relative',
          border: isActive ? '2px solid #4CAF50' : '1px solid #ECC94B',
        }}
        onClick={() => {
          onChangeTemplate(id)
        }}>
        <Image src={thumbnail} alt={name} layout="fill" />

        {isActive && (
          <div
            style={{
              position: 'absolute',
              top: '0.25rem',
              right: '0.25rem',
              background: 'white',
              borderRadius: '9999px',
            }}>
            <Image src={'/icons/selected-tick.svg'} alt="logo" width="24" height="24" />
          </div>
        )}
      </div>
    </li>
  )
}
