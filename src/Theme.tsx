import { createTheme } from '@mui/material'
import { red } from '@mui/material/colors'

export const theme = createTheme({
  typography: {
    allVariants: {
      color: 'white',
    },
  },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
})
