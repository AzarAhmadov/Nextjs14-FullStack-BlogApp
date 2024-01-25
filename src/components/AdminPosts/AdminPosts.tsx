import React from 'react'
import { getPosts } from '@/lib/data'
import NoImg from '../../../public/images/no-image.jpeg'
import { deletePost } from '@/lib/action'

const AdminPosts: React.FC = async () => {

    const posts = await getPosts()

    return (
        <section style={{ marginBottom: '25px' }} className='admin-area'>
            <h3> Posts </h3>
            {posts.slice().reverse().map((post) => (
                <div className='row' key={post.id}>
                    <div>
                        <img src={post.img ? post.img : '/images/no-image-jpeg'} alt={post.title} />
                        <span>{post.title}</span>
                    </div>
                    <form action={deletePost}>
                        <input type="hidden" name="id" value={post.id} />
                        <button type="submit">Delete</button>
                    </form>
                </div>
            ))}
        </section>
    )
}

export default AdminPosts
