import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import MainScreen from './components/MainScreen';
import GitHub from './components/GitHub';


function App() {

  return (
    <MantineProvider>
      <MainScreen></MainScreen>
      <GitHub></GitHub>
    </MantineProvider>
  )
}

export default App
