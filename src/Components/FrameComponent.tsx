import React from 'react'
import { createMuiTheme, Theme } from '@material-ui/core'
import { grey, deepOrange, blueGrey, indigo } from '@material-ui/core/colors'
import { ThemeProvider } from '@material-ui/styles'

const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: indigo,
  },
})

export default ({ children }: any) => (
  <ThemeProvider theme={theme}>
    <style type="text/css">
      {`body { background-color: #efefef; padding: 0; margin: 0; }`}
    </style>
    {children}
  </ThemeProvider>
)
