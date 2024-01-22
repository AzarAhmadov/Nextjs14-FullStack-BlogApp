import React from 'react'
import spinner from '../../public/images/spinner.gif'
import Image from 'next/image'

const loading = () => {
    return (
        <section id='spinner'>
            <Image width={135} src={spinner} alt="spinner" />
        </section>
    )
}

export default loading
