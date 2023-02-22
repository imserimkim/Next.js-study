// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json(
    [
      { "name": "01", "url": "/img/01.jpg" },
      { "name": "02", "url": "/img/02.jpg" },
      { "name": "03", "url": "/img/03.jpg" },
      { "name": "04", "url": "/img/04.jpg" },
      { "name": "05", "url": "/img/05.jpg" },
      { "name": "06", "url": "/img/06.jpg" },
      { "name": "07", "url": "/img/07.jpg" },
      { "name": "08", "url": "/img/08.jpg" },
      { "name": "09", "url": "/img/09.jpg" },
      { "name": "10", "url": "/img/10.jpg" },
    ]
  )
}
