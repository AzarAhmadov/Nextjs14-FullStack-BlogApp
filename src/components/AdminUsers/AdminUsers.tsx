import React from 'react'
import { getUsers } from '@/lib/data'
import { deleteUser } from '@/lib/action'

const AdminUsers: React.FC = async () => {

    const users = await getUsers()

    return (
        <section className='admin-area'>
            <h3> Users </h3>
            {users.slice().reverse().map((user) => (
                <div className='row' key={user.id}>
                    <div>
                        <img src={user.img ? user.img : '/images/user.jpeg'} alt={user.title} />
                        <span>{user.username}</span>
                    </div>
                    <form action={deleteUser}>
                        <input type="hidden" name="id" value={user.id} />
                        <button type="submit">Delete</button>
                    </form>
                </div>
            ))}
        </section>
    )
}

export default AdminUsers


