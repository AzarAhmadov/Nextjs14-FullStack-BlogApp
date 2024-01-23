import Image from 'next/image'
import React from 'react'

const page: React.FC = () => {
    return (
        <main>
            <section id='register'>
                <div className="row">
                    <div className="right">
                        <form className='form'>
                            <input type="text" placeholder='username' name='username' />
                            <input type="email" placeholder='email' name='email' />
                            <input type="password" placeholder='password' name='password' />
                            <input type="password" placeholder='password again' name='passwordRepad' />
                            <button> Register </button>
                        </form>
                    </div>
                    <div className="left">
                        <Image fill src='/images/register.png' alt='register' />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default page
