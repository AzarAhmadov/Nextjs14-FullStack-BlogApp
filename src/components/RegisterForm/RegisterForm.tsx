'use client'
import React, { useEffect } from 'react'
import { register } from '@/lib/action'
import Image from 'next/image'
import { useFormState } from 'react-dom'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export interface FormProps {
    success?: boolean;
    error?: string;
}

const RegisterForm = () => {

    const [state, formAction] = useFormState<FormProps>(register, undefined);

    const router = useRouter()

    useEffect(() => {
        state?.success && router.push('/login')
    }, [state?.success, router])

    return (
        <section id='register'>
            <div className="row">
                <div className="right">
                    <form action={formAction} className='form'>
                        <input required type="text" placeholder='Username' name='username' />
                        <input required type="email" placeholder='Email' name='email' />
                        <input required type="password" placeholder='Password' name='password' />
                        <input required type="password" placeholder='Password Again' name='passwordRepeat' />
                        <button
                            type="submit"
                        >
                            Register
                        </button>
                    </form>
                    {state?.error && <div style={{ marginBottom: '13px', marginTop: '13px' }} className='error'> {state.error}  </div>}
                    <Link href='/login'> Have an account ? <b>Login</b> </Link>
                </div>
                <div className="left">
                    <Image fill src='/images/register.png' alt='register' />
                </div>
            </div>
        </section>
    )
}

export default RegisterForm
