# Tic-Tac-Toe: The timeless classic
This application allows two players to play against eachother in a classic game of tic-tac-toe. This application prompts the user to either create an account, or login if they are a returning user. The user is then able to look back at the history of their game stats.

This is my first time building a front end application that utilizes a backend API! :) Had some bumps along the way, but this was a great learning experience all around.

## Planning history
With this project being my first front end application, I tried to be very methodical with the planning of this project. After building some wireframes and user stories, I focused on sorting out the user API requests, and then moved onto the game play API requests. After that it was time to start building out the logic to the game. While there are probably countless ways to achieve a functional tic-tac-toe game in JS... as Thomas Edison once said, I only needed to find one way that worked. After that I focused more on the styling of the different features.

## User Stories
- As a user I want to be able to play against someone else
- As a user I want to be able to start a new game at any time
- As a user I want to be able to make an account and sign back in
- As a user I want to be able to to track my game stat history
- As a user I want the board to be visually responsive when the game is complete

## Technologies Used
- HTML/CSS
- Javascript
- Bootstrap
- jQuery

## Unsolved Problems
- You can sign in without correct credentials
- Change password PATCH request fails and needs to be hidden after successful change
- Displaying game stats only shows a portion of the correct text
- After a game is won, the board should freeze, not allowing more clicks
- The find one game functoinality is useless (it's currently by game id) - remove it
- Make UI improvements

## Wireframes:
### Sign-In
![sign-in-view](https://i.imgur.com/R8Xf8RO.png)
### Sign-Up
![sign-up-view](https://i.imgur.com/jeFvumE.png)
### Main Page
![main-view](https://i.imgur.com/2tDgnsq.png)
