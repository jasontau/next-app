'use client'

import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import cat from '@/public/images/blackcat_stencil.png'
import { Metadata } from 'next'
import { useState } from 'react'

export default function Home() {
  // const session = await getServerSession(authOptions)
  return (
    <main>
      {/* <h1>Hello {session && <span>{session.user!.name}</span>}</h1> */}
      <button onClick={async () => {
        const _ = (await import('lodash')).default


        const users = [
          { name: 'c' },
          { name: 'a' },
          { name: 'b' },
        ]

        const sorted = _.orderBy(users, ['name'])
        
      }}>Show Heavy</button>
      {/* <Link href='/users'>Users</Link> */}
      <ProductCard />
      <Image src={cat} alt={'cat'} />
      <div className='relative h-screen'>
        <Image
          src="https://bit.ly/react-cover"
          alt={'react cover'}
          fill
          className={'object-cover'}
          sizes="(max-width: 460px) 100vw, (max-width: 768px) 50vw, 33vw"
          quality={75}
          priority // do not lazy load
        />
      </div>

    </main>
  )
}

// export const metadata: Metadata = {
//   // overrides layout
//   title: '...'
// }
