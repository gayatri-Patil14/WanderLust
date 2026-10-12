# 🏡 WanderLust — Homestay Booking Platform

WanderLust is a full-stack web application inspired by Airbnb that allows users to explore homestay listings and manage property information. The project is being developed to gain practical experience in full-stack web development, RESTful APIs, and database integration.

## 🚀 Features

- View available property listings.
- Create new property listings.
- Edit existing listing details.
- View individual listing information.
- Delete listings.
- Server-side rendering using EJS templates.
- Responsive user interface.
- Backend routing and error handling.

*Note: The project is currently under development. Features may be added or improved over time.*

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript, Bootstrap
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Templating Engine:** EJS
- **Version Control:** Git and GitHub

## 📂 Project Structure

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
└── .gitignore
```

## ⚙️ Installation and Setup

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- MongoDB

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual GitHub repository URL.

### 2. Navigate to the project directory

```bash
cd WanderLust
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory and add your MongoDB connection string:

```env
ATLASDB_URL=your_mongodb_connection_string
```

Use the variable name expected by your application. Never commit database credentials or other secrets to GitHub.

### 5. Start the application

Run the command configured for your project:

```bash
node app.js
```

Open the local URL configured in your application in your browser, for example:

```text
http://localhost:8080
```

## 🎯 Learning Outcomes

Through WanderLust, I am developing practical skills in:

- Building RESTful APIs using Express.js.
- Implementing CRUD operations.
- Integrating MongoDB with a Node.js application.
- Organizing routes, models, and views.
- Handling errors and validating data.
- Using Git and GitHub for version control.

## 🔮 Future Enhancements

- User authentication and authorization.
- Search and filtering functionality.
- Booking and reservation management.
- Reviews and ratings.
- Improved UI and user experience.

## 👩‍💻 Author

**Gayatri**

Information Science and Engineering Student

GitHub: https://github.com/gayatri-Patil14

*WanderLust is an ongoing personal project developed for learning and practical application of full-stack web development concepts.*
