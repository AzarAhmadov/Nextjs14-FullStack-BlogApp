'use client'
import Link from 'next/link'
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { CgCalendarDates } from "react-icons/cg";
import { PostProps } from '@/types/types';

interface PageDetailProps {
    post: PostProps;
}

const PostCards: React.FC<PageDetailProps> = async ({ post }) => {

    return (
        <section className='post-cards'>
            <div className="post-content">
                <div className='image-container'>
                    <img src={post.img} alt='post' />
                </div>
                <span className='category'>
                    {post.category}
                </span>
                <p>
                    {post.title}
                </p>
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

export default PostCards
