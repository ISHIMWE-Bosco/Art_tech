# ARTECH - Interactive Learning Platform

## Overview
ARTECH is an interactive online learning platform designed specifically for primary school students in Africa. The platform provides quality education through engaging courses in English, typing, music, and art.

## Current Implementation
This is the frontend implementation. The full system requires a custom backend stack (see Backend Architecture below).

## Features
- **Four Core Courses**: English Language, Typing Skills, Music Education, Art & Creativity
- **Interactive Learning**: Multimedia content, quizzes, and exercises
- **Progress Tracking**: Detailed reports and achievement system
- **Offline Access**: Download lessons for learning without internet
- **Multi-device Support**: Accessible on computers, tablets, and smartphones
- **User Authentication**: Sign up, login, and account management
- **Role-Based Access**: SuperAdmin, Instructor, and Student roles
- **Course Management**: Create, publish, and enroll in courses
- **Content Management**: Videos, documents, and interactive materials
- **Search & Filters**: Course discovery by category and type

## Pages
- **Landing Page** (`index.html`): Home, courses overview, features
- **Dashboard** (`dashboard.html`): Student dashboard with progress tracking

## Frontend Technology
- React 18 (Production)
- TailwindCSS for styling
- Chart.js for data visualization
- Lucide icons

## Backend Architecture (To Be Implemented)
### Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL
- **Authentication**: JWT (JSON Web Tokens)
- **CI/CD**: GitHub Actions
- **DevOps**: Docker, Terraform (optional)

### Key Features
1. **User Management**
   - User registration and authentication
   - JWT-based secure sessions
   - Password encryption and recovery

2. **Role-Based Access Control**
   - **SuperAdmin**: Full system access, user management, platform configuration
   - **Instructor**: Course creation, content management, student progress monitoring
   - **Student**: Course enrollment, content viewing, progress tracking

3. **Course System**
   - Course CRUD operations
   - Course categories and types
   - Content management (videos, documents, quizzes)
   - Enrollment system
   - Progress tracking

4. **API Endpoints** (Planned)
   - `/api/auth/*` - Authentication endpoints
   - `/api/users/*` - User management
   - `/api/courses/*` - Course operations
   - `/api/enrollments/*` - Enrollment management
   - `/api/content/*` - Content delivery
   - `/api/profiles/*` - User profile management

5. **Database Schema** (Planned)
   - users (id, email, password_hash, role, created_at)
   - courses (id, title, description, instructor_id, category, type)
   - enrollments (id, user_id, course_id, progress, enrolled_at)
   - content (id, course_id, type, url, order)
   - profiles (id, user_id, bio, avatar_url, preferences)

## Purpose
Closing the gap for quality education in underprivileged communities across Africa by providing accessible, interactive learning experiences for primary school students.

## Last Updated
November 2, 2025
