import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import { CgCalendarDates } from "react-icons/cg";

const PostCards: React.FC = () => {
    return (
        <section className='post-cards'>
            <div className="post-content">
                <div className='image-container'>
                    <Image fill src='/images/post.png' alt='post' />
                </div>
                <span className='category'>
                    Technology
                </span>
                <p>
                    The Impact of Technology on the Workplace: How Technology is Changing
                </p>
                <span className="date">
                    <CgCalendarDates />
                    August 20, 2022
                </span>
            </div>
            <div className="read-more">
                <Link href='/blog/blog-1'>
                    Read more
                    <FaLongArrowAltRight />
                </Link>
            </div>
        </section>
    )
}

export default PostCards
