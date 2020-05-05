const app = require('express')()
module.exports = { path: '/api', handler: app }

app.get('/hello', (req, res) => {
    console.log('hello nuxt in text')
    res.send('world')
})

app.get('/projects', (req, res) => {
    const mysql = require('mysql');
    const connection = mysql.createConnection({
      host : 'localhost',
      user : process.env.MYPAGE_DB_USER,
      database: 'mypage',
      password: process.env.MYPAGE_DB_PASSWORD
    });
    var ret=[];
    connection.connect();
    connection.query('SELECT * from project;', function(error, row, fields){
      if (error) {
        console.log(error);
      } 
      var dat = [];
      for (var i = 0;i < row.length; i++) {
        dat.push({id: row[i].id, name: row[i].name});
      }
      ret = JSON.stringify(dat);
      res.header('Content-Type', 'application/json; charset=utf-8')
      res.send(ret)
    });
});