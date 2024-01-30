'use client'

import React from 'react'
import { GithubLogin, login } from '@/lib/action';
import { FaGithub } from "react-icons/fa";
import { useFormState } from 'react-dom';
import Link from 'next/link';

const LoginForm = () => {

    const [state, formAction] = useFormState(login, undefined);

    return (
        <section id='login-form'>
            <form className='form' action={formAction}>
                <input required type="text" name="username" placeholder='User Name' />
                <input required type="password" name="password" placeholder='Password' />
                <button> Login with Credentials </button>
            </form>
            <form action={GithubLogin}>
                <button className='login-github'> Login with github <FaGithub /> </button>
            </form>
            {state?.error && <div style={{ marginBottom: '13px', marginTop: '13px' }} className='error'> {state.error}  </div>}
            <Link href='/register'>
                Don't have an account ? <b>Register</b>
            </Link>
        </section>
    )
}

export default LoginForm
