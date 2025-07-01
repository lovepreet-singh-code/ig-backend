# 📸 Instagram Clone Backend (Microservices Architecture)

This is a scalable, high-performance backend system for an Instagram-like application built using **Node.js**, **TypeScript**, **Docker**, and **Microservices Architecture**.

---

## 🏗️ Tech Stack

- **Node.js** + **Express**
- **TypeScript**
- **MongoDB** (with Mongoose)
- **Redis** (for caching)
- **Kafka** (for event-driven communication)
- **Docker & Docker Compose**
- **JWT Authentication**
- **Rate Limiting**, **Caching**, **Validation**
- **Prettier**, **ESLint**, **Husky**

---

## 📦 Services

| Service              | Description                              |
|----------------------|------------------------------------------|
| `user-service`       | Auth, profile, follow/unfollow, caching  |
| `post-service`       | CRUD for posts, media integration        |
| `like-service`       | Like/unlike system                       |
| `comment-service`    | Comments on posts                        |
| `notification-service` | Kafka-based user notifications         |
| `feed-service`       | User timeline feed                       |
| `chat-service`       | Real-time messaging (WIP)                |
| `gateway`            | API Gateway with NGINX proxy             |
| `common`             | Shared types, constants, utils           |

---

## 🚀 Run the Project

```bash
docker-compose up --build
