import React, { createContext, useContext, useState, useEffect } from 'react';
import { Preferences } from '@capacitor/preferences';
interface User {
    FullName: string;
    MobileNumber: string;
    UsersID: string;
    // Add other user properties as needed
}

interface AuthContextType {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check localStorage on initial load
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const userData = JSON.parse(storedUser);
            if (userData.UsersID) {
                setUser(userData);
                setIsAuthenticated(true);
            }
        }
        const loadUser = async () => {
            const { value } = await Preferences.get({ key: 'user' });
            if (value) {
                const userData = JSON.parse(value);
                if (userData.UsersID) {
                    setUser(userData);
                    setIsAuthenticated(true);
                }
            }
        };
        loadUser();
    }, []);

    const login = async (userData: User) => {
        setUser(userData);
        setIsAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(userData));
        await Preferences.set({
            key: 'user',
            value: JSON.stringify(userData)
        });
    };

    const logout = async () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('user');
        await Preferences.remove({ key: 'user' });
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}; 