import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { TransitionProvider } from './context/TransitionContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TransitionProvider>
      <App />
    </TransitionProvider>
  </StrictMode>,
);
