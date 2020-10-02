import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link as RouterLink, Switch } from 'react-router-dom'
import { Container, Breadcrumbs, Link, Typography } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'

import './App.css'

import Login from './components/Login'
import EventView from './components/EventView'
import logInService from './services/login'
import scheduleService from './services/schedules'
import Settings from './components/Settings'

const App = () => {
  // general data
  const [message, setMessage] = useState()

  // user data
  const [loginUsername, setLoginUsername] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [user, setUser] = useState()

  // schedule data
  const [schedules, setSchedules] = useState([])
  const [currentSchedule, setCurrentSchedule] = useState('')

  // add new schedule
  const [newScheduleName, setNewScheduleName] = useState('')

  // edit schedule
  const [newEventName, setNewEventName] = useState('')
  const [newEventTime, setNewEventTime] = useState('')
  const [newEventImage, setNewEventImage] = useState('')
  const [scheduleInEdit, setScheduleInEdit] = useState({})

  // Try set data from localstorage
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedSchedulerAppUser')
    const scheduleJSON = window.localStorage.getItem('usersSchedules')
    if (loggedUserJSON) {
      const userFromStorage = JSON.parse(loggedUserJSON)
      setUser(userFromStorage)
      scheduleService.setToken(userFromStorage.token)
    }
    if (scheduleJSON) {
      const shceludeFromStorage = JSON.parse(scheduleJSON)
      setSchedules(shceludeFromStorage)
      if (shceludeFromStorage.length > 0) setCurrentSchedule(shceludeFromStorage[0].name)
    }
  }, [])

  const shortMessage = (msge) => {
    setMessage(msge)
    setTimeout(() => {
      setMessage()
    }, 3000)
  }

  const setLocalStorage = (user, schedules) => {
    window.localStorage.setItem('loggedSchedulerAppUser', JSON.stringify(user))
    window.localStorage.setItem('usersSchedules', JSON.stringify(schedules))
  }
  const clearLocalStorage = () => {
    window.localStorage.removeItem('loggedSchedulerAppUser')
    window.localStorage.removeItem('usersSchedules')
  }

  const handleLoginUsername = (event) => setLoginUsername(event.target.value)
  const handleLoginPassword = (event) => setLoginPassword(event.target.value)

  const loginSubmit = async (event) => {
    event.preventDefault()
    try {
      const userFromBackend = await logInService.logIn(loginUsername, loginPassword)
      scheduleService.setToken(userFromBackend.token)
      const usersSchedules = await scheduleService.getSchedules()

      setUser(userFromBackend)
      setSchedules(usersSchedules)
      if (usersSchedules.length > 0) setCurrentSchedule(usersSchedules[0].name)

      setLocalStorage(userFromBackend, usersSchedules)

      setLoginUsername('')
      setLoginPassword('')

      const loginMessage = {
        type: 'success',
        text: `loggend in as ${userFromBackend.username}`,
      }
      shortMessage(loginMessage)
    } catch (exception) {
      const errorMessage = {
        type: 'error',
        text: 'Wrong username or password',
      }
      shortMessage(errorMessage)
      setUser()
      setSchedules([])
    }
  }

  const logOut = () => {
    if (user) {
      setLoginUsername('')
      setLoginPassword('')
      setUser()
      setSchedules([])
      setCurrentSchedule('')
      setMessage()
      setNewScheduleName('')
      setNewEventName('')
      setNewEventTime('')
      setNewEventImage('')
      setScheduleInEdit({})
      clearLocalStorage()
    }
  }

  const rearrangeSchedule = (schedule) => {
    return {
      ...schedule,
      events: schedule.events.sort((eve1, eve2) => {
        if (eve1.start > eve2.start) return 1
        return -1
      }),
    }
  }

  const saveSchedule = async () => {
    const response = await scheduleService.post(rearrangeSchedule(scheduleInEdit))

    const newSchedules = schedules.map((schedule) => {
      if (schedule._id === scheduleInEdit._id) return response.data
      return schedule
    })

    setSchedules(newSchedules)
    setLocalStorage(user, newSchedules)
  }

  // all handlers used in ScheduleSettings-component
  const scheduleSettingProps = {
    handleEditScheduleSubmit() {
      return (event) => {
        event.preventDefault()
        saveSchedule()
      }
    },
    handleEventChange(eventId) {
      return (event) => {
        setScheduleInEdit({
          ...scheduleInEdit,
          events: scheduleInEdit.events.map((e) =>
            e._id === eventId ? { ...e, start: event.target.value } : e
          ),
        })
      }
    },
    handleEventRemove(eventId) {
      return () => {
        setScheduleInEdit({
          ...scheduleInEdit,
          events: scheduleInEdit.events.filter((eve) => eve._id !== eventId),
        })
      }
    },
    handleNewEvent: {
      newEventName,
      handleNewEventName(event) {
        setNewEventName(event.target.value)
      },
      newEventTime,
      handleNewEventTime(event) {
        setNewEventTime(event.target.value)
      },
      newEventImage,
      handleNewEventImage(image) {
        setNewEventImage(image)
      },
      async handleAddEventSubmit() {
        console.log('Add event', newEventName, newEventTime, newEventImage)

        scheduleService.update({
          ...scheduleInEdit,
          events: scheduleInEdit.events.concat({
            name: newEventName,
            time: newEventTime,
            image: newEventImage,
          })
        setScheduleInEdit({
          ...scheduleInEdit,
          events: scheduleInEdit.events.concat({
            name: newEventName,
            time: newEventTime,
            image: newEventImage,
          }),
        })
        setNewEventName('')
        setNewEventTime('')
        setNewEventImage('')
      },
    },
    setTimeOrder(id) {
      return () =>
        setSchedules(
          schedules.map((schedule) => {
            if (schedule.id === id) return rearrangeSchedule(schedule)
            return schedule
          })
        )
    },
  }

  // all handlers used in Settings-component
  const settings = {
    handleScheduleNameChange(event) {
      setScheduleInEdit({
        ...scheduleInEdit,
        name: event.target.value,
      })
    },
    handleScheduleCancel() {
      setScheduleInEdit({})
    },
    handleScheduleToEdit(scheduleId) {
      return () => {
        setScheduleInEdit(schedules.find((s) => s.id === scheduleId))
      }
    },
    handleNewScheduleName(event) {
      setNewScheduleName(event.target.value)
    },
    async addNewSchedule() {
      const emptySchedule = {
        events: [],
        name: newScheduleName,
        users: [user],
        weekDays: [],
      }
      const response = await scheduleService.post(emptySchedule)
      const sc = schedules.concat(response.data)
      setSchedules(sc)
      window.localStorage.setItem('usersSchedules', JSON.stringify(sc))
      setNewScheduleName('')
    },
    handleCurrentSchedule(id) {
      return () => setCurrentSchedule(id)
    },
    handleScheduleRemove(id) {
      return () => {
        const sc = schedules.find((schedule) => schedule.id === id)
        try {
          scheduleService.remove(sc)
          const newSchedules = schedules.filter((schel) => schel.id !== id)
          setSchedules(newSchedules)
          window.localStorage.setItem('usersSchedules', JSON.stringify(newSchedules))
        } catch (error) {
          shortMessage('something went wrong')
        }
      }
    },
  }

  let currentScheduleHasEvents = false

  try {
    currentScheduleHasEvents =
      currentSchedule.length > 0 &&
      schedules.find((schel) => schel.id === currentSchedule).events.length > 0
  } catch (exception) {
    currentScheduleHasEvents = false
  }

  console.log('schedules App.jsx', schedules)

  return (
    <Router>
      <Breadcrumbs aria-label="breadcrumb" id="mainMenu">
        <Link component={RouterLink} color="inherit" to="/" onClick={logOut}>
          {user ? 'Log out' : 'Log in'}
        </Link>
        <Link component={RouterLink} color="inherit" to="/settings">
          Settings
        </Link>
        <Link component={RouterLink} color="inherit" to="/eventview">
          Event View
        </Link>
        {user ? (
          <Typography color="textPrimary">{`user: ${user.username}`}</Typography>
        ) : (
          <Typography color="textPrimary">user: (not logged in)</Typography>
        )}
      </Breadcrumbs>

      {message ? <Alert severity={message.type}>{message.text}</Alert> : <></>}

      <Container>
        <Switch>
          <Route path="/eventview">
            {schedules !== undefined && currentScheduleHasEvents ? (
              <EventView schedule={schedules.find((s) => s.id === currentSchedule)} />
            ) : (
              <Container>You have not any schedules or events</Container>
            )}
          </Route>
          <Route path="/settings">
            {user !== undefined ? (
              <Settings
                settings={settings}
                newScheduleName={newScheduleName}
                scheduleInEdit={scheduleInEdit}
                schedules={schedules}
                scheduleSettingProps={scheduleSettingProps}
                currentSchedule={currentSchedule}
              />
            ) : (
              <Container>You have not logged in</Container>
            )}
          </Route>
          <Route path="/">
            {user !== undefined ? (
              <Container>{`${user.username} is Logged in!`}</Container>
            ) : (
              <Login
                username={loginUsername}
                password={loginPassword}
                handleUsername={handleLoginUsername}
                handlePassword={handleLoginPassword}
                submit={loginSubmit}
                message={message}
              />
            )}
          </Route>
        </Switch>
      </Container>
    </Router>
  )
}

export default App
