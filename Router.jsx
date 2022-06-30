import { Route, Routes } from "react-router-dom";
import { Index } from "./src/pages/Index";
import { Login } from "./src/pages/Login";
import { Signup } from "./src/pages/Signup";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
