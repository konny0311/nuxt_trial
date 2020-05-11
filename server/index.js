const app = require('express')()
module.exports = { path: '/api', handler: app }

app.get('/hello', (req, res) => {
    console.log('hello nuxt in text')
    res.send('world')
})

const colSize = 4

app.get('/projects', (req, res) => {
    const mysql = require('mysql');
    const connection = mysql.createConnection({
      socketPath : '/var/run/mysqld/mysqld.sock',
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
      var dat = {'projects': []};
      for (var i = 0;i < row.length; i++) {
        dat.projects.push({id: row[i].id, 
                           name: row[i].name,
                           technology: ['Python', 'OpenCV', 'AWS'],
                           summary: row[i].summary,
                           link:row[i].url,
                           flex:colSize});
      }
      ret = JSON.stringify(dat);
      res.header('Content-Type', 'application/json; charset=utf-8')
      res.send(ret)
    });
    connection.end();
});