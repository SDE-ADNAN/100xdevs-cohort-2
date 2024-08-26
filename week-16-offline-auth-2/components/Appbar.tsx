'use client'
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation'
import React from 'react'

const Appbar = () => {
    const router = useRouter();
    const session = useSession();
    return (
        <div style={{ width: '100%', padding: '20px', backgroundColor: 'grey' }}>
            <button onClick={() => signIn()}>Sign In</button>
            <button onClick={() => signIn()}>Logout </button>
            {JSON.stringify(session)}
        </div>
    )
}

export default Appbar