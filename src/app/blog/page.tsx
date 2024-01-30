import React from 'react'
import { getPosts } from '@/lib/data'
import PostCards from '@/components/postCards/PostCards'
import { PostProps } from '@/types/types'

export const metadata = {
    title: 'Blog Page',
    description: 'Blog description'
}

const page: React.FC = async () => {

    const posts = await getPosts()

    return (
        <div className="post-row">
            {posts.length > 0 ? (
                posts.reverse().map((post: PostProps) => (
                    <PostCards post={post} key={post.id} />
                ))
            ) : (
                <p className='no-blogs'>No blogs yet.</p>
            )}
        </div>
    )
}

export default page
