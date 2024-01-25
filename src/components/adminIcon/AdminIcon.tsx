import React from 'react';
import { auth } from '@/lib/auth';
import Link from 'next/link';
import { GrUserAdmin } from "react-icons/gr";

const AdminIcon: React.FC = async () => {
    const session = await auth();

    return (
        <>
            {session?.user?.email === 'admin@gmail.com' && (
                <div className='admin-icon'>
                    <Link href="/admin">
                        <GrUserAdmin />
                    </Link>
                </div>
            )}
        </>
    );
};

export default AdminIcon;
