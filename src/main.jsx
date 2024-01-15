import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: import.meta.env.VITE_DATADOG_APPLICATION_ID,
    clientToken: import.meta.env.VITE_DATADOG_CLIENT_TOKEN,
    site: 'us5.datadoghq.com',
    service: import.meta.env.VITE_DATADOG_SERVICE,
    env: import.meta.env.VITE_ENVIRONMENT,
    // Specify a version number to identify the deployed version of your application in Datadog 
    // version: '1.0.0', 
    sessionSampleRate: 100,
    sessionReplaySampleRate: 100,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'mask-user-input',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
