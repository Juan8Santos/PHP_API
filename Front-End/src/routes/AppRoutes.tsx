import { Routes, Route } from "react-router-dom";

import Home from "../pages/homePage/HomePage";
import AuthPage from "../pages/authPage/AuthPage";
import ManageUserPage from "../pages/manageUserPage/ManageUserPage";
import EditPage from "../pages/editPage/EditPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/manage" element={<ManageUserPage />} />
      <Route path="/edit/:id" element={<EditPage />} />
    </Routes>
  );
}