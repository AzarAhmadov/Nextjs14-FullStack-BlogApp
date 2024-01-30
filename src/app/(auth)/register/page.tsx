import RegisterForm from '@/components/RegisterForm/RegisterForm'
import React from 'react'

export const metadata = {
    title: 'Register Page',
    description: 'Register description'
}

const page: React.FC = () => {
    return (
        <RegisterForm />
    )
}

export default page
