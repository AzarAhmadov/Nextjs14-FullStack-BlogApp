import PostUser from '@/components/postUser/PostUser';
import { getPost } from '@/lib/data';
import React from 'react';
interface PageDetailProps {
    params: {
        slug: string;
    };
}

const Page: React.FC<PageDetailProps> = async ({ params }) => {

    const { slug } = params;

    const data = await getPost(slug);

    return (
        <main>
            <section id='blog-detail'>
                <div className="row">
                    <div className="left">
                        <img src={data?.img} alt='blog_detail' />
                    </div>
                    <div className="right">
                        <h4> {data.title} </h4>
                        <PostUser data={data} />
                        <p>{data.desc}</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Page;
