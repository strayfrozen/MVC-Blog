const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");




app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});




















/*GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in

First plan of action create a homepage with existing blog posts wit links for homepage dashboard and log in
//complete except for existing blog posts

first make a main.handlebar homepage and render it
//complete

//figure out how to make blog posts study module 13

need to create the user,post, and comment models and set up sequlize

start create a user model that can store information about user
retrieve data from another user
update profile data 
and delete profile



WHEN I click on the homepage option
THEN I am taken to the homepage

//not sure module 14 goes more into deatil on comments and user going to study 13


WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in

//create a login page first

WHEN I choose to sign up
THEN I am prompted to create a username and password

//13 and 14

WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site

//13 and 14

WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password

//14

WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out

// change login to a logout route

WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created


WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment


WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created


WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post


WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post


WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post


WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard


WHEN I click on the logout option in the navigation
THEN I am signed out of the site


WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments*/