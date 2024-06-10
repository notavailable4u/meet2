# Project Name: MeetUp Serverless PWA (Progressive Web App)

## Project Description
This project was created as part of the curriculum for the Full Stack Web Development Program at [Career Foundry] (https://careerfoundry.com/en/courses/become-a-web-developer/) [^1]. It is a serverless, progressive web application (PWA) built with React using a test-driven development (TDD) technique. The application will use the Google Calendar API to fetch upcoming events.

[^1]: If you are considering enrolling in the Full Stack Web Development Program at Career Foundry, I cannot strongly enough caution you to NOT ENROLL. The lessons are filled with so much deprecated code and blatant errors that it is criminal. Feel free to contact me if you would like more detailed information.

## Project Key Features
+ Filter Events by City.
+ Show/Hide Event Details.
+ Specify Number of Events. 
+ Use the App When Offline.
+ Add an App Shortcut to the Home Screen.
+ Display Charts Visualizing Event Details.

## User Stories
One of the projects requirements was to turn the above Features into User Stories, which can viewed below:
+ Feature 1: Filter Events by City
  - User Story: As a user, I should be able to filter events by city, so that I can find events relevant to my location.
+ Feature 2:  Show/Hide Event Details.
  - As a user, I should be able to show or hide event details, so that I can view additional information only when needed and keep the interface uncluttered.
+ Feature 3:  Specify Number of Events.
  - As a user, I should be able to specify the number of events displayed, so that I can control the amount of information I see at once.
+ Feature 4: Use the App When Offline.
  - As a user, I should be able to use the app when offline, so that I can access event information even without an internet connection.
+ Feature 5:  Add an App Shortcut to the Home Screen.
  - As a user, I should be able to add an app shortcut to the home screen, so that I can quickly access the app without navigating through menus.
+ Feature 6:  Display Charts Visualizing Event Details.
  - As a user, I should be able to view charts visualizing event details, so that I can easily understand and analyze event data at a glance.

## Gherkin's (“Given-When-Then”) Syntax Scenarios
Another of the project's requirements was to create scenarios for each of the above 6 Features into Gherkin's (“Given-When-Then”) syntax. The scenarios can be viewed below:
+ Feature 1: Filter Events by City
  - Scenario: User filters events by a specific city
    - Given the user is on the events page
    - When the user selects "New York" from the city filter dropdown
    - Then the events displayed should only be those located in New York

+ Feature 2: Show/Hide Event Details
  - Scenario: User toggles to show event details
    - Given the user is on the events page
    - When the user clicks on the "Show Details" button for an event
    - Then the detailed information for that event should be displayed

  - Scenario: User toggles to hide event details
    - Given the detailed information for an event is displayed
    - When the user clicks on the "Hide Details" button for that event
    - Then the detailed information for that event should be hidden

+ Feature 3: Specify Number of Events
  - Scenario: User specifies the number of events to display
    - Given the user is on the events page
    - When the user selects "10" from the number of events dropdown
    - Then only 10 events should be displayed on the page

+ Feature 4: Use the App When Offline
  - Scenario: User accesses the app while offline
    - Given the user has previously loaded event data while online
    - And the user goes offline
    - When the user opens the app
    - Then the previously loaded event data should be accessible

+ Feature 5: Add an App Shortcut to the Home Screen
  - Scenario: User adds a shortcut to the home screen
    - Given the user is on the app settings page
    - When the user selects the option to add a shortcut to the home screen
    - Then a shortcut icon for the app should be added to the user's home screen

+ Feature 6: Display Charts Visualizing Event Details
  - Scenario: User views charts visualizing event details
    - Given the user is on the event details page
    - When the user scrolls to the charts section
    - Then charts visualizing the event details should be displayed

## Serverless Functions
Another requirement of the project was the use of Serverless Functions. Specifically, this app will employ serverless functions for securely managing user access, obtaining and refreshing OAuth2 tokens, and ensuring the security of interactions between the React based application and the Google Calendar API.




