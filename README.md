# verbose-tribble
Smart Recipe Recommender

Frontend (React.js) Layout:

User Interface:
  - Components: Home, Recipe List, Recipe Detail, User Profile, Navbar.
  - Interactions: Users interact with UI components, triggering events (e.g., button clicks).
  - React Router manages navigation between views.

HTTP Requests:
  - Axios is used for making requests to the backend.
  - Requests include actions like fetching recipes or updating user information.

+-------------------+          +-------------------+
| User Interface    |          |   HTTP Requests   |
|                   |          |                   |
|   Home            |          |   Axios           |
|   Recipe List     |          |   to Server       |
|   Recipe Detail   |          |                   |
|   User Profile    |          |   to Database     |
|   Navbar          |          |                   |
+-------------------+          +-------------------+


Backend (Node.js with Express) Layout:

Server Setup:
  - Express.js server listens for incoming requests.

Middleware Processing:
  - Middleware functions handle security and optimization.
  - Middleware includes CORS, Helmet, compression, and body parsing.

Routing:
  - Routes are defined for authentication and recipe-related operations.

Authentication Middleware:
  - Verifies JWT for protected routes.

Controllers:
  - Execute business logic based on the type of request.
  - Interact with the MongoDB database using Mongoose.

Database Interaction:
  - MongoDB is queried for user information and recipe data.

+-------------------+          +-------------------+
| Server Setup      |          | Authentication    |
|                   |          | Middleware        |
|   Middleware      |          |   Controllers     |
|   Functions       |          +-------------------+
|                   |          |   Database        |
|   Routing         |          |                   |
|                   |          +-------------------+
|   Auth Routes     |
|   Recipe Routes   |
+-------------------+
