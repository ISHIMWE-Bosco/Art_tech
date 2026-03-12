import { Outlet } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";

const AdminDashboard = () => (
  <DashboardLayout role="admin">
    <Outlet />
  </DashboardLayout>
);

export default AdminDashboard;
