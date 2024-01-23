import Image from 'next/image'
import React from 'react'

const loading = () => {
    return (
        <section id='spinner'>
            <Image priority={false} width={135} height={135} src='/images/spinner.gif' alt="spinner" />
        </section>
    )
}

export default loading
