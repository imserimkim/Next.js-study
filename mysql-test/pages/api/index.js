
// import { executeQuery } from './db';

// const handler = async (req, res) => {
//   const {method, body, query } = req;


//   const selectDataId = async () =>{
//       let data = await executeQuery(
//         //DESC(내림차순), ASC(오름차순)
//         'select * from mytest2 where id DESC', [query.id]
    
//         // 'delete from mytest2 where id=?',[4]
    
//         // 'update mytest2 set name=? where id=?',
//         // ['콩순이', 3]
    
//         // 'insert into mytest2 (name,email,date) value (?,?,?)',
//         // ['김세림', 'mondo@email.com', '1203']
        
//         );
//         res.json(data);
      
//     }

//     const updateDataId = async () => {
//       let { name, email, date } = body;

//       let data = await executeQuery(
//         'update mytest2 set name=?, email=?, date=? where id=?',
//         [name, email, date, query.id]
//       );
//       res.json(data);
//     }

//     const deleteDataId = async () => {
//       let data = await executeQuery('delete from mytest2 where id=?',[query.id]);
//       res.json(data);
//     }    

//     switch(method) {
//       case "GET" : selectDataId(); break;
//       case "PUT": updateDataId(); break;
//       case "DELETE": deleteDataId(); break;
//     }

//   }



// export default handler;




import { executeQuery } from './db';

const handler = async (req, res) => {
  // DESC(내림차순), ASC(오름차순)
  const { method, body } = req;

  const seletData = async () => {
    try {
      let data = await executeQuery('select * from mytest2 order by id DESC', []);
      res.json(data)
    } catch (err) {
      res.send(err);
    }
  }

  const insertData = async () => {
    console.log(11);
    let { name, email, date } = body;

    let data = await executeQuery(
      'insert into mytest2 (name,email,date) value (?,?,?)',
      [name, email, date]
    );
    res.json(data)
  }

  
  switch (method) {
    case "GET": seletData(); break;
    case "POST": insertData(); break;
  }
}

export default handler;