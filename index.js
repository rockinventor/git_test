const express = require('express')
const app = express()
var cors = require('cors');
const port = 3000

app.use(cors()) // () 안이 비어있으면 모든 요청에 대해 허용을 해준다는 뜻 () 안에 조건을 넣을 수 있음

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/dog', (req, res) => {
    res.send('<h1>강아지</h1>')
})

app.get('/cat', (req, res) => {
    res.json({sound: '야옹'}) // send 대신에 json 을 써도 된다.
})

app.get('/user/:id', (req, res) => {
    // params로 받는 방법
    // const q = req.params;
    // console.log(q);
    // res.json({'userId': q.id});


    // query 로 받는 방법
    const q = req.query;
    console.log(q);
    res.json(q);
})


app.get('/sound/:name', (req, res) => {
    const { name } = req.params;
    console.log(name);

    if(name == 'dog' ) {
        res.json({'sound': '멍멍'});
    } else if(name == 'cat') {
        res.json({'sound':'야옹'});
    } else {
        res.json({'sound': '알수없음'});
    }

})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// get방식은 주소창을 이용하는 방법이라고 생각하면 됨.
// get을 이용하는 방법은  params, query  두가지가 있음.
// params로 받을때 /user/bluesmaker 이런식으로 받음
// query로 받을 때 id 뒤에 ?key=value&key=value형태임
// ex) http://localhost:3000/user/bluesmaker?first=blues&last=maker&age=30

// axios 로 요청 해서 express 로 응답하는 형태 
// axios로 요청하면 응답을 받아오는데 express는 응답할 것들을 미리 만들어 놓는 곳이라고 보면 됨.

// post방식은 주소창이 아니라 axios or fetch같은 걸로 요청하는 데 이럴 경우 body에 값이 담김.


// https://evan-moon.github.io/2020/05/21/about-cors/ 
// cors에 대한 설명