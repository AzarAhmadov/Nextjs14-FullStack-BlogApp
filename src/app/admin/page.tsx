import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import React from 'react'

const page: React.FC = async () => {

    const session = await auth();

    if (!(session && session.user && session.user.email === 'admin@gmail.com')) {
        redirect('/');
    } else if (!session) {
        redirect('/login');
    }
    
    return (
        <div>Admin</div>
    )
}

export default page
