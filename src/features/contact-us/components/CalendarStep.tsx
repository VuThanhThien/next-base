import { Calendar } from '@/components/calendar/Calendar'
import { theme } from '@/config/theme'
import { getAvailableMeetingSchedule } from '@/features/contact-us/api/getAvailableMeetingSchedules.api'
import { TimePickerHeader } from '@/features/contact-us/components/styles'
import { CurrentMeetingDto } from '@/types/root-types'
import { Box, Grid, Typography, styled } from '@mui/material'
import dayjs from 'dayjs'
import isToday from 'dayjs/plugin/isToday'
import objectSupport from 'dayjs/plugin/objectSupport'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

import { useMemo, useState } from 'react'
dayjs.extend(isToday)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(objectSupport)

interface CalendarStepProps {
  onSelectDateTime: (date: Date) => void
}

const Wrapper = styled('div')(props => ({
  background: 'linear-gradient(103.71deg, #181E54 0%, #EB1933 100%)',
  boxShadow: '0px 0px 24px rgba(0, 0, 0, 0.3)',
  borderRadius: '16px',
  paddingInline: 20,
  paddingBlock: 30,
  margin: 20,
  [props.theme.breakpoints.up('xs')]: {
    paddingLeft: '5%',
    paddingRight: '5%',
    marginTop: '20%',
    marginBottom: '20%',
  },
  [props.theme.breakpoints.up('sm')]: {
    paddingInline: 100,
    paddingBlock: 58,
    margin: '10%',
    marginLeft: '15%',
    marginRight: '15%',
  },
  [props.theme.breakpoints.up('md')]: {
    paddingInline: 100,
    paddingBlock: 58,
    margin: '10%',
  },
}))

const TimePicker = styled('div')(props => ({
  borderLeft: '1px solid $gray600',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
}))

const TimePickerItem = styled('button')(props => ({
  backgroundColor: theme.palette.info.main,
  border: '1px solid #F5F5F5',
  color: 'rgba(245, 245, 245, 1)',
  borderRadius: '8px',
  width: '45%',
  height: 36,
  marginBottom: 10,

  [props.theme.breakpoints.up('sm')]: {
    width: '100%',
  },
  '&:last-child': {
    marginBottom: '$6',
  },

  '&:disabled': {
    backgroundColor: '$gray500',
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

export function CalendarStep({ onSelectDateTime }: CalendarStepProps) {
  const [hoveredButton, setHoveredButton] = useState<number | null>(null)
  const handleMouseEnter = (time: number) => {
    setHoveredButton(time)
  }

  const handleMouseLeave = () => {
    setHoveredButton(null)
  }
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())
  const isDateSelected = !!selectedDate

  const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null
  const describedDate = selectedDate ? dayjs(selectedDate).format('DD MMMM') : null

  // get company's available time
  const { data: availableSchedules } = getAvailableMeetingSchedule({
    timeMin: dayjs(selectedDate).startOf('day').toISOString(),
    timeMax: dayjs(selectedDate).startOf('day').add(1, 'day').toISOString(),
  })

  const availability = useMemo(() => {
    if (availableSchedules) {
      const blockedTime = availableSchedules.map((item: CurrentMeetingDto) => dayjs(item.start).hour())

      // available hour for meeting 13 -> 18 Vietnam time to UTC
      const supportedHoursInUTC = [6, 7, 8, 9, 10]
      const availability = supportedHoursInUTC.map(hour => dayjs.utc({ hour }).format())

      return availability.map(item => {
        const localHour = new Date(item).getHours()
        return {
          time: localHour,
          blocked: blockedTime.includes(localHour) || (dayjs(selectedDate).isToday() && localHour < dayjs().hour()),
        }
      })
    }
  }, [availableSchedules])

  function handleSelectTime(hour: number) {
    const dateWithTime = dayjs(selectedDate).set('hour', hour).startOf('hour').toDate()
    onSelectDateTime(dateWithTime)
  }
  const isWeekend = dayjs(selectedDate).day() === 6 || dayjs(selectedDate).day() === 0
  return (
    <Wrapper>
      <Box textAlign="center">
        <Typography
          variant="h2"
          fontWeight={theme.typography.fontWeightBold}
          textAlign="center"
          color={theme.palette.info.main}>
          Schedule a call
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: 16,
              sm: 20,
            },
          }}
          fontSize="20px"
          fontWeight={theme.typography.fontWeightRegular}
          color={theme.palette.info.main}
          paddingTop="16px">
          We’d love to hear from you. Please book a meeting.
        </Typography>
      </Box>

      <Grid container spacing="5%" paddingTop="6%">
        <Grid item xs={12} sm={7} style={{ display: 'flex', justifyContent: 'center' }} sx={{ width: '100%' }}>
          <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />
        </Grid>

        <Grid item xs={12} sm={5} width="100%">
          {isDateSelected && (
            <TimePicker>
              <Box sx={{ width: { md: '100%' } }}>
                <TimePickerHeader>
                  <Box textAlign="left" display="flex">
                    <Typography
                      variant="h4"
                      fontWeight={theme.typography.fontWeightBold}
                      color={theme.palette.info.main}
                      paddingRight="6px">
                      {weekDay}
                    </Typography>
                    <Typography
                      variant="h4"
                      fontWeight={theme.typography.fontWeightBold}
                      color={theme.palette.info.main}
                      fontSize="16px">
                      {describedDate}
                    </Typography>
                  </Box>
                </TimePickerHeader>

                <Box
                  sx={{ display: 'inline-flex', justifyContent: 'space-between', flexWrap: 'wrap', marginTop: '18px' }}>
                  {availability?.map(hour => {
                    return (
                      <TimePickerItem
                        onClick={() => handleSelectTime(hour.time)}
                        key={hour.time}
                        disabled={hour.blocked || isWeekend}
                        style={hoveredButton == hour.time ? { backgroundColor: theme.palette.primary.main } : {}}
                        onMouseEnter={() => handleMouseEnter(hour.time)}
                        onMouseLeave={handleMouseLeave}>
                        <Typography
                          variant="body2"
                          fontWeight={theme.typography.fontWeightBold}
                          color={hoveredButton == hour.time ? theme.palette.info.main : theme.palette.primary.main}>
                          {String(hour.time).padStart(2, '0')}:00 - {String(hour.time + 1).padStart(2, '0')}:00
                        </Typography>
                      </TimePickerItem>
                    )
                  })}
                </Box>
              </Box>
            </TimePicker>
          )}
        </Grid>
      </Grid>
    </Wrapper>
  )
}
