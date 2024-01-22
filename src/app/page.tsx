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
            Unlock the power of creativity with Creative Thoughts Agency! 🌟 Explore a world of inspiration and unleash your thoughts. Your platform, your voice - start crafting your own blogs today! ✨
            <span>
              #CreativityUnleashed #BlogYourStory
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
          <Image fill src='/images/banner.png' alt='hero' />
        </div>
      </section>
    </main>
  )
}

export default Home
