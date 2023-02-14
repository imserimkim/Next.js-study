// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
let db = require('data/db.json');
let fs = require('fs');


export default function handler(req, res) {
  const {method, body} = req;
  switch (method) {
    case 'GET' : dataGet(); break;
    case 'POST' : dataCreate(); break;
    case 'PUT' : dataUpdate(); break;
    case 'DELETE' : dataDelete(); break;
  }

  
  function dataGet() {
    res.status(200).json(db) //상태코드를 json 형태로 응답 
  }
  
  function dataCreate() {
    db.push(body);
    saveData();
  }
  
  function dataUpdate() {
    let user = db.find(obj => obj.id == body.id);
    Object.assign(user, body)
    saveData();
  }

  function dataDelete() {
    db = db.filter(obj => obj.id !== body);
    saveData();
  }

  function saveData() {
    fs.writeFileSync('data/db.json', JSON.stringify(db));
    res.status(200).json(db)
  }

}
