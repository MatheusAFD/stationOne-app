import { Route, Routes } from "react-router-dom";

import { Index } from "./src/pages/Index/Index";
import { TabMenu } from "./src/components/TabMenu";
import { Login } from "./src/pages/Account/Login";
import { Signup } from "./src/pages/Account/Signup";
import { PasswordReset } from "./src/pages/Account/PasswordReset";
import { Food } from "./src/pages/Categories/Food";
import { Orders } from "./src/pages/Categories/Orders";
import { Profile } from "./src/pages/Categories/Profile";

export function Router() {
  return (
    <Routes>
      <Route path="*" element={<Index />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/resetpassword" element={<PasswordReset />} />
      <Route path="/home/food" element={[<Food />, <TabMenu />]} />
      <Route path="/home/order" element={[<Orders />, <TabMenu />]} />
      <Route path="/home/profile" element={[<Profile />, <TabMenu />]} />
    </Routes>
  );
}
