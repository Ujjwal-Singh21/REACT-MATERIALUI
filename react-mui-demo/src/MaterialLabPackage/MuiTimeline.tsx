import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from '@mui/lab'

export const MuiTimeline = () => {
  return (
    <Timeline position='alternate'>
      <TimelineItem>
        <TimelineOppositeContent color='text.secondary'> 9:30 AM </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='error' variant='outlined' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>City A</TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent color='text.secondary'> 10:30 AM </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='error' variant='outlined' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>City B</TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent color='text.secondary'> 11:30 AM </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='error' variant='outlined' />
          {/* <TimelineConnector /> */}
        </TimelineSeparator>
        <TimelineContent>City C</TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}
