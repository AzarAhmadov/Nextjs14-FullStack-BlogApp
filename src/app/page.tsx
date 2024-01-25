import { sosials } from '@/components/constants/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <main>
      <section id="home">
        <div className='left'>
          <h1> Creative Thoughts Agency. </h1>
          <p>
            Explore the latest in tech innovation with us. From AI to blockchain, we uncover trends and insights shaping the digital world.
            Join us to unleash your tech curiosity and shape tomorrow's digital landscape!
            <span>
              #TechTrends #InnovationUnleashed 🌐
            </span>
          </p>
          <ul className='links'>
            <li>
              <Link className='about' href='/about'> Learn more </Link>
            </li>
            <li>
              <Link className='contact' href='/contact'> Contact </Link>
            </li>
          </ul>
          <ul className="sosial">
            {
              sosials.map((el, idx) => (
                <a href={el.path} target='_blank' key={idx}>
                  {el.icon}
                </a>
              ))
            }
          </ul>
        </div>
        <div className='right'>
          <Image fill src='/images/banner.png' alt='Hero' />
        </div>
      </section>
    </main>
  )
}

export default Home
