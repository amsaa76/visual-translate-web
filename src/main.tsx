import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('Main.tsx loading...');

const rootElement = document.getElementById("root");

if (rootElement) {
  console.log('Root element found, rendering App...');
  createRoot(rootElement).render(<App />);
  console.log('App rendered successfully!');
} else {
  console.error('Root element not found!');
}
