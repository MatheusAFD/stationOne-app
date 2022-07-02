import { Route, Routes } from "react-router-dom";
import { TabMenu } from "./src/components/TabMenu";

import { Index } from "./src/pages/Index";
import { Login } from "./src/pages/Login";
import { Signup } from "./src/pages/Signup";

import { Food } from "./src/pages/Food";
import { Orders } from "./src/pages/Orders";
import { Profile } from "./src/pages/Profile";
import { PasswordReset } from "./src/pages/PasswordReset";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/resetpassword" element={<PasswordReset />} />
      <Route path="/home" element={[<Food />, <TabMenu />]} />
      <Route path="/home/order" element={[<Orders />, <TabMenu />]} />
      <Route path="/home/profile" element={[<Profile />, <TabMenu />]} />
    </Routes>
  );
}
