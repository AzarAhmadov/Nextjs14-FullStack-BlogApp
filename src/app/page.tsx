import { sosials } from '@/components/constants/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <main>
      <div className="row">
        <div>
          <h1> Creative Thoughts Agency. </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam quaerat Lorem, ipsum dolor.
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
        <div>
          <Image fill src='/images/banner.png' alt='banner' />
        </div>
      </div>
    </main>
  )
}

export default Home
