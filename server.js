
const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'My dirty little secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));





app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(require('./controllers/'));
app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});






















/*

WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in

//create a login page first
//completed

//somethings wrong with the cookies or the routes will have to go back over and fix 
this bug

WHEN I choose to sign up
THEN I am prompted to create a username and password

//will have to restructure login page and maybe add new routes so it takes you to a signup page
//study module 14 more

WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site

//I think this is working but I havent checked will have to test

WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password

//study module 14 more

WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out

// created logout page but issues with login has bugs

WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created

//homepage works but existing blog information is buggy still working on it
// need to look up date information and title information rephrase my routes some


WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

/blog post bugs need to be fixed first


WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created

// I thing I can find info on this in module 14.3


WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post

// you are taken to dashboard but blog bug has to be fixed 
//also need to implement new blog routes and button


WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post

//maybe info in 14.5 module


WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post

//maybe info in 14.5 module


WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard

//maybe info in 14.5 module


WHEN I click on the logout option in the navigation
THEN I am signed out of the site

//logout button is made also I believe logout logic is good just cant sign in login bug


WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments*/

//not sure where to find this info gonna google