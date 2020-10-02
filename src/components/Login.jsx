import React from 'react'
import { Container, TextField, Button } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { buttonOne } from '../styleObjects/globalStyles'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
    button: buttonOne,
  })
)

const Login = ({ username, password, handleUsername, handlePassword, submit, message }) => {
  const classes = useStyles()

  return (
    <Container>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={submit}>
        <div>
          <TextField id="username" value={username} onChange={handleUsername} label="Username" />
        </div>
        <div>
          <TextField
            id="password"
            value={password}
            onChange={handlePassword}
            label="Password"
            type="password"
          />
        </div>
        <div>
          <Button className={classes.button} type="submit">
            Log in
          </Button>
        </div>
      </form>
    </Container>
  )
}

export default Login
