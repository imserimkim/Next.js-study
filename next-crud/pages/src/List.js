import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'

const List = () => {
  const [ data, setData ] = useState([]);
  const router = useRouter();

  function dataget() {
    axios.get('/api/hello')
      .then(res=>{
        setData(res.data);
      })
  }

  function dataDelete(id) {
    axios.delete('/api/hello', { data: id })
    // window.location.reload();
    dataget();
  }

  useEffect(dataget, [data])


  if (!data.length) return(<>loading...<Link href="/src/Write">글쓰기</Link> </>);
  return (
    <>
        <article>
          <h2>LIST</h2>
          <ul>
            {
              data.map(obj => (
                <li key={obj.id}>
                  {obj.name} / {obj.email} / {obj.tel}
                  <button onClick={() => router.push({ pathname:'/src/Update', query: obj })}>수정</button>
                  <button onClick={() => dataDelete(obj.id)}>삭제</button>

                </li>
              ))
            }
          </ul>
        </article>
        <Link href="/src/Write">글쓰기</Link>
    </>
  )
}

export default List