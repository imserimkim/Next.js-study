import HeadMeta from '@/pages/src/HeadMeta'
import Layout from '@/pages/src/Layout'
import List from '@/pages/src/List'


export default function Home() {
  return (
    <>
      <Layout>
        <HeadMeta title = "indext" />
        <List />
      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  const res = await axios.get('http://localhost:3000/api')
  const data = res.data
}