import LoginForm from '@/components/LoginForm/LoginForm';
import { auth } from '@/lib/auth';
import { getUser } from '@/lib/data';
import { redirect } from 'next/navigation';
import React from 'react';

export const metadata = {
    title: 'Login Page',
    description: 'Login description'
}

const LoginPage: React.FC = async () => {

    const session = await auth();

    if (session?.user?.email === 'admin@gmail.com') {
        redirect('/admin');
    } else if (session) {
        redirect('/blog');
    }

    return (
        <main>
            <LoginForm />
        </main>
    );
};

export default LoginPage;
