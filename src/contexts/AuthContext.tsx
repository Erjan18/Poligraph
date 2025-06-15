import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string, phone?: string) => Promise<boolean>;
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Проверяем сохраненные данные пользователя
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      // Имитация API запроса
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Простая проверка (в реальном приложении это должно быть на сервере)
      const savedUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const existingUser = savedUsers.find((u: any) => u.email === email && u.password === password);
      
      if (existingUser) {
        const userData = { id: existingUser.id, name: existingUser.name, email: existingUser.email, phone: existingUser.phone };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        return true;
      }
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string, phone?: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      // Имитация API запроса
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const savedUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const existingUser = savedUsers.find((u: any) => u.email === email);
      
      if (existingUser) {
        return false; // Пользователь уже существует
      }
      
      const newUser = {
        id: Date.now().toString(),
        name,
        email,
        password,
        phone
      };
      
      savedUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(savedUsers));
      
      const userData = { id: newUser.id, name: newUser.name, email: newUser.email, phone: newUser.phone };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      
      return true;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};