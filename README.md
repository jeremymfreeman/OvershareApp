# OvershareApp Architecture
This repository outlines the proposed architecture for the OvershareApp using React for the frontend and Express.js for the backend with a relational or NoSQL database.

# Database Schema
The database will include the following tables or collections:

- Users (id, username, email, password_hash, bio, profile_picture_url, created_at)
- Posts (id, user_id, content_type, text_content, image_url, timestamp, privacy_setting)
- Comments (id, post_id, user_id, comment_text, timestamp)
- Likes (id, post_id, user_id, timestamp)
- Messages (id, sender_id, receiver_id, message_text, timestamp, read_status)
- Polls (id, post_id, question, option_1, option_2, option_3, option_4, timestamp)
- Notifications (id, user_id, type, message, timestamp, read_status)
# Routes and HTTP Methods
- GET /posts - Returns a list of all public or authorized user-specific posts with text, images, and metadata.
- GET /posts/:post_id - Returns detailed information for a specific post, including comments and likes.
- POST /posts - Allows authenticated users to create new posts, including text, images, and polls.
- PUT /posts/:post_id - Enables users to edit their existing posts, including privacy settings.
- DELETE /posts/:post_id - Allows users to delete their own posts.
- GET /comments/:post_id - Retrieves all comments associated with a specific post.
- POST /comments - Allows authenticated users to add comments to posts.
- DELETE /comments/:comment_id - Enables users to delete their own comments.
- POST /likes - Allows authenticated users to like a post.
- DELETE /likes/:like_id - Enables users to remove their likes.
- GET /messages - Retrieves the list of conversations for authenticated users.
- POST /messages - Allows users to send direct messages to other users.
- GET /notifications - Retrieves the list of notifications for authenticated users.
- POST /users/register - User registration.
- POST /users/login - User authentication.
- GET /users/:user_id - Retrieves detailed profile information for a user.
- PUT /users/:user_id - Allows authenticated users to update their profile information.
- POST /reports - Allows users to report inappropriate posts, comments, or messages.
# Route Interaction with Webpage Functionality
The React frontend will interact with the backend Express.js routes using asynchronous JavaScript (via Axios or Fetch). 
Examples include:

- Fetching Posts: On visiting the feed page, the React app will make a GET /posts request to the backend to display a list of posts.
- Viewing a Post: When a user clicks on a specific post, React will send a GET /posts/:post_id request to fetch and display detailed post information, including comments and likes.
- Creating and Editing Posts: Authenticated users will submit new posts or edit existing ones via POST /posts and PUT /posts/:post_id requests.
- Interacting with Comments and Likes: React will handle user interactions such as adding comments (POST /comments) or liking posts (POST /likes), sending the appropriate requests to the backend.
- Direct Messaging: The React app will allow users to view their conversations with a GET /messages request and send messages through POST /messages.
- User Profiles and Authentication: Registration and login operations will use the POST /users/register and POST /users/login endpoints, while authenticated users can update their profile information via PUT /users/:user_id.
# Additional Functionalities
This architecture will include:

- Authentication and Authorization: To manage user sessions and roles securely using JWTs.
- Input Validation and Error Handling: To ensure data integrity and a smooth user experience.
- Security Measures: Including secure password hashing and encrypted data storage for sensitive information.
- This architecture effectively separates frontend and backend responsibilities, leveraging React for dynamic user interactions and Express.js for server-side operations and data management.