# todo-demo-api

## Node version
```
v10.0.0
```

## package
```
$ npm i -g sequelize-cli
$ npm i
```

## set config.json
set file "config/config.json" like this
``` config/config.json

{
  "development": {
    "username": "root",
    "password": null,
    "database": "todo_list",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "todo_list_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "",
    "password": null,
    "database": "todo_list",
    "host": "127.0.0.1",
    "dialect": "mysql",
  }
}
```

## create db
mysql
```
CREATE DATABASE todo_list;
```

## running migration
```
$ sequelize db:migrate
```

## start
```
$ npm start
```
