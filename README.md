# giffie-service
Giffie's API and back end


## API
The Giffie service exposes an API with which you can search for and receive GIFs.
The (still in development) admin project will be able to manage GIFs through this API.

### /gifs
t.b.c.

### /search
t.b.c.

## Running it yourself

### install
Running `npm install` should do the trick. Pre requisites are that you
have a running [MongoDB](https://www.mongodb.com) instance, either 
locally or remotely.
A service like [MongoLab](https://mongolab.com) can provide the latter
very easily.

### configuration
Giffie uses Mongodb as a database. To connect to the database you have
to set a `MONGODB_URI` environment variable with a fully authenticated
URI to a Mongo DB database.
Example:

`mongodb://<user>:<password>@hostname:port/database`
 
 
### running 
With a MongoDB setup you can run the server through:

`MONGODB_URI=mongodb://mongodb-uri npm start`

Or just

`npm start` if you already set the `MONGODB_URI` environment variable.