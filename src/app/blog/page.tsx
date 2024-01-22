
import PostCards from '@/components/postCards/PostCards'
import { getPosts } from '@/lib/data'
import { PostProps } from '@/types/types'
import React from 'react'

const page: React.FC = async () => {

    const posts = await getPosts()

    console.log(posts)

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
