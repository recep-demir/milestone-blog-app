import { createTheme, ThemeProvider } from '@mui/material';
import AppRouter from './router/AppRouter'


function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#454F5B",
      },
      secondary: {
        main: "#454F5B",
        second: "#161C24",
      },
    },
  });


  return (
    <ThemeProvider theme = {theme}>
      <AppRouter/>

      </ThemeProvider>
    

  


    
    
  )
}

export default App
