
import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  username: string;
  email: string;
  avatar_url?: string;
  location?: string;
  bio?: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(localStorage.getItem('motoconnect_token'));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on app start
    const savedToken = localStorage.getItem('motoconnect_token');
    const savedUser = localStorage.getItem('motoconnect_user');
    
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Mock login for frontend demo - replace with actual API call
      const mockUser = {
        id: '1',
        username: 'rider123',
        email: email,
        avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        location: 'Los Angeles, CA',
        bio: 'Passionate motorcycle enthusiast'
      };
      
      const mockToken = 'mock_jwt_token_' + Date.now();
      
      setUser(mockUser);
      setToken(mockToken);
      localStorage.setItem('motoconnect_token', mockToken);
      localStorage.setItem('motoconnect_user', JSON.stringify(mockUser));
    } catch (error) {
      throw new Error('Login failed');
    }
  };

  const register = async (username: string, email: string, password: string) => {
    try {
      // Mock registration - replace with actual API call
      const mockUser = {
        id: '2',
        username: username,
        email: email,
        avatar_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
      };
      
      const mockToken = 'mock_jwt_token_' + Date.now();
      
      setUser(mockUser);
      setToken(mockToken);
      localStorage.setItem('motoconnect_token', mockToken);
      localStorage.setItem('motoconnect_user', JSON.stringify(mockUser));
    } catch (error) {
      throw new Error('Registration failed');
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('motoconnect_token');
    localStorage.removeItem('motoconnect_user');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
