# Spring Boot Backend

## Install

```
mvn clean package
```

## Run on local

First, start a database as described bellow.

```
mvn spring-boot:run
```

The application will be available at `http://localhost:8080`

## Packages

### Config

Here will be placed all the necessary configuration for the application to run correctly.

The `GoogleOpaqueTokenIntrospector` is used to use a custom instrospector for the resources handler. As the Spring 
Security OAuth2 dependency does not handle the Google workflow.

The `SecurityConfig` contains the Spring Security 6 configuration, with the protected routes, exception handler and 
OAuth2 configuration.

The `WebClientConfig` contains the WebFlux configuration to communicate with the authorization server of Google when
validating an access_token.

The `WebConfig` contains the CORS configuration.

### Controllers

Here are the available controllers. One for the authentication, which returns the Google URL to authenticate and the
callback endpoint to obtain the access_token.

The other endpoints are a public one and a private one to test the authentication.

### Dtos

Here will be placed the Data Transfer Objects. Objects which will be returned to the frontend.

## Authentication

The authentication is handled with the OAuth2 workflow.

The application can be stateless or stateful, the behavior will be the same. Having a stateful application, I can
store some user's information in the session. Using a stateless application, all the user's information must be sent
from the frontend to the backend at each request.

The authentication workflow starts by requesting a login URL to Google. This login URL is unique and contains the 
information of the application which delegates the authentication to Google. Once the login is done by the user, a code
is returned to a callback endpoint. This code will be exchanged by an access_token. This access_token can now be used 
against Google to obtain the user's information.

The access_token must be stored in the frontend and used for every private request. 
