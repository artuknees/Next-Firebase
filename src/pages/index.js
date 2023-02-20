import Head from 'next/head'
import Form from '../components/Form';
import firebaseApp from "../../firebase";
import { getFirestore , collection , addDoc , getDocs , doc ,deleteDoc , getDoc , setDoc } from 'firebase/firestore';
const db = getFirestore(firebaseApp);


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
          <Form productos={productos}/>
        </div>
      </main>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const querySnapshot = await getDocs(collection(db, 'producto'))
  const docs = [];
  querySnapshot.forEach((doc) => {
    docs.push({...doc.data(), id:doc.id})
  })

  return {
    props: {
      productos:docs
    }
  }
}