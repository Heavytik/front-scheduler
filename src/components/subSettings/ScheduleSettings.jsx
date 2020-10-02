import React, { useState } from 'react'
import {
  Container,
  Button,
  TextField,
  FormControl,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import { makeStyles } from '@material-ui/core/styles'
import { buttonOne } from '../../styleObjects/globalStyles'
import { styleScheduleSettings } from '../../styleObjects/specialStyles'
import images from '../../images/imageService'

import SelectImage from './SelectImage'
import SettingsRowEvent from './SettingsRowEvent'

const useStyles = makeStyles({
  button: buttonOne,
  settingsArea: styleScheduleSettings,
})

const ScheduleSettings = ({ schedule, scheduleSettingProps, handleEditCancel }) => {
  const {
    handleEditScheduleSubmit,
    handleEventChange,
    handleEventRemove,
    handleNewEvent,
    setTimeOrder,
  } = scheduleSettingProps
  const classes = useStyles()

  const imageLabels = images().map((i) => i.label)

  const [newEventDialogOpen, setNewEventDialogOpen] = useState(false)

  const openNewEventDialog = () => setNewEventDialogOpen(true)

  const closeNewEventDialog = (extraFunction = () => {}) => () => {
    extraFunction()
    setNewEventDialogOpen(false)
  }
  const currentEvents = schedule.events

  const scheduleRows = currentEvents.map((eve) => {
    return (
      <SettingsRowEvent
        key={eve._id}
        event={eve}
        handleEventChange={handleEventChange}
        handleEventRemove={handleEventRemove}
      />
    )
  })

  return (
    <Container className={classes.settingsArea}>
      <div>
        <Box>Events</Box>
        <form onSubmit={handleEditScheduleSubmit(schedule.id)}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>name</TableCell>
                  <TableCell>start time</TableCell>
                  <TableCell>remove event</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {scheduleRows.length > 0 ? (
                  scheduleRows
                ) : (
                  <tr>
                    <td>You have not any events yet.</td>
                  </tr>
                )}
              </TableBody>
            </Table>
          </TableContainer>

          <div>
            <Box mt={1} mb={1}>
              <Button className={classes.button} onClick={openNewEventDialog}>
                + Add new event
              </Button>
            </Box>
            <Dialog
              open={newEventDialogOpen}
              onClose={closeNewEventDialog()}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">New event</DialogTitle>
              <DialogContent>
                <DialogContentText>Add event name and time to create new event.</DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="text"
                  label="Event name"
                  type="text"
                  value={handleNewEvent.newEventName}
                  onChange={handleNewEvent.handleNewEventName}
                  fullWidth
                />
                <p>Start time</p>
                <TextField
                  id="time"
                  label="Start time"
                  type="time"
                  value={handleNewEvent.newEventTime}
                  onChange={handleNewEvent.handleNewEventTime}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                />
                <FormControl>
                  <SelectImage
                    imageNames={imageLabels}
                    handleClick={handleNewEvent.handleNewEventImage}
                  />
                </FormControl>
              </DialogContent>
              <DialogActions>
                <Button
                  className={classes.button}
                  onClick={closeNewEventDialog(handleNewEvent.handleAddEventSubmit)}
                >
                  Add
                </Button>
                <Button className={classes.button} onClick={closeNewEventDialog()}>
                  Cancel
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          <Box mt={1} mb={1}>
            <Button className={classes.button} onClick={setTimeOrder(schedule.name)}>
              Rearrange
            </Button>
          </Box>
          <Box mt={1} mb={1}>
            <Button className={classes.button} type="submit">
              Save
            </Button>
            <Button className={classes.button} onClick={handleEditCancel}>
              Cancel
            </Button>
          </Box>
        </form>
      </div>
    </Container>
  )
}

export default ScheduleSettings
