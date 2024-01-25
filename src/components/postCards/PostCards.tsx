import Link from 'next/link'
import React, { memo } from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { CgCalendarDates } from "react-icons/cg";
import { PostProps } from '@/types/types';
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
interface PageDetailProps {
    post: PostProps;
}

const PostCards: React.FC<PageDetailProps> = async ({ post }) => {

    const session = await auth();

    if (!session) {
        redirect('/login');
    }

    return (
        <section className='post-cards'>
            <div className="post-content">
                <div className='image-container'>
                    <img src={post.img} alt='post' />
                </div>
                {/* <span className='category'>
                    {post?.category}
                </span> */}
                <h5>
                    {post?.title}
                </h5>
                <span className="date">
                    <CgCalendarDates />
                    {post.createdAt.toString().slice(4, 16)}
                </span>
            </div>
            <div className="read-more">
                <Link href={`/blog/${post.slug}`}>
                    Read more
                    <FaLongArrowAltRight />
                </Link>
            </div>
        </section>
    )
}

export default memo(PostCards)
