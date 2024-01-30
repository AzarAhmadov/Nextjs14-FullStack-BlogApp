import Image from 'next/image'
import React from 'react'

export const metadata = {
    title: 'About Page',
    description: 'About description'
}

const page: React.FC = () => {
    return (
        <section id='about'>
            <div className="row">
                <div className="left">
                    <h3 className="title">
                        About Azar's Blog
                    </h3>
                    <h2>
                        Exploring the Latest in Web Technologies
                    </h2>
                    <p>
                        We're dedicated to sharing the most recent developments in web technologies. From front-end frameworks to back-end solutions, we cover it all. Join us as we delve into the world of the latest web technologies, keeping you informed and inspired.
                    </p>
                    <ul>
                        <li>
                            <span> 3 K+ </span>
                            <p>Year of experience</p>
                        </li>
                        <li>
                            <span> 34 K+ </span>
                            <p>People reacted</p>
                        </li>
                        <li>
                            <span> 1 K+ </span>
                            <p>Daily visitors</p>
                        </li>
                    </ul>
                </div>
                <div className="right">
                    <Image fill src='/images/about.png' alt='About' />
                </div>
            </div>
        </section>
    )
}

export default page
