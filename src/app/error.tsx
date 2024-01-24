'use client'

import Image from 'next/image'
import React from 'react'

const page = () => {
    return (
        <section id='error'>
            <div>
                <Image fill alt='error' src='/images/error.png' />
            </div>
            <p>
                Something went wrong
            </p>
        </section>
    )
}

export default page
