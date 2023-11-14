# Book-Search-Engine

### Refactoring A Google Books API search engine built with RESTful API into a  GraphQL API built with Apollo Server

## Table of Contents
1. [Acceptance Criteria](#acceptance-criteria)
2. [Work Completed](#work-completed)
3. [Work To Be Completed](#work-to-be-completed)
4. [Deployed Application URL](#deployed-application-url)
5. [Deployed Application Video Walkthrough](#deployed-application-video-walkthrough)
6. [Deployed Application Screenshots](#deployed-application-screenshots)
7. [Credits](#credits)

## Acceptance Criteria
- GIVEN a book search engine, WHEN I load the search engine, THEN I am presented with a menu with the options Search for Books and Login/SignUp and an input field to search for books and a submit button;
- WHEN I click on the Search for Books menu option THEN I am presented with an input field to search for books and a submit button;
- WHEN I am not logged in and enter a search term in the input field and click the submit button THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site;
- WHEN I click on the Login/SignUp menu option THEN a modal appears on the screen with a toggle between the option to log in or sign up;
- WHEN the toggle is set to SignUp THEN I am presented with three inputs for a username, an email address, and a password, and a SignUp button;
- WHEN the toggle is set to Login THEN I am presented with two inputs for an email address and a password and login button;
- WHEN I enter a valid email address and create a password and click on the SignUp button THEN my user account is created and I am logged in to the site;
- WHEN I enter my account’s email address and password and click on the login button THEN I the modal closes and I am logged in to the site;
- WHEN I am logged in to the site THEN the menu options change to Search for Books, an option to see my saved books, and Logout;
- WHEN I am logged in and enter a search term in the input field and click the submit button THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account;
- WHEN I click on the Save button on a book THEN that book’s information is saved to my account;
- WHEN I click on the option to see my saved books THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account;
- WHEN I click on the Remove button on a book THEN that book is deleted from my saved books list;
- WHEN I click on the Logout button THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/SignUp and an input field to search for books and a submit button.

## Work Completed
- Implemented a menu with options for Search for Books and Login/SignUp, along with an input field and submit button to search for books 
- Added functionality so that when Search for Books is clicked, an input field and submit button appears to search for books 
- Implemented search results when not logged in - searches display book title, author, description, image, and Google Books link 
- Created a login/signup modal that toggles between login and signup views 
- Built out signup form with inputs for username, email, password and signup button 
- Built out login form with inputs for email, password and login button 
- Added ability to create an account, login, and maintain login session 
- Updated menu options when logged in to Search, See Saved Books, and Logout

## Work To Be Completed
- Successfully Deploy to Heroku without errorsn (Application functions correctly in local)

## Deployed Application URL
https://sb-book-search-engine-14b9ffc6092f.herokuapp.com/

## Deployed Application Video Walkthrough
https://drive.google.com/file/d/1tKRhSDX_sbxeNIFf7EDFm4ZSuWejmSLi/view

## Deployed Application Screenshots
![Alt text](localhost_3000_.png)
![Alt text](<localhost_3000_ (1).png>)

## Credits
- Code refactored by Sier Behashti
- Email: sbehashti@gmail.com Github: https://github.com/Sbehashti

### Technologies Used
- React
- Node
- Express
- Javascript
- Apollo
- Heroku
- MERN
- GraphQL
- REStful API
- Google Books API
- Visual Studio Code
- GitHub
- GitBash