import { getUser } from '@/lib/data';
import { PostUserProps } from '@/types/types';
import React from 'react'
import { CgCalendarDates } from 'react-icons/cg';
import userImg from '../../../public/images/user.jpeg'
interface userProps {
    data: PostUserProps;
}

const PostUser: React.FC<userProps> = async ({ data }) => {

    const user = await getUser(data.userId)

    return (
        <div className="author">
            <div>
                <div className='profile-img'>
                    <img src={user?.img} alt={user?.username} />
                </div>
                <span className='username'>
                    {user?.username}
                </span>
            </div>
            <span className="date">
                <CgCalendarDates /> {user?.createdAt.toString().slice(4, 16)}
            </span>
        </div>
    )
}

export default PostUser
