import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <main>
            <section id='not-found'>
                <div className="img-area">
                    <Image alt='page not found' src='/images/not-found.png' fill />
                </div>
                <span> page not found  </span>
                <Link href='/'> Go back </Link>
            </section>
        </main>
    )
}

export default NotFound
