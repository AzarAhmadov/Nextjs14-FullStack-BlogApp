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
        <main>
            <div className="post-row">
                {posts.map((post: PostProps) => (
                    <PostCards post={post} key={post.id} />
                ))}
            </div>
        </main>
    )
}

export default page
