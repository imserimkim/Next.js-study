import { executeQuery } from './db';

const handler = async (req, res) => {

  const { method, body, query } = req;

  //insert
  const seletDataId = async () => {
    let data = await executeQuery('select * from mytest2 where id=?', [query.id]);
      res.json(data)
  }

  //업데이트
  const updateDataId = async () => {
    let { name, email, date } = body;

    let data = await executeQuery( 
      'update mytest2 set name=?, email=?, date=? where id=?',
      [name, email, date, query.id]
    )
    res.json(data)
  }
  //삭제
  const deleteData = async () => {
    let data = await executeQuery(
      'delete from mytest2 where id=?', [query.id]
    );
    res.json(data);
  }
  switch (method) {
    case "GET": seletDataId(); break;
    case "PUT": updateDataId(); break;
    case "DELETE": deleteData(); break;
  }
}
export default handler;