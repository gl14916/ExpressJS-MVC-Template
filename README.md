# ExpressJS MVC Template

This is a template for building MVC projects with ExpressJS (database: MongoDB).
Based on (this tutorial)[https://code.tutsplus.com/tutorials/build-a-complete-mvc-website-with-expressjs--net-34168]

## Prerequisites [Tested versions]

```MongoDB [4.0.3]```  
```NodeJS [6.x]```
```npm [6.7.0]```
```ExpressJS [4.16.0]```

## Documentation

### Installation

```git clone git@github.com:gl14916/ExpressJS-MVC-Template.git```
```cd ExpressJS-MVC-Template```
```npm install```

### Database
Configurations located in /config/db.js
database name: ```[database name]```
database port: ```[database port]```
database url: ```[database url]```
database username: ```[database username]```
database password: 	```[database password]```

### Server Actions
#### Starting the server
```npm start [local | staging | production]```
##### Ports
* ```local (default): 3000```
* ```staging: 3001```
* ```production: 3002```

#### Testing the server
```npm test```