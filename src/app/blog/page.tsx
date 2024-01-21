import PostCards from '@/components/postCards/PostCards'
import React from 'react'

const page: React.FC = () => {
    return (
        <main>
            <div className="post-row">
                <PostCards />
                <PostCards />
                <PostCards />
                <PostCards />
            </div>
        </main>
    )
}

export default page
