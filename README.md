# Art_tech

Art_tech is a role-based digital learning platform designed for primary school learners and school staff. It provides an engaging interface for students to build digital skills, while giving teachers and administrators dedicated dashboards to manage courses, monitor activity, and review progress.

## What This Platform Is

The platform is an educational web application focused on digital literacy and creative learning. It is built around three user roles:

- Students learn through interactive course pages, quizzes, progress tracking, and leaderboard views.
- Teachers manage courses, classes, lessons, grading workflows, and classroom analytics.
- Administrators monitor users, courses, reports, settings, and overall platform growth.

The current project is a frontend application with demo data and browser-based state persistence for courses.

## Main Functions

- Landing page introducing the platform and its learning areas
- Demo login with role selection for student, teacher, and admin access
- Student dashboard with courses, quizzes, leaderboard, and progress tracking
- Teacher dashboard with course management, class overview, lessons, grading, and analytics
- Admin dashboard with user management, course overview, reports, and platform settings
- Shared notifications and profile pages for each role
- Course creation and removal through a shared context
- Local persistence of courses using `localStorage`
- Responsive UI for desktop and mobile use
- Light and dark theme support

## Learning Areas Highlighted

- Typing
- English
- Art and Design
- Microsoft Office / digital productivity skills

## Technology Used

This project is made with:

- React 18
- TypeScript
- Vite
- React Router DOM
- Tailwind CSS
- shadcn/ui
- Radix UI
- Framer Motion
- Recharts
- TanStack React Query
- React Hook Form
- Zod
- Vitest
- Playwright

## Project Structure

```text
src/
  components/     Reusable UI and layout components
  context/        Shared course state management
  pages/          Landing page, login page, and role-based dashboard pages
  hooks/          Custom React hooks
  test/           Test setup and sample tests
public/           Static assets
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

### Run Tests

```bash
npm run test
```

## Notes

- This version uses demo content and does not include a backend API.
- Added and removed courses are stored in the browser using `localStorage`.
- The login flow is for dashboard exploration and routes users by selected role.

## Author

Bosco Ishimwe
