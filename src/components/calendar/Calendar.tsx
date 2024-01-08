import { CalendarActions, CalendarBody, CalendarHeader, CalendarTitle } from '@/components/calendar/styles'
import { calenderButtonHovered, mainRed, theme } from '@/config/theme'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { Box, Button, Typography, styled } from '@mui/material'
import dayjs from 'dayjs'

import { FC, useMemo, useState } from 'react'

const CalendarContainer = styled('div')(props => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  [props.theme.breakpoints.up('xs')]: {
    width: '100%',
    padding: 0,
  },
  paddingTop: '52px',
}))

const CalendarDay = styled('button')(props => ({
  all: 'unset',
  width: 30,
  height: 30,

  [props.theme.breakpoints.up('xs')]: {
    width: 40,
    height: 40,
  },
  aspectRatio: '16 / 9',
  background: '$gray600',
  textAlign: 'center',
  cursor: 'pointer',
  borderRadius: '$sm',

  '&:disabled': {
    background: 'none',
    cursor: 'default',
    opacity: 0.4,
  },

  '&:not(:disabled):hover': {
    background: '$gray500',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },
}))

export function getWeekDays({ short = false }: any = {}) {
  const formatter = new Intl.DateTimeFormat('en-US', { weekday: 'long' })

  return Array.from(Array(7).keys())
    .map(day => formatter.format(new Date(Date.UTC(2021, 5, day))))
    .map(weekDay => {
      if (short) {
        return weekDay.substring(0, 2)
      }
      return weekDay.substring(0, 1).toUpperCase().concat(weekDay.substring(1))
    })
}

interface CalendarWeek {
  week: number
  days: Array<{
    date: dayjs.Dayjs
    disabled: boolean
  }>
}

type CalendarWeeks = CalendarWeek[]

interface CalendarProps {
  selectedDate: Date | null
  onDateSelected: (date: Date) => void
}

export const Calendar: FC<CalendarProps> = ({ selectedDate, onDateSelected }: CalendarProps) => {
  const [clickedButton, setClickedButton] = useState<string | null>(null)
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs().set('date', 1)
  })

  const currentMonth = currentDate.format('MMMM')
  const currentYear = currentDate.format('YYYY')
  const shortWeekDays = getWeekDays({ short: true })

  function handlePreviousMonth() {
    const previousMonthData = currentDate.subtract(1, 'month')

    setCurrentDate(previousMonthData)
  }

  function handleNextMonth() {
    const nextMonthData = currentDate.add(1, 'month')

    setCurrentDate(nextMonthData)
  }
  const calendarWeeks = useMemo(() => {
    const daysInMonthArray = Array.from({
      length: currentDate.daysInMonth(),
    }).map((_, i) => {
      return currentDate.set('date', i + 2)
    })

    const firstWeekDay = currentDate.get('day')

    const previousMonthFillArray = Array.from({
      length: firstWeekDay,
    })
      .map((_, i) => {
        return currentDate.subtract(i, 'day')
      })
      .reverse()

    const lastDayInCurrentMonth = currentDate.set('date', currentDate.daysInMonth())
    const lastWeekDay = lastDayInCurrentMonth.get('day')

    const nextMonthFillArray = Array.from({
      length: 7 - (lastWeekDay + 1),
    }).map((_, i) => {
      return lastDayInCurrentMonth.add(i + 2, 'day')
    })

    const calendarDays = [
      ...previousMonthFillArray.map(date => {
        return { date, disabled: true }
      }),
      ...daysInMonthArray.map(date => {
        if (dayjs(date).day() === 6 || dayjs(date).day() === 0) {
          return {
            date,
            disabled: true,
          }
        }
        return {
          date,
          disabled: false,
        }
      }),
      ...nextMonthFillArray.map(date => {
        return { date, disabled: true }
      }),
    ]

    const calendarWeeks = calendarDays.reduce<CalendarWeeks>((weeks, _, i, original) => {
      const isNewWeek = i % 7 === 0

      if (isNewWeek) {
        weeks.push({
          week: i / 7 + 1,
          days: original.slice(i, i + 7),
        })
      }

      return weeks
    }, [])

    return calendarWeeks
  }, [currentDate])

  const [hoveredButton, setHoveredButton] = useState<string | null>(null)
  const [today, setToday] = useState<string | null>(dayjs().toString())
  const handleMouseEnter = (date: string) => {
    setHoveredButton(date)
  }

  const handleMouseLeave = () => {
    setHoveredButton(null)
  }

  const handleButtonClick = (date: any) => {
    onDateSelected(date.toString())
    setClickedButton(date.toString())
    setToday(null)
    console.log(date.format('dddd'))
  }

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle variant="body1" fontWeight={theme.typography.fontWeightBold} color={theme.palette.info.main}>
          {currentMonth} {currentYear}
        </CalendarTitle>
        <CalendarActions>
          <Box>
            <Button onClick={handlePreviousMonth} title="Previous month" style={{ color: theme.palette.info.main }}>
              <ArrowBackIosIcon sx={{ height: '14px' }} />
            </Button>
          </Box>

          <Box paddingLeft="32px">
            <Button onClick={handleNextMonth} title="Next month" style={{ color: theme.palette.info.main }}>
              <ArrowForwardIosIcon sx={{ height: '14px' }} />
            </Button>
          </Box>
        </CalendarActions>
      </CalendarHeader>
      <CalendarBody>
        <thead>
          <tr>
            {shortWeekDays.map(weekDay => (
              <th key={weekDay}>
                <Typography
                  variant="body2"
                  fontWeight={theme.typography.fontWeightBold}
                  color={theme.palette.info.main}>
                  {weekDay}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendarWeeks.map(({ week, days }) => {
            return (
              <tr key={week}>
                {days.map(({ date, disabled }) => {
                  return (
                    <td key={date.toString()} style={{ textAlign: 'center' }}>
                      <CalendarDay
                        onClick={() => handleButtonClick(date)}
                        disabled={disabled || (dayjs(date).isBefore(dayjs()) && !dayjs(date).isToday())}
                        onMouseEnter={() => handleMouseEnter(date.toString())}
                        onMouseLeave={handleMouseLeave}
                        style={
                          hoveredButton == date.toString() ||
                          clickedButton == date.toString() ||
                          today == date.toString()
                            ? {
                                background: calenderButtonHovered,
                                borderRadius: '20px',
                              }
                            : {}
                        }>
                        <Typography
                          variant="body2"
                          fontWeight={theme.typography.fontWeightRegular}
                          color={
                            hoveredButton == date.toString() ||
                            clickedButton == date.toString() ||
                            today == date.toString()
                              ? mainRed
                              : theme.palette.info.main
                          }>
                          {date.get('date')}
                        </Typography>
                      </CalendarDay>
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </CalendarBody>
    </CalendarContainer>
  )
}
