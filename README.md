# This is a base Node js Project Template , which can be use as it has been prepared, by keeping some of the most important code principles and project management recommendations. Feel Free to Use it .....

`src` -> Inside the src all the actuall source code regarding the project will reside, thsi will not include any kind of tests.(You might want to make separate tests folder)

Let's take a Look Inside the `src` folder

- `config` -> In this folder anything and everything regarding any configurations or setup of a library or module will be done . For Example : setting up `dotenv` so that we can use the emvironment variables anywhere in a cleaner fashion, this is done in the `server-config.js`. One More example can be to setup your logginf Lobrary that can help you to prepare meaningful logs, so configuration for this library shoul also be done here .

- `routes` -> In the routes folder, we register route and the corresponding middleware and controllers to it.

- `middlewares` -> They are just going to intercept the incoming requests where we can write our validations, authentications etc.

- `controllers` -> They are kind of the last middlewares as post them you call business layer to execute the business logic. In controllers we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an output, we structure the API response in controllers and send the output.

- `repositories` -> This folder contains all the logic using which we can interact the DB by writing queries, all the raw queries or ORM queries will go here .

- `services` -> It contains the business logic and interacts with repositories for data from the database

- `utils` -> Contains helper methods, error classes etc.


### Setup the Projects 

- Download this template from the github and open it in your favourite text editor.
- In the root directory create a `.env` file and add the following env variables 
 ```
    PORT=<PORT numberof your choice>
 ```

 ex : 
 ```
 PORT = 3000

 ```

 - Inside the `src/config` folder create a file config.json and write the following code :

 ```
 {
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
or 

 - You can go inside the src folder and execute npx sequelize init 
 
- If your'e setting up your development environment, then write the name of your username and password of your db and in dialect mention whaever you are using for ex : mysql, mariadb etc.

## To run the Project 
- npm install
- npm run dev
