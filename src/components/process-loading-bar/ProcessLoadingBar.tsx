import { preLoadingProcessBarColor, theme } from '@/config/theme'
import { useIsMobile } from '@/hooks/useIsMobile'
import { Box, Typography, styled } from '@mui/material'
import * as CSS from 'csstype'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import CountUp from 'react-countup'

const ProcessText = [
  {
    topNumber: 20,
    topText: '+',
    bottomText: 'Tap into 20+ tech domains and get the best talent for your project needs',
    mobileBottomText: 'Access 20+ tech domains for optimal talent',
  },
  {
    topNumber: 2,
    topText: 'x',
    bottomText: 'Accelerate your delivery timelines. With our team extensions, deliver projects 2x faster',
    mobileBottomText: 'A Double project speed with our team extensions',
  },
  {
    topNumber: 60,
    topText: '%',
    bottomText: 'Leverage our collaboration models and save 60%+ on IT costs',
    mobileBottomText: 'Cut IT costs by 60%+ with our collaboration models',
  },
  {
    topNumber: 100,
    topText: '%',
    bottomText: `100% committed and dynamically scalable teams, tailor-made to drive your project success`,
    mobileBottomText: '100% committed, scalable teams for your success',
  },
  {
    topNumber: 50,
    topText: '+',
    bottomText: `We're serving clients across 50+ countries worldwide`,
    mobileBottomText: 'Serving 50+ countries worldwide',
  },
]

const TopTextWrapper = styled('div')(props => ({
  position: 'absolute',
  bottom: '100%',
  left: '50%',
  transform: 'translate(-50%, -10px)',
  width: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '20px',
  fontWeight: 600,
  fontFamily: '"Inter", Sans-serif',
  paddingBottom: '40%',
  [props.theme.breakpoints.up(600)]: {
    fontSize: '40px',
    width: '120px',
    paddingBottom: '100%',
  },
  [props.theme.breakpoints.up(900)]: {
    fontSize: '60px',
    width: '120px',
  },
  [props.theme.breakpoints.up(1380)]: {
    fontSize: '100px',
    width: '200px',
  },
}))

const BottomTextWrapper = styled('div')(props => ({
  position: 'absolute',
  top: '100%',
  left: '50%',
  transform: 'translate(-50%, 10px)',
  color: theme.palette.info.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '60px',
  height: '100%',
  paddingTop: '200%',

  [props.theme.breakpoints.up(670)]: {
    width: '100px',
    paddingTop: '150%',
  },
  [props.theme.breakpoints.up(900)]: {
    width: '100px',
  },
  [props.theme.breakpoints.up(1000)]: {
    width: '150px',
  },
  [props.theme.breakpoints.up(1200)]: {
    width: '200px',
  },
}))

export interface Milestone {
  index: number
  width: number
  position: number
  current: boolean
  completed: boolean
}

interface MilestoneElementProps {
  Milestone?: (milestone: Milestone) => JSX.Element
  CurrentMilestone?: (milestone: Milestone) => JSX.Element
  CompletedMilestone?: (milestone: Milestone) => JSX.Element
  vertical?: boolean
  onMilestoneClick?: (index: number) => void
}

interface Props extends MilestoneElementProps {
  percentage: number
  children?: (props: {
    containerStyles: CSS.Properties
    completedBarStyles: CSS.Properties
    milestoneElements: JSX.Element[]
  }) => JSX.Element
  vertical?: boolean
  milestoneWidth?: number
  milestoneCount?: number
  color?: string
  transitionSpeed?: number
  style?: CSS.Properties
}

function DefaultMilestone({ width, index, position }: Milestone, percentage: number) {
  const [isActive, setIsActive] = useState(false)
  const isMobile = useIsMobile()
  useEffect(() => {
    if (percentage >= position * 100) {
      setIsActive(true)
    }
  }, [percentage])

  return (
    <div
      style={{
        position: 'relative',
      }}>
      <motion.div
        animate={isActive ? { color: [preLoadingProcessBarColor, theme.palette.info.main] } : {}}
        transition={{ ease: 'easeOut' }}
        style={{ color: preLoadingProcessBarColor }}>
        <TopTextWrapper>
          {percentage + 20 >= position * 100 ? (
            <>
              <CountUp start={0} end={ProcessText[index].topNumber} duration={index === 0 ? 0 : 2.8} />
              {ProcessText[index].topText}
            </>
          ) : (
            <>
              {ProcessText[index].topNumber}
              {ProcessText[index].topText}
            </>
          )}
        </TopTextWrapper>
      </motion.div>

      <motion.div
        animate={
          isActive
            ? {
                background: [preLoadingProcessBarColor, theme.palette.info.main],
              }
            : {}
        }
        transition={{ ease: 'easeOut' }}
        style={{
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          background: preLoadingProcessBarColor,
        }}
      />
      {isActive && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: 'easeOut' }}>
          <BottomTextWrapper>
            <Typography
              fontWeight="400px"
              fontSize={{ xs: '10px', sm: '12px', md: '16px' }}
              color={theme.palette.info.main}
              textAlign="center">
              {isMobile ? ProcessText[index].mobileBottomText : ProcessText[index].bottomText}
            </Typography>
          </BottomTextWrapper>
        </motion.div>
      )}
    </div>
  )
}

function createMilestone(
  {
    index,
    width,
    percentage,
  }: {
    index: number
    width: number
    percentage: number
  },
  totalMilestones: number,
): Milestone {
  const position = index / (totalMilestones - 1)
  return {
    index,
    width,
    position,
    current: position * 100 === percentage,
    completed: position * 100 < percentage,
  }
}

function createMilestones(milestoneCount: number, percentage: number, width: number): Array<Milestone> {
  let iterable: any[] = []
  for (let index = 0; index < milestoneCount; index++) {
    iterable = [...iterable, index]
  }
  return iterable.map(index => createMilestone({ index, width, percentage }, milestoneCount))
}

function renderMilestone(
  percentage: number,
  m: Milestone,
  { Milestone, CurrentMilestone, CompletedMilestone, onMilestoneClick, vertical }: MilestoneElementProps,
): JSX.Element | null {
  return (
    <Box
      key={m.index}
      style={{
        position: 'absolute',
        ...(vertical
          ? {
              left: '50%',
              transform: 'translateX(-50%)',
              top: 'calc(' + m.position * 100 + '% - ' + m.width / 2 + 'px)',
            }
          : {
              top: '50%',
              transform: 'translateY(-50%)',
              left: 'calc(' + m.position * 100 + '% - ' + m.width / 2 + 'px)',
            }),
      }}
      onClick={onMilestoneClick ? () => onMilestoneClick(m.index) : undefined}>
      <Box>
        {m.completed && CompletedMilestone
          ? CompletedMilestone(m)
          : m.current && CurrentMilestone
          ? CurrentMilestone(m)
          : Milestone
          ? Milestone(m)
          : DefaultMilestone(m, percentage)}
      </Box>
    </Box>
  )
}

export const ProgressBar = ({
  children,
  percentage = 0,
  milestoneCount = 0,
  milestoneWidth = 15,
  vertical,
  style = {},
  transitionSpeed = 0,
  Milestone,
  CurrentMilestone,
  CompletedMilestone,
  onMilestoneClick,
}: Props): JSX.Element => {
  const containerStyles = Object.assign(
    {
      position: 'relative',
      backgroundColor: preLoadingProcessBarColor,
      ...(vertical
        ? {
            width: 3,
            height: 300,
          }
        : { height: 3 }),
    },
    style,
  )
  const completedBarStyles = {
    backgroundColor: theme.palette.info.main,
    transition: transitionSpeed + 'ms all',
    ...(vertical
      ? {
          width: '100%',
          height: percentage + '%',
        }
      : { height: '100%', width: percentage + '%' }),
  }
  const milestones = createMilestones(milestoneCount, percentage, milestoneWidth)
  const milestoneElements = milestones.map(milestone =>
    renderMilestone(percentage, milestone, {
      Milestone,
      CurrentMilestone,
      CompletedMilestone,
      onMilestoneClick,
      vertical,
    }),
  )
  return (
    <Box>
      <Box paddingX={{ xs: '5%', sm: '5%' }}>
        <div style={containerStyles}>
          <div style={completedBarStyles} />
          {milestoneElements.length > 0 && milestoneElements}
        </div>
      </Box>
    </Box>
  )
}
