import Image from 'next/image'
import React from 'react'

export const metadata = {
    title: 'Contact Page',
    description: 'Contact description'
}

const page: React.FC = () => {
    return (
        <main>
            <section id='contact'>
                <div className="row">
                    <div className="left">
                        <Image fill src='/images/contact.png' alt='Contact' />
                    </div>
                    <div className="right">
                        <form className='form' action="">
                            <input type="text" placeholder='Name and Surname' />
                            <input type="email" placeholder='Email Adress' />
                            <input type="text" placeholder='Phone number (Optional)' />
                            <textarea placeholder='Message'></textarea>
                            <button type='submit'> Send </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default page
