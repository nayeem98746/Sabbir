import AuthProvider from '@/contexts/AuthProvider';
import { SidebarProvider } from '@/contexts/SidebarContext';
import React from 'react';

const Providers = ({children}:{children:React.ReactNode}) => {
    return (
        <AuthProvider>
            <SidebarProvider>
                {children}
            </SidebarProvider>
        </AuthProvider>
    );
};

export default Providers;