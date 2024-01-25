import React from 'react'
import Header from '../Header'
import { auth } from '@/lib/auth'

const Navbar: React.FC = async () => {

    const session = await auth()

    return (
        <Header session={session} />
    )
}

export default Navbar