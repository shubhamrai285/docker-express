 const mysql=require('mysql')


 function connect(){
     const connection=mysql.createConnection({

        host:'192.168.1.218',
        database:'myapp_db',
        user:'root',
        password:'root',
        port:9099
     });

     connection.connect()
     return connection
 }

 module.exports={
     connect:connect
 }