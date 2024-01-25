import PostUser from '@/components/postUser/PostUser';
import { auth } from '@/lib/auth';
import { getPost } from '@/lib/data';
import { redirect } from 'next/navigation';
import React, { Suspense } from 'react';
interface PageDetailProps {
    params: {
        slug: string;
    };
}

export const generateMetadata = async ({ params }: PageDetailProps) => {
    const { slug } = params;
    const data = await getPost(slug);

    return {
        title: data?.title,
        description: data?.desc,
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
                    <h3 className='title'> {data?.title} </h3>
                    <Suspense fallback={<div className='loading-time'> Loading... </div>}>
                        <PostUser data={data} />
                    </Suspense>
                    <div dangerouslySetInnerHTML={{ __html: data.desc }} />
                </div>
            </div>
        </section>
    );
};

export default Page;
