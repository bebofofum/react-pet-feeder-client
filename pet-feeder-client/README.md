# Project Name:
React Pet Feeder

# Link to API Backend on Github:
https://github.com/bebofofum/petfeeder-rails-api.git

# Project Description:
A React_Redux app for tracking who fed what pet in a household. The app makes use of makes use of 5 stateless components and currently has 3 routes and uses react-router to display different routes.

# Project Install Instructions:

Create a new directory for the app. 

Clone the repos. BackedEnd and FrontEnd are in separate repos, petfeeder-rails-api and react-pet-feeder-client, respectively.

In terminal, navigate to the petfeeder_api directory.

Run 'bundle install' to ensure all dependencies are installed.

Run 'rails db:migrate' in Terminal to run migrations for creating the Owner, Pet and Feedings tables.

In terminal start the rails server by typing 'rails s'. Rails server should start on port 3001. This is needed to allow the client-side server to run on port 3000. 

In terminal navigate to the app frontend, client, directory. In the client directory type npm install to install dependencies. When that's finished run npm start to start the server on port 3000. Npm should open a browser window to the running server localhost address, ie. localhost://3000

Project Contributors:
Project License:
MIT License

# Specs the React Redux Assessment:

[X] The code is written in ES6 as much as possible. [Makes use of const and let. Makes use of arrow functions. Uses template literals. Uses destructuring] 
[X] create-react-app was used to create your React app. [Used create-react-app when starting.]
[X] There are 2 container components. [Currently has a PetContainer and an OwnerContainer]
[X] There are 5 stateless components. [Currently with Redux there are more than 5 stateless. OwnerContainer, PetContainer, PetList, PetListItem, OwnerList, OwerListItem, and Navbar]
[X] There are 3 routes [Main index, owner/new and pet/new]
[X] react-router is being used with proper RESTful routing [uses react-router, Router, Switch and Route]
[X] Redux and redux-thunk middleware are being used to modify state change and make use of async actions to send data and receive data from the server  []
[X] Your Rails API should handle the data persistence with a database. You should be using fetch() within your actions to GET and POST data from your API [Uses fetch requests using GET and POST to rails API to retreive and add to Rails API]
[X] Your client-side application should handle the display of data with minimal data manipulation 
[X] Your application should have some minimal styling [Uses Tailwind utilities to add some styling]


