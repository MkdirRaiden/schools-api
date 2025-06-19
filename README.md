# 📘 School Management API

A RESTful Node.js + Express + MySQL API that allows users to:

- 🏫 Add schools with location info
- 📍 List schools sorted by proximity using the Haversine formula

---

## 📦 Tech Stack

- Node.js
- Express.js
- MySQL (hosted on Railway)
- dotenv for environment variables
- express-async-handler for async error handling
- CORS for cross-origin access

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/school-api.git
cd school-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure `.env`

Create a `.env` file:

```env
PORT=5000

DB_HOST=your_mysql_host
DB_PORT=your_mysql_port
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=your_database_name
```

### 4. Start the Server

```bash
npm run dev
```

Server runs at `http://localhost:5000`

---

## 📬 API Endpoints

### ▶️ Add School

**POST** `/api/schools`

**Body:**

```json
{
  "name": "Lumen High School",
  "address": "Sunlight Street",
  "latitude": 26.12,
  "longitude": 91.56
}
```

**Response:**

```json
{
  "success": true,
  "message": "School added successfully.",
  "schoolId": 1
}
```

---

### 📍 List Schools by Proximity

**GET** `/api/schools?latitude=26.12&longitude=91.56`

**Response:**

```json
{
  "success": true,
  "total": 2,
  "schools": [
    {
      "id": 1,
      "name": "Lumen High School",
      "address": "Sunlight Street",
      "latitude": 26.12,
      "longitude": 91.56,
      "distance": 0
    }
  ]
}
```

---

## 🧪 Postman Collection

Import from:

- [link here](https://drive.google.com/file/d/1OUEsTiET4U9lHso4Uhux_VL9CDhxTCq5/view?usp=sharing)] or `school-api/postman/postman_collection.json`

---

## 👤 Author

**Muktadir Ahmed**  
Full-stack developer | Passionate about clean architecture
