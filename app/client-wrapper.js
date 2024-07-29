// app/client-wrapper.js
'use client'; 
import { LeftNavProvider } from '../context/LeftNavContext';
import LeftNav from './components/LeftNav'; 
import { LoginProvider } from '../context/LoginContext'; // Import LoginProvider

export default function ClientWrapper({ children }) {
  return (
    <LoginProvider> {/* Wrap with LoginProvider */}
      <LeftNavProvider>
        <LeftNav /> 
        {children} 
      </LeftNavProvider>
    </LoginProvider>
  );
}
