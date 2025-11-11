# 📰 Ganesh Tech News - Tech Insights at Your Fingertips

## Project Title: Ganesh Tech News
**Goal:** Create a platform that collects, filters, and displays the latest technology news automatically from various sources (e.g., Google News, TechCrunch, Wired, etc.), with daily updates.

## 🌟 Key Features
*   📰 Fetch latest tech news via APIs
*   🔍 Search functionality for keywords
*   🌙 Dark/light theme UI
*   📱 Responsive design
*   🌐 Progressive Web App (PWA) for offline access
*   💾 Save favorite news articles
*   ⏳ Loading skeletons for better UX
*   🗂️ Filter by category (AI, gadgets, software, startups, etc.)

---
## 💻 Technologies Used
**Frontend:**
*   **React.js:** For building the user interface.
*   **Tailwind CSS:** For styling and responsive design.
*   **React Router DOM:** For client-side routing.
*   **Axios:** For making HTTP requests to the backend.

**Backend:**
*   **Node.js (Express):** For building the RESTful API.
*   **Mongoose:** For MongoDB object modeling.
*   **Axios:** For making HTTP requests to the NewsAPI.org.
*   **Dotenv:** For managing environment variables.
*   **CORS:** For handling Cross-Origin Resource Sharing.

**Database:**
*   **MongoDB:** NoSQL database for storing favorite articles.

**API Source:**
*   **NewsAPI.org:** To fetch news articles.

**Containerization:**
*   **Docker & Docker Compose:** For containerizing the application.

---
## 📁 Folder Structure
```
GaneshTechNews/
├── backend/
│   ├── app.js
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── utils/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ... (other React files)
│   ├── package.json
│   └── ... (other frontend files)
├── docker-compose.yml
├── README.md
└── .env
```

---
## ⚡ Setup Instructions

### 1. Clone the repository:
```bash
git clone https://github.com/Ganesh0181/Ganesh-Tech-News.git
cd Ganesh-Tech-News
```

### 2. Backend Setup:
Navigate to the `backend` directory, install dependencies, and set up environment variables.
```bash
cd backend
npm install
```
Create a `.env` file in the root of the project (Ganesh-Tech-News/) with your News API key and MongoDB connection string:
```
NEWS_API_KEY=your_api_key_here
PORT=5000
MONGODB_URI=your_mongodb_connection_string_here
```
You can get a free API key from [NewsAPI.org](https://newsapi.org/).

### 3. Frontend Setup:
Navigate to the `frontend` directory and install dependencies.
```bash
cd ../frontend
npm install
```

### 4. Run with Docker Compose (Recommended):
Ensure Docker is installed and running on your system.
```bash
cd .. # Go back to the project root
docker-compose up --build
```
The frontend will be accessible at `http://localhost:3000` and the backend API at `http://localhost:5000`.

### 5. Run Locally (without Docker):

**Backend:**
```bash
cd backend
npm start # Or node app.js
```
The backend server will run on `http://localhost:5000`.

**Frontend:**
```bash
cd frontend
npm start
```
The frontend development server will run on `http://localhost:3000`.

---
## 🔍 How to Use
*   **Browse News:** Visit the homepage to see the latest tech news.
*   **Search:** Use the search bar in the navigation to find articles by keywords.
*   **Toggle Theme:** Switch between dark and light mode using the button in the navigation.
*   **Favorites:** Save articles to your favorites list and view them on the "Favorites" page.

---
## 🚀 API Endpoints
*   `GET /api/news?q={query}&category={category}`: Fetches tech news articles. `query` is optional, defaults to 'technology'. `category` is optional.
*   `GET /api/favorites`: Retrieves all saved favorite articles.
*   `POST /api/favorites`: Adds a new article to favorites. Requires article details in the request body.
*   `DELETE /api/favorites/:id`: Removes a favorite article by its ID.

---
## 🐳 Docker Usage
*   `docker-compose up --build`: Builds and starts both frontend and backend services.
*   `docker-compose down`: Stops and removes the containers, networks, and volumes.

---
## 💡 Future Enhancements
*   **Email newsletter:** (send daily top 5 tech news)
*   **Admin dashboard:** (add custom posts)

---
## 📝 Documentation (Phase 8)
This `README.md` serves as the primary documentation for the project.