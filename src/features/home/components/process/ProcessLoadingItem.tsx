import { ProgressBar } from '@/components/process-loading-bar/ProcessLoadingBar'
import { FC, useEffect, useRef, useState } from 'react'

type Props = {
  isActive?: boolean
  isAtTheEnd?: boolean
}

export const ProcessLoadingItem: FC<Props> = () => {
  const [progress, setProgress] = useState(-0.25)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  let interval: NodeJS.Timeout | null = null

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        setIsVisible(entry.isIntersecting)
      })
    })
    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      interval = setInterval(() => {
        setProgress(prevProgress => {
          const newProgress = prevProgress + 0.25
          if (newProgress >= 100 && interval) {
            clearInterval(interval)
          }
          return newProgress
        })
      }, 25)
    }
  }, [isVisible])

  return (
    <div ref={ref}>
      <ProgressBar percentage={progress} milestoneCount={5}></ProgressBar>
    </div>
  )
}
