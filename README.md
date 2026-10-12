# WanderLust — Homestay Booking Platform

WanderLust is a full-stack web application inspired by Airbnb. It allows users to explore homestay listings and manage property information. This project is currently under development.

## Features

- View property listings
- Create new listings
- Edit existing listings
- View individual listing details
- Delete listings
- Server-side rendering with EJS
- Backend routing and error handling

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Templating Engine:** EJS
- **Version Control:** Git and GitHub

## Project Structure

```text
WanderLust/
├── Models/
│   └── listing.js
├── init/
│   ├── data.js
│   └── index.js
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
├── utils/
│   ├── expressError.js
│   └── wrapAsync.js
├── views/
│   ├── includes/
│   ├── layouts/
│   └── listings/
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Installation and Setup

### Prerequisites

- Node.js
- npm
- MongoDB

### 1. Clone the Repository

```bash
git clone https://github.com/gayatri-Patil14/WanderLust.git
```

### 2. Navigate to the Project

```bash
cd WanderLust
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file and add your MongoDB connection string using the environment variable expected by your application.

Never upload database credentials or secrets to GitHub.

### 5. Run the Application

```bash
node app.js
```

Open the local URL configured in your application.

## Learning Outcomes

- RESTful API development
- CRUD operations
- MongoDB integration
- Backend development using Express.js
- Error handling and validation
- Git and GitHub version control

## Future Enhancements

- User authentication
- Search and filtering
- Booking management
- Reviews and ratings
- UI improvements

## Author

**Gayatri**

Information Science and Engineering Student

[GitHub Profile](https://github.com/gayatri-Patil14)

---

*WanderLust is an ongoing personal project focused on full-stack web development.*