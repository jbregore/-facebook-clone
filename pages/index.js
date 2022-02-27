import Head from 'next/head'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
import { delBasePath } from 'next/dist/shared/lib/router/router'
import firebase from "../firebase";

const db = firebase.firestore();

export default function Home({ posts }) {
  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>!Facebook</title>
      </Head>

      {/* Header */}
      <Header />


      <main className='flex'>
        {/* Sidebar */}
        <Sidebar/>
        {/* Feed */}
        <Feed posts={posts}/>

        {/* Widgets */}
        <Widgets />
      </main>


    </div>
  )
}

export async function getServerSideProps(){
  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();

  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null
  }))

  return {
    props : {
      posts: docs
    }
  };
}
