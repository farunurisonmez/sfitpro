import React from 'react';
import AppBarComponent from "./components/bars/app.bar.component";
import {
    ThemeProvider,
    createTheme,
    CssBaseline
} from '@mui/material';
import AppLoadingAnimation from "./animation/loading/app.loading.animation";
import AppLoadingComponent from "./components/loadings/app.loading.component";
import MaintenanceModePage from './pages/maintenance/maintenance.mode.page';
import OnboardingLoadingComponent from "./components/loadings/onboarding.loading.component";


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      {/*<AppBarComponent/>*/}
        <CssBaseline />
        <main>
            <OnboardingLoadingComponent/>
        </main>
    </ThemeProvider>
  );
}

export default App;
