import AdminPostForm from '@/components/AdminPostForm/AdminPostForm';
import AdminPosts from '@/components/AdminPosts/AdminPosts';
import AdminUsers from '@/components/AdminUsers/AdminUsers';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import React, { Suspense } from 'react'

const page: React.FC = async () => {

    const session = await auth();

    const userId = '65b297e01424735511bbe770';

    if (!(session && session.user && session.user.email === 'admin@gmail.com')) {
        redirect('/');
    } else if (!session) {
        redirect('/login');
    }

    return (
        <main>
            <div className="admin-row">
                <div>
                    <Suspense fallback={<div className='loading-time'> Loading... </div>}>
                        <AdminPosts />
                    </Suspense>
                    <Suspense fallback={<div className='loading-time'> Loading... </div>}>
                        <AdminUsers />
                    </Suspense>
                </div>
                <Suspense fallback={<div className='loading-time'> Loading... </div>}>
                    <AdminPostForm userId={userId} />
                </Suspense>
            </div>
        </main>
    )
}

export default page
