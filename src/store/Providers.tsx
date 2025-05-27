import React from 'react';
import { AuthProvider } from './AuthContext';
import { ThemeProvider } from './ThemeContext';

interface ProvidersProps {
    children: React.ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <AuthProvider>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </AuthProvider>
    );
}; 