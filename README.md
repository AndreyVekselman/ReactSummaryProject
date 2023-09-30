# Real App: React Summary Project

## Overview

The Real App is a versatile application designed to manage accounts, enabling users to create, edit, and delete business cards containing personal data and photos. It allows individual users to have different access to card data, with all the data stored on a local server, enabling a personalized experience for every user.

## Table of Contents

1. [Technological Stack](#technological-stack)
2. [Installation & Setup](#installation--setup)
3. [Usage](#usage)
4. [Contribution](#contribution)
5. [License](#license)
6. [Contact](#contact)

## Technological Stack

### Frontend

- React: ^18.2.0
- Axios: ^1.4.0
- Bootstrap: ^5.3.0
- Bootstrap Icons: ^1.10.5
- Formik: ^2.4.2
- Joi: ^17.9.2
- JWT Decode: ^3.1.2
- React Router Dom: ^6.13.0
- React Toastify: ^9.1.3
- Web Vitals: ^2.1.4
- @Testing-Library/Jest-Dom: ^5.16.5
- @Testing-Library/React: ^13.4.0
- @Testing-Library/User-Event: ^13.5.0

### Backend

- Express: ^4.17.1
- Bcrypt: ^5.0.1
- Config: ^3.2.5
- Cors: ^2.8.5
- Joi: ^17.6.0
- Jsonwebtoken: ^8.5.1
- Lodash: ^4.17.15
- Mongoose: ^6.3.5
- Morgan: ^1.10.0
- Nodemon (Dev): ^2.0.16

## Installation & Setup

### Prerequisites

- Node.js
- npm

### Frontend Setup

1. Navigate to the `real-app-front` directory.
2. Run `npm install` to install all the necessary libraries and dependencies listed under the Frontend Technological Stack.
   ```sh
   npm install @testing-library/jest-dom@^5.16.5 @testing-library/react@^13.4.0 @testing-library/user-event@^13.5.0 axios@^1.4.0 bootstrap@^5.3.0 bootstrap-icons@^1.10.5 formik@^2.4.2 joi@^17.9.2 jwt-decode@^3.1.2 react@^18.2.0 react-dom@^18.2.0 react-router-dom@^6.13.0 react-scripts@5.0.1 react-toastify@^9.1.3 web-vitals@^2.1.4
   ```

### Backend Setup

1. Navigate to the real-app-server directory.
2. Run npm install to install all the necessary libraries and dependencies listed under the Backend Technological Stack.

   ```sh
   npm install bcrypt@^5.0.1 config@^3.2.5 cors@^2.8.5 express@^4.17.1 joi@^17.6.0 jsonwebtoken@^8.5.1 lodash@^4.17.15 mongoose@^6.3.5 morgan@^1.10.0 nodemon@^2.0.16
   ```

## Usage

The Real App consists of a header, footer, and main page, featuring a dynamic navigation menu, leading to various pages like **Home**, **About**, **Sign In**, **Sign Up**, and **My Cards**. Users can register as either ordinary or business users, with business users having access to additional features like creating, editing, and deleting business cards. The application also provides a Light/Dark mode switch, accessible to all users.

### User Registration and Authorization

Users can register by clicking on the Sign Up menu, filling out a simple registration form, and confirming the registration. They can then log in by filling out the Sign In form with their registered Email and Password. Business users can register by filling out the fields in the registration form and confirming registration through the Sign Up Business button.

### Business Cards Management

Business users can create business cards by clicking on the Create a New Card link and filling out the required information. Each card can be edited or deleted, with changes saved by clicking on the Update Card button.

### Light/Dark Mode

The Light/Dark mode switch is available to all users, allowing them to toggle between different visual themes for a personalized user experience.

## Contribution

Contributions to the React Summary Project are welcome! If you have any bug reports, feature requests, or suggestions, please submit them through the GitHub Issues page. If you'd like to contribute code to the project, please follow these steps:

- Fork the repository on GitHub.
- Create a new branch from the `first` branch to work on your changes.
- Make your modifications, adding new features or fixing bugs.
- Test your changes thoroughly.
- Commit your changes with descriptive commit messages.
- Push your branch to your forked repository.
- Submit a pull request to the `first` branch of the main repository. The project maintainers will review your contribution and provide feedback.

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

## Contact

Email: andrey.vekselman@gmail.com  
GitHub: [Andrey Vekselman](https://github.com/AndreyVekselman)  
Your feedback is valuable and greatly appreciated!
