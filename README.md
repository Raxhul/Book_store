# 📚 Full Stack eBook Store

This is a complete full-stack application for an online eBook store. It includes a React frontend for users to browse and read books, and a Node.js + Express backend with MongoDB to manage the book data and API endpoints.

---

## 🗂️ Project Structure

```
📦 FullStack-eBook-Store
├── Client/                  # React Frontend
│   ├── Components/
│   │   └── Navbar.jsx
│   ├── Pages/
│   │   ├── About.jsx
│   │   ├── Blogs.jsx
│   │   └── Home.jsx
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── Home.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── nav.txt
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── Readme.md
│
├── Server/                  # Node.js Backend
│   ├── node_modules/
│   ├── .env
│   ├── .env_example
│   ├── .gitignore
│   ├── clip.txt
│   ├── Database.js
│   ├── index.js
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
```

---

## ⚙️ Tech Stack

### Frontend:

* React.js
* Vite
* Tailwind CSS
* React Router DOM

### Backend:

* Node.js
* Express.js
* MongoDB
* CORS
* dotenv
* Nodemon

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/FullStack-eBook-Store.git
```

### 2. Navigate to Client and install dependencies

```bash
cd Client
npm install
npm run dev   # Starts frontend on http://localhost:5173
```

### 3. Navigate to Server and install dependencies

```bash
cd ../Server
npm install
npx nodemon index.js   # Starts backend on http://localhost:5000
```

> Make sure to configure your `.env` in the Server folder with MongoDB connection string.

---

## 🌐 API Endpoints (Backend)

| Method | Endpoint     | Description             |
| ------ | ------------ | ----------------------- |
| GET    | `/books`     | Fetch all books         |
| POST   | `/books`     | Add a new book          |
| GET    | `/books/:id` | Fetch a book by ID      |
| PUT    | `/books/:id` | Update book information |
| DELETE | `/books/:id` | Delete a book           |

---

## 📷 Screenshots

*Add UI screenshots or a demo video link here.*

---

## 🛡 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

* Raghul RJ
* GitHub: [@Raxhul](https://github.com/Raxhul)
