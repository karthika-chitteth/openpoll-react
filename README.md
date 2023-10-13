# openPoll React App Architecture Document

## Overview

The openPoll React app is a feature-rich web application designed for creating and participating in polls. This architecture document provides a comprehensive view of the project's structure, libraries, and the organization of key components.

## Libraries

The openPoll React app relies on several libraries to provide functionality and maintainability:

- **React**: The core library for building interactive and dynamic user interfaces.

- **Tailwind CSS**: A utility-first CSS framework that streamlines UI development and responsiveness.

- **Preline**: A code preprocessor (available at [preline.co](https://preline.co/index.html)) used for code readability and maintainability.

- **React Router**: A routing library essential for handling navigation and routing within the app.

- **Yup**: A validation library for data validation and form validation, ensuring data integrity.

- **Axios**: A promise-based HTTP client used for making API requests to a backend server.

## Architecture

The project's directory structure follows a logical organization for improved development and maintainability.

```plaintext
openPoll React App
├── public (public assets such as images, fonts, and index.html)
│
└── src (source code directory)
    ├── app
    │   ├── assets (application-specific assets)
    │   │
    │   ├── components (shared React components)
    │   │   ├── navbar.tsx (shared navigation component)
    │   │   └── sidebar.tsx (shared sidebar component)
    │   │
    │   ├── context (React context providers, if used)
    │   │
    │   ├── hooks (custom React hooks for application logic)
    │   │
    │   ├── schemas (data validation schemas for use with Yup)
    │   │
    │   ├── pages
    │   │   ├── auth (components for authenticated users)
    │   │   │
    │   │   ├── public (components for public access)
    │   │   │
    │   │   ├── user
    │   │   │   ├── dashboard.tsx (user dashboard component)
    │   │   │   │
    │   │   │   ├── poll
    │   │   │   │   ├── detail.tsx (poll detail component)
    │   │   │   │   ├── view.tsx (poll view component)
    │   │   │   │
    │   │   │   └── index.tsx (common layout for user pages)
    │   │   │
    │   │   └── guest
    │   │       │
    │   │       └── poll
    │   │           └── view.tsx (guest poll view component)
    │   │
    │   ├── services
    │   │   └── api.service.ts (Axios API service for making HTTP requests)
    │   │
    ├── app.tsx (the main application component that uses React Router for navigation)
    │
    └── routes.tsx (defines all route configurations for the application's pages and is included in app.tsx as a router provider)
```
