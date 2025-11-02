# ARTECH Backend API Specification

## Authentication Endpoints

### POST /api/auth/register
Register a new user account
- **Body**: `{ email, password, name, role }`
- **Response**: `{ user, token }`
- **Roles**: student (default), instructor (requires approval)

### POST /api/auth/login
Authenticate user and receive JWT token
- **Body**: `{ email, password }`
- **Response**: `{ user, token }`

### POST /api/auth/refresh
Refresh expired JWT token
- **Headers**: `Authorization: Bearer <token>`
- **Response**: `{ token }`

### POST /api/auth/forgot-password
Request password reset
- **Body**: `{ email }`
- **Response**: `{ message }`

## User Management Endpoints

### GET /api/users/me
Get current user profile
- **Headers**: `Authorization: Bearer <token>`
- **Response**: `{ user, enrolledCourses, createdCourses }`

### PUT /api/users/me
Update current user profile
- **Headers**: `Authorization: Bearer <token>`
- **Body**: `{ name, bio, avatar_url, preferences }`
- **Response**: `{ user }`

### GET /api/users/:id
Get user by ID (SuperAdmin only)
- **Headers**: `Authorization: Bearer <token>`
- **Response**: `{ user }`

## Course Management Endpoints

### GET /api/courses
List all courses with filters
- **Query**: `?category=&type=&search=&page=&limit=`
- **Response**: `{ courses[], pagination }`

### GET /api/courses/:id
Get course details
- **Response**: `{ course, instructor, contents[], enrollmentCount }`

### POST /api/courses
Create new course (Instructor only)
- **Headers**: `Authorization: Bearer <token>`
- **Body**: `{ title, description, category, type, thumbnail }`
- **Response**: `{ course }`

### PUT /api/courses/:id
Update course (Instructor/Owner only)
- **Headers**: `Authorization: Bearer <token>`
- **Body**: `{ title, description, category, type, thumbnail }`
- **Response**: `{ course }`

### DELETE /api/courses/:id
Delete course (Instructor/Owner or SuperAdmin)
- **Headers**: `Authorization: Bearer <token>`
- **Response**: `{ message }`

## Enrollment Endpoints

### POST /api/enrollments
Enroll in a course
- **Headers**: `Authorization: Bearer <token>`
- **Body**: `{ courseId }`
- **Response**: `{ enrollment }`

### GET /api/enrollments/my-courses
Get user's enrolled courses
- **Headers**: `Authorization: Bearer <token>`
- **Response**: `{ enrollments[] }`

### PUT /api/enrollments/:id/progress
Update course progress
- **Headers**: `Authorization: Bearer <token>`
- **Body**: `{ progress, completedContent }`
- **Response**: `{ enrollment }`

## Content Management Endpoints

### GET /api/courses/:courseId/contents
Get course contents (Enrolled users only)
- **Headers**: `Authorization: Bearer <token>`
- **Response**: `{ contents[] }`

### POST /api/courses/:courseId/contents
Add content to course (Instructor/Owner only)
- **Headers**: `Authorization: Bearer <token>`
- **Body**: `{ title, type, url, description, order }`
- **Response**: `{ content }`

### PUT /api/contents/:id
Update content (Instructor/Owner only)
- **Headers**: `Authorization: Bearer <token>`
- **Body**: `{ title, type, url, description, order }`
- **Response**: `{ content }`

### DELETE /api/contents/:id
Delete content (Instructor/Owner only)
- **Headers**: `Authorization: Bearer <token>`
- **Response**: `{ message }`

## Admin Endpoints

### GET /api/admin/users
List all users (SuperAdmin only)
- **Headers**: `Authorization: Bearer <token>`
- **Response**: `{ users[] }`

### PUT /api/admin/users/:id/role
Update user role (SuperAdmin only)
- **Headers**: `Authorization: Bearer <token>`
- **Body**: `{ role }`
- **Response**: `{ user }`

### GET /api/admin/stats
Get platform statistics (SuperAdmin only)
- **Headers**: `Authorization: Bearer <token>`
- **Response**: `{ totalUsers, totalCourses, totalEnrollments, activeUsers }`