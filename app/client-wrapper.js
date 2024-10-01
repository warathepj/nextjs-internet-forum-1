// app/client-wrapper.js
'use client'; 
import { LeftNavProvider } from '../context/LeftNavContext';
import { LoginProvider } from '../context/LoginContext'; 
import LeftNav from './components/LeftNav'; 

export default function ClientWrapper({ children }) {
  return (
    <LoginProvider> 
      <LeftNavProvider>
        <LeftNav /> 
        {children} 
      </LeftNavProvider>
    </LoginProvider>
  );
}
