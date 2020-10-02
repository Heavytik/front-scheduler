import React, { useState } from 'react'
import { Button, TextField, TableCell, TableRow } from '@material-ui/core'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import { makeStyles } from '@material-ui/core/styles'
import { buttonOne } from '../../styleObjects/globalStyles'
import { styleScheduleSettings } from '../../styleObjects/specialStyles'

const useStyles = makeStyles({
  button: buttonOne,
  settingsArea: styleScheduleSettings,
})

const SettingsRowEvent = ({ event, handleEventChange, handleEventRemove }) => {
  const classes = useStyles()

  const [removeDialogOpen, setRemoveDialogOpen] = useState(false)

  const handleRemoveDialogOpen = (isOpen) => () => {
    setRemoveDialogOpen(isOpen)
  }

  return (
    <TableRow key={event.id ? event.id : event.text}>
      <TableCell>{event.text}</TableCell>
      <TableCell>
        <TextField
          id={`time_${event._id}`}
          label="Start time"
          type="time"
          value={event.start}
          onChange={handleEventChange(event._id)}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 300, // 5 min
          }}
        />
      </TableCell>
      <TableCell>
        <Button className={classes.button} onClick={handleRemoveDialogOpen(true)}>
          -
        </Button>
        <Dialog
          open={removeDialogOpen}
          onClose={handleRemoveDialogOpen(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{`Delete event ${event.text}`}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              This deletes event permanently.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button className={classes.button} onClick={handleEventRemove(event._id)}>
              Yes
            </Button>
            <Button className={classes.button} onClick={handleRemoveDialogOpen(false)} autoFocus>
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </TableCell>
    </TableRow>
  )
}

export default SettingsRowEvent
