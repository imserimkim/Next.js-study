import axios from 'axios';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Update = () => {

    const router = useRouter();
    const { query } = router;

    let initial = {
        id: query.id,
        name: query.name,
        email: query.email,
        tel: query.tel
    }
    const [inputValue, setValue] = useState(initial);

    function valueChange(e) {
        let t = e.target;
        setValue((obj) => {
            return { ...obj, [t.name]: t.value }
        })
    }

    function create(e) {
        e.preventDefault();
        axios.put('/api/hello', { ...inputValue, id: query.id }).then(res => console.log(res))
        // router.push('/');
    }


    return (
        <div>
            <form onSubmit={create}>
                <p><input value={inputValue.name} onChange={valueChange} type="text" placeholder='이름' name="name" /></p>
                <p><input value={inputValue.email} onChange={valueChange} type="email" placeholder='메일' name="email" /></p>
                <p><input value={inputValue.tel} onChange={valueChange} type="tel" placeholder='연락처' name="tel" /></p>
                <p><input type="submit" value="저장" /></p>
            </form>
        </div>
    )
}

export default Update