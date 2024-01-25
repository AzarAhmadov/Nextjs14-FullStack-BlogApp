import PostUser from '@/components/postUser/PostUser';
import { auth } from '@/lib/auth';
import { getPost } from '@/lib/data';
import { redirect } from 'next/navigation';
import React from 'react';
interface PageDetailProps {
    params: {
        slug: string;
    };
}

export const generateMetadata = async ({ params }: PageDetailProps) => {
    const { slug } = params;
    const data = await getPost(slug);

    return {
        title: data.title,
        description: data.desc,
    };
};

const Page: React.FC<PageDetailProps> = async ({ params }) => {

    const session = await auth();

    if (!session) {
        redirect('/login');
    }

    const { slug } = params;

    const data = await getPost(slug);

    return (
        <section id='blog-detail'>
            <div className="row">
                <div className="left">
                    <img loading='lazy' src={data?.img} alt='blog_detail' />
                </div>
                <div className="right">
                    <h4> {data.title} </h4>
                    <PostUser data={data} />
                    <p>{data.desc}</p>
                </div>
            </div>
        </section>
    );
};

export default Page;
