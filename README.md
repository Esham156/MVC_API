# using MVC Architecture to make an API
simple API that constains plant names and their genus.

## how to run
download the repository and once insede of it, run "npm i" in the terminal then start the API by running "npm run dev". the app will tell you what pot it is running on in the terminal. open localhost on that post.

### endpoints

GET     /plants           get list of all the plants
GET     /plants/:id       get specific plant based on its id
POST    /plants           add new plant
PATCH   /plants/:id       update already present plants using thier id
DELETE  /plants/:id       delete plants by using thier id