import Image from 'next/image'
import React from 'react'
import { CgCalendarDates } from "react-icons/cg";

const page: React.FC = () => {
    return (
        <main>
            <section id='blog-detail'>
                <div className="row">
                    <div className="left">
                        <Image fill src='/images/post.png' alt='blog_detail' />
                    </div>
                    <div className="right">
                        <h4> Lorem ipsum dolor sit amet consectetur. </h4>
                        <div className="author">
                            <div>
                                <Image width={35} height={35} src='/images/man.png' alt='man' />
                                <span>
                                    Ernie Smith
                                </span>
                            </div>
                            <span className="date">
                                <CgCalendarDates />  August 20, 2024
                            </span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ea? Deleniti distinctio in vitae architecto expedita minus, eveniet consequatur? Quia provident inventore similique dicta ea blanditiis suscipit. Corrupti alias sint reprehenderit aliquam eveniet tempore doloremque quod possimus praesentium, temporibus molestias ipsum inventore ad ullam ipsam! Saepe qui maxime incidunt nulla laborum aperiam aspernatur doloremque voluptatum optio, debitis aut deleniti repellat ut minus. Magnam quod omnis magni aut esse asperiores officia quia recusandae ex, consequuntur possimus reiciendis eius laborum rerum perferendis minima laboriosam est adipisci unde excepturi sint libero sed hic. Ut in illum totam itaque consequuntur assumenda sunt illo? Perspiciatis?</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default page
