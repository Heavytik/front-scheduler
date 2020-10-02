import React, { useState } from 'react'
import {
  Container,
  Button,
  TextField,
  Checkbox,
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
import ScheduleSettings from './subSettings/ScheduleSettings'
import { buttonOne } from '../styleObjects/globalStyles'

const useStyles = makeStyles({
  button: buttonOne,
})

const Settings = ({
  settings,
  newScheduleName,
  scheduleInEdit,
  schedules,
  currentSchedule,
  scheduleSettingProps,
}) => {
  const [removeDialogId, setRemoveDialogId] = useState('')
  const [isOpenNewSchedule, setIsOpenNewSchedule] = useState(false)

  // material ui styles
  const classes = useStyles()

  // handle "add new schedule"
  const handleOpen = () => setIsOpenNewSchedule(true)
  const handleClose = (extraFunction = () => {}) => () => {
    extraFunction()
    setIsOpenNewSchedule(false)
  }

  // handle "delete schedule"
  const openRemoveSchedule = (scheduleId) => () => setRemoveDialogId(scheduleId)
  const closeRemoveSchedule = () => setRemoveDialogId('')

  const scheduleList = schedules.map((s) => {
    const isOpen = scheduleInEdit.hasOwnProperty('id') && scheduleInEdit.id === s.id
    const isCurrent = s.id === currentSchedule
    return (
      <React.Fragment key={`${s.id}fragment`}>
        <TableRow key={s.id}>
          <TableCell>
            {!isOpen ? (
              s.name
            ) : (
              <TextField
                margin="dense"
                id="scheduleName"
                type="text"
                value={scheduleInEdit.name}
                onChange={settings.handleScheduleNameChange}
                fullWidth
              />
            )}
          </TableCell>
          <TableCell>
            <Checkbox
              checked={isCurrent}
              variant="contained"
              onClick={settings.handleCurrentSchedule(s.id)}
            />
          </TableCell>

          <TableCell>
            {scheduleInEdit.hasOwnProperty('id') ? (
              isOpen ? (
                <Button className={classes.button} onClick={settings.handleScheduleCancel}>
                  Cancel
                </Button>
              ) : (
                <></>
              )
            ) : (
              <Button className={classes.button} onClick={settings.handleScheduleToEdit(s.id)}>
                Edit
              </Button>
            )}
          </TableCell>

          <TableCell>
            <Button className={classes.button} onClick={openRemoveSchedule(s.id)}>
              -
            </Button>
            <Dialog
              open={removeDialogId === s.id}
              onClose={closeRemoveSchedule}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{`Delete schedule ${s.name}`}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  This deletes schedule permanently.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button className={classes.button} onClick={settings.handleScheduleRemove(s.id)}>
                  Yes
                </Button>
                <Button className={classes.button} onClick={closeRemoveSchedule} autoFocus>
                  Cancel
                </Button>
              </DialogActions>
            </Dialog>
          </TableCell>
        </TableRow>
        {isOpen ? (
          <TableRow key={`${s.id}edit`}>
            <TableCell colSpan="3">
              <ScheduleSettings
                schedule={scheduleInEdit}
                scheduleSettingProps={scheduleSettingProps}
                handleEditCancel={settings.handleScheduleCancel}
              />
            </TableCell>
          </TableRow>
        ) : (
          <></>
        )}
      </React.Fragment>
    )
  })

  return (
    <Container>
      <h2>Schedules</h2>
      <TableContainer>
        <Table style={{ minWidth: '400px' }}>
          <TableHead>
            <TableRow>
              <TableCell>
                <h3>name</h3>
              </TableCell>
              <TableCell>
                <h3>current</h3>
              </TableCell>
              <TableCell>
                <h3>edit</h3>
              </TableCell>
              <TableCell>
                <h3>delete</h3>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{scheduleList}</TableBody>
        </Table>
      </TableContainer>
      <Box mt={1} mb={1}>
        <Button className={classes.button} onClick={handleOpen}>
          + Add new Schedule
        </Button>
      </Box>
      <Dialog
        open={isOpenNewSchedule}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Add new schedule</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Give a name for schedule and save.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="text"
            label="schedule name"
            type="text"
            value={newScheduleName}
            onChange={settings.handleNewScheduleName}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button className={classes.button} onClick={handleClose(settings.addNewSchedule)}>
            Save
          </Button>
          <Button className={classes.button} onClick={handleClose()} color="primary" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

export default Settings
