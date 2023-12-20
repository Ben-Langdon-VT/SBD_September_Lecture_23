# Traditional Databases

Database:
- Types: 
  - Relational 
    - SQL, PostgreSql, MySQL
  - Non-Relational
    - MongoDB, Apache Cassandra, Couchbase
- Collection of tables or documents
- Tables:
  - Primary Keys (ID)
  - Records: Data within rows of table
- Mongo
  - Database = Database
  - Collections = Tables
  - Documents = Records
    - stored as JSON
  - Is a **Document Data Store**

# MERN
    - M: Mongo
        - database
    - E: Express
        - server
    - R: React
        - frontend/client
    - N: Node
        - everything in between

# Express
- Need a `package.json` file
  - run `npm init` or `npm init -y`
- Install Dependencies:
  - Express: `npm i express`
  - Mongoose: `npm i mongoose`
    - package that connects to MongoDB
  - dotenv: `npm i dotenv`
  - **NOTE**:
    - We can install multiple dependencies at once
    - ex: `npm i express mongoose dotenv`
- Entry point within `package.json`
  - `index.js` or `app.js`
- `.gitignore`
  - ignore files/folders that shouldn't be in a repo.

# .env
- Contains constants that are specific for our environment
- Stores items that we don't want published
  - passwords, port numbers / deployment routes, keys
- Should be added to `.gitignore`
- Should have a sample version to communicate with team.
  - `example.env`

  ## Mongo & Mongoose
- Need to connect to our database
  - Using **MongoDBCompass**
  - Stateful connection

## BCrypt
'npm i bcrypt'
  - dependency that handles encryption of data
  - mostly commonly for passwords(but not limited)

## Encryption
  - Plain text passwords are not secure when stored within the database.
  - Allows another lever of security for both user and application
  - if the database never knows it, less desired to "hack"

## Salting
  - Includes random strings within the plain text being hashed
  - Makes for unpredicability for the hashed value.
  - We can demote the number of salts
  - GOod value is 10-13 iterations