# Welcome to Map the News

Have you ever wondered how your perspective on current events is being shaped by the news you consume?

Map the News is a dynamic news application built in React/Redux with a Rails API backend, using bcrypt for secure password storage, knock for JWT authentication, and redux-thunk for async requests.

The app fetches headlines from the News API (http://newsapi.com) and displays them on a grid, positioned based on each news source's political bias and overall quality ratings. Users can also save search terms to track the coverage of a topic overtime.

***NEW: You can view this project live at https://http://mapthenews.surge.sh/***

Note: Code in 'master' runs frontend and backend apps locally using a sqlite3 database. Code in 'deploy-heroku' runs the Rails API backend, configured with Postgres for Heroku. Frontend code has been configured for Surge.sh deployment, and is now at https://github.com/chrissyhunt87/map-the-news-frontend.

## Installation & Local Run Guide

1. Clone the repo
2. `bundle install` in the root directory
3. `rake db:migrate` to set up the database
3.  In the `/client` subdirectory, `npm install` all dependencies
4.  Start the Rails and React servers and navigate to `http://localhost:3000`

## File Structure

`/app` - Contains backend MVC architecture

`/client/src` - Contains frontend React/Redux code

`/config` - Contains backend routes and config files

`/db` - Contains database and migrations

## Routes and Features

`/` - Landing page, will direct you to log in or sign up

`/news` - Main application page, displaying news headlines

`/about` - An explanation of the project

## Contributors Guide

This code is maintained at https://github.com/chrissyhunt87/goalzzz. For any contributions, please open a pull request.

## Licensing Statement

This project has been licensed under the MIT open source license. For more info, see: https://opensource.org/licenses/MIT
