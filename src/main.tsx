import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Import the reset CSS for antd (instead of the dark CSS file).
import 'antd/dist/reset.css';
import { ConfigProvider, theme } from 'antd';

const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm, // Enable dark mode
        token: {
          colorPrimary: '#52c41a', // Green primary color
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
