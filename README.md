Task Keeper Documentation

Table of Contents:
  Project Overview
  Features
  Project Structure
  Installation
  Usage
  Components
  Context
  Styling
  Routing
  Future Enhancements
  
Project Overview:
  Task Keeper is a React-based task management application that allows users to create, manage, and prioritize tasks. It includes user authentication, task filtering, and a responsive design for seamless device use.

Features:
1. User Authentication: Users can register, log in, and log out.
2. Task Management: Create, edit, delete, and mark tasks as completed.
3. Task Prioritization: Assign priorities (High, Medium, Low) to tasks.
4. Deadline Tracking: Add deadlines to tasks.
5. Filtering: Filter tasks by priority.
6. Responsive Design: Optimized for both desktop and mobile devices.

Project Structure:
to-do/
├── .gitignore
├── package.json
├── README.md
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── styles.css
│   └── ...
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── components/
│   │   ├── CreateArea.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── HomePage.jsx
│   │   ├── LandingPage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── Note.jsx
│   │   ├── Registration.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── styles/
│   │   ├── HomePage.css
│   │   ├── LandingPage.css
│   │   ├── LoginPage.css
│   │   ├── Registration.css
│   └── ...

Installation:
1. Clone the repository:
git clone https://github.com/your-repo/task-keeper.git
cd task-keeper

2. Install dependencies:
   npm install

3. Start the development server:
   npm start

Open the app in your browser at http://localhost:3000.

Usage: 
1. Authentication
  -> Register: Navigate to /register to create a new account.
  -> Login: Navigate to /login to log in with your credentials.
  -> Logout: Click the user icon in the header to log out.
2. Task Management
  -> Create a Task: Use the form on the homepage to add a new task with a title, description, priority, and deadline.
  -> Mark as Completed: Click the check icon on a task to mark it as completed.
  -> Delete a Task: Click the delete icon on a task to remove it.
3. Filtering
  -> Use the dropdown menu on the homepage to filter tasks by priority (High, Medium, Low).

Components:
1. App.jsx
  -> Entry point of the application.
  -> Configures routing and wraps the app with the AuthProvider.
2. Header.jsx
  -> Displays the app title and user account options (login/logout).
3. Footer.jsx
  -> Displays the footer with copyright information.
4. LandingPage.jsx
  -> Welcome page with a "Get Started" button that navigates to the login page.
5. LoginPage.jsx
  -> Allows users to log in with their credentials.
  -> Validates input and checks credentials against localStorage.
6. Registration.jsx
  -> Allows users to register a new account.
  -> Validates input and stores user data in localStorage.
7. HomePage.jsx
  -> Main page for managing tasks.
  -> Displays a list of tasks and includes the CreateArea component for adding new tasks.
8. CreateArea.jsx
  -> Form for creating new tasks.
  -> Includes fields for title, description, priority, and deadline.
9. Note.jsx
  -> Displays individual tasks with options to mark as completed or delete.

Context:
AuthContext.jsx
  -> Provides authentication state (user) and a method to update it (setUser).
  -> Used across the app to check if a user is logged in.
  
Styling:
  -> The app uses CSS for styling, with separate files for each component:
  -> Global Styles: styles.css
  -> Component-Specific Styles: Located in the src/styles/ directory.

Routing:
The app uses react-router-dom for navigation. Routes are defined in App.jsx:

Path	      Component	    Description
/	          LandingPage	  Welcome page
/home	      HomePage	    Main task management page
/login	    LoginPage	    Login page
/register	  Registration	Registration page

Future Enhancements
1. Edit Tasks: Add functionality to edit existing tasks.
2. Search: Implement a search bar to find tasks by title or content.
3. Notifications: Add reminders for tasks nearing their deadlines.
4. Dark Mode: Provide a dark mode option for better accessibility.
5. Backend Integration: Replace localStorage with a backend API for user authentication and task storage.

