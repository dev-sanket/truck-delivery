import React, { createContext, useContext, useState, useEffect } from 'react';

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
    }, []);

    const login = (userData: User) => {
        setUser(userData);
        setIsAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('user');
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