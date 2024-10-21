
# RESTful APIs

  

This is RESTful APIs project for **CRUD** operations by **Node.js** and **Express** framework.

  

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

  

1. Clone project and get to project directory

  


	> `git clone 	https://github.com/MiMmohammdi/RESTful-API.git`

	> `cd RESTful-API`

  

2. Install **dependencies**

  
	> `npm install`
 

3. Run **mySQL** and **MongoDB**
  

4. Install **Redis Server** for **Linux**

  

	> `wget https://download.redis.io/releases/redis-6.2.6.tar.gz`

  

	> `tar xzf redis-6.2.6.tar.gz`

  

	> `cd redis-6.2.6`

  

	> `make`

  

5. If you are **Windows** user get this [address](https://github.com/microsoftarchive/redis/releases) and install Redis for windows

6. Run **Redis** server and **Redis-CLI**

  

	> `src/redis-server`

  

	> `src/redis-cli`

  

7. Duplicate **.env.example** and rename to **.env** by this code:

  

	> `cp .env.example .env`

  

8. Set database **username** and **password** in **.env** file

  

9. Run **migrations** file by the following code

  

	> `npm run makemigrations`

  

10. Run **Seeders** file if you need insert sample data for mySQL or you have seed file

 

	> `npm run seeders`

  

11. Run application in development environment

  
	> `npm run dev`


  
# Run Swagger

  

You can access to swagger by the following [Address](http://localhost/docs)

