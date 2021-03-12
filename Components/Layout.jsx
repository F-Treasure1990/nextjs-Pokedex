import React from 'react'
import Head from 'next/head'

export const Layout = ({title, children}) => {
  return (
    <div className='bg-grrey-300'>
        <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto max-w-xl pt-8 min-h-screen">{children}</main>
    </div>
  )
}
