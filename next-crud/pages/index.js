import Layout from '@/pages/src/Layout'
import HeadMeta from '@/pages/src/HeadMeta'
import List from '@/pages/src/List'
import Update from '@/pages/src/Update'
import Write from '@/pages/src/Write'

// < 페이지 구성 > layout component 작성 - header, contents, footer 포함  
// Layout 안의 내용이 children

export default function Home() {


  return (
    <>
      <Layout>
        <HeadMeta title = "index" />
        <List />
      </Layout>
    </>
  )
}
