import { sosials } from '@/components/constants/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <section id="home">
      <div className='left'>
        <h1> Azar's Blog </h1>
        <p>
          Discover Web Technologies! Explore the latest in web technology news and innovations with us. Don't miss our insights into the technologies shaping the future of the internet! Let's explore the web world together.
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
  )
}

export default Home
