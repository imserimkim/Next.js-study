import Nav from '@/src/Nav';
import '@/styles/common.scss'


export default function App({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  )
  
}
