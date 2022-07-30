import type { NextPage } from 'next'
import Head from 'next/head'
import { BANXA } from '../src/component/banxa'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>BANXA integration</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BANXA />
    </div>
  )
}

export default Home
