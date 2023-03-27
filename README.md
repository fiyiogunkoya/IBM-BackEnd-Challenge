# IBM Backend Coding Challenge(Design Decisions)

For this coding challenge I used (NodeJS and MongoDB)

I used NodeJS because of it's ability to run javascript on many different back-end server environment and it's robust online support and plethora of helpful modules

MongoDB was used due to it's ease of use for a no-SQL database and easy integration with NodeJS. A no-SQL database was used due to the object-like structure of the pokemon data and the ability to query the data object by object(each pokemon)



`main.js` is the mail file where the code has been written.

`pokemon.json` contains the initial data that will be imported into the database

`/models/` contains the schemas for both collections. In this folder we have `Pokemon.js` that contains the schema and model for the Pokemon collection and the `Favorites.js` contains the schema and model for the Pokemon_Favorites collection



# HOW TO RUN THE CODE(END-TO-END)

I set up a mongoDB server locally using the mongosh package, in order to run this code(mongosh will need to be installed)

in the main function of the `main.js` file, we uncomment the `ImportData` function in order to initialize the two collection tables(one for the pokemons and the second one for the user favorites).
  
Once the data has been imported and the collections have been created, we can then begin querying the database and editing it as per the functions requested.
  
Let's take a quick example:
  
localhost:5000 is where the server is running and where we will add our API requests to our local database.
  
1) Get Pokemon by id:
I used the `/id` endpoint and you will complete the url with your desired id as a parameter into this get request.
Full URL will look like this: `localhost:5000/id?id=<DESIRED_ID_NUMBER>` where `<DESIRED_ID_NUMBER>` will be replaced by a valid ID number.


2) Get Pokemon by name:
I used the `/name` endpoint and you will complete the url with your desired id as a parameter into this get request.
Full URL will look like this: `localhost:5000/name?name=<NAME>` where `<NAME>` will be replaced by a valid pokemon Name.



  
