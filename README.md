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

   
 2. Create new database in mySQL called **CRUD**
 3. Create new database in MongoDB called **CRUD**
 4. Install **Redis Server** and Run server
 5. Create new **.env** file or rename **.env.example** to **development.env**
 6. Insert information to **development.env**, such as **.env.example** and set your database **username** and **password**
 7. Run databases and Redis server
 8. Run migrations file by the following code

	> `npx sequelize-cli db:migrate`

   
 9. Run Seeders file and insert sample data for mySQL by the following code
   

    

	> `npx sequelize-cli db:seed:all`

    
 10. Run application in development environment

	 > `nodemon`

    

# Run Production Environment

> `npm run prod`

# Run Developement Environment

> `npm run dev`
