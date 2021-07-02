const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  let result = '';
  let type = req.query.type
  let number = req.query.number

  if(isNaN(number)){
    result = 'yang anda inputkan bukanlah angka!'
  }

  else{
    switch(type){
      case 'segitiga':
        for(let i=0; i<number.length; i++){
          result += number[i].toString()
          for(let j=0; j<i+1; j++){
            result += '0'
          }
          result += '<br />'
        }

        break;

      case 'ganjil':
        for(let i=1; i<=number; i++){
          if(i % 2 === 1){
            result += i.toString()+' '
          }
        }

        break;

      case 'prima':
        for(let i=2; i<=number; i++){
          let isPrima = true
          for(j=2; j<i; j++){
            if(i % j === 0){
              isPrima = false
            }
          }
          if(isPrima){
            result += i.toString()+' '
          }
        }

        break;
    }
  }

  res.send(result)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})