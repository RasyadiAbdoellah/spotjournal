# SpotJournal Frontend

## Project Idea

SpotJournal is a simple full stack app that allows users to save a list of locations with notes attached to each place.

I had a lists of general areas in Manhattan that I want to revisit. I lost that list. I want to make a digital list that's capable of showing me the location on a map, possibly with pictures and descriptors to why its interesting, so that I don't lose it again.

The frontend is a dynamic single page application built with Bootstrap, JavaScript, jQuery, and Handlebars. Interaction with the backend is handled completely through jQuery Ajax. Retrieved data is displayed through the Handlebars templating engine. Functionality and styling is achieved through a mix of Bootstrap and jQuery.

## Technologies Used

- HTML5
- CSS
- Bootstrap
- jQuery
- Ajax
- Handlebars


## User stories

Version 1 - User-<Location One-to-Many relationship
- Epic: As a user, I want to save a list of locations

- As a user I want to make an account
- As a user I want to save a new place
- As a user I want to see the places I've saved
- As a user I want to update my saved places
- As a user I want to delete a saved place


Version 1.5 - 2
- Epic: As a user, I want to be save a location, with a description of why its interesting.

Ver 1.5 User-<Notes One-to-Many relationship
- As a user I want to create notes
- As a user I want to see all the notes I've created
- As a user I want to see a single note I've created
- As a user I want to modify a note
- As a user I want to delete a note

Ver 2 - Location-<Notes One-to-Many relationship 
- As a user I want to pin the notes I created to a location
- As a user I want to see a note assigned to a certain location
- As a user I want to see all notes assigned to a certain location
- As a user I want to unassign a note from a location

Ver X - Connect to Google Maps API
- As a user I want to see my locations on a map
- As a user I want to add a location by choosing a spot on a map
- As a user I want to add a new location by saving my current location

## Wireframes

https://projects.invisionapp.com/freehand/document/bo14QAmEi


## Timetable

- create api dbs + deploy to heroku
- create frontend skeleton + deploy to gh pages

- establish backend relationships
- create routes
- define actions
- redeploy to heroku + bugfix

- create frontend inputs & Set triggers
- redeploy frontend + bugfix

- Test connections between frontend/backend
- bug fix
- improve UI

- Work on version 3 backend/frontend
- work on stretch goals e.g. maps API.

## Future Improvements

- Fix jitter that happens when a user message appears. Most likely solution would be modify the message size.
- Add CRUD frontend functionality for second resource.
- Change create place functionality to work with a map API.
