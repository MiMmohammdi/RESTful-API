
# First RESTful APIs

  

This is my first RESTful APIs project for **CRUD** operations by **Node.js** and **Express** framework.

**Mysql** and **Mongodb** are used in the Database, which are connected to the project by **ORM** (**Sequlizer**) and **ODM** (**Mongoose**).

**Swagger** was used for documentation and endpoint testing.

  

-  **Nodejs**

-  **Express**

-  **MySQL**

-  **MongoDB**

-  **Redis**

-  **JWT**

-  **Sequlize**

-  **Mongooes**

-  **Bcrypt**

-  **Swagger**

  
  

## Project setup

  

1. Install **dependencies**

  

> `npm install`

  

2. Run **mySQL** and **MongoDB**

3. Install **Redis Server** for **Linux**

  

> ````wget https://download.redis.io/releases/redis-6.2.6.tar.gz````

  

> `tar xzf redis-6.2.6.tar.gz`

  

> `cd redis-6.2.6`

  

> `make`

  

 4. If you are **Windows** user get this [address](https://github.com/microsoftarchive/redis/releases) and install Redis for windows
 5. Run **Redis** server and **Redis-CLI**

  

> ````src/redis-server````

  

> ````src/redis-cli````

  

6. Duplicate **.env.example** and rename to **development.env**

7. Set database **username** and **password** in **development.env** file

8. Run **migrations** file by the following code

  

> `npm run dev-migration`

  

9. Run **Seeders** file if you need insert sample data for mySQL or you have seed file

> `npm run dev-seed`

  

10. Run application in development environment

> `nodemon`

  

  

  
  

  

# Run Production Environment

  

> `npm run prod`

  
1. Install **dependencies**

  

> `npm install`

  

2. Run **mySQL** and **MongoDB**

3. Install **Redis Server** for **Linux**

  

> ````wget https://download.redis.io/releases/redis-6.2.6.tar.gz````

  

> `tar xzf redis-6.2.6.tar.gz`

  

> `cd redis-6.2.6`

  

> `make`

  

 4. If you are **Windows** user get this [address](https://github.com/microsoftarchive/redis/releases) and install Redis for windows
 5. Run **Redis** server and **Redis-CLI**

  

> ````src/redis-server````

  

> ````src/redis-cli````

  

6. Duplicate **.env.example** and rename to **production.env**

7. Set database **username** and **password** in **production.env** file and edit NODE_ENV to **production**

8. Run **migrations** file by the following code

  

> `npm run prod-migration`

  

9. Run **Seeders** file if you need insert sample data for mySQL or you have seed file

> `npm run prod-seed`

  

10. Run application in **production** environment

> `npm run prod`


# Run Swagger
You can access to swagger by the following [Address](http://localhost/api-doc)