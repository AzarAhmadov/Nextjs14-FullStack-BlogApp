import { GithubLogin } from '@/lib/action';
import React from 'react';

const LoginPage: React.FC = async () => {

    return (
        <form action={GithubLogin}>
            <button> Login with github </button>
        </form>
    );
};

export default LoginPage;
