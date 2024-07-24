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

The `SecurityConfig` contains the Spring Security 6 configuration, with the protected routes, exception handler and 
OAuth2 configuration. It also contains the CORS configuration associated to Spring Security.

### Controllers

Here are the available controllers. One for the authentication, which returns the AWS Cognito URL to authenticate and the
callback endpoint to obtain the JWT.

The other endpoints are a public one and a private one to test the authentication.

### Dtos

Here will be placed the Data Transfer Objects. Objects which will be returned to the frontend.

## Authentication

The authentication is handled using the OAuth2 workflow.

The authentication workflow starts by requesting a login URL to AWS Cognito. This login URL is unique and contains the 
information of the application which delegates the authentication to AWS Cognito. AWS Cognito will call Google to show
the consent page and allow the user to log in. Once the login is done by the user, a code is returned to a callback
endpoint. This code will be exchanged by some tokens. I will just use the id_token.

The id_token must be stored in the frontend and used for every private request. The id_token will be read in the 
request, in the Authorization Bearer header, to authenticate the request with Google through AWS Cognito.
