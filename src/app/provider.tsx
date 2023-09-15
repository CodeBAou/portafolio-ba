"use client"
import React from 'react';
import {SessionProvider} from 'next-auth/react';

//Este provider es para usar el userProvider de next-auth

const Provider = ({children}:{children:React.ReactNode}) => {
    return(
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default Provider;