# 📸 Instagram Clone - Backend Microservices

This is a full-featured backend system for an Instagram-like application built using microservices architecture. Each service is built with TypeScript, Docker, and follows clean modular design.

---

## 🧱 Services (Microservices)

| Service          | Description                              |
|------------------|------------------------------------------|
| user-service     | Handles authentication, profile, follow  |
| post-service     | Handles creating, editing, viewing posts |
| like-service     | Tracks likes on posts                    |
| comment-service  | Manages comments                         |
| feed-service     | Builds the home feed                     |
| notification-service | Sends Kafka-based notifications     |
| media-service    | Handles Cloudinary uploads               |
| gateway-service  | API Gateway for routing                  |
| common-service   | Shared Kafka, types, configs             |

---

## ✅ Features (user-service)

- JWT Auth (register/login)
- Profile management
- Follow/unfollow system
- Followers & following list
- Search users by username
- Dockerized and environment-configured
- Centralized error handling
- Future support for Kafka events (follow/notify)

---

## 🔧 Technologies Used

- TypeScript
- Express.js
- MongoDB + Mongoose
- Redis
- Kafka (planned)
- Docker & Docker Compose
- ESLint + Prettier
- Husky + Commit Lint

---

## 📦 Getting Started

```bash
git clone https://github.com/your-name/ig-backend.git
cd user-service
npm install
cp .env.example .env
npm run dev
