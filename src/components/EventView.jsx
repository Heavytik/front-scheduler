import React, { useState, useEffect } from 'react'
import moment from 'moment'

import '../App.css'

import imageService from '../images/imageService'

const EventView = ({ schedule }) => {
  const images = imageService()

  const eventsRaw = schedule.events
  const events = eventsRaw.map((e) => {
    const eventHours = e.start.split(':')[0]
    const eventMinutes = e.start.split(':')[1]
    const currentDay = moment({ hour: eventHours, minute: eventMinutes })
    return {
      ...e,
      start: currentDay,
      image: images.find((i) => i.label === e.image).image,
    }
  })

  const [clock, setClock] = useState(moment())
  const [currentEventState, setCurrentEventState] = useState({
    text: 'initialText',
  })

  const findEventIndex = () => {
    if (
      events.length === 1 ||
      clock.isAfter(events[events.length - 1].start) ||
      clock.isBefore(events[0].start)
    ) {
      return events.length - 1
    }
    let loopIndex = 0
    for (loopIndex = 0; loopIndex < events.length; loopIndex += 1) {
      if (
        loopIndex < events.length - 1 &&
        clock.isBetween(events[loopIndex].start, events[loopIndex + 1].start)
      ) {
        return loopIndex
      }
    }
    return 0
  }

  const eventIndex = findEventIndex()

  let currentEvent = events[eventIndex]

  if (clock.isBefore(events[0].start)) {
    currentEvent = {
      ...events[events.length - 1],
      start: moment(events[events.length - 1].start.format()).subtract(1, 'days'),
    }
  }

  const nextDaysFirstEvent = {
    ...events[0],
    start: moment(events[0].start.format()).add(1, 'days'),
  }

  // nextEvent part 1
  let nextEvent = events[0]

  const isLastEvent = () => eventIndex === events.length - 1

  // nextEvent part 2: check that is last event and next day has NOT begun.
  if (isLastEvent() && clock.isAfter(events[0].start)) {
    nextEvent = nextDaysFirstEvent

    // nextEvent part 3: check that first event is past
  } else if (events[0].start.isBefore(clock)) {
    nextEvent = events[eventIndex + 1]
  }

  if (currentEvent.text !== currentEventState.text) {
    setCurrentEventState(currentEvent)
  }

  const duration = nextEvent.start.diff(currentEvent.start, 'minutes')
  const timeLeft = nextEvent.start.diff(clock, 'minutes')
  const prosentsLeft = Math.round((100 * timeLeft) / duration)
  const progressBarWidth = 500
  const progress = Math.round((progressBarWidth * (100 - prosentsLeft)) / 100)

  useEffect(() => {
    const timer = () => {
      setClock(moment())
    }
    const myTimer = setInterval(timer, 15000)
    return () => clearInterval(myTimer)
  }, [])

  return (
    <div className="App">
      <div className="grid-container">
        <div className="centered">
          <img alt="" src={currentEvent.image} />
        </div>
        <div className="bigInfo">
          <div>{currentEvent.text}</div>
          <div>{` jäljellä ${timeLeft} min`}</div>
        </div>
        <div className="centered">
          <svg height="100" width="500">
            <line x1="0" y1="50" x2="500" y2="50" style={{ stroke: 'red', strokeWidth: '2' }} />
            <line
              x1="0"
              y1="50"
              x2={progress - 20}
              y2="50"
              style={{ stroke: 'lime', strokeWidth: '20' }}
            />
            <polygon
              points={`${progress},50 ${progress - 40},90 ${progress - 40},10`}
              style={{ fill: 'lime', stroke: 'purple', strokeWidth: '1' }}
            />
            Sorry, your browser does not support inline SVG.
          </svg>
        </div>
        <div className="bigInfo">
          {`Seuraavaksi: `}
          {nextEvent.text}
        </div>
      </div>
      <div className="footer">
        {`Icons made by  `}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>
        {`  from  `}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  )
}

export default EventView
