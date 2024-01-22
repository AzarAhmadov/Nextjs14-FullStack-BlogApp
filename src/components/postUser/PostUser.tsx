import { getUser } from '@/lib/data';
import { PostUserProps } from '@/types/types';
import Image from 'next/image'
import React from 'react'
import { CgCalendarDates } from 'react-icons/cg';

interface userProps {
    data: PostUserProps;
}

const PostUser: React.FC<userProps> = async ({ data }) => {

    const user = await getUser(data.userId)

    return (
        <div className="author">
            <div>
                <Image width={35} height={35} src='/images/man.png' alt='man' />
                <span>
                    {user.username}
                </span>
            </div>
            <span className="date">
                <CgCalendarDates /> {user.createdAt.toString().slice(4, 16)}
            </span>
        </div>
    )
}

export default PostUser
