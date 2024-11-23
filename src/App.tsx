import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import MainScreen from './components/MainScreen';
import GitHub from './components/GitHub';
import Scripture from './components/Scripture';

function App() {

  return (
    <MantineProvider>
      <MainScreen></MainScreen>
      <Scripture></Scripture>
      <GitHub></GitHub>
    </MantineProvider>
  )
}

export default App;
