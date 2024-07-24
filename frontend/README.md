# Frontend

This project was generated with create-nx-workspace. And I've chosen to use React as a standalone application.

The React Frontend is connected to a Spring Boot backend.

The frontend is as simple as possible to just show the logic of authentication via a JWT and OAuth2.

## Build

```
yarn install
```

## Run on local

```
yarn start
```

The application will run on `http://localhost:4200`

## Components

### App Component

Main wrapper component. It has the logic to display the Login form (if requested by the user), the protected content
(if the user is authenticated) or the welcome content (by default when loading the frontend).

### Login Page Component

The login form only displays a link with the Cognito's URL to log the user. This URL comes from the backend.

### Protected Page Component

This component requests a protected endpoint in the backend when loading.

### Welcome Page Component

This component request a public endpoint in the backend when loading.

## Authentication

The Authentication uses the OAuth2 workflow.

To Authenticate a user, a request must be done first to the backend to obtain an AWS Cognito URL where the user must log in.
Once logged, AWS Cognito will call the frontend with a code. This code must sent to the backend to obtain an id_token.
The id_token will now be used to request protected endpoints. The id_token will be sent as a Bearer token in the
HTTP headers.