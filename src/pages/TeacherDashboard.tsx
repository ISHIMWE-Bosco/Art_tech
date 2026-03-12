import { Outlet } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";

const TeacherDashboard = () => (
  <DashboardLayout role="teacher">
    <Outlet />
  </DashboardLayout>
);

export default TeacherDashboard;
