import './App.css'
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import AppLayout from './components/AppLayout';
import Footer from './components/Footer';
import { initializeGA, trackPageView } from './analytics'
import { useEffect, useRef } from 'react';
import ReactGA from 'react-ga4';
import { HashRouter as BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import MainContent from './components/MainContent';
import Resources from './components/Resources';

type InstallChoiceResult = {
  outcome: 'accepted' | 'dismissed';
};

type BeforeInstallPromptEvent = Event & {
  userChoice: Promise<InstallChoiceResult>;
};


function App() {
  const deferredPrompt = useRef<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {

    const handleBeforeInstallPrompt = (e: Event) => {
      deferredPrompt.current = e as BeforeInstallPromptEvent;
      ReactGA.event({
        category: 'PWA',
        action: 'PWA Install Prompt Shown',
        label: 'PWA Install Prompt',
      });

   // this is not working to track the user install or rejection 
      
   /*   deferredPrompt.current.userChoice.then((choiceResult: InstallChoiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log("accepted")
            ReactGA.event({
              category: 'PWA',
              action: 'PWA Install Accepted',
              label: 'User Installed PWA',
            });
          } else {
            ReactGA.event({
              category: 'PWA',
              action: 'PWA Install Dismissed',
              label: 'User Dismissed PWA',
            });
          }
        }); */
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);


  useEffect(() => {
    initializeGA();
    trackPageView(window.location.pathname);
  }, []);

   {/* <button onClick={() => deferredPrompt.prompt()}>Install PWA</button> */}

  return (
    <HashRouter>
    <MantineProvider>
      <Routes>


      <Route path='/'
      element={
        <>
        <AppLayout>
          <MainContent />
        </AppLayout>
        <Footer />
        </>
      }>
      </Route>


      <Route path='resources'
      element={
        <>
        <AppLayout>
          <Resources />
        </AppLayout>
        <Footer />
        </>
      }>
      </Route>


      </Routes>
    </MantineProvider>
    </HashRouter>
    
  )
}

export default App;
