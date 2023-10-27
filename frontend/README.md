# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.4.

Angular Frontend connected to a Spring Boot backend.

The frontend is as simple as possible to just show the logic of authentication via a JWT.

## Run on local

```
yarn start
```

The application will run on `http://localhost:4200`

## Components

### App Component

Main wrapper component. It has the logic to display the Login form (if requested by the user), the protected content
(if the user is authenticated) or the welcome content (by default when loading the frontend).

### Login Form Component

The login form only displays a link with the Google's URL to log the user. This URL comes from the backend.

### Protected Content Component

This component requests a protected endpoint in the backend when loading.

### Welcome Content Component

This component request a public endpoint in the backend when loading.

## Authentication

The Authentication uses the OAuth2 workflow. 

To Authenticate a user, a request must be done first to the backend to obtain a Google URL where the user must log in.
Once logged, Google will call the frontend with a code. This code must sent to the backend to obtain an access_token.
The access_token will now be used to request protected endpoints. The access_token will be sent as a Bearer token in the
HTTP headers.
