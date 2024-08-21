'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const Appbar = () => {
    const router = useRouter();
    return (
        <div style={{ width: '100%', padding: '20px', backgroundColor: 'grey' }}>
            <button onClick={() => router.push('/api/auth/signin')}>Signin</button>
        </div>
    )
}

export default Appbar