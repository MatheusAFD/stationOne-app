import { Route, Routes } from "react-router-dom";
import { Login } from "./src/pages/Login";
import { Signup } from "./src/pages/Signup";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}
