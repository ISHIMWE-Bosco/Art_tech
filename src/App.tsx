import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CoursesProvider } from "@/context/CoursesContext";
import ThemeProvider from "@/components/ThemeProvider";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import {
  StudentCoursesPage,
  StudentLeaderboardPage,
  StudentOverviewPage,
  StudentProgressPage,
  StudentQuizzesPage,
} from "./pages/student/StudentSections";
import {
  TeacherAnalyticsPage,
  TeacherClassesPage,
  TeacherCoursesPage,
  TeacherGradingPage,
  TeacherLessonsPage,
  TeacherOverviewPage,
} from "./pages/teacher/TeacherSections";
import {
  AdminCoursesPage,
  AdminOverviewPage,
  AdminReportsPage,
  AdminSettingsPage,
  AdminUsersPage,
} from "./pages/admin/AdminSections";
import { NotificationsPage, ProfilePage } from "./pages/dashboard/SharedSections";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <CoursesProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />

              <Route path="/dashboard/student" element={<StudentDashboard />}>
                <Route index element={<StudentOverviewPage />} />
                <Route path="courses" element={<StudentCoursesPage />} />
                <Route path="quizzes" element={<StudentQuizzesPage />} />
              <Route path="leaderboard" element={<StudentLeaderboardPage />} />
              <Route path="progress" element={<StudentProgressPage />} />
              <Route path="notifications" element={<NotificationsPage role="student" />} />
              <Route path="profile" element={<ProfilePage role="student" />} />
            </Route>

              <Route path="/dashboard/teacher" element={<TeacherDashboard />}>
                <Route index element={<TeacherOverviewPage />} />
                <Route path="courses" element={<TeacherCoursesPage />} />
                <Route path="classes" element={<TeacherClassesPage />} />
              <Route path="lessons" element={<TeacherLessonsPage />} />
              <Route path="grading" element={<TeacherGradingPage />} />
              <Route path="analytics" element={<TeacherAnalyticsPage />} />
              <Route path="notifications" element={<NotificationsPage role="teacher" />} />
              <Route path="profile" element={<ProfilePage role="teacher" />} />
            </Route>

              <Route path="/dashboard/admin" element={<AdminDashboard />}>
                <Route index element={<AdminOverviewPage />} />
                <Route path="users" element={<AdminUsersPage />} />
              <Route path="courses" element={<AdminCoursesPage />} />
              <Route path="reports" element={<AdminReportsPage />} />
              <Route path="settings" element={<AdminSettingsPage />} />
              <Route path="notifications" element={<NotificationsPage role="admin" />} />
              <Route path="profile" element={<ProfilePage role="admin" />} />
            </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CoursesProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
