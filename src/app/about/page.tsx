import Image from 'next/image'
import React from 'react'

export const metadata = {
    title: 'About Page',
    description: 'About description'
}

const page: React.FC = () => {
    return (
        <main>
            <section id='about'>
                <div className="row">
                    <div className="left">
                        <h3 className="title">
                            About Agency
                        </h3>
                        <h2>
                            We create digital ideas that are bigger, bolder braver and better
                        </h2>
                        <p>
                            We create digital ideas that are bigger, bolder, braver and better. We
                            believe in good ideas flexibility and precission We’re world’s Our
                            Special Team best consulting & finance solution provider. Wide range
                            of web and software development services.
                        </p>
                        <ul>
                            <li>
                                <span> 10 K+ </span>
                                <p>Year of experience</p>
                            </li>
                            <li>
                                <span> 234 K+ </span>
                                <p>People reacted</p>
                            </li>
                            <li>
                                <span> 5 K+ </span>
                                <p>Services and plugins</p>
                            </li>
                        </ul>
                    </div>
                    <div className="right">
                        <Image fill src='/images/about.png' alt='About' />
                    </div>
                </div>
            </section>
        </main >
    )
}

export default page
