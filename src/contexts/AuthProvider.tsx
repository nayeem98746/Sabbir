'use client';

import React, { createContext, useState, useContext } from "react";


type User = {
    id?: string;
    name?: string;
    email?: string;
};


interface AuthContextType {
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>;
    isResumeOpen: boolean;
    setIsResumeOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const initialUser: User = {};


const AuthContext = createContext<AuthContextType | undefined>(undefined);

type TAuthProviderProps = {
    children: React.ReactNode;
}

const AuthProvider = ({ children }: TAuthProviderProps) => {
    const [user, setUser] = useState<User>(initialUser);
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    const contextData: AuthContextType = {
        user,
        setUser,
        isResumeOpen,
        setIsResumeOpen
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () =>{
    const context =  useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
