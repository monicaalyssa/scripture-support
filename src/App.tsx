import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import MainScreen from './components/MainScreen';


function App() {

  return (
    <MantineProvider>
      <MainScreen></MainScreen>
    </MantineProvider>
  )
}

export default App
