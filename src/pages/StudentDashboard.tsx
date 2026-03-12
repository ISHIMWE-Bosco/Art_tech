import { Outlet } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";

const StudentDashboard = () => (
  <DashboardLayout role="student">
    <Outlet />
  </DashboardLayout>
);

export default StudentDashboard;
