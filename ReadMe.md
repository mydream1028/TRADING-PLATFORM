# Tocos Tranding Platform

This document provides an overview of the application's features, technology stack, usage instructions, testing procedures and potential improvements.

## Table of Contents

- [Introduction](#introduction)
- [Technology Stack](#technology-stack)
- [Clarity of Design Choices](#clarity-of-design-choices)
- [Features](#features)
  - [Transactions](#transactions)
  - [Adding Users](#adding-users)
  - [Viewing User Detail Information](#viewing-user-detail-information)
  - [Viewing All Users](#viewing-all-users)
  - [Form Validations](#form-validations)
  - [Database Models](#database-models)
  - [API Design](#api-designs)
- [Assumptions](#assumptions)
- [Database Models](#database-models)
- [Usage](#usage)
- [Possible Improvements](#possible-improvements)

## Introduction

Tocos Trading Platform is a web application designed to facilitate transactions between users. It provides features for adding users, adding transactions, and viewing user details. The application is built using a modern technology stack that includes TailwindCSS, Vite, React, Node.js with TypeScript, Express, Jest, Supertest, and MongoDB.

## Technology Stack

**Frontend:**

- TailwindCSS
- Vite
- React

**Backend:**

- Node.js with TypeScript
- Express
- Jest
- Supertest
- Mongoose

**Database:**

- MongoDB

## Clarity of Design Choices

1. ### Backend Server

   - Used Typescript for type safety and better code organization.
   - Used Express for creating API endpoints.
   - Used MongoDB as a database to store user and transaction information.

2. ### Frontend

   - Used React for building the user interface because of scalability
   - Used TailwindCSS for styling the web page because of simplicity

3. ### Dockerization

   - Provided Dockerfiles for both backend and frontend, ensuring ease of deployment.
   - Used Node.js LTS as the base image.

4. ### Testing

   - Used Jest for testing
   - Implemented integration testing for add user, get list of users, get one user, add transaction, get specific transactions

## Features

### Transactions

Users can initiate transactions between themselves.\
Each transaction includes a sender, receiver and an amount.\

### Adding Users

Users can be added to the system with name and initial token.

### Viewing User Detail Information

Admin can view users' amount of token and transaction log.

### Viewing All Users

Admin can view a table of all users with their detail information.

### Form Validations

- When adding a user, all fields must be required and the initial token must be bigger than 0.
- When adding a transaction, the amount must be greater than 0, send & receiver can't be same and the amount can't bigger than sender's token.

### Assumptions

- Users have unique names.
- Users are authenticated and authorized to access appropriate features.

### Database Models

The application uses two database models: User and Transaction

1. User:

   | Field        | Type    | Description                            |
   |--------------|---------|----------------------------------------|
   | _id          | ObjectId| Unique identifier for the user         |
   | name         | String  | User's name                            |
   | token        | Number  | User's token                           |
   | createdDate  | Date    | Date of user creattion                 |

2. Transaction:

   | Field        | Type     | Description                                    |
   |--------------|----------|------------------------------------------------|
   | _id          | ObjectId | Unique identifier for the transaction          |
   | sender       | ObjectId | Reference to the User who send the amount      |
   | receiver     | ObjectId | Reference to the User who receiver the amount  |
   | amount       | Number   | Amount of transaction                          |
   | createdDate  | Date     | Date of transaction                            |

### API designs

- `/users` GET
  - Get a list of users
  - Response

    ```bash
    [
      {
          "_id": "65a13f2b9db57da5d7c47789",
          "name": "James",
          "token": 121,
          "createdDate": "2024-01-12T13:31:23.116Z",
          "__v": 0
      },
      {
          "_id": "65a13f6607804102df5dd1a7",
          "name": "Mike",
          "token": 229,
          "createdDate": "2024-01-12T13:32:22.671Z",
          "__v": 0
      }
    ]
    ```

- `/users/:id` GET
  - Get a specific user details
  - Request Params

    ```bash
      {
        id: "65a13f2b9db57da5d7c47789"
      }
    ```

  - Response

    ```bash
    {
      "_id": "65a13f2b9db57da5d7c47789",
      "name": "James",
      "token": 121,
      "createdDate": "2024-01-12T13:31:23.116Z",
      "__v": 0
    }
    ```

- `/users` POST
  - Create a user with name and initial token
  - Request Body

    ```bash
      {
        name: "Tom",
        token: 1000
      }
    ```
  
  - Response

    ```bash
      {
        "id": "65a4ee9aaece18b5f45494e5",
        "createdDate": "2024-01-12T08:36:42.056Z"
      }
    ```

- `/transaction` POST
  - Create a transaction
  - Request Body

    ```bash
      {
        "sender": "",
        "receiver": "",
        "amount": 100
      }
    ```

  - Response

    ```bash
      {
        "msg": "Transaction created successfully!"
      }
    ```

- `/transaction/:id` GET
  - Get one user's history of transaction
  - Request Body

    ```bash
      {
        id: "65a13f2b9db57da5d7c47789"
      }
    ```

  - Response

    ```bash
      [
        {
            "_id": "65a1fe0ff9b569c845af5ad9",
            "sender": {
                "_id": "65a13f6607804102df5dd1a7",
                "name": "Mike"
            },
            "receiver": {
                "_id": "65a13f2b9db57da5d7c47789",
                "name": "James"
            },
            "amount": 10,
            "createdDate": "2024-01-13T03:05:51.767Z",
            "__v": 0
        },
        {
            "_id": "65a1fe3ff9b569c845af5ae3",
            "sender": {
                "_id": "65a13f2b9db57da5d7c47789",
                "name": "James"
            },
            "receiver": {
                "_id": "65a13f6607804102df5dd1a7",
                "name": "Mike"
            },
            "amount": 10,
            "createdDate": "2024-01-13T03:06:39.266Z",
            "__v": 0
        },
      ]  
    ```

## Usage

To run the Tocos Trading Platform using Docker CLI.

1. Clone the repository and naviaget to the project directory.
2. Make sure Docker is installed on your system.
3. Open a termical and run the following command:

   - run frontend & backend

      ```bash
        docker compose up
      ```

4. Access the application by navigating to `http://localhost:5173` in your web browser.

## Possible Improvements

- Implement user authentication and authorization
- Add pagination to the user table and user transaction history
- Implement real-time updates using web sockets or push api
