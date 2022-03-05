const env = process.env.NODE_ENV;
module.exports=
{
  "type": "mysql",
  "host": env==='development'? 'localhost':process.env.DBHOST,
  "port": 3306,
  "username": "test",
  "password": "111111",
  "database": "nestjsrealworld",
  "entities": [`${env === 'development' ? 'src/' : 'dist/'}**/**.entity{.ts,.js}`],
  "synchronize": env === 'development'? true:false
}