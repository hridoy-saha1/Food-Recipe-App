# 🍲 Food Request

A full-featured Food Request web application where users can discover, add, manage,Food request and explore  from other food lovers around the world.

🔗 **Live Site**: [https://food-project-75ea0.web.app/my-recipes]  
🛠 **Repo**:[https://github.com/Programming-Hero-Web-Course4/b11a11-client-side-hridoy8220]
**server link**: [https://food-request.vercel.app]
**server repo**:[https://github.com/Programming-Hero-Web-Course4/b11a11-server-side-hridoy8220]

---

## 🚀 Features

- 🔐 **User Authentication with Firebase**
  - Login, Register, and Google Sign-In integration with Firebase Authentication.
  - Protected routes for adding, editing, and viewing personal recipes.

- 🍽️ **Add, Update & Delete Recipes**
  - Users can add new recipes with detailed information, images, and categorized tags.
  - Full CRUD functionality for the logged-in user's own recipes.

- ❤️ **Highest Quantity & Available food**
    - Only Available food shown home page
  - Top 6  highest quantity food are dynamically displayed on the home page.

- 🔍 **Food Filtering**
  - Users can filter recipes by cuisine type such as Italian, Mexican, Indian, etc.
  
- 🎨 **Responsive & Beautiful UI**
  - Fully responsive layout for mobile, tablet, and desktop.
  - Custom UI using Tailwind CSS and animation effects with `lottie-react` and `react-awesome-reveal`.

---
# Highlights
🌐 JWT token securely stored in local storage and sent with protected API calls.

✅ Protected routes redirect unauthenticated users to login.

🛡️ Backend verifies token before allowing data access (secured with middleware).

🎯 Custom 404 page with food-themed design.

💡 All user notifications handled using SweetAlert2 or Toastify.

## ⚙️ Tech Stack

- **Frontend**: React, React Router, Tailwind CSS, Lottie React, Toastify, SweetAlert2
- **Backend**: Node.js, Express.js, MongoDB (CRUD operations)
- **Auth**: Firebase Authentication
- **Deployment**: Netlify (client), Vercel (server), MongoDB Atlas (database)

---

## 📌 Notes

- Environment variables are used to hide sensitive Firebase and MongoDB credentials.
- No default alert boxes used – all notifications shown via toast or SweetAlert2.
- A custom 404 page with food-themed design is included.

---

Feel free to clone and try out the project. Contributions and feedback are welcome!


