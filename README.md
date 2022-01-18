# First RESTful APIs

This is my first RESTful APIs project for **CRUD** operations by **Node.js** and **Express** framework.
**Mysql** and **Mongodb** are used in the Database, which are connected to the project by **ORM** (**Sequlizer**) and **ODM** (**Mongoose**).
**Swagger** was used for documentation and endpoint testing.

 - **Nodejs**
 - **Express** 
 - **MySQL**
 - **MongoDB**
 - **Redis**
 - **JWT** 
 - **Sequlize**
 - **Mongoes**
 - **Bcrypt** 
 - **Swagger**


## Project setup

 1. Install **dependencies**
  

	> `npm install`

   
 2. Run **mySQL** and **MongoDB**
 3. Install **Redis Server** 

	> ````wget https://download.redis.io/releases/redis-6.2.6.tar.gz````
	

	> `tar xzf redis-6.2.6.tar.gz`
	

	> `cd redis-6.2.6`
	

	> `make`

 4. Run **Redis** server and **Redis-CLI**

	> ````src/redis-server````
	

	> ````src/redis-cli````

 5. Create new **.env** file or rename **.env.example** to **development.env**
 6. Insert information to **development.env**, such as **.env.example** and set database **username** and **password**
 7. Run migrations file by the following code

	> `npx sequelize-cli db:migrate`

   
 8. Run Seeders file and insert sample data for mySQL by the following code
   

    

	> `npx sequelize-cli db:seed:all`

    
 9. Run application in development environment

	 > `nodemon`

    

# Run Production Environment

> `npm run prod`

# Run Developement Environment

> `npm run dev`
