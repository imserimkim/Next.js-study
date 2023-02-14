import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

const Write = () => {
  const router = useRouter();
  const initial = { id: '', name:'', email:'', tel:'' }
  const [inputValue, setValue] = useState(initial);
  function valueChange(e) {
    let t = e.target; 
    setValue((obj)=> {
      return {...obj, [t.name]: t.value} 
    })
  }
  function create(e) {
    e.preventDefault();
    // get, post, put, delete
    axios.post('/api/hello', { ...inputValue, id: Date.now().toString() })
    router.push('/'); 
  }

  return (
    <div>
      <form onSubmit={create}>
        <p><input onChange={valueChange} type="text" placeholder='이름' name="name" /></p>
        <p><input onChange={valueChange} type="email" placeholder='메일' name="email" /></p>
        <p><input onChange={valueChange} type="tel" placeholder='연락처' name="tel" /></p>
        <p><input type="submit" value="저장" /></p>
      </form>
    </div>
  )
}

export default Write