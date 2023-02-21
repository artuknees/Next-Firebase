import Head from 'next/head'
import Form from '../components/Form';


export default function Home({productos}) {
  return (
    <div>
      <Head>
        <title>Next+Firebase</title>
        <meta name="" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='w-full min-h-screen h-full'>
        <div>
          <Form/>
        </div>
      </main>
    </div>
  )
}